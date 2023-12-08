const express = require("express");
const http = require("http");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const { initializeAPI } = require("./server/api");
const {
  initializeMariaDB,
  initializeDBSchema,
  executeSQL,
} = require("./server/database");

// Create the express server
const app = express();
const server = http.createServer(app);

app.use(express.json());


// create a livereload server
const env = process.env.NODE_ENV || "development";
if (env !== "production") {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  // use livereload middleware
  app.use(connectLiveReload());
}

// deliver static files from the client folder like css, js, images
app.use(express.static("client"));

// route for the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/scripts/index.html");
});
// route for the rooms page
app.get("/rooms", (req, res) => {
  res.sendFile(__dirname + "/client/scripts/rooms/roomsDetail/roomsDetail.html");
});
// route for the reservation page from rooms
app.get("/rooms/reservation", (req, res) => {
  res.sendFile(__dirname + "/client/scripts/rooms/roomsReservirung/reservierung.html");
});
// route for the login page
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/client//scripts/login/loginseite.html");
});
// route for the parking page
app.get("/parking", (req, res) => {
  res.sendFile(__dirname + "/client/scripts/parkplätze/parkplatzDetail/parkplatzDetail.html");
});
// route for the reservation page from parking
app.get("/parking/reservation", (req, res) => {
  res.sendFile(__dirname + "/client/scripts/parkplätze/parkplatzReservirung/parkplatz.html");
});


// Initialize the REST api
initializeAPI(app);

// Allowing top-level await
(async function () {
  // Initialize the database
  initializeMariaDB();
  await initializeDBSchema();
  const testDatabaseConnection = async () => {
    const result = await executeSQL("SELECT * FROM reservationRooms;");
    console.log(result);
  };
  // TODO: REMOVE!!!! test the database connection
  await testDatabaseConnection();
  //start the web server
  const serverPort = process.env.PORT || 3000;
  server.listen(serverPort, () => {
    console.log(
      `Express Server started on port ${serverPort} as '${env}' Environment`
    );
  });
})();

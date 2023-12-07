const express = require("express");
const http = require("http");
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
const { initializeAPI } = require("./server/api");
const {
  initializeMariaDB,
  initializeDBSchema,
  executeSQL,
} = require("./server/database");

// Create the express server
const app = express();
const server = http.createServer(app);

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
// Initialize the REST api
initializeAPI(app);

// Allowing top-level await
(async function () {
  const serverPort = process.env.PORT || 3000;
  server.listen(serverPort, () => {
    console.log(
      `Express Server started on port ${serverPort} as '${env}' Environment`
    );
  });
})();

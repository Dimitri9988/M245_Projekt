const { executeSQL } = require("./database");

const initializeAPI = (app) => {
  app.post("/api/roomReservation", postRoomReservation);
  app.post("/api/parkingspotReservation", postParkingspotReservation);
};

const postRoomReservation = async (req, res) => {
  try {
    const { room, date, timefrom, timeto } = req.body;
    console.log(room + " / " + date + " / " + timefrom + " / " + timeto);
    // Example of inserting data into the 'reservation' table
    await executeSQL(
      "INSERT INTO reservation (room, date, fromtime, totime) VALUES (?, ?, ?, ?)",
      [room, date, timefrom, timeto]
    );
    res.status(200).send("Room reservation successful");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const postParkingspotReservation = async (req, res) => {
  try {
    const { parkspot, date, timefrom, timeto } = req.body;
    console.log(parkspot + " / " + date + " / " + timefrom + " / " + timeto);
    // Example of inserting data into the 'parkingspotReservation' table
    await executeSQL(
      "INSERT INTO parkingspotReservation (parkspot, date, fromtime, totime) VALUES (hallo, hallo, hallo, hallo)",
      [parkspot, date, timefrom, timeto]
    );
    res.status(200).send("Parkingspot reservation successful");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};


module.exports = { initializeAPI };

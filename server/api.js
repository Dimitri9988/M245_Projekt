const { executeSQL } = require("./database");


const initializeAPI = (app) => {
  app.post("/api/roomReservation", postRoomReservation);
  app.post("/api/parkingspotReservation", postParkingspotReservation);
  app.get("/api/getReservations", getReservations);
  app.get("/api/getReservationsParking", getReservationsParking);
};

const postRoomReservation = async (req, res) => {
  const { room, date, timefrom, timeto } = req.body;
  const sqlRoom = room
  const sqlDate = date
  const sqlTimefrom = timefrom
  const sqlTimeto = timeto


  const sqlQuery = `INSERT INTO reservationRooms (room, date, fromtime, totime) VALUES ('${sqlRoom}', '${sqlDate}', '${sqlTimefrom}', '${sqlTimeto}')`;
  // Verwenden Sie executeSQL statt connection.query
  console.log(sqlQuery)
  await executeSQL(sqlQuery);

};


const postParkingspotReservation = async (req, res) => {
  const { parkspot, date, timefrom, timeto } = req.body;
  const sqlParkspot = parkspot
  const sqlDate = date
  const sqlTimefrom = timefrom
  const sqlTimeto = timeto


  const sqlQuery = `INSERT INTO reservationParkingSpots (parkingspot, date, fromtime, totime) VALUES ('${sqlParkspot}', '${sqlDate}', '${sqlTimefrom}', '${sqlTimeto}')`;
  // Verwenden Sie executeSQL statt connection.query
  console.log(sqlQuery)
  await executeSQL(sqlQuery);
};


const getReservations = async (req, res) => {
  const getRoomRes = await executeSQL('SELECT * FROM reservationRooms');
  const result = getRoomRes;

  res.json(result);

}


const getReservationsParking = async (req, res) => {
  const getParkRes = await executeSQL('SELECT * FROM reservationParkingSpots');
  const result = getParkRes;

  res.json(result);

}
module.exports = { initializeAPI, getReservations };

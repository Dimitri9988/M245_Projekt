const { text } = require("express");

const initializeAPI = (app) => {
  // default REST api endpoint
  app.post("/api/roomReservation", postRoomReservation);
};

const postRoomReservation = async (req, res) => {
  const {room, date, timefrom, timeto} = req.body;
  console.log(room)
  console.log(date)
  console.log(timefrom)
  console.log(timeto)
};

module.exports = { initializeAPI };
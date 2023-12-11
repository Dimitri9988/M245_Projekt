let pool = null;

const initializeMariaDB = () => {
  const mariadb = require("mariadb");
  pool = mariadb.createPool({
    database: process.env.DB_NAME || "mychat",
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "mychat",
    password: process.env.DB_PASSWORD || "mychatpassword",
    connectionLimit: 10,
  });
};


const executeSQL = async (query) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await conn.query(query);
    return res;
  } catch (err) {
    console.error(err);
    throw err; // Throw the error to handle it in the calling function
  } finally {
    if (conn) conn.release();
  }
};

const initializeDBSchema = async () => {
  const reservationRoomsTableQuery = `
  CREATE TABLE IF NOT EXISTS reservationRooms (
    id INT NOT NULL AUTO_INCREMENT,
    room VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    fromtime VARCHAR(255) NOT NULL,
    totime VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );`;
  await executeSQL(reservationRoomsTableQuery);
  const reservationParkingSpotsTableQuery = `
  CREATE TABLE IF NOT EXISTS reservationParkingSpots (
    id INT NOT NULL AUTO_INCREMENT,
    parkingspot VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    fromtime VARCHAR(255) NOT NULL,
    totime VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );`;
  await executeSQL(reservationParkingSpotsTableQuery);
};

module.exports = { executeSQL, initializeMariaDB, initializeDBSchema };

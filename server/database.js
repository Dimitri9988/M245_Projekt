let pool = null;

const initializeMySQL = () => {
  const mysql = require("mysql2/promise"); // Use mysql2 instead of mysql
  pool = mysql.createPool({
    database: process.env.DB_NAME || "mychat",
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "mychat",
    password: process.env.DB_PASSWORD || "mychatpassword",
    connectionLimit: 5,
  });
};

const executeSQL = async (query, params = []) => {
  if (!pool) {
    throw new Error("Database pool not initialized");
}

  let conn;
  try {
    conn = await pool.getConnection();
    const [res] = await conn.query(query, params);
    return res;
  } catch (err) {
    console.error('Error executing SQL query:', err.message);
    throw err;
  } finally {
    if (conn) conn.release();
  }
};


const initializeDBSchema = async () => {
  const reservationTableQuery = `
    CREATE TABLE IF NOT EXISTS reservation (
      id INT NOT NULL AUTO_INCREMENT,
      room VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL,
      fromtime VARCHAR(255) NOT NULL,
      totime VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    );
  `;
  await executeSQL(reservationTableQuery);

  const testTableQuery = `
    CREATE TABLE IF NOT EXISTS test (
      id INT NOT NULL AUTO_INCREMENT,
      user_id INT NOT NULL,
      message VARCHAR(255) NOT NULL,
      timestamp VARCHAR(255) NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `;
  await executeSQL(testTableQuery);
};

module.exports = { executeSQL, initializeMySQL, initializeDBSchema };

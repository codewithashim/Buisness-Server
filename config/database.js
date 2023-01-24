// ==> Creating a Connection pool:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  
  pool.on("connect", () => {
    console.log("DB connection established successfully !");
  });
  
const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbConnection");
const routes = require("./Routes/index.js");
const config = require("./config/config");

const app = express();


app.use("/v1", routes);


/** Database connection */
connectDB()

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});
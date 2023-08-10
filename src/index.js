const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demo.html',function(err,data){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data); res.end(); });
  }).listen(3000);

// express js
// const express = require("express")
// const app = express()
// app.listen(8080)

/** upload image */
// app.use(express.static(`./public`));

app.use("/v1", routes);

/** Database connection */
connectDB()

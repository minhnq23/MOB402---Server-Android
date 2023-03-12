var http = require("http");
var uc = require("upper-case");
var fs = require("fs");
const express = require("express");
const app = express();
var dt = require("./uniTest");
var caculator = require("./Caculator");
const { type } = require("os");

function showInfo(mes) {
  if (typeof mes === "string") {
    console.log(mes.toUpperCase());
  }
}
http
  .createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write(uc.upperCase(`Hello World! 986 \n hahaha`));
    // res.write(uc.upperCase(`\nHello World! 113 \n hahaha`));
    // res.end();

    fs.rename("test.html", "test.html", function (err) {
      if (err) throw err;
      console.log("File Renamed!");
    });
    // fs.readFile("test.html", function (err, data) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   console.log("start file");
    //   return res.end();
    // });

    // fs.unlink("del.txt", function (err) {
    //   if (err) throw err;
    //   console.log("File deleted!");
    // });

    // app.get("/", function (request, response) {
    //   response.sendFile("D:studyServer\node Untitled-1.html");
    // });
    // showInfo("hihi");
    // showInfo(76);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, world!\n");
    res.write(uc.upperCase(`Thoi gian hien tai: ` + dt.myDateTime() + " "));
    res.write(uc.upperCase(`\n Tong: ` + caculator.AddNumber(5, 5)));
    res.end();
  })
  .listen(8080);

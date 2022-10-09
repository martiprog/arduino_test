var express = require("express");
var socketIo = require("socket.io");
var http = require("http");
var a = "";
var c = 1;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
var counter = 0;
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/web/index.html");

});


const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

// Create a port
const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
}).setEncoding('utf-8')

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', function (data) {
    io.emit("ans", data);
    console.log(data);
})
// port.on("data", function (data) {
// if (data != "") {
// if (data != " ") {
// a += data;
// a += data
// window.c += 1;
// // if (a.includes(' ') == true || a.includes('') == true) {
// //     io.emit("ans", data);
// //     console.log(a);
// //     a = "";
// console.log(c);
// }
// port.write("s");
// }
// }n
// })
// )
if (c >= 3) {
    io.emit("ans", data);
    console.log(a);
}
app.use(express.static(__dirname + '/web/'));
io.on("connection", function (socket) {
    console.log("new socket connection!");
    socket.on("data", function (g) {
        // console.log(g);
        // counter = counter + 1;
        // socket.emit("count", counter)

        port.write("c");
    });
    // socket.on('i am client', console.log);


    // io.emit("data", "data");

});
console.log("dd");



server.listen(process.en.PORT || 3000, () => {
    console.log("listening");
});

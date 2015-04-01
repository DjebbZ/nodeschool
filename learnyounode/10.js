var net = require("net"),
    port = process.argv[2];

var server = net.createServer(function (socket) {
    var date = new Date(),
        month = (date.getMonth() + 1),
        month2 = month < 10 ? "0" + month : month,
        day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    var result = "" + date.getFullYear() + "-" + month2 + "-"
                + day + " " + date.getHours() + ":" + date.getMinutes() + "\n";
    socket.end(result);
});
server.listen(port);
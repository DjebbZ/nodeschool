var http = require("http"),
    through = require("through2"),
    stream = through(write);


var server = http.createServer(function(req, res) {
    if (req.method === "POST") {
        req.pipe(stream).pipe(res);
    } else {
        res.end();
    }
});
server.listen(process.argv[2]);

function write(buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
}

var split = require("split"),
    through = require("through2");

var stream = through(write),
    odd = true;

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout);

function write(buf, enc, next) {
    buf = buf.toString();
    buf = odd ? buf.toLowerCase() : buf.toUpperCase();
    this.push(buf + "\n");
    odd = !odd;
    next();
}

var trumpet = require("trumpet"),
    through = require("through2"),
    tr = trumpet(),
    stream = tr.select(".loud").createStream()

stream.pipe(through(function(buf, enc, next) {
    this.push(buf.toString().toUpperCase())
    next()
}))
.pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout);

var crypto = require("crypto"),
    zlib   = require("zlib"),
    stream = require("through2"),
    tar    = require("tar"),
    parser = tar.Parse()

process.stdin
    .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
    .pipe(zlib.createGunzip())
    .pipe(parser)

parser.on("entry", function (entry) {
    if (entry.type !== "File") return;

    var c = crypto.createHash("md5", { encoding: 'hex' })
    entry.pipe(c).pipe(stream(function(buf, enc, next) {
        console.log(buf.toString() + " " + entry.path)
    }))
})
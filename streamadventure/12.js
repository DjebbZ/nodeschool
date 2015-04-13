var duplexer = require("duplexer2"),
    stream = require("through2")

module.exports = function dup(counter) {
    var count = {},
        writable = stream.obj(function accumulating (buff, enc, next) {
            count[buff.country] = (count[buff.country] || 0) + 1
            next()
        }, function(done) {
            counter.setCounts(count);
            done()
        })

    writable.on("error", function(err) { console.error(err) })

    return duplexer(writable, counter)
}

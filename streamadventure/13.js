var combine = require('stream-combiner'),
    split = require("split"),
    stream = require("through2");

module.exports = function () {
    var groupByGenre = stream(write, end),
        result = {name: "", books: []}

    function write(buf, enc, next) {
        if (buf.length === 0) return next()

        var obj = JSON.parse(buf)
        if (obj.type === "genre") {
            if (result.books.length > 0) this.push(JSON.stringify(result) + "\n")
            result = { name: obj.name, books: [] }
        }
        if (obj.type === "book") {
            result.books.push(obj.name)
        }

        next()
    }

    function end(done) {
        if (result.books.length > 0) this.push(JSON.stringify(result) + "\n")
        done()
    }

    return combine(
        split(),
        groupByGenre,
        process.stdout
    )
}

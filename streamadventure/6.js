var concat = require("concat-stream");

process.stdin
    .pipe(concat(function reverser(body) {
        console.log(body.toString().split("").reverse().join(""))
    }))

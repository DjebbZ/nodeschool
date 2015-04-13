var request = require("hyperquest");

process.stdin.pipe(request.post("http://localhost:8099")).pipe(process.stdout)

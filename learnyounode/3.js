var fs       = require("fs"),
    filename = process.argv[2],
    lines = fs.readFileSync(filename, "utf8").split('\n').length - 1;

console.log(lines);


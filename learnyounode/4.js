var fs = require("fs"),
    filename = process.argv[2];

fs.readFile(filename, "utf8", function(err, content) {
    if (err) return console.error(err);
    var lines = content.split("\n").length - 1;

    console.log(lines);
});

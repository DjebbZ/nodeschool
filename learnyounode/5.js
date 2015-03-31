var fs = require("fs"),
    path = require("path"),
    directory = process.argv[2],
    extension = process.argv[3];

fs.readdir(directory, function(err, list) {
    if (err) return console.error(err);

    var filtered = list.filter(function(file) {
	return path.extname(file) === "." + extension;
    }).join("\n");

    console.log(filtered);
});

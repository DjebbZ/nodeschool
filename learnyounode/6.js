var filterls = require("./6-module")
    directory = process.argv[2],
    extension = process.argv[3];

filterls(directory, extension, function(err, data) {
    if (err) return console.error(err);

    console.log(data.join("\n"));
});

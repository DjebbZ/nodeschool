var fs = require("fs"),
    path = require("path");

module.exports = function(directory, extension, cb) {
    fs.readdir(directory, function(err, list) {
	if (err) return cb(err)

	var filtered = list.filter(function(file) {
	    return path.extname(file) === '.' + extension;
	});
	
	cb(null, filtered);
    });
};

var http = require("http"),
    url  = require("url"),
    port = process.argv[2];

var server = http.createServer(function(req, res) {
    if (req.method === "GET") {
	var uerel = url.parse(req.url, true);

	switch(uerel.pathname) {

            case "/api/parsetime":
		var date = new Date(uerel.query.iso),
		    datt = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		    };

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(datt));
		break;

	    case "/api/unixtime":
		var date = new Date(uerel.query.iso),
		    datt = {
			unixtime: date.getTime()
		    };

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(datt));
		break;

	    default:
		res.statusCode = 404;
                res.end();
		break;
        }
    }
});
server.listen(port);

var http = require("http"),
    url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding("utf8");
    
    res.on("error", console.error);

    res.on("data", console.log);
});

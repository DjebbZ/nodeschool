var http = require("http"),
    args = process.argv,
    urls = [args[2], args[3], args[4]],
    responses = [];

http.get(urls[0], thisIsResponseNumber(0));
http.get(urls[1], thisIsResponseNumber(1));
http.get(urls[2], thisIsResponseNumber(2));

function thisIsResponseNumber(number) {
    return function(res) {
        res.setEncoding("utf8");

        var result = [];

        res.on("error", console.error);

        res.on("data", function(data) {
            result.push(data);
        });

        res.on("end", function() {
            result = result.join("");
            responses[number] = result;

            if (responses[0] && responses[1] && responses[2]) {
                console.log(responses[0]);
                console.log(responses[1]);
                console.log(responses[2]);
            }
        });
    }
}

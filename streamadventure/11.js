var spawn = require("child_process").spawn,
    duplexer = require("duplexer")

module.exports = function (cmd, args) {
    var command = spawn(cmd, args)
    return duplexer(command.stdin, command.stdout)
}

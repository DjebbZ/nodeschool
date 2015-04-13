var crypto = require("crypto"),
    decrypt = crypto.createDecipher("aes256", process.argv[2])

process.stdin.pipe(decrypt).pipe(process.stdout)


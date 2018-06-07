function getEnv(key, defaultValue) {
    let value = process.env[key];
    if (value == null) {
        if (defaultValue != null) {
            value = defaultValue;
        } else {
            console.error(`${key} is not defined`);
            process.exit(1);
        }
    }
    console.log(`${key}: ${value}`);
    return value;
}

const PORT = getEnv('PORT', 3000);
const DATA_DIR = getEnv('DATA_DIR', '/data');

const http = require('http')
const Gun = require('custom-gun')

const server = http.createServer();

Gun({
    web: server,
    localStorage: false,
    radisk: true,
    file: DATA_DIR
});

server.listen(PORT);
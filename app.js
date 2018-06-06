function getEnv(key) {
    const value = process.env[key];
    if (value == null) {
        console.error(`${key} is not defined`);
        process.exit(1);
    }
    return value;
}

const PORT = 3000 // getEnv('PORT');
const DATA_DIR = getEnv('DATA_DIR');

const http = require('http')
const Gun = require('gun')

const server = http.createServer();

Gun({
    web: server,
    localStorage: false,
    radisk: true,
    file: DATA_DIR
});

server.listen(PORT);

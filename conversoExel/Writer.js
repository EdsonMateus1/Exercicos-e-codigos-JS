const fs = require("fs");
const util = require('util');

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(fileName, data) {
        return await this.writer(fileName, data);
    }
}

module.exports = Writer;
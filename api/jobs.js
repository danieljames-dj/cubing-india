// Functions for regularly performing jobs
const tmp = require('tmp');
const exported = {};

exported.scrapeWCADatabase = function (callback) {
    tmp.dir(function _tempDirCreated(err, path, cleanupDirectoryCallback) {
        if (err) throw err;

        console.log('Dir: ', path);

        callback(path);
        // callback("Finished scraping database (JK)");
        cleanupDirectoryCallback();
    });
};

module.exports = exported;

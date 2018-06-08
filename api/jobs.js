// Functions for regularly performing jobs
const WCA_DB_URL = "https://www.worldcubeassociation.org/results/misc/WCA_export.sql.zip";
const ZIPPED_DB_FILE_NAME = 'wcadb.sql.zip';
const UNZIPPED_DB_DIRECTORY_NAME = 'wcadb';

const path = require('path');
const tmp = require('tmp');
const fs = require('fs');
// const rimraf = require('rimraf');
const download = require('download-file');
const unzip = require('unzip');
const fstream = require('fstream');

const exported = {};

exported.scrapeWCADatabase = function (callback) {
    tmp.dir(function _tempDirCreated(err, tempDirPath, cleanupDirectoryCallback) {
        if (err) throw err;


        const options = {
            directory: tempDirPath,
            filename: ZIPPED_DB_FILE_NAME
        };

        const zippedDBPath = path.join(tempDirPath, ZIPPED_DB_FILE_NAME);
        const unzippedDBDirPath = path.join(tempDirPath, UNZIPPED_DB_DIRECTORY_NAME);

        fs.mkdirSync(unzippedDBDirPath);

        download(WCA_DB_URL, options, function (err) {
            if (err) {
                cleanupDirectoryCallback();
                throw err;
            }

            const readStream = fs.createReadStream(zippedDBPath);
            const writeStream = fstream.Writer(unzippedDBDirPath);

            console.log('Ready to pipe: ' + zippedDBPath + ' to ' + unzippedDBDirPath);

            readStream
                .pipe(unzip.Parse())
                .pipe(writeStream);

            readStream.on('close', function () {
                console.log('Finished unzipping DB');
                // rimraf(unzippedDBDirPath, function () {
                //     console.log('Finished nuking DB');
                //     cleanupDirectoryCallback();
                //     callback('Finished processing WCA database');
                // });

                // // TODO: Fix cleanup crashing issue
                // cleanupDirectoryCallback(unsafeCleanup=true);
                callback('Finished processing WCA database');
            });
        });
    });
};

module.exports = exported;

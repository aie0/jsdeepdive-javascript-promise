(function () {
    'use strict';
    var fs = require('fs'), Promise = require('es6-promise').Promise,
        readJSONPromise = function readJSONPromise(filename) {
            return new Promise(function (resolve, reject) {
                fs.readFile(filename, 'utf8', function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        try {
                            res = JSON.parse(res);
                        } catch (ex) {
                            reject(ex);
                            return;
                        }
                        resolve(res);
                    }
                });
            });
        };

    readJSONPromise('./example.json').then(function onReadFile(res) {
        return res;
    }).then(function onProcessFile(response) {
        console.log('response: ' + JSON.stringify(response));
    }).catch(function onError(error) {
        console.error('error: ' + error);
    });

    readJSONPromise('./exampleError.json').then(function onReadFile(res) {
        return res;
    }).then(function onProcessFile(response) {
        console.log('response: ' + JSON.stringify(response));
    }).catch(function onError(error) {
        console.error('error: ' + error);
    });
}());
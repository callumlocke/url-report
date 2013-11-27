var exec = require('child_process').exec,
    phantomjs = require('phantomjs');

module.exports = {
  load: function (url, callback) {
    exec(phantomjs.path + ' report.js "' + url + '"', function (err, stdout, stderr) {
      if (err) throw err;
      callback(JSON.parse(stdout));
    });
  }
};

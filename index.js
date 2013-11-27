var exec = require('child_process').exec,
    phantomjs = require('phantomjs'),
    path = require('path');

var escape = function(cmd) {
  return '"' + cmd.replace(/(["\s'$`\\])/g, '\\$1') + '"';
};

module.exports = {
  load: function (url, callback) {
    var command = [
      phantomjs.path,
      escape(path.join(__dirname, 'report.js')),
      escape(url)
    ].join(' ');

    // console.log(command);

    exec(command, function (err, stdout, stderr) {
      if (err) throw err;
      callback(JSON.parse(stdout));
    });
  }
};

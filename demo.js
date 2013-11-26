urlReport = require('./index.js');

urlReport.load('http://www.google.com/', function (report) {
  console.log(report);
});

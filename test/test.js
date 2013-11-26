var urlReport = require('../index.js'),
    path = require('path'),
    expect = require('chai').expect,
    assert = require('assert'),
    connect = require('connect'),
    http = require('http');

describe('urlReport', function () {
  this.timeout(5000);

  var report;
  before(function (done) {
    var app = connect().use(connect.static(path.join(__dirname, 'www')));
    var server = http.createServer(app).listen(3000);
    urlReport.load('http://localhost:3000/index.html', function (_report) {
      report = _report;
      // console.dir(report);
      server.close();
      done();
    });
  });

  it('includes page load status', function () {
    expect(report.loadStatus).to.equal('success');
  });

  it('includes JavaScript errors', function () {
    expect(report.javascriptErrors.length).to.equal(2);
  });

  it('includes console messages', function () {
    expect(report.consoleMessages.length).to.equal(4);
  });

  it('includes all resource requests', function () {
    expect(report.resources.length).to.equal(5);
  });

  it('includes an array of resources that failed to load', function () {
    expect(report.resourceErrors.length).to.equal(2);
  });
});

/*
  This Phantom.js script finds out some information about a
  given URL, and outputs a JSON-formatted report to stdout.

  Usage:
    phantomjs report.js http://example.com/
*/

var sys = require("system"),
    page = require("webpage").create(),
    url = sys.args[1],
    report = {
      loadStatus: 'fail',
      resources: [],
      resourceErrors: [],
      javascriptErrors: [],
      consoleMessages: []
    };

// Ensure a URL has been supplied
if (!url) {
  console.error('Please specify a URL');
  phantom.exit();
}

// Capture details of things as they happen
page.onResourceReceived = function (response) {
  if (response.stage === 'end')
    report.resources.push(response);
};

page.onResourceError = function (resourceError) {
  report.resourceErrors.push(resourceError);
};

page.onError = function (message, trace) {
  report.javascriptErrors.push({
    message: message,
    trace: trace
  });
};

page.onConsoleMessage = function (message, lineNumber, sourceId) {
  report.consoleMessages.push({
    message: message,
    lineNumber: lineNumber,
    sourceId: sourceId
  });
};

// When finished, print out the report and exit
page.onLoadFinished = function (status) {
  report.loadStatus = status;

  setTimeout(function () {
    console.log(JSON.stringify(report, null, 2));
    phantom.exit();
  }, 1000);
};

// Start the whole process
page.open(url);

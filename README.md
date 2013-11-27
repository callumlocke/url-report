url-report [![Build Status](https://travis-ci.org/callumlocke/url-report.png?branch=master)](https://travis-ci.org/callumlocke/url-report)
==========

Node library to generate a health report for a URL.


Usage
-----

```javascript
var urlReport = require('url-report');

urlReport.load('http://www.wikipedia.org/', function (report) {
  console.log(report);
});
```


The report
----------

A report object has these properties:

* `loadStatus` – whether the page loaded (`"success"` or `"fail"`)
* `javascriptErrors` – an array of JavaScript errors
* `consoleMessages` – an array of messages from `console.log`, `console.dir` etc.
* `resources` – an array of objects detailing all the resources requested (including failed ones)
* `resourceErrors` – an array of objects detailing the resources that failed to load


To do
-----

* Add performance stats (server response time, page load time, bandwidth usage)
* Option to wait for longer after page load before returning (to wait for more JS errors)

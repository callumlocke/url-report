url-report [![Build Status](https://travis-ci.org/callumlocke/url-report.png?branch=master)](https://travis-ci.org/callumlocke/url-report)
==========

Node library to generate a health report for a URL. Intended for use as part of an automated deployment process, to check everything went up OK.


Usage
-----

```javascript
var urlReport = require('url-report');

urlReport.load('http://www.wikipedia.org/', function (report) {
  console.log(report);
});
```

Here is an example [report object](https://github.com/callumlocke/url-report/blob/master/EXAMPLE.md).


To do
-----

* Add performance stats (server response time, page load time, bandwidth usage)
* Option to wait for longer after the page load event before returning (eg, to wait for more async stuff to finish)

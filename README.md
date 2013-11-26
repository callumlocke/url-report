url-report
==========

Node library to generate a health report for a URL.


Usage
-----

```javascript
urlReport = require('url-report');

urlReport.load('http://www.wikipedia.org/', function (report) {
  console.log(report);
});
```


The report
----------

The object passed to your callback has these properties:

* `loadStatus` – whether the page loaded (either 'success' or 'fail')
* `javascriptErrors` – an array of JavaScript errors
* `consoleMessages` – an array of messages from `console.log`, `console.dir` etc.
* `resources` – an array of objects detailing all the resources requested (including failed ones)
* `resourceErrors` – an array of objects detailing the resources that failed to load


To do
-----

* Add performance stats (server response time, page load time, bandwidth usage)

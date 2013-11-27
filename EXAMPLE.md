Here is an example report object (generated for [this test page](https://github.com/callumlocke/url-report/blob/master/test/www/index.html)).

Notes...

* `loadStatus` will always be `"success"` if the page loaded – even if some resources failed.
* the objects in `resources` and `resourceErrors` are currently in the format that PhantomJS reports them, which is a bit verbose
* `resources` contains info on all requested resources (images, scripts, etc), **including** failed downloads
  * the `resourceErrors` array doesn't really give you any further info about the failed ones – it's mainly intended as a quick way to verify there were no download errors (`var allGood = !report.resourceErrors.length`)


```javascript
{
  "loadStatus": "success",

  "javascriptErrors": [
    {
      "message": "Error: oh no",
      "trace": [
        {
          "file": "http://localhost:3000/index.html",
          "line": 16,
          "function": ""
        }
      ]
    },
    {
      "message": "ReferenceError: Can't find variable: fubar",
      "trace": [
        {
          "file": "http://localhost:3000/index.html",
          "line": 13,
          "function": ""
        }
      ]
    }
  ],

  "consoleMessages": [
    {
      "message": "first log"
    },
    {
      "message": "window just loaded"
    },
    {
      "message": "[object Object]" // from: console.log({foo: 'bar'});
    },
    {
      "message": "this is slightly after load"
    }
  ],

  "resources": [
    {
      "contentType": "text/html; charset=UTF-8",
      "headers": [
        {
          "name": "Accept-Ranges",
          "value": "bytes"
        },
        {
          "name": "ETag",
          "value": "\"411-1385498386000\""
        },
        {
          "name": "Date",
          "value": "Wed, 27 Nov 2013 13:21:27 GMT"
        },
        {
          "name": "Cache-Control",
          "value": "public, max-age=0"
        },
        {
          "name": "Last-Modified",
          "value": "Tue, 26 Nov 2013 20:39:46 GMT"
        },
        {
          "name": "Content-Type",
          "value": "text/html; charset=UTF-8"
        },
        {
          "name": "Content-Length",
          "value": "411"
        },
        {
          "name": "Connection",
          "value": "keep-alive"
        }
      ],
      "id": 1,
      "redirectURL": null,
      "stage": "end",
      "status": 200,
      "statusText": "OK",
      "time": "2013-11-27T13:21:27.369Z",
      "url": "http://localhost:3000/index.html"
    },
    {
      "contentType": "image/jpeg",
      "headers": [
        {
          "name": "Accept-Ranges",
          "value": "bytes"
        },
        {
          "name": "ETag",
          "value": "\"27430-1385494471000\""
        },
        {
          "name": "Date",
          "value": "Wed, 27 Nov 2013 13:21:27 GMT"
        },
        {
          "name": "Cache-Control",
          "value": "public, max-age=0"
        },
        {
          "name": "Last-Modified",
          "value": "Tue, 26 Nov 2013 19:34:31 GMT"
        },
        {
          "name": "Content-Type",
          "value": "image/jpeg"
        },
        {
          "name": "Content-Length",
          "value": "27430"
        },
        {
          "name": "Connection",
          "value": "keep-alive"
        }
      ],
      "id": 2,
      "redirectURL": null,
      "stage": "end",
      "status": 200,
      "statusText": "OK",
      "time": "2013-11-27T13:21:27.374Z",
      "url": "http://localhost:3000/squirrel.jpg"
    },
    {
      "contentType": "text/html",
      "headers": [
        {
          "name": "Content-Type",
          "value": "text/html"
        },
        {
          "name": "Date",
          "value": "Wed, 27 Nov 2013 13:21:27 GMT"
        },
        {
          "name": "Connection",
          "value": "keep-alive"
        },
        {
          "name": "Transfer-Encoding",
          "value": "chunked"
        }
      ],
      "id": 3,
      "redirectURL": null,
      "stage": "end",
      "status": 404,
      "statusText": "Not Found",
      "time": "2013-11-27T13:21:27.375Z",
      "url": "http://localhost:3000/santa.jpg"
    },
    {
      "contentType": "text/html",
      "headers": [
        {
          "name": "Content-Type",
          "value": "text/html"
        },
        {
          "name": "Date",
          "value": "Wed, 27 Nov 2013 13:21:27 GMT"
        },
        {
          "name": "Connection",
          "value": "keep-alive"
        },
        {
          "name": "Transfer-Encoding",
          "value": "chunked"
        }
      ],
      "id": 5,
      "redirectURL": null,
      "stage": "end",
      "status": 404,
      "statusText": "Not Found",
      "time": "2013-11-27T13:21:27.376Z",
      "url": "http://localhost:3000/god.jpg"
    },
    {
      "contentType": "image/jpeg",
      "headers": [
        {
          "name": "Accept-Ranges",
          "value": "bytes"
        },
        {
          "name": "ETag",
          "value": "\"21788-1385494780000\""
        },
        {
          "name": "Date",
          "value": "Wed, 27 Nov 2013 13:21:27 GMT"
        },
        {
          "name": "Cache-Control",
          "value": "public, max-age=0"
        },
        {
          "name": "Last-Modified",
          "value": "Tue, 26 Nov 2013 19:39:40 GMT"
        },
        {
          "name": "Content-Type",
          "value": "image/jpeg"
        },
        {
          "name": "Content-Length",
          "value": "21788"
        },
        {
          "name": "Connection",
          "value": "keep-alive"
        }
      ],
      "id": 4,
      "redirectURL": null,
      "stage": "end",
      "status": 200,
      "statusText": "OK",
      "time": "2013-11-27T13:21:27.376Z",
      "url": "http://localhost:3000/freddy.jpg"
    }
  ],

  "resourceErrors": [
    {
      "errorCode": 203, // not the HTTP status - for that, look up this
                        // resource (by id) in the resources array
      "errorString": "Error downloading http://localhost:3000/santa.jpg - server replied: Not Found",
      "id": 3,
      "url": "http://localhost:3000/santa.jpg"
    },
    {
      "errorCode": 203,
      "errorString": "Error downloading http://localhost:3000/god.jpg - server replied: Not Found",
      "id": 5,
      "url": "http://localhost:3000/god.jpg"
    }
  ]
}
```

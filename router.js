var express = require('express');
// import * as express from '/node_modules/express';
var router = express();


router.get('https://www.anabolovic.com/hello', function (req, res) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'X-Request-URL': 'http://' + req.headers.host + req.url
      })
      res.end('hi')
    })



router.listen(3000);
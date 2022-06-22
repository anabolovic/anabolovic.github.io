var express = require('express');
var router = express.Router();


router.get('https://www.anabolovic.com/hello', function (req, res) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'X-Request-URL': 'http://' + req.headers.host + req.url
      })
      res.end('hi')
    })

	module.exports = router;
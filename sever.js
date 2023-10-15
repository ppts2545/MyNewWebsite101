let http = require( 'http');
let dt = require('./MyDateTime');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
  let q = url.parse(req.url, true)
  let filename = "."+ q.pathname;
  fs.readFile(filename, function(err, data){
    if (err)
    res.writeHead(404, {})
  }
}
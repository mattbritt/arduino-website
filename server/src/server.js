

var express = require('express');
var app = express();

var fs = require('fs');
var path = require('path');

// CORS headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // static middleware (to allow file download)
  app.use('/assets', express.static( path.join(__dirname, '/assets')));

// /softwarePanel route (to get file text for textarea)
app.get('/softwarePanel', (req, res)=>{

    fs.readFile('./assets/' + req.query.file, (err, data)=>{
        if(err) console.log('error');

        res.end(data);
    })
})





var port = (process.argv[2] || 5645);
app.listen(port);
console.log('API Server started on port ' + port);
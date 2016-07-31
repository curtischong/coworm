/*var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
var appX = 500;
var appY = 280;


app.get('/', function(request, response) {
 // response.render('pages/index');
    //appX = appX+
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.write(request);
    response.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});*/
// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


var appX = 500;
var appY = 560;

// routes will go here
app.get('/', function (req, res) {
    
    app.set('jsonp callback name', 'callback');
    var inx = parseInt(req.param('xcoord'));
    var iny = parseInt(req.param('ycoord'));

    appX = appX + inx;
    // if (appY + iny >= 0) {
    appY = appY + iny;
    //  }
    if (isNaN(appY)) {
        appY = 560;
    }
    if (isNaN(appX)) {
        appX = 280;
    }
    
    if(inx > 999998){
        appX = 1800;
        appY = 3000;
    }
    
    res.jsonp({ x: appX,y: appY })
    //res.send(appX);
 //   res.send({"x":appX,"y":appY});
    
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

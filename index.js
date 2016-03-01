var express = require('express'),
    app     = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.use('/app', express.static(__dirname + '/app'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});
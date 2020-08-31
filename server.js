// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(__dirname + '/dist/angular-testing'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+
// '/dist/angular-testing/index.html'));});
// app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/angular-testing'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/angular-testing/src/index.html'));});
app.listen(process.env.PORT || 8080);

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Oringin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
 });
 
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
	//next();
});

// catch 404 and forward to error handler
//app.use((req, res, next) => {
//	next();
//});
//const port = process.env.PORT || '3001';
//app.set('port', port);

const server = http.createServer(app);
server.listen(80);
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const router = require('./routes/routes');


app.set('port', 80);

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${server.address().port}`);
});

app.set('pages', path.join(__dirname, '/pages'));
app.set('public', express.static(path.join(__dirname, '/public')));

app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(flash());

module.exports = app;


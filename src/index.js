const morgan = require('morgan');
const path = require('path');
const express = require('express');
const {engine} = require('express-handlebars')
const route = require('./routes')

const app = express();
const port = 3000;

//config app
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resoures/views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded());
app.use(express.json());

//route app
route(app);
 
//app listen
app.listen(port, () => console.log('connect'));
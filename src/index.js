const express = require('express');
const morgan = require('morgan');
//const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');


//Initializations
const app = express();
require('./database');
//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Midlewares
app.use(morgan('dev'));
app.use(express.json());
//app.use(multer({dest: path.join(__dirname, './public/uploads/temp')}).single('image'));

app.use(express.urlencoded({ extended: false }));


//Routes 
app.use(require('./routes/routes'));
//Static fields
app.use('/public', express.static(path.join(__dirname, './public')))
// app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;
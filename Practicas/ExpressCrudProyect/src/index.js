//Requires
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//Initializations
const appServer = express();

//Settings
appServer.set('port',process.env.PORT || 8089);
appServer.set('views',path.join(__dirname,'views'));
appServer.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(appServer.get('views'),'layouts'),
    partialsDir: path.join(appServer.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
appServer.set('view engine', '.hbs');

//Middlewares
appServer.use(morgan('dev'));
appServer.use(express.urlencoded({extended: false}));
appServer.use(express.json());

//Global variables
appServer.use((req, resp, next) =>{
    next();
});

//Routes
appServer.use(require('./routes/'));
appServer.use(require('./routes/authentication'));
appServer.use('/links',require('./routes/links'));

//Public
appServer.use(express.static(path.join(__dirname,'public')));

//Starting the server
appServer.listen(appServer.get('port'),()=>{
    console.log('Server up on port '+appServer.get('port'));
});

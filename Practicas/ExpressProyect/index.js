//Importa el modulo express
const express = require('express');

//Importa el modulo colors
const colors = require('colors');

//Importa el modulo morgan
const morgan = require('morgan');

//Inicializa express
const app = express();

//Importa rutas
const routes = require('./routes.js');
const routesApi = require('./routes-api.js');


/** Begin Settings */

app.set('appName', 'Express Proyect');
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

/** End Settings */

/** Begin Middlewares */

app.use(morgan('combined'));

/** End Middlewares */

//Routes
app.use(routes);
app.use('/api',routesApi);

app.get('*', (req,resp) => {
    resp.end('Ruta no encontrada');
});

//Crea el servidor en el puerto 3000 e indicar si levanto correctamente
app.listen(3000,(err)=>{
    if(err){
        console.log('ERROR to up Server on port 300!: '.red,err)
    }else {
        console.log('Servidor up on port 3000'.green);
        console.log('App Name: ',app.get('appName'));
    }
});
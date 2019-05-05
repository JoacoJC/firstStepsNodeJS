const express = require('express');
const router = express.Router();

/** Begin Rutas */

//Define que hacer cuando se recibe una peticion GET en el PATH /
router.get('/', (req, resp) =>{
    resp.render('index.ejs');
});

//Define que hacer cuando se recibe una peticion en el PATH /login
router.get('/login', (req,resp) =>{
    resp.render('login.ejs');
});

/** End Rutas */
module.exports = router;
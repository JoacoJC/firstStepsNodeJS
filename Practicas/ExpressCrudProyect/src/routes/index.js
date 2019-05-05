//Requires
const express = require('express');

//Express Router initializing
const router = express.Router();

//Routes
router.get('/',(req, resp)=>{
    resp.end('Hello World');
});

//Export router
module.exports = router;


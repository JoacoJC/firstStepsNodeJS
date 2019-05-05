const express = require('express');
const router = express.Router();

router.get('/',(req, resp)=>{
    resp.json({
        miPrimerApi: 'Works'
    });
});

module.exports = router;
const mysql = require('mysql');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if (err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
            console.error(err.code);
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
            console.error(err.code);
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED')
            console.error(err.code);
        }
        console.error('DATABASE CONNECTION CANT ESTABLISHED');
        console.error(err.code);
    }
    if (connection){
        connection.release();
        console.log('DATABASE CONNECTION WAS ESTABLISHED SUCCESSFULL');
        return;
    }
});

module.exports = pool;
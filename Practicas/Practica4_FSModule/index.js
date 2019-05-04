const fs = require('fs');

fs.writeFile('./texto.txt','Linea 1',function (err){
    if (err){
        console.log('Ocurrio el siguiente error al crear el archivo' + err);
    }else {
        console.log('Archivo Creado');
    }
});

console.log('Ultima linea de codigo');
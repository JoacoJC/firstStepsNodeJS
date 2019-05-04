const Math = {};

function add(x1, x2){

    return x1 + x2;
}

function substract(x1, x2){

    return x1 - x2;
}

function product(x1, x2){

    return x1 * x2;
}

function divide(x1, x2){

    if(x2 == 0){
        console.log('Las divisiones entre cero no son posibles');
    }else{
        return x1 / x2;
    }
}

Math.add = add;
Math.substract = substract;
Math.product = product;
Math.divide = divide;

module.exports = Math;
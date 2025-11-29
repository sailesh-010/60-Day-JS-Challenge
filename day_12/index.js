let num =[1,2,3,4,5];

num.forEach(doublearray);
num.forEach(display);


function doublearray(elem, index,array){
    array[index] = elem*2;
}


function display(elem){
    console.log(elem);
}

const double = num.map(numb);
console.log(double);

function numb(elemt){
    return elemt*2;
}
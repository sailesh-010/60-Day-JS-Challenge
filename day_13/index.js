const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered = arrays.filter(function(value){
    return value <= 5;
})

const filtered1 = arrays.find(function(value){
    return value === 5;
})

console.log(`filtered: ${filtered}`);
console.log(`finding value: ${filtered1}`);
function calculatearea(length, width) {
    return length * width;
}

let area= calculatearea(5, 10);
console.log("Area:", area);

const person={
    name:"sailesh",
    area: area,
    greet : function() {
        console.log("Hello, " + this.name);
    }
}

person.greet();
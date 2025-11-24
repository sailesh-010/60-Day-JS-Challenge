const add = (a, b) => (a + b);
const user = {
    name: "sailesh",
    age: 20,
    message : (name) =>{
        console.log(`Hello, ${name}`);
    }

}
console.log(add(5, 10));
user.message("sailesh");

const u = {
  name: "World!",
  age: 20,
  m: function () {
    console.log(`Hello, ${this.name}`);
  },
};

u.m();
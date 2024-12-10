console.log("Hello world!");

const myName = "Bob";

function sayHello() {
  console.log("Hello " + myName + "!");
}

sayHello();
console.log(myName);

function sayHelloScoped() {
  const myName = "Alice";
  console.log("Hello " + myName + "!");
}

sayHelloScoped();

console.log(myName);

let person = {
    firstName: "Максим",
    lastName: "Грудік",
    age: 18
};
person.email = "m.grudik@gmail.com";
delete person.age;
console.log(person);
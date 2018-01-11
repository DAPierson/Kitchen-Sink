let myName = "Dustin";
const states = 50;
let addition = 5 + 4;

// Checking if D's charcode is >= L's charcode.
if (myName.charCodeAt(0) >= 76) {
    alert("Back of the line!")
}
else {
    alert("Next");
}

function sayHello() {
    alert("Hello World!")
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough to view this page!')
    // alternative -- `sorry ${name} , you aren't old enough to view this page!`
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let myVegets = ["Beans", "Corn", "Other"];
for (let item of myVegets) {
    console.log(item);
}

let person = [
    {
        name: 'John',
        age: 19,
    },
    {
        name: 'Dustin',
        age: 32,
    },
    {
        name: 'Alysia',
        age: 28,
    },
    {
        name: 'William',
        age: 1,
    },
    {
        name: 'Paul',
        age: 45,
    }
];


for (let i = 0; i < person.length; i++) {
    checkAge(person[i].name, person[i].age)
// alternative -- create var -- let friend = friend[i] 
// Important if using friends[i] in multiple instances 
}


function getLength(word) {
    let len = word.length;
    return len;
}

let stringLen = getLength('Hello World');

if (stringLen % 2 === 0) {
    let msg = 'The world is nice and even!';
    console.log(msg);
} else {
    let msg2 = 'The world is an odd place!';
    console.log(msg2);
}









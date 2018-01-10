let myName = "Dustin";
const states = 50;
let addition = 5 + 4;


if ( myName.charCodeAt(0) >= 76){
alert("Back of the line!")
}
else {
    alert("Next")
}

function sayHello() {
    alert("Hello World!")
}
sayHello()

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough to view this page!')
    }
}
checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

let myVegets = ["Beans","Corn","Other"];
for(let item of myVegets){
    console.log(item)
}



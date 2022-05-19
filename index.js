
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/* ❗❗ NOTE: PLEASE READ TASK INSTRUCTIONS CAREFULLY TO KNOW WHEN TO USE OBJECT AS CONSTRUCTOR ARGUMENT. TESTS WILL NOT PASS IF USED WHEN NOT INSTRUCTED. ❗❗ */

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from 2 arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible)
    }
  }
  poop(){
    this.stomach = []
  }
  toString(){
    return `${this.name}, ${this.age}`
  }
}

// I realize I do not need to double check my work if the tests are working. I like to double check and make sure they are doing what I think they should, regardless of the tests performed.


// //Double checking work
// const kevin = new Person('Kevin', 38)

// console.log(kevin.toString())
// kevin.eat('Tofu')
// kevin.eat('Berries')
// kevin.eat('Pudding')
// kevin.eat('Cranberry Juice')
// console.log(kevin.stomach)
// kevin.poop()
// console.log(kevin.stomach)

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon`, from 2 arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon){
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gal){
    this.tank += gal;
  }
  drive(distance){
    const maxDistance = this.tank * this.milesPerGallon;

    if(distance > maxDistance){
      this.odometer += maxDistance;
      this.tank = 0;

      return `I ran out of fuel at ${this.odometer} miles!`;
    } else{
      this.odometer += distance;
      this.tank -= distance/this.milesPerGallon;
    }
  }
}

// // Double Checking Work:
const impala = new Car('Chevrolet', 20)

// console.log(impala)
// impala.fill(10)
// console.log(impala)
// console.log(impala.drive(100))
// console.log(impala)
// impala.fill(20)
// console.log(impala.drive(1000))
// console.log(impala)


/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

class Lambdasian {
  constructor(attributes){
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

// //Double Checking work
const person = new Lambdasian({
  name: 'Sebastian',
  age: 23,
  location: 'Paris'
})

// console.log(person.speak())

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Lambdasian{
  constructor(attributes){
    super(attributes)
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`
  }
}

// // Double Checking Work
const greg = new Instructor({
  name: 'Greg',
  age: '43',
  location: 'Iowa',
  specialty: 'Software Development',
  favLanguage: 'CSS',
  catchPhrase: 'You got this!'
})

// console.log(greg.grade(person, 'prototypes and classes'))
// console.log(greg.demo('JavaScript'))
/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before BloomTech
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/

class Student extends Lambdasian{
   constructor(attributes){
     super(attributes);
     this.previousBackground = attributes.previousBackground;
     this.className = attributes.className;
     this.favSubjects = attributes.favSubjects;
     this.grade = Math.floor((Math.random() * 100) + 1);
     this.graduate = this.grade > 70
   }
   listSubjects(){
     return `Loving ${this.favSubjects}!`
   }
   PRAssignment(subject){
     return `${this.name} has submitted a PR for ${subject}.`
   }
   sprintChallenge(subject){
     return `${this.name} has begun sprint challenge on ${subject}.`
   }
}

// //Double Checking Work:
const deidra = new Student({
  name: 'Deidra', 
  age: '77',
  location: 'Ireland', 
  previousBackground: 'Bank Investor',
  className: 'CS83',
  favSubjects: ['JavaScript', 'prototypes', 'CSS', 'constructor functions'],
})

// console.log(deidra)
// console.log(deidra.sprintChallenge('classes'))
// console.log(deidra.PRAssignment('classes'))
// console.log(deidra.listSubjects())

//Double checking the stretch goals work:
console.log(deidra)

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor{
   constructor(attributes){
     super(attributes);
     this.gradClassName = attributes.gradClassName;
     this.favInstructor = attributes.favInstructor;
   }
   standUp(channel){
     return `${this.name} announces to ${channel}, @${channel} standy times!`
   }
   debugsCode(student, subject){
     return `${this.name} debugs ${student.name}'s code on ${subject}.`
   }
}

//Double Check Work
const janePM = new ProjectManager({
  name: 'Jane',
  age: '30',
  location: 'Pittsburg',
  gradClassName: 'CS10',
  favInstructor: 'Jessica'
})

// console.log(janePM)
// console.log(janePM.standUp('CS10'))
// console.log(janePM.debugsCode(person, 'prototypes'))
// console.log(janePM.debugsCode(deidra, 'Objects'))
/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

/* Only way I found to make this work is to not do it as a method, but as:

...
this.grade = Math.floor((Math.random() * 100) + 1);
this.graduate = this.grade > 70;

*/

//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}

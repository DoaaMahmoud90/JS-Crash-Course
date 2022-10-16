//alert("Hello World");
console.log("Hello World");
/*console.error("This is an error");
console.warn("This is warning");
let , const are block scope
Data types*/
const name = 'John';
const age = 30;
/*
const rating = 4.3;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
*/
//Concatenation, old way
console.log('My name is '+name+ ' and I am '+age);
//template String, new way (we have to pay attention to the direction of quotation)
console.log(`My name is ${name} and I am ${age}`);
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(6,11).toUpperCase());
const t = 'html, css , js, database';
console.log(t.split(', ')); //we got an array ant it would be handy in database.
//Arrays, two ways to create an array
const a = new Array(1, 4, 8);
console.log(a);
const fruits = ['appel', 'orange', 'pear'];
console.log(fruits);
console.log(fruits[1]);//to reach the second element
fruits[3] = 'grapes';//as it is const, we can't reassign it but we can add elements to it.
console.log(fruits);
//or we can add an element to the end by a method
fruits.push('mango');
console.log(fruits);
//to add an element at the beginning.
fruits.unshift('strawberry');
console.log(fruits);
//to delete the last element from the array.
fruits.pop();
console.log(fruits);
//to check wether sth is an array or not
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('appel'));
//object literals
const person ={
  firstName : 'John',
  lastName : 'Doe',
  age : 23,
  hobbies : ['music', 'sports', 'movies'],
  address : {
    street : '50 main St',
    city : 'Boston',
    state : 'MA'
  }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1], person.address.city);
/*const {firstName } = person;
console.log(firstName);
here it is not assigning, but it is like pulling
sth from an object
*/
const {firstName, lastName } = person;
console.log(lastName);
//to pull an object from an object
const {address :{city}} = person;
console.log(city);
//to add a property or key value pair to an object.
person.email = 'john@gmail.com';
console.log(person);
//array of objects
const todos =[
  {
    id : 1,
    text : 'Take out trash',
    isCompleted : true
  },
  {
    id : 2,
    text : 'Meeting with the boss',
    isCompleted : true
  },
  {
    id : 3,
    text : 'Dentist appointment',
    isCompleted : false
  }
];
console.log(todos);
console.log(todos[1].text);
/*data is sended to the server in a json format which is similar 
to object literals except in json format we deal with
double quotations.
to get data in json format we use the following statement
*/
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loop
for(let i=0; i<10; i++){
  console.log(i);
  }
for(let i=0; i<10; i++){
  console.log(`for loop number ${i}`);
  }
/*while loop
let i =0;
while(i<10){
  console.log(`while loop number ${i}`);
  i++;
}
*/
for(let i=0; i<todos.length; i++){
  console.log(todos[i].text);
  }
//another way to deal with array without index
for(let element of todos){
console.log(element.text);
}
/*we can give any name instead of element eg, todo.
for(let todo of todos){
console.log(todo.text);
}
*/

/*forEach method executes a provided function once for each array element
arrayName.forEach(function(anyName for the element){
  we have to use the previous name to reach the elements of the array
});
*/
todos.forEach(function(x){
  console.log(x.id);
});
/*map to create a new array from an array
for example to create a new array that
contains only the text from each element of the previous arrray.
*/
const todoText = todos.map(function(element){
return element.text;
});
console.log(todoText);
//filter to create a new array based on a condition
const todoCompleted = todos.filter(function(element){
  return element.isCompleted === true;
});
console.log(todoCompleted);
//to create an array from the filtered array
const todoCompletedText = todoCompleted.map(function(element){
  return element.text;
});
console.log(todoCompletedText);
/*or in one statement 
const todoCompletedText = todos.filter(function(element){
  return element.isCompleted === true;
});.map(function(element){
  return element.text;
});
*/

/*if statement
there is difference between == and ===
== will check only the value regardless of the data type
=== will care about the value and the data type
*/
const w = '10';
if(w===10){
  console.log('w is 10');
}
else{
  console.log('w is not 10');
}

const x = 11;
if (x==10){
  console.log('x is 10');
} else if(x>10){
  console.log('x is greater than 10');
} else {
  console.log('x is less tha 10');
}

const y = 4;
if(x> 10 || y>5  ){
  console.log('x is more than 10 or y is more than 5');
}

const z = 11;
const color = z>10? 'red':'blue';
console.log(color);

switch(color){
  case 'red': 
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red or blue');
}

//traditional function
function addNums(num1 = 1, num2 = 2){
  return num1 + num2;
}
console.log(addNums(7,8));

/*arrow function 
(in this case we delete the keyword function and 
  add arrow between the arguments and the statements of the function*/
subNums = (num1 =7, num2 =3) => console.log( num1-num2); 
subNums(6,3);
/*but in case of having return statement,
 we have to put it inside {} even if it is the only statement.
 Another way is to delete return
subNums = (num1 =7, num2 =3) => num1-num2; 
console.log(subNums(6,3));

also we don't need () if we have one argument
 */
addNum = num => num +5;
console.log(addNum(3));

//Object Oriented Programming

//Constructor function
function Person (firstName, lastName, dob){
this.firstName = firstName; //property
this.lastName = lastName;//property
this.dob = new Date(dob);//to get a good format for the date
/*JavaScript allows us to define a function without any name, so we assign it to a variable (invoked in this way)

In the following statement getFullName is a function not a normal variable and we have to call it with ().
this.getFullName = function (){
  return `${this.firstName} ${this.lastName}`;
}

this.getBirthYear = function(){
  return this.dob.getFullYear();
}
*/
}


 
//Instantiate an object
const person1 = new Person('John', 'Doe', '4-4-1980');
const person2 = new Person('Mary', 'Smith', '7-6-1990');
console.log(person2);
console.log(person2.dob);
//with Date, we can get many things like the year
console.log(person1.dob.getFullYear());

//instead of defining function inside the constructor, we can let the functions 
//which are related to the object inside the prototype of this object along with the constructor.

Person.prototype.getFullName = function (){
  return `${this.firstName} ${this.lastName}`;
}
Person.prototype.getBirthYear = function(){
  return this.dob.getFullYear();
}
console.log(person1.getBirthYear());
console.log(person2.getFullName());
console.log(person1);



/*Alternative way of prototype is using class
the following statement gives the same result

class Person {
  constructor(firstName, lastName, dob){
     this.firstName = firstName; 
     this.lastName = lastName;//property
     this.dob = new Date(dob);
  }
  
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  getBirthYear(){
    return this.dob.getFullYear();
  }


}
*/

//DOM
//single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('.container'));
//if there is more than one selector with the same name, querySelector will pick  the first one.


//multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items =document.querySelectorAll('.item');
items.forEach(function (item){
  console.log(item);
});

/*
items.forEach((item) => console.log(item));
*/

const ul = document.querySelector('.items');
//ul.remove(); to remove the whole element which is ul

//but to remove the last child element only.
ul.lastElementChild.remove();
//to change the text for example in the first child element.
ul.firstElementChild.textContent = 'Edited by DOM';

// in another way to change the text of the second child
ul.children[1].innerText = 'Brad';

ul.lastElementChild.innerHTML ='<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

/*Event
The first parameter is the type of the event 
(like "click" or "mousedown" or "mouseover" or "mouseout" or any other HTML DOM Event.)

The second parameter is the function we want to call when the event occurs.

*/



/*
FIRST EVENT RELATED TO BUTTON
btn.addEventListener('click', function (e){
  e.preventDefault();//this will prevent the default behaver which is in this case submitting the form.
  console.log('click');
  //we can display the event object which is here the button using console.log(e)

  document.querySelector('#my-form').style.background = '#ccc';

  //to add a class to the body and to remove we use remove()
  document.querySelector('body').classList.add('bg-dark');
});

*/

/*The parameter e that you are asking about is an Event object,
 and it represents the event being fired which caused your function to be executed.
 It doesn't really have to be e , you can name it anything you want just like all other function parameters.
*/


//SECOND EVENT RELATED TO FORM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', (e)=>{
  e.preventDefault();//we added also bcs it is a submission.
  if (nameInput.value === ''|| emailInput.value ==='' )
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    //setTimeout() calls a function after determined time in ms.
    setTimeout(function(){msg.remove();}, 3000)
  }
  else
  {
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
   userList.appendChild(li);

   //clear fields
   nameInput.value ='';
   emailInput.value = '';
  }
});

















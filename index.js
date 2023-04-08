// // javascript console API
// // alert("me");
// // console.log("Hello World", 4 + 6, "Another Log");

// // console.error("This is the message");
// // console.warn("This is the message");

// var number1 = 12;
// var number2 = 12;
// // console.log(number1+number2);

// // 4 data types
// var number3 = 455;
// var number4 = 560;

// // string type
// var str1 = "THis is a bag";
// var str2 = "This is a slow laptop";

// // Objects

// var marks = {
//   marry: 56,
//   fari: 65,
//   pari: 75,
// };
// console.log(marks);

// // booleans
// var a = true;
// var b = false;
// // console.log(a, b);

// // undefine
// var und;
// // console.log(und);
// // At a very high level, There are two data types in javascript
// // Primitive data Types: Undefined, Null, number, string, boolean, symbol
// // Reference data types: Arrays and Objects

// var arr = [1, 2, "Marry", 4, 5, 6];
// // console.log(arr)

// // Operators in javascript
// // Arithematic Operators
// var c = 45;
// var d = 34;
// // console.log("The value of c+d is ", c+d);
// // console.log("The value of c-d is ", c-d);
// // console.log("The value of c*d is ", c*d);
// // console.log("The value of c/d is ", c/d);
// // Assignment Operator
// var e = c;
// e -= 2;
// // console.log(e);
// // comparison operator
// var x = 45;
// var y = 65;
// // console.log(x==y);
// // console.log(x>=y);
// // console.log(x<y);
// // console.log(x>y);

// // Logicals and Operators
// // console.log(true && true)
// // console.log(false && true)
// // console.log(false && false)
// // console.log(true && false)

// // logicals or operators
// // console.log(true || true)
// // console.log(false || true)
// // console.log(false || false)
// // console.log(true || false)

// // Logicals Not operator

// // console.log(!false);
// // console.log(!true);

// // function avg(a, b) {
// //   return (a + b) / 2;
// // }

// // c1 = avg(4, 6);
// // c2 = avg(14, 15);
// // console.log(c1, c2);

// // Conditionals in javascript
// // var age = 4;
// // if (age < 2) {
// //     console.log('You are not a kid');
// // }
// // else{
// //     console.log('You are a kid');
// // }

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// // for(var i=0;i<arr.lenght;i++){
// //     console.log(arr[i])
// // }
// // arr.forEach(function(element){
// //     console.log(element)

// // })

// // const ac = 0;
// // a = ac +1;
// // ac++;
// let j = 0;
// // while (j<arr.lenght) {
// //     console.log(arr[j]);
// //     j ++;

// // }

// // do {
// //   console.log(arr[j]);
// //   j++;
// // } while (j < arr.length);

// // let myArr = ["Fan", "Camera", 23, null, true];
// // console.log(myArr.lenght);
// // myArr.pop();
// // myArr.push("Marry");
// // myArr.shift();
// // myArr.unshift("Hurry");
// // console.log(myArr);
// // let myLovelyString = "Marry is a good lady";
// // console.log(myLovelyString.length);
// // console.log(myLovelyString.indexOf("g"))
// // console.log(myLovelyString.slice(0,3));
// // d = myLovelyString.replace("Marry", "Farri");
// // console.log(d, myLovelyString);

// // let myDate = new Date();
// // console.log(myDate.getTime());
// // console.log(myDate.getFullYear());
// // console.log(myDate.getDay());

// // let eleme = document.getElementById("click");
// // console.log(eleme);
// // let elemeClass = document.getElementsByClassName("container");
// // console.log(elemeClass);
// // elemeClass[0].style.background = "yellow";
// // elemeClass[0].classList.add("bg-primary");
// // elemeClass[0].classList.add("text-success");
// // elemeClass[0].classList.remove("text-success");
// // console.log(eleme.innerHTML);
// // console.log(eleme.innerText);
// // tn = document.getElementsByTagName("div");
// // console.log(tn);
// // createdElement = document.createElement("p");
// // createdElement.innerText = "This is a created Element";
// // tn[0].appendChild(createdElement);

// // createdElement2 = document.createElement("b");
// // createdElement2.innerText = "This is a bold Element";
// // tn[0].replaceChild(createdElement2, createdElement);

// // // Selecting using query
// // sel = document.querySelector(".container");
// // console.log(sel);

// // sel = document.querySelectorAll(".container");
// // console.log(sel);

// function clicked() {
//   // Yaha pa hm msg ko console bhi karwa sakhta han.
//   console.log("The button was clicked");
//   //Yaha pa hm msg ko alert bhi karwa sakhta han.
//   //  alert('The button was clicked')
// }
// window.onload = function () {
//   console.log("The document was loaded");
// }


// // events in javascript

// // firstContainer.addEventListener('click', function(){
// //   document.querySelectorAll(".container")[1].innerHTML = "<b> We have to clicked this element</b>"
// //   console.log("Clicked on Container")
// // })

// // firstContainer.addEventListener('mouseover', function(){
// //   console.log("Mouse  on Container")
// // })

// // firstContainer.addEventListener('mouseout', function(){
// //   console.log("Mouse out of Container")
// // })

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//   document.querySelectorAll(".container")[1].innerHTML = prevHTML
//   console.log("Mouse up Container")
// })

// firstContainer.addEventListener('mousedown', function(){
//   document.querySelectorAll(".container")[1].innerHTML = "<b> We have to clicked this element</b>"
//   console.log("Mouse down Container")
// })
// arrow function
// function sum(a, b) {
//   return a+b;
// }

sum = (a, b)=>{
  return a+b;
}

logkaro= ()=>{
  document.querySelectorAll(".container")[1].innerHTML = "<b> We have to clicked this element</b>"
  console.log("Set Interval Fired")
}

// setTimeOut and setInterval
// setTimeOut
// setTimeout(logkaro, 2000);
// setInterval
setInterval(logkaro,2000);
clr = setInterval(logkaro, 5000);
// Localstorage
// localStorage.setItem('Name','Marry')
// localStorage
// localStorage.getItem('Name')
// "Marry" 
// localStorage.removeItem('name');
// localstorage.clear()

// JSON
obj = {name:"Sana", lenght: 1, a: {this: 'Th"at'}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed =JSON.parse(`{"name":"Sana","lenght":1,"a":{"this":"That"}}`)
console.log(parsed);
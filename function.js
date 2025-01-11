// function addToCart(){
//     alert("Item added to cart");
// }

// function add(a,b){
//     console.log(a+b);
// }

// add(10,20);
// add(100,31);
// add(50,120);

// function userDetails(name,age,city){
//     console.log("Name: "+name);
//     console.log("Age: "+age);
//     console.log("City: "+city);
// }

// userDetails("Mahesh",23,"Pune");
// userDetails("Ramesh",25,"Mumbai");
// userDetails("Rajesh",29,"Delhi");

// //! anonymous function
// var add = function(a,b){
//     console.log(a+b);
// }
// add(10,20);
// add(100,31);
// add(50,12);

// //! IIFE -
// (function(){
//     console.log("IIFE");
// })();

// //arrow function
// var demo=()=>console.log("Arrow function");

// demo();

//var x=_=>{console.log("Arrow function1");
//    console.log("Hi");
//    console.log("Hello");
//    console.log("Bye");}
//    x();

//closure:
//closure is aa memory created when functions bundled together/functions nested by giving accessibility to the innermost function to access the variables of outermost function.

function x(){
    let a = 10;
    const b = 20;
    console.log(a,b);
    function y() {
        let p="Js";
        var q = "reachJs";
        console.log(p,q);
        function z() {
            const username = "gita";
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z();
    }
    y();
}
x();











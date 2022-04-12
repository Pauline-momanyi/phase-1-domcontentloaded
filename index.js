// Your code goes here
////Test for mportance of DOMContentLoaded
// document.addEventListener("DOMContentLoaded", function(event){
    // console.log("Hello");
   // const p=document.querySelector('p')
    //console.log(p);
// })
// console.log("Before Load");
// const p=document.querySelector('p')
// console.log(p);
//in head and beginning of the body, you have to load

document.addEventListener("DOMContentLoaded", function(e){
    document.querySelector("p").textContent = "This is really cool!" 
})


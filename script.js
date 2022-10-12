document.getElementById('demo').innerHTML = 'new text';
document.getElementById('demo').id = 'demo2';
document.getElementById('demo2').style.color = '#00FF00';
document.getElementById('demo2').outerHTML = '<button>something to press</button>';

function myFun() {
    alert("WARNING ALERT OMG!!!!!");
}
myFun();

function darkMode() {
    document.getElementById("pagesytle").setAttribute("href", "./style-dark.css");
}

var a = 10;
let b = 20;
const c= 30;

a += 10;

console.log(a+b+c);
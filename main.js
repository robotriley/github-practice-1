const paragraph = document.getElementById('paragraph');
paragraph.style.color = 'red';

const lineItem = document.getElementsByTagName('li');
for (let i = 0 ; i < lineItem.length ; i++) {
    lineItem[i].style.color = 'orange';
}

const header = document.getElementsByClassName('header');
for (let i = 0; i < header.length; i++) {
    header[i].style.color = 'green';
}

let html = document.getElementById("paragraph").innerHTML;
// console.log(html)
document.getElementById("c").innerText = "Here are some new words.";

document.getElementById("c").setAttribute("class", "demoClass");

document.getElementById("e").innerText = "yoooooo";

// num = document.getElementById("e").attributes.length
// document.getElementById("e").innerText = num

document.getElementById("e").style.backgroundColor = "yellow";
document.getElementById("e").style.color = "green";

const headingTwo = document.createElement("h2")
const headingThree = document.createElement("h3")
headingThree.innerText = "little H3 for mee"
headingTwo.innerText = "an H2 for you"
document.body.appendChild(headingTwo)
// document.body.removeChild(headingTwo)

const element = document.getElementById("myList")
console.log(element)
const newNode = document.createTextNode("motorcycle");
element.replaceChild(newNode, element.childNodes[0]);
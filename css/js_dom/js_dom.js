
// append: strings, many
//body.append("hello", "bye");

// appendChild: elements
//body.appendChild(div);


const body = document.body;
const div = document.createElement("div");
div.innerText ='hello';
// div.textContent = "hello content";
console.log(div);

body.appendChild(div);
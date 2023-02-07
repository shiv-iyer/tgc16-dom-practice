let header = document.querySelector("h1");
header.style.color = "green";

let finishedList = document.querySelector("li.finished");
finishedList.innerHTML = "Repay credit card debt";

let urgentList = document.querySelector("li#urgent");
urgentList.style.borderColor = "black";
urgentList.style.borderStyle = "solid"
urgentList.style.borderWidth = "2px";

// Or urgentList.style.border = "solid black 2px";

let firstEmphasisElement = document.querySelector(".emphasis");
firstEmphasisElement.style.textDecoration = "underline";

let pEmphasis = document.querySelector("p.emphasis");
pEmphasis.style.backgroundColor = "orange";
pEmphasis.style.fontSize = "32px";
pEmphasis.style.lineHeight = "24px";

let spanTodo = document.querySelector("li#urgent span.todo");
spanTodo.style.backgroundColor = "yellow";

let h2 = document.querySelector("h2");
h2.innerHTML += (`<span class ="greetings">About Us</span>`);
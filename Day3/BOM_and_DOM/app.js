// console.log("window", window); // This will log the window object to the console
// console.log("document", document); // This will log the document object to the console

// console.log("window", window);
// console.log("window.document", window.document);
// console.dir(document.children[0].children[1].children[0]);
//-----------------------------------------------------------------------------------------

// //1. docuement.getElement_s_ByTagName --> [ ] (iterable) (HTMLCollection)
// const headings = document.getElementsByTagName("h3");
// console.log("headings", headings); // HTMLCollection of all <h1> elements

// const header = document.getElementsByTagName("header");
// console.log("header", header); // HTMLCollection of all <header> elements

// headings[0].innerText = "Hello Rishab!"; // Update the text of the first <h1> element
// headings[1].innerText = "Hello Mohan!"; // Update the text of the second <h1> element
//------------------------------------------------------------------------------------------

// //2. docuement.getElement_s_ByClassName --> [ ] (iterable) (HTMLCollection)
// const elements = document.getElementsByClassName("text-brown");
// console.log("elements", elements); // HTMLCollection of all elements with class "text-brown"

// elements[0].style.color = "brown";
// elements[1].style.color = "brown";
//-------------------------------------------------------------------------------------------

// //3. docuement.getElement_s_ById --> [ ] (iterable) (HTMLCollection)
// const text = document.getElementById("text1");
// text.style.backgroundColor = "red";
//--------------------------------------------------------------------------------------------

const titles = document.querySelectorAll("h3");
console.log("🟡: titles", titles); // NodeList of all <h3> elements

const textBrownElements = document.querySelectorAll(".text-brown");
console.log("🟡: textBrownElements", textBrownElements); // NodeList of all elements with class "text-brown"

const textPara = document.querySelectorAll("#text1");
console.log("🟡: textPara", textPara); // NodeList of all elements with id "text1"

const textPara2 = document.querySelectorAll("#text2");
console.log("🟡: textPara2", textPara2); // NodeList of all elements with id "text2"

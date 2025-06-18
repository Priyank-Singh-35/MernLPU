// console.log("window", window); // This will log the window object to the console
// console.log("document", document); // This will log the document object to the console

// console.log("window", window);
// console.log("window.document", window.document);
// console.dir(document.children[0].children[1].children[0]);
//-----------------------------------------------------------------------------------------

//1. docuement.getElement_s_ByTagName --> [ ] (iterable) (HTMLCollection)
const headings = document.getElementsByTagName("h1");
console.log("headings", headings); // HTMLCollection of all <h1> elements

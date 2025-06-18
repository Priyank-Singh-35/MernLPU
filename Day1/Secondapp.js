//---------------------------------------------------------------
// This is a simple JavaScript program to calculate the bill amount for juice and fries with GST.

// let juice=50;
// let gstOnJuice=0.1;
// let fries=70;
// let gstOnFries=0.05;

// let juiceBillAmount=juice+juice*gstOnJuice;
// let friesBillAmount=fries+fries*gstOnFries;
// let total=juiceBillAmount+friesBillAmount;

// console.log("Bill amount for juice is: " + juiceBillAmount);
// console.log("Bill amount for fries is: " + friesBillAmount);
// console.log("Total amount to be paid is: " + total);
//--------------------------------------------------------------

// Function in JavaScript

// console.log("START");

// function printbill(name, amount){
//     console.log("_____________________________");
//     console.log("Your bill for", name);
//     console.log("is 💸💸 Rs.",amount);
//     console.log("_____________________________");
// }

// function calculateBillAmount(price, gst) {
//     console.log(".....Calculating.....");
//     let billAmount = price + (price * gst);
//     return billAmount;
// }

// const res1=calculateBillAmount(10, 0.1);
// printbill("Mango Juice", res1);
// const res2=calculateBillAmount(20, 0.05);
// printbill("French Fries", res2);
// const res3=calculateBillAmount(30, 0.15);
// printbill("Pizza", res3);

// console.log("END");
//--------------------------------------------------------------

// console.log("START");

// const printbill=function printbillXYZ(name, amount){
//     console.log("_____________________________");
//     console.log("Your bill for", name);
//     console.log("is 💸💸 Rs.",amount);
//     console.log("_____________________________");
// }

// const calculateBillAmount=function calculateBillAmountXYZ(price, gst) {
//     console.log(".....Calculating.....");
//     let billAmount = price + (price * gst);
//     return billAmount;
// }

// const res1=calculateBillAmount(10, 0.1);
// printbill("Mango Juice", res1);
// const res2=calculateBillAmount(20, 0.05);
// printbill("French Fries", res2);
// const res3=calculateBillAmount(30, 0.15);
// printbill("Pizza", res3);

// console.log("END");
//--------------------------------------------------------------

console.log("START");

const printbill=function (name, amount){
    console.log("_____________________________");
    console.log("Your bill for", name);
    console.log("is 💸💸 Rs.",amount);
    console.log("_____________________________");
}

const calculateBillAmount=function (price, gst) {
    console.log(".....Calculating.....");
    let billAmount = price + (price * gst);
    return billAmount;
}

const res1=calculateBillAmount(10, 0.1);
printbill("Mango Juice", res1);
const res2=calculateBillAmount(20, 0.05);
printbill("French Fries", res2);
const res3=calculateBillAmount(30, 0.15);
printbill("Pizza", res3);

console.log("END");
var myDate1 = new Date();
console.log(myDate1.toLocaleString());
var myDate2 = new Date("august 31, 2007 16:59:09");
console.log(myDate2.toLocaleString());
var myDate3 = new Date("august 31, 2007");
console.log(myDate3.toLocaleString());
var myDate4 = new Date(2007, 7, 17);
console.log(myDate4.toLocaleString());
var myDate5 = new Date(2007, 7, 16, 19, 53, 46);
console.log(myDate5.toLocaleString());
var myDate6 = new Date(8000);
console.log(myDate6.toGMTString());
console.log(myDate6.toLocaleString());
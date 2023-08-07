

console.log("====================rectangle=====================");
// "rectangle=width*length"

function rectangle (width,length){
 return width*length
}
var  width=5
 var length=10

let area =(width*length)
console.log("The area of the rectangle is:"+area)


console.log("====================Temperature Converter=====================");
// "(n°F - 32) x .5556 or 5/9 convert in °F to °C"
// "(n°C x 1.8) + 32 = 86°F  convert in °C to °F"

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var msg = cTemp+'°C is ' + cToFahr + '°F.';
    console.log(msg);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var msg = fTemp+'°F is ' + fToCel + '°C.';
    console.log(msg);
} 
cToF(10);
fToC(45);


console.log("====================hours to seconds=====================");
 
function hour(convert){
  
var hour =convert;
var HtoS=3600*hour;
var msg1 =hour+" hours"+" = "+" "+ HtoS+ " sec";
console.log(msg1);
}
 hour(2);


 console.log("====================leap year =====================");

 let year =2023

 if((0 == year %4) && (0 != year %100) || (0 == year %400)){
  console.log(year+"is leap year")
 }else
 console.log(year+"is not leap year")

 console.log("==================== present or not=====================");

 var num=[11,12,13,14,15,16,17,20,25,30]
 var isPresent=num.includes(15);
 console.log("area  "+isPresent);
 
 //or
 let start=11;
 let end=30;
 let num1=44;
 
  console.log((num1<=30 && num1>+11));
 



 console.log("====================Factorial numbers =====================");

 let Factorial=8
 let fact=1
 for(let i = 1; i <= Factorial; ++i){
 fact*=i
 }
 console.log(Factorial+"!"+"  = "+fact);
 
 
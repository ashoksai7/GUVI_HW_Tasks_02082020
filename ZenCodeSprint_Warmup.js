/* 
Quick code sprints for warmup from 
https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f
*/


//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
function addFive(n){
	return n+5;
}
var num=5;
var result = addFive(num);
console.log(result);


//Write a function called “getOpposite”.
//Given a number, return its opposite
var num = 5;
function getOpposite(num) {
	if(typeof(num) === 'number'){
		if(!(num%1))
			return -num;
	}
	return -1;	
}
var result = getOpposite(num);
console.log(result);


//Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
	return min*60
}
var secs = toSeconds(min);
console.log(secs);


//Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
	return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(typeof(myint));
console.log(myint);


//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
	return myint+1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);


//Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
	return arr[0];
}
var data = getFirstElement(arr)
console.log(data);


//Convert Hours into Seconds
var arr = [1, 2, 3];
function hourToSeconds(arr) {
	arr.forEach((hr,index)=>arr[index]=hr*3600) // index in the function inside forEach method gives the curent index of the item in each iteration
	return arr;
}
var data = hourToSeconds(arr)
console.log(data);


//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
	return 2*(num1+num2);
}
var peri = findPerimeter(6,7)
console.log(peri);


//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
	return (num1+num2)<100
}
var res = lessThan100(22,88);
console.log(res);


//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters.
//The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(num1,num2) {
	return num1%num2;
}
var res = remainder(8,3)
console.log(res);


/*
Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species.
You have to implement a function that returns the total number of legs of all the animals.
*/
function CountAnimals(tur,horse,pigs) {
	return tur*2+(horse+pigs)*4;
}
var legs = CountAnimals(2,3,5);
console.log(legs);


//Frames Per Second
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
	return num1*num2*60
}
var fps = frames(1,2);
console.log(fps);


//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
	return (num1%5 === 0);
}
var divisible = divisibleByFive(5);
console.log(divisible);


//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.
function isEven(num){
	if(typeof(num) === 'number'){
		return num%2===0;
	}
	return -1;
}
var even = isEven(6);
console.log(even);


//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
	return num1%2 != 0 && num2%2 !=0;
}
var abo = areBothOdd(2,5);
console.log(abo);


//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName){
	return firstName + " " + lastName;
}
var fullname = getFullName("Sai","Ashok");
console.log(fullname);


//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
	if(word1 != undefined){
		console.log(typeof(word1));
		if(typeof(word1) != "string")
			return -1;
		return word1.length;
	}
		
		
	
	return -1;	
}
var low = getLengthOfWord("Guvi");
console.log(low);


//Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.
function isSameLength(word1, word2){
	return word1.length === word2.length;
}
var isl = isSameLength("GUVI", "GEEK");
console.log(isl);


//Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2)
{
	return (((x2-x1)**2)+((y2-y1)**2))**(1/2);
}
console.log(getDistance(100, 100, 400, 300));


//Write a function called “getNthElement”.
//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
//If the array has a length of 0, it should return ‘undefined’.
function getNthElement(array,n){
	if(array.length)
		return array[n];
	return undefined;
}

var nthele = getNthElement([7,8,4],1);
console.log(nthele);


//Write a function called “getLastElement”.
//Given an array, “getLastElement” returns the last element of the given array.
//If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array){
	if(array.length)
		return array[array.length-1];
	return -1;
}
var lastele = getLastElement([2,3,4,9]);
console.log(lastele);


//Write a function called “getProperty”. 
//Given an object and a key, “getProperty” returns the value of the property at the given key.
//If there is no property at the given key, it should return undefined.
var obj = {
 mykey: "value"
};
function getProperty(obj, key) {
	return obj[key];
}
console.log(getProperty(obj,'mykey'));
console.log(getProperty(obj,'dummykey'));


//Write a function called “addProperty”.
//Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var obj = {
 mykey: "value"
};
function addProperty(obj, key){
	obj[key] = true;
	console.log(obj);
}
addProperty(obj,"booleankey");


//Write a function called “removeProperty”.
//Given an object and a key, “removeProperty” removes the given key from the given object.
var obj = {
 mykey: "value",
 mysecondkey: "value2",
 mythirdkey: "value3"
};
function removeProperty(obj, key){
	delete obj[key];
	console.log(obj);
}
removeProperty(obj,"mysecondkey");


//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
	let val1=0
	let val2=0
	let retarr=[]
	arr.forEach((item)=>{
		if(item>0)
			val1 += item;
		else
			val2 += item;
	})
	retarr.push(val1);
	retarr.push(val2);
	return retarr;
}
console.log(ar2(arr));


//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
	let retarr=[]
	arr.forEach((item)=>{
		if(item>0)
			retarr.push(item);
	})
	return retarr;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);


//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n){
  for(var i=0,res =[] ; i<=n ; i++)
	  res.push(2**i);
  return res;
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));


//Find the maximum number in an array of numbers
function findMax(ar)
{
	var maxnum = ar.reduce((cur,item) =>{
		if(item > cur)
			return item;
		return cur;
	},0)
	return maxnum;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);


//Print the first 100 prime numbers
// Function prints the first nPrimes numbers
printPrimes(100);
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
	for(let k=2;k<n;k++){
		if(!(n%k))
			return false;
	}
	return true;
}


//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
	var prarr = [];
	var k=1;
	var currval = startAt+1;
	while(k<=nPrimes){
		if(isPrime(currval)){
			k++;
			prarr.push(currval); 
		}
		currval++;
	}
	return prarr;
}
// Returns true if a number is prime
function isPrime(n)
{
	for(let k=2;k<n;k++){
		if(!(n%k))
			return false;
	}
	return true;
}


//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
	let revstr = ""
	for(let i = s.length-1 ; i>=0 ; i--){
		revstr = revstr + s[i];
	}
	return revstr;
}


//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
	var result = [];
	for(let el of ar1)
	{
		result.push(el);
	}
	for(let el of ar2)
	{
		result.push(el);
	}
	return result;
}


//Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  let arr1 = s.split(",")
  let sum=0;
  for(let i of arr1)
	  sum += parseFloat(i);
  return sum;
}
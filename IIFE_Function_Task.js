let numarr = [10,7,30,31,7,37,99,10,313]; // array of numbers
let strarr = ["sai","ashok","krishna","Reddy"]; // array of strings

console.log("Array of numbers:");
console.log(numarr);
console.log("String array:");
console.log(strarr);



//Print odd numbers in an array
console.log("\nList of odd numbers:");
(function(arr){ //IIFE function definition
	let oddarr = [];
	for(let i of arr)
		if(i%2)
			console.log(i);
})(numarr);




//Convert all the strings to title caps in a string array
console.log("\nStrings converted to caps:");
(function(arr){ //IIFE function definition
	for(i in arr)
		arr[i] = arr[i].toUpperCase();
	console.log(arr);
})(strarr);





//Sum of all numbers in an array
console.log("\nSum of all numbers of the array:");
(function(arr){ //IIFE function definition
	let sum = 0;
	for(let i of arr)
		sum += i;
	console.log(sum);
})(numarr);




//Return all the prime numbers in an array
let primenum = (function(arr){ //IIFE function definition
	let priarr = [];
	for(let i of arr){
		let div;
		for(div = 2 ; div<i; div++){
			if(!(i%div)){
				break;
			}
		}
		if(div === i)
			priarr.push(i);
	}
	return priarr;
})(numarr);

console.log("\nList of all prime numbers of the array:");
console.log(primenum); 




//Return all the palindromes in an array
let palin = (function(arr){ //IIFE function definition
	let palarr = [];
	for(let i of arr){
		let original = i;
		let rev = 0;
		while(i != 0){
			rev = (rev*10) + (i%10);
			i = parseInt(i/10);
		}
		if(original == rev)
			palarr.push(original);
	}
	return palarr;
})(numarr);

console.log("\nList of all the palindromes of the number array:")
console.log(palin); 




//Return median of two sorted arrays of same size
let sarr1=[1,3,5];
let sarr2=[2,4,6];

let medarr = (function(arr1,arr2){ // IIFE Function definition
	let arr3 = [];
	while(arr3.length<(arr1.length+arr2.length+arr3.length)){
		if(arr1[0]<arr2[0])
			arr3.push(arr1.shift());
		else
			arr3.push(arr2.shift());
	}
	let med = (arr3[arr3.length/2] + arr3[(arr3.length/2)-1])/2;
	return med;
})(sarr1,sarr2);

console.log("\nSorted array 1 is:");
console.log(sarr1);
console.log("Sorted array 2 is:");
console.log(sarr2);
console.log("Median of the two arrays is:");
console.log(medarr);




//Remove duplicates from an array
(function(arr){ // IIFE Function definition
	let unqarr = [];
	for(let i=0;i<arr.length;i++){
		if(unqarr.includes(arr[i]))
			arr.splice(i,1);
		else
			unqarr.push(arr[i]);
	}
	
})(numarr);

console.log("\nNumber array after removing the duplicate occurances");
console.log(numarr);




//Rotate an array by k times and return the rotated array
let rotarr = (function(arr,k,dir){ // IIFE Function definition
	
	let arr1 = []
	for(let i of arr){
		arr1.push(i);
	}
	if(dir == 1){
		for(let i = 0; i<k; i++){
			arr1.push(arr1.shift());
		}
	}
	else{
		for(let i = 0; i<k; i++){
			arr1.unshift(arr1.pop());
		}
	}
	return arr1;
})(numarr,3,1);

console.log("\nOriginal array:");
console.log(numarr);
console.log("Array after 3 rotations in left direction")
console.log(rotarr);


rotarr = (function(arr,k,dir){ // IIFE Function definition
	
	let arr1 = []
	for(let i of arr){
		arr1.push(i);
	}
	if(dir == 1){
		for(let i = 0; i<k; i++){
			arr1.push(arr1.shift());
		}
	}
	else{
		for(let i = 0; i<k; i++){
			arr1.unshift(arr1.pop());
		}
	}
	return arr1;
})(numarr,3,2);
console.log("Array after 3 rotations in right direction")
console.log(rotarr);


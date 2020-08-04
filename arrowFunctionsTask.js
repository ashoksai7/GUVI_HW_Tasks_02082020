let numarr = [3,5,8,6,141,10,11,13]; // array of numbers
let strarr = ["sai","ashok","krishna","Reddy"]; // array of strings
console.log("The number array is");
console.log(numarr);

//Print odd numbers in an array
let oddarr = (arr1) => {
	let arr2=[];
	for(i of arr1){
		if(i%2)
			console.log(i);
	}
}
console.log("\nOdd numbers in the array are")
oddarr(numarr);




//Convert all the strings to title caps in a string array
console.log("\nString array:");
console.log(strarr);

let contocaps = (arr) => {
	for(i in arr)
		arr[i] = arr[i].toUpperCase();
	console.log(arr);
};
console.log("Strings converted to caps:");
contocaps(strarr);




//Sum of all numbers in an array
console.log("\nSum of all numbers of the array:");
let sumofarr = (arr) => { 
	let sum = 0;
	for(let i of arr)
		sum += i;
	console.log(sum);
};
sumofarr(numarr);




//Return all the prime numbers in an array
let primeofarr = (arr) => { 
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
};

console.log("\nList of all prime numbers of the array:");
console.log(primeofarr(numarr)); 




//Return all the palindromes in an array
let palin = (arr) => { 
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
};

console.log("\nList of all the palindromes of the number array:")
console.log(palin(numarr));
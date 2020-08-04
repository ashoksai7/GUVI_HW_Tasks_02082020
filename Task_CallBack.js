function second(a,b) {
	var opr1 = 10;
	var opr2 = 90;
	// body...
	arr[a-1](opr1,opr2); // calling function from the array of functions
}

arr = [add,sub,mul]; // array of functions. Definitions are written below
second(1,arr);  // 100
second(2,arr);  // -80
second(3,arr);  // 900
function add(a,d)
{

	console.log(a+d);

}
function sub(a,d)
{
	console.log(a-d);
}
function mul(a,d)
{
	console.log(a*d);
}

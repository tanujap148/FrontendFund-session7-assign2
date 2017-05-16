/* the findSum function takes the arguments array and calculates all the arguments passed when findSum is called */
function findSum(){
	var i,s=0;
	for(i=0;i<arguments.length;i++){
		s+=arguments[i];
	}
	return s;	
}

function onButtonClick(){
		var sum = findSum(100,200,300); //calling function calculateArea by passing the value of rad as argument. It will return the area of circle with radius 7. The value will be stored in area variable.
		console.log(sum); // printing sum on console.
		document.getElementById("myId").innerHTML=sum;
}
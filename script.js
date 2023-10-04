function firstNonRepeatedChar(str) {
	let flag = true;
for(let i=1; i<str.length-1; i++)
{
if(str.charAt(i)!=str.charAt(i+1)&&str.charAt(i)!=str.charAt(i-1))
{
	return str.charAt(i);
}

}
	

	return null
	
}
const input = prompt("Enter a string");

alert(firstNonRepeatedChar(input)); 

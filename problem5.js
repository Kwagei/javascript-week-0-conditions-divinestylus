let num;
num = prompt("Enter Number: ");
num = Number(num);

if (num%3 === 0 && num%5 === 0){
    console.log("FIZZBUZZ");
    alert("FIZZBUZZ");
}
else if(num%3 === 0){
    console.log("FIZZ");
    alert("FIZZ");
}
else if(num%5 === 0){
    console.log("BUZZ");
    alert("BUZZ");
}
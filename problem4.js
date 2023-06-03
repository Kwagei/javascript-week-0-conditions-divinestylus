let num = 95;

let i = 1;
let divisor;
function findDivisor(){
    if(i <= num){
        if(num%i === 0){
            divisor = i;
            console.log(divisor)
        }
        i += 1;
        findDivisor();;
    }   
}
findDivisor();
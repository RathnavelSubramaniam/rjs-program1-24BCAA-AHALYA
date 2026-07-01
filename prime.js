const isprime = (num)=> {
    if (num<= 1){
        return false;
    }
    for (let i= 2 ; i< num; i++){
        if(num% i===0){
            return false;
        }
    }
    return true;
}
let number = 11;
if(isprime(number)){
    console.log(number+"is a prime number");
}else{
    console.log(number+"is not prime number");
}

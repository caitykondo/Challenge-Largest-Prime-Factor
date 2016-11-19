function isPrime(num) {
  var i = 2;
  while (i < num){
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  // for (i = 2; i < num; i++){
  //   if(num % i === 0) {
  //     return false;
  //   }
  // }
  return true;
}
// exports.
var largestPrimeFactor = function(n){
  var primeNumber = 0;
  for (var i = 2, len = n; i < len; i++){
    if(n % i === 0 && isPrime(i)){ //if number is a factor and a prime set primeNumber to i
      primeNumber = i;
    }
  }
  return primeNumber;
};

// console.log(isPrime(3));
console.log(largestPrimeFactor(13195));
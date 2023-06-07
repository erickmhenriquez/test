function processNumbers(numbers){
    const sum = numbers.reduce((acc,curr)=>acc+curr,0);
    const max = Math.max(...numbers);
 return{
    max,
    sum
 };
}

module.exports = processNumbers;


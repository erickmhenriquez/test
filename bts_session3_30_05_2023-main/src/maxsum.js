function processNumbers(){
    const number=[1,2,3,4,5,6];
    maximo = Math.max(...number);
    let sum=0;
    number.forEach(num => {sum += num;
      });
return
console.log(sum,maximo)
  }
  
  console.log(processNumbers)
let number =5;

function add(){
    return (`number +=5`);
}

function subtract(){
    return (`number -=5`);
}

function multiply(){
    return (`number *=5`);
}

function divide(){
    return (`number /=5`);
}

function add(number, b){
    return (number+=b);
}

function subtract(number, b){
    return (number-=b);
}

function multiply(number, b){
    return (number*=b);
}

function divide(number, b){
    return (number/=b);
}

function increment(number){
  console.log (number++);
  return(number);
  
}

function decrement(number){
    console.log (number--);
    return(number);
  }

  function makeInt(number){
     return parseInt('number', 10);
  }

  function makeInt(number) {
      return parseFloat(number);
  }

  function preserveDecimal(number){
    return parseFloat(number);
  }
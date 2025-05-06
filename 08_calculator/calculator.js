const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(numbers) {
  let result = numbers.reduce((total, num) => {
    return total + num;
  }, 0);

  return result;
};

const multiply = function(numbers) {
  let result = numbers.reduce((total, num) => {
    return total * num;
  }, 1);

  return result;
};

const power = function(a, b) {
  let total = 1;
  for(let i = 0; i < b; i++)
  {
    total *= a;
  }

  return total;
};

const factorial = function(num) {
	total = 1;
  for(let i = num; i > 0; i--)
  {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

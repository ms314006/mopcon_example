const add = (number1, number2) => {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    throw new Error('The parameter is undefined or type is not number!');
  }
  return number1 + number2;
};

export default add;

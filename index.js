// calculateTax: takes an amount and returns 10% of it as tax
function calculateTax(amount) {
  // define the tax rate (10%)
  const taxRate = 0.10;
  // calculate the tax
  const tax = amount * taxRate;
  return tax;
}

// convertToUpperCase: takes a string and returns it in uppercase
function convertToUpperCase(text) {
  // use the built-in toUpperCase() method
  return text.toUpperCase();
}

// findMaximum: takes two numbers and returns the larger one
function findMaximum(num1, num2) {
  // compare num1 and num2
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// isPalindrome: takes a string and returns true if it's the same forwards and backwards
function isPalindrome(word) {
  // normalize the string: remove non-alphanumerics and make lowercase
  const cleaned = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');
  // check if reversed matches original cleaned
  return cleaned === reversed;
}

// calculateDiscountedPrice: takes an original price and a discount percentage, returns the discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // turn percentage into decimal
  const discountDecimal = discountPercentage / 100;
  // calculate how much to subtract
  const discountAmount = originalPrice * discountDecimal;
  // subtract and return
  return originalPrice - discountAmount;
}

// ----------------------------------------------
// example calls (you can comment these out before running your tests)
// ----------------------------------------------
// console.log(calculateTax(100));               // → 10
// console.log(convertToUpperCase('hello'));     // → 'HELLO'
// console.log(findMaximum(5, 10));              // → 10
// console.log(isPalindrome('RaceCar'));         // → true
// console.log(calculateDiscountedPrice(100, 20)); // → 80

// export functions for tests (if you're using CommonJS modules)
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};

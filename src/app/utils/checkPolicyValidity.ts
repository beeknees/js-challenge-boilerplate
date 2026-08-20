/**
 * @function that takes in a number and checks if it is divisible by 11.
 * Story specifics: 
 * Validate that the numbers are in fact valid policy numbers. 
 * A valid policy number has a valid checksum. 
 * This can be calculated as follows:  
 *    policy number:  3  4  5  8  8  2  8  6  5 
 *    position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1 
 *    checksum calculation: (d1+(2*d2)+(3*d3)+...+(9*d9)) mod 11 = 0 
 */

export function checkPolicyValidity(policy: string): boolean {
  let policyDigits = Array.from(policy, Number).reverse();
  let policyDigitsCollection: number[] = [];
  
  policyDigits.forEach((digit: number, index: number) => {
    let multipliedDigit = digit * (index + 1);
    policyDigitsCollection.push(multipliedDigit);
  });

  const result = policyDigitsCollection.reduce((acc, curr) => acc + curr, 0);

  const isDivisibleBy11 = (num: number) => num % 11 === 0;

  return isDivisibleBy11(result);

}
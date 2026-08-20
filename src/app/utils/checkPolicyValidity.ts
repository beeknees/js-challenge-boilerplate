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
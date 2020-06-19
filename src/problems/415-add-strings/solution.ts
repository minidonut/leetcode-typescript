function addStrings(num1: string, num2: string): string {
  return (BigInt(num1) + BigInt(num2)).toString();
}

export default {
  "default": addStrings,
  validator: (x: any) => x,
};

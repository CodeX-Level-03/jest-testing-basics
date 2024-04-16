const { multiply, sum, isPrime } = require("./app");
describe("calc function", () => {
  it("returns the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("returns the multiplication of two numbers", () => {
    expect(multiply(5, 3)).toBe(15);
  });
  it("returns the multiplication of two numbers", () => {
    expect(multiply(2, -5)).toBe(-10);
  });

  it("returns true if the number is negative value", () => {
    expect(isPrime(-7)).toBe(false);
  });

  it("returns false if the number is 0", () => {
    expect(isPrime(0)).toBe(false);
  });

  it("returns true if the number is prime", () => {
    expect(isPrime(7)).toBe(true);
  });
  it("returns false if the number is not prime", () => {
    expect(isPrime(8)).toBe(false);
  });
  it;
});









// KEEPING IT FOR REFERENCE
// const {capitalize } = require("./app");
// describe("capitalize function", () => {
//   it("returns the capitalized string", () => {
//     expect(capitalize("jest")).toBe("Jest");
//   });
// });

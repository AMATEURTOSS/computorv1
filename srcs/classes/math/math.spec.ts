import { Math as MyMath } from "./math";

describe("Math", () => {
  it("should return the square root of a number", () => {
    for (let i = -10; i < 10; ++i) {
      expect(MyMath.sqrt(i).toFixed(3)).toBe(Math.sqrt(i).toFixed(3));
    }
  });
});

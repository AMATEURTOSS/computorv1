import { TooHighExponentError } from "../../error";
import { Term } from "./term";

describe("Term constructor", () => {
  test("should work with number", () => {
    const term = new Term(3, 2);
    expect(term.coefficient).toBe(3);
    expect(term.exponent).toBe(2);
  });

  test("should work with 1x^0", () => {
    const term = new Term("1x^0");
    expect(term.coefficient).toBe(1);
    expect(term.exponent).toBe(0);
  });

  test("should work with 42x", () => {
    const term = new Term("42x");
    expect(term.coefficient).toBe(42);
    expect(term.exponent).toBe(1);
  });

  test("should work with 42x^2", () => {
    const term = new Term("42x^2");
    expect(term.coefficient).toBe(42);
    expect(term.exponent).toBe(2);
  });

  test("should throw an error with big exponent", () => {
    expect(() => new Term("1x^3")).toThrow(TooHighExponentError);
  });
});

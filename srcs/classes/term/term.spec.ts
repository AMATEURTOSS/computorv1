import { TooHighExponentError } from "../../error";
import { Term } from "./term";

describe("Term constructor", () => {
  test("should work with number", () => {
    const term = new Term(3, 2);
    expect(term.coefficient).toBe(3);
    expect(term.exponent).toBe(2);
  });

  test("should work with string", () => {
    const term = new Term("1*x^0");
    expect(term.coefficient).toBe(1);
    expect(term.exponent).toBe(0);
  });

  test("should throw an error with big exponent", () => {
    expect(() => new Term("1*x^3")).toThrow(TooHighExponentError);
  });
});

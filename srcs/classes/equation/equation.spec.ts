import { Term } from "../term";
import { Equation } from "./equation";
import { x, powerOf } from "../../constant";

describe("Equation constructor", () => {
  it("should work with string", () => {
    const equation = new Equation("5 * X^0 + 4 * X^1 - 9.3 * X^2", "1 * X^0");
    expect(equation).toBeInstanceOf(Equation);
  });

  it("should work with Term[]", () => {
    const equation = new Equation([new Term("5*x^0")], [new Term("4*x^2")]);
    expect(equation).toBeInstanceOf(Equation);
  });
});

describe("Equation toString", () => {
  it("should return a string representation of the equation", () => {
    const equation = new Equation("5 * X^0 + 4 * X^1 - 9.3 * X^2", "1 * X^0");
    expect(equation.toString()).toBe(`(4${x}${powerOf[0]}) + (4${x}${powerOf[1]}) + (-9.3${x}${powerOf[2]}) = 0`);
  });
});

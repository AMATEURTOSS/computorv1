import { Term } from "../term";
import { Equation } from "./equation";

describe("Equation constructor", () => {
  it("should work with string", () => {
    const equation = new Equation("5 * X^0 + 4 * X^1 - 9.3 * X^2", "1 * X^0");
    expect(equation).toBeInstanceOf(Equation);
  });

  it("should work with Term[]", () => {
    const equation = new Equation([new Term("5 * X ^ 0")], [new Term("4 * X ^ 2")]);
    expect(equation).toBeInstanceOf(Equation);
  });
});

describe("Equation reduce", () => {
  it("1", () => {
    const equation = new Equation("5 * X^0 + 4 * X^1 - 9.3 * X^2", "1 * X^0");
    const reduced = equation.reduce();
    expect(reduced.toString()).toBe("(4 * X ^ 0) + (4 * X ^ 1) + (-9.3 * X ^ 2) = 0");
  });
  it("2", () => {
    const equation = new Equation("5 * X^0 + 4 * X^1", "4 * X^0");
    const reduced = equation.reduce();
    expect(reduced.toString()).toBe("(1 * X ^ 0) + (4 * X ^ 1) = 0");
  });
});

describe("Equation toString", () => {
  it("should return a string representation of the equation", () => {
    const equation = new Equation("5 * X^0 + 4 * X^1 - 9.3 * X^2", "1 * X^0");
    expect(equation.toString()).toBe("(5 * X ^ 0) + (4 * X ^ 1) + (-9.3 * X ^ 2) = (1 * X ^ 0)");
  });
});

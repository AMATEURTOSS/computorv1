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

describe("Equation solve method", () => {
  const testSolution = (lhs: string, rhs: string, expected: Array<string>) => {
    const equation = new Equation(lhs, rhs);
    const solution = equation
      .solveEquation()
      .sort()
      .map((solution) => solution.toFixed(2));
    expect(solution).toEqual(expected);
  };
  it("Solve1", () => testSolution("3 * X^1 - 42 * X^2", "0", ["0.00", "0.07"]));
  it("Solve2", () => testSolution("5 * X^0 + 4 * X^1 - 9.3 * X^2", "1 * X^0", ["-0.48", "0.91"]));
  it("Solve3", () => testSolution("5 * X^0 + 4 * X^1", "4 * X^0", ["-0.25"]));
  it("Solve4", () => testSolution("2 * X^1", "-21 * X^2", ["-0.10", "0.00"]));
  it("Solve5", () => testSolution("1 * X^2", "13 * X^0", ["-3.61", "3.61"]));
});

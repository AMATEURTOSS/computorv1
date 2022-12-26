import { Equation } from "./equation";
import { x, powerOf } from "../../constant";
import { parseArgs } from "../../parse";

describe("Equation constructor", () => {
  it("should work with string", () => {
    const [lhs, rhs] = parseArgs(["", "", "5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"]);
    const equation = new Equation(lhs, rhs);
    expect(equation).toBeInstanceOf(Equation);
  });
});

describe("Equation toString", () => {
  it("should return a string representation of the equation", () => {
    const [lhs, rhs] = parseArgs(["", "", "5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"]);
    const equation = new Equation(lhs, rhs);
    expect(equation.toString()).toBe(`(4${x}${powerOf[0]}) + (4${x}${powerOf[1]}) + (-9.3${x}${powerOf[2]}) = 0`);
  });
});

describe("Equation solve method", () => {
  const testSolution = (lhs: string, rhs: string, expected: Array<string>) => {
    const [parsedLhs, parsedRhs] = parseArgs(["", "", `${lhs} = ${rhs}`]);
    const equation = new Equation(parsedLhs, parsedRhs);
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
  it("Solve6", () => testSolution("2 * X^2 - -3 * X^1", "0", ["-1.50", "0.00"]));
  it("Solve7", () => testSolution("0 * X^2 - -32 * X^1", "0", ["0.00"]));
  it("Solve8", () => testSolution("0 * X^0 + 0 * X^1 + 0 * X^2", "1 * X^0", []));
});

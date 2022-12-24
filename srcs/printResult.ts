import { Equation } from "./classes";

export function printResult(equation: Equation): void {
  const reduced = equation.reduce();
  const discriminantResult = reduced.getDiscriminant();

  console.log(`Reduced form: ${reduced.toString()}`);
  console.log(`Polynomial degree: ${reduced.lhs.length - 1}`);
  if (discriminantResult > 0)
    console.log(`Discriminant is strictly positive, the two solutions are:\n${reduced.solveEquation().join("\n")}`);
  if (discriminantResult === 0)
    console.log(`Discriminant is zero, the solution is:\n${reduced.solveEquation().join("\n")}`);
  if (discriminantResult < 0) console.log("Discriminant is strictly negative, solution does not exist in real numbers");
}

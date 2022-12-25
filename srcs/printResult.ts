import { Equation } from "./classes";

export function printResult(equation: Equation): void {
  const discriminantResult = equation.getDiscriminant();

  console.log(`Reduced form: ${equation.toString()}`);
  console.log(`Polynomial degree: ${equation.degree}`);
  if (equation.degree >= 1) {
    if (discriminantResult > 0)
      console.log(`Discriminant is strictly positive, the two solutions are:\n${equation.solveEquation().join("\n")}`);
    if (discriminantResult === 0)
      console.log(`Discriminant is zero, the solution is:\n${equation.solveEquation().join("\n")}`);
    if (discriminantResult < 0)
      console.log("Discriminant is strictly negative, solution does not exist in real numbers");
  }
}

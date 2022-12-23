import { Equation } from "./classes";
import { parseArgs } from "./parse";

const [lhs, rhs] = parseArgs(process.argv);

let equation = new Equation(lhs, rhs);
const reduced = equation.reduce();
const result = reduced.solveQuadratic();

console.log(`Reduced form: ${reduced.toString()}`);
console.log(`Polynomial degree: ${result.length}`);
console.log(`Solution:\n${result.join("\n")}`);

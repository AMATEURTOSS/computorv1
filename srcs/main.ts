import { Equation } from "./classes";
import { parseArgs } from "./parse";

const [lhs, rhs] = parseArgs(process.argv);

let equation = new Equation(lhs, rhs);
const reduced = equation.reduce();

console.log(`Reduced form: ${reduced.toString()}`);
console.log(`Polynomial degree: ${reduced.lhs.length - 1}`);
console.log(`Solution:\n${reduced.solveEquation().join("\n")}`);

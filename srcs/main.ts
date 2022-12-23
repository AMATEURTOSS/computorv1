import { Equation } from "./classes";
import { parseArgs } from "./parse";

const [lhs, rhs] = parseArgs(process.argv);

let equation = new Equation(lhs, rhs);
equation = equation.reduce();
const result = equation.result;

console.log(`Reduced form: ${equation.toString()}`);
console.log(`Polynomial degree: ${result.length}`);
console.log(`Solution:\n${result.join("\n")}`);

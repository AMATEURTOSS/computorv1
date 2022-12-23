import { Equation } from "./classes";
import { parseArgs } from "./parse";

const [lhs, rhs] = parseArgs(process.argv);

let equation = new Equation(lhs, rhs);
equation = equation.reduce();
console.log(equation.toString());

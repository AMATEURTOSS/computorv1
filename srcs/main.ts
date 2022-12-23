import { Equation } from "./classes";
import { parseArgs } from "./parse";

const [lhs, rhs] = parseArgs(process.argv);
console.log(new Equation(lhs, rhs).reduce());

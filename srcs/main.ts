import { Equation } from "./classes";
import { parseArgs } from "./parse";

const [lhs, rhs] = parseArgs(process.argv);
new Equation(lhs, rhs);

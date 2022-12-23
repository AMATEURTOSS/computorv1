import { Equation } from "./Equation";
import { parseArgs } from "./parse";

const [lhs, rhs] = parseArgs(process.argv);
new Equation(lhs, rhs);

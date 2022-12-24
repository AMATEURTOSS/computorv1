import { Equation } from "./classes";
import { parseArgs } from "./parse";
import { printResult } from "./printResult";

try {
  const [lhs, rhs] = parseArgs(process.argv);
  printResult(new Equation(lhs, rhs));
} catch (e) {
  if (e instanceof Error) console.error(`Error: ${e.message}`);
  else console.error(e);
}

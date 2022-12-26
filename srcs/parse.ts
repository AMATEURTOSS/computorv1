import { InvalidEquationError, NoArgError, TooManyArgError } from "./error";

/**
 * @name parseArgs
 * @example
 *        const [lhs, rhs] = parseArgs(["node", "main.js", "1+1=2"]);
 *        console.log(lhs); // 1+1
 *        console.log(rhs); // 2
 */
export function parseArgs(args: string[]): [string, string] {
  const equation: string = args[2];

  if (args.length <= 2) throw new NoArgError();
  if (args.length >= 4) throw new TooManyArgError();
  if (!equation?.includes("=")) throw new InvalidEquationError();

  const parsedEquation = equation
    .replace(/ /g, "")
    .replace(/-\+/g, "-")
    .replace(/\+-/g, "-")
    .replace(/--/g, "+")
    .replace(/\+\+/g, "+")
    .toLowerCase();
  const [lhs, rhs] = parsedEquation.split("=");

  return [lhs.trim(), rhs.trim()];
}

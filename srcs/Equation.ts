import { Term } from "./Term";

/**
 * @name Equation
 * @example
 *        const equation = new Equation("1+1", "2");
 */
export class Equation {
  private lhs: Term[] = [];
  private rhs: Term[] = [];

  constructor(lhs: string, rhs: string) {
    lhs.split(/(?=[+-])/g).forEach((term) => this.lhs.push(new Term(term)));
    rhs.split(/(?=[+-])/g).forEach((term) => this.rhs.push(new Term(term)));
  }
}

import { Term } from "../term";

/**
 * @name Equation
 * @example
 *        const equation = new Equation("1+1", "2");
 *        const equation2 = new Equation([new Term("5*X^0")], [new Term("4*X^2")]);
 */
export class Equation {
  private lhs: Term[] = [];
  private rhs: Term[] = [];

  constructor(lhs: string, rhs: string);
  constructor(lhs: Term[], rhs: Term[]);
  constructor(lhs: string | Term[], rhs: string | Term[]) {
    if (typeof lhs === "string" && typeof rhs === "string") {
      lhs.split(/(?=[+-])/g).forEach((term) => this.lhs.push(new Term(term)));
      rhs.split(/(?=[+-])/g).forEach((term) => this.rhs.push(new Term(term)));
    } else if (Array.isArray(lhs) && Array.isArray(rhs)) {
      this.lhs = lhs;
      this.rhs = rhs;
    }
  }

  /**
   * @name reduce
   * @description Reduce the equation to its simplest form.
   */
  public reduce(): Equation {
    const lhs = this.lhs.slice();
    const rhs = this.rhs.slice();
    rhs.forEach((term) => lhs.push(new Term(term.coefficient * -1, term.exponent)));
    lhs.sort((a, b) => a.exponent - b.exponent);
    const reducedLhs = lhs.reduce((acc: Term[], curr) => {
      const last = acc[acc.length - 1];
      if (last?.exponent === curr.exponent) {
        last.coefficient += curr.coefficient;
        return acc;
      }
      acc.push(curr);
      return acc;
    }, []);
    return new Equation(reducedLhs, []); // rhs should be empty
  }

  /**
   * @name toString
   */
  public toString(): string {
    const lhs: string | number = this.lhs.map((term) => term.toString()).join(" + ");
    const rhs: string | number = this.rhs.map((term) => term.toString()).join(" + ");
    if (lhs === "") return `0 = ${rhs}`;
    if (rhs === "") return `${lhs} = 0`;
    return `${lhs} = ${rhs}`;
  }
}

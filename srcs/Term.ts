import { InvalidTermError } from "./error";

/**
 * @name Term
 */
export class Term {
  private readonly coefficient: number;
  private readonly exponent: number;

  constructor(term: string) {
    const [coefficient, exponent] = term.split(/\*X\^|\*x\^/g);
    this.coefficient = +coefficient;
    this.exponent = +exponent;
    if (isNaN(this.coefficient) || isNaN(this.exponent)) throw new InvalidTermError();
  }
}

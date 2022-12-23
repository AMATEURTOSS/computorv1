import { InvalidTermError, TooHighExponentError } from "../../error";

/**
 * @name Term
 */
export class Term {
  public readonly coefficient: number;
  public readonly exponent: number;

  constructor(term: string) {
    const [coefficient, exponent] = term.split(/\*X\^|\*x\^/g);
    this.coefficient = +coefficient;
    this.exponent = +exponent;
    if (isNaN(this.coefficient) || isNaN(this.exponent)) throw new InvalidTermError();
    if (this.exponent > 2) throw new TooHighExponentError();
  }
}

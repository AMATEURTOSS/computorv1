import { x, powerOf } from "../../constant";
import { InvalidTermError, TooHighExponentError } from "../../error";

export class Term {
  public coefficient: number;
  public exponent: number;

  constructor(term: string);
  constructor(coefficient: number, exponent: number);
  constructor(arg1: string | number, arg2?: number) {
    if (typeof arg1 === "string") {
      if (arg1 === "0") arg1 = "0x^0";
      const [coefficient, exponent] = arg1.split("x^");
      this.coefficient = +coefficient;
      this.exponent = +exponent;
      if (isNaN(this.coefficient) || isNaN(this.exponent)) throw new InvalidTermError();
      if (this.exponent > 2) throw new TooHighExponentError();
    } else {
      this.coefficient = arg1;
      this.exponent = arg2 as number;
    }
  }

  public toString(): string {
    return `(${this.coefficient}${x}${powerOf[this.exponent]})`;
  }
}

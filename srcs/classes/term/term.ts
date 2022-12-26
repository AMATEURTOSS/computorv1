import { x, powerOf } from "../../constant";
import { InvalidTermError, TooHighExponentError } from "../../error";

export class Term {
  public coefficient: number;
  public exponent: number;

  constructor(term: string);
  constructor(coefficient: number, exponent: number);
  constructor(arg1: string | number, arg2?: number) {
    if (typeof arg1 === "string") {
      if (Number.isInteger(+arg1)) arg1 = `${arg1}x^0`;
      const [coefficient, exponent] = arg1.split("x");
      this.coefficient = +coefficient ?? 1;
      this.exponent = exponent.slice(1) === "" ? 1 : +exponent.slice(1);
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

import { Math } from "../math";
import { Term } from "../term";

/**
 * @name Equation
 * @example
 *        const equation = new Equation("1+1", "2");
 *        const equation2 = new Equation([new Term("5*X^0")], [new Term("4*X^2")]);
 */
export class Equation {
  public lhs: Term[] = [];
  public rhs: Term[] = [];
  public degree: number = NaN;

  constructor(lhs: string, rhs: string);
  constructor(lhs: Term[], rhs: Term[]);
  constructor(lhs: string | Term[], rhs: string | Term[]) {
    if (typeof lhs === "string" && typeof rhs === "string") {
      lhs = this.parseEquation(lhs);
      rhs = this.parseEquation(rhs);
      lhs.split(/(?=[+-])/g).forEach((term) => this.lhs.push(new Term(term)));
      rhs.split(/(?=[+-])/g).forEach((term) => this.rhs.push(new Term(term)));
    } else if (Array.isArray(lhs) && Array.isArray(rhs)) {
      this.lhs = lhs;
      this.rhs = rhs;
    }
    this.reduce();
    this.degree = this.lhs.reduce((acc, curr) => {
      if (isNaN(acc) || curr.exponent > acc) acc = curr.exponent;
      return acc;
    }, NaN);
  }

  /**
   * @name parseEquation
   * @description Parse the equation
   */
  private parseEquation(equation: string): string {
    let ret = equation;
    ret = ret.replace(/ /g, "");
    ret = ret.replace(/\+-/g, "-");
    ret = ret.toLowerCase();
    return ret;
  }

  /**
   * @name reduce
   * @description Reduce the equation to its simplest form.
   */
  private reduce() {
    const lhs = this.lhs.slice();
    const rhs = this.rhs.slice();
    rhs.forEach((term) => lhs.push(new Term(term.coefficient * -1, term.exponent)));
    lhs.sort((a, b) => a.exponent - b.exponent);
    this.lhs = lhs.reduce((acc: Term[], curr) => {
      const last = acc[acc.length - 1];
      if (last?.exponent === curr.exponent) {
        last.coefficient += curr.coefficient;
        return acc;
      }
      acc.push(curr);
      return acc;
    }, []);
    this.rhs = [];
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

  public getDiscriminant(): number {
    if (this.degree === 1) return 0;
    return Math.discriminant(
      this.getQuadraticCoefficient(),
      this.getLinearCoefficient(),
      this.getConstantCoefficient(),
    );
  }

  public solveEquation(): number[] {
    if (this.degree === 2) return this.solveQuadraticEquation();
    if (this.degree === 1) return this.solveLinearEquation();
    return [];
  }

  private solveQuadraticEquation(): number[] {
    return Math.solveQuadraticEquation(
      this.getQuadraticCoefficient(),
      this.getLinearCoefficient(),
      this.getConstantCoefficient(),
    );
  }

  private solveLinearEquation(): number[] {
    return Math.solveLinearEquation(this.getLinearCoefficient(), this.getConstantCoefficient());
  }

  private getQuadraticCoefficient(): number {
    return this.lhs.reduce((acc, curr) => {
      if (curr.exponent === 2) acc = curr.coefficient;
      return acc;
    }, 0);
  }

  private getLinearCoefficient(): number {
    return this.lhs.reduce((acc, curr) => {
      if (curr.exponent === 1) acc = curr.coefficient;
      return acc;
    }, 0);
  }

  private getConstantCoefficient(): number {
    return this.lhs.reduce((acc, curr) => {
      if (curr.exponent === 0) acc = curr.coefficient;
      return acc;
    }, 0);
  }
}

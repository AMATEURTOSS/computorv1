import { Math } from "../math";
import { Term } from "../term";

/**
 * @name Equation
 * @example
 *        const equation = new Equation("1+1", "2");
 */
export class Equation {
  public lhs: Term[] = [];
  public rhs: Term[] = [];
  public degree: number = 0;
  public quadraticCoefficient: number = 0;
  public linearCoefficient: number = 0;
  public constantCoefficient: number = 0;

  constructor(lhs: string, rhs: string) {
    this.parseSide(lhs).forEach((term) => this.lhs.push(new Term(term)));
    this.parseSide(rhs).forEach((term) => this.rhs.push(new Term(term)));
    this.reduce();
    this.degree = this.lhs.reduce(this.getDegree, 0);
    this.quadraticCoefficient = this.lhs.reduce(this.getQuadraticCoefficient, 0);
    this.linearCoefficient = this.lhs.reduce(this.getLinearCoefficient, 0);
    this.constantCoefficient = this.lhs.reduce(this.getConstantCoefficient, 0);
  }

  public toString(): string {
    const lhs: string | number = this.lhs.map((term) => term.toString()).join(" + ");
    const rhs: string | number = this.rhs.map((term) => term.toString()).join(" + ");
    if (lhs === "") return `0 = ${rhs}`;
    if (rhs === "") return `${lhs} = 0`;
    return `${lhs} = ${rhs}`;
  }

  public getDiscriminant(): number {
    if (this.degree === 1) return 0;
    return Math.discriminant(this.quadraticCoefficient, this.linearCoefficient, this.constantCoefficient);
  }

  public solveEquation(): number[] {
    if (this.degree === 2)
      return Math.solveQuadraticEquation(this.quadraticCoefficient, this.linearCoefficient, this.constantCoefficient);
    if (this.degree === 1) return Math.solveLinearEquation(this.linearCoefficient, this.constantCoefficient);
    return [];
  }

  private parseSide(side: string): string[] {
    let ret = side;
    ret = ret.replace(/ /g, "");
    ret = ret.replace(/\+-/g, "-");
    ret = ret.toLowerCase();
    return ret.split(/(?=[+-])/g);
  }

  /**
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

  private getDegree = (acc: number, curr: Term): number => (curr.exponent > acc ? curr.exponent : acc);
  private getQuadraticCoefficient = (acc: number, curr: Term): number => (curr.exponent === 2 ? curr.coefficient : acc);
  private getLinearCoefficient = (acc: number, curr: Term): number => (curr.exponent === 1 ? curr.coefficient : acc);
  private getConstantCoefficient = (acc: number, curr: Term): number => (curr.exponent === 0 ? curr.coefficient : acc);
}

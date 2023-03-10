export class Math {
  static abs(num: number): number {
    return num < 0 ? -num : num;
  }

  /**
   * @name sqrt
   * @description Babylonian method
   */
  static sqrt(num: number): number {
    if (num < 0) return NaN;
    if (num < 2) return num;

    let tmp = num;
    let ret = (tmp + num / tmp) / 2;

    while (this.abs(tmp - ret) >= 0.00001) {
      tmp = ret;
      ret = (tmp + num / tmp) / 2;
    }
    return ret;
  }

  /**
   * @description Calculate the discriminant of a quadratic equation
   */
  static discriminant(a: number, b: number, c: number): number {
    return b ** 2 - 4 * a * c;
  }

  static solveQuadraticEquation(a: number, b: number, c: number): number[] {
    const delta = b * b - 4 * a * c;
    if (delta < 0) return [];
    if (delta === 0) return [-b / (2 * a)];
    const sqrtDelta = this.sqrt(delta);
    return [(-b + sqrtDelta) / (2 * a), (-b - sqrtDelta) / (2 * a)];
  }

  static solveLinearEquation(a: number, b: number): number[] {
    if (a === 0) return [];
    return [-(b / a)];
  }

  static solveConstantEquation(a: number): number[] {
    if (a === 0) return [Infinity];
    return [];
  }
}

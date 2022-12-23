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
}

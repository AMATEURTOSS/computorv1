export class NoArgError extends Error {
  constructor() {
    super("No equation argument");
  }
}

export class TooManyArgError extends Error {
  constructor() {
    super("Too many arguments");
  }
}

export class InvalidEquationError extends Error {
  constructor() {
    super("Invalid equation");
  }
}

export class InvalidTermError extends Error {
  constructor() {
    super("Invalid term");
  }
}

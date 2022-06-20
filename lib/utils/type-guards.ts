
/**
 * @summary Determine if a value is truthy.
 * @param x Value to test.
 */
export function isTruthy<T> (x: T): boolean {
  return Boolean(x)
}

/**
 * @summary Determine if a value is falsy.
 * @param x Value to test.
 */
export function isFalsy<T> (x: T): boolean {
  // eslint-disable-next-line
  return !Boolean(x)
}

/**
 * @summary Determine if a value is nullish.
 * @param x Value to test.
 */
export function isNullish <T> (x: Nullable<T>): x is Nullish {
  return x === undefined || x === null
}

/**
 * @summary Determine if a value is a non-empty array.
 * @param xs Value to test.
 */
export function isNonEmptyArray <T> (xs: ArrayLike<T>): xs is NonEmptyArray<T> {
  return Array.isArray(xs) && xs.length > 0
}

/**
 * Determines if a possibly optional string is empty.
 * @param {Nullish<string>} x string to test
 */
export function isNonEmptyString (x: Nullable<string>): x is string {
  return !isNullish(x) && x !== ''
}

import {
  hasLessInterpolation,
  hasPsvInterpolation,
  hasScssInterpolation,
} from "../utils"
/**
 * Check whether a string has interpolation
 *
 * @param {string} string
 * @return {boolean} If `true`, a string has interpolation
 */
export default function (string) {
  // SCSS or Less interpolation
  // \$\(.+?\) is postcss-simple-vars way to interpolate
  if (hasLessInterpolation(string) || hasScssInterpolation(string) || hasPsvInterpolation(string)) { return true }

  return false
}

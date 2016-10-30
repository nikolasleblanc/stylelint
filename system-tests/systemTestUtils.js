import _ from "lodash"
import path from "path"

export function caseFilePath(caseNumber, fileName) {
  return path.join(__dirname, caseNumber, fileName)
}

export function caseStylesheetGlob(caseNumber) {
  return caseFilePath(caseNumber, "stylesheet.*")
}

export function caseConfig(caseNumber, ext = "json") {
  return caseFilePath(caseNumber, `config.${ext}`)
}

export function trimResults(results) {
  return results.map((result) => _.omit(result, "_postcssResult"))
}

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

export function prepResults(results) {
  return results.map((result) => {
    const preppedResult = _.omit(result, ["_postcssResult"])
    preppedResult.source = path.relative(__dirname, preppedResult.source)
    return preppedResult
  })
}

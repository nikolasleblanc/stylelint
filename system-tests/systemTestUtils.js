/* @flow */
import _ from "lodash"
import path from "path"

export function caseFilePath(caseNumber: string, fileName: string): string {
  return path.join(__dirname, caseNumber, fileName)
}

export function caseStylesheetGlob(caseNumber: string): string {
  return caseFilePath(caseNumber, "stylesheet.*")
}

export function caseConfig(caseNumber: string, ext: string = "json"): string {
  return caseFilePath(caseNumber, `config.${ext}`)
}

export function prepResults(results: Array<stylelint$result>): Array<stylelint$result> {
  return results.map((result) => {
    const preppedResult = _.omit(result, ["_postcssResult"])
    preppedResult.source = path.relative(__dirname, preppedResult.source)
    return preppedResult
  })
}

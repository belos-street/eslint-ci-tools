import { ESLint } from 'eslint'

export function filterResult(results: ESLint.LintResult[]) {
  return results.filter((item) => item.messages.length > 0)
}

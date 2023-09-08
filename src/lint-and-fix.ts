import { ESLint } from 'eslint'

export async function lintAndFix(eslint: ESLint, filePaths: string) {
  const results = await eslint.lintFiles(filePaths)
  // await ESLint.outputFixes(results)   //fix code

  countInfo(results)
  return results
}

function countInfo(results: ESLint.LintResult[]) {
  const count: number = results.reduce((pre, item) => (pre += item.messages.length), 0)
  console.log(`messages number is: ${count}`)
}

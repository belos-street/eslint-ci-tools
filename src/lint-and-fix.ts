import { ESLint } from 'eslint'

export async function lintAndFix(eslint: ESLint, filePaths: string) {
  const results = await eslint.lintFiles(filePaths)
  // await ESLint.outputFixes(results)   //fix code
  return results
}

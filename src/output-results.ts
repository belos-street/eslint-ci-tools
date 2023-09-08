import { ESLint } from 'eslint'
import { writeFileSync } from 'fs'
import { join } from 'path'

export function outputResults(results: ESLint.LintResult[], outPath: string) {
  writeFileSync(join(outPath), JSON.stringify(results))
  execSucces()
}

function execSucces() {
  console.log('scan successful')
}

import { type Linter } from 'eslint'
import { readFileSync } from 'fs'

export function readRules(path: string) {
  const fileText = readFileSync(path, 'utf-8')
  const rules = JSON.parse(fileText) as Partial<Linter.RulesRecord>
  return rules
}

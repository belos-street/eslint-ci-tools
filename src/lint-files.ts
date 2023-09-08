import { createESLintInstance } from './create-eslint-instance'
import { type Linter } from 'eslint'
import { lintAndFix } from './lint-and-fix'
import { ArgvValue } from './eslint-ci.type'
import { outputResults } from './output-results'
import { readRules } from './read-rules'
import { filterResult } from './filter-result'

/**
 * 检测文件
 * 1.读规则
 * 2.执行 - 获取结果
 * 3.输出结果
 */
export async function lintFiles(argvValue: ArgvValue) {
  const rules = readRules(argvValue.rulePath)

  const overrideConfig: Linter.Config<Linter.RulesRecord, Linter.RulesRecord> = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      //    'plugin:@typescript-eslint/recommended',
      'plugin:vue/vue3-essential',
      '@vue/eslint-config-typescript',
      'plugin:react/recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      //   parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    //   plugins: ['@typescript-eslint', 'vue'],
    plugins: ['vue', 'react'],
    // ignorePatterns: ['node_modules', 'dist/*'],
    rules
  }

  const eslint = createESLintInstance(overrideConfig)

  let results = await lintAndFix(eslint, argvValue.filePath)
  results = filterResult(results)

  outputResults(results, argvValue.outPath)
}

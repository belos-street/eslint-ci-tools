import { ESLint, type Linter } from 'eslint'
import { resolve } from 'path'

/**
 * 创建eslint实例
 */

const IgnorePath = '.eslintignore-ci'

export function createESLintInstance(overrideConfig: Linter.Config<Linter.RulesRecord, Linter.RulesRecord>) {
  return new ESLint({
    useEslintrc: false,
    overrideConfig: overrideConfig,
    fix: false,
    //  extensions: ['.vue', '.js', '.jsx', '.cjs', '.ts', '.tsx'],
    extensions: ['.vue', '.js', '.jsx', '.cjs'],
    ignore: true,
    ignorePath: resolve('config', IgnorePath) // ESLint 使用的文件路径而不是 $CWD/.eslintignore。 如果存在路径但文件不存在，则此构造函数将引发错误
  })
}

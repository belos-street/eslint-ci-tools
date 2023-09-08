import { ArgvKey, ArgvValue } from './src/eslint-ci.type'
import { lintFiles } from './src/lint-files'

/**
 * 入口函数
 * @param argv string[]
 */
function initEntry(argv: string[]) {
  const filePath: string | null = getArgv(argv, ArgvKey.filePath)
  const outPath: string | null = getArgv(argv, ArgvKey.outPath)
  const rulePath: string | null = getArgv(argv, ArgvKey.rulePath)

  if (filePath && outPath && rulePath) {
    const argvValue: ArgvValue = {
      filePath,
      outPath,
      rulePath
    }
    lintFiles(argvValue)
  } else {
    console.warn('参数错误，请检查 -f -o -r 参数，需要是绝对地址')
  }
}

function getArgv(argv: string[], key: ArgvKey) {
  const index = argv.findIndex((item) => item === key)
  return index !== -1 ? argv[index + 1] : null
}

initEntry(process.argv)

export enum ArgvKey {
  filePath = '-p',
  outPath = '-o',
  rulePath = '-r'
}

export type ArgvValue = Record<keyof typeof ArgvKey, string>

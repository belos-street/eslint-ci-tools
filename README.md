# Eslint Tool

## 使用方法

1. 进入工具目录
2. 执行扫描
   - ts-node typescrip执行环境
   - entry.ts 脚本入口文件
   - -p 扫描项目目录，绝对路径
   - -o 结果输出目录，绝对路径
   - -r 规则文件，绝对路径，json文件

```powershell
pnpm ts-node entry.ts -p xxx/xxxx -o xxxx -r xxxx.json
```


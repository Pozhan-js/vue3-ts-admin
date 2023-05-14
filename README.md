# my-vue3-admin

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### commit 提交格式

feat: Add new feature to backend project

```
"feat: 完成登录请求以及token持久化"
git commit -m "feat: 完成登录请求以及token持久化"
```

// TODO: 用来标记待办的地方。常常在有些地方，我们的功能并没有实现，使用 ToDo 标记我们可以快速定位需要实现的部分。
// HACK: 用来标记可能需要更改的地方。在写代码的时候，有的地方我们并不确定他是正确的，可能未来有所更改，这时候可以使用 HACK 标记。
// NOTE: 添加一些说明文字。
// INFO: 用来表达一些信息。
// TAG: 用来创建一些标记。
// XXX: 用来标记一些草率实现的地方。在写代码的时候，有些地方需要频繁修改，这时候使用 XXX 标记。
// BUG: 用来标记 BUG~
// FIXME: 用来标记一些需要修复的位置，可以快速定位。

### 解决浏览器报错 new.api no function

//FIXME: 可能是 tsconfig 中有报错 提示 ts 类型检测 在 5.0 版本有问题 要忽略

### 在 compilerOptions 属性中添加 "ignoreDeprecations": "5.0"来忽略

### 解决修改 tsconfig 文件属性后 commit 校验提交不上去 git commit -m "message" --no-verify

（这样就会忽略校验直接提交上去）

### // 清理缓存

npm cache clean --force
// powershell 执行递归删除 node_modules 文件夹
rd -r node_modules
// 删除包版本锁
ri package-lock.json
// 安装 npm
npm install

### 解决 axios 报错 下载对应版本 axios ^0.26.1

### yarn add lint-staged --dev （该插件只对暂存区的文件进行校验）

### 修改.husky/pre-commit，修改内容如下

. "$(dirname "$0")/\_/husky.sh"

npx lint-staged

### dropdown 组件，有时当鼠标移入标题时会出现外边框

### 给我解释一下 InstanceType<typeof ElForm>这段代码的意思?

### typeof ElForm 表示获取 ElForm 这个类的类型，也就是获取 ElForm 的构造函数的类型。

### InstanceType<T> 是 TypeScript 中的一个工具类型，可以获取泛型参数 T 所表示的构造函数类型的实例类型。因此，InstanceType<typeof ElForm> 表示获取 ElForm 类型的实例类型，即获取 ElForm 类型的一个实例的类型。

### 因此，这段代码的含义是获取一个 ElForm 类型的实例的类型。

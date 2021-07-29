import vuePlugin  from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`

const overrides = {
    compilerOptions: { declaration: true }, //自动生成ts声明文件 生成一些...d.ts文件
    exclude: ["tests/**/*.ts", "tests/**/*.tsx"] //不要管这些文件
  }

export { name, file }

export default {
    input: 'src/index.ts', // 要将什么文件打包编译
    output: {
      name,
      file: file('esm'),    //打包后的文件存放路径
      format: 'es'         //格式默认es
    },
    plugins:[
        vuePlugin(),//帮助处理vue文件的打包编译
        css({ output: 'bundle.css' }), //帮助处理css文件的打包编译,
        typescript({ tsconfigOverride: overrides }),
    ],
    // 第三方的vue，lodash-es库不要打包进去。
    external:[
        'vue',
        'lodash-es'
    ]
}
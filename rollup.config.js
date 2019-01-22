import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'lib/js/src/Index.bs.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      sourceMap: false
    })
  ],
}
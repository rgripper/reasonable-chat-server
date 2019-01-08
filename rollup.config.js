import bucklescript from 'rollup-plugin-bucklescript'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/Index.re',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    bucklescript(),
    resolve()
  ],
}
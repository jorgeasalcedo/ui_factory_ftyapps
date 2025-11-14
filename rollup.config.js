const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve.default({
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }),
    commonjs(),
    typescript.default({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist'
    }),
    babel.default({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ]
    })
  ],
  external: ['react', 'react-dom', 'styled-components']
};

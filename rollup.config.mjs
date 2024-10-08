import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
// import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg";
import image from '@rollup/plugin-image';

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: ["node_modules", "node_modules/**", "node_modules/**/*"],
        presets: ["@babel/preset-react"],
      }),
      external(["react", "react-dom", "prop-types"]),
      resolve(),
      commonjs(),
      svg(),
      image()
    ],
  },
];

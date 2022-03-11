import { terser } from "rollup-plugin-terser";

const variants = ["wasm"];
const formats = ["umd", "es"];

const outputs = variants.reduce(
  (acc, variant) => [
    ...acc,
    {
      input: `web_tracking/javascript/src/index_${variant}.js`,
      output: formats.reduce(
        (acc, format) => [
          ...acc,
          {
            file: `web_tracking/javascript/dist/${variant}/${format}/index.js`,
            sourcemap: true,
            format,
            name: "WebTracking",
            plugins: [terser()],
          },
        ],
        []
      ),
    },
  ],
  []
);

export default outputs;

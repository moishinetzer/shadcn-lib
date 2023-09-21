import dts from "bun-plugin-dts";
import lightningcss from "bun-lightningcss";

await Bun.build({
  entrypoints: ["lib/index.ts"],
  outdir: "dist",
  plugins: [dts(), lightningcss()],
  external: ["react", "react-dom"],
});

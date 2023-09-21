import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["lib/index.ts"],
  outdir: "dist",
  plugins: [dts()],
  external: ["react", "react-dom"],
});

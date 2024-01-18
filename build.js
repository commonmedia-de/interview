#!/usr/bin/env node

const esbuild = require("esbuild");

esbuild
  .build({
    outdir: "dist/",
    format: "cjs",
    platform: "node",
    entryPoints: ["src/index.ts"],
    bundle: true,
  })
  .then(() => {
    console.log("Build succeeded");
  });

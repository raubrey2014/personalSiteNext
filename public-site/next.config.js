const transpileModules = require("next-transpile-modules");
const mdx = require("@next/mdx");

const withMDX = mdx({
  extension: /\.mdx?$/,
});

const withTranspileModules = transpileModules(["@rma/components", "@rma/core"]);

module.exports = withTranspileModules(
  withMDX({ pageExtensions: ["ts", "tsx", "mdx"] })
);

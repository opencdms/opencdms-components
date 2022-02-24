const path = require("path");
const fs = require("fs-extra");
const concat = require("concat");

(async function concatBundles() {
  const buildDir = path.resolve(__dirname, "../dist", "webcomponents");
  const outDir = path.resolve(__dirname, "../components");

  fs.ensureDirSync(outDir);
  fs.emptyDirSync(outDir);

  const files = ["runtime.js", "polyfills.js", "main.js"];

  const filePaths = files.map((filename) => path.resolve(buildDir, filename));

  await concat(filePaths, `${outDir}/index.js`);
})();

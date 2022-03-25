const path = require("path");
const fs = require("fs-extra");
const concat = require("concat");

/** Combine output angular JS into single index.js file for easier consumption */
(async function concatBundles() {
  const buildDir = path.resolve(__dirname, "../dist", "webcomponents");
  const outDir = path.resolve(__dirname, "../lib");

  fs.ensureDirSync(outDir);
  fs.emptyDirSync(outDir);

  // List only files to include - this excludes lazy-loaded modules (currently all dev only)
  const concatFiles = ["runtime.js", "polyfills.js", "main.js"];

  const filePaths = concatFiles.map((filename) => path.resolve(buildDir, filename));

  await concat(filePaths, `${outDir}/index.js`);

  // Copy any additional standalone files
  const standaloneFiles = ["styles.css"];

  for (const filename of standaloneFiles) {
    const src = path.resolve(buildDir, filename);
    const dest = path.resolve(outDir, filename);
    fs.copyFileSync(src, dest);
  }
})();

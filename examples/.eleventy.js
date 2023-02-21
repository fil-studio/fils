const sass = require('sass');
const CleanCSS = require('clean-css');
const fs = require('fs');
const process = require('process');
const esbuild = require('esbuild');
const alias = require('esbuild-plugin-alias');
const chokidar = require('chokidar');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const isProduction = process.env.ELEVENTY_ENV === 'production';

const examples = [
  'scroller',
  'selective-glow',
  'vfx-common-pipeline',
  'vfx-pipeline',
  'vfx-materials',
  'vfx-custom-material',
  'ui',
  'ui-icons',
  'nomad',
  'core',
  'color-picker'
];

try {
  for(const example of examples) {
    fs.mkdirSync(`public/${example}/js`, { recursive: true });
    fs.mkdirSync(`public/${example}/css`, { recursive: true });
  }
} catch (e) {}

console.log('Production:', isProduction);

const compileCss = (example) => {
  const path = `./src/${example}/css/main.scss`;

  const result = sass.compile(path);
  const css = result.css.toString();
  const finalCSS = isProduction ? new CleanCSS({}).minify(css).styles : css;
  fs.writeFile(`public/${example}/css/main.css`, finalCSS, () => {});
}

const compileJs = (example) => {

  const path = `src/${example}/js/main.js`;

  esbuild.build({
    entryPoints: [path],
    bundle: true,
    minify: isProduction,
    sourcemap: !isProduction,
    define: { DEV_MODE: `${!isProduction}` },
    loader: { '.glsl': 'text', '.vert': 'text', '.frag': 'text', '.css' : 'text' },
    outfile: `public/${example}/js/main.js`,
    plugins: [
      alias({
        three: __dirname + '/node_modules/three/build/three.min.js',
      }),
    ],
  });

}

const buildAllCSS = () => {
  for(const example of examples) compileCss(example);
}

const buildAllJS = () => {
  for(const example of examples) compileJs(example);
}

if(!isProduction) {

  for(const example of examples) {

    const path = `src/${example}`;

    chokidar.watch(`${path}/css`).on('change', (eventType, file) => {
      console.log(`Updated SCSS [${eventType}]`);
      compileCss(example);
    });

    chokidar.watch(`${path}/js`).on('change', (eventType, file) => {
      console.log(`Updated JS [${eventType}]`);
      compileJs(example);
    });

  }

  chokidar.watch('../packages').on('change', (eventType, file) => {
    console.log(`Package Updated [${eventType}]`);
    buildAllCSS();
    buildAllJS();
  });

}

buildAllCSS();
buildAllJS();

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",
    ghostMode: false,
  })

  // Folders to copy to public
  eleventyConfig.addPassthroughCopy({'src/assets' : 'assets'});

  // To-do: mirar si amb el path 0 ja funciona
  eleventyConfig.addWatchTarget('**');

  // To-do: FIX - path create a loop if any package in dev mode
  // eleventyConfig.addWatchTarget('../packages/src/**.css');
  // eleventyConfig.addWatchTarget('../packages/src/**.ts');

  // This allows Eleventy to watch for file changes during local development.
  eleventyConfig.setUseGitIgnore(false);

  // To-do: FIX - think is no longer needed
  // eleventyConfig.setWatchJavaScriptDependencies(false);

  return {
    dir: {
      data: '../../../data',
      input: 'src/views/pages',
      includes: '../partials',
      layouts: '../base',
      output: 'public',
    },
    templateFormats: ['html', 'md', 'njk'],
    htmlTemplateEngine: 'njk',
  };
};

const sass = require('sass');
const CleanCSS = require('clean-css');
const fs = require('fs');
const process = require('process');
const esbuild = require('esbuild');
const alias = require('esbuild-plugin-alias');

const isProduction = process.env.ELEVENTY_ENV === 'production';

const examples = [
  'scroller',
  'selective-glow',
  'ui',
  'nomad',
  'core',
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
    define: { DEV_MODE: !isProduction },
    loader: { '.glsl': 'text', '.vert': 'text', '.frag': 'text' },
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
  const chokidar = require('chokidar');

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

}

buildAllCSS();
buildAllJS();

module.exports = function (eleventyConfig) {
  // Folders to copy to build dir (See. 1.1)
  eleventyConfig.addPassthroughCopy({'src/assets' : 'assets'});

  // Todo mirar si amb el path 0 ja funciona
  eleventyConfig.addWatchTarget('**');

  // This allows Eleventy to watch for file changes during local development.
  eleventyConfig.setUseGitIgnore(false);

  // browser sync options
  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false,
  });

  eleventyConfig.setWatchJavaScriptDependencies(false);

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
    passthroughFileCopy: true,
  };
};

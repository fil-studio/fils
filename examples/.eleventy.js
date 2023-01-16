const sass = require('sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const CleanCSS = require('clean-css');
const fs = require('fs');
const process = require('process');
const esbuild = require('esbuild');
const alias = require('esbuild-plugin-alias');

const OUT_CSS = 'public/css/main.css';
const OUT_JS = 'public/js/main.js';

const isProduction = process.env.ELEVENTY_ENV === 'production';

const examples = [
  'scroller',
  'glow'
];


// create paths just in case
try {
  fs.mkdirSync('public');
  fs.mkdirSync('public/css', {recursive: true});
  fs.mkdirSync('public/js', {recursive: true});
} catch (e) {}

console.log('Production:', isProduction);

const buildAllCSS = () => {
  sass.compile(
    { file: 'src/styles/main.scss' },
    (err, result) => {
      const css = result.css.toString();
      postcss([autoprefixer])
        .process(css)
        .then((result) => {
          const css = result.css;
          const finalCSS = isProduction ? new CleanCSS({}).minify(css).styles : css;
          fs.writeFile(OUT_CSS, finalCSS);
        });
    }
  );
}

const buildAllJS = () => {

  esbuild.build({
    entryPoints: ['src/js/main.js'],
    bundle: isProduction,
    minify: !isProduction,
    sourcemap: !isProduction,
    define: { DEV_MODE: !isProduction },
    loader: {'.glsl': 'text', '.vert': 'text', '.frag': 'text'},
    outfile: OUT_JS,
    plugins: [
      alias({
        three: __dirname + '/node_modules/three/build/three.min.js',
      }),
    ],
  });
}

if(!isProduction) {
  const chokidar = require('chokidar');

  chokidar.watch('src/styles/').on('change', (eventType, file) => {
    console.log(`Updated SCSS [${eventType}]`);
    buildAllCSS();
  });

  chokidar.watch('src/js/').on('change', (eventType, file) => {
    console.log(`Updated JS [${eventType}]`);
    buildAllJS()
  });
}




module.exports = function (eleventyConfig) {
  // Folders to copy to build dir (See. 1.1)
  eleventyConfig.addPassthroughCopy({'src/assets' : 'assets'});

  eleventyConfig.addWatchTarget("src/js/");
  eleventyConfig.addWatchTarget("src/styles/");

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

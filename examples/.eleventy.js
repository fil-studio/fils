const sass = require('sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const CleanCSS = require('clean-css');
const fs = require('fs');
const process = require('process');
const isProduction = process.env.ELEVENTY_ENV === 'production';
const esbuild = require('esbuild');
const alias = require('esbuild-plugin-alias');

const OUT_CSS = 'public/css/main.css';
const OUT_JS = 'public/js/main.js';

// create paths just in case
try {
  fs.mkdirSync('public');
  fs.mkdirSync('public/css', {recursive: true});
  fs.mkdirSync('public/js', {recursive: true});
} catch (e) {}

console.log('Production:', isProduction);

console.log('Compiling SCSS...');
const css = sass
  .renderSync({ file: 'src/styles/main.scss' })
  .css.toString();
const result = postcss([autoprefixer]).process(css);
while (!result.css);
const finalCSS = new CleanCSS({}).minify(result.css).styles;
fs.writeFileSync(OUT_CSS, finalCSS);

console.log('Compiling JS...');
esbuild.build({
  entryPoints: ['src/js/main.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  define: { DEV_MODE: false },
  loader: {'.glsl': 'text', '.vert': 'text', '.frag': 'text'},
  // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outfile: OUT_JS,
  plugins: [
    alias({
      three: __dirname + '/node_modules/three/build/three.min.js',
    }),
  ],
});

if(!isProduction) {
  const chokidar = require('chokidar');

  chokidar.watch('src/styles/').on('change', (eventType, file) => {
    console.log(`Updated SCSS [${eventType}]`);
    sass.render(
      { file: 'src/styles/main.scss' },
      function (err, result) {
        const css = result.css.toString();
        postcss([autoprefixer])
          .process(css, {
            from: 'src/styles/main.scss',
            to: OUT_CSS,
          })
          .then((result) => {
            fs.writeFile(OUT_CSS, result.css, (error) => {
              if (error) console.log(error);
            });
          });
      }
    );
  });

  chokidar.watch('src/js/').on('change', (eventType, file) => {
    console.log(`Updated JS [${eventType}]`);
    esbuild.build({
      entryPoints: ['src/js/main.js'],
      bundle: true,
      minify: false,
      sourcemap: false,
      define: { DEV_MODE: true },
      loader: {'.glsl': 'text', '.vert': 'text', '.frag': 'text'},
      // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
      outfile: OUT_JS,
      plugins: [
        alias({
          three: __dirname + '/node_modules/three/build/three.min.js',
        }),
      ],
    });
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

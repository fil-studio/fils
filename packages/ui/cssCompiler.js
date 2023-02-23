
const fs = require('fs');
const sass = require('sass');
const CleanCSS = require('clean-css');

async function compileCss() {

	const result = sass.compile('./src/scss/main.scss');
	const css = result.css.toString();

	const minified = new CleanCSS().minify(css).styles;

	return minified;
}
compileCss().then((css) => {
	const exportString = `export const CSS = \`${css}\`;`;
	const tsPath = `${__dirname}/src/styles.ts`;
	fs.writeFileSync(tsPath, exportString);
})

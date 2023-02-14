
const sass = require('sass');
const CleanCSS = require('clean-css');
const { replace } = require('esbuild-plugin-replace');

const { build } = require("esbuild");

const glob = require("glob");
const entryPoints = glob.sync("./src/**/*.ts");

async function compileCss() {

	const result = sass.compile('./src/scss/main.scss');
	const css = result.css.toString();

	const minified = new CleanCSS().minify(css).styles;

	return minified;
}

compileCss().then((css) => {

	build({
		entryPoints,
		outdir: "lib",
		minify: false,
		bundle: false,
		sourcemap: false,
		tsconfig: "tsconfig.json",
		plugins: [
			replace({
				'__css__': css
			}),
		]
	})
})

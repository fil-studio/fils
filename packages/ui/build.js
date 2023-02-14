
const sass = require('sass');
const CleanCSS = require('clean-css');

const { dtsPlugin } = require("esbuild-plugin-d.ts");
const { replace } = require('esbuild-plugin-replace');

const { build } = require("esbuild");

const glob = require("glob");
const entryPoints = glob.sync("./src/**/*.ts");

// sass src/scss/main.scss:src/bundle/bundle.css && Cleancss -o src/bundle/bundle.min.css src/bundle/bundle.css && echo \"scss compiled\"
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
		minify: true,
		bundle: false,
		sourcemap: true,
		tsconfig: "tsconfig.json",
		plugins: [
			replace({
				'__css__': css
			}),
			dtsPlugin()
		]
	})

});
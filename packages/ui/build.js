
const fs = require('fs');
const path = require('path');
const sass = require('sass');
const CleanCSS = require('clean-css');

const searchString = '__css__';

async function compileCss() {

	const result = sass.compile('./src/scss/main.scss');
	const css = result.css.toString();

	const minified = new CleanCSS().minify(css).styles;

	return minified;
}

function replaceStringInFile(filePath, css) {
	const fileContents = fs.readFileSync(filePath, 'utf8');
	const newFileContents = fileContents.replace(searchString, css);
	fs.writeFileSync(filePath, newFileContents);
}

function processFile(filePath, css) {
	if (filePath.endsWith('.js') || filePath.endsWith('.d.ts')) {
		replaceStringInFile(filePath, css);
	}
}

function processDirectory(directoryPath, css) {
	const files = fs.readdirSync(directoryPath);
	for (const file of files) {
		const filePath = path.join(directoryPath, file);
		const stat = fs.statSync(filePath);
		if (stat.isDirectory()) {
			processDirectory(filePath, css);
		} else {
			processFile(filePath, css);
		}
	}
}


compileCss().then((css) => {
	processDirectory('./lib', css);
})

const fs = require("fs");
const { spawn } = require('child_process');
const { getPackagesDirs } = require('../utils/packages');

function cleanPackage(packageDir) {


	const packageJson = require(`${packageDir}/package.json`);

	console.log(`Cleaning package "${packageJson.name}"...`);

	spawn('rm', ['-rf', `${packageDir}/lib`]);

	fs.unlink(`${packageDir}/tsconfig.tsbuildinfo`, () => {
		console.log(`Cleaned package "${packageJson.name}"`);
	});

}

// Clean all packages
(async () => {

	const packagesDirs = await getPackagesDirs();


	console.log(`Cleaning ${packagesDirs.length} packages...`);

	for (const packageDir of packagesDirs) {
		cleanPackage(`../${packageDir}`);
	}
})();
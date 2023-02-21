const { spawn } = require("child_process");
const fs = require("fs");
const { getPackagesDirs } = require('../utils/packages');

const defaultTsConfig = {
	"extends": "../../tsconfig.json",
	"compilerOptions": {
		"outDir": "lib",
		"rootDir": "src",
		"declarationDir": "lib",
		"baseUrl": "lib",
	},
	"include": [
		"src/**/*.ts",
	]
}

async function preparePackage(packageDir){

	console.log(`Preparing package "${packageDir}"...`);

	const packageJson = require(`${packageDir}/package.json`);

	console.log(`Preparing package "${packageJson.name}"...`);

	// await fs.mkdirSync(`${packageDir}`, 'lib');

	// fs.writeFile(`${packageDir}/tsconfig.json`, defaultTsConfig?;


	spawn('yarn', { cwd: packageDir });

}

(async () => {

	console.log("Preparing packages...");
	const packageDirs = await getPackagesDirs();
	for(const packageDir of packageDirs){
		await preparePackage(`../${packageDir}`);
	}

})();
const fs = require("fs");
const esbuild = require("esbuild");
const { spawn } = require('child_process');
const { getPackagesDirs } = require("./utils/packages");


function runTypescript(directory) {
	console.log(`Running tsc for "${directory}"...`);
	return new Promise((resolve, reject) => {
		const tsc = spawn('tsc', ['--build', '../../tsconfig.json'], { cwd: directory });

		tsc.stdout.on('data', (data) => {
			console.log(data.toString());
		});
		tsc.stderr.on('data', (data) => {
			console.error(data.toString());
		});

		tsc.on('close', (code) => {
			if (code === 0) {
				resolve();
			} else {
				reject(`tsc failed with code ${code}`);
			}
		});

		tsc.on('error', reject);
	});
}

async function runEsbuild(packageDir) {

	// Get package.json
	const packageJson = require(`${packageDir}/package.json`);

	// Check if package has a tsconfig.json file
	const tsconfigPath = `./tsconfig.json`;
	const tsconfigExists = fs.existsSync(tsconfigPath);
	if (!tsconfigExists) console.error(`No tsconfig found for package "${packageJson.name}"`);


	// Get output dir
	const tsconfig = require(tsconfigPath);
	let outdir = `${packageDir}/${tsconfig.compilerOptions.outDir}`;

	const entryPoint = `${packageDir}/src/`;

	// Check if package has SCSS or GLSL files
	const hasSCSS = fs.existsSync(`${packageDir}/src/scss/main.scss`);
	const hasGLSL = fs.existsSync(`${packageDir}/src/glsl/main.glsl`);

	let plugins = [];

	if (hasSCSS) {
		plugins.push(
			esbuild.sassPlugin({
				sourceMap: false,
				includePaths: ["./node_modules"]
			})
		);
	}

	if (hasGLSL) {
		plugins.push(
			esbuild.glslifyPlugin()
		);
	}

	await esbuild.build({
		entryPoints: [entryPoint],
		bundle: false,
		outdir,
		format: "esm",
		plugins,
		loader: {
			".scss": "text",
			".glsl": "text"
		},
		sourcemap: true,
		platform: "node",
		target: "es6",
	});

}

const buildPackage = async (packageDir) => {

	const packageJson = require(`${packageDir}/package.json`);

	// Compile tsc
	await runTypescript(packageDir);

	// Compile esbuild
	// await runEsbuild(packageDir);

	console.log(`Built package "${packageJson.name}"`);
};

// Build all packages
(async () => {

	const packagesDirs = await getPackagesDirs();

	console.log(`Building ${packagesDirs.length} packages...`);

	for (const packageDir of packagesDirs) {
		const packageJsonPath = `${packageDir}/package.json`;

		console.log(`Building package "${packageJsonPath}"...`);

		await buildPackage(packageDir);
	}
})();
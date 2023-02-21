
const packagesDir = './packages';

const { readdir } = require('fs').promises;

async function getPackageNames() {
	const packageNames = await readdir(packagesDir);
	return packageNames.filter(name => !name.startsWith('.'));
}

async function getPackagesDirs() {
	const packageNames = await getPackageNames();
	const packagesDirs = packageNames.map((name) => `${packagesDir}/${name}`);

	return packagesDirs;
}


module.exports.getPackagesDirs = getPackagesDirs;
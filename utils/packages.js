const { readdirSync } = require('fs');

const packagesDir = 'packages';

async function getPackageNames() {
	let packageNames = await readdirSync(`./${packagesDir}`).filter(name => name !== '.DS_Store');

	return packageNames;
}

async function getPackagesDirs() {
	const packageNames = await getPackageNames();
	const packagesDirs = packageNames.map((name) => `${packagesDir}/${name}`);

	return packagesDirs;
}


module.exports.getPackagesDirs = getPackagesDirs;
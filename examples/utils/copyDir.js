const fs = require('fs-extra');

module.exports = function copyDir(sourceDir, destDir, callback) {
	try {
		fs.removeSync(destDir);
		fs.copySync(sourceDir, destDir);
		console.log(`Directory copied from ${sourceDir} to ${destDir}`);
		callback();
	} catch (err) {
		console.error(`Error copying directory: ${err}`);
		callback(err);
	}
}
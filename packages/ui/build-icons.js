const fs = require('fs');
const path = require('path');

const folderPath = `${__dirname}/original-icons`;
const jsonPath = 'path/to/json-file.json';

// get all svg files in folder
const svgFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.svg'));

// create an object to store the content of each file
const svgContent = {};

// read the content of each file and add it to the object
svgFiles.forEach(file => {
	const filePath = path.join(folderPath, file);
	svgContent[file] = fs.readFileSync(filePath, 'utf8');
});

// write the object to a JSON file
fs.writeFileSync(jsonPath, JSON.stringify(svgContent));
console.log(`SVG content saved to ${jsonPath}`);
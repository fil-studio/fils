const fs = require('fs');
const path = require('path');

const folderPath = `${__dirname}/original-icons`;
const tsPath = `${__dirname}/src/Icons.ts`;

function snakeToCamel(snake) {
	return snake.replace(/_([a-z])/g, (match) => match[1].toUpperCase());
}

// get all svg files in folder
const svgFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.svg'));
// create an object to store the content of each file
const svgContent = {};

const namesList = [];

// read the content of each file and add it to the object
svgFiles.forEach(file => {
	const filePath = path.join(folderPath, file);
	const name = snakeToCamel('ui_' + file.replace('.svg', ''));
	namesList.push(name);
	svgContent[name] = fs.readFileSync(filePath, 'utf8');
});

// write the object to a JSON file
let exportString = ``;
for(const name of namesList) {
	exportString += `export const ${name} = \`${svgContent[name]}\`;
`;
}
fs.writeFileSync(tsPath, exportString);

console.log(`ICONS REGENERATED`);
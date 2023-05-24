const { log } = require("console");
const fs = require("fs");

const balcklist = [".DS_Store"]
const src = __dirname + "/../packages/";

log("Cleaning up package builds...");

const dirs = fs.readdirSync(src);

for(const dir of dirs) {
    if(balcklist.indexOf(dir) > -1) continue;
    const f = `${src}${dir}/lib`;
    log(`Cleaning ${f} ...`);
    try{fs.rmSync(f, {recursive: true});}catch(e){}
}
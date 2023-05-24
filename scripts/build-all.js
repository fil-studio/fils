const { execSync } = require('child_process');
const { log } = require("console");

log("Building all fils...");

const deps = ["ani", "color", "io", "math", "ui-icons", "utils"]

const install = (d) => {
    const output = execSync(`yarn --cwd ${__dirname}/../packages/${d} install`);
    log(output.toString());
}

for(const d of deps) {
    log(`Building ${d}...`);
    install(d);
}

const pckgs = ["gen", "gfx", "nomad", "phy", "scroller", "ui", "vfx"]

for(const d of pckgs) {
    log(`Building ${d}...`);
    install(d);
}
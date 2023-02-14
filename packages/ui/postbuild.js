const { promises: fs } = require("fs");
fs.copySync('src/bundle/bundle.min.css', 'lib/bundle.min.css');
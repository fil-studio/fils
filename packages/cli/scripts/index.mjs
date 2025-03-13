#!/usr/bin/env node

import c from "ansi-colors";
import { init } from "./init.mjs";
import { resolve } from 'node:path';

const cmd = process.argv[2];

if(!cmd) {
    console.log(c.red('[fil Error]'), c.gray('No command specified!'));
    console.log('Usage:', c.gray('fil <command> <options>'));
    process.exit(0);
}

if(cmd.toLowerCase() === 'init') {
    const path = process.argv[3];

    if(!path) {
        console.log(c.red('[fil Error]'), c.gray('Init command needs a path'));
        console.log('Usage:', c.gray('fil init <path> [template]'));
        process.exit(0);
    }

    const template = process.argv[4] ? process.argv[4] : 'web';
    console.log(c.cyan('[fil]'), c.gray(`Initializing Boilerplate ${template}...`));

    init(resolve(process.cwd(), path), template === 'web' ? 'main' : template).then(() => {
        console.log(c.green('Done'));
    }).catch(e => {
        console.log(c.red('Error'));
    });
}
import c from "ansi-colors";

import { exec } from 'node:child_process';
import { rmSync } from "node:fs";

export function init(path) {
    console.log(c.yellow('[fil]'), c.gray('Cloning...'));
    return new Promise((resolve, reject) => {
        exec(`git clone git@github.com:jocabola/web-template.git ${path}`, (error, stdout, stderr) => {
            if(error) {
                console.log(c.red('[fil Error]'), c.gray(stderr));
                reject();
            } else {
                console.log(c.yellow('[fil]'), c.gray('Cleaning up...'));
                rmSync(`${path}/.git`, {
                    recursive: true
                });
                resolve();
            }
        })
    });
}
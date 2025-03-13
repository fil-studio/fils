import c from "ansi-colors";

import { exec } from 'node:child_process';
import { rmSync } from "node:fs";

const REPO = "git@github.com:fil-studio/boilerplate.git";
const TOOLKIT_REPO = "git@github.com:fil-studio/toolkit-boilerplate-v2.git";

function clone(path, branch="main", repo=REPO) {
    console.log(c.yellow('[fil]'), c.gray(`Cloning into "${path}"...`));
    return new Promise((resolve, reject) => {
        exec(`git clone -b ${branch} --single-branch ${repo} "${path}"`, (error, stdout, stderr) => {
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

export function init(path, branch="main") {
    if(branch === "toolkit") {
        return clone(path, 'main', TOOLKIT_REPO);
    }
    return clone(path, branch);
}
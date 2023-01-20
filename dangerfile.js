import {message, danger, fail} from "danger"
const fs = require("fs");

const modifiedFiles = danger.git.modified_files;
const newFiles = danger.git.created_files;
const changedFiles = [...modifiedFiles, ...newFiles];

const changedMD = changedFiles.join("- ")
message("Changed Files in this PR: \n - " + changedMD)

const changedJSFiles = changedFiles.filter(file => file.endsWith(".js"));

// message("Changed JS Files in this PR:- " + changedJSFiles)

// for(let file of changedFiles) {
//     const fileContent = fs.readFileSync(file).toString();
//     if(fileContent.includes("console.logs")) {
//         console.debug("fileName", {file, fileContent})
//         fail("Remove console log from your PR");
//         break;
//     }
// }
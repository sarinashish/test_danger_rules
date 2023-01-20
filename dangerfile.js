import { message, danger, fail } from "danger"
// import yarn from 'danger-plugin-yarn'
// const fs = require("fs");

// const findNewDependencies = (packageDiff) => {
//     console.debug(packageDiff);
//     const added = [];
//     for (const element of [packageDiff.dependencies, packageDiff.devDependencies]) {
//         if (element && element.added && element.added.length) {
//             added.push.apply(added, element.added)
//         }
//     }
//     return added
// }

// async function findDeps() {
//     let changedFiles = findChangedFiles();


//     const packageJSONFile = changedFiles.includes("package.json");

//     const testJSON = changedFiles.includes("test.json");

//     console.log("packageJSONFile", packageJSONFile)

//     if (packageJSONFile) {
//         // if package json file is changed
//         const jsonDiff = await danger.git.JSONDiffForFile("package.json");
//         console.debug({jsonDiff: JSON.stringify(jsonDiff)})
//         const newDeps = findNewDependencies(jsonDiff);
//         console.debug("newDeps", { newDeps });
//     }

//     if (testJSON) {
//         // if package json file is changed
//         const jsonDiff = await danger.git.JSONDiffForFile("package.json");
//         console.debug({jsonDiff: JSON.stringify(jsonDiff)})
//         const newDeps = findNewDependencies(jsonDiff);
//         console.debug("newDeps", { newDeps });
//     }

    
// }

// function findChangedFiles() {
//     const modifiedFiles = danger.git.modified_files;
//     const newFiles = danger.git.created_files;
//     const changedFiles = [...modifiedFiles, ...newFiles];

//     const changedMD = changedFiles.join("- ")
//     message("Changed Files in this PR: \n - " + changedMD)

//     const changedJSFiles = changedFiles.filter(file => file.endsWith(".js"));

//     message("Changed JS Files in this PR:- " + changedFiles)
//     return changedFiles;
// }

// // findDeps();


// async function detectInlineCallBack() {
//     const changedFiles = findChangedFiles();
//     console.log({ changedFiles });
//     for(let index in changedFiles) {
//         let diffInFile = await danger.git.diffForFile(changedFiles[index]);
//         let JSONDiffForFile = await danger.git.diffForFile(changedFiles[index]);
//         if(changedFiles[index] == 'App.js') {
//             fail("change found", changedFiles[index], 12)
//             // let added = JSONDiffForFile.added;
//             // console.log({ file: changedFiles[index], added, removed: JSONDiffForFile.removed });
//             // if(added.trim().includes("onPress={()=>")) {
//             //     fail("Inline callback found", file, 12);
//             // }
//         }
//     }
// }

// detectInlineCallBack();






// // for(let file of changedFiles) {
// //     const fileContent = fs.readFileSync(file).toString();
// //     if(fileContent.includes("console.logs")) {
// //         console.debug("fileName", {file, fileContent})
// //         fail("Remove console log from your PR");
// //         break;
// //     }
// // }


// // yarn({
// //     disableCheckForLockfileDiff: true,
// //     disableCheckForTypesInDeps: true
// // })


// This method will return an array of changed file list
// It will include added, modified and deleted file in current PR.
function findChangedFiles() {
    const deletedFiles = danger.git.deleted_files;
    const modifiedFiles = danger.git.modified_files;
    const newFiles = danger.git.created_files;
    const changedFiles = [...modifiedFiles, ...newFiles, ...deletedFiles];
    return changedFiles;
}


async function runDangerAction() {
    const changedFiles = findChangedFiles();
    console.log({changedFiles});
    // if(changedFiles.includes("dangerfile.js")) {
    //     // There are changes detected in danger rule file
    //     // fail status check and print error message on PR
    //     fail("No changes should be done in dangerfile.js")
    // } else {
    //     // Check for other rules only if there are no changes in danger rule file
        
    // }  
}
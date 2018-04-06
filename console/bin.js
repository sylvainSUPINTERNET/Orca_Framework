'use strict';



/* Arg 1 */
let action = process.argv.slice(2).toString();
action.replace(/\s/g, "");

/* PROCESS STDIN  / OUT */
let stdin = process.stdin;
let stdout = process.stdout;

// COLOR for console
let colors = require('colors');

let valid_actions =
    {
        init: "init",
        help: "--help",

    };


/* Dependencies setup */
let DependenciesManager = require('../manager/Dependencies');


/* GENERATION files and folder and config */
let Generator = require('../manager/Generator.js');


// Init app
if(action === valid_actions.init){

    //todo install express etc ... ecrire la structure controllers / models / etc

    //Dependencies
    DependenciesManager.setupDefaultDependencies(); //Express Mongoose Body-parser EJS by default


    //Folders
    //todo complete$
    Generator.configsFolderGenerate();
    Generator.controllersFolderGenerate();
    Generator.modelsFolderGenerate();
    Generator.viewsFolderGenerate();
    Generator.utilsFolderGenerate();


    //Files
    //todo complete
    Generator.serverFile();
    Generator.configFile();
    Generator.controllerFileExemple();
    Generator.controllerFile("myTest");


}






/* Utils */
//give the list of valid command
if(action === valid_actions.help){
    console.info(" List of valid arguments : ");
    console.info(`  ${valid_actions.init}`);
    console.info(`  ${valid_actions.help}`);
}


/* If no argument are given */
if(action === ""){
    console.info( " ! ".bgRed + " Command dosnt exist, please run $ node /console/bin.js --help to get the list of valid arguments " .red)
}



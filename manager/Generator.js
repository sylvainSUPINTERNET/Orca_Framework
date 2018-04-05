
'use strict';

/* DIRECTORY MANAGEMENT */
let mkdirp = require('mkdirp');
let fs = require('fs');


// COLOR for console
let colors = require('colors');

class Generator {
    constructor(/* options */) {
        /* this._options = options */
    }


    // -- DIRECTORY GENERATOR --
    /* CONTROLLER DIR */
    static controllersFolderGenerate() {
        let controller_folder_dir = './controllers';

        mkdirp(controller_folder_dir, function (err) {
            if (err) console.error(err)
            else console.log(' controllers folder created with success '.green)
        });
    }

    /* MODELS DIR */
    static modelsFolderGenerate() {
        let controller_folder_dir = './models';

        mkdirp(controller_folder_dir, function (err) {
            if (err) console.error(err)
            else console.log(' models folder created with success '.green)
        });
    }

    /* VIEWS DIR */
    static viewsFolderGenerate() {
        let controller_folder_dir = './utils';

        mkdirp(controller_folder_dir, function (err) {
            if (err) console.error(err)
            else console.log(' views folder created with success '.green)
        });
    }


    /* UTILS DIR */
    static utilsFolderGenerate() {
        let controller_folder_dir = './utils';

        mkdirp(controller_folder_dir, function (err) {
            if (err) console.error(err)
            else console.log(' utils folder created with success '.green)
        });
    }



    // -- FILES GENERATOR --
    static controllerFileExemple() {
        fs.appendFile('./controllers/HelloWorld.js', "'use strict'; \n//todo", function (err) {
            if (err) throw err;
            console.log(' exemple ctrl has been written !'.green);
        });
    }

    static controllerFile(fileName) {
        fs.appendFile(`./controllers/${fileName}Ctrl.js`, "'use strict'; \n//todo", function (err) {
            if (err) throw err;
            console.log(' exemple ctrl has been written !'.green);
        });
    }



}


// This works
module.exports = Generator;
'use strict';

let npm = require('npm');

class Dependencies {
    constructor(/* options */) {
        /* this._options = options */
    }

    static setupDefaultDependencies(){
        //default config -> Express, EJS, body-parser, morgan, mongoose
        npm.load(function(err) {
            // handle errors
            if(err){
                console.error(err)
            }

            // install modules
            npm.commands.install(['express'], function(er, data) {
                if(er){
                    console.error(er)
                }else{
                    console.log(data)
                }
            });

            npm.commands.install(['ejs'], function(er, data) {
                if(er){
                    console.error(er)
                }else{
                    console.log(data)
                }
            });

            npm.commands.install(['body-parser'], function(er, data) {
                if(er){
                    console.error(er)
                }else{
                    console.log(data)
                }
            });

            npm.commands.install(['morgan'], function(er, data) {
                if(er){
                    console.error(er)
                }else{
                    console.log(data)
                }
            });

            npm.commands.install(['mongoose'], function(er, data) {
                if(er){
                    console.error(er)
                }else{
                    console.log(data)
                }
            });

            npm.commands.install(['jsonwebtoken'], function(er, data) {
                if(er){
                    console.error(er)
                }else{
                    console.log(data)
                }
            });



            npm.on('log', function(message) {
                // log installation progress
                console.log(message);
            });
        });
    }


}



module.exports = Dependencies;


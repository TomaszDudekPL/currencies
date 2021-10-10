const chalk = require('chalk');

exports.logFuncName = (color, bg) => {
    // function to get name from inside interested function. This is hack.
    const e = new Error('dummy');
    const stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');

    if(bg){
        console.log(chalk[color][bg].bold(`@@ ${stack}`));
    } else {
        console.log(chalk[color].bold(`@ ${stack}`));
    }

};
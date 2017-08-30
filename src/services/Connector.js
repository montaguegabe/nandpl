
// Service module to connect front-end with generated NAND language JS

import {executeString as executeString} from 'nand/prog_exec';
import {
    setDry as setDry,
    setSS as setSS,
    setLanguage as setLanguage
} from 'nand/flagsCustomized';


function reverse(s) {
    return s.split("").reverse().join("");
}

// Allows altered syntax when specifying input
function decimalInput(input) {

    var char;
    var output = "";
    var decimalMode = false;
    var decimalBuffer = "";
    input = input + ",";
    for (var i = 0; i < input.length; i++) {
        char = input[i];

        if (decimalMode) {
            if (isNaN(char)) {
                decimalMode = false;
                var num = parseInt(decimalBuffer);
                if (isNaN(num)) {
                    throw 'Error parsing number after "d"';
                }
                var repr = reverse(num.toString(2));
                output += repr;
            } else {
                decimalBuffer += char;
            }
        }
        if (decimalMode) {
            continue;
        }

        // Allow commas to separate arguments
        if (char === ',' || char === ' ') {
            continue;
        }

        if (char === 'd' || char === 'D') {
            decimalMode = true;
            decimalBuffer = "";
            continue;
        }

        if (isNaN(char)) {
            throw 'Invalid input characters';
        }

        // TODO: Allow d for decimal
        output += char;
    }
    return output;
}

// TODO: Document interface of this function
function interpret(program, input, outputCallback, errCallback, flags) {

    // Get configuration flags
    if (flags === undefined) {
        flags = {};
    }
    var dry = flags.dry === undefined ? false : flags.dry;
    var ss = flags.ss === undefined ? true : flags.ss;
    var silent = flags.silent === undefined ? false : flags.silent;
    var language = flags.language === undefined ? 'nand' : flags.language;

    // Apply flags
    setDry(dry);
    setSS(ss);
    setLanguage(language);

    // TODO: Remove
    // PL_data.nand = window.G_NAND_BACKUP;
    // if (dry) {
    //     makeDry();
    // }
    // if (ss) {
    //     turnSSOn();
    // }
    // console.log(silent, flags);
    // if (silent) {
    //     makeSilent();
    // }

    // Redirect console output
    var consoleCallback = console.log;

    // TODO: This overriding is sloppy. Need better interface
    console.log = function(output) {

        var byLine = output.split('\n');
        for (var i = 0; i < byLine.length; i++) {
            var line = byLine[i];
            outputCallback(line);
        }
    };

    // Run the NAND interpreter
    var result = "";
    try {
        result = executeString(program, decimalInput(input));
    } catch (err) {
        errCallback(err);
        console.log = consoleCallback;
        throw err;
    }

    console.log = consoleCallback;
    return result;
}


export default {
    interpret: interpret
};

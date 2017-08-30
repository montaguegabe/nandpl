
// Service module to connect front-end with generated NAND language JS

import {executeString as executeString} from 'nand/prog_exec';

// Allows altered syntax when specifying input
function decimalInput(input) {

    var char;
    var output = "";
    for (var i = 0; i < input.length; i++) {
        char = input[i];

        // Allow commas to separate arguments
        if (char === ',' || char === ' ') {
            continue;
        }

        // TODO: Allow d for decimal
        output += char;
    }

    return output;
}

// TODO: Document interface of this function
function interpret(program, input, outputCallback, errCallback) {

    // Redirect console output
    var consoleCallback = console.log;

    console.log = function(output) {
        // TODO: This is sloppy. Need better interface
        outputCallback(output);
    };

    // Run the NAND interpreter
    var result = "";
    try {
        result = executeString(program, decimalInput(input));
    } catch (err) {
        errCallback(err.toString());
    }

    console.log = consoleCallback;
    return result;
}


export default {
    interpret: interpret
};

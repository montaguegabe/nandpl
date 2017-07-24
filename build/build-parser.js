require('./check-versions')();

var peg = require("pegjs");
var fs = require('fs');
var path = require('path');
var scriptName = path.basename(__filename);

var grammar = fs.readFileSync('./grammar.peg', 'utf8');

// Build a parser. See https://pegjs.org/documentation
var parseOptions = {
    format: 'commonjs',
    optimize: 'speed', // speed/size
    output: 'source' // source/parser
};

var warningMessage = `/*\n *DO NOT MODIFY: This file is overwritten by ${scriptName}.\n * Instead modify grammar.peg.\n */\n\n`;
var dummyModuleInject = 'var safeModule = {};\n\n';
var parserSource = warningMessage + dummyModuleInject + peg.generate(grammar, parseOptions);

// Rename 'module' to 'safeModule': Not sure if we need this.
// We are converting commonJS to ES6 syntax so Babel/Vue can convert it back
parserSource = parserSource.replace('module', 'safeModule');
parserSource += `
var parse = peg$parse;
export default parse;
`

fs.writeFileSync('./src/parser.js', parserSource);


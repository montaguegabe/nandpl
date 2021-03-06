// Generated by BUCKLESCRIPT VERSION 1.9.0, PLEASE EDIT WITH CARE
'use strict';

var Block      = require("bs-platform/lib/js/block.js");
var Curry      = require("bs-platform/lib/js/curry.js");
var Format     = require("bs-platform/lib/js/format.js");
var Lexing     = require("bs-platform/lib/js/lexing.js");
var $$String   = require("bs-platform/lib/js/string.js");
var PL_data    = require("./pL_data.js");
var NANDlexer  = require("./nANDlexer.js");
var NANDparser = require("./nANDparser.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function executeFile(fileName, input) {
  var startExt = $$String.rindex(fileName, /* "." */46) + 1 | 0;
  var ext = $$String.sub(fileName, startExt, fileName.length - startExt | 0);
  if (ext !== "nand") {
    Format.printf(/* Format */[
          /* String_literal */Block.__(11, [
              "Must provide a .nand file as input\n",
              /* End_of_format */0
            ]),
          "Must provide a .nand file as input\n"
        ]);
    Pervasives.exit(0);
  }
  var file = Pervasives.open_in(fileName);
  var lexbuf = Lexing.from_channel(file);
  var program = NANDparser.parseProg(NANDlexer.token, lexbuf);
  if (PL_data.ssSwitch[0]) {
    return Curry._2(PL_data.nand[/* execute */0], Curry._1(PL_data.nand[/* addSS */1], program), input);
  } else {
    return Curry._2(PL_data.nand[/* execute */0], program, input);
  }
}

exports.executeFile = executeFile;
/* Format Not a pure module */

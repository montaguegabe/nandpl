// Generated by BUCKLESCRIPT VERSION 1.9.0, PLEASE EDIT WITH CARE
'use strict';

var Block      = require("bs-platform/lib/js/block.js");
var Parsing    = require("bs-platform/lib/js/parsing.js");
var PL_functor = require("./pL_functor.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

var yytransl_const = /* array */[
  0,
  259,
  260,
  262,
  263,
  264,
  265,
  266,
  267,
  269,
  270,
  0
];

var yytransl_block = /* array */[
  257,
  258,
  261,
  268,
  0
];

var yyact = /* array */[
  (function () {
      return Pervasives.failwith("parser");
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 1);
      var _2 = Parsing.peek_val(__caml_parser_env, 0);
      return /* :: */[
              _1,
              _2
            ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* :: */[
              _1,
              /* [] */0
            ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      var _3 = Parsing.peek_val(__caml_parser_env, 0);
      return /* Asg */Block.__(0, [
                _1,
                _3
              ]);
    }),
  (function (__caml_parser_env) {
      var _2 = Parsing.peek_val(__caml_parser_env, 8);
      var _4 = Parsing.peek_val(__caml_parser_env, 6);
      var _6 = Parsing.peek_val(__caml_parser_env, 4);
      var _9 = Parsing.peek_val(__caml_parser_env, 1);
      return /* FxnDef */Block.__(2, [
                _4,
                /* record */[
                  /* inputs */_6,
                  /* outputs */_2,
                  /* body */_9
                ]
              ]);
    }),
  (function (__caml_parser_env) {
      var _3 = Parsing.peek_val(__caml_parser_env, 4);
      var _6 = Parsing.peek_val(__caml_parser_env, 1);
      return /* If */Block.__(1, [
                _3,
                _6
              ]);
    }),
  (function (__caml_parser_env) {
      var _3 = Parsing.peek_val(__caml_parser_env, 4);
      var _6 = Parsing.peek_val(__caml_parser_env, 1);
      return /* While */Block.__(3, [
                _3,
                _6
              ]);
    }),
  (function (__caml_parser_env) {
      var _3 = Parsing.peek_val(__caml_parser_env, 1);
      return /* Print */Block.__(4, [_3]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      var _3 = Parsing.peek_val(__caml_parser_env, 0);
      return /* :: */[
              _1,
              _3
            ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* :: */[
              _1,
              /* [] */0
            ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      var _2 = Parsing.peek_val(__caml_parser_env, 1);
      var _3 = Parsing.peek_val(__caml_parser_env, 0);
      return /* Binop */Block.__(2, [
                _2,
                _1,
                _3
              ]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* Var */Block.__(1, [_1]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* Const */Block.__(0, [_1]);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 3);
      var _3 = Parsing.peek_val(__caml_parser_env, 1);
      return /* FxnApp */Block.__(3, [
                _1,
                _3
              ]);
    }),
  (function (__caml_parser_env) {
      return Parsing.peek_val(__caml_parser_env, 1);
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 2);
      var _3 = Parsing.peek_val(__caml_parser_env, 0);
      return /* :: */[
              _1,
              _3
            ];
    }),
  (function (__caml_parser_env) {
      var _1 = Parsing.peek_val(__caml_parser_env, 0);
      return /* :: */[
              _1,
              /* [] */0
            ];
    }),
  (function (__caml_parser_env) {
      throw [
            Parsing.YYexit,
            Parsing.peek_val(__caml_parser_env, 0)
          ];
    })
];

var yytables = /* record */[
  /* actions */yyact,
  /* transl_const */yytransl_const,
  /* transl_block */yytransl_block,
  /* lhs */"\xff\xff\x01\0\x02\0\x02\0\x03\0\x03\0\x03\0\x03\0\x03\0\x05\0\x05\0\x06\0\x06\0\x06\0\x06\0\x06\0\x04\0\x04\0\0\0",
  /* len */"\x02\0\x02\0\x02\0\x01\0\x03\0\n\0\x07\0\x07\0\x04\0\x03\0\x01\0\x03\0\x01\0\x01\0\x04\0\x03\0\x03\0\x01\0\x02\0",
  /* defred */"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x12\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\0\0\x10\0\0\0\f\0\r\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\x0f\0\0\0\x0b\0\0\0\0\0\t\0\0\0\x0e\0\0\0\0\0\0\0\x07\0\x06\0\0\0\0\0\x05\0",
  /* dgoto */"\x02\0\b\0\t\0\n\0\x0b\0\x1d\0\x1e\0",
  /* sindex */"\x0b\0\x06\xff\0\0\x1a\xff\x1e\xff\x1d\xff \xff!\xff\0\0$\0\x06\xff%\xff\x1e\xff&\xff\x11\xff\x11\xff)\xff\0\0\0\0\x11\xff\0\0\"\xff\0\0\0\0\x11\xff'\xff\x01\xff\x07\xff(\xff\0\0\t\xff*\xff\x13\xff\x11\xff\x11\xff$\xff+\xff\0\0\x11\xff\x1e\xff\0\0-\xff\0\0\x06\xff\x06\xff\0\0.\xff\0\0/\xff0\xff2\xff\0\0\0\0\x06\xff3\xff\0\0",
  /* rindex */"\0\0\0\0\0\0\x15\xff\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
  /* gindex */"\0\0\0\0\xf6\xff\0\0\xfe\xff\xfa\xff\xf7\xff",
  /* tablesize */271,
  /* table */"\x12\0\n\0\r\0\"\0\x03\0\x1a\0\x1b\0\x03\0#\0\"\0\x14\0\"\0\x01\0&\0$\0 \0\x04\0\x05\0\x16\0\x06\0\x07\0\"\0\x17\0\x18\0\x11\0*\0(\0)\0\x11\0\x19\0\f\0\x03\0-\x000\x001\0\x0e\0\x11\0.\0\x0f\0\x10\0\x13\0\x15\0\x1c\x006\0+\0!\0\x1f\0%\0'\0\0\0\0\0,\0/\x002\0\0\0\0\x003\x004\x005\0\0\x007\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\n\0\n\0\n\0\x03\0\n\0\n\0",
  /* check */"\n\0\0\0\x04\0\x02\x01\0\0\x0e\0\x0f\0\x01\x01\x07\x01\x02\x01\f\0\x02\x01\x01\0\x04\x01\x07\x01\x18\0\n\x01\x0b\x01\x01\x01\r\x01\x0e\x01\x02\x01\x05\x01\x06\x01\x03\x01\"\0\x07\x01!\0\x07\x01\f\x01\x04\x01\x01\x01&\0+\0,\0\x06\x01\0\0'\0\x06\x01\x06\x01\x03\x01\x03\x01\x01\x015\0\b\x01\x06\x01\f\x01\x07\x01\x06\x01\xff\xff\xff\xff\b\x01\x07\x01\x07\x01\xff\xff\xff\xff\t\x01\t\x01\b\x01\xff\xff\t\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\x01\xff\xff\t\x01\n\x01\x0b\x01\t\x01\r\x01\x0e\x01",
  /* error_function */Parsing.parse_error,
  /* names_const */"EOF\0ASG\0COMMA\0LEFT_PAREN\0RIGHT_PAREN\0LEFT_BRACK\0RIGHT_BRACK\0DEF\0WHILE\0IF\0PRINT\0",
  /* names_block */"VAR_ID\0BINOP\0CONST\0FUNC_ID\0"
];

function parseProg(lexfun, lexbuf) {
  return Parsing.yyparse(yytables, 1, lexfun, lexbuf);
}

exports.parseProg = parseProg;
/* PL_functor Not a pure module */
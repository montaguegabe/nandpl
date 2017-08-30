type token =
  | EOF
  | VAR_ID of (PL_functor.varID)
  | BINOP of (Binops.binop)
  | ASG
  | COMMA
  | CONST of (int)
  | LEFT_PAREN
  | RIGHT_PAREN
  | LEFT_BRACK
  | RIGHT_BRACK
  | DEF
  | WHILE
  | FUNC_ID of (PL_functor.funcID)
  | IF
  | PRINT

open Parsing;;
let _ = parse_error;;
# 2 "NANDparser.mly"
open PL_functor;;
open Binops ;; 

exception Invalid_operation
 
let writeOnly = ["y"; "loop"]
let readOnly = ["x"]

exception Invalid_var of string 

let checkReadId (id: varID) : unit = 
  let body, ind = id in 
    if List.mem body writeOnly then 
       raise (Invalid_var(strOfId id)) 

let checkWriteId (id: varID) : unit = 
  let body, ind = id in 
    if List.mem body readOnly then 
       raise (Invalid_var(strOfId id))  
# 41 "NANDparser.ml"
let yytransl_const = [|
    0 (* EOF *);
  259 (* ASG *);
  260 (* COMMA *);
  262 (* LEFT_PAREN *);
  263 (* RIGHT_PAREN *);
  264 (* LEFT_BRACK *);
  265 (* RIGHT_BRACK *);
  266 (* DEF *);
  267 (* WHILE *);
  269 (* IF *);
  270 (* PRINT *);
    0|]

let yytransl_block = [|
  257 (* VAR_ID *);
  258 (* BINOP *);
  261 (* CONST *);
  268 (* FUNC_ID *);
    0|]

let yylhs = "\255\255\
\001\000\002\000\002\000\003\000\003\000\003\000\003\000\003\000\
\005\000\005\000\006\000\006\000\006\000\006\000\006\000\004\000\
\004\000\000\000"

let yylen = "\002\000\
\002\000\002\000\001\000\003\000\010\000\007\000\007\000\004\000\
\003\000\001\000\003\000\001\000\001\000\004\000\003\000\003\000\
\001\000\002\000"

let yydefred = "\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\018\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\001\000\002\000\000\000\016\000\000\000\012\000\013\000\000\000\
\000\000\000\000\000\000\000\000\004\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\008\000\000\000\000\000\015\000\
\000\000\011\000\000\000\000\000\009\000\000\000\014\000\000\000\
\000\000\000\000\007\000\006\000\000\000\000\000\005\000"

let yydgoto = "\002\000\
\008\000\009\000\010\000\011\000\029\000\030\000"

let yysindex = "\011\000\
\006\255\000\000\026\255\030\255\029\255\032\255\033\255\000\000\
\036\000\006\255\037\255\030\255\038\255\017\255\017\255\041\255\
\000\000\000\000\017\255\000\000\034\255\000\000\000\000\017\255\
\039\255\001\255\007\255\040\255\000\000\009\255\042\255\019\255\
\017\255\017\255\036\255\043\255\000\000\017\255\030\255\000\000\
\045\255\000\000\006\255\006\255\000\000\046\255\000\000\047\255\
\048\255\050\255\000\000\000\000\006\255\051\255\000\000"

let yyrindex = "\000\000\
\000\000\000\000\021\255\000\000\000\000\000\000\000\000\000\000\
\000\000\004\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\001\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000"

let yygindex = "\000\000\
\000\000\246\255\000\000\254\255\250\255\247\255"

let yytablesize = 271
let yytable = "\018\000\
\010\000\013\000\034\000\003\000\026\000\027\000\003\000\035\000\
\034\000\020\000\034\000\001\000\038\000\036\000\032\000\004\000\
\005\000\022\000\006\000\007\000\034\000\023\000\024\000\017\000\
\042\000\040\000\041\000\017\000\025\000\012\000\003\000\045\000\
\048\000\049\000\014\000\017\000\046\000\015\000\016\000\019\000\
\021\000\028\000\054\000\043\000\033\000\031\000\037\000\039\000\
\000\000\000\000\044\000\047\000\050\000\000\000\000\000\051\000\
\052\000\053\000\000\000\055\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\010\000\000\000\000\000\000\000\000\000\000\000\010\000\
\000\000\010\000\010\000\010\000\003\000\010\000\010\000"

let yycheck = "\010\000\
\000\000\004\000\002\001\000\000\014\000\015\000\001\001\007\001\
\002\001\012\000\002\001\001\000\004\001\007\001\024\000\010\001\
\011\001\001\001\013\001\014\001\002\001\005\001\006\001\003\001\
\034\000\007\001\033\000\007\001\012\001\004\001\001\001\038\000\
\043\000\044\000\006\001\000\000\039\000\006\001\006\001\003\001\
\003\001\001\001\053\000\008\001\006\001\012\001\007\001\006\001\
\255\255\255\255\008\001\007\001\007\001\255\255\255\255\009\001\
\009\001\008\001\255\255\009\001\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\255\
\255\255\001\001\255\255\255\255\255\255\255\255\255\255\007\001\
\255\255\009\001\010\001\011\001\009\001\013\001\014\001"

let yynames_const = "\
  EOF\000\
  ASG\000\
  COMMA\000\
  LEFT_PAREN\000\
  RIGHT_PAREN\000\
  LEFT_BRACK\000\
  RIGHT_BRACK\000\
  DEF\000\
  WHILE\000\
  IF\000\
  PRINT\000\
  "

let yynames_block = "\
  VAR_ID\000\
  BINOP\000\
  CONST\000\
  FUNC_ID\000\
  "

let yyact = [|
  (fun _ -> failwith "parser")
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'nandProg) in
    Obj.repr(
# 45 "NANDparser.mly"
                        ( _1 )
# 207 "NANDparser.ml"
               : PL_functor.program))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'nandCom) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'nandProg) in
    Obj.repr(
# 47 "NANDparser.mly"
                           (_1 :: _2)
# 215 "NANDparser.ml"
               : 'nandProg))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'nandCom) in
    Obj.repr(
# 48 "NANDparser.mly"
               ([_1])
# 222 "NANDparser.ml"
               : 'nandProg))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'ids) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'exps) in
    Obj.repr(
# 51 "NANDparser.mly"
                 (Asg(_1, _3))
# 230 "NANDparser.ml"
               : 'nandCom))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 8 : 'ids) in
    let _4 = (Parsing.peek_val __caml_parser_env 6 : PL_functor.funcID) in
    let _6 = (Parsing.peek_val __caml_parser_env 4 : 'ids) in
    let _9 = (Parsing.peek_val __caml_parser_env 1 : 'nandProg) in
    Obj.repr(
# 53 "NANDparser.mly"
       ( FxnDef((_4, {inputs = _6; outputs = _2; body = _9 })) )
# 240 "NANDparser.ml"
               : 'nandCom))
; (fun __caml_parser_env ->
    let _3 = (Parsing.peek_val __caml_parser_env 4 : 'exp) in
    let _6 = (Parsing.peek_val __caml_parser_env 1 : 'nandProg) in
    Obj.repr(
# 55 "NANDparser.mly"
       ( If(_3, _6) )
# 248 "NANDparser.ml"
               : 'nandCom))
; (fun __caml_parser_env ->
    let _3 = (Parsing.peek_val __caml_parser_env 4 : 'exp) in
    let _6 = (Parsing.peek_val __caml_parser_env 1 : 'nandProg) in
    Obj.repr(
# 57 "NANDparser.mly"
       ( While(_3, _6) )
# 256 "NANDparser.ml"
               : 'nandCom))
; (fun __caml_parser_env ->
    let _3 = (Parsing.peek_val __caml_parser_env 1 : PL_functor.varID) in
    Obj.repr(
# 58 "NANDparser.mly"
                                        ( Print(_3) )
# 263 "NANDparser.ml"
               : 'nandCom))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'exp) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'exps) in
    Obj.repr(
# 60 "NANDparser.mly"
                   ( _1 :: _3 )
# 271 "NANDparser.ml"
               : 'exps))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'exp) in
    Obj.repr(
# 61 "NANDparser.mly"
        ( [_1] )
# 278 "NANDparser.ml"
               : 'exps))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'exp) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 : Binops.binop) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'exp) in
    Obj.repr(
# 64 "NANDparser.mly"
                    ( Binop(_2, _1, _3) )
# 287 "NANDparser.ml"
               : 'exp))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : PL_functor.varID) in
    Obj.repr(
# 65 "NANDparser.mly"
            ( (*  (checkReadId $1); *)  Var(_1) )
# 294 "NANDparser.ml"
               : 'exp))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : int) in
    Obj.repr(
# 66 "NANDparser.mly"
           ( Const(_1) )
# 301 "NANDparser.ml"
               : 'exp))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 3 : PL_functor.funcID) in
    let _3 = (Parsing.peek_val __caml_parser_env 1 : 'exps) in
    Obj.repr(
# 68 "NANDparser.mly"
       ( FxnApp(_1, _3) )
# 309 "NANDparser.ml"
               : 'exp))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 1 : 'exp) in
    Obj.repr(
# 69 "NANDparser.mly"
                                ( _2 )
# 316 "NANDparser.ml"
               : 'exp))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : PL_functor.varID) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'ids) in
    Obj.repr(
# 71 "NANDparser.mly"
                     ((*(checkWriteId $1);*) _1 :: _3 )
# 324 "NANDparser.ml"
               : 'ids))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : PL_functor.varID) in
    Obj.repr(
# 72 "NANDparser.mly"
           ((* checkWriteId $1 ;*)  [_1] )
# 331 "NANDparser.ml"
               : 'ids))
(* Entry parseProg *)
; (fun __caml_parser_env -> raise (Parsing.YYexit (Parsing.peek_val __caml_parser_env 0)))
|]
let yytables =
  { Parsing.actions=yyact;
    Parsing.transl_const=yytransl_const;
    Parsing.transl_block=yytransl_block;
    Parsing.lhs=yylhs;
    Parsing.len=yylen;
    Parsing.defred=yydefred;
    Parsing.dgoto=yydgoto;
    Parsing.sindex=yysindex;
    Parsing.rindex=yyrindex;
    Parsing.gindex=yygindex;
    Parsing.tablesize=yytablesize;
    Parsing.table=yytable;
    Parsing.check=yycheck;
    Parsing.error_function=parse_error;
    Parsing.names_const=yynames_const;
    Parsing.names_block=yynames_block }
let parseProg (lexfun : Lexing.lexbuf -> token) (lexbuf : Lexing.lexbuf) =
   (Parsing.yyparse yytables 1 lexfun lexbuf : PL_functor.program)

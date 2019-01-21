'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

var out_of_memory_1 = out_of_memory;
var sys_error_1 = sys_error;
var failure_1 = failure;
var invalid_argument_1 = invalid_argument;
var end_of_file_1 = end_of_file;
var division_by_zero_1 = division_by_zero;
var not_found_1 = not_found;
var match_failure_1 = match_failure;
var stack_overflow_1 = stack_overflow;
var sys_blocked_io_1 = sys_blocked_io;
var assert_failure_1 = assert_failure;
var undefined_recursive_module_1 = undefined_recursive_module;
/*  Not a pure module */

var caml_builtin_exceptions = {
	out_of_memory: out_of_memory_1,
	sys_error: sys_error_1,
	failure: failure_1,
	invalid_argument: invalid_argument_1,
	end_of_file: end_of_file_1,
	division_by_zero: division_by_zero_1,
	not_found: not_found_1,
	match_failure: match_failure_1,
	stack_overflow: stack_overflow_1,
	sys_blocked_io: sys_blocked_io_1,
	assert_failure: assert_failure_1,
	undefined_recursive_module: undefined_recursive_module_1
};

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
    } else {
      return acc;
    }
  }}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      }      _l = l[1];
      _i = k;
      continue ;
    } else {
      return /* () */0;
    }
  }}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_make_float_vect(len) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = 0;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

function caml_array_dup(prim) {
  return prim.slice(0);
}

var caml_array_dup_1 = caml_array_dup;
var caml_array_sub_1 = caml_array_sub;
var caml_array_concat_1 = caml_array_concat;
var caml_make_vect_1 = caml_make_vect;
var caml_make_float_vect_1 = caml_make_float_vect;
var caml_array_blit_1 = caml_array_blit;
var caml_array_get_1 = caml_array_get;
var caml_array_set_1 = caml_array_set;
/* No side effect */

var caml_array = {
	caml_array_dup: caml_array_dup_1,
	caml_array_sub: caml_array_sub_1,
	caml_array_concat: caml_array_concat_1,
	caml_make_vect: caml_make_vect_1,
	caml_make_float_vect: caml_make_float_vect_1,
	caml_array_blit: caml_array_blit_1,
	caml_array_get: caml_array_get_1,
	caml_array_set: caml_array_set_1
};

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var len = args.length;
    var d = arity - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = caml_array.caml_array_sub(args, arity, -d | 0);
      _f = f.apply(null, caml_array.caml_array_sub(args, 0, arity));
      continue ;
    } else {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat(/* array */[x]));
      }
      }(f,args));
    }
  }}

function curry_1(o, a0, arity) {
  switch (arity) {
    case 1 : 
        return o(a0);
    case 2 : 
        return (function (param) {
            return o(a0, param);
          });
    case 3 : 
        return (function (param, param$1) {
            return o(a0, param, param$1);
          });
    case 4 : 
        return (function (param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          });
    case 5 : 
        return (function (param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          });
    case 6 : 
        return (function (param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          });
    case 7 : 
        return (function (param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          });
    default:
      return app(o, /* array */[a0]);
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[a1]);
    case 2 : 
        return o(a0, a1);
    case 3 : 
        return (function (param) {
            return o(a0, a1, param);
          });
    case 4 : 
        return (function (param, param$1) {
            return o(a0, a1, param, param$1);
          });
    case 5 : 
        return (function (param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          });
    case 6 : 
        return (function (param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          });
    case 7 : 
        return (function (param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1
                ]);
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}

function curry_3(o, a0, a1, a2, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[a2]);
    case 3 : 
        return o(a0, a1, a2);
    case 4 : 
        return (function (param) {
            return o(a0, a1, a2, param);
          });
    case 5 : 
        return (function (param, param$1) {
            return o(a0, a1, a2, param, param$1);
          });
    case 6 : 
        return (function (param, param$1, param$2) {
            return o(a0, a1, a2, param, param$1, param$2);
          });
    case 7 : 
        return (function (param, param$1, param$2, param$3) {
            return o(a0, a1, a2, param, param$1, param$2, param$3);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2
                ]);
  }
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      });
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[a3]);
    case 4 : 
        return o(a0, a1, a2, a3);
    case 5 : 
        return (function (param) {
            return o(a0, a1, a2, a3, param);
          });
    case 6 : 
        return (function (param, param$1) {
            return o(a0, a1, a2, a3, param, param$1);
          });
    case 7 : 
        return (function (param, param$1, param$2) {
            return o(a0, a1, a2, a3, param, param$1, param$2);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3
                ]);
  }
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      });
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4
                  ]);
    case 4 : 
        return app(o(a0, a1, a2, a3), /* array */[a4]);
    case 5 : 
        return o(a0, a1, a2, a3, a4);
    case 6 : 
        return (function (param) {
            return o(a0, a1, a2, a3, a4, param);
          });
    case 7 : 
        return (function (param, param$1) {
            return o(a0, a1, a2, a3, a4, param, param$1);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4
                ]);
  }
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5
                  ]);
    case 4 : 
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5
                  ]);
    case 5 : 
        return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
    case 6 : 
        return o(a0, a1, a2, a3, a4, a5);
    case 7 : 
        return (function (param) {
            return o(a0, a1, a2, a3, a4, a5, param);
          });
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5
                ]);
  }
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    case 4 : 
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5,
                    a6
                  ]);
    case 5 : 
        return app(o(a0, a1, a2, a3, a4), /* array */[
                    a5,
                    a6
                  ]);
    case 6 : 
        return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
    case 7 : 
        return o(a0, a1, a2, a3, a4, a5, a6);
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6
                ]);
  }
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  switch (arity) {
    case 1 : 
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 2 : 
        return app(o(a0, a1), /* array */[
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 3 : 
        return app(o(a0, a1, a2), /* array */[
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 4 : 
        return app(o(a0, a1, a2, a3), /* array */[
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    case 5 : 
        return app(o(a0, a1, a2, a3, a4), /* array */[
                    a5,
                    a6,
                    a7
                  ]);
    case 6 : 
        return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                    a6,
                    a7
                  ]);
    case 7 : 
        return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
    default:
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7
                ]);
  }
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

var app_1 = app;
var curry_1_1 = curry_1;
var _1_1 = _1;
var __1_1 = __1;
var curry_2_1 = curry_2;
var _2_1 = _2;
var __2_1 = __2;
var curry_3_1 = curry_3;
var _3_1 = _3;
var __3_1 = __3;
var curry_4_1 = curry_4;
var _4_1 = _4;
var __4_1 = __4;
var curry_5_1 = curry_5;
var _5_1 = _5;
var __5_1 = __5;
var curry_6_1 = curry_6;
var _6_1 = _6;
var __6_1 = __6;
var curry_7_1 = curry_7;
var _7_1 = _7;
var __7_1 = __7;
var curry_8_1 = curry_8;
var _8_1 = _8;
var __8_1 = __8;
/* No side effect */

var curry = {
	app: app_1,
	curry_1: curry_1_1,
	_1: _1_1,
	__1: __1_1,
	curry_2: curry_2_1,
	_2: _2_1,
	__2: __2_1,
	curry_3: curry_3_1,
	_3: _3_1,
	__3: __3_1,
	curry_4: curry_4_1,
	_4: _4_1,
	__4: __4_1,
	curry_5: curry_5_1,
	_5: _5_1,
	__5: __5_1,
	curry_6: curry_6_1,
	_6: _6_1,
	__6: __6_1,
	curry_7: curry_7_1,
	_7: _7_1,
	__7: __7_1,
	curry_8: curry_8_1,
	_8: _8_1,
	__8: __8_1
};

var undefinedHeader = /* array */[];

function some(x) {
  if (x === undefined) {
    var block = /* tuple */[
      undefinedHeader,
      0
    ];
    block.tag = 256;
    return block;
  } else if (x !== null && x[0] === undefinedHeader) {
    var nid = x[1] + 1 | 0;
    var block$1 = /* tuple */[
      undefinedHeader,
      nid
    ];
    block$1.tag = 256;
    return block$1;
  } else {
    return x;
  }
}

function nullable_to_opt(x) {
  if (x === null || x === undefined) {
    return undefined;
  } else {
    return some(x);
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return some(x);
  }
}

function null_to_opt(x) {
  if (x === null) {
    return undefined;
  } else {
    return some(x);
  }
}

function valFromOption(x) {
  if (x !== null && x[0] === undefinedHeader) {
    var depth = x[1];
    if (depth === 0) {
      return undefined;
    } else {
      return /* tuple */[
              undefinedHeader,
              depth - 1 | 0
            ];
    }
  } else {
    return x;
  }
}

function option_get(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return valFromOption(x);
  }
}

function option_get_unwrap(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return valFromOption(x)[1];
  }
}

var nullable_to_opt_1 = nullable_to_opt;
var undefined_to_opt_1 = undefined_to_opt;
var null_to_opt_1 = null_to_opt;
var valFromOption_1 = valFromOption;
var some_1 = some;
var option_get_1 = option_get;
var option_get_unwrap_1 = option_get_unwrap;
/* No side effect */

var caml_option = {
	nullable_to_opt: nullable_to_opt_1,
	undefined_to_opt: undefined_to_opt_1,
	null_to_opt: null_to_opt_1,
	valFromOption: valFromOption_1,
	some: some_1,
	option_get: option_get_1,
	option_get_unwrap: option_get_unwrap_1
};

function getExn(param) {
  if (param !== undefined) {
    return caml_option.valFromOption(param);
  } else {
    throw new Error("getExn");
  }
}

function mapWithDefaultU(opt, $$default, f) {
  if (opt !== undefined) {
    return f(caml_option.valFromOption(opt));
  } else {
    return $$default;
  }
}

function mapWithDefault(opt, $$default, f) {
  return mapWithDefaultU(opt, $$default, curry.__1(f));
}

function mapU(opt, f) {
  if (opt !== undefined) {
    return caml_option.some(f(caml_option.valFromOption(opt)));
  }
  
}

function map(opt, f) {
  return mapU(opt, curry.__1(f));
}

function flatMapU(opt, f) {
  if (opt !== undefined) {
    return f(caml_option.valFromOption(opt));
  }
  
}

function flatMap(opt, f) {
  return flatMapU(opt, curry.__1(f));
}

function getWithDefault(opt, $$default) {
  if (opt !== undefined) {
    return caml_option.valFromOption(opt);
  } else {
    return $$default;
  }
}

function isSome(param) {
  return param !== undefined;
}

function isNone(x) {
  return x === undefined;
}

function eqU(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(caml_option.valFromOption(a), caml_option.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === undefined;
  }
}

function eq(a, b, f) {
  return eqU(a, b, curry.__2(f));
}

function cmpU(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(caml_option.valFromOption(a), caml_option.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== undefined) {
    return -1;
  } else {
    return 0;
  }
}

function cmp(a, b, f) {
  return cmpU(a, b, curry.__2(f));
}

var getExn_1 = getExn;
var mapWithDefaultU_1 = mapWithDefaultU;
var mapWithDefault_1 = mapWithDefault;
var mapU_1 = mapU;
var map_1 = map;
var flatMapU_1 = flatMapU;
var flatMap_1 = flatMap;
var getWithDefault_1 = getWithDefault;
var isSome_1 = isSome;
var isNone_1 = isNone;
var eqU_1 = eqU;
var eq_1 = eq;
var cmpU_1 = cmpU;
var cmp_1 = cmp;
/* No side effect */

var belt_Option = {
	getExn: getExn_1,
	mapWithDefaultU: mapWithDefaultU_1,
	mapWithDefault: mapWithDefault_1,
	mapU: mapU_1,
	map: map_1,
	flatMapU: flatMapU_1,
	flatMap: flatMap_1,
	getWithDefault: getWithDefault_1,
	isSome: isSome_1,
	isNone: isNone_1,
	eqU: eqU_1,
	eq: eq_1,
	cmpU: cmpU_1,
	cmp: cmp_1
};

function __(tag, block) {
  block.tag = tag;
  return block;
}

function record(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsRecord"), {
              value: meta
            });
}

function variant(meta, tag, xs) {
  xs.tag = tag;
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
              value: meta
            });
}

function simpleVariant(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
              value: meta
            });
}

function localModule(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsLocalModule"), {
              value: meta
            });
}

function polyVar(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsPolyVar"), {
              value: meta
            });
}

var ___1 = __;
var record_1 = record;
var variant_1 = variant;
var simpleVariant_1 = simpleVariant;
var localModule_1 = localModule;
var polyVar_1 = polyVar;
/* No side effect */

var block = {
	__: ___1,
	record: record_1,
	variant: variant_1,
	simpleVariant: simpleVariant_1,
	localModule: localModule_1,
	polyVar: polyVar_1
};

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_bool_compare(x, y) {
  if (x) {
    if (y) {
      return 0;
    } else {
      return 1;
    }
  } else if (y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_bytes_compare_aux(s1, s2, _off, len, def) {
  while(true) {
    var off = _off;
    if (off < len) {
      var a = s1[off];
      var b = s2[off];
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        _off = off + 1 | 0;
        continue ;
      }
    } else {
      return def;
    }
  }}

function caml_bytes_compare(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;
  if (len1 === len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, 0);
  } else if (len1 < len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, -1);
  } else {
    return caml_bytes_compare_aux(s1, s2, 0, len2, 1);
  }
}

function caml_bytes_equal(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;
  if (len1 === len2) {
    var s1$1 = s1;
    var s2$1 = s2;
    var _off = 0;
    var len = len1;
    while(true) {
      var off = _off;
      if (off === len) {
        return true;
      } else {
        var a = s1$1[off];
        var b = s2$1[off];
        if (a === b) {
          _off = off + 1 | 0;
          continue ;
        } else {
          return false;
        }
      }
    }  } else {
    return false;
  }
}

function caml_bool_min(x, y) {
  if (x) {
    return y;
  } else {
    return x;
  }
}

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_bool_max(x, y) {
  if (x) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

var caml_nativeint_compare = caml_int_compare;

var caml_int32_compare = caml_int_compare;

var caml_bytes_compare_1 = caml_bytes_compare;
var caml_bytes_equal_1 = caml_bytes_equal;
var caml_int_compare_1 = caml_int_compare;
var caml_bool_compare_1 = caml_bool_compare;
var caml_float_compare_1 = caml_float_compare;
var caml_nativeint_compare_1 = caml_nativeint_compare;
var caml_string_compare_1 = caml_string_compare;
var caml_int32_compare_1 = caml_int32_compare;
var caml_bool_min_1 = caml_bool_min;
var caml_int_min_1 = caml_int_min;
var caml_float_min_1 = caml_float_min;
var caml_string_min_1 = caml_string_min;
var caml_nativeint_min_1 = caml_nativeint_min;
var caml_int32_min_1 = caml_int32_min;
var caml_bool_max_1 = caml_bool_max;
var caml_int_max_1 = caml_int_max;
var caml_float_max_1 = caml_float_max;
var caml_string_max_1 = caml_string_max;
var caml_nativeint_max_1 = caml_nativeint_max;
var caml_int32_max_1 = caml_int32_max;
/* No side effect */

var caml_primitive = {
	caml_bytes_compare: caml_bytes_compare_1,
	caml_bytes_equal: caml_bytes_equal_1,
	caml_int_compare: caml_int_compare_1,
	caml_bool_compare: caml_bool_compare_1,
	caml_float_compare: caml_float_compare_1,
	caml_nativeint_compare: caml_nativeint_compare_1,
	caml_string_compare: caml_string_compare_1,
	caml_int32_compare: caml_int32_compare_1,
	caml_bool_min: caml_bool_min_1,
	caml_int_min: caml_int_min_1,
	caml_float_min: caml_float_min_1,
	caml_string_min: caml_string_min_1,
	caml_nativeint_min: caml_nativeint_min_1,
	caml_int32_min: caml_int32_min_1,
	caml_bool_max: caml_bool_max_1,
	caml_int_max: caml_int_max_1,
	caml_float_max: caml_float_max_1,
	caml_string_max: caml_string_max_1,
	caml_nativeint_max: caml_nativeint_max_1,
	caml_int32_max: caml_int32_max_1
};

function caml_obj_block(tag, size) {
  var v = new Array(size);
  v.tag = tag;
  return v;
}

function caml_obj_dup(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Obj.truncate"
        ];
  } else if (len !== new_size) {
    for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      x[i] = 0;
    }
    x.length = new_size;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_lazy_make_forward(x) {
  return block.__(250, [x]);
}

function caml_update_dummy(x, y) {
  var len = y.length | 0;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return /* () */0;
  } else {
    return 0;
  }
}

function for_in (o,foo){
        for (var x in o) { foo(x); }
      }
function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      var exit = 0;
      switch (a_type) {
        case "boolean" : 
            if (b_type === "boolean") {
              return caml_primitive.caml_bool_compare(a, b);
            } else {
              exit = 1;
            }
            break;
        case "function" : 
            if (b_type === "function") {
              throw [
                    caml_builtin_exceptions.invalid_argument,
                    "compare: functional value"
                  ];
            } else {
              exit = 1;
            }
            break;
        case "number" : 
            if (b_type === "number") {
              return caml_primitive.caml_int_compare(a, b);
            } else {
              exit = 1;
            }
            break;
        case "string" : 
            if (b_type === "string") {
              return caml_primitive.caml_string_compare(a, b);
            } else {
              return 1;
            }
        case "undefined" : 
            return -1;
        default:
          exit = 1;
      }
      if (exit === 1) {
        switch (b_type) {
          case "string" : 
              return -1;
          case "undefined" : 
              return 1;
          default:
            if (a_type === "boolean") {
              return 1;
            } else if (b_type === "boolean") {
              return -1;
            } else if (a_type === "function") {
              return 1;
            } else if (b_type === "function") {
              return -1;
            } else if (a_type === "number") {
              if (b === null || b.tag === 256) {
                return 1;
              } else {
                return -1;
              }
            } else if (b_type === "number") {
              if (a === null || a.tag === 256) {
                return -1;
              } else {
                return 1;
              }
            } else if (a === null) {
              if (b.tag === 256) {
                return 1;
              } else {
                return -1;
              }
            } else if (b === null) {
              if (a.tag === 256) {
                return -1;
              } else {
                return 1;
              }
            } else {
              var tag_a = a.tag | 0;
              var tag_b = b.tag | 0;
              if (tag_a === 250) {
                _a = a[0];
                continue ;
              } else if (tag_b === 250) {
                _b = b[0];
                continue ;
              } else if (tag_a === 256) {
                if (tag_b === 256) {
                  return caml_primitive.caml_int_compare(a[1], b[1]);
                } else {
                  return -1;
                }
              } else if (tag_a === 248) {
                return caml_primitive.caml_int_compare(a[1], b[1]);
              } else if (tag_a === 251) {
                throw [
                      caml_builtin_exceptions.invalid_argument,
                      "equal: abstract value"
                    ];
              } else if (tag_a !== tag_b) {
                if (tag_a < tag_b) {
                  return -1;
                } else {
                  return 1;
                }
              } else {
                var len_a = a.length | 0;
                var len_b = b.length | 0;
                if (len_a === len_b) {
                  if (Array.isArray(a)) {
                    var a$1 = a;
                    var b$1 = b;
                    var _i = 0;
                    var same_length = len_a;
                    while(true) {
                      var i = _i;
                      if (i === same_length) {
                        return 0;
                      } else {
                        var res = caml_compare(a$1[i], b$1[i]);
                        if (res !== 0) {
                          return res;
                        } else {
                          _i = i + 1 | 0;
                          continue ;
                        }
                      }
                    }                  } else {
                    var a$2 = a;
                    var b$2 = b;
                    var min_key_lhs = /* record */[/* contents */undefined];
                    var min_key_rhs = /* record */[/* contents */undefined];
                    var do_key = function (param, key) {
                      var min_key = param[2];
                      var b = param[1];
                      if (!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0) {
                        var match = min_key[0];
                        if (match !== undefined && key >= match) {
                          return 0;
                        } else {
                          min_key[0] = key;
                          return /* () */0;
                        }
                      } else {
                        return 0;
                      }
                    };
                    var partial_arg = /* tuple */[
                      a$2,
                      b$2,
                      min_key_rhs
                    ];
                    var do_key_a = (function(partial_arg){
                    return function do_key_a(param) {
                      return do_key(partial_arg, param);
                    }
                    }(partial_arg));
                    var partial_arg$1 = /* tuple */[
                      b$2,
                      a$2,
                      min_key_lhs
                    ];
                    var do_key_b = (function(partial_arg$1){
                    return function do_key_b(param) {
                      return do_key(partial_arg$1, param);
                    }
                    }(partial_arg$1));
                    for_in(a$2, do_key_a);
                    for_in(b$2, do_key_b);
                    var match = min_key_lhs[0];
                    var match$1 = min_key_rhs[0];
                    if (match !== undefined) {
                      if (match$1 !== undefined) {
                        return caml_primitive.caml_string_compare(match, match$1);
                      } else {
                        return -1;
                      }
                    } else if (match$1 !== undefined) {
                      return 1;
                    } else {
                      return 0;
                    }
                  }
                } else if (len_a < len_b) {
                  var a$3 = a;
                  var b$3 = b;
                  var _i$1 = 0;
                  var short_length = len_a;
                  while(true) {
                    var i$1 = _i$1;
                    if (i$1 === short_length) {
                      return -1;
                    } else {
                      var res$1 = caml_compare(a$3[i$1], b$3[i$1]);
                      if (res$1 !== 0) {
                        return res$1;
                      } else {
                        _i$1 = i$1 + 1 | 0;
                        continue ;
                      }
                    }
                  }                } else {
                  var a$4 = a;
                  var b$4 = b;
                  var _i$2 = 0;
                  var short_length$1 = len_b;
                  while(true) {
                    var i$2 = _i$2;
                    if (i$2 === short_length$1) {
                      return 1;
                    } else {
                      var res$2 = caml_compare(a$4[i$2], b$4[i$2]);
                      if (res$2 !== 0) {
                        return res$2;
                      } else {
                        _i$2 = i$2 + 1 | 0;
                        continue ;
                      }
                    }
                  }                }
              }
            }
        }
      }
      
    }
  }}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return true;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return false;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                caml_builtin_exceptions.invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return false;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
          } else if (tag_a === 248) {
            return a[1] === b[1];
          } else if (tag_a === 251) {
            throw [
                  caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return false;
          } else if (tag_a === 256) {
            return a[1] === b[1];
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              if (Array.isArray(a)) {
                var a$1 = a;
                var b$1 = b;
                var _i = 0;
                var same_length = len_a;
                while(true) {
                  var i = _i;
                  if (i === same_length) {
                    return true;
                  } else if (caml_equal(a$1[i], b$1[i])) {
                    _i = i + 1 | 0;
                    continue ;
                  } else {
                    return false;
                  }
                }              } else {
                var a$2 = a;
                var b$2 = b;
                var result = /* record */[/* contents */true];
                var do_key_a = (function(b$2,result){
                return function do_key_a(key) {
                  if (b$2.hasOwnProperty(key)) {
                    return 0;
                  } else {
                    result[0] = false;
                    return /* () */0;
                  }
                }
                }(b$2,result));
                var do_key_b = (function(a$2,b$2,result){
                return function do_key_b(key) {
                  if (!a$2.hasOwnProperty(key) || !caml_equal(b$2[key], a$2[key])) {
                    result[0] = false;
                    return /* () */0;
                  } else {
                    return 0;
                  }
                }
                }(a$2,b$2,result));
                for_in(a$2, do_key_a);
                if (result[0]) {
                  for_in(b$2, do_key_b);
                }
                return result[0];
              }
            } else {
              return false;
            }
          }
        }
      }
    }
  }}

function caml_equal_null(x, y) {
  if (y !== null) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_undefined(x, y) {
  if (y !== undefined) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_nullable(x, y) {
  if (y == null) {
    return x === y;
  } else {
    return caml_equal(x, y);
  }
}

function caml_notequal(a, b) {
  return !caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return caml_compare(a, b) >= 0;
}

function caml_greaterthan(a, b) {
  return caml_compare(a, b) > 0;
}

function caml_lessequal(a, b) {
  return caml_compare(a, b) <= 0;
}

function caml_lessthan(a, b) {
  return caml_compare(a, b) < 0;
}

function caml_min(x, y) {
  if (caml_compare(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_max(x, y) {
  if (caml_compare(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_obj_set_tag(prim, prim$1) {
  prim.tag = prim$1;
  return /* () */0;
}

var caml_obj_block_1 = caml_obj_block;
var caml_obj_dup_1 = caml_obj_dup;
var caml_obj_truncate_1 = caml_obj_truncate;
var caml_lazy_make_forward_1 = caml_lazy_make_forward;
var caml_update_dummy_1 = caml_update_dummy;
var caml_compare_1 = caml_compare;
var caml_equal_1 = caml_equal;
var caml_equal_null_1 = caml_equal_null;
var caml_equal_undefined_1 = caml_equal_undefined;
var caml_equal_nullable_1 = caml_equal_nullable;
var caml_notequal_1 = caml_notequal;
var caml_greaterequal_1 = caml_greaterequal;
var caml_greaterthan_1 = caml_greaterthan;
var caml_lessthan_1 = caml_lessthan;
var caml_lessequal_1 = caml_lessequal;
var caml_min_1 = caml_min;
var caml_max_1 = caml_max;
var caml_obj_set_tag_1 = caml_obj_set_tag;
/* No side effect */

var caml_obj = {
	caml_obj_block: caml_obj_block_1,
	caml_obj_dup: caml_obj_dup_1,
	caml_obj_truncate: caml_obj_truncate_1,
	caml_lazy_make_forward: caml_lazy_make_forward_1,
	caml_update_dummy: caml_update_dummy_1,
	caml_compare: caml_compare_1,
	caml_equal: caml_equal_1,
	caml_equal_null: caml_equal_null_1,
	caml_equal_undefined: caml_equal_undefined_1,
	caml_equal_nullable: caml_equal_nullable_1,
	caml_notequal: caml_notequal_1,
	caml_greaterequal: caml_greaterequal_1,
	caml_greaterthan: caml_greaterthan_1,
	caml_lessthan: caml_lessthan_1,
	caml_lessequal: caml_lessequal_1,
	caml_min: caml_min_1,
	caml_max: caml_max_1,
	caml_obj_set_tag: caml_obj_set_tag_1
};

var stdout = /* record */[
  /* buffer */"",
  /* output */(function (param, s) {
      var v = s.length - 1 | 0;
      if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
        return ( process.stdout.write )(s);
      } else if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

var stderr = /* record */[
  /* buffer */"",
  /* output */(function (param, s) {
      var v = s.length - 1 | 0;
      if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

function caml_ml_flush(oc) {
  if (oc[/* buffer */0] !== "") {
    curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
    oc[/* buffer */0] = "";
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_ml_output(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
  if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout) {
    return ( process.stdout.write )(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");
    if (id < 0) {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1;
      return /* () */0;
    } else {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush(oc);
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
      return /* () */0;
    }
  }
}

function caml_ml_output_char(oc, $$char) {
  return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_out_channels_list(param) {
  return /* :: */[
          stdout,
          /* :: */[
            stderr,
            /* [] */0
          ]
        ];
}

var stdin = undefined;

var stdin_1 = stdin;
var stdout_1 = stdout;
var stderr_1 = stderr;
var caml_ml_flush_1 = caml_ml_flush;
var caml_ml_output_1 = caml_ml_output;
var caml_ml_output_char_1 = caml_ml_output_char;
var caml_ml_out_channels_list_1 = caml_ml_out_channels_list;
/* No side effect */

var caml_io = {
	stdin: stdin_1,
	stdout: stdout_1,
	stderr: stderr_1,
	caml_ml_flush: caml_ml_flush_1,
	caml_ml_output: caml_ml_output_1,
	caml_ml_output_char: caml_ml_output_char_1,
	caml_ml_out_channels_list: caml_ml_out_channels_list_1
};

function caml_sys_getenv(s) {
  if (typeof process === "undefined" || (process.env) === undefined) {
    throw caml_builtin_exceptions.not_found;
  } else {
    var match = (process.env)[s];
    if (match !== undefined) {
      return match;
    } else {
      throw caml_builtin_exceptions.not_found;
    }
  }
}

function caml_sys_time(param) {
  if (typeof process === "undefined" || (process.uptime) === undefined) {
    return -1;
  } else {
    return process.uptime();
  }
}

function caml_sys_random_seed(param) {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}

function caml_sys_system_command(_cmd) {
  return 127;
}

function caml_sys_getcwd(param) {
  if (typeof process === "undefined") {
    return "/";
  } else {
    return process.cwd();
  }
}

function caml_sys_get_argv(param) {
  if (typeof process === "undefined") {
    return /* tuple */[
            "",
            /* array */[""]
          ];
  } else {
    var argv = (process.argv);
    if (argv == null) {
      return /* tuple */[
              "",
              /* array */[""]
            ];
    } else {
      return /* tuple */[
              argv[0],
              argv
            ];
    }
  }
}

function caml_sys_exit(exit_code) {
  if (typeof process !== "undefined") {
    return process.exit(exit_code);
  } else {
    return 0;
  }
}

function caml_sys_is_directory(_s) {
  throw [
        caml_builtin_exceptions.failure,
        "caml_sys_is_directory not implemented"
      ];
}

function caml_sys_file_exists(_s) {
  throw [
        caml_builtin_exceptions.failure,
        "caml_sys_file_exists not implemented"
      ];
}

var caml_sys_getenv_1 = caml_sys_getenv;
var caml_sys_time_1 = caml_sys_time;
var caml_sys_random_seed_1 = caml_sys_random_seed;
var caml_sys_system_command_1 = caml_sys_system_command;
var caml_sys_getcwd_1 = caml_sys_getcwd;
var caml_sys_get_argv_1 = caml_sys_get_argv;
var caml_sys_exit_1 = caml_sys_exit;
var caml_sys_is_directory_1 = caml_sys_is_directory;
var caml_sys_file_exists_1 = caml_sys_file_exists;
/* No side effect */

var caml_sys = {
	caml_sys_getenv: caml_sys_getenv_1,
	caml_sys_time: caml_sys_time_1,
	caml_sys_random_seed: caml_sys_random_seed_1,
	caml_sys_system_command: caml_sys_system_command_1,
	caml_sys_getcwd: caml_sys_getcwd_1,
	caml_sys_get_argv: caml_sys_get_argv_1,
	caml_sys_exit: caml_sys_exit_1,
	caml_sys_is_directory: caml_sys_is_directory_1,
	caml_sys_file_exists: caml_sys_file_exists_1
};

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s[i];
  }
}

function caml_fill_bytes(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_create_bytes(len) {
  if (len < 0) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.create"
        ];
  } else {
    var result = new Array(len);
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      result[i] = /* "\000" */0;
    }
    return result;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_to_string(a) {
  var bytes = a;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null, bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null, tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    }    return s;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

var caml_create_bytes_1 = caml_create_bytes;
var caml_fill_bytes_1 = caml_fill_bytes;
var get_1 = get;
var bytes_to_string_1 = bytes_to_string;
var caml_blit_bytes_1 = caml_blit_bytes;
var caml_blit_string_1 = caml_blit_string;
var bytes_of_string_1 = bytes_of_string;
/* No side effect */

var caml_bytes = {
	caml_create_bytes: caml_create_bytes_1,
	caml_fill_bytes: caml_fill_bytes_1,
	get: get_1,
	bytes_to_string: bytes_to_string_1,
	caml_blit_bytes: caml_blit_bytes_1,
	caml_blit_string: caml_blit_string_1,
	bytes_of_string: bytes_of_string_1
};

function div(x, y) {
  if (y === 0) {
    throw caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function caml_int32_bswap(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);

var caml_nativeint_bswap = caml_int32_bswap;

var div_1 = div;
var mod__1 = mod_;
var caml_bswap16_1 = caml_bswap16;
var caml_int32_bswap_1 = caml_int32_bswap;
var caml_nativeint_bswap_1 = caml_nativeint_bswap;
var imul_1 = imul;
/* imul Not a pure module */

var caml_int32 = {
	div: div_1,
	mod_: mod__1,
	caml_bswap16: caml_bswap16_1,
	caml_int32_bswap: caml_int32_bswap_1,
	caml_nativeint_bswap: caml_nativeint_bswap_1,
	imul: imul_1
};

function repeat (count,self){
    if (self.repeat){
        return self.repeat(count)
    }
    if (self.length == 0 || count == 0) {
            return '';
        }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
    }
    return rpt;

}
var repeat_1 = repeat;
/* No side effect */

var caml_utils = {
	repeat: repeat_1
};

var min_int = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int = /* record */[
  /* hi */2147483647,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return (x & 2147483648) !== 0;
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq$1(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return x[/* lo */1] === y[/* lo */1];
  } else {
    return false;
  }
}

function equal_null(x, y) {
  if (y !== null) {
    return eq$1(x, y);
  } else {
    return false;
  }
}

function equal_undefined(x, y) {
  if (y !== undefined) {
    return eq$1(x, y);
  } else {
    return false;
  }
}

function equal_nullable(x, y) {
  if (y == null) {
    return false;
  } else {
    return eq$1(x, y);
  }
}

function neg(x) {
  if (eq$1(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  }
}

function lsr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset === 0) {
      return /* record */[
              /* hi */0,
              /* lo */(hi >>> 0)
            ];
    } else if (offset > 0) {
      var lo = (hi >>> offset);
      return /* record */[
              /* hi */0,
              /* lo */(lo >>> 0)
            ];
    } else {
      var hi$1 = (hi >>> numBits);
      var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function asr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return false;
  } else {
    return true;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0 || $$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648 || $$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648 || other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
    
  }}

function swap(param) {
  var hi = caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = caml_int32.caml_int32_bswap(param[/* hi */0]);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function xor(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] ^ param$1[/* hi */0],
          /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
        ];
}

function or_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function and_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] & param$1[/* hi */0],
          /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
        ];
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return true;
  } else if (hi < other_hi) {
    return false;
  } else {
    return param[/* lo */1] >= param$1[/* lo */1];
  }
}

function neq(x, y) {
  return !eq$1(x, y);
}

function lt(x, y) {
  return !ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return true;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return false;
  } else {
    return x[/* lo */1] > y[/* lo */1];
  }
}

function le(x, y) {
  return !gt(x, y);
}

function min(x, y) {
  if (ge(x, y)) {
    return y;
  } else {
    return x;
  }
}

function max(x, y) {
  if (gt(x, y)) {
    return x;
  } else {
    return y;
  }
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= -9.22337203685477581e+18) {
    return min_int;
  } else if (x + 1 >= 9.22337203685477581e+18) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / 4294967296 | 0;
    var lo = x % 4294967296 | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div$1(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0 || self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq$1(other, one) || eq$1(other, neg_one)) {
        return self;
      } else if (eq$1(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div$1(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0 || approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div$1(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648 || other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
          } else {
            return neg(div$1(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div$1(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = caml_primitive.caml_float_max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            }            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          }          return res;
        }
      }
      
    }
    
  }}

function mod_$1(self, other) {
  var y = mul(div$1(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div$1(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function compare(self, other) {
  var v = caml_primitive.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v === 0) {
    return caml_primitive.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  } else {
    return v;
  }
}

function of_int32(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_int32(x) {
  return x[/* lo */1] | 0;
}

function to_hex(x) {
  var x_lo = x[/* lo */1];
  var x_hi = x[/* hi */0];
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var exit = 0;
  if (x_hi !== 0 || x_lo !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (x_lo !== 0) {
      if (x_hi !== 0) {
        var lo = aux(x_lo);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x_hi) + lo;
        } else {
          return aux(x_hi) + (caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x_lo);
      }
    } else {
      return aux(x_hi) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}

function float_of_bits (x){ 
  return new Float64Array(new Int32Array([x[1],x[0]]).buffer)[0]
}
function bits_of_float(x) {
  var buf = (new Int32Array(new Float64Array([x]).buffer));
  return /* record */[
          /* hi */buf[1],
          /* lo */(buf[0] >>> 0)
        ];
}

function get64(s, i) {
  var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
  var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

var min_int_1 = min_int;
var max_int_1 = max_int;
var one_1 = one;
var zero_1 = zero;
var not_1 = not;
var of_int32_1 = of_int32;
var to_int32_1 = to_int32;
var add_1 = add;
var neg_1 = neg;
var sub_1 = sub;
var lsl__1 = lsl_;
var lsr__1 = lsr_;
var asr__1 = asr_;
var is_zero_1 = is_zero;
var mul_1 = mul;
var xor_1 = xor;
var or__1 = or_;
var and__1 = and_;
var swap_1 = swap;
var ge_1 = ge;
var eq_1$1 = eq$1;
var neq_1 = neq;
var lt_1 = lt;
var gt_1 = gt;
var le_1 = le;
var equal_null_1 = equal_null;
var equal_undefined_1 = equal_undefined;
var equal_nullable_1 = equal_nullable;
var min_1 = min;
var max_1 = max;
var to_float_1 = to_float;
var of_float_1 = of_float;
var div_1$1 = div$1;
var mod__1$1 = mod_$1;
var compare_1 = compare;
var float_of_bits_1 = float_of_bits;
var bits_of_float_1 = bits_of_float;
var get64_1 = get64;
var div_mod_1 = div_mod;
var to_hex_1 = to_hex;
var discard_sign_1 = discard_sign;
/* Caml_int32 Not a pure module */

var caml_int64 = {
	min_int: min_int_1,
	max_int: max_int_1,
	one: one_1,
	zero: zero_1,
	not: not_1,
	of_int32: of_int32_1,
	to_int32: to_int32_1,
	add: add_1,
	neg: neg_1,
	sub: sub_1,
	lsl_: lsl__1,
	lsr_: lsr__1,
	asr_: asr__1,
	is_zero: is_zero_1,
	mul: mul_1,
	xor: xor_1,
	or_: or__1,
	and_: and__1,
	swap: swap_1,
	ge: ge_1,
	eq: eq_1$1,
	neq: neq_1,
	lt: lt_1,
	gt: gt_1,
	le: le_1,
	equal_null: equal_null_1,
	equal_undefined: equal_undefined_1,
	equal_nullable: equal_nullable_1,
	min: min_1,
	max: max_1,
	to_float: to_float_1,
	of_float: of_float_1,
	div: div_1$1,
	mod_: mod__1$1,
	compare: compare_1,
	float_of_bits: float_of_bits_1,
	bits_of_float: bits_of_float_1,
	get64: get64_1,
	div_mod: div_mod_1,
	to_hex: to_hex_1,
	discard_sign: discard_sign_1
};

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  var match = s.charCodeAt(i);
  switch (match) {
    case 43 : 
        i = i + 1 | 0;
        break;
    case 44 : 
        break;
    case 45 : 
        sign = -1;
        i = i + 1 | 0;
        break;
    default:
      
  }
  if (s[i] === "0") {
    var match$1 = s.charCodeAt(i + 1 | 0);
    if (match$1 >= 89) {
      if (match$1 >= 111) {
        if (match$1 < 121) {
          switch (match$1 - 111 | 0) {
            case 0 : 
                base = /* Oct */0;
                i = i + 2 | 0;
                break;
            case 6 : 
                i = i + 2 | 0;
                break;
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 7 : 
            case 8 : 
                break;
            case 9 : 
                base = /* Hex */1;
                i = i + 2 | 0;
                break;
            
          }
        }
        
      } else if (match$1 === 98) {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
      
    } else if (match$1 !== 66) {
      if (match$1 >= 79) {
        switch (match$1 - 79 | 0) {
          case 0 : 
              base = /* Oct */0;
              i = i + 2 | 0;
              break;
          case 6 : 
              i = i + 2 | 0;
              break;
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 7 : 
          case 8 : 
              break;
          case 9 : 
              base = /* Hex */1;
              i = i + 2 | 0;
              break;
          
        }
      }
      
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  caml_builtin_exceptions.failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    caml_builtin_exceptions.failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
            }
          }
        }
      }
    }  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = caml_int64.of_int32(int_of_string_base(hbase));
  var sign = caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0 : 
        threshold = /* int64 */[
          /* hi */536870911,
          /* lo */4294967295
        ];
        break;
    case 1 : 
        threshold = /* int64 */[
          /* hi */268435455,
          /* lo */4294967295
        ];
        break;
    case 2 : 
        threshold = /* int64 */[
          /* hi */429496729,
          /* lo */2576980377
        ];
        break;
    case 3 : 
        threshold = /* int64 */[
          /* hi */2147483647,
          /* lo */4294967295
        ];
        break;
    
  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = caml_int64.of_int32(parse_digit(c));
  if (caml_int64.lt(d, /* int64 */[
          /* hi */0,
          /* lo */0
        ]) || caml_int64.ge(d, base)) {
    throw [
          caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
        } else {
          var v = caml_int64.of_int32(parse_digit(a));
          if (caml_int64.lt(v, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ]) || caml_int64.ge(v, base) || caml_int64.gt(acc, threshold)) {
            throw [
                  caml_builtin_exceptions.failure,
                  "int64_of_string"
                ];
          } else {
            var acc$1 = caml_int64.add(caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue ;
          }
        }
      }
    }  };
  var res = caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = caml_int64.or_(res, /* int64 */[
        /* hi */0,
        /* lo */0
      ]);
  if (caml_int64.eq(base, /* int64 */[
          /* hi */0,
          /* lo */10
        ]) && caml_int64.neq(res, or_res)) {
    throw [
          caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate */false,
    /* base : Dec */2,
    /* signedconv */false,
    /* width */0,
    /* uppercase */false,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = true;
                  _i = i + 1 | 0;
                  continue ;
              case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
              case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
              case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
              
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = true;
          f[/* uppercase */7] = true;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
        }
      } else {
        switch (c) {
          case 35 : 
              f[/* alternate */3] = true;
              _i = i + 1 | 0;
              continue ;
          case 32 : 
          case 43 : 
              exit = 2;
              break;
          case 45 : 
              f[/* justify */0] = "-";
              _i = i + 1 | 0;
              continue ;
          case 46 : 
              f[/* prec */9] = 0;
              var j = i + 1 | 0;
              while((function(j){
                  return function () {
                    var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                    return w >= 0 && w <= 9;
                  }
                  }(j))()) {
                f[/* prec */9] = (caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                j = j + 1 | 0;
              }              _i = j;
              continue ;
          case 33 : 
          case 34 : 
          case 36 : 
          case 37 : 
          case 38 : 
          case 39 : 
          case 40 : 
          case 41 : 
          case 42 : 
          case 44 : 
          case 47 : 
              exit = 1;
              break;
          case 48 : 
              f[/* filter */2] = "0";
              _i = i + 1 | 0;
              continue ;
          case 49 : 
          case 50 : 
          case 51 : 
          case 52 : 
          case 53 : 
          case 54 : 
          case 55 : 
          case 56 : 
          case 57 : 
              exit = 3;
              break;
          default:
            exit = 1;
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
        case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
        case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return w >= 0 && w <= 9;
                }
                }(j$1))()) {
              f[/* width */6] = (caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            }            _i = j$1;
            continue ;
        case 4 : 
            f[/* signedconv */5] = true;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
        case 5 : 
            f[/* signedconv */5] = true;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
        
      }
    }
  }}

function finish_formatting(config, rawbuffer) {
  var justify = config[/* justify */0];
  var signstyle = config[/* signstyle */1];
  var filter = config[/* filter */2];
  var alternate = config[/* alternate */3];
  var base = config[/* base */4];
  var signedconv = config[/* signedconv */5];
  var width = config[/* width */6];
  var uppercase = config[/* uppercase */7];
  var sign = config[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base === /* Oct */0) {
      len = len + 1 | 0;
    } else if (base === /* Hex */1) {
      len = len + 2 | 0;
    }
    
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = caml_utils.repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && caml_int64.lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = caml_int64.discard_sign(x$1);
          var match$1 = caml_int64.div_mod(y, wbase);
          var quotient = caml_int64.add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(caml_int64.neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = caml_int64.div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          }        } else {
          var match$3 = caml_int64.div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(caml_int64.neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          }        }
        break;
    case 1 : 
        s = caml_int64.to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = caml_int64.discard_sign(x$1);
          var match$5 = caml_int64.div_mod(y$1, wbase$1);
          var match$6 = caml_int64.div_mod(caml_int64.add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = caml_int64.add(caml_int64.add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(caml_int64.neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = caml_int64.div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          }        } else {
          var match$8 = caml_int64.div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(caml_int64.neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = caml_int64.div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          }        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = caml_utils.repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            }            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return s.length > (prec$1 + 1 | 0);
                    })()) {
                p = p - 1 | 0;
              }            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              }              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

function float_of_string (s,exn){ 

    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    throw exn;

}
function caml_float_of_string(s) {
  return float_of_string(s, [
              caml_builtin_exceptions.failure,
              "float_of_string"
            ]);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;

var caml_int32_of_string = caml_int_of_string;

var caml_nativeint_of_string = caml_int_of_string;

var caml_format_float_1 = caml_format_float;
var caml_format_int_1 = caml_format_int;
var caml_nativeint_format_1 = caml_nativeint_format;
var caml_int32_format_1 = caml_int32_format;
var caml_float_of_string_1 = caml_float_of_string;
var caml_int64_format_1 = caml_int64_format;
var caml_int_of_string_1 = caml_int_of_string;
var caml_int32_of_string_1 = caml_int32_of_string;
var caml_int64_of_string_1 = caml_int64_of_string;
var caml_nativeint_of_string_1 = caml_nativeint_of_string;
/* No side effect */

var caml_format = {
	caml_format_float: caml_format_float_1,
	caml_format_int: caml_format_int_1,
	caml_nativeint_format: caml_nativeint_format_1,
	caml_int32_format: caml_int32_format_1,
	caml_float_of_string: caml_float_of_string_1,
	caml_int64_format: caml_int64_format_1,
	caml_int_of_string: caml_int_of_string_1,
	caml_int32_of_string: caml_int32_of_string_1,
	caml_int64_of_string: caml_int64_of_string_1,
	caml_nativeint_of_string: caml_nativeint_of_string_1
};

function caml_string_get(s, i) {
  if (i >= s.length || i < 0) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_string_get16(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get$1(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

var caml_string_get_1 = caml_string_get;
var caml_string_get16_1 = caml_string_get16;
var caml_string_get32_1 = caml_string_get32;
var get_1$1 = get$1;
/* No side effect */

var caml_string = {
	caml_string_get: caml_string_get_1,
	caml_string_get16: caml_string_get16_1,
	caml_string_get32: caml_string_get32_1,
	get: get_1$1
};

var id = /* record */[/* contents */0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function caml_fresh_oo_id(param) {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = caml_fresh_oo_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function caml_is_extension(e) {
  if (e === undefined) {
    return false;
  } else if (e.tag === 248) {
    return true;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return slot.tag === 248;
    } else {
      return false;
    }
  }
}

var caml_set_oo_id_1 = caml_set_oo_id;
var caml_fresh_oo_id_1 = caml_fresh_oo_id;
var create_1 = create;
var caml_is_extension_1 = caml_is_extension;
/* No side effect */

var caml_exceptions = {
	caml_set_oo_id: caml_set_oo_id_1,
	caml_fresh_oo_id: caml_fresh_oo_id_1,
	create: create_1,
	caml_is_extension: caml_is_extension_1
};

function not_implemented (s){
  throw new Error(s + " not implemented by BuckleScript yet\n")
}
var not_implemented_1 = not_implemented;
/* No side effect */

var caml_missing_polyfill = {
	not_implemented: not_implemented_1
};

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */block.__(0, [erase_rel(param[0])]);
      case 1 : 
          return /* String_ty */block.__(1, [erase_rel(param[0])]);
      case 2 : 
          return /* Int_ty */block.__(2, [erase_rel(param[0])]);
      case 3 : 
          return /* Int32_ty */block.__(3, [erase_rel(param[0])]);
      case 4 : 
          return /* Nativeint_ty */block.__(4, [erase_rel(param[0])]);
      case 5 : 
          return /* Int64_ty */block.__(5, [erase_rel(param[0])]);
      case 6 : 
          return /* Float_ty */block.__(6, [erase_rel(param[0])]);
      case 7 : 
          return /* Bool_ty */block.__(7, [erase_rel(param[0])]);
      case 8 : 
          return /* Format_arg_ty */block.__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */block.__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */block.__(10, [erase_rel(param[0])]);
      case 11 : 
          return /* Theta_ty */block.__(11, [erase_rel(param[0])]);
      case 12 : 
          return /* Any_ty */block.__(12, [erase_rel(param[0])]);
      case 13 : 
          return /* Reader_ty */block.__(13, [erase_rel(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */block.__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */block.__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */block.__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */block.__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */block.__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */block.__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */block.__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */block.__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */block.__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */block.__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */block.__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */block.__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */block.__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */block.__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */block.__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */block.__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */block.__(0, [concat_fmt(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */block.__(1, [concat_fmt(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */block.__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */block.__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */block.__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */block.__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */block.__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */block.__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */block.__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */block.__(9, [concat_fmt(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */block.__(10, [concat_fmt(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */block.__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */block.__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */block.__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */block.__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */block.__(15, [concat_fmt(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */block.__(16, [concat_fmt(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */block.__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */block.__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */block.__(19, [concat_fmt(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */block.__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */block.__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */block.__(22, [concat_fmt(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */block.__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */block.__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}

var concat_fmtty_1 = concat_fmtty;
var erase_rel_1 = erase_rel;
var concat_fmt_1 = concat_fmt;
/* No side effect */

var camlinternalFormatBasics = {
	concat_fmtty: concat_fmtty_1,
	erase_rel: erase_rel_1,
	concat_fmt: concat_fmt_1
};

function failwith(s) {
  throw [
        caml_builtin_exceptions.failure,
        s
      ];
}

function invalid_arg(s) {
  throw [
        caml_builtin_exceptions.invalid_argument,
        s
      ];
}

var Exit = caml_exceptions.create("Pervasives.Exit");

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int$1 = -2147483648;

function classify_float(x) {
  if (isFinite(x)) {
    if (Math.abs(x) >= 2.2250738585072014e-308) {
      return /* FP_normal */0;
    } else if (x !== 0) {
      return /* FP_subnormal */1;
    } else {
      return /* FP_zero */2;
    }
  } else if (isNaN(x)) {
    return /* FP_nan */4;
  } else {
    return /* FP_infinite */3;
  }
}

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "char_of_int"
        ];
  } else {
    return n;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false" : 
        return false;
    case "true" : 
        return true;
    default:
      throw [
            caml_builtin_exceptions.invalid_argument,
            "bool_of_string"
          ];
  }
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return s + ".";
    } else {
      var match = caml_string.get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
      }
    }
  }}

function string_of_float(f) {
  return valid_float_lexem(caml_format.caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

var stdin$1 = caml_io.stdin;

var stdout$1 = caml_io.stdout;

var stderr$1 = caml_io.stderr;

function open_out_gen(mode, perm, name) {
  return caml_missing_polyfill.not_implemented("caml_ml_open_descriptor_out");
}

function open_out(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_text */7,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function open_out_bin(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_binary */6,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function flush_all(param) {
  var _param = caml_io.caml_ml_out_channels_list(/* () */0);
  while(true) {
    var param$1 = _param;
    if (param$1) {
      try {
        caml_io.caml_ml_flush(param$1[0]);
      }
      catch (exn){
        
      }
      _param = param$1[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function output_bytes(oc, s) {
  return caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output_string(oc, s) {
  return caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "output"
        ];
  } else {
    return caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "output_substring"
        ];
  } else {
    return caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_value(chan, v) {
  return caml_missing_polyfill.not_implemented("caml_output_value");
}

function close_out(oc) {
  caml_io.caml_ml_flush(oc);
  return caml_missing_polyfill.not_implemented("caml_ml_close_channel");
}

function close_out_noerr(oc) {
  try {
    caml_io.caml_ml_flush(oc);
  }
  catch (exn){
    
  }
  try {
    return caml_missing_polyfill.not_implemented("caml_ml_close_channel");
  }
  catch (exn$1){
    return /* () */0;
  }
}

function open_in_gen(mode, perm, name) {
  return caml_missing_polyfill.not_implemented("caml_ml_open_descriptor_in");
}

function open_in(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_text */7,
                /* [] */0
              ]
            ], 0, name);
}

function open_in_bin(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_binary */6,
                /* [] */0
              ]
            ], 0, name);
}

function input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "input"
        ];
  } else {
    return caml_missing_polyfill.not_implemented("caml_ml_input");
  }
}

function unsafe_really_input(ic, s, _ofs, _len) {
  while(true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return /* () */0;
    } else {
      var r = caml_missing_polyfill.not_implemented("caml_ml_input");
      if (r === 0) {
        throw caml_builtin_exceptions.end_of_file;
      } else {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue ;
      }
    }
  }}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "really_input"
        ];
  } else {
    return unsafe_really_input(ic, s, ofs, len);
  }
}

function really_input_string(ic, len) {
  var s = caml_bytes.caml_create_bytes(len);
  really_input(ic, s, 0, len);
  return caml_bytes.bytes_to_string(s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while(true) {
      var param = _param;
      var pos = _pos;
      if (param) {
        var hd = param[0];
        var len = hd.length;
        caml_bytes.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue ;
      } else {
        return buf;
      }
    }  };
  var scan = function (_accu, _len) {
    while(true) {
      var len = _len;
      var accu = _accu;
      var n = caml_missing_polyfill.not_implemented("caml_ml_input_scan_line");
      if (n === 0) {
        if (accu) {
          return build_result(caml_bytes.caml_create_bytes(len), len, accu);
        } else {
          throw caml_builtin_exceptions.end_of_file;
        }
      } else if (n > 0) {
        var res = caml_bytes.caml_create_bytes(n - 1 | 0);
        caml_missing_polyfill.not_implemented("caml_ml_input");
        caml_missing_polyfill.not_implemented("caml_ml_input_char");
        if (accu) {
          var len$1 = (len + n | 0) - 1 | 0;
          return build_result(caml_bytes.caml_create_bytes(len$1), len$1, /* :: */[
                      res,
                      accu
                    ]);
        } else {
          return res;
        }
      } else {
        var beg = caml_bytes.caml_create_bytes(-n | 0);
        caml_missing_polyfill.not_implemented("caml_ml_input");
        _len = len - n | 0;
        _accu = /* :: */[
          beg,
          accu
        ];
        continue ;
      }
    }  };
  return caml_bytes.bytes_to_string(scan(/* [] */0, 0));
}

function close_in_noerr(ic) {
  try {
    return caml_missing_polyfill.not_implemented("caml_ml_close_channel");
  }
  catch (exn){
    return /* () */0;
  }
}

function print_char(c) {
  return caml_io.caml_ml_output_char(stdout$1, c);
}

function print_string(s) {
  return output_string(stdout$1, s);
}

function print_bytes(s) {
  return output_bytes(stdout$1, s);
}

function print_int(i) {
  return output_string(stdout$1, String(i));
}

function print_float(f) {
  return output_string(stdout$1, valid_float_lexem(caml_format.caml_format_float("%.12g", f)));
}

function print_newline(param) {
  caml_io.caml_ml_output_char(stdout$1, /* "\n" */10);
  return caml_io.caml_ml_flush(stdout$1);
}

function prerr_char(c) {
  return caml_io.caml_ml_output_char(stderr$1, c);
}

function prerr_string(s) {
  return output_string(stderr$1, s);
}

function prerr_bytes(s) {
  return output_bytes(stderr$1, s);
}

function prerr_int(i) {
  return output_string(stderr$1, String(i));
}

function prerr_float(f) {
  return output_string(stderr$1, valid_float_lexem(caml_format.caml_format_float("%.12g", f)));
}

function prerr_newline(param) {
  caml_io.caml_ml_output_char(stderr$1, /* "\n" */10);
  return caml_io.caml_ml_flush(stderr$1);
}

function read_line(param) {
  caml_io.caml_ml_flush(stdout$1);
  return input_line(stdin$1);
}

function read_int(param) {
  return caml_format.caml_int_of_string((caml_io.caml_ml_flush(stdout$1), input_line(stdin$1)));
}

function read_float(param) {
  return caml_format.caml_float_of_string((caml_io.caml_ml_flush(stdout$1), input_line(stdin$1)));
}

function string_of_format(param) {
  return param[1];
}

function $caret$caret(param, param$1) {
  return /* Format */[
          camlinternalFormatBasics.concat_fmt(param[0], param$1[0]),
          param[1] + ("%," + param$1[1])
        ];
}

var exit_function = /* record */[/* contents */flush_all];

function at_exit(f) {
  var g = exit_function[0];
  exit_function[0] = (function (param) {
      curry._1(f, /* () */0);
      return curry._1(g, /* () */0);
    });
  return /* () */0;
}

function do_at_exit(param) {
  return curry._1(exit_function[0], /* () */0);
}

function exit(retcode) {
  do_at_exit(/* () */0);
  return caml_sys.caml_sys_exit(retcode);
}

var max_int$1 = 2147483647;

var epsilon_float = 2.220446049250313e-16;

var flush = caml_io.caml_ml_flush;

var output_char = caml_io.caml_ml_output_char;

var output_byte = caml_io.caml_ml_output_char;

function output_binary_int(prim, prim$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_output_int");
}

function seek_out(prim, prim$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_seek_out");
}

function pos_out(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_pos_out");
}

function out_channel_length(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_channel_size");
}

function set_binary_mode_out(prim, prim$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode");
}

function input_char(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_input_char");
}

function input_byte(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_input_char");
}

function input_binary_int(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_input_int");
}

function input_value(prim) {
  return caml_missing_polyfill.not_implemented("caml_input_value");
}

function seek_in(prim, prim$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_seek_in");
}

function pos_in(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_pos_in");
}

function in_channel_length(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_channel_size");
}

function close_in(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_close_channel");
}

function set_binary_mode_in(prim, prim$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode");
}

function LargeFile_000(prim, prim$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_seek_out_64");
}

function LargeFile_001(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_pos_out_64");
}

function LargeFile_002(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_channel_size_64");
}

function LargeFile_003(prim, prim$1) {
  return caml_missing_polyfill.not_implemented("caml_ml_seek_in_64");
}

function LargeFile_004(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_pos_in_64");
}

function LargeFile_005(prim) {
  return caml_missing_polyfill.not_implemented("caml_ml_channel_size_64");
}

var LargeFile = [
  LargeFile_000,
  LargeFile_001,
  LargeFile_002,
  LargeFile_003,
  LargeFile_004,
  LargeFile_005
];

var invalid_arg_1 = invalid_arg;
var failwith_1 = failwith;
var Exit_1 = Exit;
var abs_1 = abs;
var max_int_1$1 = max_int$1;
var min_int_1$1 = min_int$1;
var lnot_1 = lnot;
var epsilon_float_1 = epsilon_float;
var classify_float_1 = classify_float;
var char_of_int_1 = char_of_int;
var string_of_bool_1 = string_of_bool;
var bool_of_string_1 = bool_of_string;
var string_of_float_1 = string_of_float;
var $at_1 = $at;
var stdin_1$1 = stdin$1;
var stdout_1$1 = stdout$1;
var stderr_1$1 = stderr$1;
var print_char_1 = print_char;
var print_string_1 = print_string;
var print_bytes_1 = print_bytes;
var print_int_1 = print_int;
var print_float_1 = print_float;
var print_newline_1 = print_newline;
var prerr_char_1 = prerr_char;
var prerr_string_1 = prerr_string;
var prerr_bytes_1 = prerr_bytes;
var prerr_int_1 = prerr_int;
var prerr_float_1 = prerr_float;
var prerr_newline_1 = prerr_newline;
var read_line_1 = read_line;
var read_int_1 = read_int;
var read_float_1 = read_float;
var open_out_1 = open_out;
var open_out_bin_1 = open_out_bin;
var open_out_gen_1 = open_out_gen;
var flush_1 = flush;
var flush_all_1 = flush_all;
var output_char_1 = output_char;
var output_string_1 = output_string;
var output_bytes_1 = output_bytes;
var output_1 = output;
var output_substring_1 = output_substring;
var output_byte_1 = output_byte;
var output_binary_int_1 = output_binary_int;
var output_value_1 = output_value;
var seek_out_1 = seek_out;
var pos_out_1 = pos_out;
var out_channel_length_1 = out_channel_length;
var close_out_1 = close_out;
var close_out_noerr_1 = close_out_noerr;
var set_binary_mode_out_1 = set_binary_mode_out;
var open_in_1 = open_in;
var open_in_bin_1 = open_in_bin;
var open_in_gen_1 = open_in_gen;
var input_char_1 = input_char;
var input_line_1 = input_line;
var input_1 = input;
var really_input_1 = really_input;
var really_input_string_1 = really_input_string;
var input_byte_1 = input_byte;
var input_binary_int_1 = input_binary_int;
var input_value_1 = input_value;
var seek_in_1 = seek_in;
var pos_in_1 = pos_in;
var in_channel_length_1 = in_channel_length;
var close_in_1 = close_in;
var close_in_noerr_1 = close_in_noerr;
var set_binary_mode_in_1 = set_binary_mode_in;
var LargeFile_1 = LargeFile;
var string_of_format_1 = string_of_format;
var $caret$caret_1 = $caret$caret;
var exit_1 = exit;
var at_exit_1 = at_exit;
var valid_float_lexem_1 = valid_float_lexem;
var unsafe_really_input_1 = unsafe_really_input;
var do_at_exit_1 = do_at_exit;
/* No side effect */

var pervasives = {
	invalid_arg: invalid_arg_1,
	failwith: failwith_1,
	Exit: Exit_1,
	abs: abs_1,
	max_int: max_int_1$1,
	min_int: min_int_1$1,
	lnot: lnot_1,
	epsilon_float: epsilon_float_1,
	classify_float: classify_float_1,
	char_of_int: char_of_int_1,
	string_of_bool: string_of_bool_1,
	bool_of_string: bool_of_string_1,
	string_of_float: string_of_float_1,
	$at: $at_1,
	stdin: stdin_1$1,
	stdout: stdout_1$1,
	stderr: stderr_1$1,
	print_char: print_char_1,
	print_string: print_string_1,
	print_bytes: print_bytes_1,
	print_int: print_int_1,
	print_float: print_float_1,
	print_newline: print_newline_1,
	prerr_char: prerr_char_1,
	prerr_string: prerr_string_1,
	prerr_bytes: prerr_bytes_1,
	prerr_int: prerr_int_1,
	prerr_float: prerr_float_1,
	prerr_newline: prerr_newline_1,
	read_line: read_line_1,
	read_int: read_int_1,
	read_float: read_float_1,
	open_out: open_out_1,
	open_out_bin: open_out_bin_1,
	open_out_gen: open_out_gen_1,
	flush: flush_1,
	flush_all: flush_all_1,
	output_char: output_char_1,
	output_string: output_string_1,
	output_bytes: output_bytes_1,
	output: output_1,
	output_substring: output_substring_1,
	output_byte: output_byte_1,
	output_binary_int: output_binary_int_1,
	output_value: output_value_1,
	seek_out: seek_out_1,
	pos_out: pos_out_1,
	out_channel_length: out_channel_length_1,
	close_out: close_out_1,
	close_out_noerr: close_out_noerr_1,
	set_binary_mode_out: set_binary_mode_out_1,
	open_in: open_in_1,
	open_in_bin: open_in_bin_1,
	open_in_gen: open_in_gen_1,
	input_char: input_char_1,
	input_line: input_line_1,
	input: input_1,
	really_input: really_input_1,
	really_input_string: really_input_string_1,
	input_byte: input_byte_1,
	input_binary_int: input_binary_int_1,
	input_value: input_value_1,
	seek_in: seek_in_1,
	pos_in: pos_in_1,
	in_channel_length: in_channel_length_1,
	close_in: close_in_1,
	close_in_noerr: close_in_noerr_1,
	set_binary_mode_in: set_binary_mode_in_1,
	LargeFile: LargeFile_1,
	string_of_format: string_of_format_1,
	$caret$caret: $caret$caret_1,
	exit: exit_1,
	at_exit: at_exit_1,
	valid_float_lexem: valid_float_lexem_1,
	unsafe_really_input: unsafe_really_input_1,
	do_at_exit: do_at_exit_1
};

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
    } else {
      return len;
    }
  }}

function hd(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          caml_builtin_exceptions.failure,
          "hd"
        ];
  }
}

function tl(param) {
  if (param) {
    return param[1];
  } else {
    throw [
          caml_builtin_exceptions.failure,
          "tl"
        ];
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "List.nth"
        ];
  } else {
    var _l = l;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1 === 0) {
          return l$1[0];
        } else {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue ;
        }
      } else {
        throw [
              caml_builtin_exceptions.failure,
              "nth"
            ];
      }
    }  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
    } else {
      return l2;
    }
  }}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return pervasives.$at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map$1(f, param) {
  if (param) {
    var r = curry._1(f, param[0]);
    return /* :: */[
            r,
            map$1(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = curry._2(f, i, param[0]);
    return /* :: */[
            r,
            mapi(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function rev_map(f, l) {
  var _accu = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = /* :: */[
        curry._1(f, param[0]),
        accu
      ];
      continue ;
    } else {
      return accu;
    }
  }}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      curry._1(f, param[0]);
      _param = param[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function iteri(f, l) {
  var _i = 0;
  var f$1 = f;
  var _param = l;
  while(true) {
    var param = _param;
    var i = _i;
    if (param) {
      curry._2(f$1, i, param[0]);
      _param = param[1];
      _i = i + 1 | 0;
      continue ;
    } else {
      return /* () */0;
    }
  }}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = curry._2(f, accu, l[0]);
      continue ;
    } else {
      return accu;
    }
  }}

function fold_right(f, l, accu) {
  if (l) {
    return curry._2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

function map2(f, l1, l2) {
  if (l1) {
    if (l2) {
      var r = curry._2(f, l1[0], l2[0]);
      return /* :: */[
              r,
              map2(f, l1[1], l2[1])
            ];
    } else {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.map2"
          ];
    }
  } else if (l2) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "List.map2"
        ];
  } else {
    return /* [] */0;
  }
}

function rev_map2(f, l1, l2) {
  var _accu = /* [] */0;
  var _l1 = l1;
  var _l2 = l2;
  while(true) {
    var l2$1 = _l2;
    var l1$1 = _l1;
    var accu = _accu;
    if (l1$1) {
      if (l2$1) {
        _l2 = l2$1[1];
        _l1 = l1$1[1];
        _accu = /* :: */[
          curry._2(f, l1$1[0], l2$1[0]),
          accu
        ];
        continue ;
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.rev_map2"
            ];
      }
    } else if (l2$1) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.rev_map2"
          ];
    } else {
      return accu;
    }
  }}

function iter2(f, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        curry._2(f, l1[0], l2[0]);
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.iter2"
            ];
      }
    } else if (l2) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.iter2"
          ];
    } else {
      return /* () */0;
    }
  }}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = curry._3(f, accu, l1[0], l2[0]);
        continue ;
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  }}

function fold_right2(f, l1, l2, accu) {
  if (l1) {
    if (l2) {
      return curry._3(f, l1[0], l2[0], fold_right2(f, l1[1], l2[1], accu));
    } else {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.fold_right2"
          ];
    }
  } else if (l2) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "List.fold_right2"
        ];
  } else {
    return accu;
  }
}

function for_all(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (curry._1(p, param[0])) {
        _param = param[1];
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }}

function exists(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (curry._1(p, param[0])) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function for_all2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (curry._2(p, l1[0], l2[0])) {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
        } else {
          return false;
        }
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.for_all2"
            ];
      }
    } else if (l2) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.for_all2"
          ];
    } else {
      return true;
    }
  }}

function exists2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (curry._2(p, l1[0], l2[0])) {
          return true;
        } else {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
        }
      } else {
        throw [
              caml_builtin_exceptions.invalid_argument,
              "List.exists2"
            ];
      }
    } else if (l2) {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.exists2"
          ];
    } else {
      return false;
    }
  }}

function mem(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (caml_obj.caml_equal(param[0], x)) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function memq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0] === x) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (caml_obj.caml_equal(match[0], x)) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      throw caml_builtin_exceptions.not_found;
    }
  }}

function assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (match[0] === x) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      throw caml_builtin_exceptions.not_found;
    }
  }}

function mem_assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (caml_obj.caml_equal(param[0][0], x)) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function mem_assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0][0] === x) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function remove_assoc(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (caml_obj.caml_equal(pair[0], x)) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assoc(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function remove_assq(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (pair[0] === x) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assq(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function find(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (curry._1(p, x)) {
        return x;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      throw caml_builtin_exceptions.not_found;
    }
  }}

function find_all(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (curry._1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
          } else {
            _param = l;
            continue ;
          }
        } else {
          return rev_append(accu, /* [] */0);
        }
      }    });
}

function partition(p, l) {
  var _yes = /* [] */0;
  var _no = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var no = _no;
    var yes = _yes;
    if (param) {
      var l$1 = param[1];
      var x = param[0];
      if (curry._1(p, x)) {
        _param = l$1;
        _yes = /* :: */[
          x,
          yes
        ];
        continue ;
      } else {
        _param = l$1;
        _no = /* :: */[
          x,
          no
        ];
        continue ;
      }
    } else {
      return /* tuple */[
              rev_append(yes, /* [] */0),
              rev_append(no, /* [] */0)
            ];
    }
  }}

function split(param) {
  if (param) {
    var match = param[0];
    var match$1 = split(param[1]);
    return /* tuple */[
            /* :: */[
              match[0],
              match$1[0]
            ],
            /* :: */[
              match[1],
              match$1[1]
            ]
          ];
  } else {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
}

function combine(l1, l2) {
  if (l1) {
    if (l2) {
      return /* :: */[
              /* tuple */[
                l1[0],
                l2[0]
              ],
              combine(l1[1], l2[1])
            ];
    } else {
      throw [
            caml_builtin_exceptions.invalid_argument,
            "List.combine"
          ];
    }
  } else if (l2) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "List.combine"
        ];
  } else {
    return /* [] */0;
  }
}

function merge(cmp, l1, l2) {
  if (l1) {
    if (l2) {
      var h2 = l2[0];
      var h1 = l1[0];
      if (curry._2(cmp, h1, h2) <= 0) {
        return /* :: */[
                h1,
                merge(cmp, l1[1], l2)
              ];
      } else {
        return /* :: */[
                h2,
                merge(cmp, l1, l2[1])
              ];
      }
    } else {
      return l1;
    }
  } else {
    return l2;
  }
}

function chop(_k, _l) {
  while(true) {
    var l = _l;
    var k = _k;
    if (k === 0) {
      return l;
    } else if (l) {
      _l = l[1];
      _k = k - 1 | 0;
      continue ;
    } else {
      throw [
            caml_builtin_exceptions.assert_failure,
            /* tuple */[
              "list.ml",
              223,
              11
            ]
          ];
    }
  }}

function stable_sort(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (curry._2(cmp, x1, x2) <= 0) {
              if (curry._2(cmp, x2, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (curry._2(cmp, x1, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (curry._2(cmp, x1, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (curry._2(cmp, x2, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (curry._2(cmp, x1$1, x2$1) <= 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (curry._2(cmp, h1, h2) > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      }    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (curry._2(cmp, x1, x2) > 0) {
              if (curry._2(cmp, x2, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (curry._2(cmp, x1, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (curry._2(cmp, x1, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (curry._2(cmp, x2, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (curry._2(cmp, x1$1, x2$1) > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (curry._2(cmp, h1, h2) <= 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      }    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

function sort_uniq(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = curry._2(cmp, x1, x2);
            if (c === 0) {
              var c$1 = curry._2(cmp, x2, x3);
              if (c$1 === 0) {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              } else if (c$1 < 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              }
            } else if (c < 0) {
              var c$2 = curry._2(cmp, x2, x3);
              if (c$2 === 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              } else if (c$2 < 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$3 = curry._2(cmp, x1, x3);
                if (c$3 === 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                } else if (c$3 < 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            } else {
              var c$4 = curry._2(cmp, x1, x3);
              if (c$4 === 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ];
              } else if (c$4 < 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$5 = curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                } else if (c$5 < 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = curry._2(cmp, x1$1, x2$1);
        if (c$6 === 0) {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        } else if (c$6 < 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = curry._2(cmp, h1, h2);
            if (c$7 === 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
            } else if (c$7 > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = t1;
              continue ;
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = t2;
              continue ;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      }    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = curry._2(cmp, x1, x2);
            if (c === 0) {
              var c$1 = curry._2(cmp, x2, x3);
              if (c$1 === 0) {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              } else if (c$1 > 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              }
            } else if (c > 0) {
              var c$2 = curry._2(cmp, x2, x3);
              if (c$2 === 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* [] */0
                        ]
                      ];
              } else if (c$2 > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$3 = curry._2(cmp, x1, x3);
                if (c$3 === 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                } else if (c$3 > 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            } else {
              var c$4 = curry._2(cmp, x1, x3);
              if (c$4 === 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ];
              } else if (c$4 > 0) {
                return /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                var c$5 = curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                } else if (c$5 > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = curry._2(cmp, x1$1, x2$1);
        if (c$6 === 0) {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        } else if (c$6 > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = curry._2(cmp, h1, h2);
            if (c$7 === 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
            } else if (c$7 < 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = t1;
              continue ;
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = t2;
              continue ;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      }    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var append = pervasives.$at;

var concat = flatten;

var filter = find_all;

var sort = stable_sort;

var fast_sort = stable_sort;

var length_1 = length;
var hd_1 = hd;
var tl_1 = tl;
var nth_1 = nth;
var rev_1 = rev;
var append_1 = append;
var rev_append_1 = rev_append;
var concat_1 = concat;
var flatten_1 = flatten;
var iter_1 = iter;
var iteri_1 = iteri;
var map_1$1 = map$1;
var mapi_1 = mapi$1;
var rev_map_1 = rev_map;
var fold_left_1 = fold_left;
var fold_right_1 = fold_right;
var iter2_1 = iter2;
var map2_1 = map2;
var rev_map2_1 = rev_map2;
var fold_left2_1 = fold_left2;
var fold_right2_1 = fold_right2;
var for_all_1 = for_all;
var exists_1 = exists;
var for_all2_1 = for_all2;
var exists2_1 = exists2;
var mem_1 = mem;
var memq_1 = memq;
var find_1 = find;
var filter_1 = filter;
var find_all_1 = find_all;
var partition_1 = partition;
var assoc_1 = assoc;
var assq_1 = assq;
var mem_assoc_1 = mem_assoc;
var mem_assq_1 = mem_assq;
var remove_assoc_1 = remove_assoc;
var remove_assq_1 = remove_assq;
var split_1 = split;
var combine_1 = combine;
var sort_1 = sort;
var stable_sort_1 = stable_sort;
var fast_sort_1 = fast_sort;
var sort_uniq_1 = sort_uniq;
var merge_1 = merge;
/* No side effect */

var list = {
	length: length_1,
	hd: hd_1,
	tl: tl_1,
	nth: nth_1,
	rev: rev_1,
	append: append_1,
	rev_append: rev_append_1,
	concat: concat_1,
	flatten: flatten_1,
	iter: iter_1,
	iteri: iteri_1,
	map: map_1$1,
	mapi: mapi_1,
	rev_map: rev_map_1,
	fold_left: fold_left_1,
	fold_right: fold_right_1,
	iter2: iter2_1,
	map2: map2_1,
	rev_map2: rev_map2_1,
	fold_left2: fold_left2_1,
	fold_right2: fold_right2_1,
	for_all: for_all_1,
	exists: exists_1,
	for_all2: for_all2_1,
	exists2: exists2_1,
	mem: mem_1,
	memq: memq_1,
	find: find_1,
	filter: filter_1,
	find_all: find_all_1,
	partition: partition_1,
	assoc: assoc_1,
	assq: assq_1,
	mem_assoc: mem_assoc_1,
	mem_assq: mem_assq_1,
	remove_assoc: remove_assoc_1,
	remove_assq: remove_assq_1,
	split: split_1,
	combine: combine_1,
	sort: sort_1,
	stable_sort: stable_sort_1,
	fast_sort: fast_sort_1,
	sort_uniq: sort_uniq_1,
	merge: merge_1
};

var $$Error = caml_exceptions.create("Caml_js_exceptions.Error");

function internalToOCamlException(e) {
  if (caml_exceptions.caml_is_extension(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}

function caml_as_js_exn(exn) {
  if (exn[0] === $$Error) {
    return caml_option.some(exn[1]);
  }
  
}

var $$Error_1 = $$Error;
var internalToOCamlException_1 = internalToOCamlException;
var caml_as_js_exn_1 = caml_as_js_exn;
/* No side effect */

var caml_js_exceptions = {
	$$Error: $$Error_1,
	internalToOCamlException: internalToOCamlException_1,
	caml_as_js_exn: caml_as_js_exn_1
};

function init(l, f) {
  if (l === 0) {
    return /* array */[];
  } else if (l < 0) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Array.init"
        ];
  } else {
    var res = caml_array.caml_make_vect(l, curry._1(f, 0));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      res[i] = curry._1(f, i);
    }
    return res;
  }
}

function make_matrix(sx, sy, init) {
  var res = caml_array.caml_make_vect(sx, /* array */[]);
  for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
    res[x] = caml_array.caml_make_vect(sy, init);
  }
  return res;
}

function copy(a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    return caml_array.caml_array_sub(a, 0, l);
  }
}

function append$1(a1, a2) {
  var l1 = a1.length;
  if (l1 === 0) {
    return copy(a2);
  } else if (a2.length === 0) {
    return caml_array.caml_array_sub(a1, 0, l1);
  } else {
    return a1.concat(a2);
  }
}

function sub$1(a, ofs, len) {
  if (len < 0 || ofs > (a.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Array.sub"
        ];
  } else {
    return caml_array.caml_array_sub(a, ofs, len);
  }
}

function fill$1(a, ofs, len, v) {
  if (ofs < 0 || len < 0 || ofs > (a.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Array.fill"
        ];
  } else {
    for(var i = ofs ,i_finish = (ofs + len | 0) - 1 | 0; i <= i_finish; ++i){
      a[i] = v;
    }
    return /* () */0;
  }
}

function blit(a1, ofs1, a2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Array.blit"
        ];
  } else {
    return caml_array.caml_array_blit(a1, ofs1, a2, ofs2, len);
  }
}

function iter$1(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    curry._1(f, a[i]);
  }
  return /* () */0;
}

function map$2(f, a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    var r = caml_array.caml_make_vect(l, curry._1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = curry._1(f, a[i]);
    }
    return r;
  }
}

function iteri$1(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function mapi$2(f, a) {
  var l = a.length;
  if (l === 0) {
    return /* array */[];
  } else {
    var r = caml_array.caml_make_vect(l, curry._2(f, 0, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = curry._2(f, i, a[i]);
    }
    return r;
  }
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
    }
  }}

function list_length(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = accu + 1 | 0;
      continue ;
    } else {
      return accu;
    }
  }}

function of_list(l) {
  if (l) {
    var a = caml_array.caml_make_vect(list_length(0, l), l[0]);
    var _i = 1;
    var _param = l[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        a[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
      } else {
        return a;
      }
    }  } else {
    return /* array */[];
  }
}

function fold_left$1(f, x, a) {
  var r = x;
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = curry._2(f, r, a[i]);
  }
  return r;
}

function fold_right$1(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = curry._2(f, a[i], r);
  }
  return r;
}

var Bottom = caml_exceptions.create("Array.Bottom");

function sort$1(cmp, a) {
  var maxson = function (l, i) {
    var i31 = ((i + i | 0) + i | 0) + 1 | 0;
    var x = i31;
    if ((i31 + 2 | 0) < l) {
      if (curry._2(cmp, caml_array.caml_array_get(a, i31), caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
        x = i31 + 1 | 0;
      }
      if (curry._2(cmp, caml_array.caml_array_get(a, x), caml_array.caml_array_get(a, i31 + 2 | 0)) < 0) {
        x = i31 + 2 | 0;
      }
      return x;
    } else if ((i31 + 1 | 0) < l && curry._2(cmp, caml_array.caml_array_get(a, i31), caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
      return i31 + 1 | 0;
    } else if (i31 < l) {
      return i31;
    } else {
      throw [
            Bottom,
            i
          ];
    }
  };
  var trickle = function (l, i, e) {
    try {
      var l$1 = l;
      var _i = i;
      var e$1 = e;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        if (curry._2(cmp, caml_array.caml_array_get(a, j), e$1) > 0) {
          caml_array.caml_array_set(a, i$1, caml_array.caml_array_get(a, j));
          _i = j;
          continue ;
        } else {
          return caml_array.caml_array_set(a, i$1, e$1);
        }
      }    }
    catch (raw_exn){
      var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom) {
        return caml_array.caml_array_set(a, exn[1], e);
      } else {
        throw exn;
      }
    }
  };
  var bubble = function (l, i) {
    try {
      var l$1 = l;
      var _i = i;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        caml_array.caml_array_set(a, i$1, caml_array.caml_array_get(a, j));
        _i = j;
        continue ;
      }    }
    catch (raw_exn){
      var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom) {
        return exn[1];
      } else {
        throw exn;
      }
    }
  };
  var trickleup = function (_i, e) {
    while(true) {
      var i = _i;
      var father = (i - 1 | 0) / 3 | 0;
      if (i === father) {
        throw [
              caml_builtin_exceptions.assert_failure,
              /* tuple */[
                "array.ml",
                173,
                4
              ]
            ];
      }
      if (curry._2(cmp, caml_array.caml_array_get(a, father), e) < 0) {
        caml_array.caml_array_set(a, i, caml_array.caml_array_get(a, father));
        if (father > 0) {
          _i = father;
          continue ;
        } else {
          return caml_array.caml_array_set(a, 0, e);
        }
      } else {
        return caml_array.caml_array_set(a, i, e);
      }
    }  };
  var l = a.length;
  for(var i = ((l + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i){
    trickle(l, i, caml_array.caml_array_get(a, i));
  }
  for(var i$1 = l - 1 | 0; i$1 >= 2; --i$1){
    var e = caml_array.caml_array_get(a, i$1);
    caml_array.caml_array_set(a, i$1, caml_array.caml_array_get(a, 0));
    trickleup(bubble(i$1, 0), e);
  }
  if (l > 1) {
    var e$1 = caml_array.caml_array_get(a, 1);
    caml_array.caml_array_set(a, 1, caml_array.caml_array_get(a, 0));
    return caml_array.caml_array_set(a, 0, e$1);
  } else {
    return 0;
  }
}

function stable_sort$1(cmp, a) {
  var merge = function (src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
    var src1r = src1ofs + src1len | 0;
    var src2r = src2ofs + src2len | 0;
    var _i1 = src1ofs;
    var _s1 = caml_array.caml_array_get(a, src1ofs);
    var _i2 = src2ofs;
    var _s2 = caml_array.caml_array_get(src2, src2ofs);
    var _d = dstofs;
    while(true) {
      var d = _d;
      var s2 = _s2;
      var i2 = _i2;
      var s1 = _s1;
      var i1 = _i1;
      if (curry._2(cmp, s1, s2) <= 0) {
        caml_array.caml_array_set(dst, d, s1);
        var i1$1 = i1 + 1 | 0;
        if (i1$1 < src1r) {
          _d = d + 1 | 0;
          _s1 = caml_array.caml_array_get(a, i1$1);
          _i1 = i1$1;
          continue ;
        } else {
          return blit(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
        }
      } else {
        caml_array.caml_array_set(dst, d, s2);
        var i2$1 = i2 + 1 | 0;
        if (i2$1 < src2r) {
          _d = d + 1 | 0;
          _s2 = caml_array.caml_array_get(src2, i2$1);
          _i2 = i2$1;
          continue ;
        } else {
          return blit(a, i1, dst, d + 1 | 0, src1r - i1 | 0);
        }
      }
    }  };
  var isortto = function (srcofs, dst, dstofs, len) {
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      var e = caml_array.caml_array_get(a, srcofs + i | 0);
      var j = (dstofs + i | 0) - 1 | 0;
      while(j >= dstofs && curry._2(cmp, caml_array.caml_array_get(dst, j), e) > 0) {
        caml_array.caml_array_set(dst, j + 1 | 0, caml_array.caml_array_get(dst, j));
        j = j - 1 | 0;
      }      caml_array.caml_array_set(dst, j + 1 | 0, e);
    }
    return /* () */0;
  };
  var sortto = function (srcofs, dst, dstofs, len) {
    if (len <= 5) {
      return isortto(srcofs, dst, dstofs, len);
    } else {
      var l1 = len / 2 | 0;
      var l2 = len - l1 | 0;
      sortto(srcofs + l1 | 0, dst, dstofs + l1 | 0, l2);
      sortto(srcofs, a, srcofs + l2 | 0, l1);
      return merge(srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs);
    }
  };
  var l = a.length;
  if (l <= 5) {
    return isortto(0, a, 0, l);
  } else {
    var l1 = l / 2 | 0;
    var l2 = l - l1 | 0;
    var t = caml_array.caml_make_vect(l2, caml_array.caml_array_get(a, 0));
    sortto(l1, t, 0, l2);
    sortto(0, a, l2, l1);
    return merge(l2, l1, t, 0, l2, a, 0);
  }
}

var create_matrix = make_matrix;

var concat$1 = caml_array.caml_array_concat;

var fast_sort$1 = stable_sort$1;

var init_1 = init;
var make_matrix_1 = make_matrix;
var create_matrix_1 = create_matrix;
var append_1$1 = append$1;
var concat_1$1 = concat$1;
var sub_1$1 = sub$1;
var copy_1 = copy;
var fill_1 = fill$1;
var blit_1 = blit;
var to_list_1 = to_list;
var of_list_1 = of_list;
var iter_1$1 = iter$1;
var map_1$2 = map$2;
var iteri_1$1 = iteri$1;
var mapi_1$1 = mapi$2;
var fold_left_1$1 = fold_left$1;
var fold_right_1$1 = fold_right$1;
var sort_1$1 = sort$1;
var stable_sort_1$1 = stable_sort$1;
var fast_sort_1$1 = fast_sort$1;
/* No side effect */

var array = {
	init: init_1,
	make_matrix: make_matrix_1,
	create_matrix: create_matrix_1,
	append: append_1$1,
	concat: concat_1$1,
	sub: sub_1$1,
	copy: copy_1,
	fill: fill_1,
	blit: blit_1,
	to_list: to_list_1,
	of_list: of_list_1,
	iter: iter_1$1,
	map: map_1$2,
	iteri: iteri_1$1,
	mapi: mapi_1$1,
	fold_left: fold_left_1$1,
	fold_right: fold_right_1$1,
	sort: sort_1$1,
	stable_sort: stable_sort_1$1,
	fast_sort: fast_sort_1$1
};

function get$2(dict, k) {
  if ((k in dict)) {
    return caml_option.some(dict[k]);
  }
  
}

function unsafeDeleteKey (dict,key){
     delete dict[key];
     return 0
  }
function entries(dict) {
  var keys = Object.keys(dict);
  var l = keys.length;
  var values = new Array(l);
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var key = keys[i];
    values[i] = /* tuple */[
      key,
      dict[key]
    ];
  }
  return values;
}

function values(dict) {
  var keys = Object.keys(dict);
  var l = keys.length;
  var values$1 = new Array(l);
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    values$1[i] = dict[keys[i]];
  }
  return values$1;
}

function fromList(entries) {
  var dict = { };
  var _param = entries;
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      dict[match[0]] = match[1];
      _param = param[1];
      continue ;
    } else {
      return dict;
    }
  }}

function fromArray(entries) {
  var dict = { };
  var l = entries.length;
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var match = entries[i];
    dict[match[0]] = match[1];
  }
  return dict;
}

function map$3(f, source) {
  var target = { };
  var keys = Object.keys(source);
  var l = keys.length;
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var key = keys[i];
    target[key] = f(source[key]);
  }
  return target;
}

var get_1$2 = get$2;
var unsafeDeleteKey_1 = unsafeDeleteKey;
var entries_1 = entries;
var values_1 = values;
var fromList_1 = fromList;
var fromArray_1 = fromArray;
var map_1$3 = map$3;
/* No side effect */

var js_dict = {
	get: get_1$2,
	unsafeDeleteKey: unsafeDeleteKey_1,
	entries: entries_1,
	values: values_1,
	fromList: fromList_1,
	fromArray: fromArray_1,
	map: map_1$3
};

function _isInteger(value) {
  if (isFinite(value)) {
    return Math.floor(value) === value;
  } else {
    return false;
  }
}

var DecodeError = caml_exceptions.create("Json_decode.DecodeError");

function bool(json) {
  if (typeof json === "boolean") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected boolean, got " + JSON.stringify(json)
        ];
  }
}

function $$float(json) {
  if (typeof json === "number") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected number, got " + JSON.stringify(json)
        ];
  }
}

function $$int(json) {
  var f = $$float(json);
  if (_isInteger(f)) {
    return f;
  } else {
    throw [
          DecodeError,
          "Expected integer, got " + JSON.stringify(json)
        ];
  }
}

function string(json) {
  if (typeof json === "string") {
    return json;
  } else {
    throw [
          DecodeError,
          "Expected string, got " + JSON.stringify(json)
        ];
  }
}

function $$char(json) {
  var s = string(json);
  if (s.length === 1) {
    return caml_string.get(s, 0);
  } else {
    throw [
          DecodeError,
          "Expected single-character string, got " + JSON.stringify(json)
        ];
  }
}

function date(json) {
  return new Date(string(json));
}

function nullable(decode, json) {
  if (json === null) {
    return null;
  } else {
    return curry._1(decode, json);
  }
}

function nullAs(value, json) {
  if (json === null) {
    return value;
  } else {
    throw [
          DecodeError,
          "Expected null, got " + JSON.stringify(json)
        ];
  }
}

function array$1(decode, json) {
  if (Array.isArray(json)) {
    var length = json.length;
    var target = new Array(length);
    for(var i = 0 ,i_finish = length - 1 | 0; i <= i_finish; ++i){
      var value;
      try {
        value = curry._1(decode, json[i]);
      }
      catch (raw_exn){
        var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          throw [
                DecodeError,
                exn[1] + ("\n\tin array at index " + String(i))
              ];
        } else {
          throw exn;
        }
      }
      target[i] = value;
    }
    return target;
  } else {
    throw [
          DecodeError,
          "Expected array, got " + JSON.stringify(json)
        ];
  }
}

function list$1(decode, json) {
  return array.to_list(array$1(decode, json));
}

function pair(decodeA, decodeB, json) {
  if (Array.isArray(json)) {
    var length = json.length;
    if (length === 2) {
      try {
        return /* tuple */[
                curry._1(decodeA, json[0]),
                curry._1(decodeB, json[1])
              ];
      }
      catch (raw_exn){
        var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          throw [
                DecodeError,
                exn[1] + "\n\tin pair/tuple2"
              ];
        } else {
          throw exn;
        }
      }
    } else {
      throw [
            DecodeError,
            "Expected array of length 2, got array of length " + (String(length) + "")
          ];
    }
  } else {
    throw [
          DecodeError,
          "Expected array, got " + JSON.stringify(json)
        ];
  }
}

function tuple3(decodeA, decodeB, decodeC, json) {
  if (Array.isArray(json)) {
    var length = json.length;
    if (length === 3) {
      try {
        return /* tuple */[
                curry._1(decodeA, json[0]),
                curry._1(decodeB, json[1]),
                curry._1(decodeC, json[2])
              ];
      }
      catch (raw_exn){
        var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          throw [
                DecodeError,
                exn[1] + "\n\tin tuple3"
              ];
        } else {
          throw exn;
        }
      }
    } else {
      throw [
            DecodeError,
            "Expected array of length 3, got array of length " + (String(length) + "")
          ];
    }
  } else {
    throw [
          DecodeError,
          "Expected array, got " + JSON.stringify(json)
        ];
  }
}

function tuple4(decodeA, decodeB, decodeC, decodeD, json) {
  if (Array.isArray(json)) {
    var length = json.length;
    if (length === 4) {
      try {
        return /* tuple */[
                curry._1(decodeA, json[0]),
                curry._1(decodeB, json[1]),
                curry._1(decodeC, json[2]),
                curry._1(decodeD, json[3])
              ];
      }
      catch (raw_exn){
        var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          throw [
                DecodeError,
                exn[1] + "\n\tin tuple4"
              ];
        } else {
          throw exn;
        }
      }
    } else {
      throw [
            DecodeError,
            "Expected array of length 4, got array of length " + (String(length) + "")
          ];
    }
  } else {
    throw [
          DecodeError,
          "Expected array, got " + JSON.stringify(json)
        ];
  }
}

function dict(decode, json) {
  if (typeof json === "object" && !Array.isArray(json) && json !== null) {
    var keys = Object.keys(json);
    var l = keys.length;
    var target = { };
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      var key = keys[i];
      var value;
      try {
        value = curry._1(decode, json[key]);
      }
      catch (raw_exn){
        var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          throw [
                DecodeError,
                exn[1] + "\n\tin dict"
              ];
        } else {
          throw exn;
        }
      }
      target[key] = value;
    }
    return target;
  } else {
    throw [
          DecodeError,
          "Expected object, got " + JSON.stringify(json)
        ];
  }
}

function field(key, decode, json) {
  if (typeof json === "object" && !Array.isArray(json) && json !== null) {
    var match = js_dict.get(json, key);
    if (match !== undefined) {
      try {
        return curry._1(decode, caml_option.valFromOption(match));
      }
      catch (raw_exn){
        var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          throw [
                DecodeError,
                exn[1] + ("\n\tat field '" + (key + "'"))
              ];
        } else {
          throw exn;
        }
      }
    } else {
      throw [
            DecodeError,
            "Expected field \'" + (String(key) + "\'")
          ];
    }
  } else {
    throw [
          DecodeError,
          "Expected object, got " + JSON.stringify(json)
        ];
  }
}

function at(key_path, decoder) {
  if (key_path) {
    var rest = key_path[1];
    var key = key_path[0];
    if (rest) {
      var partial_arg = at(rest, decoder);
      return (function (param) {
          return field(key, partial_arg, param);
        });
    } else {
      return (function (param) {
          return field(key, decoder, param);
        });
    }
  } else {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Expected key_path to contain at least one element"
        ];
  }
}

function optional(decode, json) {
  try {
    return caml_option.some(curry._1(decode, json));
  }
  catch (raw_exn){
    var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === DecodeError) {
      return undefined;
    } else {
      throw exn;
    }
  }
}

function oneOf(decoders, json) {
  var _decoders = decoders;
  var _errors = /* [] */0;
  while(true) {
    var errors = _errors;
    var decoders$1 = _decoders;
    if (decoders$1) {
      try {
        return curry._1(decoders$1[0], json);
      }
      catch (raw_exn){
        var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn[0] === DecodeError) {
          _errors = /* :: */[
            exn[1],
            errors
          ];
          _decoders = decoders$1[1];
          continue ;
        } else {
          throw exn;
        }
      }
    } else {
      var revErrors = list.rev(errors);
      throw [
            DecodeError,
            "All decoders given to oneOf failed. Here are all the errors: " + (String(revErrors) + ". And the JSON being decoded: ") + JSON.stringify(json)
          ];
    }
  }}

function either(a, b) {
  var partial_arg_001 = /* :: */[
    b,
    /* [] */0
  ];
  var partial_arg = /* :: */[
    a,
    partial_arg_001
  ];
  return (function (param) {
      return oneOf(partial_arg, param);
    });
}

function withDefault($$default, decode, json) {
  try {
    return curry._1(decode, json);
  }
  catch (raw_exn){
    var exn = caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === DecodeError) {
      return $$default;
    } else {
      throw exn;
    }
  }
}

function map$4(f, decode, json) {
  return curry._1(f, curry._1(decode, json));
}

function andThen(b, a, json) {
  return curry._2(b, curry._1(a, json), json);
}

var tuple2 = pair;

var DecodeError_1 = DecodeError;
var bool_1 = bool;
var $$float_1 = $$float;
var $$int_1 = $$int;
var string_1 = string;
var $$char_1 = $$char;
var date_1 = date;
var nullable_1 = nullable;
var nullAs_1 = nullAs;
var array_1 = array$1;
var list_1 = list$1;
var pair_1 = pair;
var tuple2_1 = tuple2;
var tuple3_1 = tuple3;
var tuple4_1 = tuple4;
var dict_1 = dict;
var field_1 = field;
var at_1 = at;
var optional_1 = optional;
var oneOf_1 = oneOf;
var either_1 = either;
var withDefault_1 = withDefault;
var map_1$4 = map$4;
var andThen_1 = andThen;
/* No side effect */

var Json_decode_bs = {
	DecodeError: DecodeError_1,
	bool: bool_1,
	$$float: $$float_1,
	$$int: $$int_1,
	string: string_1,
	$$char: $$char_1,
	date: date_1,
	nullable: nullable_1,
	nullAs: nullAs_1,
	array: array_1,
	list: list_1,
	pair: pair_1,
	tuple2: tuple2_1,
	tuple3: tuple3_1,
	tuple4: tuple4_1,
	dict: dict_1,
	field: field_1,
	at: at_1,
	optional: optional_1,
	oneOf: oneOf_1,
	either: either_1,
	withDefault: withDefault_1,
	map: map_1$4,
	andThen: andThen_1
};

function chr(n) {
  if (n < 0 || n > 255) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Char.chr"
        ];
  } else {
    return n;
  }
}

function escaped(c) {
  var exit = 0;
  if (c >= 40) {
    if (c !== 92) {
      exit = c >= 127 ? 1 : 2;
    } else {
      return "\\\\";
    }
  } else if (c >= 32) {
    if (c >= 39) {
      return "\\'";
    } else {
      exit = 2;
    }
  } else if (c >= 14) {
    exit = 1;
  } else {
    switch (c) {
      case 8 : 
          return "\\b";
      case 9 : 
          return "\\t";
      case 10 : 
          return "\\n";
      case 0 : 
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 12 : 
          exit = 1;
          break;
      case 13 : 
          return "\\r";
      
    }
  }
  switch (exit) {
    case 1 : 
        var s = [
          0,
          0,
          0,
          0
        ];
        s[0] = /* "\\" */92;
        s[1] = 48 + (c / 100 | 0) | 0;
        s[2] = 48 + (c / 10 | 0) % 10 | 0;
        s[3] = 48 + c % 10 | 0;
        return caml_bytes.bytes_to_string(s);
    case 2 : 
        var s$1 = [0];
        s$1[0] = c;
        return caml_bytes.bytes_to_string(s$1);
    
  }
}

function lowercase$1(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function uppercase(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
    return c - 32 | 0;
  } else {
    return c;
  }
}

function compare$1(c1, c2) {
  return c1 - c2 | 0;
}

var chr_1 = chr;
var escaped_1 = escaped;
var lowercase_1 = lowercase$1;
var uppercase_1 = uppercase;
var compare_1$1 = compare$1;
/* No side effect */

var char_1 = {
	chr: chr_1,
	escaped: escaped_1,
	lowercase: lowercase_1,
	uppercase: uppercase_1,
	compare: compare_1$1
};

function make(n, c) {
  var s = caml_bytes.caml_create_bytes(n);
  caml_bytes.caml_fill_bytes(s, 0, n, c);
  return s;
}

function init$1(n, f) {
  var s = caml_bytes.caml_create_bytes(n);
  for(var i = 0 ,i_finish = n - 1 | 0; i <= i_finish; ++i){
    s[i] = curry._1(f, i);
  }
  return s;
}

var empty = [];

function copy$1(s) {
  var len = s.length;
  var r = caml_bytes.caml_create_bytes(len);
  caml_bytes.caml_blit_bytes(s, 0, r, 0, len);
  return r;
}

function to_string(b) {
  return caml_bytes.bytes_to_string(copy$1(b));
}

function of_string(s) {
  return copy$1(caml_bytes.bytes_of_string(s));
}

function sub$2(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.sub / Bytes.sub"
        ];
  } else {
    var r = caml_bytes.caml_create_bytes(len);
    caml_bytes.caml_blit_bytes(s, ofs, r, 0, len);
    return r;
  }
}

function sub_string(b, ofs, len) {
  return caml_bytes.bytes_to_string(sub$2(b, ofs, len));
}

function extend(s, left, right) {
  var len = (s.length + left | 0) + right | 0;
  var r = caml_bytes.caml_create_bytes(len);
  var match = left < 0 ? /* tuple */[
      -left | 0,
      0
    ] : /* tuple */[
      0,
      left
    ];
  var dstoff = match[1];
  var srcoff = match[0];
  var cpylen = caml_primitive.caml_int_min(s.length - srcoff | 0, len - dstoff | 0);
  if (cpylen > 0) {
    caml_bytes.caml_blit_bytes(s, srcoff, r, dstoff, cpylen);
  }
  return r;
}

function fill$2(s, ofs, len, c) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.fill / Bytes.fill"
        ];
  } else {
    return caml_bytes.caml_fill_bytes(s, ofs, len, c);
  }
}

function blit$1(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "Bytes.blit"
        ];
  } else {
    return caml_bytes.caml_blit_bytes(s1, ofs1, s2, ofs2, len);
  }
}

function blit_string(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.blit / Bytes.blit_string"
        ];
  } else {
    return caml_bytes.caml_blit_string(s1, ofs1, s2, ofs2, len);
  }
}

function iter$2(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    curry._1(f, a[i]);
  }
  return /* () */0;
}

function iteri$2(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function concat$2(sep, l) {
  if (l) {
    var hd = l[0];
    var num = /* record */[/* contents */0];
    var len = /* record */[/* contents */0];
    list.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = caml_bytes.caml_create_bytes(len[0] + caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    caml_bytes.caml_blit_bytes(hd, 0, r, 0, hd.length);
    var pos = /* record */[/* contents */hd.length];
    list.iter((function (s) {
            caml_bytes.caml_blit_bytes(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            caml_bytes.caml_blit_bytes(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return r;
  } else {
    return empty;
  }
}

function cat(s1, s2) {
  var l1 = s1.length;
  var l2 = s2.length;
  var r = caml_bytes.caml_create_bytes(l1 + l2 | 0);
  caml_bytes.caml_blit_bytes(s1, 0, r, 0, l1);
  caml_bytes.caml_blit_bytes(s2, 0, r, l1, l2);
  return r;
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    return switcher === 23;
  } else {
    return switcher !== 2;
  }
}

function trim(s) {
  var len = s.length;
  var i = 0;
  while(i < len && is_space(s[i])) {
    i = i + 1 | 0;
  }  var j = len - 1 | 0;
  while(j >= i && is_space(s[j])) {
    j = j - 1 | 0;
  }  if (j >= i) {
    return sub$2(s, i, (j - i | 0) + 1 | 0);
  } else {
    return empty;
  }
}

function escaped$1(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    var match = s[i];
    var tmp;
    if (match >= 32) {
      var switcher = match - 34 | 0;
      tmp = switcher > 58 || switcher < 0 ? (
          switcher >= 93 ? 4 : 1
        ) : (
          switcher > 57 || switcher < 1 ? 2 : 1
        );
    } else {
      tmp = match >= 11 ? (
          match !== 13 ? 4 : 2
        ) : (
          match >= 8 ? 2 : 4
        );
    }
    n = n + tmp | 0;
  }
  if (n === s.length) {
    return copy$1(s);
  } else {
    var s$prime = caml_bytes.caml_create_bytes(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
      var c = s[i$1];
      var exit = 0;
      if (c >= 35) {
        if (c !== 92) {
          if (c >= 127) {
            exit = 1;
          } else {
            s$prime[n] = c;
          }
        } else {
          exit = 2;
        }
      } else if (c >= 32) {
        if (c >= 34) {
          exit = 2;
        } else {
          s$prime[n] = c;
        }
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "b" */98;
              break;
          case 9 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "t" */116;
              break;
          case 10 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "n" */110;
              break;
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 11 : 
          case 12 : 
              exit = 1;
              break;
          case 13 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "r" */114;
              break;
          
        }
      }
      switch (exit) {
        case 1 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
        case 2 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        
      }
      n = n + 1 | 0;
    }
    return s$prime;
  }
}

function map$5(f, s) {
  var l = s.length;
  if (l === 0) {
    return s;
  } else {
    var r = caml_bytes.caml_create_bytes(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = curry._1(f, s[i]);
    }
    return r;
  }
}

function mapi$3(f, s) {
  var l = s.length;
  if (l === 0) {
    return s;
  } else {
    var r = caml_bytes.caml_create_bytes(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = curry._2(f, i, s[i]);
    }
    return r;
  }
}

function uppercase$1(s) {
  return map$5(char_1.uppercase, s);
}

function lowercase$2(s) {
  return map$5(char_1.lowercase, s);
}

function apply1(f, s) {
  if (s.length === 0) {
    return s;
  } else {
    var r = copy$1(s);
    r[0] = curry._1(f, s[0]);
    return r;
  }
}

function capitalize(s) {
  return apply1(char_1.uppercase, s);
}

function uncapitalize(s) {
  return apply1(char_1.lowercase, s);
}

function index_rec(s, lim, _i, c) {
  while(true) {
    var i = _i;
    if (i >= lim) {
      throw caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  }}

function index(s, c) {
  return index_rec(s, s.length, 0, c);
}

function index_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.index_from / Bytes.index_from"
        ];
  } else {
    return index_rec(s, l, i, c);
  }
}

function rindex_rec(s, _i, c) {
  while(true) {
    var i = _i;
    if (i < 0) {
      throw caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i - 1 | 0;
      continue ;
    }
  }}

function rindex(s, c) {
  return rindex_rec(s, s.length - 1 | 0, c);
}

function rindex_from(s, i, c) {
  if (i < -1 || i >= s.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.rindex_from / Bytes.rindex_from"
        ];
  } else {
    return rindex_rec(s, i, c);
  }
}

function contains_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.contains_from / Bytes.contains_from"
        ];
  } else {
    try {
      index_rec(s, l, i, c);
      return true;
    }
    catch (exn){
      if (exn === caml_builtin_exceptions.not_found) {
        return false;
      } else {
        throw exn;
      }
    }
  }
}

function contains(s, c) {
  return contains_from(s, 0, c);
}

function rcontains_from(s, i, c) {
  if (i < 0 || i >= s.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.rcontains_from / Bytes.rcontains_from"
        ];
  } else {
    try {
      rindex_rec(s, i, c);
      return true;
    }
    catch (exn){
      if (exn === caml_builtin_exceptions.not_found) {
        return false;
      } else {
        throw exn;
      }
    }
  }
}

var compare$2 = caml_obj.caml_compare;

var unsafe_to_string = caml_bytes.bytes_to_string;

var unsafe_of_string = caml_bytes.bytes_of_string;

var make_1 = make;
var init_1$1 = init$1;
var empty_1 = empty;
var copy_1$1 = copy$1;
var of_string_1 = of_string;
var to_string_1 = to_string;
var sub_1$2 = sub$2;
var sub_string_1 = sub_string;
var extend_1 = extend;
var fill_1$1 = fill$2;
var blit_1$1 = blit$1;
var blit_string_1 = blit_string;
var concat_1$2 = concat$2;
var cat_1 = cat;
var iter_1$2 = iter$2;
var iteri_1$2 = iteri$2;
var map_1$5 = map$5;
var mapi_1$2 = mapi$3;
var trim_1 = trim;
var escaped_1$1 = escaped$1;
var index_1 = index;
var rindex_1 = rindex;
var index_from_1 = index_from;
var rindex_from_1 = rindex_from;
var contains_1 = contains;
var contains_from_1 = contains_from;
var rcontains_from_1 = rcontains_from;
var uppercase_1$1 = uppercase$1;
var lowercase_1$1 = lowercase$2;
var capitalize_1 = capitalize;
var uncapitalize_1 = uncapitalize;
var compare_1$2 = compare$2;
var unsafe_to_string_1 = unsafe_to_string;
var unsafe_of_string_1 = unsafe_of_string;
/* No side effect */

var bytes = {
	make: make_1,
	init: init_1$1,
	empty: empty_1,
	copy: copy_1$1,
	of_string: of_string_1,
	to_string: to_string_1,
	sub: sub_1$2,
	sub_string: sub_string_1,
	extend: extend_1,
	fill: fill_1$1,
	blit: blit_1$1,
	blit_string: blit_string_1,
	concat: concat_1$2,
	cat: cat_1,
	iter: iter_1$2,
	iteri: iteri_1$2,
	map: map_1$5,
	mapi: mapi_1$2,
	trim: trim_1,
	escaped: escaped_1$1,
	index: index_1,
	rindex: rindex_1,
	index_from: index_from_1,
	rindex_from: rindex_from_1,
	contains: contains_1,
	contains_from: contains_from_1,
	rcontains_from: rcontains_from_1,
	uppercase: uppercase_1$1,
	lowercase: lowercase_1$1,
	capitalize: capitalize_1,
	uncapitalize: uncapitalize_1,
	compare: compare_1$2,
	unsafe_to_string: unsafe_to_string_1,
	unsafe_of_string: unsafe_of_string_1
};

function make$1(n, c) {
  return caml_bytes.bytes_to_string(bytes.make(n, c));
}

function init$2(n, f) {
  return caml_bytes.bytes_to_string(bytes.init(n, f));
}

function copy$2(s) {
  return caml_bytes.bytes_to_string(bytes.copy(caml_bytes.bytes_of_string(s)));
}

function sub$3(s, ofs, len) {
  return caml_bytes.bytes_to_string(bytes.sub(caml_bytes.bytes_of_string(s), ofs, len));
}

function concat$3(sep, l) {
  if (l) {
    var hd = l[0];
    var num = /* record */[/* contents */0];
    var len = /* record */[/* contents */0];
    list.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = caml_bytes.caml_create_bytes(len[0] + caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    caml_bytes.caml_blit_string(hd, 0, r, 0, hd.length);
    var pos = /* record */[/* contents */hd.length];
    list.iter((function (s) {
            caml_bytes.caml_blit_string(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            caml_bytes.caml_blit_string(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return caml_bytes.bytes_to_string(r);
  } else {
    return "";
  }
}

function iter$3(f, s) {
  return bytes.iter(f, caml_bytes.bytes_of_string(s));
}

function iteri$3(f, s) {
  return bytes.iteri(f, caml_bytes.bytes_of_string(s));
}

function map$6(f, s) {
  return caml_bytes.bytes_to_string(bytes.map(f, caml_bytes.bytes_of_string(s)));
}

function mapi$4(f, s) {
  return caml_bytes.bytes_to_string(bytes.mapi(f, caml_bytes.bytes_of_string(s)));
}

function is_space$1(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    return switcher === 23;
  } else {
    return switcher !== 2;
  }
}

function trim$1(s) {
  if (s === "" || !(is_space$1(s.charCodeAt(0)) || is_space$1(s.charCodeAt(s.length - 1 | 0)))) {
    return s;
  } else {
    return caml_bytes.bytes_to_string(bytes.trim(caml_bytes.bytes_of_string(s)));
  }
}

function escaped$2(s) {
  var needs_escape = function (_i) {
    while(true) {
      var i = _i;
      if (i >= s.length) {
        return false;
      } else {
        var match = s.charCodeAt(i);
        if (match >= 32) {
          var switcher = match - 34 | 0;
          if (switcher > 58 || switcher < 0) {
            if (switcher >= 93) {
              return true;
            } else {
              _i = i + 1 | 0;
              continue ;
            }
          } else if (switcher > 57 || switcher < 1) {
            return true;
          } else {
            _i = i + 1 | 0;
            continue ;
          }
        } else {
          return true;
        }
      }
    }  };
  if (needs_escape(0)) {
    return caml_bytes.bytes_to_string(bytes.escaped(caml_bytes.bytes_of_string(s)));
  } else {
    return s;
  }
}

function index_rec$1(s, lim, _i, c) {
  while(true) {
    var i = _i;
    if (i >= lim) {
      throw caml_builtin_exceptions.not_found;
    } else if (s.charCodeAt(i) === c) {
      return i;
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  }}

function index$1(s, c) {
  return index_rec$1(s, s.length, 0, c);
}

function index_from$1(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.index_from / Bytes.index_from"
        ];
  } else {
    return index_rec$1(s, l, i, c);
  }
}

function rindex_rec$1(s, _i, c) {
  while(true) {
    var i = _i;
    if (i < 0) {
      throw caml_builtin_exceptions.not_found;
    } else if (s.charCodeAt(i) === c) {
      return i;
    } else {
      _i = i - 1 | 0;
      continue ;
    }
  }}

function rindex$1(s, c) {
  return rindex_rec$1(s, s.length - 1 | 0, c);
}

function rindex_from$1(s, i, c) {
  if (i < -1 || i >= s.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.rindex_from / Bytes.rindex_from"
        ];
  } else {
    return rindex_rec$1(s, i, c);
  }
}

function contains_from$1(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.contains_from / Bytes.contains_from"
        ];
  } else {
    try {
      index_rec$1(s, l, i, c);
      return true;
    }
    catch (exn){
      if (exn === caml_builtin_exceptions.not_found) {
        return false;
      } else {
        throw exn;
      }
    }
  }
}

function contains$1(s, c) {
  return contains_from$1(s, 0, c);
}

function rcontains_from$1(s, i, c) {
  if (i < 0 || i >= s.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "String.rcontains_from / Bytes.rcontains_from"
        ];
  } else {
    try {
      rindex_rec$1(s, i, c);
      return true;
    }
    catch (exn){
      if (exn === caml_builtin_exceptions.not_found) {
        return false;
      } else {
        throw exn;
      }
    }
  }
}

function uppercase$2(s) {
  return caml_bytes.bytes_to_string(bytes.uppercase(caml_bytes.bytes_of_string(s)));
}

function lowercase$3(s) {
  return caml_bytes.bytes_to_string(bytes.lowercase(caml_bytes.bytes_of_string(s)));
}

function capitalize$1(s) {
  return caml_bytes.bytes_to_string(bytes.capitalize(caml_bytes.bytes_of_string(s)));
}

function uncapitalize$1(s) {
  return caml_bytes.bytes_to_string(bytes.uncapitalize(caml_bytes.bytes_of_string(s)));
}

var compare$3 = caml_primitive.caml_string_compare;

var fill$3 = bytes.fill;

var blit$2 = bytes.blit_string;

var make_1$1 = make$1;
var init_1$2 = init$2;
var copy_1$2 = copy$2;
var sub_1$3 = sub$3;
var fill_1$2 = fill$3;
var blit_1$2 = blit$2;
var concat_1$3 = concat$3;
var iter_1$3 = iter$3;
var iteri_1$3 = iteri$3;
var map_1$6 = map$6;
var mapi_1$3 = mapi$4;
var trim_1$1 = trim$1;
var escaped_1$2 = escaped$2;
var index_1$1 = index$1;
var rindex_1$1 = rindex$1;
var index_from_1$1 = index_from$1;
var rindex_from_1$1 = rindex_from$1;
var contains_1$1 = contains$1;
var contains_from_1$1 = contains_from$1;
var rcontains_from_1$1 = rcontains_from$1;
var uppercase_1$2 = uppercase$2;
var lowercase_1$2 = lowercase$3;
var capitalize_1$1 = capitalize$1;
var uncapitalize_1$1 = uncapitalize$1;
var compare_1$3 = compare$3;
/* No side effect */

var string$1 = {
	make: make_1$1,
	init: init_1$2,
	copy: copy_1$2,
	sub: sub_1$3,
	fill: fill_1$2,
	blit: blit_1$2,
	concat: concat_1$3,
	iter: iter_1$3,
	iteri: iteri_1$3,
	map: map_1$6,
	mapi: mapi_1$3,
	trim: trim_1$1,
	escaped: escaped_1$2,
	index: index_1$1,
	rindex: rindex_1$1,
	index_from: index_from_1$1,
	rindex_from: rindex_from_1$1,
	contains: contains_1$1,
	contains_from: contains_from_1$1,
	rcontains_from: rcontains_from_1$1,
	uppercase: uppercase_1$2,
	lowercase: lowercase_1$2,
	capitalize: capitalize_1$1,
	uncapitalize: uncapitalize_1$1,
	compare: compare_1$3
};

function $$char$1(c) {
  return string$1.make(1, c);
}

function date$1(d) {
  return d.toJSON();
}

function nullable$1(encode, param) {
  if (param !== undefined) {
    return curry._1(encode, caml_option.valFromOption(param));
  } else {
    return null;
  }
}

function withDefault$1(d, encode, param) {
  if (param !== undefined) {
    return curry._1(encode, caml_option.valFromOption(param));
  } else {
    return d;
  }
}

var object_ = js_dict.fromList;

var array$2 = array.map;

function list$2(encode, l) {
  return array.of_list(list.map(encode, l));
}

function pair$1(encodeA, encodeB, param) {
  return /* array */[
          curry._1(encodeA, param[0]),
          curry._1(encodeB, param[1])
        ];
}

function tuple3$1(encodeA, encodeB, encodeC, param) {
  return /* array */[
          curry._1(encodeA, param[0]),
          curry._1(encodeB, param[1]),
          curry._1(encodeC, param[2])
        ];
}

function tuple4$1(encodeA, encodeB, encodeC, encodeD, param) {
  return /* array */[
          curry._1(encodeA, param[0]),
          curry._1(encodeB, param[1]),
          curry._1(encodeC, param[2]),
          curry._1(encodeD, param[3])
        ];
}

var tuple2$1 = pair$1;

var arrayOf = array$2;

var $$char_1$1 = $$char$1;
var date_1$1 = date$1;
var nullable_1$1 = nullable$1;
var withDefault_1$1 = withDefault$1;
var pair_1$1 = pair$1;
var tuple2_1$1 = tuple2$1;
var tuple3_1$1 = tuple3$1;
var tuple4_1$1 = tuple4$1;
var object__1 = object_;
var array_1$1 = array$2;
var arrayOf_1 = arrayOf;
var list_1$1 = list$2;
/* No side effect */

var Json_encode_bs = {
	$$char: $$char_1$1,
	date: date_1$1,
	nullable: nullable_1$1,
	withDefault: withDefault_1$1,
	pair: pair_1$1,
	tuple2: tuple2_1$1,
	tuple3: tuple3_1$1,
	tuple4: tuple4_1$1,
	object_: object__1,
	array: array_1$1,
	arrayOf: arrayOf_1,
	list: list_1$1
};

const http = require('http');
const io = require('socket.io');

const httpServer = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Chat server is listening");
});

const socketServer = io(httpServer, { wsEngine: 'ws', transports: ['websocket'] });

const startServer = (clientEventNames, serverEventName, initialSocketState, handler) => {
  const broadcast = (value) => socketServer.emit(serverEventName, value);
  socketServer.on("connect", socket => {
    console.log(`Event: connect; socket: ${socket.id}`);
    const send = (value) => socket.emit(serverEventName, value);
    let socketState = initialSocketState;

    clientEventNames.forEach(eventName => socket.on(eventName, data => {
      console.log(`Event: ${eventName}; data: ${JSON.stringify(data)}`);
      // cycle of updating socket state
      socketState = handler(socketState, eventName, data, send, broadcast);
    }));
  });
  console.log('Starting server');
  httpServer.listen(process.env.PORT || 35558);
  console.log('Server is listening on ', httpServer.address());
};

var SocketIOInterop = /*#__PURE__*/Object.freeze({
  startServer: startServer
});

function encodeMessage(message) {
  return Json_encode_bs.object_(/* :: */[
              /* tuple */[
                "id",
                message[/* id */0]
              ],
              /* :: */[
                /* tuple */[
                  "senderId",
                  message[/* senderId */2]
                ],
                /* :: */[
                  /* tuple */[
                    "text",
                    message[/* text */3]
                  ],
                  /* :: */[
                    /* tuple */[
                      "creationDate",
                      new Date(message[/* creationDate */1]).toISOString()
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

function encodeUser(user) {
  return Json_encode_bs.object_(/* :: */[
              /* tuple */[
                "id",
                user[/* id */0]
              ],
              /* :: */[
                /* tuple */[
                  "name",
                  user[/* name */1]
                ],
                /* :: */[
                  /* tuple */[
                    "avatarUrl",
                    Json_encode_bs.nullable((function (prim) {
                            return prim;
                          }), user[/* avatarUrl */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "isAvailable",
                      user[/* isAvailable */3]
                    ],
                    /* :: */[
                      /* tuple */[
                        "isTyping",
                        user[/* isTyping */4]
                      ],
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

function encodeChatState(chatState, userId) {
  return Json_encode_bs.object_(/* :: */[
              /* tuple */[
                "users",
                Json_encode_bs.list(encodeUser, chatState[/* users */0])
              ],
              /* :: */[
                /* tuple */[
                  "messages",
                  Json_encode_bs.list(encodeMessage, chatState[/* messages */1])
                ],
                /* :: */[
                  /* tuple */[
                    "currentUserId",
                    userId
                  ],
                  /* [] */0
                ]
              ]
            ]);
}

function encodeServerEvent(serverEvent) {
  switch (serverEvent.tag | 0) {
    case 0 : 
        return Json_encode_bs.object_(/* :: */[
                    /* tuple */[
                      "type",
                      3
                    ],
                    /* :: */[
                      /* tuple */[
                        "chat",
                        encodeChatState(serverEvent[0], serverEvent[1])
                      ],
                      /* [] */0
                    ]
                  ]);
    case 1 : 
        return Json_encode_bs.object_(/* :: */[
                    /* tuple */[
                      "type",
                      1
                    ],
                    /* :: */[
                      /* tuple */[
                        "user",
                        encodeUser(serverEvent[0])
                      ],
                      /* [] */0
                    ]
                  ]);
    case 2 : 
        return Json_encode_bs.object_(/* :: */[
                    /* tuple */[
                      "type",
                      0
                    ],
                    /* :: */[
                      /* tuple */[
                        "userId",
                        serverEvent[0][/* id */0]
                      ],
                      /* [] */0
                    ]
                  ]);
    case 3 : 
        return Json_encode_bs.object_(/* :: */[
                    /* tuple */[
                      "type",
                      2
                    ],
                    /* :: */[
                      /* tuple */[
                        "message",
                        encodeMessage(serverEvent[0])
                      ],
                      /* [] */0
                    ]
                  ]);
    
  }
}

function decodeClientCommand(json) {
  var match = Json_decode_bs.field("type", Json_decode_bs.$$int, json);
  switch (match) {
    case 0 : 
        return /* Logout */0;
    case 1 : 
        return /* Login */block.__(1, [Json_decode_bs.field("userName", Json_decode_bs.string, json)]);
    case 2 : 
        return /* PublishMessage */block.__(0, [Json_decode_bs.field("text", Json_decode_bs.string, json)]);
    default:
      return /* Logout */0;
  }
}

var customClientEventName = "Chat.ClientCommand";

var customServerEventName = "Chat.ServerEvent";

var disconnectEventName = "disconnect";

function startServer$1(handleClientEvent) {
  SocketIOInterop.startServer(/* array */[
        customClientEventName,
        disconnectEventName
      ], customServerEventName, /* Unauthenticated */0, (function (clientAuthentication, eventName, data, rawBroadcaster, rawSender) {
          var match = eventName === disconnectEventName;
          return curry._4(handleClientEvent, clientAuthentication, match ? /* Logout */0 : decodeClientCommand(data), (function (x) {
                        return curry._1(rawBroadcaster, encodeServerEvent(x));
                      }), (function (x) {
                        return curry._1(rawSender, encodeServerEvent(x));
                      }));
        }));
  return /* () */0;
}

var encodeMessage_1 = encodeMessage;
var encodeUser_1 = encodeUser;
var encodeChatState_1 = encodeChatState;
var encodeServerEvent_1 = encodeServerEvent;
var decodeClientCommand_1 = decodeClientCommand;
var customClientEventName_1 = customClientEventName;
var customServerEventName_1 = customServerEventName;
var disconnectEventName_1 = disconnectEventName;
var startServer_1 = startServer$1;
/* ./SocketIOInterop Not a pure module */

var SocketIO_bs = {
	encodeMessage: encodeMessage_1,
	encodeUser: encodeUser_1,
	encodeChatState: encodeChatState_1,
	encodeServerEvent: encodeServerEvent_1,
	decodeClientCommand: decodeClientCommand_1,
	customClientEventName: customClientEventName_1,
	customServerEventName: customServerEventName_1,
	disconnectEventName: disconnectEventName_1,
	startServer: startServer_1
};

function equal(x, y) {
  return x === y;
}

var max$1 = 2147483647;

var min$1 = -2147483648;

var equal_1 = equal;
var max_1$1 = max$1;
var min_1$1 = min$1;
/* No side effect */

var js_int = {
	equal: equal_1,
	max: max_1$1,
	min: min_1$1
};

function unsafe_ceil(prim) {
  return Math.ceil(prim);
}

function ceil_int(f) {
  if (f > js_int.max) {
    return js_int.max;
  } else if (f < js_int.min) {
    return js_int.min;
  } else {
    return Math.ceil(f);
  }
}

function unsafe_floor(prim) {
  return Math.floor(prim);
}

function floor_int(f) {
  if (f > js_int.max) {
    return js_int.max;
  } else if (f < js_int.min) {
    return js_int.min;
  } else {
    return Math.floor(f);
  }
}

function random_int(min, max) {
  return floor_int(Math.random() * (max - min | 0)) + min | 0;
}

var ceil = ceil_int;

var floor = floor_int;

var unsafe_ceil_1 = unsafe_ceil;
var ceil_int_1 = ceil_int;
var ceil_1 = ceil;
var unsafe_floor_1 = unsafe_floor;
var floor_int_1 = floor_int;
var floor_1 = floor;
var random_int_1 = random_int;
/* No side effect */

var js_math = {
	unsafe_ceil: unsafe_ceil_1,
	ceil_int: ceil_int_1,
	ceil: ceil_1,
	unsafe_floor: unsafe_floor_1,
	floor_int: floor_int_1,
	floor: floor_1,
	random_int: random_int_1
};

function get$3(arr, i) {
  if (i >= 0 && i < arr.length) {
    return caml_option.some(arr[i]);
  }
  
}

function getExn$1(arr, i) {
  if (!(i >= 0 && i < arr.length)) {
    throw new Error("File \"belt_Array.ml\", line 25, characters 6-12");
  }
  return arr[i];
}

function set(arr, i, v) {
  if (i >= 0 && i < arr.length) {
    arr[i] = v;
    return true;
  } else {
    return false;
  }
}

function setExn(arr, i, v) {
  if (!(i >= 0 && i < arr.length)) {
    throw new Error("File \"belt_Array.ml\", line 31, characters 4-10");
  }
  arr[i] = v;
  return /* () */0;
}

function swapUnsafe(xs, i, j) {
  var tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
  return /* () */0;
}

function shuffleInPlace(xs) {
  var len = xs.length;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    swapUnsafe(xs, i, js_math.random_int(i, len));
  }
  return /* () */0;
}

function shuffle(xs) {
  var result = xs.slice(0);
  shuffleInPlace(result);
  return result;
}

function reverseInPlace(xs) {
  var len = xs.length;
  var xs$1 = xs;
  var ofs = 0;
  var len$1 = len;
  for(var i = 0 ,i_finish = (len$1 / 2 | 0) - 1 | 0; i <= i_finish; ++i){
    swapUnsafe(xs$1, ofs + i | 0, ((ofs + len$1 | 0) - i | 0) - 1 | 0);
  }
  return /* () */0;
}

function reverse(xs) {
  var len = xs.length;
  var result = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    result[i] = xs[(len - 1 | 0) - i | 0];
  }
  return result;
}

function make$2(l, f) {
  if (l <= 0) {
    return /* array */[];
  } else {
    var res = new Array(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      res[i] = f;
    }
    return res;
  }
}

function makeByU(l, f) {
  if (l <= 0) {
    return /* array */[];
  } else {
    var res = new Array(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      res[i] = f(i);
    }
    return res;
  }
}

function makeBy(l, f) {
  return makeByU(l, curry.__1(f));
}

function makeByAndShuffleU(l, f) {
  var u = makeByU(l, f);
  shuffleInPlace(u);
  return u;
}

function makeByAndShuffle(l, f) {
  return makeByAndShuffleU(l, curry.__1(f));
}

function range(start, finish) {
  var cut = finish - start | 0;
  if (cut < 0) {
    return /* array */[];
  } else {
    var arr = new Array(cut + 1 | 0);
    for(var i = 0; i <= cut; ++i){
      arr[i] = start + i | 0;
    }
    return arr;
  }
}

function rangeBy(start, finish, step) {
  var cut = finish - start | 0;
  if (cut < 0 || step <= 0) {
    return /* array */[];
  } else {
    var nb = (cut / step | 0) + 1 | 0;
    var arr = new Array(nb);
    var cur = start;
    for(var i = 0 ,i_finish = nb - 1 | 0; i <= i_finish; ++i){
      arr[i] = cur;
      cur = cur + step | 0;
    }
    return arr;
  }
}

function zip(xs, ys) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    s[i] = /* tuple */[
      xs[i],
      ys[i]
    ];
  }
  return s;
}

function zipByU(xs, ys, f) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    s[i] = f(xs[i], ys[i]);
  }
  return s;
}

function zipBy(xs, ys, f) {
  return zipByU(xs, ys, curry.__2(f));
}

function concat$4(a1, a2) {
  var l1 = a1.length;
  var l2 = a2.length;
  var a1a2 = new Array(l1 + l2 | 0);
  for(var i = 0 ,i_finish = l1 - 1 | 0; i <= i_finish; ++i){
    a1a2[i] = a1[i];
  }
  for(var i$1 = 0 ,i_finish$1 = l2 - 1 | 0; i$1 <= i_finish$1; ++i$1){
    a1a2[l1 + i$1 | 0] = a2[i$1];
  }
  return a1a2;
}

function concatMany(arrs) {
  var lenArrs = arrs.length;
  var totalLen = 0;
  for(var i = 0 ,i_finish = lenArrs - 1 | 0; i <= i_finish; ++i){
    totalLen = totalLen + arrs[i].length | 0;
  }
  var result = new Array(totalLen);
  totalLen = 0;
  for(var j = 0 ,j_finish = lenArrs - 1 | 0; j <= j_finish; ++j){
    var cur = arrs[j];
    for(var k = 0 ,k_finish = cur.length - 1 | 0; k <= k_finish; ++k){
      result[totalLen] = cur[k];
      totalLen = totalLen + 1 | 0;
    }
  }
  return result;
}

function slice(a, offset, len) {
  if (len <= 0) {
    return /* array */[];
  } else {
    var lena = a.length;
    var ofs = offset < 0 ? caml_primitive.caml_int_max(lena + offset | 0, 0) : offset;
    var hasLen = lena - ofs | 0;
    var copyLength = hasLen < len ? hasLen : len;
    if (copyLength <= 0) {
      return /* array */[];
    } else {
      var result = new Array(copyLength);
      for(var i = 0 ,i_finish = copyLength - 1 | 0; i <= i_finish; ++i){
        result[i] = a[ofs + i | 0];
      }
      return result;
    }
  }
}

function sliceToEnd(a, offset) {
  var lena = a.length;
  var ofs = offset < 0 ? caml_primitive.caml_int_max(lena + offset | 0, 0) : offset;
  var len = lena - ofs | 0;
  var result = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    result[i] = a[ofs + i | 0];
  }
  return result;
}

function fill$4(a, offset, len, v) {
  if (len > 0) {
    var lena = a.length;
    var ofs = offset < 0 ? caml_primitive.caml_int_max(lena + offset | 0, 0) : offset;
    var hasLen = lena - ofs | 0;
    var fillLength = hasLen < len ? hasLen : len;
    if (fillLength > 0) {
      for(var i = ofs ,i_finish = (ofs + fillLength | 0) - 1 | 0; i <= i_finish; ++i){
        a[i] = v;
      }
      return /* () */0;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
  if (srcofs2 <= srcofs1) {
    for(var j = 0 ,j_finish = blitLength - 1 | 0; j <= j_finish; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
    }
    return /* () */0;
  }
}

function blit$3(a1, ofs1, a2, ofs2, len) {
  var lena1 = a1.length;
  var lena2 = a2.length;
  var srcofs1 = ofs1 < 0 ? caml_primitive.caml_int_max(lena1 + ofs1 | 0, 0) : ofs1;
  var srcofs2 = ofs2 < 0 ? caml_primitive.caml_int_max(lena2 + ofs2 | 0, 0) : ofs2;
  var blitLength = caml_primitive.caml_int_min(len, caml_primitive.caml_int_min(lena1 - srcofs1 | 0, lena2 - srcofs2 | 0));
  if (srcofs2 <= srcofs1) {
    for(var j = 0 ,j_finish = blitLength - 1 | 0; j <= j_finish; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
    }
    return /* () */0;
  }
}

function forEachU(a, f) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    f(a[i]);
  }
  return /* () */0;
}

function forEach(a, f) {
  return forEachU(a, curry.__1(f));
}

function mapU$1(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    r[i] = f(a[i]);
  }
  return r;
}

function map$7(a, f) {
  return mapU$1(a, curry.__1(f));
}

function keepU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var v = a[i];
    if (f(v)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keep(a, f) {
  return keepU(a, curry.__1(f));
}

function keepWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var v = a[i];
    if (f(v, i)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepWithIndex(a, f) {
  return keepWithIndexU(a, curry.__2(f));
}

function keepMapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var v = a[i];
    var match = f(v);
    if (match !== undefined) {
      r[j] = caml_option.valFromOption(match);
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepMap(a, f) {
  return keepMapU(a, curry.__1(f));
}

function forEachWithIndexU(a, f) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    f(i, a[i]);
  }
  return /* () */0;
}

function forEachWithIndex(a, f) {
  return forEachWithIndexU(a, curry.__2(f));
}

function mapWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    r[i] = f(i, a[i]);
  }
  return r;
}

function mapWithIndex(a, f) {
  return mapWithIndexU(a, curry.__2(f));
}

function reduceU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = f(r, a[i]);
  }
  return r;
}

function reduce(a, x, f) {
  return reduceU(a, x, curry.__2(f));
}

function reduceReverseU(a, x, f) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = f(r, a[i]);
  }
  return r;
}

function reduceReverse(a, x, f) {
  return reduceReverseU(a, x, curry.__2(f));
}

function reduceReverse2U(a, b, x, f) {
  var r = x;
  var len = caml_primitive.caml_int_min(a.length, b.length);
  for(var i = len - 1 | 0; i >= 0; --i){
    r = f(r, a[i], b[i]);
  }
  return r;
}

function reduceReverse2(a, b, x, f) {
  return reduceReverse2U(a, b, x, curry.__3(f));
}

function reduceWithIndexU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = f(r, a[i], i);
  }
  return r;
}

function reduceWithIndex(a, x, f) {
  return reduceWithIndexU(a, x, curry.__3(f));
}

function everyU(arr, b) {
  var len = arr.length;
  var arr$1 = arr;
  var _i = 0;
  var b$1 = b;
  var len$1 = len;
  while(true) {
    var i = _i;
    if (i === len$1) {
      return true;
    } else if (b$1(arr$1[i])) {
      _i = i + 1 | 0;
      continue ;
    } else {
      return false;
    }
  }}

function every(arr, f) {
  return everyU(arr, curry.__1(f));
}

function someU(arr, b) {
  var len = arr.length;
  var arr$1 = arr;
  var _i = 0;
  var b$1 = b;
  var len$1 = len;
  while(true) {
    var i = _i;
    if (i === len$1) {
      return false;
    } else if (b$1(arr$1[i])) {
      return true;
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  }}

function some$1(arr, f) {
  return someU(arr, curry.__1(f));
}

function everyAux2(arr1, arr2, _i, b, len) {
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    } else if (b(arr1[i], arr2[i])) {
      _i = i + 1 | 0;
      continue ;
    } else {
      return false;
    }
  }}

function every2U(a, b, p) {
  return everyAux2(a, b, 0, p, caml_primitive.caml_int_min(a.length, b.length));
}

function every2(a, b, p) {
  return every2U(a, b, curry.__2(p));
}

function some2U(a, b, p) {
  var arr1 = a;
  var arr2 = b;
  var _i = 0;
  var b$1 = p;
  var len = caml_primitive.caml_int_min(a.length, b.length);
  while(true) {
    var i = _i;
    if (i === len) {
      return false;
    } else if (b$1(arr1[i], arr2[i])) {
      return true;
    } else {
      _i = i + 1 | 0;
      continue ;
    }
  }}

function some2(a, b, p) {
  return some2U(a, b, curry.__2(p));
}

function eqU$1(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena === lenb) {
    return everyAux2(a, b, 0, p, lena);
  } else {
    return false;
  }
}

function eq$2(a, b, p) {
  return eqU$1(a, b, curry.__2(p));
}

function cmpU$1(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena > lenb) {
    return 1;
  } else if (lena < lenb) {
    return -1;
  } else {
    var arr1 = a;
    var arr2 = b;
    var _i = 0;
    var b$1 = p;
    var len = lena;
    while(true) {
      var i = _i;
      if (i === len) {
        return 0;
      } else {
        var c = b$1(arr1[i], arr2[i]);
        if (c === 0) {
          _i = i + 1 | 0;
          continue ;
        } else {
          return c;
        }
      }
    }  }
}

function cmp$1(a, b, p) {
  return cmpU$1(a, b, curry.__2(p));
}

function partitionU(a, f) {
  var l = a.length;
  var i = 0;
  var j = 0;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for(var ii = 0 ,ii_finish = l - 1 | 0; ii <= ii_finish; ++ii){
    var v = a[ii];
    if (f(v)) {
      a1[i] = v;
      i = i + 1 | 0;
    } else {
      a2[j] = v;
      j = j + 1 | 0;
    }
  }
  a1.length = i;
  a2.length = j;
  return /* tuple */[
          a1,
          a2
        ];
}

function partition$1(a, f) {
  return partitionU(a, curry.__1(f));
}

function unzip(a) {
  var l = a.length;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
    var match = a[i];
    a1[i] = match[0];
    a2[i] = match[1];
  }
  return /* tuple */[
          a1,
          a2
        ];
}

var get_1$3 = get$3;
var getExn_1$1 = getExn$1;
var set_1 = set;
var setExn_1 = setExn;
var shuffleInPlace_1 = shuffleInPlace;
var shuffle_1 = shuffle;
var reverseInPlace_1 = reverseInPlace;
var reverse_1 = reverse;
var make_1$2 = make$2;
var range_1 = range;
var rangeBy_1 = rangeBy;
var makeByU_1 = makeByU;
var makeBy_1 = makeBy;
var makeByAndShuffleU_1 = makeByAndShuffleU;
var makeByAndShuffle_1 = makeByAndShuffle;
var zip_1 = zip;
var zipByU_1 = zipByU;
var zipBy_1 = zipBy;
var unzip_1 = unzip;
var concat_1$4 = concat$4;
var concatMany_1 = concatMany;
var slice_1 = slice;
var sliceToEnd_1 = sliceToEnd;
var fill_1$3 = fill$4;
var blit_1$3 = blit$3;
var blitUnsafe_1 = blitUnsafe;
var forEachU_1 = forEachU;
var forEach_1 = forEach;
var mapU_1$1 = mapU$1;
var map_1$7 = map$7;
var keepU_1 = keepU;
var keep_1 = keep;
var keepWithIndexU_1 = keepWithIndexU;
var keepWithIndex_1 = keepWithIndex;
var keepMapU_1 = keepMapU;
var keepMap_1 = keepMap;
var forEachWithIndexU_1 = forEachWithIndexU;
var forEachWithIndex_1 = forEachWithIndex;
var mapWithIndexU_1 = mapWithIndexU;
var mapWithIndex_1 = mapWithIndex;
var partitionU_1 = partitionU;
var partition_1$1 = partition$1;
var reduceU_1 = reduceU;
var reduce_1 = reduce;
var reduceReverseU_1 = reduceReverseU;
var reduceReverse_1 = reduceReverse;
var reduceReverse2U_1 = reduceReverse2U;
var reduceReverse2_1 = reduceReverse2;
var reduceWithIndexU_1 = reduceWithIndexU;
var reduceWithIndex_1 = reduceWithIndex;
var someU_1 = someU;
var some_1$1 = some$1;
var everyU_1 = everyU;
var every_1 = every;
var every2U_1 = every2U;
var every2_1 = every2;
var some2U_1 = some2U;
var some2_1 = some2;
var cmpU_1$1 = cmpU$1;
var cmp_1$1 = cmp$1;
var eqU_1$1 = eqU$1;
var eq_1$2 = eq$2;
/* No side effect */

var belt_Array = {
	get: get_1$3,
	getExn: getExn_1$1,
	set: set_1,
	setExn: setExn_1,
	shuffleInPlace: shuffleInPlace_1,
	shuffle: shuffle_1,
	reverseInPlace: reverseInPlace_1,
	reverse: reverse_1,
	make: make_1$2,
	range: range_1,
	rangeBy: rangeBy_1,
	makeByU: makeByU_1,
	makeBy: makeBy_1,
	makeByAndShuffleU: makeByAndShuffleU_1,
	makeByAndShuffle: makeByAndShuffle_1,
	zip: zip_1,
	zipByU: zipByU_1,
	zipBy: zipBy_1,
	unzip: unzip_1,
	concat: concat_1$4,
	concatMany: concatMany_1,
	slice: slice_1,
	sliceToEnd: sliceToEnd_1,
	fill: fill_1$3,
	blit: blit_1$3,
	blitUnsafe: blitUnsafe_1,
	forEachU: forEachU_1,
	forEach: forEach_1,
	mapU: mapU_1$1,
	map: map_1$7,
	keepU: keepU_1,
	keep: keep_1,
	keepWithIndexU: keepWithIndexU_1,
	keepWithIndex: keepWithIndex_1,
	keepMapU: keepMapU_1,
	keepMap: keepMap_1,
	forEachWithIndexU: forEachWithIndexU_1,
	forEachWithIndex: forEachWithIndex_1,
	mapWithIndexU: mapWithIndexU_1,
	mapWithIndex: mapWithIndex_1,
	partitionU: partitionU_1,
	partition: partition_1$1,
	reduceU: reduceU_1,
	reduce: reduce_1,
	reduceReverseU: reduceReverseU_1,
	reduceReverse: reduceReverse_1,
	reduceReverse2U: reduceReverse2U_1,
	reduceReverse2: reduceReverse2_1,
	reduceWithIndexU: reduceWithIndexU_1,
	reduceWithIndex: reduceWithIndex_1,
	someU: someU_1,
	some: some_1$1,
	everyU: everyU_1,
	every: every_1,
	every2U: every2U_1,
	every2: every2_1,
	some2U: some2U_1,
	some2: some2_1,
	cmpU: cmpU_1$1,
	cmp: cmp_1$1,
	eqU: eqU_1$1,
	eq: eq_1$2
};

function sortedLengthAuxMore(xs, _prec, _acc, len, lt) {
  while(true) {
    var acc = _acc;
    var prec = _prec;
    if (acc >= len) {
      return acc;
    } else {
      var v = xs[acc];
      if (lt(v, prec)) {
        _acc = acc + 1 | 0;
        _prec = v;
        continue ;
      } else {
        return acc;
      }
    }
  }}

function strictlySortedLengthU(xs, lt) {
  var len = xs.length;
  if (len === 0 || len === 1) {
    return len;
  } else {
    var x0 = xs[0];
    var x1 = xs[1];
    if (lt(x0, x1)) {
      var xs$1 = xs;
      var _prec = x1;
      var _acc = 2;
      var len$1 = len;
      var lt$1 = lt;
      while(true) {
        var acc = _acc;
        var prec = _prec;
        if (acc >= len$1) {
          return acc;
        } else {
          var v = xs$1[acc];
          if (lt$1(prec, v)) {
            _acc = acc + 1 | 0;
            _prec = v;
            continue ;
          } else {
            return acc;
          }
        }
      }    } else if (lt(x1, x0)) {
      return -sortedLengthAuxMore(xs, x1, 2, len, lt) | 0;
    } else {
      return 1;
    }
  }
}

function strictlySortedLength(xs, lt) {
  return strictlySortedLengthU(xs, curry.__2(lt));
}

function isSortedU(a, cmp) {
  var len = a.length;
  if (len === 0) {
    return true;
  } else {
    var a$1 = a;
    var _i = 0;
    var cmp$1 = cmp;
    var last_bound = len - 1 | 0;
    while(true) {
      var i = _i;
      if (i === last_bound) {
        return true;
      } else if (cmp$1(a$1[i], a$1[i + 1 | 0]) <= 0) {
        _i = i + 1 | 0;
        continue ;
      } else {
        return false;
      }
    }  }
}

function isSorted(a, cmp) {
  return isSortedU(a, curry.__2(cmp));
}

function merge$1(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    if (cmp(s1, s2) <= 0) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      if (i1$1 < src1r) {
        _d = d + 1 | 0;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      } else {
        return belt_Array.blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
      }
    } else {
      dst[d] = s2;
      var i2$1 = i2 + 1 | 0;
      if (i2$1 < src2r) {
        _d = d + 1 | 0;
        _s2 = src2[i2$1];
        _i2 = i2$1;
        continue ;
      } else {
        return belt_Array.blitUnsafe(src, i1, dst, d + 1 | 0, src1r - i1 | 0);
      }
    }
  }}

function unionU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      var d$1 = d + 1 | 0;
      if (i1$1 < src1r) {
        _d = d$1;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      } else {
        belt_Array.blitUnsafe(src2, i2, dst, d$1, src2r - i2 | 0);
        return (d$1 + src2r | 0) - i2 | 0;
      }
    } else if (c === 0) {
      dst[d] = s1;
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      var d$2 = d + 1 | 0;
      if (i1$2 < src1r && i2$1 < src2r) {
        _d = d$2;
        _s2 = src2[i2$1];
        _i2 = i2$1;
        _s1 = src[i1$2];
        _i1 = i1$2;
        continue ;
      } else if (i1$2 === src1r) {
        belt_Array.blitUnsafe(src2, i2$1, dst, d$2, src2r - i2$1 | 0);
        return (d$2 + src2r | 0) - i2$1 | 0;
      } else {
        belt_Array.blitUnsafe(src, i1$2, dst, d$2, src1r - i1$2 | 0);
        return (d$2 + src1r | 0) - i1$2 | 0;
      }
    } else {
      dst[d] = s2;
      var i2$2 = i2 + 1 | 0;
      var d$3 = d + 1 | 0;
      if (i2$2 < src2r) {
        _d = d$3;
        _s2 = src2[i2$2];
        _i2 = i2$2;
        continue ;
      } else {
        belt_Array.blitUnsafe(src, i1, dst, d$3, src1r - i1 | 0);
        return (d$3 + src1r | 0) - i1 | 0;
      }
    }
  }}

function union(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return unionU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, curry.__2(cmp));
}

function intersectU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      var i1$1 = i1 + 1 | 0;
      if (i1$1 < src1r) {
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      } else {
        return d;
      }
    } else if (c === 0) {
      dst[d] = s1;
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      var d$1 = d + 1 | 0;
      if (i1$2 < src1r && i2$1 < src2r) {
        _d = d$1;
        _s2 = src2[i2$1];
        _i2 = i2$1;
        _s1 = src[i1$2];
        _i1 = i1$2;
        continue ;
      } else {
        return d$1;
      }
    } else {
      var i2$2 = i2 + 1 | 0;
      if (i2$2 < src2r) {
        _s2 = src2[i2$2];
        _i2 = i2$2;
        continue ;
      } else {
        return d;
      }
    }
  }}

function intersect(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return intersectU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, curry.__2(cmp));
}

function diffU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      var d$1 = d + 1 | 0;
      var i1$1 = i1 + 1 | 0;
      if (i1$1 < src1r) {
        _d = d$1;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      } else {
        return d$1;
      }
    } else if (c === 0) {
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      if (i1$2 < src1r && i2$1 < src2r) {
        _s2 = src2[i2$1];
        _i2 = i2$1;
        _s1 = src[i1$2];
        _i1 = i1$2;
        continue ;
      } else if (i1$2 === src1r) {
        return d;
      } else {
        belt_Array.blitUnsafe(src, i1$2, dst, d, src1r - i1$2 | 0);
        return (d + src1r | 0) - i1$2 | 0;
      }
    } else {
      var i2$2 = i2 + 1 | 0;
      if (i2$2 < src2r) {
        _s2 = src2[i2$2];
        _i2 = i2$2;
        continue ;
      } else {
        belt_Array.blitUnsafe(src, i1, dst, d, src1r - i1 | 0);
        return (d + src1r | 0) - i1 | 0;
      }
    }
  }}

function diff(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return diffU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, curry.__2(cmp));
}

function insertionSort(src, srcofs, dst, dstofs, len, cmp) {
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    var e = src[srcofs + i | 0];
    var j = (dstofs + i | 0) - 1 | 0;
    while(j >= dstofs && cmp(dst[j], e) > 0) {
      dst[j + 1 | 0] = dst[j];
      j = j - 1 | 0;
    }    dst[j + 1 | 0] = e;
  }
  return /* () */0;
}

function sortTo(src, srcofs, dst, dstofs, len, cmp) {
  if (len <= 5) {
    return insertionSort(src, srcofs, dst, dstofs, len, cmp);
  } else {
    var l1 = len / 2 | 0;
    var l2 = len - l1 | 0;
    sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp);
    sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp);
    return merge$1(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp);
  }
}

function stableSortInPlaceByU(a, cmp) {
  var l = a.length;
  if (l <= 5) {
    return insertionSort(a, 0, a, 0, l, cmp);
  } else {
    var l1 = l / 2 | 0;
    var l2 = l - l1 | 0;
    var t = new Array(l2);
    sortTo(a, l1, t, 0, l2, cmp);
    sortTo(a, 0, a, l2, l1, cmp);
    return merge$1(a, l2, l1, t, 0, l2, a, 0, cmp);
  }
}

function stableSortInPlaceBy(a, cmp) {
  return stableSortInPlaceByU(a, curry.__2(cmp));
}

function stableSortByU(a, cmp) {
  var b = a.slice(0);
  stableSortInPlaceByU(b, cmp);
  return b;
}

function stableSortBy(a, cmp) {
  return stableSortByU(a, curry.__2(cmp));
}

function binarySearchByU(sorted, key, cmp) {
  var len = sorted.length;
  if (len === 0) {
    return -1;
  } else {
    var lo = sorted[0];
    var c = cmp(key, lo);
    if (c < 0) {
      return -1;
    } else {
      var hi = sorted[len - 1 | 0];
      var c2 = cmp(key, hi);
      if (c2 > 0) {
        return -(len + 1 | 0) | 0;
      } else {
        var arr = sorted;
        var _lo = 0;
        var _hi = len - 1 | 0;
        var key$1 = key;
        var cmp$1 = cmp;
        while(true) {
          var hi$1 = _hi;
          var lo$1 = _lo;
          var mid = (lo$1 + hi$1 | 0) / 2 | 0;
          var midVal = arr[mid];
          var c$1 = cmp$1(key$1, midVal);
          if (c$1 === 0) {
            return mid;
          } else if (c$1 < 0) {
            if (hi$1 === mid) {
              if (cmp$1(arr[lo$1], key$1) === 0) {
                return lo$1;
              } else {
                return -(hi$1 + 1 | 0) | 0;
              }
            } else {
              _hi = mid;
              continue ;
            }
          } else if (lo$1 === mid) {
            if (cmp$1(arr[hi$1], key$1) === 0) {
              return hi$1;
            } else {
              return -(hi$1 + 1 | 0) | 0;
            }
          } else {
            _lo = mid;
            continue ;
          }
        }      }
    }
  }
}

function binarySearchBy(sorted, key, cmp) {
  return binarySearchByU(sorted, key, curry.__2(cmp));
}

var Int = 0;

var $$String = 0;

var Int_1 = Int;
var $$String_1 = $$String;
var strictlySortedLengthU_1 = strictlySortedLengthU;
var strictlySortedLength_1 = strictlySortedLength;
var isSortedU_1 = isSortedU;
var isSorted_1 = isSorted;
var stableSortInPlaceByU_1 = stableSortInPlaceByU;
var stableSortInPlaceBy_1 = stableSortInPlaceBy;
var stableSortByU_1 = stableSortByU;
var stableSortBy_1 = stableSortBy;
var binarySearchByU_1 = binarySearchByU;
var binarySearchBy_1 = binarySearchBy;
var unionU_1 = unionU;
var union_1 = union;
var intersectU_1 = intersectU;
var intersect_1 = intersect;
var diffU_1 = diffU;
var diff_1 = diff;
/* No side effect */

var belt_SortArray = {
	Int: Int_1,
	$$String: $$String_1,
	strictlySortedLengthU: strictlySortedLengthU_1,
	strictlySortedLength: strictlySortedLength_1,
	isSortedU: isSortedU_1,
	isSorted: isSorted_1,
	stableSortInPlaceByU: stableSortInPlaceByU_1,
	stableSortInPlaceBy: stableSortInPlaceBy_1,
	stableSortByU: stableSortByU_1,
	stableSortBy: stableSortBy_1,
	binarySearchByU: binarySearchByU_1,
	binarySearchBy: binarySearchBy_1,
	unionU: unionU_1,
	union: union_1,
	intersectU: intersectU_1,
	intersect: intersect_1,
	diffU: diffU_1,
	diff: diff_1
};

function head(x) {
  if (x) {
    return caml_option.some(x[0]);
  }
  
}

function headExn(x) {
  if (x) {
    return x[0];
  } else {
    throw new Error("headExn");
  }
}

function tail(x) {
  if (x) {
    return x[1];
  }
  
}

function tailExn(x) {
  if (x) {
    return x[1];
  } else {
    throw new Error("tailExn");
  }
}

function add$1(xs, x) {
  return /* :: */[
          x,
          xs
        ];
}

function get$4(x, n) {
  if (n < 0) {
    return undefined;
  } else {
    var _x = x;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var x$1 = _x;
      if (x$1) {
        if (n$1 === 0) {
          return caml_option.some(x$1[0]);
        } else {
          _n = n$1 - 1 | 0;
          _x = x$1[1];
          continue ;
        }
      } else {
        return undefined;
      }
    }  }
}

function getExn$2(x, n) {
  if (n < 0) {
    throw new Error("getExn");
  } else {
    var _x = x;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var x$1 = _x;
      if (x$1) {
        if (n$1 === 0) {
          return x$1[0];
        } else {
          _n = n$1 - 1 | 0;
          _x = x$1[1];
          continue ;
        }
      } else {
        throw new Error("getExn");
      }
    }  }
}

function partitionAux(p, _cell, _precX, _precY) {
  while(true) {
    var precY = _precY;
    var precX = _precX;
    var cell = _cell;
    if (cell) {
      var t = cell[1];
      var h = cell[0];
      var next = /* :: */[
        h,
        /* [] */0
      ];
      if (p(h)) {
        precX[1] = next;
        _precX = next;
        _cell = t;
        continue ;
      } else {
        precY[1] = next;
        _precY = next;
        _cell = t;
        continue ;
      }
    } else {
      return /* () */0;
    }
  }}

function splitAux(_cell, _precX, _precY) {
  while(true) {
    var precY = _precY;
    var precX = _precX;
    var cell = _cell;
    if (cell) {
      var match = cell[0];
      var nextA = /* :: */[
        match[0],
        /* [] */0
      ];
      var nextB = /* :: */[
        match[1],
        /* [] */0
      ];
      precX[1] = nextA;
      precY[1] = nextB;
      _precY = nextB;
      _precX = nextA;
      _cell = cell[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function copyAuxCont(_cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var next = /* :: */[
        cellX[0],
        /* [] */0
      ];
      prec[1] = next;
      _prec = next;
      _cellX = cellX[1];
      continue ;
    } else {
      return prec;
    }
  }}

function copyAuxWitFilter(f, _cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var t = cellX[1];
      var h = cellX[0];
      if (f(h)) {
        var next = /* :: */[
          h,
          /* [] */0
        ];
        prec[1] = next;
        _prec = next;
        _cellX = t;
        continue ;
      } else {
        _cellX = t;
        continue ;
      }
    } else {
      return /* () */0;
    }
  }}

function copyAuxWithFilterIndex(f, _cellX, _prec, _i) {
  while(true) {
    var i = _i;
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var t = cellX[1];
      var h = cellX[0];
      if (f(h, i)) {
        var next = /* :: */[
          h,
          /* [] */0
        ];
        prec[1] = next;
        _i = i + 1 | 0;
        _prec = next;
        _cellX = t;
        continue ;
      } else {
        _i = i + 1 | 0;
        _cellX = t;
        continue ;
      }
    } else {
      return /* () */0;
    }
  }}

function copyAuxWitFilterMap(f, _cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var t = cellX[1];
      var match = f(cellX[0]);
      if (match !== undefined) {
        var next = /* :: */[
          caml_option.valFromOption(match),
          /* [] */0
        ];
        prec[1] = next;
        _prec = next;
        _cellX = t;
        continue ;
      } else {
        _cellX = t;
        continue ;
      }
    } else {
      return /* () */0;
    }
  }}

function removeAssocAuxWithMap(_cellX, x, _prec, f) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var t = cellX[1];
      var h = cellX[0];
      if (f(h[0], x)) {
        prec[1] = t;
        return true;
      } else {
        var next = /* :: */[
          h,
          /* [] */0
        ];
        prec[1] = next;
        _prec = next;
        _cellX = t;
        continue ;
      }
    } else {
      return false;
    }
  }}

function setAssocAuxWithMap(_cellX, x, k, _prec, eq) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var t = cellX[1];
      var h = cellX[0];
      if (eq(h[0], x)) {
        prec[1] = /* :: */[
          /* tuple */[
            x,
            k
          ],
          t
        ];
        return true;
      } else {
        var next = /* :: */[
          h,
          /* [] */0
        ];
        prec[1] = next;
        _prec = next;
        _cellX = t;
        continue ;
      }
    } else {
      return false;
    }
  }}

function copyAuxWithMap(_cellX, _prec, f) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (cellX) {
      var next = /* :: */[
        f(cellX[0]),
        /* [] */0
      ];
      prec[1] = next;
      _prec = next;
      _cellX = cellX[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function zipAux(_cellX, _cellY, _prec) {
  while(true) {
    var prec = _prec;
    var cellY = _cellY;
    var cellX = _cellX;
    if (cellX && cellY) {
      var next = /* :: */[
        /* tuple */[
          cellX[0],
          cellY[0]
        ],
        /* [] */0
      ];
      prec[1] = next;
      _prec = next;
      _cellY = cellY[1];
      _cellX = cellX[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function copyAuxWithMap2(f, _cellX, _cellY, _prec) {
  while(true) {
    var prec = _prec;
    var cellY = _cellY;
    var cellX = _cellX;
    if (cellX && cellY) {
      var next = /* :: */[
        f(cellX[0], cellY[0]),
        /* [] */0
      ];
      prec[1] = next;
      _prec = next;
      _cellY = cellY[1];
      _cellX = cellX[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function copyAuxWithMapI(f, _i, _cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    var i = _i;
    if (cellX) {
      var next = /* :: */[
        f(i, cellX[0]),
        /* [] */0
      ];
      prec[1] = next;
      _prec = next;
      _cellX = cellX[1];
      _i = i + 1 | 0;
      continue ;
    } else {
      return /* () */0;
    }
  }}

function takeAux(_n, _cell, _prec) {
  while(true) {
    var prec = _prec;
    var cell = _cell;
    var n = _n;
    if (n === 0) {
      return true;
    } else if (cell) {
      var cell$1 = /* :: */[
        cell[0],
        /* [] */0
      ];
      prec[1] = cell$1;
      _prec = cell$1;
      _cell = cell[1];
      _n = n - 1 | 0;
      continue ;
    } else {
      return false;
    }
  }}

function splitAtAux(_n, _cell, _prec) {
  while(true) {
    var prec = _prec;
    var cell = _cell;
    var n = _n;
    if (n === 0) {
      return cell;
    } else if (cell) {
      var cell$1 = /* :: */[
        cell[0],
        /* [] */0
      ];
      prec[1] = cell$1;
      _prec = cell$1;
      _cell = cell[1];
      _n = n - 1 | 0;
      continue ;
    } else {
      return undefined;
    }
  }}

function take(lst, n) {
  if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return /* [] */0;
  } else if (lst) {
    var cell = /* :: */[
      lst[0],
      /* [] */0
    ];
    var has = takeAux(n - 1 | 0, lst[1], cell);
    if (has) {
      return cell;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

function drop(lst, n) {
  if (n < 0) {
    return undefined;
  } else {
    var _l = lst;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l = _l;
      if (n$1 === 0) {
        return l;
      } else if (l) {
        _n = n$1 - 1 | 0;
        _l = l[1];
        continue ;
      } else {
        return undefined;
      }
    }  }
}

function splitAt(lst, n) {
  if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return /* tuple */[
            /* [] */0,
            lst
          ];
  } else if (lst) {
    var cell = /* :: */[
      lst[0],
      /* [] */0
    ];
    var rest = splitAtAux(n - 1 | 0, lst[1], cell);
    if (rest !== undefined) {
      return /* tuple */[
              cell,
              rest
            ];
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

function concat$5(xs, ys) {
  if (xs) {
    var cell = /* :: */[
      xs[0],
      /* [] */0
    ];
    copyAuxCont(xs[1], cell)[1] = ys;
    return cell;
  } else {
    return ys;
  }
}

function mapU$2(xs, f) {
  if (xs) {
    var cell = /* :: */[
      f(xs[0]),
      /* [] */0
    ];
    copyAuxWithMap(xs[1], cell, f);
    return cell;
  } else {
    return /* [] */0;
  }
}

function map$8(xs, f) {
  return mapU$2(xs, curry.__1(f));
}

function zipByU$1(l1, l2, f) {
  if (l1 && l2) {
    var cell = /* :: */[
      f(l1[0], l2[0]),
      /* [] */0
    ];
    copyAuxWithMap2(f, l1[1], l2[1], cell);
    return cell;
  } else {
    return /* [] */0;
  }
}

function zipBy$1(l1, l2, f) {
  return zipByU$1(l1, l2, curry.__2(f));
}

function mapWithIndexU$1(xs, f) {
  if (xs) {
    var cell = /* :: */[
      f(0, xs[0]),
      /* [] */0
    ];
    copyAuxWithMapI(f, 1, xs[1], cell);
    return cell;
  } else {
    return /* [] */0;
  }
}

function mapWithIndex$1(xs, f) {
  return mapWithIndexU$1(xs, curry.__2(f));
}

function makeByU$1(n, f) {
  if (n <= 0) {
    return /* [] */0;
  } else {
    var headX = /* :: */[
      f(0),
      /* [] */0
    ];
    var cur = headX;
    var i = 1;
    while(i < n) {
      var v = /* :: */[
        f(i),
        /* [] */0
      ];
      cur[1] = v;
      cur = v;
      i = i + 1 | 0;
    }    return headX;
  }
}

function makeBy$1(n, f) {
  return makeByU$1(n, curry.__1(f));
}

function make$3(n, v) {
  if (n <= 0) {
    return /* [] */0;
  } else {
    var headX = /* :: */[
      v,
      /* [] */0
    ];
    var cur = headX;
    var i = 1;
    while(i < n) {
      var v$1 = /* :: */[
        v,
        /* [] */0
      ];
      cur[1] = v$1;
      cur = v$1;
      i = i + 1 | 0;
    }    return headX;
  }
}

function length$1(xs) {
  var _x = xs;
  var _acc = 0;
  while(true) {
    var acc = _acc;
    var x = _x;
    if (x) {
      _acc = acc + 1 | 0;
      _x = x[1];
      continue ;
    } else {
      return acc;
    }
  }}

function fillAux(arr, _i, _x) {
  while(true) {
    var x = _x;
    var i = _i;
    if (x) {
      arr[i] = x[0];
      _x = x[1];
      _i = i + 1 | 0;
      continue ;
    } else {
      return /* () */0;
    }
  }}

function fromArray$1(a) {
  var a$1 = a;
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a$1[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
    }
  }}

function toArray(x) {
  var len = length$1(x);
  var arr = new Array(len);
  fillAux(arr, 0, x);
  return arr;
}

function shuffle$1(xs) {
  var v = toArray(xs);
  belt_Array.shuffleInPlace(v);
  return fromArray$1(v);
}

function reverseConcat(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
    } else {
      return l2;
    }
  }}

function reverse$1(l) {
  return reverseConcat(l, /* [] */0);
}

function flattenAux(_prec, _xs) {
  while(true) {
    var xs = _xs;
    var prec = _prec;
    if (xs) {
      _xs = xs[1];
      _prec = copyAuxCont(xs[0], prec);
      continue ;
    } else {
      prec[1] = /* [] */0;
      return /* () */0;
    }
  }}

function flatten$1(_xs) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var match = xs[0];
      if (match) {
        var cell = /* :: */[
          match[0],
          /* [] */0
        ];
        flattenAux(copyAuxCont(match[1], cell), xs[1]);
        return cell;
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return /* [] */0;
    }
  }}

function concatMany$1(xs) {
  var len = xs.length;
  if (len !== 1) {
    if (len !== 0) {
      var len$1 = xs.length;
      var v = xs[len$1 - 1 | 0];
      for(var i = len$1 - 2 | 0; i >= 0; --i){
        v = concat$5(xs[i], v);
      }
      return v;
    } else {
      return /* [] */0;
    }
  } else {
    return xs[0];
  }
}

function mapReverseU(l, f) {
  var f$1 = f;
  var _accu = /* [] */0;
  var _xs = l;
  while(true) {
    var xs = _xs;
    var accu = _accu;
    if (xs) {
      _xs = xs[1];
      _accu = /* :: */[
        f$1(xs[0]),
        accu
      ];
      continue ;
    } else {
      return accu;
    }
  }}

function mapReverse(l, f) {
  return mapReverseU(l, curry.__1(f));
}

function forEachU$1(_xs, f) {
  while(true) {
    var xs = _xs;
    if (xs) {
      f(xs[0]);
      _xs = xs[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function forEach$1(xs, f) {
  return forEachU$1(xs, curry.__1(f));
}

function forEachWithIndexU$1(l, f) {
  var _xs = l;
  var _i = 0;
  var f$1 = f;
  while(true) {
    var i = _i;
    var xs = _xs;
    if (xs) {
      f$1(i, xs[0]);
      _i = i + 1 | 0;
      _xs = xs[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function forEachWithIndex$1(l, f) {
  return forEachWithIndexU$1(l, curry.__2(f));
}

function reduceU$1(_l, _accu, f) {
  while(true) {
    var accu = _accu;
    var l = _l;
    if (l) {
      _accu = f(accu, l[0]);
      _l = l[1];
      continue ;
    } else {
      return accu;
    }
  }}

function reduce$1(l, accu, f) {
  return reduceU$1(l, accu, curry.__2(f));
}

function reduceReverseUnsafeU(l, accu, f) {
  if (l) {
    return f(reduceReverseUnsafeU(l[1], accu, f), l[0]);
  } else {
    return accu;
  }
}

function reduceReverseU$1(l, acc, f) {
  var len = length$1(l);
  if (len < 1000) {
    return reduceReverseUnsafeU(l, acc, f);
  } else {
    return belt_Array.reduceReverseU(toArray(l), acc, f);
  }
}

function reduceReverse$1(l, accu, f) {
  return reduceReverseU$1(l, accu, curry.__2(f));
}

function reduceWithIndexU$1(l, acc, f) {
  var _l = l;
  var _acc = acc;
  var f$1 = f;
  var _i = 0;
  while(true) {
    var i = _i;
    var acc$1 = _acc;
    var l$1 = _l;
    if (l$1) {
      _i = i + 1 | 0;
      _acc = f$1(acc$1, l$1[0], i);
      _l = l$1[1];
      continue ;
    } else {
      return acc$1;
    }
  }}

function reduceWithIndex$1(l, acc, f) {
  return reduceWithIndexU$1(l, acc, curry.__3(f));
}

function mapReverse2U(l1, l2, f) {
  var _l1 = l1;
  var _l2 = l2;
  var _accu = /* [] */0;
  var f$1 = f;
  while(true) {
    var accu = _accu;
    var l2$1 = _l2;
    var l1$1 = _l1;
    if (l1$1 && l2$1) {
      _accu = /* :: */[
        f$1(l1$1[0], l2$1[0]),
        accu
      ];
      _l2 = l2$1[1];
      _l1 = l1$1[1];
      continue ;
    } else {
      return accu;
    }
  }}

function mapReverse2(l1, l2, f) {
  return mapReverse2U(l1, l2, curry.__2(f));
}

function forEach2U(_l1, _l2, f) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1 && l2) {
      f(l1[0], l2[0]);
      _l2 = l2[1];
      _l1 = l1[1];
      continue ;
    } else {
      return /* () */0;
    }
  }}

function forEach2(l1, l2, f) {
  return forEach2U(l1, l2, curry.__2(f));
}

function reduce2U(_l1, _l2, _accu, f) {
  while(true) {
    var accu = _accu;
    var l2 = _l2;
    var l1 = _l1;
    if (l1 && l2) {
      _accu = f(accu, l1[0], l2[0]);
      _l2 = l2[1];
      _l1 = l1[1];
      continue ;
    } else {
      return accu;
    }
  }}

function reduce2(l1, l2, acc, f) {
  return reduce2U(l1, l2, acc, curry.__3(f));
}

function reduceReverse2UnsafeU(l1, l2, accu, f) {
  if (l1 && l2) {
    return f(reduceReverse2UnsafeU(l1[1], l2[1], accu, f), l1[0], l2[0]);
  } else {
    return accu;
  }
}

function reduceReverse2U$1(l1, l2, acc, f) {
  var len = length$1(l1);
  if (len < 1000) {
    return reduceReverse2UnsafeU(l1, l2, acc, f);
  } else {
    return belt_Array.reduceReverse2U(toArray(l1), toArray(l2), acc, f);
  }
}

function reduceReverse2$1(l1, l2, acc, f) {
  return reduceReverse2U$1(l1, l2, acc, curry.__3(f));
}

function everyU$1(_xs, p) {
  while(true) {
    var xs = _xs;
    if (xs) {
      if (p(xs[0])) {
        _xs = xs[1];
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }}

function every$1(xs, p) {
  return everyU$1(xs, curry.__1(p));
}

function someU$1(_xs, p) {
  while(true) {
    var xs = _xs;
    if (xs) {
      if (p(xs[0])) {
        return true;
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function some$2(xs, p) {
  return someU$1(xs, curry.__1(p));
}

function every2U$1(_l1, _l2, p) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1 && l2) {
      if (p(l1[0], l2[0])) {
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }}

function every2$1(l1, l2, p) {
  return every2U$1(l1, l2, curry.__2(p));
}

function cmpByLength(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
      } else {
        return 1;
      }
    } else if (l2) {
      return -1;
    } else {
      return 0;
    }
  }}

function cmpU$2(_l1, _l2, p) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        var c = p(l1[0], l2[0]);
        if (c === 0) {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
        } else {
          return c;
        }
      } else {
        return 1;
      }
    } else if (l2) {
      return -1;
    } else {
      return 0;
    }
  }}

function cmp$2(l1, l2, f) {
  return cmpU$2(l1, l2, curry.__2(f));
}

function eqU$2(_l1, _l2, p) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2 && p(l1[0], l2[0])) {
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
      } else {
        return false;
      }
    } else if (l2) {
      return false;
    } else {
      return true;
    }
  }}

function eq$3(l1, l2, f) {
  return eqU$2(l1, l2, curry.__2(f));
}

function some2U$1(_l1, _l2, p) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1 && l2) {
      if (p(l1[0], l2[0])) {
        return true;
      } else {
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function some2$1(l1, l2, p) {
  return some2U$1(l1, l2, curry.__2(p));
}

function hasU(_xs, x, eq) {
  while(true) {
    var xs = _xs;
    if (xs) {
      if (eq(xs[0], x)) {
        return true;
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function has(xs, x, eq) {
  return hasU(xs, x, curry.__2(eq));
}

function getAssocU(_xs, x, eq) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var match = xs[0];
      if (eq(match[0], x)) {
        return caml_option.some(match[1]);
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return undefined;
    }
  }}

function getAssoc(xs, x, eq) {
  return getAssocU(xs, x, curry.__2(eq));
}

function hasAssocU(_xs, x, eq) {
  while(true) {
    var xs = _xs;
    if (xs) {
      if (eq(xs[0][0], x)) {
        return true;
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return false;
    }
  }}

function hasAssoc(xs, x, eq) {
  return hasAssocU(xs, x, curry.__2(eq));
}

function removeAssocU(xs, x, eq) {
  if (xs) {
    var l = xs[1];
    var pair = xs[0];
    if (eq(pair[0], x)) {
      return l;
    } else {
      var cell = /* :: */[
        pair,
        /* [] */0
      ];
      var removed = removeAssocAuxWithMap(l, x, cell, eq);
      if (removed) {
        return cell;
      } else {
        return xs;
      }
    }
  } else {
    return /* [] */0;
  }
}

function removeAssoc(xs, x, eq) {
  return removeAssocU(xs, x, curry.__2(eq));
}

function setAssocU(xs, x, k, eq) {
  if (xs) {
    var l = xs[1];
    var pair = xs[0];
    if (eq(pair[0], x)) {
      return /* :: */[
              /* tuple */[
                x,
                k
              ],
              l
            ];
    } else {
      var cell = /* :: */[
        pair,
        /* [] */0
      ];
      var replaced = setAssocAuxWithMap(l, x, k, cell, eq);
      if (replaced) {
        return cell;
      } else {
        return /* :: */[
                /* tuple */[
                  x,
                  k
                ],
                xs
              ];
      }
    }
  } else {
    return /* :: */[
            /* tuple */[
              x,
              k
            ],
            /* [] */0
          ];
  }
}

function setAssoc(xs, x, k, eq) {
  return setAssocU(xs, x, k, curry.__2(eq));
}

function sortU(xs, cmp) {
  var arr = toArray(xs);
  belt_SortArray.stableSortInPlaceByU(arr, cmp);
  return fromArray$1(arr);
}

function sort$2(xs, cmp) {
  return sortU(xs, curry.__2(cmp));
}

function getByU(_xs, p) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var x = xs[0];
      if (p(x)) {
        return caml_option.some(x);
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return undefined;
    }
  }}

function getBy(xs, p) {
  return getByU(xs, curry.__1(p));
}

function keepU$1(_xs, p) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var t = xs[1];
      var h = xs[0];
      if (p(h)) {
        var cell = /* :: */[
          h,
          /* [] */0
        ];
        copyAuxWitFilter(p, t, cell);
        return cell;
      } else {
        _xs = t;
        continue ;
      }
    } else {
      return /* [] */0;
    }
  }}

function keep$1(xs, p) {
  return keepU$1(xs, curry.__1(p));
}

function keepWithIndexU$1(xs, p) {
  var _xs = xs;
  var p$1 = p;
  var _i = 0;
  while(true) {
    var i = _i;
    var xs$1 = _xs;
    if (xs$1) {
      var t = xs$1[1];
      var h = xs$1[0];
      if (p$1(h, i)) {
        var cell = /* :: */[
          h,
          /* [] */0
        ];
        copyAuxWithFilterIndex(p$1, t, cell, i + 1 | 0);
        return cell;
      } else {
        _i = i + 1 | 0;
        _xs = t;
        continue ;
      }
    } else {
      return /* [] */0;
    }
  }}

function keepWithIndex$1(xs, p) {
  return keepWithIndexU$1(xs, curry.__2(p));
}

function keepMapU$1(_xs, p) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var t = xs[1];
      var match = p(xs[0]);
      if (match !== undefined) {
        var cell = /* :: */[
          caml_option.valFromOption(match),
          /* [] */0
        ];
        copyAuxWitFilterMap(p, t, cell);
        return cell;
      } else {
        _xs = t;
        continue ;
      }
    } else {
      return /* [] */0;
    }
  }}

function keepMap$1(xs, p) {
  return keepMapU$1(xs, curry.__1(p));
}

function partitionU$1(l, p) {
  if (l) {
    var h = l[0];
    var nextX = /* :: */[
      h,
      /* [] */0
    ];
    var nextY = /* :: */[
      h,
      /* [] */0
    ];
    var b = p(h);
    partitionAux(p, l[1], nextX, nextY);
    if (b) {
      return /* tuple */[
              nextX,
              nextY[1]
            ];
    } else {
      return /* tuple */[
              nextX[1],
              nextY
            ];
    }
  } else {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
}

function partition$2(l, p) {
  return partitionU$1(l, curry.__1(p));
}

function unzip$1(xs) {
  if (xs) {
    var match = xs[0];
    var cellX = /* :: */[
      match[0],
      /* [] */0
    ];
    var cellY = /* :: */[
      match[1],
      /* [] */0
    ];
    splitAux(xs[1], cellX, cellY);
    return /* tuple */[
            cellX,
            cellY
          ];
  } else {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
}

function zip$1(l1, l2) {
  if (l1 && l2) {
    var cell = /* :: */[
      /* tuple */[
        l1[0],
        l2[0]
      ],
      /* [] */0
    ];
    zipAux(l1[1], l2[1], cell);
    return cell;
  } else {
    return /* [] */0;
  }
}

var size = length$1;

var filter$1 = keep$1;

var filterWithIndex = keepWithIndex$1;

var length_1$1 = length$1;
var size_1 = size;
var head_1 = head;
var headExn_1 = headExn;
var tail_1 = tail;
var tailExn_1 = tailExn;
var add_1$1 = add$1;
var get_1$4 = get$4;
var getExn_1$2 = getExn$2;
var make_1$3 = make$3;
var makeByU_1$1 = makeByU$1;
var makeBy_1$1 = makeBy$1;
var shuffle_1$1 = shuffle$1;
var drop_1 = drop;
var take_1 = take;
var splitAt_1 = splitAt;
var concat_1$5 = concat$5;
var concatMany_1$1 = concatMany$1;
var reverseConcat_1 = reverseConcat;
var flatten_1$1 = flatten$1;
var mapU_1$2 = mapU$2;
var map_1$8 = map$8;
var zip_1$1 = zip$1;
var zipByU_1$1 = zipByU$1;
var zipBy_1$1 = zipBy$1;
var mapWithIndexU_1$1 = mapWithIndexU$1;
var mapWithIndex_1$1 = mapWithIndex$1;
var fromArray_1$1 = fromArray$1;
var toArray_1 = toArray;
var reverse_1$1 = reverse$1;
var mapReverseU_1 = mapReverseU;
var mapReverse_1 = mapReverse;
var forEachU_1$1 = forEachU$1;
var forEach_1$1 = forEach$1;
var forEachWithIndexU_1$1 = forEachWithIndexU$1;
var forEachWithIndex_1$1 = forEachWithIndex$1;
var reduceU_1$1 = reduceU$1;
var reduce_1$1 = reduce$1;
var reduceWithIndexU_1$1 = reduceWithIndexU$1;
var reduceWithIndex_1$1 = reduceWithIndex$1;
var reduceReverseU_1$1 = reduceReverseU$1;
var reduceReverse_1$1 = reduceReverse$1;
var mapReverse2U_1 = mapReverse2U;
var mapReverse2_1 = mapReverse2;
var forEach2U_1 = forEach2U;
var forEach2_1 = forEach2;
var reduce2U_1 = reduce2U;
var reduce2_1 = reduce2;
var reduceReverse2U_1$1 = reduceReverse2U$1;
var reduceReverse2_1$1 = reduceReverse2$1;
var everyU_1$1 = everyU$1;
var every_1$1 = every$1;
var someU_1$1 = someU$1;
var some_1$2 = some$2;
var every2U_1$1 = every2U$1;
var every2_1$1 = every2$1;
var some2U_1$1 = some2U$1;
var some2_1$1 = some2$1;
var cmpByLength_1 = cmpByLength;
var cmpU_1$2 = cmpU$2;
var cmp_1$2 = cmp$2;
var eqU_1$2 = eqU$2;
var eq_1$3 = eq$3;
var hasU_1 = hasU;
var has_1 = has;
var getByU_1 = getByU;
var getBy_1 = getBy;
var keepU_1$1 = keepU$1;
var keep_1$1 = keep$1;
var filter_1$1 = filter$1;
var keepWithIndexU_1$1 = keepWithIndexU$1;
var keepWithIndex_1$1 = keepWithIndex$1;
var filterWithIndex_1 = filterWithIndex;
var keepMapU_1$1 = keepMapU$1;
var keepMap_1$1 = keepMap$1;
var partitionU_1$1 = partitionU$1;
var partition_1$2 = partition$2;
var unzip_1$1 = unzip$1;
var getAssocU_1 = getAssocU;
var getAssoc_1 = getAssoc;
var hasAssocU_1 = hasAssocU;
var hasAssoc_1 = hasAssoc;
var removeAssocU_1 = removeAssocU;
var removeAssoc_1 = removeAssoc;
var setAssocU_1 = setAssocU;
var setAssoc_1 = setAssoc;
var sortU_1 = sortU;
var sort_1$2 = sort$2;
/* No side effect */

var belt_List = {
	length: length_1$1,
	size: size_1,
	head: head_1,
	headExn: headExn_1,
	tail: tail_1,
	tailExn: tailExn_1,
	add: add_1$1,
	get: get_1$4,
	getExn: getExn_1$2,
	make: make_1$3,
	makeByU: makeByU_1$1,
	makeBy: makeBy_1$1,
	shuffle: shuffle_1$1,
	drop: drop_1,
	take: take_1,
	splitAt: splitAt_1,
	concat: concat_1$5,
	concatMany: concatMany_1$1,
	reverseConcat: reverseConcat_1,
	flatten: flatten_1$1,
	mapU: mapU_1$2,
	map: map_1$8,
	zip: zip_1$1,
	zipByU: zipByU_1$1,
	zipBy: zipBy_1$1,
	mapWithIndexU: mapWithIndexU_1$1,
	mapWithIndex: mapWithIndex_1$1,
	fromArray: fromArray_1$1,
	toArray: toArray_1,
	reverse: reverse_1$1,
	mapReverseU: mapReverseU_1,
	mapReverse: mapReverse_1,
	forEachU: forEachU_1$1,
	forEach: forEach_1$1,
	forEachWithIndexU: forEachWithIndexU_1$1,
	forEachWithIndex: forEachWithIndex_1$1,
	reduceU: reduceU_1$1,
	reduce: reduce_1$1,
	reduceWithIndexU: reduceWithIndexU_1$1,
	reduceWithIndex: reduceWithIndex_1$1,
	reduceReverseU: reduceReverseU_1$1,
	reduceReverse: reduceReverse_1$1,
	mapReverse2U: mapReverse2U_1,
	mapReverse2: mapReverse2_1,
	forEach2U: forEach2U_1,
	forEach2: forEach2_1,
	reduce2U: reduce2U_1,
	reduce2: reduce2_1,
	reduceReverse2U: reduceReverse2U_1$1,
	reduceReverse2: reduceReverse2_1$1,
	everyU: everyU_1$1,
	every: every_1$1,
	someU: someU_1$1,
	some: some_1$2,
	every2U: every2U_1$1,
	every2: every2_1$1,
	some2U: some2U_1$1,
	some2: some2_1$1,
	cmpByLength: cmpByLength_1,
	cmpU: cmpU_1$2,
	cmp: cmp_1$2,
	eqU: eqU_1$2,
	eq: eq_1$3,
	hasU: hasU_1,
	has: has_1,
	getByU: getByU_1,
	getBy: getBy_1,
	keepU: keepU_1$1,
	keep: keep_1$1,
	filter: filter_1$1,
	keepWithIndexU: keepWithIndexU_1$1,
	keepWithIndex: keepWithIndex_1$1,
	filterWithIndex: filterWithIndex_1,
	keepMapU: keepMapU_1$1,
	keepMap: keepMap_1$1,
	partitionU: partitionU_1$1,
	partition: partition_1$2,
	unzip: unzip_1$1,
	getAssocU: getAssocU_1,
	getAssoc: getAssoc_1,
	hasAssocU: hasAssocU_1,
	hasAssoc: hasAssoc_1,
	removeAssocU: removeAssocU_1,
	removeAssoc: removeAssoc_1,
	setAssocU: setAssocU_1,
	setAssoc: setAssoc_1,
	sortU: sortU_1,
	sort: sort_1$2
};

function createAvatarUrl(key) {
  return "https://robohash.org/" + (String(key) + "?size=128x128");
}

function getNewListIndex(items) {
  return list.length(items) + 1 | 0;
}

function createUser(id, name) {
  return /* record */[
          /* id */id,
          /* name */name,
          /* avatarUrl */createAvatarUrl(name),
          /* isAvailable */false,
          /* isTyping */false
        ];
}

function createMessage(id, text, senderId) {
  return /* record */[
          /* id */id,
          /* creationDate */Date.now(),
          /* senderId */senderId,
          /* text */text
        ];
}

function getOrCreateUser(name, users) {
  var findUserByName = function (x) {
    return x[/* name */1] === name;
  };
  var existingUser = belt_List.getBy(users, findUserByName);
  if (existingUser !== undefined) {
    return /* tuple */[
            existingUser,
            users
          ];
  } else {
    var user = createUser(list.length(users) + 1 | 0, name);
    return /* tuple */[
            user,
            /* :: */[
              user,
              users
            ]
          ];
  }
}

function changeUserAvailability(isAvailable, id, users) {
  var findUserById = function (x) {
    return x[/* id */0] === id;
  };
  var existingUser = belt_List.getBy(users, findUserById);
  if (existingUser !== undefined) {
    var user = existingUser;
    return /* :: */[
            /* record */[
              /* id */user[/* id */0],
              /* name */user[/* name */1],
              /* avatarUrl */user[/* avatarUrl */2],
              /* isAvailable */isAvailable,
              /* isTyping */user[/* isTyping */4]
            ],
            list.filter((function (x) {
                      return x[/* id */0] !== id;
                    }))(users)
          ];
  } else {
    return users;
  }
}

function addMessage(text, senderId, messages) {
  var message = createMessage(list.length(messages) + 1 | 0, text, senderId);
  return /* tuple */[
          message,
          /* :: */[
            message,
            messages
          ]
        ];
}

var createAvatarUrl_1 = createAvatarUrl;
var getNewListIndex_1 = getNewListIndex;
var createUser_1 = createUser;
var createMessage_1 = createMessage;
var getOrCreateUser_1 = getOrCreateUser;
var changeUserAvailability_1 = changeUserAvailability;
var addMessage_1 = addMessage;
/* No side effect */

var ChatRepoUtil_bs = {
	createAvatarUrl: createAvatarUrl_1,
	getNewListIndex: getNewListIndex_1,
	createUser: createUser_1,
	createMessage: createMessage_1,
	getOrCreateUser: getOrCreateUser_1,
	changeUserAvailability: changeUserAvailability_1,
	addMessage: addMessage_1
};

var initialChatState = /* record */[
  /* users : [] */0,
  /* messages : [] */0
];

var chatState = /* record */[/* contents */initialChatState];

function getOrCreateUser$1(name) {
  var match = ChatRepoUtil_bs.getOrCreateUser(name, chatState[/* contents */0][/* users */0]);
  var init = chatState[/* contents */0];
  chatState[0] = /* record */[
    /* users */match[1],
    /* messages */init[/* messages */1]
  ];
  return match[0];
}

function setUserAvailability(isAvailable, id) {
  var init = chatState[/* contents */0];
  chatState[0] = /* record */[
    /* users */ChatRepoUtil_bs.changeUserAvailability(isAvailable, id, chatState[/* contents */0][/* users */0]),
    /* messages */init[/* messages */1]
  ];
  return /* () */0;
}

function addMessage$1(text, senderId) {
  var match = ChatRepoUtil_bs.addMessage(text, senderId, chatState[/* contents */0][/* messages */1]);
  var init = chatState[/* contents */0];
  chatState[0] = /* record */[
    /* users */init[/* users */0],
    /* messages */match[1]
  ];
  return match[0];
}

function getState(param) {
  return chatState[/* contents */0];
}

function resetState(param) {
  chatState[0] = initialChatState;
  return initialChatState;
}

var getOrCreateUser_1$1 = getOrCreateUser$1;
var setUserAvailability_1 = setUserAvailability;
var addMessage_1$1 = addMessage$1;
var getState_1 = getState;
var resetState_1 = resetState;
/* No side effect */

var ChatRepository_bs = {
	getOrCreateUser: getOrCreateUser_1$1,
	setUserAvailability: setUserAvailability_1,
	addMessage: addMessage_1$1,
	getState: getState_1,
	resetState: resetState_1
};

function processClientCommand(auth, clientCommand) {
  if (auth) {
    var user = auth[0];
    if (typeof clientCommand === "number") {
      ChatRepository_bs.setUserAvailability(false, user[/* id */0]);
      return /* tuple */[
              /* Unauthenticated */0,
              /* UserUnavailable */block.__(2, [user]),
              undefined
            ];
    } else if (clientCommand.tag) {
      return /* tuple */[
              /* Authenticated */[user],
              undefined,
              undefined
            ];
    } else {
      return /* tuple */[
              /* Authenticated */[user],
              /* MessagePublished */block.__(3, [ChatRepository_bs.addMessage(clientCommand[0], user[/* id */0])]),
              undefined
            ];
    }
  } else if (typeof clientCommand === "number" || !clientCommand.tag) {
    return /* tuple */[
            /* Unauthenticated */0,
            undefined,
            undefined
          ];
  } else {
    var user$1 = ChatRepository_bs.getOrCreateUser(clientCommand[0]);
    ChatRepository_bs.setUserAvailability(true, user$1[/* id */0]);
    return /* tuple */[
            /* Authenticated */[user$1],
            /* UserAvailable */block.__(1, [user$1]),
            /* LoginSuccessful */block.__(0, [
                ChatRepository_bs.getState(/* () */0),
                user$1[/* id */0]
              ])
          ];
  }
}

var processClientCommand_1 = processClientCommand;
/* No side effect */

var ClientCommandProcessor_bs = {
	processClientCommand: processClientCommand_1
};

function addDummyData(param) {
  var dummyUser = ChatRepository_bs.getOrCreateUser("Dummy user");
  ChatRepository_bs.addMessage("Are you talking to me?", dummyUser[/* id */0]);
  ChatRepository_bs.addMessage("Well I'm the only one here.", dummyUser[/* id */0]);
  return ChatRepository_bs.setUserAvailability(false, dummyUser[/* id */0]);
}

addDummyData(/* () */0);

console.log("Starting the server...");

SocketIO_bs.startServer((function (authenticationState, clientCommand, broadcast, send) {
        var match = ClientCommandProcessor_bs.processClientCommand(authenticationState, clientCommand);
        belt_Option.map(match[1], broadcast);
        belt_Option.map(match[2], send);
        return match[0];
      }));

var addDummyData_1 = addDummyData;
/*  Not a pure module */

var Index_bs = {
	addDummyData: addDummyData_1
};

exports.default = Index_bs;
exports.addDummyData = addDummyData_1;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var http = require('http');

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
/*  Not a pure module */

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

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}
/* No side effect */

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
      _args = caml_array_sub(args, arity, -d | 0);
      _f = f.apply(null, caml_array_sub(args, 0, arity));
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
/* No side effect */

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
/* No side effect */

function mapU(opt, f) {
  if (opt !== undefined) {
    return some(f(valFromOption(opt)));
  }
  
}

function map(opt, f) {
  return mapU(opt, __1(f));
}
/* No side effect */

function __(tag, block) {
  block.tag = tag;
  return block;
}
/* No side effect */

/* No side effect */

/* No side effect */

/* node_std_output Not a pure module */

/* No side effect */

/* imul Not a pure module */

/* repeat Not a pure module */

/* two_ptr_32_dbl Not a pure module */

/* float_of_string Not a pure module */

/* No side effect */

var id = /* record */[/* contents */0];

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

function isCamlExceptionOrOpenVariant(e) {
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
/* No side effect */

/* No side effect */

/* No side effect */

var Exit = create("Pervasives.Exit");
/* No side effect */

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

function map$1(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map$1(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

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
          if (_1(p, x)) {
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

var filter = find_all;
/* No side effect */

var $$Error = create("Js_exn.Error");

function internalToOCamlException(e) {
  if (isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}
/* No side effect */

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
    var a = caml_make_vect(list_length(0, l), l[0]);
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

var Bottom = create("Array.Bottom");
/* No side effect */

function _isInteger(value) {
  if (isFinite(value)) {
    return Math.floor(value) === value;
  } else {
    return false;
  }
}

var DecodeError = create("Json_decode.DecodeError");

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

function field(key, decode, json) {
  if (typeof json === "object" && !Array.isArray(json) && json !== null) {
    var match = json[key];
    if (match !== undefined) {
      try {
        return _1(decode, match);
      }
      catch (raw_exn){
        var exn = internalToOCamlException(raw_exn);
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
/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

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
/* unsafeDeleteKey Not a pure module */

function nullable$1(encode, param) {
  if (param !== undefined) {
    return _1(encode, valFromOption(param));
  } else {
    return null;
  }
}

var object_ = fromList;

function list$1(encode, l) {
  return of_list(map$1(encode, l));
}
/* Js_dict Not a pure module */

/**
 * Module dependencies.
 */

var http$1 = require('http');
var read = require('fs').readFileSync;
var path = require('path');
var exists$1 = require('fs').existsSync;
var engine = require('engine.io');
var clientVersion = require('socket.io-client/package.json').version;
var Client = require('./client');
var Emitter = require('events').EventEmitter;
var Namespace = require('./namespace');
var ParentNamespace = require('./parent-namespace');
var Adapter = require('socket.io-adapter');
var parser = require('socket.io-parser');
var debug = require('debug')('socket.io:server');
var url = require('url');

/**
 * Module exports.
 */

module.exports = Server;

/**
 * Socket.IO client source.
 */

var clientSource = undefined;
var clientSourceMap = undefined;

/**
 * Server constructor.
 *
 * @param {http.Server|Number|Object} srv http server, port or options
 * @param {Object} [opts]
 * @api public
 */

function Server(srv, opts){
  if (!(this instanceof Server)) return new Server(srv, opts);
  if ('object' == typeof srv && srv instanceof Object && !srv.listen) {
    opts = srv;
    srv = null;
  }
  opts = opts || {};
  this.nsps = {};
  this.parentNsps = new Map();
  this.path(opts.path || '/socket.io');
  this.serveClient(false !== opts.serveClient);
  this.parser = opts.parser || parser;
  this.encoder = new this.parser.Encoder();
  this.adapter(opts.adapter || Adapter);
  this.origins(opts.origins || '*:*');
  this.sockets = this.of('/');
  if (srv) this.attach(srv, opts);
}

/**
 * Server request verification function, that checks for allowed origins
 *
 * @param {http.IncomingMessage} req request
 * @param {Function} fn callback to be called with the result: `fn(err, success)`
 */

Server.prototype.checkRequest = function(req, fn) {
  var origin = req.headers.origin || req.headers.referer;

  // file:// URLs produce a null Origin which can't be authorized via echo-back
  if ('null' == origin || null == origin) origin = '*';

  if (!!origin && typeof(this._origins) == 'function') return this._origins(origin, fn);
  if (this._origins.indexOf('*:*') !== -1) return fn(null, true);
  if (origin) {
    try {
      var parts = url.parse(origin);
      var defaultPort = 'https:' == parts.protocol ? 443 : 80;
      parts.port = parts.port != null
        ? parts.port
        : defaultPort;
      var ok =
        ~this._origins.indexOf(parts.protocol + '//' + parts.hostname + ':' + parts.port) ||
        ~this._origins.indexOf(parts.hostname + ':' + parts.port) ||
        ~this._origins.indexOf(parts.hostname + ':*') ||
        ~this._origins.indexOf('*:' + parts.port);
      debug('origin %s is %svalid', origin, !!ok ? '' : 'not ');
      return fn(null, !!ok);
    } catch (ex) {
    }
  }
  fn(null, false);
};

/**
 * Sets/gets whether client code is being served.
 *
 * @param {Boolean} v whether to serve client code
 * @return {Server|Boolean} self when setting or value when getting
 * @api public
 */

Server.prototype.serveClient = function(v){
  if (!arguments.length) return this._serveClient;
  this._serveClient = v;
  var resolvePath = function(file){
    var filepath = path.resolve(__dirname, './../../', file);
    if (exists$1(filepath)) {
      return filepath;
    }
    return require.resolve(file);
  };
  if (v && !clientSource) {
    clientSource = read(resolvePath( 'socket.io-client/dist/socket.io.js'), 'utf-8');
    try {
      clientSourceMap = read(resolvePath( 'socket.io-client/dist/socket.io.js.map'), 'utf-8');
    } catch(err) {
      debug('could not load sourcemap file');
    }
  }
  return this;
};

/**
 * Old settings for backwards compatibility
 */

var oldSettings = {
  "transports": "transports",
  "heartbeat timeout": "pingTimeout",
  "heartbeat interval": "pingInterval",
  "destroy buffer size": "maxHttpBufferSize"
};

/**
 * Backwards compatibility.
 *
 * @api public
 */

Server.prototype.set = function(key, val){
  if ('authorization' == key && val) {
    this.use(function(socket, next) {
      val(socket.request, function(err, authorized) {
        if (err) return next(new Error(err));
        if (!authorized) return next(new Error('Not authorized'));
        next();
      });
    });
  } else if ('origins' == key && val) {
    this.origins(val);
  } else if ('resource' == key) {
    this.path(val);
  } else if (oldSettings[key] && this.eio[oldSettings[key]]) {
    this.eio[oldSettings[key]] = val;
  } else {
    console.error('Option %s is not valid. Please refer to the README.', key);
  }

  return this;
};

/**
 * Executes the middleware for an incoming namespace not already created on the server.
 *
 * @param {String} name name of incoming namespace
 * @param {Object} query the query parameters
 * @param {Function} fn callback
 * @api private
 */

Server.prototype.checkNamespace = function(name, query, fn){
  if (this.parentNsps.size === 0) return fn(false);

  const keysIterator = this.parentNsps.keys();

  const run = () => {
    let nextFn = keysIterator.next();
    if (nextFn.done) {
      return fn(false);
    }
    nextFn.value(name, query, (err, allow) => {
      if (err || !allow) {
        run();
      } else {
        fn(this.parentNsps.get(nextFn.value).createChild(name));
      }
    });
  };

  run();
};

/**
 * Sets the client serving path.
 *
 * @param {String} v pathname
 * @return {Server|String} self when setting or value when getting
 * @api public
 */

Server.prototype.path = function(v){
  if (!arguments.length) return this._path;
  this._path = v.replace(/\/$/, '');
  return this;
};

/**
 * Sets the adapter for rooms.
 *
 * @param {Adapter} v pathname
 * @return {Server|Adapter} self when setting or value when getting
 * @api public
 */

Server.prototype.adapter = function(v){
  if (!arguments.length) return this._adapter;
  this._adapter = v;
  for (var i in this.nsps) {
    if (this.nsps.hasOwnProperty(i)) {
      this.nsps[i].initAdapter();
    }
  }
  return this;
};

/**
 * Sets the allowed origins for requests.
 *
 * @param {String|String[]} v origins
 * @return {Server|Adapter} self when setting or value when getting
 * @api public
 */

Server.prototype.origins = function(v){
  if (!arguments.length) return this._origins;

  this._origins = v;
  return this;
};

/**
 * Attaches socket.io to a server or port.
 *
 * @param {http.Server|Number} server or port
 * @param {Object} options passed to engine.io
 * @return {Server} self
 * @api public
 */

Server.prototype.listen =
Server.prototype.attach = function(srv, opts){
  if ('function' == typeof srv) {
    var msg = 'You are trying to attach socket.io to an express ' +
    'request handler function. Please pass a http.Server instance.';
    throw new Error(msg);
  }

  // handle a port as a string
  if (Number(srv) == srv) {
    srv = Number(srv);
  }

  if ('number' == typeof srv) {
    debug('creating http server and binding to %d', srv);
    var port = srv;
    srv = http$1.Server(function(req, res){
      res.writeHead(404);
      res.end();
    });
    srv.listen(port);

  }

  // set engine.io path to `/socket.io`
  opts = opts || {};
  opts.path = opts.path || this.path();
  // set origins verification
  opts.allowRequest = opts.allowRequest || this.checkRequest.bind(this);

  if (this.sockets.fns.length > 0) {
    this.initEngine(srv, opts);
    return this;
  }

  var self = this;
  var connectPacket = { type: parser.CONNECT, nsp: '/' };
  this.encoder.encode(connectPacket, function (encodedPacket){
    // the CONNECT packet will be merged with Engine.IO handshake,
    // to reduce the number of round trips
    opts.initialPacket = encodedPacket;

    self.initEngine(srv, opts);
  });
  return this;
};

/**
 * Initialize engine
 *
 * @param {Object} options passed to engine.io
 * @api private
 */

Server.prototype.initEngine = function(srv, opts){
  // initialize engine
  debug('creating engine.io instance with opts %j', opts);
  this.eio = engine.attach(srv, opts);

  // attach static file serving
  if (this._serveClient) this.attachServe(srv);

  // Export http server
  this.httpServer = srv;

  // bind to engine events
  this.bind(this.eio);
};

/**
 * Attaches the static file serving.
 *
 * @param {Function|http.Server} srv http server
 * @api private
 */

Server.prototype.attachServe = function(srv){
  debug('attaching client serving req handler');
  var url = this._path + '/socket.io.js';
  var urlMap = this._path + '/socket.io.js.map';
  var evs = srv.listeners('request').slice(0);
  var self = this;
  srv.removeAllListeners('request');
  srv.on('request', function(req, res) {
    if (0 === req.url.indexOf(urlMap)) {
      self.serveMap(req, res);
    } else if (0 === req.url.indexOf(url)) {
      self.serve(req, res);
    } else {
      for (var i = 0; i < evs.length; i++) {
        evs[i].call(srv, req, res);
      }
    }
  });
};

/**
 * Handles a request serving `/socket.io.js`
 *
 * @param {http.Request} req
 * @param {http.Response} res
 * @api private
 */

Server.prototype.serve = function(req, res){
  // Per the standard, ETags must be quoted:
  // https://tools.ietf.org/html/rfc7232#section-2.3
  var expectedEtag = '"' + clientVersion + '"';

  var etag = req.headers['if-none-match'];
  if (etag) {
    if (expectedEtag == etag) {
      debug('serve client 304');
      res.writeHead(304);
      res.end();
      return;
    }
  }

  debug('serve client source');
  res.setHeader("Cache-Control", "public, max-age=0");
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('ETag', expectedEtag);
  res.writeHead(200);
  res.end(clientSource);
};

/**
 * Handles a request serving `/socket.io.js.map`
 *
 * @param {http.Request} req
 * @param {http.Response} res
 * @api private
 */

Server.prototype.serveMap = function(req, res){
  // Per the standard, ETags must be quoted:
  // https://tools.ietf.org/html/rfc7232#section-2.3
  var expectedEtag = '"' + clientVersion + '"';

  var etag = req.headers['if-none-match'];
  if (etag) {
    if (expectedEtag == etag) {
      debug('serve client 304');
      res.writeHead(304);
      res.end();
      return;
    }
  }

  debug('serve client sourcemap');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('ETag', expectedEtag);
  res.writeHead(200);
  res.end(clientSourceMap);
};

/**
 * Binds socket.io to an engine.io instance.
 *
 * @param {engine.Server} engine engine.io (or compatible) server
 * @return {Server} self
 * @api public
 */

Server.prototype.bind = function(engine){
  this.engine = engine;
  this.engine.on('connection', this.onconnection.bind(this));
  return this;
};

/**
 * Called with each incoming transport connection.
 *
 * @param {engine.Socket} conn
 * @return {Server} self
 * @api public
 */

Server.prototype.onconnection = function(conn){
  debug('incoming connection with id %s', conn.id);
  var client = new Client(this, conn);
  client.connect('/');
  return this;
};

/**
 * Looks up a namespace.
 *
 * @param {String|RegExp|Function} name nsp name
 * @param {Function} [fn] optional, nsp `connection` ev handler
 * @api public
 */

Server.prototype.of = function(name, fn){
  if (typeof name === 'function' || name instanceof RegExp) {
    const parentNsp = new ParentNamespace(this);
    debug('initializing parent namespace %s', parentNsp.name);
    if (typeof name === 'function') {
      this.parentNsps.set(name, parentNsp);
    } else {
      this.parentNsps.set((nsp, conn, next) => next(null, name.test(nsp)), parentNsp);
    }
    if (fn) parentNsp.on('connect', fn);
    return parentNsp;
  }

  if (String(name)[0] !== '/') name = '/' + name;

  var nsp = this.nsps[name];
  if (!nsp) {
    debug('initializing namespace %s', name);
    nsp = new Namespace(this, name);
    this.nsps[name] = nsp;
  }
  if (fn) nsp.on('connect', fn);
  return nsp;
};

/**
 * Closes server connection
 *
 * @param {Function} [fn] optional, called as `fn([err])` on error OR all conns closed
 * @api public
 */

Server.prototype.close = function(fn){
  for (var id in this.nsps['/'].sockets) {
    if (this.nsps['/'].sockets.hasOwnProperty(id)) {
      this.nsps['/'].sockets[id].onclose();
    }
  }

  this.engine.close();

  if (this.httpServer) {
    this.httpServer.close(fn);
  } else {
    fn && fn();
  }
};

/**
 * Expose main namespace (/).
 */

var emitterMethods = Object.keys(Emitter.prototype).filter(function(key){
  return typeof Emitter.prototype[key] === 'function';
});

emitterMethods.concat(['to', 'in', 'use', 'send', 'write', 'clients', 'compress', 'binary']).forEach(function(fn){
  Server.prototype[fn] = function(){
    return this.sockets[fn].apply(this.sockets, arguments);
  };
});

Namespace.flags.forEach(function(flag){
  Object.defineProperty(Server.prototype, flag, {
    get: function() {
      this.sockets.flags = this.sockets.flags || {};
      this.sockets.flags[flag] = true;
      return this;
    }
  });
});

/**
 * BC with `io.listen`
 */

Server.listen = Server;

var _io = /*#__PURE__*/Object.freeze({

});

const io = _io; // TODO: https://github.com/rollup/rollup/issues/670

const httpServer = http.createServer((_, response) => response.end("Chat server is listening"));

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

// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

function encodeMessage(message) {
  return object_(/* :: */[
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
  return object_(/* :: */[
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
                    nullable$1((function (prim) {
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
  return object_(/* :: */[
              /* tuple */[
                "users",
                list$1(encodeUser, chatState[/* users */0])
              ],
              /* :: */[
                /* tuple */[
                  "messages",
                  list$1(encodeMessage, chatState[/* messages */1])
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
        return object_(/* :: */[
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
        return object_(/* :: */[
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
        return object_(/* :: */[
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
        return object_(/* :: */[
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
  var match = field("type", $$int, json);
  switch (match) {
    case 0 : 
        return /* Logout */0;
    case 1 : 
        return /* Login */__(1, [field("userName", string, json)]);
    case 2 : 
        return /* PublishMessage */__(0, [field("text", string, json)]);
    default:
      return /* Logout */0;
  }
}

var customClientEventName = "Chat.ClientCommand";

var customServerEventName = "Chat.ServerEvent";

var disconnectEventName = "disconnect";

function startServer$1(handleClientEvent) {
  startServer(/* array */[
        customClientEventName,
        disconnectEventName
      ], customServerEventName, /* Unauthenticated */0, (function (clientAuthentication, eventName, data, rawBroadcaster, rawSender) {
          var match = eventName === disconnectEventName;
          return _4(handleClientEvent, clientAuthentication, match ? /* Logout */0 : decodeClientCommand(data), (function (x) {
                        return _1(rawBroadcaster, encodeServerEvent(x));
                      }), (function (x) {
                        return _1(rawSender, encodeServerEvent(x));
                      }));
        }));
  return /* () */0;
}
/* Json_encode Not a pure module */

/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

function getByU(_xs, p) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var x = xs[0];
      if (p(x)) {
        return some(x);
      } else {
        _xs = xs[1];
        continue ;
      }
    } else {
      return undefined;
    }
  }}

function getBy(xs, p) {
  return getByU(xs, __1(p));
}
/* No side effect */

// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

function createAvatarUrl(key) {
  return "https://robohash.org/" + (String(key) + "?size=128x128");
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
  var existingUser = getBy(users, findUserByName);
  if (existingUser !== undefined) {
    return /* tuple */[
            existingUser,
            users
          ];
  } else {
    var user = createUser(length(users) + 1 | 0, name);
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
  var existingUser = getBy(users, findUserById);
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
            filter((function (x) {
                      return x[/* id */0] !== id;
                    }))(users)
          ];
  } else {
    return users;
  }
}

function addMessage(text, senderId, messages) {
  var message = createMessage(length(messages) + 1 | 0, text, senderId);
  return /* tuple */[
          message,
          /* :: */[
            message,
            messages
          ]
        ];
}
/* No side effect */

// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

var initialChatState = /* record */[
  /* users : [] */0,
  /* messages : [] */0
];

var chatState = /* record */[/* contents */initialChatState];

function getOrCreateUser$1(name) {
  var match = getOrCreateUser(name, chatState[/* contents */0][/* users */0]);
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
    /* users */changeUserAvailability(isAvailable, id, chatState[/* contents */0][/* users */0]),
    /* messages */init[/* messages */1]
  ];
  return /* () */0;
}

function addMessage$1(text, senderId) {
  var match = addMessage(text, senderId, chatState[/* contents */0][/* messages */1]);
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
/* No side effect */

// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

function processClientCommand(auth, clientCommand) {
  if (auth) {
    var user = auth[0];
    if (typeof clientCommand === "number") {
      setUserAvailability(false, user[/* id */0]);
      return /* tuple */[
              /* Unauthenticated */0,
              /* UserUnavailable */__(2, [user]),
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
              /* MessagePublished */__(3, [addMessage$1(clientCommand[0], user[/* id */0])]),
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
    var user$1 = getOrCreateUser$1(clientCommand[0]);
    setUserAvailability(true, user$1[/* id */0]);
    return /* tuple */[
            /* Authenticated */[user$1],
            /* UserAvailable */__(1, [user$1]),
            /* LoginSuccessful */__(0, [
                getState(/* () */0),
                user$1[/* id */0]
              ])
          ];
  }
}
/* No side effect */

// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

function addDummyData(param) {
  var dummyUser = getOrCreateUser$1("Dummy user");
  addMessage$1("Are you talking to me?", dummyUser[/* id */0]);
  addMessage$1("Well I'm the only one here.", dummyUser[/* id */0]);
  return setUserAvailability(false, dummyUser[/* id */0]);
}

addDummyData(/* () */0);

startServer$1((function (authenticationState, clientCommand, broadcast, send) {
        var match = processClientCommand(authenticationState, clientCommand);
        map(match[1], broadcast);
        map(match[2], send);
        return match[0];
      }));
/*  Not a pure module */

exports.addDummyData = addDummyData;

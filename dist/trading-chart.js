/*!
 * TradingVue.JS - v1.0.5 - Sat Jun 04 2022
 *     https://github.com/bsjung/trading-chart-js
 *     Copyright (c) 2022 bsjung Code's All Right;
 *     Licensed under the MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TradingVueJs"] = factory();
	else
		root["TradingVueJs"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 591:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8)["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(591)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 546:
/***/ ((module) => {

/**
 * Utility compare functions
 */

module.exports = {

    /**
     * Compare two numbers.
     *
     * @param {Number} a
     * @param {Number} b
     * @returns {Number} 1 if a > b, 0 if a = b, -1 if a < b
     */
    numcmp: function (a, b) {
        return a - b;
    },

    /**
     * Compare two strings.
     *
     * @param {Number|String} a
     * @param {Number|String} b
     * @returns {Number} 1 if a > b, 0 if a = b, -1 if a < b
     */
    strcmp: function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }

};


/***/ }),

/***/ 678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Indexed Array Binary Search module
 */

/**
 * Dependencies
 */
var util = __webpack_require__(500),
    cmp = __webpack_require__(546),
    bin = __webpack_require__(101);

/**
 * Module interface definition
 */
module.exports = IndexedArray;

/**
 * Indexed Array constructor
 *
 * It loads the array data, defines the index field and the comparison function
 * to be used.
 *
 * @param {Array} data is an array of objects
 * @param {String} index is the object's property used to search the array
 */
function IndexedArray(data, index) {

    // is data sortable array or array-like object?
    if (!util.isSortableArrayLike(data))
        throw new Error("Invalid data");

    // is index a valid property?
    if (!index || data.length > 0 && !(index in data[0]))
        throw new Error("Invalid index");

    // data array
    this.data = data;

    // name of the index property
    this.index = index;

    // set index boundary values
    this.setBoundaries();

    // default comparison function
    this.compare = typeof this.minv === "number" ? cmp.numcmp : cmp.strcmp;

    // default search function
    this.search = bin.search;

    // cache of index values to array positions
    // each value stores an object as { found: true|false, index: array-index }
    this.valpos = {};

    // cursor and adjacent positions
    this.cursor = null;
    this.nextlow = null;
    this.nexthigh = null;
}

/**
 * Set the comparison function
 *
 * @param {Function} fn to compare index values that returnes 1, 0, -1
 */
IndexedArray.prototype.setCompare = function (fn) {
    if (typeof fn !== "function")
        throw new Error("Invalid argument");

    this.compare = fn;
    return this;
};

/**
 * Set the search function
 *
 * @param {Function} fn to search index values in the array of objects
 */
IndexedArray.prototype.setSearch = function (fn) {
    if (typeof fn !== "function")
        throw new Error("Invalid argument");

    this.search = fn;
    return this;
};

/**
 * Sort the data array by its index property
 */
IndexedArray.prototype.sort = function () {
    var self = this,
        index = this.index;

    // sort the array
    this.data.sort(function (a, b) {
        return self.compare(a[index], b[index]);
    });

    // recalculate boundary values
    this.setBoundaries();

    return this;
};

/**
 * Inspect and set the boundaries of the internal data array
 */
IndexedArray.prototype.setBoundaries = function () {
    var data = this.data,
        index = this.index;

    this.minv = data.length && data[0][index];
    this.maxv = data.length && data[data.length - 1][index];

    return this;
};

/**
 * Get the position of the object corresponding to the given index
 *
 * @param {Number|String} index is the id of the requested object
 * @returns {Number} the position of the object in the array
 */
IndexedArray.prototype.fetch = function (value) {
    // check data has objects
    if (this.data.length === 0) {
        this.cursor = null;
        this.nextlow = null;
        this.nexthigh = null;
        return this;
    }

    // check the request is within range
    if (this.compare(value, this.minv) === -1) {
        this.cursor = null;
        this.nextlow = null;
        this.nexthigh = 0;
        return this;
    }
    if (this.compare(value, this.maxv) === 1) {
        this.cursor = null;
        this.nextlow = this.data.length - 1;
        this.nexthigh = null;
        return this;
    }

    var valpos = this.valpos,
        pos = valpos[value];

    // if the request is memorized, just give it back
    if (pos) {
        if (pos.found) {
            this.cursor = pos.index;
            this.nextlow = null;
            this.nexthigh = null;
        } else {
            this.cursor = null;
            this.nextlow = pos.prev;
            this.nexthigh = pos.next;
        }
        return this;
    }

    // if not, do the search
    var result = this.search.call(this, value);
    this.cursor = result.index;
    this.nextlow = result.prev;
    this.nexthigh = result.next;
    return this;
};

/**
 * Get the object corresponding to the given index
 *
 * When no value is given, the function will default to the last fetched item.
 *
 * @param {Number|String} [optional] index is the id of the requested object
 * @returns {Object} the found object or null
 */
IndexedArray.prototype.get = function (value) {
    if (value)
        this.fetch(value);

    var pos = this.cursor;
    return pos !== null ? this.data[pos] : null;
};

/**
 * Get an slice of the data array
 *
 * Boundaries have to be in order.
 *
 * @param {Number|String} begin index is the id of the requested object
 * @param {Number|String} end index is the id of the requested object
 * @returns {Object} the slice of data array or []
 */
IndexedArray.prototype.getRange = function (begin, end) {
    // check if boundaries are in order
    if (this.compare(begin, end) === 1) {
        return [];
    }

    // fetch start and default to the next index above
    this.fetch(begin);
    var start = this.cursor || this.nexthigh;

    // fetch finish and default to the next index below
    this.fetch(end);
    var finish = this.cursor || this.nextlow;

    // if any boundary is not set, return no range
    if (start === null || finish === null) {
        return [];
    }

    // return range
    return this.data.slice(start, finish + 1);
};


/***/ }),

/***/ 101:
/***/ ((module) => {

/**
 * Binary search implementation
 */

/**
 * Main search recursive function
 */
function loop(data, min, max, index, valpos) {

    // set current position as the middle point between min and max
    var curr = (max + min) >>> 1;

    // compare current index value with the one we are looking for
    var diff = this.compare(data[curr][this.index], index);

    // found?
    if (!diff) {
        return valpos[index] = {
            "found": true,
            "index": curr,
            "prev": null,
            "next": null
        };
    }

    // no more positions available?
    if (min >= max) {
        return valpos[index] = {
            "found": false,
            "index": null,
            "prev": (diff < 0) ? max : max - 1,
            "next": (diff < 0) ? max + 1 : max
        };
    }

    // continue looking for index in one of the remaining array halves
    // current position can be skept as index is not there...
    if (diff > 0)
        return loop.call(this, data, min, curr - 1, index, valpos);
    else
        return loop.call(this, data, curr + 1, max, index, valpos);
}

/**
 * Search bootstrap
 * The function has to be executed in the context of the IndexedArray object
 */
function search(index) {
    var data = this.data;
    return loop.call(this, data, 0, data.length - 1, index, this.valpos);
}

/**
 * Export search function
 */
module.exports.search = search;


/***/ }),

/***/ 500:
/***/ ((module) => {

/**
 * Utils module
 */

/**
 * Check if an object is an array-like object
 *
 * @credit Javascript: The Definitive Guide, O'Reilly, 2011
 */
function isArrayLike(o) {
    if (o &&                                 // o is not null, undefined, etc.
        typeof o === "object" &&             // o is an object
        isFinite(o.length) &&                // o.length is a finite number
        o.length >= 0 &&                     // o.length is non-negative
        o.length === Math.floor(o.length) && // o.length is an integer
        o.length < 4294967296)               // o.length < 2^32
        return true;                         // Then o is array-like
    else
        return false;                        // Otherwise it is not
}

/**
 * Check for the existence of the sort function in the object
 */
function isSortable(o) {
    if (o &&                                 // o is not null, undefined, etc.
        typeof o === "object" &&             // o is an object
        typeof o.sort === "function")        // o.sort is a function
        return true;                         // Then o is array-like
    else
        return false;                        // Otherwise it is not
}

/**
 * Check for sortable-array-like objects
 */
module.exports.isSortableArrayLike = function (o) {
    return isArrayLike(o) && isSortable(o);
};


/***/ }),

/***/ 418:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Anit-boostrap tactix */\n.trading-vue *, ::after, ::before {\n    box-sizing: content-box;\n}\n.trading-vue img {\n    vertical-align: initial;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 976:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.trading-vue-botbar {\n    position: relative !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 449:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.t-vue-lbtn-grp {\n    margin-left: 0.5em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 108:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.tvjs-item-list {\n    position: absolute;\n    user-select: none;\n    margin-top: -5px;\n}\n.tvjs-item-list-item {\n    display: flex;\n    align-items: center;\n    padding-right: 20px;\n    font-size: 1.15em;\n    letter-spacing: 0.05em;\n}\n.tvjs-item-list-item:hover {\n    background-color: #76878319;\n}\n.tvjs-item-list-item * {\n    position: relative !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 988:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.trading-vue-legend {\n    position: relative;\n    z-index: 100;\n    font-size: 1.25em;\n    margin-left: 10px;\n    pointer-events: none;\n    text-align: left;\n    user-select: none;\n    font-weight: 300;\n}\n@media (min-resolution: 2x) {\n.trading-vue-legend {\n        font-weight: 400;\n}\n}\n.trading-vue-ohlcv {\n    pointer-events: none;\n    margin-bottom: 0.5em;\n}\n.t-vue-lspan {\n    font-variant-numeric: tabular-nums;\n    font-size: 0.95em;\n    color: #999999; /* TODO: move => params */\n    margin-left: 0.1em;\n    margin-right: 0.2em;\n}\n.t-vue-title {\n    margin-right: 0.25em;\n    font-size: 1.45em;\n}\n.t-vue-ind {\n    margin-left: 0.2em;\n    margin-bottom: 0.5em;\n    font-size: 1.0em;\n    margin-top: 0.3em;\n}\n.t-vue-ivalue {\n    margin-left: 0.5em;\n}\n.t-vue-unknown {\n    color: #999999; /* TODO: move => params */\n}\n.tvjs-appear-enter-active,\n.tvjs-appear-leave-active\n{\n    transition: all .25s ease;\n}\n.tvjs-appear-enter, .tvjs-appear-leave-to\n{\n    opacity: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 423:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.t-vue-lbtn {\n    z-index: 100;\n    pointer-events: all;\n    cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 661:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.trading-vue-section {\n    height: 0;\n    position: absolute;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 168:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.tvjs-spinner {\n    display: inline-block;\n    position: relative;\n    width: 20px;\n    height: 16px;\n    margin: -4px 0px -1px 0px;\n    opacity: 0.7;\n}\n.tvjs-spinner div {\n    position: absolute;\n    top: 8px;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    animation-timing-function: cubic-bezier(1, 1, 1, 1);\n}\n.tvjs-spinner div:nth-child(1) {\n    left: 2px;\n    animation: tvjs-spinner1 0.6s infinite;\n    opacity: 0.9;\n}\n.tvjs-spinner div:nth-child(2) {\n    left: 2px;\n    animation: tvjs-spinner2 0.6s infinite;\n}\n.tvjs-spinner div:nth-child(3) {\n    left: 9px;\n    animation: tvjs-spinner2 0.6s infinite;\n}\n.tvjs-spinner div:nth-child(4) {\n    left: 16px;\n    animation: tvjs-spinner3 0.6s infinite;\n    opacity: 0.9;\n}\n@keyframes tvjs-spinner1 {\n0% {\n        transform: scale(0);\n}\n100% {\n        transform: scale(1);\n}\n}\n@keyframes tvjs-spinner3 {\n0% {\n        transform: scale(1);\n}\n100% {\n        transform: scale(0);\n}\n}\n@keyframes tvjs-spinner2 {\n0% {\n        transform: translate(0, 0);\n}\n100% {\n        transform: translate(7px, 0);\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 29:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.tvjs-drift-enter-active {\n    transition: all .3s ease;\n}\n.tvjs-drift-leave-active {\n    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n}\n.tvjs-drift-enter, .tvjs-drift-leave-to\n{\n    transform: translateX(10px);\n    opacity: 0;\n}\n.tvjs-the-tip {\n    position: absolute;\n    width: 200px;\n    text-align: center;\n    z-index: 10001;\n    color: #ffffff;\n    font-size: 1.5em;\n    line-height: 1.15em;\n    padding: 10px;\n    border-radius: 3px;\n    right: 70px;\n    top: 10px;\n    text-shadow: 1px 1px black;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 935:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.trading-vue-toolbar {\n    position: absolute;\n    border-right: 1px solid black;\n    z-index: 101;\n    padding-top: 3px;\n    user-select: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 379:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.trading-vue-tbitem {\n}\n.trading-vue-tbitem:hover {\n    background-color: #76878319;\n}\n.trading-vue-tbitem-exp {\n    position: absolute;\n    right: -3px;\n    padding: 18.5px 5px;\n    font-stretch: extra-condensed;\n    transform: scaleX(0.6);\n    font-size: 0.6em;\n    opacity: 0.0;\n    user-select: none;\n    line-height: 0;\n}\n.trading-vue-tbitem:hover\n.trading-vue-tbitem-exp {\n    opacity: 0.5;\n}\n.trading-vue-tbitem-exp:hover {\n    background-color: #76878330;\n    opacity: 0.9 !important;\n}\n.trading-vue-tbicon {\n    position: absolute;\n}\n.trading-vue-tbitem.selected-item > .trading-vue-tbicon,\n.tvjs-item-list-item.selected-item > .trading-vue-tbicon {\n     filter: brightness(1.45) sepia(1) hue-rotate(90deg) saturate(4.5) !important;\n}\n.tvjs-pixelated {\n    -ms-interpolation-mode: nearest-neighbor;\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: -webkit-crisp-edges;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: pixelated;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 72:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.trading-vue-ux-wrapper {\n    position: absolute;\n    display: flex;\n}\n.tvjs-ux-wrapper-pin {\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    z-index: 100;\n    background-color: #23a776;\n    border-radius: 10px;\n    margin-left: -6px;\n    margin-top: -6px;\n    pointer-events: none;\n}\n.tvjs-ux-wrapper-head {\n    position: absolute;\n    height: 23px;\n    width: 100%;\n}\n.tvjs-ux-wrapper-close {\n    position: absolute;\n    width: 11px;\n    height: 11px;\n    font-size: 1.5em;\n    line-height: 0.5em;\n    padding: 1px 1px 1px 1px;\n    border-radius: 10px;\n    right: 5px;\n    top: 5px;\n    user-select: none;\n    text-align: center;\n    z-index: 100;\n}\n.tvjs-ux-wrapper-close-hb {\n}\n.tvjs-ux-wrapper-close:hover {\n    background-color: #FF605C !important;\n    color: #692324 !important;\n}\n.tvjs-ux-wrapper-full {\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 983:
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.tvjs-widgets {\n    position: absolute;\n    z-index: 1000;\n    pointer-events: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 840:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ 981:
/***/ ((module) => {

/*
 * Hamster.js v1.1.2
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

(function(window, document){
'use strict';

/**
 * Hamster
 * use this to create instances
 * @returns {Hamster.Instance}
 * @constructor
 */
var Hamster = function(element) {
  return new Hamster.Instance(element);
};

// default event name
Hamster.SUPPORT = 'wheel';

// default DOM methods
Hamster.ADD_EVENT = 'addEventListener';
Hamster.REMOVE_EVENT = 'removeEventListener';
Hamster.PREFIX = '';

// until browser inconsistencies have been fixed...
Hamster.READY = false;

Hamster.Instance = function(element){
  if (!Hamster.READY) {
    // fix browser inconsistencies
    Hamster.normalise.browser();

    // Hamster is ready...!
    Hamster.READY = true;
  }

  this.element = element;

  // store attached event handlers
  this.handlers = [];

  // return instance
  return this;
};

/**
 * create new hamster instance
 * all methods should return the instance itself, so it is chainable.
 * @param   {HTMLElement}       element
 * @returns {Hamster.Instance}
 * @constructor
 */
Hamster.Instance.prototype = {
  /**
   * bind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  wheel: function onEvent(handler, useCapture){
    Hamster.event.add(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.add(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  },

  /**
   * unbind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  unwheel: function offEvent(handler, useCapture){
    // if no handler argument,
    // unbind the last bound handler (if exists)
    if (handler === undefined && (handler = this.handlers.slice(-1)[0])) {
      handler = handler.original;
    }

    Hamster.event.remove(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.remove(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  }
};

Hamster.event = {
  /**
   * cross-browser 'addWheelListener'
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  add: function add(hamster, eventName, handler, useCapture){
    // store the original handler
    var originalHandler = handler;

    // redefine the handler
    handler = function(originalEvent){

      if (!originalEvent) {
        originalEvent = window.event;
      }

      // create a normalised event object,
      // and normalise "deltas" of the mouse wheel
      var event = Hamster.normalise.event(originalEvent),
          delta = Hamster.normalise.delta(originalEvent);

      // fire the original handler with normalised arguments
      return originalHandler(event, delta[0], delta[1], delta[2]);

    };

    // cross-browser addEventListener
    hamster.element[Hamster.ADD_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // store original and normalised handlers on the instance
    hamster.handlers.push({
      original: originalHandler,
      normalised: handler
    });
  },

  /**
   * removeWheelListener
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  remove: function remove(hamster, eventName, handler, useCapture){
    // find the normalised handler on the instance
    var originalHandler = handler,
        lookup = {},
        handlers;
    for (var i = 0, len = hamster.handlers.length; i < len; ++i) {
      lookup[hamster.handlers[i].original] = hamster.handlers[i];
    }
    handlers = lookup[originalHandler];
    handler = handlers.normalised;

    // cross-browser removeEventListener
    hamster.element[Hamster.REMOVE_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // remove original and normalised handlers from the instance
    for (var h in hamster.handlers) {
      if (hamster.handlers[h] == handlers) {
        hamster.handlers.splice(h, 1);
        break;
      }
    }
  }
};

/**
 * these hold the lowest deltas,
 * used to normalise the delta values
 * @type {Number}
 */
var lowestDelta,
    lowestDeltaXY;

Hamster.normalise = {
  /**
   * fix browser inconsistencies
   */
  browser: function normaliseBrowser(){
    // detect deprecated wheel events
    if (!('onwheel' in document || document.documentMode >= 9)) {
      Hamster.SUPPORT = document.onmousewheel !== undefined ?
                        'mousewheel' : // webkit and IE < 9 support at least "mousewheel"
                        'DOMMouseScroll'; // assume remaining browsers are older Firefox
    }

    // detect deprecated event model
    if (!window.addEventListener) {
      // assume IE < 9
      Hamster.ADD_EVENT = 'attachEvent';
      Hamster.REMOVE_EVENT = 'detachEvent';
      Hamster.PREFIX = 'on';
    }

  },

  /**
   * create a normalised event object
   * @param   {Function}    originalEvent
   * @returns {Object}      event
   */
   event: function normaliseEvent(originalEvent){
    var event = {
          // keep a reference to the original event object
          originalEvent: originalEvent,
          target: originalEvent.target || originalEvent.srcElement,
          type: 'wheel',
          deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function(){
            if (originalEvent.preventDefault) {
              originalEvent.preventDefault();
            } else {
              originalEvent.returnValue = false;
            }
          },
          stopPropagation: function(){
            if (originalEvent.stopPropagation) {
              originalEvent.stopPropagation();
            } else {
              originalEvent.cancelBubble = false;
            }
          }
        };

    // calculate deltaY (and deltaX) according to the event

    // 'mousewheel'
    if (originalEvent.wheelDelta) {
      event.deltaY = - 1/40 * originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaX) {
      event.deltaX = - 1/40 * originalEvent.wheelDeltaX;
    }

    // 'DomMouseScroll'
    if (originalEvent.detail) {
      event.deltaY = originalEvent.detail;
    }

    return event;
  },

  /**
   * normalise 'deltas' of the mouse wheel
   * @param   {Function}    originalEvent
   * @returns {Array}       deltas
   */
  delta: function normaliseDelta(originalEvent){
    var delta = 0,
      deltaX = 0,
      deltaY = 0,
      absDelta = 0,
      absDeltaXY = 0,
      fn;

    // normalise deltas according to the event

    // 'wheel' event
    if (originalEvent.deltaY) {
      deltaY = originalEvent.deltaY * -1;
      delta  = deltaY;
    }
    if (originalEvent.deltaX) {
      deltaX = originalEvent.deltaX;
      delta  = deltaX * -1;
    }

    // 'mousewheel' event
    if (originalEvent.wheelDelta) {
      delta = originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaY) {
      deltaY = originalEvent.wheelDeltaY;
    }
    if (originalEvent.wheelDeltaX) {
      deltaX = originalEvent.wheelDeltaX * -1;
    }

    // 'DomMouseScroll' event
    if (originalEvent.detail) {
      delta = originalEvent.detail * -1;
    }

    // Don't return NaN
    if (delta === 0) {
      return [0, 0, 0];
    }

    // look for lowest delta to normalize the delta values
    absDelta = Math.abs(delta);
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta;
    }
    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
      lowestDeltaXY = absDeltaXY;
    }

    // convert deltas to whole numbers
    fn = delta > 0 ? 'floor' : 'ceil';
    delta  = Math[fn](delta / lowestDelta);
    deltaX = Math[fn](deltaX / lowestDeltaXY);
    deltaY = Math[fn](deltaY / lowestDeltaXY);

    return [delta, deltaX, deltaY];
  }
};

if (typeof window.define === 'function' && window.define.amd) {
  // AMD
  window.define('hamster', [], function(){
    return Hamster;
  });
} else if (true) {
  // CommonJS
  module.exports = Hamster;
} else {}

})(window, window.document);


/***/ }),

/***/ 961:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


/***/ }),

/***/ 863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(418);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("550b47ab", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(976);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("1b34bfeb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(449);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("9895d3a6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 807:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("8139036a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(988);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("1db01c0b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(423);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("68f243ea", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 11:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(661);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("12d2309d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("5b620605", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("143dffab", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(935);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("f32fd36e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 501:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(379);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("604bf5ef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("21fde573", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 5:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(983);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(346)/* ["default"] */ .Z)
var update = add("fd83689e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Candle": () => (/* reexport */ CandleExt),
  "Constants": () => (/* reexport */ constants),
  "DataCube": () => (/* reexport */ DataCube),
  "Interface": () => (/* reexport */ mixins_interface),
  "Overlay": () => (/* reexport */ overlay),
  "Tool": () => (/* reexport */ tool),
  "TradingVue": () => (/* reexport */ TradingVue),
  "Utils": () => (/* reexport */ utils),
  "Volbar": () => (/* reexport */ VolbarExt),
  "default": () => (/* binding */ src),
  "layout_cnv": () => (/* reexport */ layout_cnv),
  "layout_vol": () => (/* reexport */ layout_vol),
  "primitives": () => (/* binding */ primitives)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/TradingVue.vue?vue&type=template&id=235c0ade&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "trading-vue",
      style: {
        color: this.chart_props.colors.text,
        font: this.font_comp,
        width: this.width + "px",
        height: this.height + "px",
      },
      attrs: { id: _vm.id },
      on: { mousedown: _vm.mousedown, mouseleave: _vm.mouseleave },
    },
    [
      _vm.toolbar
        ? _c(
            "toolbar",
            _vm._b(
              {
                ref: "toolbar",
                attrs: { config: _vm.chart_config },
                on: { "custom-event": _vm.custom_event },
              },
              "toolbar",
              _vm.chart_props,
              false
            )
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.controllers.length
        ? _c("widgets", {
            ref: "widgets",
            attrs: {
              map: _vm.ws,
              width: _vm.width,
              height: _vm.height,
              tv: this,
              dc: _vm.data,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "chart",
        _vm._b(
          {
            key: _vm.reset,
            ref: "chart",
            attrs: { tv_id: _vm.id, config: _vm.chart_config },
            on: {
              "custom-event": _vm.custom_event,
              "range-changed": _vm.range_changed,
              "legend-button-click": _vm.legend_button,
            },
          },
          "chart",
          _vm.chart_props,
          false
        )
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "tvjs-drift" } },
        [
          _vm.tip
            ? _c("the-tip", {
                attrs: { data: _vm.tip },
                on: {
                  "remove-me": function ($event) {
                    _vm.tip = null
                  },
                },
              })
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/TradingVue.vue?vue&type=template&id=235c0ade&

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./src/stuff/constants.js
var SECOND = 1000;
var MINUTE = SECOND * 60;
var MINUTE3 = MINUTE * 3;
var MINUTE5 = MINUTE * 5;
var MINUTE15 = MINUTE * 15;
var MINUTE30 = MINUTE * 30;
var HOUR = MINUTE * 60;
var HOUR4 = HOUR * 4;
var HOUR12 = HOUR * 12;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = WEEK * 4;
var YEAR = DAY * 365;
var MONTHMAP = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // Grid time steps

var TIMESCALES = [YEAR * 10, YEAR * 5, YEAR * 3, YEAR * 2, YEAR, MONTH * 6, MONTH * 4, MONTH * 3, MONTH * 2, MONTH, DAY * 15, DAY * 10, DAY * 7, DAY * 5, DAY * 3, DAY * 2, DAY, HOUR * 12, HOUR * 6, HOUR * 3, HOUR * 1.5, HOUR, MINUTE30, MINUTE15, MINUTE * 10, MINUTE5, MINUTE * 2, MINUTE]; // Grid $ steps

var $SCALES = [0.05, 0.1, 0.2, 0.25, 0.5, 0.8, 1, 2, 5];
var ChartConfig = {
  SBMIN: 60,
  // Minimal sidebar px
  SBMAX: Infinity,
  // Max sidebar, px
  TOOLBAR: 57,
  // Toolbar width px
  TB_ICON: 25,
  // Toolbar icon size px
  TB_ITEM_M: 6,
  // Toolbar item margin px
  TB_ICON_BRI: 1,
  // Toolbar icon brightness
  TB_ICON_HOLD: 420,
  // ms, wait to expand
  TB_BORDER: 1,
  // Toolbar border px
  TB_B_STYLE: 'dotted',
  // Toolbar border style
  TOOL_COLL: 7,
  // Tool collision threshold
  EXPAND: 0.15,
  // %/100 of range
  CANDLEW: 0.6,
  // %/100 of step
  GRIDX: 100,
  // px
  GRIDY: 47,
  // px
  BOTBAR: 28,
  // px
  PANHEIGHT: 22,
  // px
  DEFAULT_LEN: 50,
  // candles
  MINIMUM_LEN: 5,
  // candles,
  MIN_ZOOM: 25,
  // candles
  MAX_ZOOM: 1000,
  // candles,
  VOLSCALE: 0.15,
  // %/100 of height
  UX_OPACITY: 0.9,
  // Ux background opacity
  ZOOM_MODE: 'tv',
  // 'tv' or 'tl'
  L_BTN_SIZE: 21,
  // Legend Button size, px
  L_BTN_MARGIN: '-6px 0 -6px 0',
  // css margin
  SCROLL_WHEEL: 'prevent' // 'pass', 'click'

};
ChartConfig.FONT = "11px -apple-system,BlinkMacSystemFont,\n    Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,\n    Fira Sans,Droid Sans,Helvetica Neue,\n    sans-serif";
var IB_TF_WARN = "When using IB mode you should specify " + "timeframe ('tf' filed in 'chart' object)," + "otherwise you can get an unexpected behaviour";
var MAP_UNIT = {
  "1s": SECOND,
  "5s": SECOND * 5,
  "10s": SECOND * 10,
  "20s": SECOND * 20,
  "30s": SECOND * 30,
  "1m": MINUTE,
  "3m": MINUTE3,
  "5m": MINUTE5,
  "15m": MINUTE15,
  "30m": MINUTE30,
  "1H": HOUR,
  "2H": HOUR * 2,
  "3H": HOUR * 3,
  "4H": HOUR4,
  "12H": HOUR12,
  "1D": DAY,
  "1W": WEEK,
  "1M": MONTH,
  "1Y": YEAR
};
/* harmony default export */ const constants = ({
  SECOND: SECOND,
  MINUTE: MINUTE,
  MINUTE5: MINUTE5,
  MINUTE15: MINUTE15,
  MINUTE30: MINUTE30,
  HOUR: HOUR,
  HOUR4: HOUR4,
  DAY: DAY,
  WEEK: WEEK,
  MONTH: MONTH,
  YEAR: YEAR,
  MONTHMAP: MONTHMAP,
  TIMESCALES: TIMESCALES,
  $SCALES: $SCALES,
  ChartConfig: ChartConfig,
  map_unit: MAP_UNIT,
  IB_TF_WARN: IB_TF_WARN
});
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Chart.vue?vue&type=template&id=4d06a4de&
var Chartvue_type_template_id_4d06a4de_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "trading-vue-chart", style: _vm.styles },
    [
      _c("keyboard", { ref: "keyboard" }),
      _vm._v(" "),
      _vm._l(this._layout.grids, function (grid, i) {
        return _c("grid-section", {
          key: grid.id,
          ref: "sec",
          refInFor: true,
          attrs: { common: _vm.section_props(i), grid_id: i },
          on: {
            "register-kb-listener": _vm.register_kb,
            "remove-kb-listener": _vm.remove_kb,
            "range-changed": _vm.range_changed,
            "cursor-changed": _vm.cursor_changed,
            "cursor-locked": _vm.cursor_locked,
            "sidebar-transform": _vm.set_ytransform,
            "layer-meta-props": _vm.layer_meta_props,
            "custom-event": _vm.emit_custom_event,
            "legend-button-click": _vm.legend_button_click,
          },
        })
      }),
      _vm._v(" "),
      _c(
        "botbar",
        _vm._b(
          { attrs: { shaders: _vm.shaders, timezone: _vm.timezone } },
          "botbar",
          _vm.botbar_props,
          false
        )
      ),
    ],
    2
  )
}
var Chartvue_type_template_id_4d06a4de_staticRenderFns = []
Chartvue_type_template_id_4d06a4de_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/Chart.vue?vue&type=template&id=4d06a4de&

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./src/stuff/context.js
// Canvas context for text measurments
function Context($p) {
  var el = document.createElement('canvas');
  var ctx = el.getContext("2d");
  ctx.font = $p.font;
  return ctx;
}

/* harmony default export */ const context = (Context);
// EXTERNAL MODULE: ./node_modules/arrayslicer/lib/index.js
var lib = __webpack_require__(678);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/stuff/utils.js



/* harmony default export */ const utils = ({
  clamp: function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  },
  add_zero: function add_zero(i) {
    if (i < 10) {
      i = "0" + i;
    }

    return i;
  },
  // Start of the day (zero millisecond)
  day_start: function day_start(t) {
    var start = new Date(t);
    return start.setUTCHours(0, 0, 0, 0);
  },
  // Start of the month
  month_start: function month_start(t) {
    var date = new Date(t);
    return Date.UTC(date.getFullYear(), date.getMonth(), 1);
  },
  // Start of the year
  year_start: function year_start(t) {
    return Date.UTC(new Date(t).getFullYear());
  },
  get_year: function get_year(t) {
    if (!t) return undefined;
    return new Date(t).getUTCFullYear();
  },
  get_month: function get_month(t) {
    if (!t) return undefined;
    return new Date(t).getUTCMonth();
  },
  // Nearest in array
  nearest_a: function nearest_a(x, array) {
    var dist = Infinity;
    var val = null;
    var index = -1;

    for (var i = 0; i < array.length; i++) {
      var xi = array[i];

      if (Math.abs(xi - x) < dist) {
        dist = Math.abs(xi - x);
        val = xi;
        index = i;
      }
    }

    return [index, val];
  },
  round: function round(num, decimals) {
    if (decimals === void 0) {
      decimals = 8;
    }

    return parseFloat(num.toFixed(decimals));
  },
  // Strip? No, it's ugly floats in js
  strip: function strip(number) {
    return parseFloat(parseFloat(number).toPrecision(12));
  },
  get_day: function get_day(t) {
    return t ? new Date(t).getDate() : null;
  },
  // Update array keeping the same reference
  overwrite: function overwrite(arr, new_arr) {
    arr.splice.apply(arr, [0, arr.length].concat(_toConsumableArray(new_arr)));
  },
  // Copy layout in reactive way
  copy_layout: function copy_layout(obj, new_obj) {
    for (var k in obj) {
      if (Array.isArray(obj[k])) {
        // (some offchart indicators are added/removed)
        // we need to update layout in a reactive way
        if (obj[k].length !== new_obj[k].length) {
          this.overwrite(obj[k], new_obj[k]);
          continue;
        }

        for (var m in obj[k]) {
          Object.assign(obj[k][m], new_obj[k][m]);
        }
      } else {
        Object.assign(obj[k], new_obj[k]);
      }
    }
  },
  // Detects candles interval
  detect_interval: function detect_interval(ohlcv) {
    var len = Math.min(ohlcv.length - 1, 99);
    var min = Infinity;
    ohlcv.slice(0, len).forEach(function (x, i) {
      var d = ohlcv[i + 1][0] - x[0];
      if (d === d && d < min) min = d;
    }); // This saves monthly chart from being awkward

    if (min >= constants.MONTH && min <= constants.DAY * 30) {
      return constants.DAY * 31;
    }

    return min;
  },
  // Gets numberic part of overlay id (e.g 'EMA_1' = > 1)
  get_num_id: function get_num_id(id) {
    return parseInt(id.split('_').pop());
  },
  // Fast filter. Really fast, like 10X
  fast_filter: function fast_filter(arr, t1, t2) {
    if (!arr.length) return [arr, undefined];

    try {
      var ia = new (lib_default())(arr, "0");
      var res = ia.getRange(t1, t2);
      var i0 = ia.valpos[t1].next;
      return [res, i0];
    } catch (e) {
      // Something wrong with fancy slice lib
      // Fast fix: fallback to filter
      return [arr.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      }), 0];
    }
  },
  // Fast filter (index-based)
  fast_filter_i: function fast_filter_i(arr, t1, t2) {
    if (!arr.length) return [arr, undefined];
    var i1 = Math.floor(t1);
    if (i1 < 0) i1 = 0;
    var i2 = Math.floor(t2 + 1);
    var res = arr.slice(i1, i2);
    return [res, i1];
  },
  // Nearest indexes (left and right)
  fast_nearest: function fast_nearest(arr, t1) {
    var ia = new (lib_default())(arr, "0");
    ia.fetch(t1);
    return [ia.nextlow, ia.nexthigh];
  },
  now: function now() {
    return new Date().getTime();
  },
  pause: function pause(delay) {
    return new Promise(function (rs, rj) {
      return setTimeout(rs, delay);
    });
  },
  // Limit crazy wheel delta values
  smart_wheel: function smart_wheel(delta) {
    var abs = Math.abs(delta);

    if (abs > 500) {
      return (200 + Math.log(abs)) * Math.sign(delta);
    }

    return delta;
  },
  // Parse the original mouse event to find deltaX
  get_deltaX: function get_deltaX(event) {
    return event.originalEvent.deltaX / 12;
  },
  // Parse the original mouse event to find deltaY
  get_deltaY: function get_deltaY(event) {
    return event.originalEvent.deltaY / 12;
  },
  // Apply opacity to a hex color
  apply_opacity: function apply_opacity(c, op) {
    if (c.length === 7) {
      var n = Math.floor(op * 255);
      n = this.clamp(n, 0, 255);
      c += n.toString(16);
    }

    return c;
  },
  // Parse timeframe or return value in ms
  parse_tf: function parse_tf(smth) {
    if (typeof smth === 'string') {
      return constants.map_unit[smth];
    } else {
      return smth;
    }
  },
  // Detect index shift between the main data sub
  // and the overlay's sub (for IB-mode)
  index_shift: function index_shift(sub, data) {
    // Find the second timestamp (by value)
    if (!data.length) return 0;
    var first = data[0][0];
    var second;

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] !== first) {
        second = data[i][0];
        break;
      }
    }

    for (var j = 0; j < sub.length; j++) {
      if (sub[j][0] === second) {
        return j - i;
      }
    }

    return 0;
  },
  // Fallback fix for Brave browser
  // https://github.com/brave/brave-browser/issues/1738
  measureText: function measureText(ctx, text, tv_id) {
    var m = ctx.measureTextOrg(text);

    if (m.width === 0) {
      var doc = document;
      var id = 'tvjs-measure-text';
      var el = doc.getElementById(id);

      if (!el) {
        var base = doc.getElementById(tv_id);
        el = doc.createElement("div");
        el.id = id;
        el.style.position = 'absolute';
        el.style.top = '-1000px';
        base.appendChild(el);
      }

      if (ctx.font) el.style.font = ctx.font;
      el.innerText = text.replace(/ /g, '.');
      return {
        width: el.offsetWidth
      };
    } else {
      return m;
    }
  },
  uuid: function uuid(temp) {
    if (temp === void 0) {
      temp = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    }

    return temp.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  },
  uuid2: function uuid2() {
    return this.uuid('xxxxxxxxxxxx');
  },
  // Delayed warning, f = condition lambda fn
  warn: function warn(f, text, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    setTimeout(function () {
      if (f()) console.warn(text);
    }, delay);
  },
  // Checks if script props updated
  // (and not style settings or something else)
  is_scr_props_upd: function is_scr_props_upd(n, prev) {
    var p = prev.find(function (x) {
      return x.v.$uuid === n.v.$uuid;
    });
    if (!p) return false;
    var props = n.p.settings.$props;
    if (!props) return false;
    return props.some(function (x) {
      return n.v[x] !== p.v[x];
    });
  },
  // Checks if it's time to make a script update
  // (based on execInterval in ms)
  delayed_exec: function delayed_exec(v) {
    if (!v.script || !v.script.execInterval) return true;
    var t = this.now();
    var dt = v.script.execInterval;

    if (!v.settings.$last_exec || t > v.settings.$last_exec + dt) {
      v.settings.$last_exec = t;
      return true;
    }

    return false;
  },
  // Format names such 'RSI, $length', where
  // length - is one of the settings
  format_name: function format_name(ov) {
    if (!ov.name) return undefined;
    var name = ov.name;

    for (var k in ov.settings || {}) {
      var val = ov.settings[k];
      var reg = new RegExp("\\$".concat(k), 'g');
      name = name.replace(reg, val);
    }

    return name;
  },
  // Default cursor mode
  xmode: function xmode() {
    return this.is_mobile ? 'explore' : 'default';
  },
  default_prevented: function default_prevented(event) {
    if (event.original) {
      return event.original.defaultPrevented;
    }

    return event.defaultPrevented;
  },
  // WTF with modern web development
  is_mobile: function (w) {
    return 'onorientationchange' in w && (!!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || 'ontouchstart' in w || w.DocumentTouch && document instanceof w.DocumentTouch);
  }(typeof window !== 'undefined' ? window : {})
});
;// CONCATENATED MODULE: ./src/stuff/math.js
// Math/Geometry
/* harmony default export */ const math = ({
  // Distance from point to line
  // p1 = point, (p2, p3) = line
  point2line: function point2line(p1, p2, p3) {
    var _this$tri = this.tri(p1, p2, p3),
        area = _this$tri.area,
        base = _this$tri.base;

    return Math.abs(this.tri_h(area, base));
  },
  // Distance from point to segment
  // p1 = point, (p2, p3) = segment
  point2seg: function point2seg(p1, p2, p3) {
    var _this$tri2 = this.tri(p1, p2, p3),
        area = _this$tri2.area,
        base = _this$tri2.base; // Vector projection


    var proj = this.dot_prod(p1, p2, p3) / base; // Distance from left pin

    var l1 = Math.max(-proj, 0); // Distance from right pin

    var l2 = Math.max(proj - base, 0); // Normal

    var h = Math.abs(this.tri_h(area, base));
    return Math.max(h, l1, l2);
  },
  // Distance from point to ray
  // p1 = point, (p2, p3) = ray
  point2ray: function point2ray(p1, p2, p3) {
    var _this$tri3 = this.tri(p1, p2, p3),
        area = _this$tri3.area,
        base = _this$tri3.base; // Vector projection


    var proj = this.dot_prod(p1, p2, p3) / base; // Distance from left pin

    var l1 = Math.max(-proj, 0); // Normal

    var h = Math.abs(this.tri_h(area, base));
    return Math.max(h, l1);
  },
  tri: function tri(p1, p2, p3) {
    var area = this.area(p1, p2, p3);
    var dx = p3[0] - p2[0];
    var dy = p3[1] - p2[1];
    var base = Math.sqrt(dx * dx + dy * dy);
    return {
      area: area,
      base: base
    };
  },

  /* Area of triangle:
          p1
        /    \
      p2  _  p3
  */
  area: function area(p1, p2, p3) {
    return p1[0] * (p2[1] - p3[1]) + p2[0] * (p3[1] - p1[1]) + p3[0] * (p1[1] - p2[1]);
  },
  // Triangle height
  tri_h: function tri_h(area, base) {
    return area / base;
  },
  // Dot product of (p2, p3) and (p2, p1)
  dot_prod: function dot_prod(p1, p2, p3) {
    var v1 = [p3[0] - p2[0], p3[1] - p2[1]];
    var v2 = [p1[0] - p2[0], p1[1] - p2[1]];
    return v1[0] * v2[0] + v1[1] * v2[1];
  },
  // Symmetrical log
  log: function log(x) {
    // TODO: log for small values
    return Math.sign(x) * Math.log(Math.abs(x) + 1);
  },
  // Symmetrical exp
  exp: function exp(x) {
    return Math.sign(x) * (Math.exp(Math.abs(x)) - 1);
  },
  // Middle line on log scale based on range & px height
  log_mid: function log_mid(r, h) {
    var log_hi = this.log(r[0]);
    var log_lo = this.log(r[1]);
    var px = h / 2;
    var gx = log_hi - px * (log_hi - log_lo) / h;
    return this.exp(gx);
  },
  // Return new adjusted range, based on the previous
  // range, new $_hi, target middle line
  re_range: function re_range(r1, hi2, mid) {
    var log_hi1 = this.log(r1[0]);
    var log_lo1 = this.log(r1[1]);
    var log_hi2 = this.log(hi2);
    var log_$ = this.log(mid);
    var W = (log_hi2 - log_$) * (log_hi1 - log_lo1) / (log_hi1 - log_$);
    return this.exp(log_hi2 - W);
  } // Return new adjusted range, based on the previous
  // range, new $_hi, target middle line + dy (shift)
  // WASTE

  /*range_shift(r1, hi2, mid, dy, h) {
      let log_hi1 = this.log(r1[0])
      let log_lo1 = this.log(r1[1])
      let log_hi2 = this.log(hi2)
      let log_$ = this.log(mid)
       let W = h * (log_hi2 - log_$) /
              (h * (log_hi1 - log_$) / (log_hi1 - log_lo1) + dy)
       return this.exp(log_hi2 - W)
   }*/

});
;// CONCATENATED MODULE: ./src/components/js/layout_fn.js
// Layout functional interface


/* harmony default export */ function layout_fn(self, range) {
  var ib = self.ti_map.ib;
  var dt = range[1] - range[0];
  var r = self.spacex / dt;
  var ls = self.grid.logScale || false;
  Object.assign(self, {
    // Time to screen coordinates
    t2screen: function t2screen(t) {
      if (ib) t = self.ti_map.smth2i(t);
      return Math.floor((t - range[0]) * r) - 0.5;
    },
    // $ to screen coordinates
    $2screen: function $2screen(y) {
      if (ls) y = math.log(y);
      return Math.floor(y * self.A + self.B) - 0.5;
    },
    // Time-axis nearest step
    t_magnet: function t_magnet(t) {
      if (ib) t = self.ti_map.smth2i(t);
      var cn = self.candles || self.master_grid.candles;
      var arr = cn.map(function (x) {
        return x.raw[0];
      });
      var i = utils.nearest_a(t, arr)[0];
      if (!cn[i]) return;
      return Math.floor(cn[i].x) - 0.5;
    },
    // Screen-Y to dollar value (or whatever)
    screen2$: function screen2$(y) {
      if (ls) return math.exp((y - self.B) / self.A);
      return (y - self.B) / self.A;
    },
    // Screen-X to timestamp
    screen2t: function screen2t(x) {
      // TODO: most likely Math.floor not needed
      // return Math.floor(range[0] + x / r)
      return range[0] + x / r;
    },
    // $-axis nearest step
    $_magnet: function $_magnet(price) {},
    // Nearest candlestick
    c_magnet: function c_magnet(t) {
      var cn = self.candles || self.master_grid.candles;
      var arr = cn.map(function (x) {
        return x.raw[0];
      });
      var i = utils.nearest_a(t, arr)[0];
      return cn[i];
    },
    // Nearest data points
    data_magnet: function data_magnet(t) {
      /* TODO: implement */
    }
  });
  return self;
}
;// CONCATENATED MODULE: ./src/components/js/log_scale.js
// Log-scale mode helpers
// TODO: all-negative numbers (sometimes wrong scaling)

/* harmony default export */ const log_scale = ({
  candle: function candle(self, mid, p, $p) {
    return {
      x: mid,
      w: self.px_step * $p.config.CANDLEW,
      o: Math.floor(math.log(p[1]) * self.A + self.B),
      h: Math.floor(math.log(p[2]) * self.A + self.B),
      l: Math.floor(math.log(p[3]) * self.A + self.B),
      c: Math.floor(math.log(p[4]) * self.A + self.B),
      raw: p
    };
  },
  expand: function expand(self, height) {
    // expand log scale
    var A = -height / (math.log(self.$_hi) - math.log(self.$_lo));
    var B = -math.log(self.$_hi) * A;
    var top = -height * 0.1;
    var bot = height * 1.1;
    self.$_hi = math.exp((top - B) / A);
    self.$_lo = math.exp((bot - B) / A);
  }
});
;// CONCATENATED MODULE: ./src/components/js/grid_maker.js






var grid_maker_TIMESCALES = constants.TIMESCALES,
    grid_maker_$SCALES = constants.$SCALES,
    grid_maker_WEEK = constants.WEEK,
    grid_maker_MONTH = constants.MONTH,
    grid_maker_YEAR = constants.YEAR,
    grid_maker_HOUR = constants.HOUR,
    grid_maker_DAY = constants.DAY;
var MAX_INT = Number.MAX_SAFE_INTEGER; // master_grid - ref to the master grid

function GridMaker(id, params, master_grid) {
  if (master_grid === void 0) {
    master_grid = null;
  }

  var sub = params.sub,
      interval = params.interval,
      range = params.range,
      ctx = params.ctx,
      $p = params.$p,
      layers_meta = params.layers_meta,
      height = params.height,
      y_t = params.y_t,
      ti_map = params.ti_map,
      grid = params.grid,
      timezone = params.timezone;
  var self = {
    ti_map: ti_map
  };
  var lm = layers_meta[id];
  var y_range_fn = null;
  var ls = grid.logScale;

  if (lm && Object.keys(lm).length) {
    // Gets last y_range fn()
    var yrs = Object.values(lm).filter(function (x) {
      return x.y_range;
    }); // The first y_range() determines the range

    if (yrs.length) y_range_fn = yrs[0].y_range;
  } // Calc vertical ($/₿) range


  function calc_$range() {
    if (!master_grid) {
      // $ candlestick range
      if (y_range_fn) {
        var _y_range_fn = y_range_fn(hi, lo),
            _y_range_fn2 = _slicedToArray(_y_range_fn, 2),
            hi = _y_range_fn2[0],
            lo = _y_range_fn2[1];
      } else {
        hi = -Infinity, lo = Infinity;

        for (var i = 0, n = sub.length; i < n; i++) {
          var x = sub[i];
          if (x[2] > hi) hi = x[2];
          if (x[3] < lo) lo = x[3];
        }
      }
    } else {
      // Offchart indicator range
      hi = -Infinity, lo = Infinity;

      for (var i = 0; i < sub.length; i++) {
        for (var j = 1; j < sub[i].length; j++) {
          var v = sub[i][j];
          if (v > hi) hi = v;
          if (v < lo) lo = v;
        }
      }

      if (y_range_fn) {
        var _y_range_fn3 = y_range_fn(hi, lo),
            _y_range_fn4 = _slicedToArray(_y_range_fn3, 3),
            hi = _y_range_fn4[0],
            lo = _y_range_fn4[1],
            exp = _y_range_fn4[2];
      }
    } // Fixed y-range in non-auto mode


    if (y_t && !y_t.auto && y_t.range) {
      self.$_hi = y_t.range[0];
      self.$_lo = y_t.range[1];
    } else {
      if (!ls) {
        exp = exp === false ? 0 : 1;
        self.$_hi = hi + (hi - lo) * $p.config.EXPAND * exp;
        self.$_lo = lo - (hi - lo) * $p.config.EXPAND * exp;
      } else {
        self.$_hi = hi;
        self.$_lo = lo;
        log_scale.expand(self, height);
      }

      if (self.$_hi === self.$_lo) {
        if (!ls) {
          self.$_hi *= 1.05; // Expand if height range === 0

          self.$_lo *= 0.95;
        } else {
          log_scale.expand(self, height);
        }
      }
    }
  }

  function calc_sidebar() {
    if (sub.length < 2) {
      self.prec = 0;
      self.sb = $p.config.SBMIN;
      return;
    } // TODO: improve sidebar width calculation
    // at transition point, when one precision is
    // replaced with another
    // Gets formated levels (their lengths),
    // calculates max and measures the sidebar length
    // from it:
    // TODO: add custom formatter f()


    self.prec = calc_precision(sub);
    var lens = [];
    lens.push(self.$_hi.toFixed(self.prec).length);
    lens.push(self.$_lo.toFixed(self.prec).length);
    var str = '0'.repeat(Math.max.apply(Math, lens)) + '    ';
    self.sb = ctx.measureText(str).width;
    self.sb = Math.max(Math.floor(self.sb), $p.config.SBMIN);
    self.sb = Math.min(self.sb, $p.config.SBMAX);
  } // Calculate $ precision for the Y-axis


  function calc_precision(data) {
    var max_r = 0,
        max_l = 0;
    var min = Infinity;
    var max = -Infinity; // Speed UP

    for (var i = 0, n = data.length; i < n; i++) {
      var x = data[i];
      if (x[1] > max) max = x[1];else if (x[1] < min) min = x[1];
    } // Get max lengths of integer and fractional parts


    [min, max].forEach(function (x) {
      // Fix undefined bug
      var str = x != null ? x.toString() : '';

      if (x < 0.000001) {
        // Parsing the exponential form. Gosh this
        // smells trickily
        var _str$split = str.split('e-'),
            _str$split2 = _slicedToArray(_str$split, 2),
            ls = _str$split2[0],
            rs = _str$split2[1];

        var _ls$split = ls.split('.'),
            _ls$split2 = _slicedToArray(_ls$split, 2),
            l = _ls$split2[0],
            r = _ls$split2[1];

        if (!r) r = '';
        r = {
          length: r.length + parseInt(rs) || 0
        };
      } else {
        var _str$split3 = str.split('.'),
            _str$split4 = _slicedToArray(_str$split3, 2),
            l = _str$split4[0],
            r = _str$split4[1];
      }

      if (r && r.length > max_r) {
        max_r = r.length;
      }

      if (l && l.length > max_l) {
        max_l = l.length;
      }
    }); // Select precision scheme depending
    // on the left and right part lengths
    //

    var even = max_r - max_r % 2 + 2;

    if (max_l === 1) {
      return Math.min(8, Math.max(2, even));
    }

    if (max_l <= 2) {
      return Math.min(4, Math.max(2, even));
    }

    return 2;
  }

  function calc_positions() {
    if (sub.length < 2) return;
    var dt = range[1] - range[0]; // A pixel space available to draw on (x-axis)

    self.spacex = $p.width - self.sb; // Candle capacity

    var capacity = dt / interval;
    self.px_step = self.spacex / capacity; // px / time ratio

    var r = self.spacex / dt;
    self.startx = (sub[0][0] - range[0]) * r; // Candle Y-transform: (A = scale, B = shift)

    if (!grid.logScale) {
      self.A = -height / (self.$_hi - self.$_lo);
      self.B = -self.$_hi * self.A;
    } else {
      self.A = -height / (math.log(self.$_hi) - math.log(self.$_lo));
      self.B = -math.log(self.$_hi) * self.A;
    }
  } // Select nearest good-loking t step (m is target scale)


  function time_step() {
    var k = ti_map.ib ? 60000 : 1;
    var xrange = (range[1] - range[0]) * k;
    var m = xrange * ($p.config.GRIDX / $p.width);
    var s = grid_maker_TIMESCALES;
    return utils.nearest_a(m, s)[1] / k;
  } // Select nearest good-loking $ step (m is target scale)


  function dollar_step() {
    var yrange = self.$_hi - self.$_lo;
    var m = yrange * ($p.config.GRIDY / height);
    var p = parseInt(yrange.toExponential().split('e')[1]);
    var d = Math.pow(10, p);
    var s = grid_maker_$SCALES.map(function (x) {
      return x * d;
    }); // TODO: center the range (look at RSI for example,
    // it looks ugly when "80" is near the top)

    return utils.strip(utils.nearest_a(m, s)[1]);
  }

  function dollar_mult() {
    var mult_hi = dollar_mult_hi();
    var mult_lo = dollar_mult_lo();
    return Math.max(mult_hi, mult_lo);
  } // Price step multiplier (for the log-scale mode)


  function dollar_mult_hi() {
    var h = Math.min(self.B, height);
    if (h < $p.config.GRIDY) return 1;
    var n = h / $p.config.GRIDY; // target grid N

    var yrange = self.$_hi;

    if (self.$_lo > 0) {
      var yratio = self.$_hi / self.$_lo;
    } else {
      yratio = self.$_hi / 1; // TODO: small values
    }

    var m = yrange * ($p.config.GRIDY / h);
    var p = parseInt(yrange.toExponential().split('e')[1]);
    return Math.pow(yratio, 1 / n);
  }

  function dollar_mult_lo() {
    var h = Math.min(height - self.B, height);
    if (h < $p.config.GRIDY) return 1;
    var n = h / $p.config.GRIDY; // target grid N

    var yrange = Math.abs(self.$_lo);

    if (self.$_hi < 0 && self.$_lo < 0) {
      var yratio = Math.abs(self.$_lo / self.$_hi);
    } else {
      yratio = Math.abs(self.$_lo) / 1;
    }

    var m = yrange * ($p.config.GRIDY / h);
    var p = parseInt(yrange.toExponential().split('e')[1]);
    return Math.pow(yratio, 1 / n);
  }

  function grid_x() {
    // If this is a subgrid, no need to calc a timeline,
    // we just borrow it from the master_grid
    if (!master_grid) {
      self.t_step = time_step();
      self.xs = [];
      var dt = range[1] - range[0];
      var r = self.spacex / dt;
      /* TODO: remove the left-side glitch
       let year_0 = Utils.get_year(sub[0][0])
      for (var t0 = year_0; t0 < range[0]; t0 += self.t_step) {}
       let m0 = Utils.get_month(t0)*/

      for (var i = 0; i < sub.length; i++) {
        var p = sub[i];
        var prev = sub[i - 1] || [];
        var prev_xs = self.xs[self.xs.length - 1] || [0, []];
        var x = Math.floor((p[0] - range[0]) * r);
        insert_line(prev, p, x); // Filtering lines that are too near

        var xs = self.xs[self.xs.length - 1] || [0, []];
        if (prev_xs === xs) continue;

        if (xs[1][0] - prev_xs[1][0] < self.t_step * 0.8) {
          // prev_xs is a higher "rank" label
          if (xs[2] <= prev_xs[2]) {
            self.xs.pop();
          } else {
            // Otherwise
            self.xs.splice(self.xs.length - 2, 1);
          }
        }
      } // TODO: fix grid extension for bigger timeframes


      if (interval < grid_maker_WEEK && r > 0) {
        extend_left(dt, r);
        extend_right(dt, r);
      }
    } else {
      self.t_step = master_grid.t_step;
      self.px_step = master_grid.px_step;
      self.startx = master_grid.startx;
      self.xs = master_grid.xs;
    }
  }

  function insert_line(prev, p, x, m0) {
    var prev_t = ti_map.ib ? ti_map.i2t(prev[0]) : prev[0];
    var p_t = ti_map.ib ? ti_map.i2t(p[0]) : p[0];

    if (ti_map.tf < grid_maker_DAY) {
      prev_t += timezone * grid_maker_HOUR;
      p_t += timezone * grid_maker_HOUR;
    }

    var d = timezone * grid_maker_HOUR; // TODO: take this block =========> (see below)

    if ((prev[0] || interval === grid_maker_YEAR) && utils.get_year(p_t) !== utils.get_year(prev_t)) {
      self.xs.push([x, p, grid_maker_YEAR]); // [px, [...], rank]
    } else if (prev[0] && utils.get_month(p_t) !== utils.get_month(prev_t)) {
      self.xs.push([x, p, grid_maker_MONTH]);
    } // TODO: should be added if this day !== prev day
    // And the same for 'botbar.js', TODO(*)
    else if (utils.day_start(p_t) === p_t) {
      self.xs.push([x, p, grid_maker_DAY]);
    } else if (p[0] % self.t_step === 0) {
      self.xs.push([x, p, interval]);
    }
  }

  function extend_left(dt, r) {
    if (!self.xs.length || !isFinite(r)) return;
    var t = self.xs[0][1][0];

    while (true) {
      t -= self.t_step;
      var x = Math.floor((t - range[0]) * r);
      if (x < 0) break; // TODO: ==========> And insert it here somehow

      if (t % interval === 0) {
        self.xs.unshift([x, [t], interval]);
      }
    }
  }

  function extend_right(dt, r) {
    if (!self.xs.length || !isFinite(r)) return;
    var t = self.xs[self.xs.length - 1][1][0];

    while (true) {
      t += self.t_step;
      var x = Math.floor((t - range[0]) * r);
      if (x > self.spacex) break;

      if (t % interval === 0) {
        self.xs.push([x, [t], interval]);
      }
    }
  }

  function grid_y() {
    // Prevent duplicate levels
    var m = Math.pow(10, -self.prec);
    self.$_step = Math.max(m, dollar_step());
    self.ys = [];
    var y1 = self.$_lo - self.$_lo % self.$_step;

    for (var y$ = y1; y$ <= self.$_hi; y$ += self.$_step) {
      var y = Math.floor(y$ * self.A + self.B);
      if (y > height) continue;
      self.ys.push([y, utils.strip(y$)]);
    }
  }

  function grid_y_log() {
    // TODO: Prevent duplicate levels, is this even
    // a problem here ?
    self.$_mult = dollar_mult();
    self.ys = [];
    if (!sub.length) return;
    var v = Math.abs(sub[sub.length - 1][1] || 1);
    var y1 = search_start_pos(v);
    var y2 = search_start_neg(-v);
    var yp = -Infinity; // Previous y value

    var n = height / $p.config.GRIDY; // target grid N

    var q = 1 + (self.$_mult - 1) / 2; // Over 0

    for (var y$ = y1; y$ > 0; y$ /= self.$_mult) {
      y$ = log_rounder(y$, q);
      var y = Math.floor(math.log(y$) * self.A + self.B);
      self.ys.push([y, utils.strip(y$)]);
      if (y > height) break;
      if (y - yp < $p.config.GRIDY * 0.7) break;
      if (self.ys.length > n + 1) break;
      yp = y;
    } // Under 0


    yp = Infinity;

    for (var y$ = y2; y$ < 0; y$ /= self.$_mult) {
      y$ = log_rounder(y$, q);

      var _y = Math.floor(math.log(y$) * self.A + self.B);

      if (yp - _y < $p.config.GRIDY * 0.7) break;
      self.ys.push([_y, utils.strip(y$)]);
      if (_y < 0) break;
      if (self.ys.length > n * 3 + 1) break;
      yp = _y;
    } // TODO: remove lines near to 0

  } // Search a start for the top grid so that
  // the fixed value always included


  function search_start_pos(value) {
    var N = height / $p.config.GRIDY; // target grid N

    var y = Infinity,
        y$ = value,
        count = 0;

    while (y > 0) {
      y = Math.floor(math.log(y$) * self.A + self.B);
      y$ *= self.$_mult;
      if (count++ > N * 3) return 0; // Prevents deadloops
    }

    return y$;
  }

  function search_start_neg(value) {
    var N = height / $p.config.GRIDY; // target grid N

    var y = -Infinity,
        y$ = value,
        count = 0;

    while (y < height) {
      y = Math.floor(math.log(y$) * self.A + self.B);
      y$ *= self.$_mult;
      if (count++ > N * 3) break; // Prevents deadloops
    }

    return y$;
  } // Make log scale levels look great again


  function log_rounder(x, quality) {
    var s = Math.sign(x);
    x = Math.abs(x);

    if (x > 10) {
      for (var div = 10; div < MAX_INT; div *= 10) {
        var nice = Math.floor(x / div) * div;

        if (x / nice > quality) {
          // More than 10% off
          break;
        }
      }

      div /= 10;
      return s * Math.floor(x / div) * div;
    } else if (x < 1) {
      for (var ro = 10; ro >= 1; ro--) {
        var _nice = utils.round(x, ro);

        if (x / _nice > quality) {
          // More than 10% off
          break;
        }
      }

      return s * utils.round(x, ro + 1);
    } else {
      return s * Math.floor(x);
    }
  }

  function apply_sizes() {
    self.width = $p.width - self.sb;
    self.height = height;
  }

  calc_$range();
  calc_sidebar();
  return {
    // First we need to calculate max sidebar width
    // (among all grids). Then we can actually make
    // them
    create: function create() {
      calc_positions();
      grid_x();

      if (grid.logScale) {
        grid_y_log();
      } else {
        grid_y();
      }

      apply_sizes(); // Link to the master grid (candlesticks)

      if (master_grid) {
        self.master_grid = master_grid;
      }

      self.grid = grid; // Grid params
      // Here we add some helpful functions for
      // plugin creators

      return layout_fn(self, range);
    },
    get_layout: function get_layout() {
      return self;
    },
    set_sidebar: function set_sidebar(v) {
      return self.sb = v;
    },
    get_sidebar: function get_sidebar() {
      return self.sb;
    }
  };
}

/* harmony default export */ const grid_maker = (GridMaker);
;// CONCATENATED MODULE: ./src/components/js/layout.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = layout_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function layout_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return layout_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return layout_arrayLikeToArray(o, minLen); }

function layout_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Calculates all necessary s*it to build the chart
// Heights, widths, transforms, ... = everything
// Why such a mess you ask? Well, that's because
// one components size can depend on other component
// data formatting (e.g. grid width depends on sidebar precision)
// So it's better to calc all in one place.





function Layout(params) {
  var chart = params.chart,
      sub = params.sub,
      offsub = params.offsub,
      interval = params.interval,
      range = params.range,
      ctx = params.ctx,
      layers_meta = params.layers_meta,
      ti_map = params.ti_map,
      $p = params.$props,
      y_ts = params.y_transforms;
  var mgrid = chart.grid || {};
  offsub = offsub.filter(function (x, i) {
    // Skip offchart overlays with custom grid id,
    // because they will be mergred with the existing grids
    return !(x.grid && x.grid.id);
  }); // Splits space between main chart
  // and offchart indicator grids

  function grid_hs() {
    var height = $p.height - $p.config.BOTBAR; // When at least one height defined (default = 1),
    // Pxs calculated as: (sum of weights) / number

    if (mgrid.height || offsub.find(function (x) {
      return x.grid.height;
    })) {
      return weighted_hs(mgrid, height);
    }

    var n = offsub.length;
    var off_h = 2 * Math.sqrt(n) / 7 / (n || 1); // Offchart grid height

    var px = Math.floor(height * off_h); // Main grid height

    var m = height - px * n;
    return [m].concat(Array(n).fill(px));
  }

  function weighted_hs(grid, height) {
    var hs = [{
      grid: grid
    }].concat(_toConsumableArray(offsub)).map(function (x) {
      return x.grid.height || 1;
    });
    var sum = hs.reduce(function (a, b) {
      return a + b;
    }, 0);
    hs = hs.map(function (x) {
      return Math.floor(x / sum * height);
    }); // Refine the height if Math.floor decreased px sum

    sum = hs.reduce(function (a, b) {
      return a + b;
    }, 0);

    for (var i = 0; i < height - sum; i++) {
      hs[i % hs.length]++;
    }

    return hs;
  }

  function candles_n_vol() {
    self.candles = [];
    self.volume = [];
    var maxv = Math.max.apply(Math, _toConsumableArray(sub.map(function (x) {
      return x[5];
    })));
    var vs = $p.config.VOLSCALE * $p.height / maxv;
    var x1,
        x2,
        mid,
        prev = undefined;
    var splitter = self.px_step > 5 ? 1 : 0;
    var hf_px_step = self.px_step * 0.5;

    for (var i = 0; i < sub.length; i++) {
      var p = sub[i];
      mid = self.t2screen(p[0]) + 0.5;
      self.candles.push(mgrid.logScale ? log_scale.candle(self, mid, p, $p) : {
        x: mid,
        w: self.px_step * $p.config.CANDLEW,
        o: Math.floor(p[1] * self.A + self.B),
        h: Math.floor(p[2] * self.A + self.B),
        l: Math.floor(p[3] * self.A + self.B),
        c: Math.floor(p[4] * self.A + self.B),
        raw: p
      }); // Clear volume bar if there is a time gap

      if (sub[i - 1] && p[0] - sub[i - 1][0] > interval) {
        prev = null;
      }

      x1 = prev || Math.floor(mid - hf_px_step);
      x2 = Math.floor(mid + hf_px_step) - 0.5;
      self.volume.push({
        x1: x1,
        x2: x2,
        h: p[5] * vs,
        green: p[4] >= p[1],
        raw: p
      });
      prev = x2 + splitter;
    }
  } // Main grid


  var hs = grid_hs();
  var specs = {
    sub: sub,
    interval: interval,
    range: range,
    ctx: ctx,
    $p: $p,
    layers_meta: layers_meta,
    ti_map: ti_map,
    height: hs[0],
    y_t: y_ts[0],
    grid: mgrid,
    timezone: $p.timezone
  };
  var gms = [new grid_maker(0, specs)]; // Sub grids

  var _iterator = _createForOfIteratorHelper(offsub.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          i = _step$value[0],
          _step$value$ = _step$value[1],
          data = _step$value$.data,
          grid = _step$value$.grid;

      specs.sub = data;
      specs.height = hs[i + 1];
      specs.y_t = y_ts[i + 1];
      specs.grid = grid || {};
      gms.push(new grid_maker(i + 1, specs, gms[0].get_layout()));
    } // Max sidebar among all grinds

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var sb = Math.max.apply(Math, _toConsumableArray(gms.map(function (x) {
    return x.get_sidebar();
  })));
  var grids = [],
      offset = 0;

  for (i = 0; i < gms.length; i++) {
    gms[i].set_sidebar(sb);
    grids.push(gms[i].create());
    grids[i].id = i;
    grids[i].offset = offset;
    offset += grids[i].height;
  }

  var self = grids[0];
  candles_n_vol();
  return {
    grids: grids,
    botbar: {
      width: $p.width,
      height: $p.config.BOTBAR,
      offset: offset,
      xs: grids[0] ? grids[0].xs : []
    }
  };
}

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function createClass_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./src/components/js/updater.js




function updater_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = updater_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function updater_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return updater_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return updater_arrayLikeToArray(o, minLen); }

function updater_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Cursor updater: calculates current values for
// OHLCV and all other indicators


var CursorUpdater = /*#__PURE__*/function () {
  function CursorUpdater(comp) {
    classCallCheck_classCallCheck(this, CursorUpdater);

    this.comp = comp, this.grids = comp._layout.grids, this.cursor = comp.cursor;
  }

  createClass_createClass(CursorUpdater, [{
    key: "sync",
    value: function sync(e) {
      // TODO: values not displaying if a custom grid id is set:
      // grid: { id: N }
      this.cursor.grid_id = e.grid_id;
      var once = true;

      var _iterator = updater_createForOfIteratorHelper(this.grids),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var grid = _step.value;
          var c = this.cursor_data(grid, e);

          if (!this.cursor.locked) {
            // TODO: find a better fix to invisible cursor prob
            if (once) {
              this.cursor.t = this.cursor_time(grid, e, c);
              if (this.cursor.t) once = false;
            }

            if (c.values) {
              this.comp.$set(this.cursor.values, grid.id, c.values);
            }
          }

          if (grid.id !== e.grid_id) continue;
          this.cursor.x = grid.t2screen(this.cursor.t);
          this.cursor.y = c.y;
          this.cursor.y$ = c.y$;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "overlay_data",
    value: function overlay_data(grid, e) {
      var s = grid.id === 0 ? 'main_section' : 'sub_section';
      var data = this.comp[s].data; // Split offchart data between offchart grids

      if (grid.id > 0) {
        // Sequential grids
        var _d = data.filter(function (x) {
          return x.grid.id === undefined;
        }); // grids with custom ids (for merging)


        var m = data.filter(function (x) {
          return x.grid.id === grid.id;
        });
        data = [_d[grid.id - 1]].concat(_toConsumableArray(m));
      }

      var t = grid.screen2t(e.x);
      var ids = {},
          res = {};

      var _iterator2 = updater_createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var d = _step2.value;
          var ts = d.data.map(function (x) {
            return x[0];
          });
          var i = utils.nearest_a(t, ts)[0];
          d.type in ids ? ids[d.type]++ : ids[d.type] = 0;
          res["".concat(d.type, "_").concat(ids[d.type])] = d.data[i];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return res;
    } // Nearest datapoints

  }, {
    key: "cursor_data",
    value: function cursor_data(grid, e) {
      var data = this.comp.main_section.sub;
      var xs = data.map(function (x) {
        return grid.t2screen(x[0]) + 0.5;
      });
      var i = utils.nearest_a(e.x, xs)[0];
      if (!xs[i]) return {};
      return {
        x: Math.floor(xs[i]) - 0.5,
        y: Math.floor(e.y - 2) - 0.5 - grid.offset,
        y$: grid.screen2$(e.y - 2 - grid.offset),
        t: (data[i] || [])[0],
        values: Object.assign({
          ohlcv: grid.id === 0 ? data[i] : undefined
        }, this.overlay_data(grid, e))
      };
    } // Get cursor t-position (extended)

  }, {
    key: "cursor_time",
    value: function cursor_time(grid, mouse, candle) {
      var t = grid.screen2t(mouse.x);
      var r = Math.abs((t - candle.t) / this.comp.interval);
      var sign = Math.sign(t - candle.t);

      if (r >= 0.5) {
        // Outside the data range
        var n = Math.round(r);
        return candle.t + n * this.comp.interval * sign;
      } // Inside the data range


      return candle.t;
    }
  }]);

  return CursorUpdater;
}();

/* harmony default export */ const updater = (CursorUpdater);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Section.vue?vue&type=template&id=8fbe9336&
var Sectionvue_type_template_id_8fbe9336_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "trading-vue-section" },
    [
      _c("chart-legend", {
        ref: "legend",
        attrs: {
          values: _vm.section_values,
          grid_id: _vm.grid_id,
          common: _vm.legend_props,
          meta_props: _vm.get_meta_props,
        },
        on: { "legend-button-click": _vm.button_click },
      }),
      _vm._v(" "),
      _c(
        "grid",
        _vm._b(
          {
            ref: "grid",
            attrs: { grid_id: _vm.grid_id },
            on: {
              "register-kb-listener": _vm.register_kb,
              "remove-kb-listener": _vm.remove_kb,
              "range-changed": _vm.range_changed,
              "cursor-changed": _vm.cursor_changed,
              "cursor-locked": _vm.cursor_locked,
              "layer-meta-props": _vm.emit_meta_props,
              "custom-event": _vm.emit_custom_event,
              "sidebar-transform": _vm.sidebar_transform,
              "rezoom-range": _vm.rezoom_range,
            },
          },
          "grid",
          _vm.grid_props,
          false
        )
      ),
      _vm._v(" "),
      _c(
        "sidebar",
        _vm._b(
          {
            ref: "sb-" + _vm.grid_id,
            attrs: { grid_id: _vm.grid_id, rerender: _vm.rerender },
            on: { "sidebar-transform": _vm.sidebar_transform },
          },
          "sidebar",
          _vm.sidebar_props,
          false
        )
      ),
    ],
    1
  )
}
var Sectionvue_type_template_id_8fbe9336_staticRenderFns = []
Sectionvue_type_template_id_8fbe9336_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/Section.vue?vue&type=template&id=8fbe9336&

;// CONCATENATED MODULE: ./src/stuff/frame.js


// Annimation frame with a fallback for
// slower devices


var FrameAnimation = /*#__PURE__*/function () {
  function FrameAnimation(cb) {
    var _this = this;

    classCallCheck_classCallCheck(this, FrameAnimation);

    this.t0 = this.t = utils.now();
    this.id = setInterval(function () {
      // The prev frame took too long
      if (utils.now() - _this.t > 100) return;

      if (utils.now() - _this.t0 > 1200) {
        _this.stop();
      }

      if (_this.id) cb(_this);
      _this.t = utils.now();
    }, 16);
  }

  createClass_createClass(FrameAnimation, [{
    key: "stop",
    value: function stop() {
      clearInterval(this.id);
      this.id = null;
    }
  }]);

  return FrameAnimation;
}();


// EXTERNAL MODULE: ./node_modules/hammerjs/hammer.js
var hammer = __webpack_require__(840);
// EXTERNAL MODULE: ./node_modules/hamsterjs/hamster.js
var hamster = __webpack_require__(981);
var hamster_default = /*#__PURE__*/__webpack_require__.n(hamster);
;// CONCATENATED MODULE: ./src/components/js/grid.js





function grid_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = grid_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function grid_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return grid_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return grid_arrayLikeToArray(o, minLen); }

function grid_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Grid.js listens to various user-generated events,
// emits Vue-events if something has changed (e.g. range)
// Think of it as an I/O system for Grid.vue




 // Grid is good.

var Grid = /*#__PURE__*/function () {
  function Grid(canvas, comp) {
    classCallCheck_classCallCheck(this, Grid);

    this.MIN_ZOOM = comp.config.MIN_ZOOM;
    this.MAX_ZOOM = comp.config.MAX_ZOOM;
    if (utils.is_mobile) this.MIN_ZOOM *= 0.5;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.comp = comp;
    this.$p = comp.$props;
    this.data = this.$p.sub;
    this.range = this.$p.range;
    this.id = this.$p.grid_id;
    this.layout = this.$p.layout.grids[this.id];
    this.interval = this.$p.interval;
    this.cursor = comp.$props.cursor;
    this.offset_x = 0;
    this.offset_y = 0;
    this.deltas = 0; // Wheel delta events

    this.wmode = this.$p.config.SCROLL_WHEEL;
    this.listeners();
    this.overlays = [];
  }

  createClass_createClass(Grid, [{
    key: "listeners",
    value: function listeners() {
      var _this = this;

      this.hm = hamster_default()(this.canvas);
      this.hm.wheel(function (event, delta) {
        return _this.mousezoom(-delta * 50, event);
      });
      var mc = this.mc = new hammer.Manager(this.canvas);
      var T = utils.is_mobile ? 10 : 0;
      mc.add(new hammer.Pan({
        threshold: T
      }));
      mc.add(new hammer.Tap());
      mc.add(new hammer.Pinch({
        threshold: 0
      }));
      mc.get('pinch').set({
        enable: true
      });
      if (utils.is_mobile) mc.add(new hammer.Press());
      mc.on('panstart', function (event) {
        if (_this.cursor.scroll_lock) return;

        if (_this.cursor.mode === 'aim') {
          return _this.emit_cursor_coord(event);
        }

        var tfrm = _this.$p.y_transform;
        _this.drug = {
          x: event.center.x + _this.offset_x,
          y: event.center.y + _this.offset_y,
          r: _this.range.slice(),
          t: _this.range[1] - _this.range[0],
          o: tfrm ? tfrm.offset || 0 : 0,
          y_r: tfrm && tfrm.range ? tfrm.range.slice() : undefined,
          B: _this.layout.B,
          t0: utils.now()
        };

        _this.comp.$emit('cursor-changed', {
          grid_id: _this.id,
          x: event.center.x + _this.offset_x,
          y: event.center.y + _this.offset_y
        });

        _this.comp.$emit('cursor-locked', true);
      });
      mc.on('panmove', function (event) {
        if (utils.is_mobile) {
          _this.calc_offset();

          _this.propagate('mousemove', _this.touch2mouse(event));
        }

        if (_this.drug) {
          _this.mousedrag(_this.drug.x + event.deltaX, _this.drug.y + event.deltaY);

          _this.comp.$emit('cursor-changed', {
            grid_id: _this.id,
            x: event.center.x + _this.offset_x,
            y: event.center.y + _this.offset_y
          });
        } else if (_this.cursor.mode === 'aim') {
          _this.emit_cursor_coord(event);
        }
      });
      mc.on('panend', function (event) {
        if (utils.is_mobile && _this.drug) {
          _this.pan_fade(event);
        }

        _this.drug = null;

        _this.comp.$emit('cursor-locked', false);
      });
      mc.on('tap', function (event) {
        if (!utils.is_mobile) return;

        _this.sim_mousedown(event);

        if (_this.fade) _this.fade.stop();

        _this.comp.$emit('cursor-changed', {});

        _this.comp.$emit('cursor-changed', {
          /*grid_id: this.id,
          x: undefined,//event.center.x + this.offset_x,
          y: undefined,//event.center.y + this.offset_y,*/
          mode: 'explore'
        });

        _this.update();
      });
      mc.on('pinchstart', function () {
        _this.drug = null;
        _this.pinch = {
          t: _this.range[1] - _this.range[0],
          r: _this.range.slice()
        };
      });
      mc.on('pinchend', function () {
        _this.pinch = null;
      });
      mc.on('pinch', function (event) {
        if (_this.pinch) _this.pinchzoom(event.scale);
      });
      mc.on('press', function (event) {
        if (!utils.is_mobile) return;
        if (_this.fade) _this.fade.stop();

        _this.calc_offset();

        _this.emit_cursor_coord(event, {
          mode: 'aim'
        });

        setTimeout(function () {
          return _this.update();
        });

        _this.sim_mousedown(event);
      });
      var add = addEventListener;
      add("gesturestart", this.gesturestart);
      add("gesturechange", this.gesturechange);
      add("gestureend", this.gestureend);
    }
  }, {
    key: "gesturestart",
    value: function gesturestart(event) {
      event.preventDefault();
    }
  }, {
    key: "gesturechange",
    value: function gesturechange(event) {
      event.preventDefault();
    }
  }, {
    key: "gestureend",
    value: function gestureend(event) {
      event.preventDefault();
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      if (utils.is_mobile) return;
      this.comp.$emit('cursor-changed', {
        grid_id: this.id,
        x: event.layerX,
        y: event.layerY + this.layout.offset
      });
      this.calc_offset();
      this.propagate('mousemove', event);
    }
  }, {
    key: "mouseout",
    value: function mouseout(event) {
      if (utils.is_mobile) return;
      this.comp.$emit('cursor-changed', {});
      this.propagate('mouseout', event);
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      this.drug = null;
      this.comp.$emit('cursor-locked', false);
      this.propagate('mouseup', event);
    }
  }, {
    key: "mousedown",
    value: function mousedown(event) {
      if (utils.is_mobile) return;
      this.propagate('mousedown', event);
      this.comp.$emit('cursor-locked', true);
      if (event.defaultPrevented) return;
      this.comp.$emit('custom-event', {
        event: 'grid-mousedown',
        args: [this.id, event]
      });
    } // Simulated mousedown (for mobile)

  }, {
    key: "sim_mousedown",
    value: function sim_mousedown(event) {
      var _this2 = this;

      if (event.srcEvent.defaultPrevented) return;
      this.comp.$emit('custom-event', {
        event: 'grid-mousedown',
        args: [this.id, event]
      });
      this.propagate('mousemove', this.touch2mouse(event));
      this.update();
      this.propagate('mousedown', this.touch2mouse(event));
      setTimeout(function () {
        _this2.propagate('click', _this2.touch2mouse(event));
      });
    } // Convert touch to "mouse" event

  }, {
    key: "touch2mouse",
    value: function touch2mouse(e) {
      this.calc_offset();
      return {
        original: e.srcEvent,
        layerX: e.center.x + this.offset_x,
        layerY: e.center.y + this.offset_y,
        preventDefault: function preventDefault() {
          this.original.preventDefault();
        }
      };
    }
  }, {
    key: "click",
    value: function click(event) {
      this.propagate('click', event);
    }
  }, {
    key: "emit_cursor_coord",
    value: function emit_cursor_coord(event, add) {
      if (add === void 0) {
        add = {};
      }

      this.comp.$emit('cursor-changed', Object.assign({
        grid_id: this.id,
        x: event.center.x + this.offset_x,
        y: event.center.y + this.offset_y + this.layout.offset
      }, add));
    }
  }, {
    key: "pan_fade",
    value: function pan_fade(event) {
      var _this3 = this;

      var dt = utils.now() - this.drug.t0;
      var dx = this.range[1] - this.drug.r[1];
      var v = 42 * dx / dt;
      var v0 = Math.abs(v * 0.01);
      if (dt > 500) return;
      if (this.fade) this.fade.stop();
      this.fade = new FrameAnimation(function (self) {
        v *= 0.85;

        if (Math.abs(v) < v0) {
          self.stop();
        }

        _this3.range[0] += v;
        _this3.range[1] += v;

        _this3.change_range();
      });
    }
  }, {
    key: "calc_offset",
    value: function calc_offset() {
      var rect = this.canvas.getBoundingClientRect();
      this.offset_x = -rect.x;
      this.offset_y = -rect.y;
    }
  }, {
    key: "new_layer",
    value: function new_layer(layer) {
      if (layer.name === 'crosshair') {
        this.crosshair = layer;
      } else {
        this.overlays.push(layer);
      }

      this.update();
    }
  }, {
    key: "del_layer",
    value: function del_layer(id) {
      this.overlays = this.overlays.filter(function (x) {
        return x.id !== id;
      });
      this.update();
    }
  }, {
    key: "show_hide_layer",
    value: function show_hide_layer(event) {
      var l = this.overlays.filter(function (x) {
        return x.id === event.id;
      });
      if (l.length) l[0].display = event.display;
    }
  }, {
    key: "update",
    value: function update() {
      var _this4 = this;

      // Update reference to the grid
      // TODO: check what happens if data changes interval
      this.layout = this.$p.layout.grids[this.id];
      this.interval = this.$p.interval;
      if (!this.layout) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (this.$p.shaders.length) this.apply_shaders();
      this.grid();
      var overlays = [];
      overlays.push.apply(overlays, _toConsumableArray(this.overlays)); // z-index sorting

      overlays.sort(function (l1, l2) {
        return l1.z - l2.z;
      });
      overlays.forEach(function (l) {
        if (!l.display) return;

        _this4.ctx.save();

        var r = l.renderer;
        if (r.pre_draw) r.pre_draw(_this4.ctx);
        r.draw(_this4.ctx);
        if (r.post_draw) r.post_draw(_this4.ctx);

        _this4.ctx.restore();
      });

      if (this.crosshair) {
        this.crosshair.renderer.draw(this.ctx);
      }
    }
  }, {
    key: "apply_shaders",
    value: function apply_shaders() {
      var layout = this.$p.layout.grids[this.id];
      var props = {
        layout: layout,
        range: this.range,
        interval: this.interval,
        tf: layout.ti_map.tf,
        cursor: this.cursor,
        colors: this.$p.colors,
        sub: this.data,
        font: this.$p.font,
        config: this.$p.config,
        meta: this.$p.meta
      };

      var _iterator = grid_createForOfIteratorHelper(this.$p.shaders),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;
          this.ctx.save();
          s.draw(this.ctx, props);
          this.ctx.restore();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Actually draws the grid (for real)

  }, {
    key: "grid",
    value: function grid() {
      this.ctx.strokeStyle = this.$p.colors.grid;
      this.ctx.beginPath();
      var ymax = this.layout.height;

      var _iterator2 = grid_createForOfIteratorHelper(this.layout.xs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              x = _step2$value[0],
              p = _step2$value[1];

          this.ctx.moveTo(x - 0.5, 0);
          this.ctx.lineTo(x - 0.5, ymax);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = grid_createForOfIteratorHelper(this.layout.ys),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              y = _step3$value[0],
              y$ = _step3$value[1];

          this.ctx.moveTo(0, y - 0.5);
          this.ctx.lineTo(this.layout.width, y - 0.5);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.ctx.stroke();
      if (this.$p.grid_id) this.upper_border();
    }
  }, {
    key: "upper_border",
    value: function upper_border() {
      this.ctx.strokeStyle = this.$p.colors.scale;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0.5);
      this.ctx.lineTo(this.layout.width, 0.5);
      this.ctx.stroke();
    }
  }, {
    key: "mousezoom",
    value: function mousezoom(delta, event) {
      // TODO: for mobile
      if (this.wmode !== 'pass') {
        if (this.wmode === 'click' && !this.$p.meta.activated) {
          return;
        }

        event.originalEvent.preventDefault();
        event.preventDefault();
      }

      event.deltaX = event.deltaX || utils.get_deltaX(event);
      event.deltaY = event.deltaY || utils.get_deltaY(event);

      if (Math.abs(event.deltaX) > 0) {
        this.trackpad = true;

        if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
          delta *= 0.1;
        }

        this.trackpad_scroll(event);
      }

      if (this.trackpad) delta *= 0.032;
      delta = utils.smart_wheel(delta); // TODO: mouse zooming is a little jerky,
      // needs to follow f(mouse_wheel_speed) and
      // if speed is low, scroll shoud be slower

      if (delta < 0 && this.data.length <= this.MIN_ZOOM) return;
      if (delta > 0 && this.data.length > this.MAX_ZOOM) return;
      var k = this.interval / 1000;
      var diff = delta * k * this.data.length;
      var tl = this.comp.config.ZOOM_MODE === 'tl';

      if (event.originalEvent.ctrlKey || tl) {
        var offset = event.originalEvent.offsetX;
        var diff1 = offset / (this.canvas.width - 1) * diff;
        var diff2 = diff - diff1;
        this.range[0] -= diff1;
        this.range[1] += diff2;
      } else {
        this.range[0] -= diff;
      }

      if (tl) {
        var _offset = event.originalEvent.offsetY;

        var _diff = _offset / (this.canvas.height - 1) * 2;

        var _diff2 = 2 - _diff;

        var z = diff / (this.range[1] - this.range[0]); //rezoom_range(z, diff_x, diff_y)

        this.comp.$emit('rezoom-range', {
          grid_id: this.id,
          z: z,
          diff1: _diff,
          diff2: _diff2
        });
      }

      this.change_range();
    }
  }, {
    key: "mousedrag",
    value: function mousedrag(x, y) {
      var dt = this.drug.t * (this.drug.x - x) / this.layout.width;
      var d$ = this.layout.$_hi - this.layout.$_lo;
      d$ *= (this.drug.y - y) / this.layout.height;
      var offset = this.drug.o + d$;
      var ls = this.layout.grid.logScale;

      if (ls && this.drug.y_r) {
        var dy = this.drug.y - y;
        var range = this.drug.y_r.slice();
        range[0] = math.exp((0 - this.drug.B + dy) / this.layout.A);
        range[1] = math.exp((this.layout.height - this.drug.B + dy) / this.layout.A);
      }

      if (this.drug.y_r && this.$p.y_transform && !this.$p.y_transform.auto) {
        this.comp.$emit('sidebar-transform', {
          grid_id: this.id,
          range: ls ? range || this.drug.y_r : [this.drug.y_r[0] - offset, this.drug.y_r[1] - offset]
        });
      }

      this.range[0] = this.drug.r[0] + dt;
      this.range[1] = this.drug.r[1] + dt;
      this.change_range();
    }
  }, {
    key: "pinchzoom",
    value: function pinchzoom(scale) {
      if (scale > 1 && this.data.length <= this.MIN_ZOOM) return;
      if (scale < 1 && this.data.length > this.MAX_ZOOM) return;
      var t = this.pinch.t;
      var nt = t * 1 / scale;
      this.range[0] = this.pinch.r[0] - (nt - t) * 0.5;
      this.range[1] = this.pinch.r[1] + (nt - t) * 0.5;
      this.change_range();
    }
  }, {
    key: "trackpad_scroll",
    value: function trackpad_scroll(event) {
      var dt = this.range[1] - this.range[0];
      this.range[0] += event.deltaX * dt * 0.011;
      this.range[1] += event.deltaX * dt * 0.011;
      this.change_range();
    }
  }, {
    key: "change_range",
    value: function change_range() {
      // TODO: better way to limit the view. Problem:
      // when you are at the dead end of the data,
      // and keep scrolling,
      // the chart continues to scale down a little.
      // Solution: I don't know yet
      if (!this.range.length || this.data.length < 2) return;
      var l = this.data.length - 1;
      var data = this.data;
      var range = this.range;
      range[0] = utils.clamp(range[0], -Infinity, data[l][0] - this.interval * 5.5);
      range[1] = utils.clamp(range[1], data[0][0] + this.interval * 5.5, Infinity); // TODO: IMPORTANT scrolling is jerky The Problem caused
      // by the long round trip of 'range-changed' event.
      // First it propagates up to update layout in Chart.vue,
      // then it moves back as watch() update. It takes 1-5 ms.
      // And because the delay is different each time we see
      // the lag. No smooth movement and it's annoying.
      // Solution: we could try to calc the layout immediatly
      // somewhere here. Still will hurt the sidebar & bottombar

      this.comp.$emit('range-changed', range);
    } // Propagate mouse event to overlays

  }, {
    key: "propagate",
    value: function propagate(name, event) {
      var _iterator4 = grid_createForOfIteratorHelper(this.overlays),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var layer = _step4.value;

          if (layer.renderer[name]) {
            layer.renderer[name](event);
          }

          var mouse = layer.renderer.mouse;
          var keys = layer.renderer.keys;

          if (mouse.listeners) {
            mouse.emit(name, event);
          }

          if (keys && keys.listeners) {
            keys.emit(name, event);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var rm = removeEventListener;
      rm("gesturestart", this.gesturestart);
      rm("gesturechange", this.gesturechange);
      rm("gestureend", this.gestureend);
      if (this.mc) this.mc.destroy();
      if (this.hm) this.hm.unwheel();
    }
  }]);

  return Grid;
}();


;// CONCATENATED MODULE: ./src/mixins/canvas.js
// Interactive canvas-based component
// Should implement: mousemove, mouseout, mouseup, mousedown, click

/* harmony default export */ const canvas = ({
  methods: {
    setup: function setup() {
      var _this = this;

      var id = "".concat(this.$props.tv_id, "-").concat(this._id, "-canvas");
      var canvas = document.getElementById(id);
      var dpr = window.devicePixelRatio || 1;
      canvas.style.width = "".concat(this._attrs.width, "px");
      canvas.style.height = "".concat(this._attrs.height, "px");
      if (dpr < 1) dpr = 1; // Realy ? That's it? Issue #63

      this.$nextTick(function () {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        var ctx = canvas.getContext('2d', {// TODO: test the boost:
          //alpha: false,
          //desynchronized: true,
          //preserveDrawingBuffer: false
        });
        ctx.scale(dpr, dpr);

        _this.redraw(); // Fallback fix for Brave browser
        // https://github.com/brave/brave-browser/issues/1738


        if (!ctx.measureTextOrg) {
          ctx.measureTextOrg = ctx.measureText;
        }

        ctx.measureText = function (text) {
          return utils.measureText(ctx, text, _this.$props.tv_id);
        };
      });
    },
    create_canvas: function create_canvas(h, id, props) {
      var _this2 = this;

      this._id = id;
      this._attrs = props.attrs;
      return h('div', {
        "class": "trading-vue-".concat(id),
        style: {
          left: props.position.x + 'px',
          top: props.position.y + 'px',
          position: 'absolute'
        }
      }, [h('canvas', {
        on: {
          mousemove: function mousemove(e) {
            return _this2.renderer.mousemove(e);
          },
          mouseout: function mouseout(e) {
            return _this2.renderer.mouseout(e);
          },
          mouseup: function mouseup(e) {
            return _this2.renderer.mouseup(e);
          },
          mousedown: function mousedown(e) {
            return _this2.renderer.mousedown(e);
          }
        },
        attrs: Object.assign({
          id: "".concat(this.$props.tv_id, "-").concat(id, "-canvas")
        }, props.attrs),
        ref: 'canvas',
        style: props.style
      })].concat(props.hs || []));
    },
    redraw: function redraw() {
      if (!this.renderer) return;
      this.renderer.update();
    }
  },
  watch: {
    width: function width(val) {
      this._attrs.width = val;
      this.setup();
    },
    height: function height(val) {
      this._attrs.height = val;
      this.setup();
    }
  }
});
;// CONCATENATED MODULE: ./src/mixins/uxlist.js
// Manager for Inteerface objects
/* harmony default export */ const uxlist = ({
  methods: {
    on_ux_event: function on_ux_event(d, target) {
      if (d.event === 'new-interface') {
        if (d.args[0].target === target) {
          d.args[0].vars = d.args[0].vars || {};
          d.args[0].grid_id = d.args[1];
          d.args[0].overlay_id = d.args[2];
          this.uxs.push(d.args[0]); // this.rerender++
        }
      } else if (d.event === 'close-interface') {
        this.uxs = this.uxs.filter(function (x) {
          return x.uuid !== d.args[0];
        });
      } else if (d.event === 'modify-interface') {
        var ux = this.uxs.filter(function (x) {
          return x.uuid === d.args[0];
        });

        if (ux.length) {
          this.modify(ux[0], d.args[1]);
        }
      } else if (d.event === 'hide-interface') {
        var _ux = this.uxs.filter(function (x) {
          return x.uuid === d.args[0];
        });

        if (_ux.length) {
          _ux[0].hidden = true;
          this.modify(_ux[0], {
            hidden: true
          });
        }
      } else if (d.event === 'show-interface') {
        var _ux2 = this.uxs.filter(function (x) {
          return x.uuid === d.args[0];
        });

        if (_ux2.length) {
          this.modify(_ux2[0], {
            hidden: false
          });
        }
      } else {
        return d;
      }
    },
    modify: function modify(ux, obj) {
      if (obj === void 0) {
        obj = {};
      }

      for (var k in obj) {
        if (k in ux) {
          this.$set(ux, k, obj[k]);
        }
      }
    },
    // Remove all UXs for a given overlay id
    remove_all_ux: function remove_all_ux(id) {
      this.uxs = this.uxs.filter(function (x) {
        return x.overlay.id !== id;
      });
    }
  },
  data: function data() {
    return {
      uxs: []
    };
  }
});
;// CONCATENATED MODULE: ./src/components/js/crosshair.js



var Crosshair = /*#__PURE__*/function () {
  function Crosshair(comp) {
    classCallCheck_classCallCheck(this, Crosshair);

    this.comp = comp;
    this.$p = comp.$props;
    this.data = this.$p.sub;
    this._visible = false;
    this.locked = false;
    this.layout = this.$p.layout;
  }

  createClass_createClass(Crosshair, [{
    key: "draw",
    value: function draw(ctx) {
      // Update reference to the grid
      this.layout = this.$p.layout;
      var cursor = this.comp.$props.cursor;
      if (!this.visible && cursor.mode === 'explore') return;
      this.x = this.$p.cursor.x;
      this.y = this.$p.cursor.y;
      ctx.save();
      ctx.strokeStyle = this.$p.colors.cross;
      ctx.beginPath();
      ctx.setLineDash([5]); // H

      if (this.$p.cursor.grid_id === this.layout.id) {
        ctx.moveTo(0, this.y);
        ctx.lineTo(this.layout.width - 0.5, this.y);
      } // V


      ctx.moveTo(this.x, 0);
      ctx.lineTo(this.x, this.layout.height);
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.visible = false;
      this.x = undefined;
      this.y = undefined;
    }
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    },
    set: function set(val) {
      this._visible = val;
    }
  }]);

  return Crosshair;
}();


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Crosshair.vue?vue&type=script&lang=js&


/* harmony default export */ const Crosshairvue_type_script_lang_js_ = ({
  name: 'Crosshair',
  props: ['cursor', 'colors', 'layout', 'sub'],
  methods: {
    create: function create() {
      this.ch = new Crosshair(this); // New grid overlay-renderer descriptor.
      // Should implement draw() (see Spline.vue)

      this.$emit('new-grid-layer', {
        name: 'crosshair',
        renderer: this.ch
      });
    }
  },
  watch: {
    cursor: {
      handler: function handler() {
        if (!this.ch) this.create(); // Explore = default mode on mobile

        var cursor = this.$props.cursor;
        var explore = cursor.mode === 'explore';

        if (!cursor.x || !cursor.y) {
          this.ch.hide();
          this.$emit('redraw-grid');
          return;
        }

        this.ch.visible = !explore;
      },
      deep: true
    }
  },
  render: function render(h) {
    return h();
  }
});
;// CONCATENATED MODULE: ./src/components/Crosshair.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Crosshairvue_type_script_lang_js_ = (Crosshairvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/Crosshair.vue
var Crosshair_render, Crosshair_staticRenderFns
;



/* normalize component */
;
var component = normalizeComponent(
  components_Crosshairvue_type_script_lang_js_,
  Crosshair_render,
  Crosshair_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Crosshair.vue"
/* harmony default export */ const components_Crosshair = (component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/KeyboardListener.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ const KeyboardListenervue_type_script_lang_js_ = ({
  name: 'KeyboardListener',
  render: function render(h) {
    return h();
  },
  created: function created() {
    this.$emit('register-kb-listener', {
      id: this._uid,
      keydown: this.keydown,
      keyup: this.keyup,
      keypress: this.keypress
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$emit('remove-kb-listener', {
      id: this._uid
    });
  },
  methods: {
    keydown: function keydown(event) {
      this.$emit('keydown', event);
    },
    keyup: function keyup(event) {
      this.$emit('keyup', event);
    },
    keypress: function keypress(event) {
      this.$emit('keypress', event);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/KeyboardListener.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_KeyboardListenervue_type_script_lang_js_ = (KeyboardListenervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/KeyboardListener.vue
var KeyboardListener_render, KeyboardListener_staticRenderFns
;



/* normalize component */
;
var KeyboardListener_component = normalizeComponent(
  components_KeyboardListenervue_type_script_lang_js_,
  KeyboardListener_render,
  KeyboardListener_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var KeyboardListener_api; }
KeyboardListener_component.options.__file = "src/components/KeyboardListener.vue"
/* harmony default export */ const KeyboardListener = (KeyboardListener_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UxLayer.vue?vue&type=template&id=390ccf6e&
var UxLayervue_type_template_id_390ccf6e_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { class: "trading-vue-grid-ux-" + _vm.id, style: _vm.style },
    _vm._l(_vm.uxs, function (ux) {
      return _c("ux-wrapper", {
        key: ux.uuid,
        attrs: {
          ux: ux,
          updater: _vm.updater,
          colors: _vm.colors,
          config: _vm.config,
        },
        on: { "custom-event": _vm.on_custom_event },
      })
    }),
    1
  )
}
var UxLayervue_type_template_id_390ccf6e_staticRenderFns = []
UxLayervue_type_template_id_390ccf6e_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/UxLayer.vue?vue&type=template&id=390ccf6e&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UxWrapper.vue?vue&type=template&id=4bc32070&
var UxWrappervue_type_template_id_4bc32070_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.visible
    ? _c(
        "div",
        {
          staticClass: "trading-vue-ux-wrapper",
          style: _vm.style,
          attrs: { id: "tvjs-ux-wrapper-" + _vm.ux.uuid },
        },
        [
          _c(_vm.ux.component, {
            tag: "component",
            attrs: {
              ux: _vm.ux,
              updater: _vm.updater,
              wrapper: _vm.wrapper,
              colors: _vm.colors,
            },
            on: { "custom-event": _vm.on_custom_event },
          }),
          _vm._v(" "),
          _vm.ux.show_pin
            ? _c("div", {
                staticClass: "tvjs-ux-wrapper-pin",
                style: _vm.pin_style,
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.ux.win_header !== false
            ? _c("div", { staticClass: "tvjs-ux-wrapper-head" }, [
                _c(
                  "div",
                  {
                    staticClass: "tvjs-ux-wrapper-close",
                    style: _vm.btn_style,
                    on: { click: _vm.close },
                  },
                  [_vm._v("×")]
                ),
              ])
            : _vm._e(),
        ],
        1
      )
    : _vm._e()
}
var UxWrappervue_type_template_id_4bc32070_staticRenderFns = []
UxWrappervue_type_template_id_4bc32070_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/UxWrapper.vue?vue&type=template&id=4bc32070&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UxWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const UxWrappervue_type_script_lang_js_ = ({
  name: 'UxWrapper',
  props: ['ux', 'updater', 'colors', 'config'],
  mounted: function mounted() {
    this.self = document.getElementById(this.uuid);
    this.w = this.self.offsetWidth; // TODO: => width: "content"

    this.h = this.self.offsetHeight; // TODO: => height: "content"

    this.update_position();
  },
  created: function created() {
    this.mouse.on('mousemove', this.mousemove);
    this.mouse.on('mouseout', this.mouseout);
  },
  beforeDestroy: function beforeDestroy() {
    this.mouse.off('mousemove', this.mousemove);
    this.mouse.off('mouseout', this.mouseout);
  },
  methods: {
    update_position: function update_position() {
      if (this.uxr.hidden) return;
      var lw = this.layout.width;
      var lh = this.layout.height;
      var pin = this.uxr.pin;

      switch (pin[0]) {
        case 'cursor':
          var x = this.uxr.overlay.cursor.x;
          break;

        case 'mouse':
          x = this.mouse.x;
          break;

        default:
          if (typeof pin[0] === 'string') {
            x = this.parse_coord(pin[0], lw);
          } else {
            x = this.layout.t2screen(pin[0]);
          }

      }

      switch (pin[1]) {
        case 'cursor':
          var y = this.uxr.overlay.cursor.y;
          break;

        case 'mouse':
          y = this.mouse.y;
          break;

        default:
          if (typeof pin[1] === 'string') {
            y = this.parse_coord(pin[1], lh);
          } else {
            y = this.layout.$2screen(pin[1]);
          }

      }

      this.x = x + this.ox;
      this.y = y + this.oy;
    },
    parse_coord: function parse_coord(str, scale) {
      str = str.trim();
      if (str === '0' || str === '') return 0;
      var plus = str.split('+');

      if (plus.length === 2) {
        return this.parse_coord(plus[0], scale) + this.parse_coord(plus[1], scale);
      }

      var minus = str.split('-');

      if (minus.length === 2) {
        return this.parse_coord(minus[0], scale) - this.parse_coord(minus[1], scale);
      }

      var per = str.split('%');

      if (per.length === 2) {
        return scale * parseInt(per[0]) / 100;
      }

      var px = str.split('px');

      if (px.length === 2) {
        return parseInt(px[0]);
      }

      return undefined;
    },
    mousemove: function mousemove() {
      this.update_position();
      this.visible = true;
    },
    mouseout: function mouseout() {
      if (this.uxr.pin.includes('cursor') || this.uxr.pin.includes('mouse')) this.visible = false;
    },
    on_custom_event: function on_custom_event(event) {
      this.$emit('custom-event', event);

      if (event.event === 'modify-interface') {
        if (this.self) {
          this.w = this.self.offsetWidth;
          this.h = this.self.offsetHeight;
        }

        this.update_position();
      }
    },
    close: function close() {
      this.$emit('custom-event', {
        event: 'close-interface',
        args: [this.$props.ux.uuid]
      });
    }
  },
  computed: {
    uxr: function uxr() {
      return this.$props.ux; // just a ref
    },
    layout: function layout() {
      return this.$props.ux.overlay.layout;
    },
    settings: function settings() {
      return this.$props.ux.overlay.settings;
    },
    uuid: function uuid() {
      return "tvjs-ux-wrapper-".concat(this.uxr.uuid);
    },
    mouse: function mouse() {
      return this.uxr.overlay.mouse;
    },
    style: function style() {
      var st = {
        'display': this.uxr.hidden ? 'none' : undefined,
        'left': "".concat(this.x, "px"),
        'top': "".concat(this.y, "px"),
        'pointer-events': this.uxr.pointer_events || 'all',
        'z-index': this.z_index
      };
      if (this.uxr.win_styling !== false) st = Object.assign(st, {
        'border': "1px solid ".concat(this.$props.colors.grid),
        'border-radius': '3px',
        'background': "".concat(this.background)
      });
      return st;
    },
    pin_style: function pin_style() {
      return {
        'left': "".concat(-this.ox, "px"),
        'top': "".concat(-this.oy, "px"),
        'background-color': this.uxr.pin_color
      };
    },
    btn_style: function btn_style() {
      return {
        'background': "".concat(this.inactive_btn_color),
        'color': "".concat(this.inactive_btn_color)
      };
    },
    pin_pos: function pin_pos() {
      return this.uxr.pin_position ? this.uxr.pin_position.split(',') : ['0', '0'];
    },
    // Offset x
    ox: function ox() {
      if (this.pin_pos.length !== 2) return undefined;
      var x = this.parse_coord(this.pin_pos[0], this.w);
      return -x;
    },
    // Offset y
    oy: function oy() {
      if (this.pin_pos.length !== 2) return undefined;
      var y = this.parse_coord(this.pin_pos[1], this.h);
      return -y;
    },
    z_index: function z_index() {
      var base_index = this.settings['z-index'] || this.settings['zIndex'] || 0;
      var ux_index = this.uxr['z_index'] || 0;
      return base_index + ux_index;
    },
    background: function background() {
      var c = this.uxr.background || this.$props.colors.back;
      return utils.apply_opacity(c, this.uxr.background_opacity || this.$props.config.UX_OPACITY);
    },
    inactive_btn_color: function inactive_btn_color() {
      return this.uxr.inactive_btn_color || this.$props.colors.grid;
    },
    wrapper: function wrapper() {
      return {
        x: this.x,
        y: this.y,
        pin_x: this.x - this.ox,
        pin_y: this.y - this.oy
      };
    }
  },
  watch: {
    updater: function updater() {
      this.update_position();
    }
  },
  data: function data() {
    return {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      visible: true
    };
  }
});
;// CONCATENATED MODULE: ./src/components/UxWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_UxWrappervue_type_script_lang_js_ = (UxWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UxWrapper.vue?vue&type=style&index=0&lang=css&
var UxWrappervue_type_style_index_0_lang_css_ = __webpack_require__(565);
;// CONCATENATED MODULE: ./src/components/UxWrapper.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/UxWrapper.vue



;


/* normalize component */

var UxWrapper_component = normalizeComponent(
  components_UxWrappervue_type_script_lang_js_,
  UxWrappervue_type_template_id_4bc32070_render,
  UxWrappervue_type_template_id_4bc32070_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var UxWrapper_api; }
UxWrapper_component.options.__file = "src/components/UxWrapper.vue"
/* harmony default export */ const UxWrapper = (UxWrapper_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UxLayer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const UxLayervue_type_script_lang_js_ = ({
  name: 'UxLayer',
  props: ['tv_id', 'id', 'uxs', 'updater', 'colors', 'config'],
  components: {
    UxWrapper: UxWrapper
  },
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    on_custom_event: function on_custom_event(event) {
      this.$emit('custom-event', event);
    }
  },
  computed: {
    style: function style() {
      return {
        'top': this.$props.id !== 0 ? '1px' : 0,
        'left': 0,
        'width': '100%',
        'height': 'calc(100% - 2px)',
        'position': 'absolute',
        'z-index': '1',
        'pointer-events': 'none',
        'overflow': 'hidden'
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/components/UxLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_UxLayervue_type_script_lang_js_ = (UxLayervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/UxLayer.vue





/* normalize component */
;
var UxLayer_component = normalizeComponent(
  components_UxLayervue_type_script_lang_js_,
  UxLayervue_type_template_id_390ccf6e_render,
  UxLayervue_type_template_id_390ccf6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var UxLayer_api; }
UxLayer_component.options.__file = "src/components/UxLayer.vue"
/* harmony default export */ const UxLayer = (UxLayer_component.exports);
;// CONCATENATED MODULE: ./src/stuff/mouse.js



function mouse_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = mouse_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function mouse_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mouse_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mouse_arrayLikeToArray(o, minLen); }

function mouse_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Mouse event handler for overlay
var Mouse = /*#__PURE__*/function () {
  function Mouse(comp) {
    classCallCheck_classCallCheck(this, Mouse);

    this.comp = comp;
    this.map = {};
    this.listeners = 0;
    this.pressed = false;
    this.x = comp.$props.cursor.x;
    this.y = comp.$props.cursor.y;
    this.t = comp.$props.cursor.t;
    this.y$ = comp.$props.cursor.y$;
  } // You can choose where to place the handler
  // (beginning or end of the queue)


  createClass_createClass(Mouse, [{
    key: "on",
    value: function on(name, handler, dir) {
      if (dir === void 0) {
        dir = "unshift";
      }

      if (!handler) return;
      this.map[name] = this.map[name] || [];
      this.map[name][dir](handler);
      this.listeners++;
    }
  }, {
    key: "off",
    value: function off(name, handler) {
      if (!this.map[name]) return;
      var i = this.map[name].indexOf(handler);
      if (i < 0) return;
      this.map[name].splice(i, 1);
      this.listeners--;
    } // Called by grid.js

  }, {
    key: "emit",
    value: function emit(name, event) {
      var l = this.comp.layout;

      if (name in this.map) {
        var _iterator = mouse_createForOfIteratorHelper(this.map[name]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            f(event);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (name === 'mousemove') {
        this.x = event.layerX;
        this.y = event.layerY;
        this.t = l.screen2t(this.x);
        this.y$ = l.screen2$(this.y);
      }

      if (name === 'mousedown') {
        this.pressed = true;
      }

      if (name === 'mouseup') {
        this.pressed = false;
      }
    }
  }]);

  return Mouse;
}();


;// CONCATENATED MODULE: ./src/mixins/overlay.js
// Usuful stuff for creating overlays. Include as mixin

/* harmony default export */ const overlay = ({
  props: ['id', 'num', 'interval', 'cursor', 'colors', 'layout', 'sub', 'data', 'settings', 'grid_id', 'font', 'config', 'meta', 'tf', 'i0', 'last'],
  mounted: function mounted() {
    // TODO(1): when hot reloading, dynamicaly changed mixins
    // dissapear (cuz it's a hack), the only way for now
    // is to reload the browser
    if (!this.draw) {
      this.draw = function (ctx) {
        var text = 'EARLY ADOPTER BUG: reload the browser & enjoy';
        console.warn(text);
      };
    } // Main chart?


    var main = this.$props.sub === this.$props.data;
    this.meta_info(); // TODO(1): quick fix for vue2, in vue3 we use 3rd party emit

    try {
      new Function('return ' + this.$emit)();
      this._$emit = this.$emit;
      this.$emit = this.custom_event;
    } catch (e) {
      return;
    }

    this._$emit('new-grid-layer', {
      name: this.$options.name,
      id: this.$props.id,
      renderer: this,
      display: 'display' in this.$props.settings ? this.$props.settings['display'] : true,
      z: this.$props.settings['z-index'] || this.$props.settings['zIndex'] || (main ? 0 : -1)
    }); // Overlay meta-props (adjusting behaviour)


    this._$emit('layer-meta-props', {
      grid_id: this.$props.grid_id,
      layer_id: this.$props.id,
      legend: this.legend,
      data_colors: this.data_colors,
      y_range: this.y_range
    });

    this.exec_script();
    this.mouse = new Mouse(this);
    if (this.init_tool) this.init_tool();
    if (this.init) this.init();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.destroy) this.destroy();

    this._$emit('delete-grid-layer', this.$props.id);
  },
  methods: {
    use_for: function use_for() {
      /* override it (mandatory) */
      console.warn('use_for() should be implemented');
      console.warn("Format: use_for() {\n                  return ['type1', 'type2', ...]\n            }");
    },
    meta_info: function meta_info() {
      /* override it (optional) */
      var id = this.$props.id;
      console.warn("".concat(id, " meta_info() is req. for publishing"));
      console.warn("Format: meta_info() {\n                author: 'Satoshi Smith',\n                version: '1.0.0',\n                contact (opt) '<email>'\n                github: (opt) '<GitHub Page>',\n            }");
    },
    custom_event: function custom_event(event) {
      if (event.split(':')[0] === 'hook') return;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (event === 'change-settings' || event === 'object-selected' || event === 'new-shader' || event === 'new-interface' || event === 'remove-tool') {
        args.push(this.grid_id, this.id);

        if (this.$props.settings.$uuid) {
          args.push(this.$props.settings.$uuid);
        }
      }

      if (event === 'new-interface') {
        args[0].overlay = this;
        args[0].uuid = this.last_ux_id = "".concat(this.grid_id, "-").concat(this.id, "-").concat(this.uxs_count++);
      } // TODO: add a namespace to the event name
      // TODO(2): this prevents call overflow, but
      // the root of evil is in (1)


      if (event === 'custom-event') return;

      this._$emit('custom-event', {
        event: event,
        args: args
      });
    },
    // TODO: the event is not firing when the same
    // overlay type is added to the offchart[]
    exec_script: function exec_script() {
      if (this.calc) this.$emit('exec-script', {
        grid_id: this.$props.grid_id,
        layer_id: this.$props.id,
        src: this.calc(),
        use_for: this.use_for()
      });
    }
  },
  watch: {
    settings: {
      handler: function handler(n, p) {
        if (this.watch_uuid) this.watch_uuid(n, p);

        this._$emit('show-grid-layer', {
          id: this.$props.id,
          display: 'display' in this.$props.settings ? this.$props.settings['display'] : true
        });
      },
      deep: true
    }
  },
  data: function data() {
    return {
      uxs_count: 0,
      last_ux_id: null
    };
  },
  render: function render(h) {
    return h();
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Spline.vue?vue&type=script&lang=js&
// Spline renderer. (SMAs, EMAs, TEMAs...
// you know what I mean)
// TODO: make a real spline, not a bunch of lines...
// Adds all necessary stuff for you.

/* harmony default export */ const Splinevue_type_script_lang_js_ = ({
  name: 'Spline',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.1.2'
      };
    },
    // Here goes your code. You are provided with:
    // { All stuff is reactive }
    // $props.layout -> positions of all chart elements +
    //  some helper functions (see layout_fn.js)
    // $props.interval -> candlestick time interval
    // $props.sub -> current subset of candlestick data
    // $props.data -> your indicator's data subset.
    //  Comes "as is", should have the following format:
    //  [[<timestamp>, ... ], ... ]
    // $props.colors -> colors (see TradingVue.vue)
    // $props.cursor -> current position of crosshair
    // $props.settings -> indicator's custom settings
    //  E.g. colors, line thickness, etc. You define it.
    // $props.num -> indicator's layer number (of All
    // layers in the current grid)
    // $props.id -> indicator's id (e.g. EMA_0)
    // ~
    // Finally, let's make the canvas dirty!
    draw: function draw(ctx) {
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var layout = this.$props.layout;
      var i = this.data_index;
      var data = this.$props.data;

      if (!this.skip_nan) {
        for (var k = 0, n = data.length; k < n; k++) {
          var p = data[k];
          var x = layout.t2screen(p[0]);
          var y = layout.$2screen(p[i]);
          ctx.lineTo(x, y);
        }
      } else {
        var skip = false;

        for (var k = 0, n = data.length; k < n; k++) {
          var _p = data[k];

          var _x = layout.t2screen(_p[0]);

          var _y = layout.$2screen(_p[i]);

          if (_p[i] == null || _y !== _y) {
            skip = true;
          } else {
            if (skip) ctx.moveTo(_x, _y);
            ctx.lineTo(_x, _y);
            skip = false;
          }
        }
      }

      ctx.stroke();
    },
    // For all data with these types overlay will be
    // added to the renderer list. And '$props.data'
    // will have the corresponding values. If you want to
    // redefine the default behviour for a prticular
    // indicator (let's say EMA),
    // just create a new overlay with the same type:
    // e.g. use_for() { return ['EMA'] }.
    use_for: function use_for() {
      return ['Spline', 'EMA', 'SMA'];
    },
    // Colors for the legend, should have the
    // same dimention as a data point (excl. timestamp)
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    },
    data_index: function data_index() {
      return this.sett.dataIndex || 1;
    },
    // Don't connect separate parts if true
    skip_nan: function skip_nan() {
      return this.sett.skipNaN;
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Spline.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Splinevue_type_script_lang_js_ = (Splinevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Spline.vue
var Spline_render, Spline_staticRenderFns
;



/* normalize component */
;
var Spline_component = normalizeComponent(
  overlays_Splinevue_type_script_lang_js_,
  Spline_render,
  Spline_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Spline_api; }
Spline_component.options.__file = "src/components/overlays/Spline.vue"
/* harmony default export */ const Spline = (Spline_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Splines.vue?vue&type=script&lang=js&
// Channel renderer. (Keltner, Bollinger)

/* harmony default export */ const Splinesvue_type_script_lang_js_ = ({
  name: 'Splines',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.1.0'
      };
    },
    draw: function draw(ctx) {
      for (var i = 0; i < this.lines_num; i++) {
        var _i = i % this.clrx.length;

        ctx.strokeStyle = this.clrx[_i];
        ctx.lineWidth = this.widths[i] || this.line_width;
        ctx.beginPath();
        this.draw_spline(ctx, i);
        ctx.stroke();
      }
    },
    draw_spline: function draw_spline(ctx, i) {
      var layout = this.$props.layout;
      var data = this.$props.data;

      if (!this.skip_nan) {
        for (var k = 0, n = data.length; k < n; k++) {
          var p = data[k];
          var x = layout.t2screen(p[0]);
          var y = layout.$2screen(p[i + 1]);
          ctx.lineTo(x, y);
        }
      } else {
        var skip = false;

        for (var k = 0, n = data.length; k < n; k++) {
          var _p = data[k];

          var _x = layout.t2screen(_p[0]);

          var _y = layout.$2screen(_p[i + 1]);

          if (_p[i + 1] == null || _y !== _y) {
            skip = true;
          } else {
            if (skip) ctx.moveTo(_x, _y);
            ctx.lineTo(_x, _y);
            skip = false;
          }
        }
      }
    },
    use_for: function use_for() {
      return ['Splines', 'DMI'];
    },
    data_colors: function data_colors() {
      return this.clrx;
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    widths: function widths() {
      return this.sett.lineWidths || [];
    },
    clrx: function clrx() {
      var colors = this.sett.colors || [];
      var n = this.$props.num;

      if (!colors.length) {
        for (var i = 0; i < this.lines_num; i++) {
          colors.push(this.COLORS[(n + i) % 5]);
        }
      }

      return colors;
    },
    lines_num: function lines_num() {
      if (!this.$props.data[0]) return 0;
      return this.$props.data[0].length - 1;
    },
    // Don't connect separate parts if true
    skip_nan: function skip_nan() {
      return this.sett.skipNaN;
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Splines.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Splinesvue_type_script_lang_js_ = (Splinesvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Splines.vue
var Splines_render, Splines_staticRenderFns
;



/* normalize component */
;
var Splines_component = normalizeComponent(
  overlays_Splinesvue_type_script_lang_js_,
  Splines_render,
  Splines_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Splines_api; }
Splines_component.options.__file = "src/components/overlays/Splines.vue"
/* harmony default export */ const Splines = (Splines_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Range.vue?vue&type=script&lang=js&
// R S I . Because we love it
// Adds all necessary stuff for you.

/* harmony default export */ const Rangevue_type_script_lang_js_ = ({
  name: 'Range',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.1'
      };
    },
    // Here goes your code. You are provided with:
    // { All stuff is reactive }
    // $props.layout -> positions of all chart elements +
    //  some helper functions (see layout_fn.js)
    // $props.interval -> candlestick time interval
    // $props.sub -> current subset of candlestick data
    // $props.data -> your indicator's data subset.
    //  Comes "as is", should have the following format:
    //  [[<timestamp>, ... ], ... ]
    // $props.colors -> colors (see TradingVue.vue)
    // $props.cursor -> current position of crosshair
    // $props.settings -> indicator's custom settings
    //  E.g. colors, line thickness, etc. You define it.
    // $props.num -> indicator's layer number (of All
    // layers in the current grid)
    // $props.id -> indicator's id (e.g. EMA_0)
    // ~
    // Finally, let's make the canvas dirty!
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      var upper = layout.$2screen(this.sett.upper || 70);
      var lower = layout.$2screen(this.sett.lower || 30);
      var data = this.$props.data; // RSI values

      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();

      for (var k = 0, n = data.length; k < n; k++) {
        var p = data[k];
        var x = layout.t2screen(p[0]);
        var y = layout.$2screen(p[1]);
        ctx.lineTo(x, y);
      }

      ctx.stroke();
      ctx.strokeStyle = this.band_color;
      ctx.setLineDash([5]); // Will be removed after draw()

      ctx.beginPath(); // Fill the area between the bands

      ctx.fillStyle = this.back_color;
      ctx.fillRect(0, upper, layout.width, lower - upper); // Upper band

      ctx.moveTo(0, upper);
      ctx.lineTo(layout.width, upper); // Lower band

      ctx.moveTo(0, lower);
      ctx.lineTo(layout.width, lower);
      ctx.stroke();
    },
    // For all data with these types overlay will be
    // added to the renderer list. And '$props.data'
    // will have the corresponding values. If you want to
    // redefine the default behviour for a prticular
    // indicator (let's say EMA),
    // just create a new overlay with the same type:
    // e.g. use_for() { return ['EMA'] }.
    use_for: function use_for() {
      return ['Range', 'RSI'];
    },
    // Colors for the legend, should have the
    // same dimention as a data point (excl. timestamp)
    data_colors: function data_colors() {
      return [this.color];
    },
    // Y-Range tansform. For example you need a fixed
    // Y-range for an indicator, you can do it here!
    // Gets estimated range, @return you favorite range
    y_range: function y_range(hi, lo) {
      return [Math.max(hi, this.sett.upper || 70), Math.min(lo, this.sett.lower || 30)];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    color: function color() {
      return this.sett.color || '#ec206e';
    },
    band_color: function band_color() {
      return this.sett.bandColor || '#ddd';
    },
    back_color: function back_color() {
      return this.sett.backColor || '#381e9c16';
    }
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Range.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Rangevue_type_script_lang_js_ = (Rangevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Range.vue
var Range_render, Range_staticRenderFns
;



/* normalize component */
;
var Range_component = normalizeComponent(
  overlays_Rangevue_type_script_lang_js_,
  Range_render,
  Range_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Range_api; }
Range_component.options.__file = "src/components/overlays/Range.vue"
/* harmony default export */ const Range = (Range_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Trades.vue?vue&type=script&lang=js&

/* harmony default export */ const Tradesvue_type_script_lang_js_ = ({
  name: 'Trades',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.2'
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      var data = this.$props.data;
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'black';

      for (var k = 0, n = data.length; k < n; k++) {
        var p = data[k];
        ctx.fillStyle = p[1] ? this.buy_color : this.sell_color;
        ctx.beginPath();
        var x = layout.t2screen(p[0]); // x - Mapping

        var y = layout.$2screen(p[2]); // y - Mapping

        ctx.arc(x, y, this.marker_size + 0.5, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();

        if (this.show_label && p[3]) {
          this.draw_label(ctx, x, y, p);
        }
      }
    },
    draw_label: function draw_label(ctx, x, y, p) {
      ctx.fillStyle = this.label_color;
      ctx.font = this.new_font;
      ctx.textAlign = 'center';
      ctx.fillText(p[3], x, y - 25);
    },
    use_for: function use_for() {
      return ['Trades'];
    },
    // Defines legend format (values & colors)
    legend: function legend(values) {
      switch (values[1]) {
        case 0:
          var pos = 'Sell';
          break;

        case 1:
          pos = 'Buy';
          break;

        default:
          pos = 'Unknown';
      }

      return [{
        value: pos
      }, {
        value: values[2].toFixed(4),
        color: this.$props.colors.text
      }].concat(values[3] ? [{
        value: values[3]
      }] : []);
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    default_font: function default_font() {
      return '12px ' + this.$props.font.split('px').pop();
    },
    buy_color: function buy_color() {
      return this.sett.buyColor || '#63df89';
    },
    sell_color: function sell_color() {
      return this.sett.sellColor || '#ec4662';
    },
    label_color: function label_color() {
      return this.sett.labelColor || '#999';
    },
    marker_size: function marker_size() {
      return this.sett.markerSize || 5;
    },
    show_label: function show_label() {
      return this.sett.showLabel !== false;
    },
    new_font: function new_font() {
      return this.sett.font || this.default_font;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Trades.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Tradesvue_type_script_lang_js_ = (Tradesvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Trades.vue
var Trades_render, Trades_staticRenderFns
;



/* normalize component */
;
var Trades_component = normalizeComponent(
  overlays_Tradesvue_type_script_lang_js_,
  Trades_render,
  Trades_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Trades_api; }
Trades_component.options.__file = "src/components/overlays/Trades.vue"
/* harmony default export */ const Trades = (Trades_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Channel.vue?vue&type=script&lang=js&
// Channel renderer. (Keltner, Bollinger)
// TODO: allow color transparency
// TODO: improve performance: draw in one solid chunk

/* harmony default export */ const Channelvue_type_script_lang_js_ = ({
  name: 'Channel',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.1'
      };
    },

    /*draw(ctx) {
        ctx.lineWidth = this.line_width
        ctx.strokeStyle = this.color
        ctx.fillStyle = this.back_color
         for (var i = 0; i < this.$props.data.length - 1; i++) {
              let p1 = this.mapp(this.$props.data[i])
            let p2 = this.mapp(this.$props.data[i+1])
             if (!p2) continue
            if (p1.y1 !== p1.y1) continue // Fix NaN
             // Background
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y1)
            ctx.lineTo(p2.x + 0.1, p2.y1)
            ctx.lineTo(p2.x + 0.1, p2.y3)
            ctx.lineTo(p1.x, p1.y3)
            ctx.fill()
             // Lines
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y1)
            ctx.lineTo(p2.x, p2.y1)
            if (this.show_mid) {
                ctx.moveTo(p1.x, p1.y2)
                ctx.lineTo(p2.x, p2.y2)
            }
            ctx.moveTo(p1.x, p1.y3)
            ctx.lineTo(p2.x, p2.y3)
            ctx.stroke()
         }
    },*/
    draw: function draw(ctx) {
      // Background
      var data = this.data;
      var layout = this.layout;
      ctx.beginPath();
      ctx.fillStyle = this.back_color;

      for (var i = 0; i < data.length; i++) {
        var p = data[i];
        var x = layout.t2screen(p[0]);
        var y = layout.$2screen(p[1] || undefined);
        ctx.lineTo(x, y);
      }

      for (var i = data.length - 1; i >= 0; i--) {
        var _p = data[i];

        var _x = layout.t2screen(_p[0]);

        var _y = layout.$2screen(_p[3] || undefined);

        ctx.lineTo(_x, _y);
      }

      ctx.fill(); // Lines

      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color; // Top line

      ctx.beginPath();

      for (var i = 0; i < data.length; i++) {
        var _p2 = data[i];

        var _x2 = layout.t2screen(_p2[0]);

        var _y2 = layout.$2screen(_p2[1] || undefined);

        ctx.lineTo(_x2, _y2);
      }

      ctx.stroke(); // Bottom line

      ctx.beginPath();

      for (var i = 0; i < data.length; i++) {
        var _p3 = data[i];

        var _x3 = layout.t2screen(_p3[0]);

        var _y3 = layout.$2screen(_p3[3] || undefined);

        ctx.lineTo(_x3, _y3);
      }

      ctx.stroke(); // Middle line

      if (!this.show_mid) return;
      ctx.beginPath();

      for (var i = 0; i < data.length; i++) {
        var _p4 = data[i];

        var _x4 = layout.t2screen(_p4[0]);

        var _y4 = layout.$2screen(_p4[2] || undefined);

        ctx.lineTo(_x4, _y4);
      }

      ctx.stroke();
    },
    mapp: function mapp(p) {
      var layout = this.$props.layout;
      return p && {
        x: layout.t2screen(p[0]),
        y1: layout.$2screen(p[1]),
        y2: layout.$2screen(p[2]),
        y3: layout.$2screen(p[3])
      };
    },
    use_for: function use_for() {
      return ['Channel', 'KC', 'BB'];
    },
    data_colors: function data_colors() {
      return [this.color, this.color, this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    },
    show_mid: function show_mid() {
      return 'showMid' in this.sett ? this.sett.showMid : true;
    },
    back_color: function back_color() {
      return this.sett.backColor || this.color + '11';
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Channel.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Channelvue_type_script_lang_js_ = (Channelvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Channel.vue
var Channel_render, Channel_staticRenderFns
;



/* normalize component */
;
var Channel_component = normalizeComponent(
  overlays_Channelvue_type_script_lang_js_,
  Channel_render,
  Channel_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Channel_api; }
Channel_component.options.__file = "src/components/overlays/Channel.vue"
/* harmony default export */ const Channel = (Channel_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Segment.vue?vue&type=script&lang=js&
// Segment renderer.

/* harmony default export */ const Segmentvue_type_script_lang_js_ = ({
  name: 'Segment',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.0'
      };
    },
    draw: function draw(ctx) {
      if (!this.p1 || !this.p2) return;
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var layout = this.$props.layout;
      var x1 = layout.t2screen(this.p1[0]);
      var y1 = layout.$2screen(this.p1[1]);
      ctx.moveTo(x1, y1);
      var x2 = layout.t2screen(this.p2[0]);
      var y2 = layout.$2screen(this.p2[1]);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    },
    use_for: function use_for() {
      return ['Segment'];
    },
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    p1: function p1() {
      return this.$props.settings.p1;
    },
    p2: function p2() {
      return this.$props.settings.p2;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.9;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Segment.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Segmentvue_type_script_lang_js_ = (Segmentvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Segment.vue
var Segment_render, Segment_staticRenderFns
;



/* normalize component */
;
var Segment_component = normalizeComponent(
  overlays_Segmentvue_type_script_lang_js_,
  Segment_render,
  Segment_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Segment_api; }
Segment_component.options.__file = "src/components/overlays/Segment.vue"
/* harmony default export */ const Segment = (Segment_component.exports);
;// CONCATENATED MODULE: ./src/components/js/layout_cnv.js


// Claculates postions and sizes for candlestick
// and volume bars for the given subset of data

function layout_cnv(self) {
  var $p = self.$props;
  var sub = $p.data;
  var t2screen = $p.layout.t2screen;
  var layout = $p.layout;
  var candles = [];
  var volume = []; // The volume bar height is determined as a percentage of
  // the chart's height (VOLSCALE)

  var maxv = Math.max.apply(Math, _toConsumableArray(sub.map(function (x) {
    return x[5];
  })));
  var vs = $p.config.VOLSCALE * layout.height / maxv;
  var x1,
      x2,
      w,
      avg_w,
      mid,
      prev = undefined; // Subset interval against main interval

  var _new_interval = new_interval(layout, $p, sub),
      _new_interval2 = _slicedToArray(_new_interval, 2),
      interval2 = _new_interval2[0],
      ratio = _new_interval2[1];

  var px_step2 = layout.px_step * ratio;
  var splitter = px_step2 > 5 ? 1 : 0; // A & B are current chart tranformations:
  // A === scale,  B === Y-axis shift

  for (var i = 0; i < sub.length; i++) {
    var p = sub[i];
    mid = t2screen(p[0]) + 1; // Clear volume bar if there is a time gap

    if (sub[i - 1] && p[0] - sub[i - 1][0] > interval2) {
      prev = null;
    }

    x1 = prev || Math.floor(mid - px_step2 * 0.5);
    x2 = Math.floor(mid + px_step2 * 0.5) - 0.5; // TODO: add log scale support

    candles.push({
      x: mid,
      w: layout.px_step * $p.config.CANDLEW * ratio,
      o: Math.floor(p[1] * layout.A + layout.B),
      h: Math.floor(p[2] * layout.A + layout.B),
      l: Math.floor(p[3] * layout.A + layout.B),
      c: Math.floor(p[4] * layout.A + layout.B),
      raw: p
    });
    volume.push({
      x1: x1,
      x2: x2,
      h: p[5] * vs,
      green: p[4] >= p[1],
      raw: p
    });
    prev = x2 + splitter;
  }

  return {
    candles: candles,
    volume: volume
  };
}
function layout_vol(self) {
  var $p = self.$props;
  var sub = $p.data;
  var t2screen = $p.layout.t2screen;
  var layout = $p.layout;
  var volume = []; // Detect data second dimention size:

  var dim = sub[0] ? sub[0].length : 0; // Support special volume data (see API book), or OHLCV
  // Data indices:

  self._i1 = dim < 6 ? 1 : 5;
  self._i2 = dim < 6 ? function (p) {
    return p[2];
  } : function (p) {
    return p[4] >= p[1];
  };
  var maxv = Math.max.apply(Math, _toConsumableArray(sub.map(function (x) {
    return x[self._i1];
  })));
  var volscale = self.volscale || $p.config.VOLSCALE;
  var vs = volscale * layout.height / maxv;
  var x1,
      x2,
      mid,
      prev = undefined; // Subset interval against main interval

  var _new_interval3 = new_interval(layout, $p, sub),
      _new_interval4 = _slicedToArray(_new_interval3, 2),
      interval2 = _new_interval4[0],
      ratio = _new_interval4[1];

  var px_step2 = layout.px_step * ratio;
  var splitter = px_step2 > 5 ? 1 : 0; // A & B are current chart tranformations:
  // A === scale,  B === Y-axis shift

  for (var i = 0; i < sub.length; i++) {
    var p = sub[i];
    mid = t2screen(p[0]) + 1; // Clear volume bar if there is a time gap

    if (sub[i - 1] && p[0] - sub[i - 1][0] > interval2) {
      prev = null;
    }

    x1 = prev || Math.floor(mid - px_step2 * 0.5);
    x2 = Math.floor(mid + px_step2 * 0.5) - 0.5;
    volume.push({
      x1: x1,
      x2: x2,
      h: p[self._i1] * vs,
      green: self._i2(p),
      raw: p
    });
    prev = x2 + splitter;
  }

  return volume;
}

function new_interval(layout, $p, sub) {
  // Subset interval against main interval
  if (!layout.ti_map.ib) {
    var interval2 = $p.tf || utils.detect_interval(sub);
    var ratio = interval2 / $p.interval;
  } else {
    if ($p.tf) {
      var ratio = $p.tf / layout.ti_map.tf;
      var interval2 = ratio;
    } else {
      var interval2 = utils.detect_interval(sub);
      var ratio = interval2 / $p.interval;
    }
  }

  return [interval2, ratio];
}
;// CONCATENATED MODULE: ./src/components/primitives/candle.js



// Candle object for Candles overlay
var CandleExt = /*#__PURE__*/function () {
  function CandleExt(overlay, ctx, data) {
    classCallCheck_classCallCheck(this, CandleExt);

    this.ctx = ctx;
    this.self = overlay;
    this.style = data.raw[6] || this.self;
    this.draw(data);
  }

  createClass_createClass(CandleExt, [{
    key: "draw",
    value: function draw(data) {
      var green = data.raw[4] >= data.raw[1];
      var body_color = green ? this.style.colorCandleUp : this.style.colorCandleDw;
      var wick_color = green ? this.style.colorWickUp : this.style.colorWickDw;
      var w = Math.max(data.w, 1);
      var hw = Math.max(Math.floor(w * 0.5), 1);
      var h = Math.abs(data.o - data.c);
      var max_h = data.c === data.o ? 1 : 2;
      var x05 = Math.floor(data.x) - 0.5;
      this.ctx.strokeStyle = wick_color;
      this.ctx.beginPath();
      this.ctx.moveTo(x05, Math.floor(data.h));
      this.ctx.lineTo(x05, Math.floor(data.l));
      this.ctx.stroke();

      if (data.w > 1.5) {
        this.ctx.fillStyle = body_color; // TODO: Move common calculations to layout.js

        var s = green ? 1 : -1;
        this.ctx.fillRect(Math.floor(data.x - hw - 1), data.c, Math.floor(hw * 2 + 1), s * Math.max(h, max_h));
      } else {
        this.ctx.strokeStyle = body_color;
        this.ctx.beginPath();
        this.ctx.moveTo(x05, Math.floor(Math.min(data.o, data.c)));
        this.ctx.lineTo(x05, Math.floor(Math.max(data.o, data.c)) + (data.o === data.c ? 1 : 0));
        this.ctx.stroke();
      }
    }
  }]);

  return CandleExt;
}();


;// CONCATENATED MODULE: ./src/components/primitives/volbar.js



var VolbarExt = /*#__PURE__*/function () {
  function VolbarExt(overlay, ctx, data) {
    classCallCheck_classCallCheck(this, VolbarExt);

    this.ctx = ctx;
    this.$p = overlay.$props;
    this.self = overlay;
    this.style = data.raw[6] || this.self;
    this.draw(data);
  }

  createClass_createClass(VolbarExt, [{
    key: "draw",
    value: function draw(data) {
      var y0 = this.$p.layout.height;
      var w = data.x2 - data.x1;
      var h = Math.floor(data.h);
      this.ctx.fillStyle = data.green ? this.style.colorVolUp : this.style.colorVolDw;
      this.ctx.fillRect(Math.floor(data.x1), Math.floor(y0 - h - 0.5), Math.floor(w), Math.floor(h + 1));
    }
  }]);

  return VolbarExt;
}();


;// CONCATENATED MODULE: ./src/components/primitives/price.js



// Price bar & price line (shader)
var Price = /*#__PURE__*/function () {
  function Price(comp) {
    classCallCheck_classCallCheck(this, Price);

    this.comp = comp;
  } // Defines an inline shader (has access to both
  // target & overlay's contexts)


  createClass_createClass(Price, [{
    key: "init_shader",
    value: function init_shader() {
      var _this = this;

      var layout = this.comp.$props.layout;
      var config = this.comp.$props.config;
      var comp = this.comp;

      var last_bar = function last_bar() {
        return _this.last_bar();
      };

      this.comp.$emit('new-shader', {
        target: 'sidebar',
        draw: function draw(ctx) {
          var bar = last_bar();
          if (!bar) return;
          var w = ctx.canvas.width;
          var h = config.PANHEIGHT;
          var lbl = bar.price.toFixed(layout.prec);
          ctx.fillStyle = bar.color;
          var x = -0.5;
          var y = bar.y - h * 0.5 - 0.5;
          var a = 7;
          ctx.fillRect(x - 0.5, y, w + 1, h);
          ctx.fillStyle = comp.$props.colors.textHL;
          ctx.textAlign = 'left';
          ctx.fillText(lbl, a, y + 15);
        }
      });
      this.shader = true;
    } // Regular draw call for overaly

  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.comp.$props.meta.last) return;
      if (!this.shader) this.init_shader();
      var layout = this.comp.$props.layout;
      var last = this.comp.$props.last;
      var dir = last[4] >= last[1];
      var color = dir ? this.green() : this.red();
      var y = layout.$2screen(last[4]) + (dir ? 1 : 0);
      ctx.strokeStyle = color;
      ctx.setLineDash([1, 1]);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(layout.width, y);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, {
    key: "last_bar",
    value: function last_bar() {
      if (!this.comp.data.length) return undefined;
      var layout = this.comp.$props.layout;
      var last = this.comp.data[this.comp.data.length - 1];
      var y = layout.$2screen(last[4]); //let cndl = layout.c_magnet(last[0])

      return {
        y: y,
        //Math.floor(cndl.c) - 0.5,
        price: last[4],
        color: last[4] >= last[1] ? this.green() : this.red()
      };
    }
  }, {
    key: "last_price",
    value: function last_price() {
      return this.comp.$props.meta.last ? this.comp.$props.meta.last[4] : undefined;
    }
  }, {
    key: "green",
    value: function green() {
      return this.comp.colorCandleUp;
    }
  }, {
    key: "red",
    value: function red() {
      return this.comp.colorCandleDw;
    }
  }]);

  return Price;
}();


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Candles.vue?vue&type=script&lang=js&
// Renedrer for candlesticks + volume (optional)
// It can be used as the main chart or an indicator





/* harmony default export */ const Candlesvue_type_script_lang_js_ = ({
  name: 'Candles',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.2.1'
      };
    },
    init: function init() {
      this.price = new Price(this);
    },
    draw: function draw(ctx) {
      // If data === main candlestick data
      // render as main chart:
      if (this.$props.sub === this.$props.data) {
        var cnv = {
          candles: this.$props.layout.candles,
          volume: this.$props.layout.volume
        }; // Else, as offchart / onchart indicator:
      } else {
        cnv = layout_cnv(this);
      }

      if (this.show_volume) {
        var cv = cnv.volume;

        for (var i = 0, n = cv.length; i < n; i++) {
          new VolbarExt(this, ctx, cv[i]);
        }
      }

      var cc = cnv.candles;

      for (var i = 0, n = cc.length; i < n; i++) {
        new CandleExt(this, ctx, cc[i]);
      }

      if (this.price_line) this.price.draw(ctx);
    },
    use_for: function use_for() {
      return ['Candles'];
    },
    // In case it's added as offchart overlay
    y_range: function y_range() {
      var hi = -Infinity,
          lo = Infinity;

      for (var i = 0, n = this.sub.length; i < n; i++) {
        var x = this.sub[i];
        if (x[2] > hi) hi = x[2];
        if (x[3] < lo) lo = x[3];
      }

      return [hi, lo];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    show_volume: function show_volume() {
      return 'showVolume' in this.sett ? this.sett.showVolume : true;
    },
    price_line: function price_line() {
      return 'priceLine' in this.sett ? this.sett.priceLine : true;
    },
    colorCandleUp: function colorCandleUp() {
      return this.sett.colorCandleUp || this.$props.colors.candleUp;
    },
    colorCandleDw: function colorCandleDw() {
      return this.sett.colorCandleDw || this.$props.colors.candleDw;
    },
    colorWickUp: function colorWickUp() {
      return this.sett.colorWickUp || this.$props.colors.wickUp;
    },
    colorWickDw: function colorWickDw() {
      return this.sett.colorWickDw || this.$props.colors.wickDw;
    },
    colorWickSm: function colorWickSm() {
      return this.sett.colorWickSm || this.$props.colors.wickSm;
    },
    colorVolUp: function colorVolUp() {
      return this.sett.colorVolUp || this.$props.colors.volUp;
    },
    colorVolDw: function colorVolDw() {
      return this.sett.colorVolDw || this.$props.colors.volDw;
    }
  },
  data: function data() {
    return {
      price: {}
    };
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Candles.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Candlesvue_type_script_lang_js_ = (Candlesvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Candles.vue
var Candles_render, Candles_staticRenderFns
;



/* normalize component */
;
var Candles_component = normalizeComponent(
  overlays_Candlesvue_type_script_lang_js_,
  Candles_render,
  Candles_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Candles_api; }
Candles_component.options.__file = "src/components/overlays/Candles.vue"
/* harmony default export */ const Candles = (Candles_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Volume.vue?vue&type=script&lang=js&


function Volumevue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Volumevue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Volumevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Volumevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Volumevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Volumevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Standalone renedrer for the volume



/* harmony default export */ const Volumevue_type_script_lang_js_ = ({
  name: 'Volume',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.1.0'
      };
    },
    draw: function draw(ctx) {
      // TODO: volume average
      // TODO: Y-axis scaling
      var _iterator = Volumevue_type_script_lang_js_createForOfIteratorHelper(layout_vol(this)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var v = _step.value;
          new VolbarExt(this, ctx, v);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    use_for: function use_for() {
      return ['Volume'];
    },
    // Defines legend format (values & colors)
    // _i2 - detetected data index (see layout_cnv)
    legend: function legend(values) {
      var flag = this._i2 ? this._i2(values) : values[2];
      var color = flag ? this.colorVolUpLegend : this.colorVolDwLegend;
      return [{
        value: values[this._i1 || 1],
        color: color
      }];
    },
    // When added as offchart overlay
    // If data is OHLCV => recalc y-range
    // _i1 - detetected data index (see layout_cnv)
    y_range: function y_range(hi, lo) {
      var _this = this;

      if (this._i1 === 5) {
        var sub = this.$props.sub;
        return [Math.max.apply(Math, _toConsumableArray(sub.map(function (x) {
          return x[_this._i1];
        }))), Math.min.apply(Math, _toConsumableArray(sub.map(function (x) {
          return x[_this._i1];
        })))];
      } else {
        return [hi, lo];
      }
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    colorVolUp: function colorVolUp() {
      return this.sett.colorVolUp || this.$props.colors.volUp;
    },
    colorVolDw: function colorVolDw() {
      return this.sett.colorVolDw || this.$props.colors.volDw;
    },
    colorVolUpLegend: function colorVolUpLegend() {
      return this.sett.colorVolUpLegend || this.$props.colors.candleUp;
    },
    colorVolDwLegend: function colorVolDwLegend() {
      return this.sett.colorVolDwLegend || this.$props.colors.candleDw;
    },
    volscale: function volscale() {
      return this.sett.volscale || this.$props.grid_id > 0 ? 0.85 : this.$props.config.VOLSCALE;
    }
  },
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Volume.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Volumevue_type_script_lang_js_ = (Volumevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Volume.vue
var Volume_render, Volume_staticRenderFns
;



/* normalize component */
;
var Volume_component = normalizeComponent(
  overlays_Volumevue_type_script_lang_js_,
  Volume_render,
  Volume_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Volume_api; }
Volume_component.options.__file = "src/components/overlays/Volume.vue"
/* harmony default export */ const Volume = (Volume_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/Splitters.vue?vue&type=script&lang=js&
// Data section splitters (with labels)

/* harmony default export */ const Splittersvue_type_script_lang_js_ = ({
  name: 'Splitters',
  mixins: [overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.1'
      };
    },
    draw: function draw(ctx) {
      var _this = this;

      var layout = this.$props.layout;
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.line_color;
      this.$props.data.forEach(function (p, i) {
        ctx.beginPath();
        var x = layout.t2screen(p[0]); // x - Mapping

        ctx.setLineDash([10, 10]);
        ctx.moveTo(x, 0);
        ctx.lineTo(x, _this.layout.height);
        ctx.stroke();
        if (p[1]) _this.draw_label(ctx, x, p);
      });
    },
    draw_label: function draw_label(ctx, x, p) {
      var side = p[2] ? 1 : -1;
      x += 2.5 * side;
      ctx.font = this.new_font;
      var pos = p[4] || this.y_position;
      var w = ctx.measureText(p[1]).width + 10;
      var y = this.layout.height * (1.0 - pos);
      y = Math.floor(y);
      ctx.fillStyle = p[3] || this.flag_color;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 10 * side, y - 10 * side);
      ctx.lineTo(x + (w + 10) * side, y - 10 * side);
      ctx.lineTo(x + (w + 10) * side, y + 10 * side);
      ctx.lineTo(x + 10 * side, y + 10 * side);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = this.label_color;
      ctx.textAlign = side < 0 ? 'right' : 'left';
      ctx.fillText(p[1], x + 15 * side, y + 4);
    },
    use_for: function use_for() {
      return ['Splitters'];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    new_font: function new_font() {
      return this.sett.font || '12px ' + this.$props.font.split('px').pop();
    },
    flag_color: function flag_color() {
      return this.sett.flagColor || '#4285f4';
    },
    label_color: function label_color() {
      return this.sett.labelColor || '#fff';
    },
    line_color: function line_color() {
      return this.sett.lineColor || '#4285f4';
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 1.0;
    },
    y_position: function y_position() {
      return this.sett.yPosition || 0.9;
    }
  },
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/Splitters.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_Splittersvue_type_script_lang_js_ = (Splittersvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/Splitters.vue
var Splitters_render, Splitters_staticRenderFns
;



/* normalize component */
;
var Splitters_component = normalizeComponent(
  overlays_Splittersvue_type_script_lang_js_,
  Splitters_render,
  Splitters_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Splitters_api; }
Splitters_component.options.__file = "src/components/overlays/Splitters.vue"
/* harmony default export */ const Splitters = (Splitters_component.exports);
;// CONCATENATED MODULE: ./src/stuff/keys.js



function keys_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = keys_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function keys_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return keys_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return keys_arrayLikeToArray(o, minLen); }

function keys_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Keyboard event handler for overlay
var Keys = /*#__PURE__*/function () {
  function Keys(comp) {
    classCallCheck_classCallCheck(this, Keys);

    this.comp = comp;
    this.map = {};
    this.listeners = 0;
    this.keymap = {};
  }

  createClass_createClass(Keys, [{
    key: "on",
    value: function on(name, handler) {
      if (!handler) return;
      this.map[name] = this.map[name] || [];
      this.map[name].push(handler);
      this.listeners++;
    } // Called by grid.js

  }, {
    key: "emit",
    value: function emit(name, event) {
      if (name in this.map) {
        var _iterator = keys_createForOfIteratorHelper(this.map[name]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            f(event);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (name === 'keydown') {
        if (!this.keymap[event.key]) {
          this.emit(event.key);
        }

        this.keymap[event.key] = true;
      }

      if (name === 'keyup') {
        this.keymap[event.key] = false;
      }
    }
  }, {
    key: "pressed",
    value: function pressed(key) {
      return this.keymap[key];
    }
  }]);

  return Keys;
}();


;// CONCATENATED MODULE: ./src/mixins/tool.js
function tool_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = tool_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function tool_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tool_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tool_arrayLikeToArray(o, minLen); }

function tool_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Usuful stuff for creating tools. Include as mixin


/* harmony default export */ const tool = ({
  methods: {
    init_tool: function init_tool() {
      var _this = this;

      // Collision functions (float, float) => bool,
      this.collisions = [];
      this.pins = [];
      this.mouse.on('mousemove', function (e) {
        if (_this.collisions.some(function (f) {
          return f(_this.mouse.x, _this.mouse.y);
        })) {
          _this.show_pins = true;
        } else {
          _this.show_pins = false;
        }

        if (_this.drag) _this.drag_update();
      });
      this.mouse.on('mousedown', function (e) {
        if (utils.default_prevented(e)) return;

        if (_this.collisions.some(function (f) {
          return f(_this.mouse.x, _this.mouse.y);
        })) {
          if (!_this.selected) {
            _this.$emit('object-selected');
          }

          _this.start_drag();

          e.preventDefault();

          _this.pins.forEach(function (x) {
            return x.mousedown(e, true);
          });
        }
      });
      this.mouse.on('mouseup', function (e) {
        _this.drag = null;

        _this.$emit('scroll-lock', false);
      });
      this.keys = new Keys(this);
      this.keys.on('Delete', this.remove_tool);
      this.keys.on('Backspace', this.remove_tool);
      this.show_pins = false;
      this.drag = null;
    },
    render_pins: function render_pins(ctx) {
      if (this.selected || this.show_pins) {
        this.pins.forEach(function (x) {
          return x.draw(ctx);
        });
      }
    },
    set_state: function set_state(name) {
      this.$emit('change-settings', {
        $state: name
      });
    },
    watch_uuid: function watch_uuid(n, p) {
      // If layer $uuid is changed, then re-init
      // pins & collisions
      if (n.$uuid !== p.$uuid) {
        var _iterator = tool_createForOfIteratorHelper(this.pins),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            p.re_init();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.collisions = [];
        this.show_pins = false;
        this.drag = null;
      }
    },
    pre_draw: function pre_draw() {
      // Delete all collision functions before
      // the draw() call and let primitives set
      // them again
      this.collisions = [];
    },
    remove_tool: function remove_tool() {
      if (this.selected) this.$emit('remove-tool');
    },
    start_drag: function start_drag() {
      this.$emit('scroll-lock', true);
      var cursor = this.$props.cursor;
      this.drag = {
        t: cursor.t,
        y$: cursor.y$
      };
      this.pins.forEach(function (x) {
        return x.rec_position();
      });
    },
    drag_update: function drag_update() {
      var dt = this.$props.cursor.t - this.drag.t;
      var dy = this.$props.cursor.y$ - this.drag.y$;
      this.pins.forEach(function (x) {
        return x.update_from([x.t1 + dt, x.y$1 + dy], true);
      });
    }
  },
  computed: {
    // Settings starting with $ are reserved
    selected: function selected() {
      return this.$props.settings.$selected;
    },
    state: function state() {
      return this.$props.settings.$state;
    }
  }
});
;// CONCATENATED MODULE: ./src/stuff/icons.json
const icons_namespaceObject = JSON.parse('{"extended.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAANElEQVR4nGNggABGEMEEIlhABAeI+AASF0AlHmAqA4kzKAAx8wGQuAMKwd6AoYzBAWonAwAcLwTgNfJ3RQAAAABJRU5ErkJggg==","ray.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAMklEQVR4nGNgQAJMIIIFRHCACAEQoQAiHICYvQEkjkrwYypjAIkzwk2zAREuqIQFzD4AE3kE4BEmGggAAAAASUVORK5CYII=","segment.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAlQTFRFAAAATU1NJCQkCxcHIQAAAAN0Uk5TAP8SmutI5AAAACxJREFUeJxjYMACGAMgNAsLdpoVKi8AVe8A1QblQlWRKt0AoULw2w1zGxoAABdiAviQhF/mAAAAAElFTkSuQmCC","add.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAH5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqPz8/Pj4+BQUFCQkJAQEBZGRkh4eHAgICEBAQNjY2g4ODgYGBAAAAAwMDeXl5d3d3GBgYERERgICAgICANDQ0PDw8Y2NjCAgIhYWFGhoaJycnOjo6YWFhgICAdXV14Y16sQAAACp0Uk5TAAILDxIKESEnJiYoKCgTKSkpKCAnKSkFKCkpJiDl/ycpKSA2JyYpKSkpOkQ+xgAAARdJREFUeJzllNt2gyAQRTWiRsHLoDU0GpPYmMv//2BMS+sgl6Z9bM8bi73gnJkBz/sn8lcBIUHofwtG8TpJKUuTLI6cYF7QEqRKynP71VX9AkhNXVlsbMQrLLQVGyPZLsGHWgPrCxMJwHUPlXa79NBp2et5d9f3u3m1XxatQNn7SagOXCUjCjYUDuqxcWlHj4MSfw12FDJchFViRN8+1qcQoUH6lR1L1mEMEErofB6WzEUwylzomfzOQGiOJdXiWH7mQoUyMa4WXJQWOBvLFvPCGxt6FSr5kyH0qi0YddNG2/pgCsOjff4ZTizXPNwKIzl56OoGg9d9Z/+5cs6On+CFCfevFQ3ZaTycx1YMbvDdRvjkp/lHdAcPXzokxcwfDwAAAABJRU5ErkJggg==","cursor.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAgMAAAC5h23wAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAxQTFRFAAAATU1NTU1NTU1NwlMHHwAAAAR0Uk5TAOvhxbpPrUkAAAAkSURBVHicY2BgYHBggAByabxg1WoGBq2pRCk9AKUbcND43AEAufYHlSuusE4AAAAASUVORK5CYII=","display_off.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAU1QTFRFAAAAh4eHh4eHAAAAAAAAAAAAAwMDAAAAAAAAhoaGGBgYgYGBAAAAPz8/AgICg4ODCQkJhISEh4eHh4eHPj4+NjY2gYGBg4ODgYGBgYGBgoKCAQEBJycngoKChYWFEBAQg4ODCAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0hISEgYGBPDw8gYGBgYGBh4eHh4eHhYWFh4eHgoKChYWFgYGBgYGBg4ODhoaGg4ODYWFhgoKCBgYGdXV1goKCg4ODgYGBgICAgYGBAAAAg4ODhYWFhISEh4eHgoKChYWFOjo6goKCGhoah4eHh4eHh4eHgoKCh4eHeXl5hoaGgoKChISEgYGBgYGBgoKCY2NjgYGBgoKCh4eHgoKCgYGBhoaGg4ODhoaGhYWFh4eHgYGBhoaGhoaGhoaGg4ODgoKChISEgoKChYWFh4eHfKktUwAAAG90Uk5TACn/AhEFKA8SLCbxCigoVBNKUTYoJ/lh3PyAKSaTNiBtICYpISggKSkmJ0LEKef3lGxA8rn//+pcMSkpnCcptHPJKe0LUjnx5LzKKaMnX73hl64pLnhkzNSgKeLv17LQ+liIzaLe7PfTw5tFpz3K1fXR/gAAAgBJREFUeJzllNdXwjAUxknB0lIoCKVsGTIFQRAZ7r333nuv///R3LZ4mlDQZ/0ekp7b37n5bnITk+mfyDxv5Tir3fwjaElO5BIOKZFLJS1dQVfI0Y809TtEV+elo95RpFPWG+1go4fdQ5QybI8haaNBkM2ANbM09bnrwaPY7iFKrz7EMBdu7CHdVruXIt0M1hb+GKA3LTRKkp5lTA6Dg6xIkhaHhvQ1IlW/UCouQdJNJTRIpk1qO7+wUpcfpl537oBc7VNip3Gi/AmVPBAC1UrL6HXtSGVT+k2Yz0Focad07OMRf3P5BEbd63PFQx7HN+w61JoAm+uBlV48O/0jkLSMmtPCmQ8HwlYdykFV4/LJPp7e3hVyFdapHNehLk6PSjhSkBvwu/cFyJGIYvOyhoc1jjYQFGbygD4CWjoAMla/og3YoSw+KPhjPNoFcim4iFD+pFYA8zZ9WeYU5OBjZ3ORWyCfG03E+47kKpCIJTpGO4KP8XMgtw990xG/PBNTgmPEEXwf7P42oOdFIRAoBCtqTKL6Rcwq4Xsgh5xYC/mmSs6yJKk1YbnVeTq1NaEpmlHbmVn2EORkW2trF2ZzmHGTSUMGl1a9hp4ySRpdQ8yKGURpMmRIYg9pb1YPzg6kO79cLlE6bYFjEtv91bLEUxvhwbWwjY13BxUb9l8+mn9EX8x3Nki8ff5wAAAAAElFTkSuQmCC","display_on.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAR1QTFRFAAAAh4eHgYGBAAAAAAAAgYGBAAAAAwMDAAAAAAAAgYGBg4ODGBgYgYGBhISEAAAAPz8/AgIChoaGCQkJhYWFPj4+NjY2goKCgYGBAQEBJycngYGBgoKCEBAQCAgIhISEKioqZGRkCgoKBQUFERERd3d3gYGBg4ODgYGBGxsbNDQ0hISEgoKCgoKChYWFPDw8gYGBgYGBhoaGgoKCg4ODgoKCgYGBgoKCgoKCgoKCg4ODgoKChoaGgoKCgYGBhoaGg4ODYWFhBgYGdXV1gYGBg4ODgoKCgICAg4ODg4ODhISEAAAAg4ODOjo6gYGBGhoaeXl5goKCgYGBgoKChYWFgoKChISEgoKCY2NjgYGBg4ODgYGBgYGBg4ODgYGBo8n54AAAAF90Uk5TACn/AhH3BSgPEuhUJvFACigoLBM2KCeA6ykm+pMgIEkmKSEoICn9XCkmJ0u6nDop4sUypGuEzLZ6vmCYLZ/dLykpJynUYa8pcllCC1Ip2ycpisl1PadFsintbsPQZdi/bTW7AAAB4UlEQVR4nOWUZ1fCMBSGSSGWFiq0UDbIkr2XbBwMxS0b1P//M0xK9XSiftX7oel585zkvfcmMRj+SRhvzRRlthm/BU3Ry3TYzofTsajpIOjw2iNAjIiddehvHXSdA0mkXEEdG0fkE1DEKXmkSVqVIA6rBmsktUgAWLWHoGp30UNclbtLmwQgoyya91wPTbFy0mQXJ5zJQO6BgXRjfH0iSkX5stHIXr5r0bB/lu8syjR8rzsFbR2SpX+5J2eMP3csLtYsEY2K8BeTFuE2jaVCBw7bHOBuxq16AXmpbui3LtIfbRLUHMY2q4lcFo2WB4KA1SUAlWumNEKCzyxBKZxVHvYGaFguCBx1vM/x0IPzoqQoj5SdP4mns2cCGhBsrgj0uaeUBtzMyxQN8w4mYROTW8+r0oANp8W5mf6WQw5aCYJ2o7ymPaKMi2uVpmWM4TW6tdImgGo1bT4nK6DbbsCc0AZSdmLEFszzHrh6riVvRrNA3/9SE8QLWQu+Gjto9+gE9NBMwr9zi83gFeeFTe11zpm1CHE3HeyVCSknf3MIDcFTbfJKdbR1L4xX49L+/BoillV5uPJqkshD3JWSgpNMXP/lcrD8+hO84MnDr5YpFHv0Fe99VjJ0GBRs2H74aP6R+ACr+TFvZNAQ1wAAAABJRU5ErkJggg==","down.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAKVQTFRFAAAAg4ODgICAAAAAAAAAAAAACAgIAAAAAAAAAAAAAAAAOTk5hYWFEBAQfHx8ODg4dnZ2NDQ0XV1dGxsbKCgogICAFBQUIiIiZGRkgICAgICAFRUVAAAAgICAgICAgICAf39/Li4ugICAcHBwgoKCgICAgoKCgICAg4ODgYGBPj4+goKCgICAhISEgYGBgICAgoKCgICAgYGBgYGBf39/gICAgICAIdPQHAAAADd0Uk5TACn/KAIRIBMFDwooKyApKSknKSYmzCcmKfL7JRCUi2L3J7IpcLUrr0VbKXntNEnkMbxrUcG56CMpi50AAAFZSURBVHic5ZRpf4MgDIeFKFatWm/tfW091u7evv9Hm1Acoujm2y0vFPH5Jf+EEE37J6bblmlatv4jaBCI4rMfR0CMXtAEJ0fccgfM7tAkQHXzArdDxggmqGETGCnJWROkNlOwOqhIhKCtgbSicw1uK/dATSK0aRatIzytA8ik4XSiyJnLSm+VPxULgeyLI3uHRJH+qcB4WZGrKb4c20WwI7b3iUt74OS6XD+xZWrXUCtme0uKTvfcJ65CZFa9VOebqwXmft+oT8yF+/VymT4XeGB+Xx8L+j4gBcoFIDT+oMz6Qp93Y74pCeBpUXaLuW0rUk6r1iv3nP322ewYkgv2nZIvgpSPQDrY5wTjRJDNg9XAE/+uSXIVX812GdKEmtvR2rtWaw+5MAOuofJy79SXu9TgBl4d9DZdI0NjgyiswNCB/qk1J5Bmvp+lQOa9IJNhW4bxm6H5R+wLQYMSQXZNzbcAAAAASUVORK5CYII=","price_range.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAIUlEQVR4nGNggAPm/w9gTA4QIQMitECEJ1yMEgLNDiAAADfgBMRu78GgAAAAAElFTkSuQmCC","price_time.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAOklEQVR4nGNggAPm/w9gTA4QIQPEClpMQMITRHCACScQoQQihBgY9P//grKgYk5wdTACYhQHFjuAAABZFAlc4e1fcQAAAABJRU5ErkJggg==","remove.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAK5QTFRFAAAAh4eHgICAAAAAAAAAh4eHAAAAAwMDAAAAAAAAgICAGBgYAAAAPz8/AgICgICACQkJhoaGhoaGgICAPj4+NjY2gYGBg4ODgYGBAQEBJycngoKCEBAQgICAgICACAgIKioqZGRkCgoKBQUFERERd3d3gYGBGxsbNDQ0gICAPDw8YWFhBgYGdXV1gICAg4ODgICAAAAAOjo6GhoaeXl5gICAhYWFY2NjhYWFgICA9O0oCgAAADp0Uk5TACn/AhErBSgPEvEmCigowxMuMcgoJ7hWrCkmdCD6vSAmKSEoICkpJie6KSknKSkp0wspJynCMik11rrLte8AAAFwSURBVHic5ZTXkoIwFIZNAAPSpKkoRQV7Wcva3v/FFiRmEwise7t7bs7MP98k/ylJq/VPQjjKiiJrwo+gON0uxro7XiRTsRHs+voE4JjoRrf+6sD7AFTMvaDGRht9glLMUJtLqmUwD5XDCohHAmBUPQSV27GHtFK7xycBWJab5uPaR+Hlmue7GfZxHwyWFHVMQghXFgD2A8IOZtfssdNJIXcyFEaSfchzp9BuMVP+Fhvr5Qh0nGfqYTGhm3BcYFUaQBKOhMWzRqHyGFRY03ppQ5lCFZ30RloVZGQTaa3QqEt0OyrQnkSkk8I1YJkvAwPCMgY0UpbzXRZhVbosIWGbZTLNQszGMCM42FJEjWDDjIAMtp+xj6x2K+/DqNDc0r4Yc8yGl3uer2aIyT1iyd8sYSuY8cldZbVrH4zPebTvP8OMNSoedj6XzDyk3pwG98u0/ufqGu7tBW5c1PxriXFyHq5PQxXFzeDThvbmp/lH4gt6WxfZ03H8DwAAAABJRU5ErkJggg==","settings.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAW5QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBgYGGxsbKioqQEBAPj4+BQUFCAgIAQEBPz8/ZWVlh4eHZGRkAgICCQkJDw8PNjY2g4ODgoKCNTU1EBAQAAAAAwMDeXl5d3d3AAAAGBgYAAAAERERioqKgoKCgoKCgoKCgYGBgoKChISEhoaGNDQ0g4ODgICAgICAgICAgYGBgYGBhYWFgICAgICAPT09AAAAgYGBgICAgICAgICAgICAY2NjCAgIgICAgICAhYWFhYWFgYGBHBwcgICAhYWFGhoagYGBgYGBg4ODhoaGJycnAAAAhISEgICAg4ODPDw8AAAAgoKCgICAhISEOjo6h4eHgoKCgYGBgICAf39/gYGBgoKCgICAGBgYgYGBg4ODg4ODgICACwsLgYGBgICAgYGBgYGBgYGBgICAgYGBYWFhf39/g4ODPj4+gYGBg4ODgICAhYWFgoKCgYGBgICAgYGBgoKCdXV1T0kC9QAAAHp0Uk5TAAILDxMKESEnJiYpKSgTKSgpKSkoEyAnKSknIAYoKSkFJQEgKl94jYVvVC4nU9f/+K8pOu71KBCi3NPq/ikg0e01Nokm1UUnsZVqQSYOT9lrKRJz5lIpK12jyu+sesgnhGVLxCG55a6Um+GaKfJCKKRgKUt8ocergymDQ9knAAABsElEQVR4nOWUV1vCMBSGg1AQpBZrcVdE3KJxo4LgnuCoe4F7orjHv7doTk3bgF7rd5OnX94nZ+SkCP0TWQqsNpuVs/wI2h2FTleR2+XkHfa8YLHgKRGJSj2SN3fosvIKkVJlVXWONGrkWtEgn1zHJP1GMCs/g7XILFIUpXoTWmaKTnIImGovh72Gxqbmlta2dvgOGpsmQO0dnfhTXd3E6JH0pN1DNnr7MFE/HDsQ0qEO6Pxg9sCh4XDkGx2J6sovBD+G8eiYuo5PxLTKeLoJBZNgT2EcnjY0YYajUKsL7Fk1gcjU3PwChcYTFGorAnsRqlpa1tAVhUbdmr+6RtjIOlgbCjMBUdzc2t7ZzbJ7zAQ4p6GSfRVNwkeKLsvCg31w2JBdjlT0GDxZNzEnpcQ+xWfnFxeXVyp6Tay07gq+L/YUOoBvbomV0V8skiq//DutWfeEfJD1JPLCED4+Pb8kX986tApNQ4iqfSJT76bRzvlgBPODQXW/foYqK5lyeBeYJEL1gaoeGnwIBhjRoQ9SZgTAdEbO/9cKRfmZ+MpGPCVHQ3nBzzS4hKIkuNyh/5g+ALiAXSSas9hwAAAAAElFTkSuQmCC","time_range.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAAJElEQVR4nGNgwAsUGJhQCScQoQQihBgY9P//grKgYk4YOvACACOpBKG6Svj+AAAAAElFTkSuQmCC","trash.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZAQMAAAD+JxcgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAATU1NkJ+rOQAAAAJ0Uk5TAP9bkSK1AAAALUlEQVR4nGNgAIN6ENHQACX4//9gYBBgYIESYC4LkA0lPEkmGFAI5v8PILYCAHygDJxlK0RUAAAAAElFTkSuQmCC","up.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMZQTFRFAAAAh4eHgICAAAAAAAAAAAAAAwMDAAAAAAAAGBgYAAAAPz8/AgICCQkJgICAh4eHPj4+NjY2AQEBJycnEBAQgICAgICACAgIKioqZGRkCgoKBQUFgYGBERERd3d3gYGBGxsbNDQ0gICAgYGBPDw8gYGBh4eHgICAYWFhBgYGgYGBdXV1goKCg4ODhYWFgICAgoKCAAAAhISEOjo6gICAGhoagYGBeXl5hoaGgICAY2Njg4ODgoKCgoKCgYGBgoKCg4ODgoKC64uw1gAAAEJ0Uk5TACn/AhEFKA8SJgooKBP7KignKSYg9c0gJikhKLQgKSkmJ7ywKY8s5SknlClxKTMpXwtFKe0neiku8ClKWmSbbFFjM5GHSgAAAW5JREFUeJzllGd/gjAQxk3AMFWWOHDvVa2rVbu//5cqhJWQQO3b9nkVjv/v7rnLKJX+iYS9JMuSKvwIiu3loKkZzYHXFgvBiqW1QKSWplfySzvmAyDUN50cG2X0DDLqoTKXVLJgIIXDCohHAqCzHhymeuShy/Ru8kkAhtmhWUTvW9fdEnPQaVLU0n8XF0L3kn5P6LTtZPKgNoK+RrUkcGtQ7S9TsgOxxinrkUPYD+LwLCIh7CTsWSVQqRmTuPqpitlZFLQlApXjrsYBc335wOw47ksmUSMMrgKi/gnAE/awCqNHmTUwDf5X34LlBuedsgbUsK15kPMxTIXzzvFSIdsSPBw7nGD1K+7bL3F9xStEnZhoCw71TbpL71GBBbUF1MZmZWTOi97PI3eIJn9zCEtOj0+umaOde2EszqW9/xr6rM54WFtc0vfQNak57Ibd/Jerohu3GFwYqPjVEhve2Z4cbQU1ikFsQ73z0fwj+ga3VBezGuggFQAAAABJRU5ErkJggg=="}');
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./src/components/primitives/pin.js



// Semi-automatic pin object. For stretching things.


var Pin = /*#__PURE__*/function () {
  // (Comp reference, a name in overlay settings,
  // pin parameters)
  function Pin(comp, name, params) {
    var _this = this;

    if (params === void 0) {
      params = {};
    }

    classCallCheck_classCallCheck(this, Pin);

    this.RADIUS = comp.$props.config.PIN_RADIUS || 5.5;
    this.RADIUS_SQ = Math.pow(this.RADIUS + 7, 2);

    if (utils.is_mobile) {
      this.RADIUS += 2;
      this.RADIUS_SQ *= 2.5;
    }

    this.COLOR_BACK = comp.$props.colors.back;
    this.COLOR_BR = comp.$props.colors.text;
    this.comp = comp;
    this.layout = comp.layout;
    this.mouse = comp.mouse;
    this.name = name;
    this.state = params.state || 'settled';
    this.hidden = params.hidden || false;
    this.mouse.on('mousemove', function (e) {
      return _this.mousemove(e);
    });
    this.mouse.on('mousedown', function (e) {
      return _this.mousedown(e);
    });
    this.mouse.on('mouseup', function (e) {
      return _this.mouseup(e);
    });

    if (comp.state === 'finished') {
      this.state = 'settled';
      this.update_from(comp.$props.settings[name]);
    } else {
      this.update();
    }

    if (this.state !== 'settled') {
      this.comp.$emit('scroll-lock', true);
    }
  }

  createClass_createClass(Pin, [{
    key: "re_init",
    value: function re_init() {
      this.update_from(this.comp.$props.settings[this.name]);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.hidden) return;

      switch (this.state) {
        case 'tracking':
          break;

        case 'dragging':
          if (!this.moved) this.draw_circle(ctx);
          break;

        case 'settled':
          this.draw_circle(ctx);
          break;
      }
    }
  }, {
    key: "draw_circle",
    value: function draw_circle(ctx) {
      this.layout = this.comp.layout;

      if (this.comp.selected) {
        var r = this.RADIUS,
            lw = 1.5;
      } else {
        var r = this.RADIUS * 0.95,
            lw = 1;
      }

      ctx.lineWidth = lw;
      ctx.strokeStyle = this.COLOR_BR;
      ctx.fillStyle = this.COLOR_BACK;
      ctx.beginPath();
      ctx.arc(this.x = this.layout.t2screen(this.t), this.y = this.layout.$2screen(this.y$), r + 0.5, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.y$ = this.comp.$props.cursor.y$;
      this.y = this.comp.$props.cursor.y;
      this.t = this.comp.$props.cursor.t;
      this.x = this.comp.$props.cursor.x; // Save pin as time in IB mode
      //if (this.layout.ti_map.ib) {
      //    this.t = this.layout.ti_map.i2t(this.t )
      //}
      // Reset the settings attahed to the pin (position)

      this.comp.$emit('change-settings', _defineProperty({}, this.name, [this.t, this.y$]));
    }
  }, {
    key: "update_from",
    value: function update_from(data, emit) {
      if (emit === void 0) {
        emit = false;
      }

      if (!data) return;
      this.layout = this.comp.layout;
      this.y$ = data[1];
      this.y = this.layout.$2screen(this.y$);
      this.t = data[0];
      this.x = this.layout.t2screen(this.t); // TODO: Save pin as time in IB mode
      //if (this.layout.ti_map.ib) {
      //    this.t = this.layout.ti_map.i2t(this.t )
      //}

      if (emit) this.comp.$emit('change-settings', _defineProperty({}, this.name, [this.t, this.y$]));
    }
  }, {
    key: "rec_position",
    value: function rec_position() {
      this.t1 = this.t;
      this.y$1 = this.y$;
    }
  }, {
    key: "mousemove",
    value: function mousemove(event) {
      switch (this.state) {
        case 'tracking':
        case 'dragging':
          this.moved = true;
          this.update();
          break;
      }
    }
  }, {
    key: "mousedown",
    value: function mousedown(event, force) {
      if (force === void 0) {
        force = false;
      }

      if (utils.default_prevented(event) && !force) return;

      switch (this.state) {
        case 'tracking':
          this.state = 'settled';
          if (this.on_settled) this.on_settled();
          this.comp.$emit('scroll-lock', false);
          break;

        case 'settled':
          if (this.hidden) return;

          if (this.hover()) {
            this.state = 'dragging';
            this.moved = false;
            this.comp.$emit('scroll-lock', true);
            this.comp.$emit('object-selected');
          }

          break;
      }

      if (this.hover()) {
        event.preventDefault();
      }
    }
  }, {
    key: "mouseup",
    value: function mouseup(event) {
      switch (this.state) {
        case 'dragging':
          this.state = 'settled';
          if (this.on_settled) this.on_settled();
          this.comp.$emit('scroll-lock', false);
          break;
      }
    }
  }, {
    key: "on",
    value: function on(name, handler) {
      switch (name) {
        case 'settled':
          this.on_settled = handler;
          break;
      }
    }
  }, {
    key: "hover",
    value: function hover() {
      var x = this.x;
      var y = this.y;
      return (x - this.mouse.x) * (x - this.mouse.x) + (y - this.mouse.y) * (y - this.mouse.y) < this.RADIUS_SQ;
    }
  }]);

  return Pin;
}();


;// CONCATENATED MODULE: ./src/components/primitives/seg.js


// Draws a segment, adds corresponding collision f-n



var Seg = /*#__PURE__*/function () {
  // Overlay ref, canvas ctx
  function Seg(overlay, ctx) {
    classCallCheck_classCallCheck(this, Seg);

    this.ctx = ctx;
    this.comp = overlay;
    this.T = overlay.$props.config.TOOL_COLL;
    if (utils.is_mobile) this.T *= 2;
  } // p1[t, $], p2[t, $] (time-price coordinates)


  createClass_createClass(Seg, [{
    key: "draw",
    value: function draw(p1, p2) {
      var layout = this.comp.$props.layout;
      var x1 = layout.t2screen(p1[0]);
      var y1 = layout.$2screen(p1[1]);
      var x2 = layout.t2screen(p2[0]);
      var y2 = layout.$2screen(p2[1]);
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.comp.collisions.push(this.make([x1, y1], [x2, y2]));
    } // Collision function. x, y - mouse coord.

  }, {
    key: "make",
    value: function make(p1, p2) {
      var _this = this;

      return function (x, y) {
        return math.point2seg([x, y], p1, p2) < _this.T;
      };
    }
  }]);

  return Seg;
}();


;// CONCATENATED MODULE: ./src/components/primitives/line.js


// Draws a line, adds corresponding collision f-n



var Line = /*#__PURE__*/function () {
  // Overlay ref, canvas ctx
  function Line(overlay, ctx) {
    classCallCheck_classCallCheck(this, Line);

    this.ctx = ctx;
    this.comp = overlay;
    this.T = overlay.$props.config.TOOL_COLL;
    if (utils.is_mobile) this.T *= 2;
  } // p1[t, $], p2[t, $] (time-price coordinates)


  createClass_createClass(Line, [{
    key: "draw",
    value: function draw(p1, p2) {
      var layout = this.comp.$props.layout;
      var x1 = layout.t2screen(p1[0]);
      var y1 = layout.$2screen(p1[1]);
      var x2 = layout.t2screen(p2[0]);
      var y2 = layout.$2screen(p2[1]);
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      var w = layout.width;
      var h = layout.height; // TODO: transform k (angle) to screen ratio
      // (this requires a new a2screen function)

      var k = (y2 - y1) / (x2 - x1);
      var s = Math.sign(x2 - x1 || y2 - y1);
      var dx = w * s * 2;
      var dy = w * k * s * 2;

      if (dy === Infinity) {
        dx = 0, dy = h * s;
      }

      this.ctx.moveTo(x2, y2);
      this.ctx.lineTo(x2 + dx, y2 + dy);

      if (!this.ray) {
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x1 - dx, y1 - dy);
      }

      this.comp.collisions.push(this.make([x1, y1], [x2, y2]));
    } // Collision function. x, y - mouse coord.

  }, {
    key: "make",
    value: function make(p1, p2) {
      var _this = this;

      var f = this.ray ? math.point2ray.bind(math) : math.point2line.bind(math);
      return function (x, y) {
        return f([x, y], p1, p2) < _this.T;
      };
    }
  }]);

  return Line;
}();


;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function typeof_typeof(obj) {
  "@babel/helpers - typeof";

  return typeof_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, typeof_typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./src/components/primitives/ray.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// Draws a ray, adds corresponding collision f-n


var Ray = /*#__PURE__*/function (_Line) {
  _inherits(Ray, _Line);

  var _super = _createSuper(Ray);

  function Ray(overlay, ctx) {
    var _this;

    classCallCheck_classCallCheck(this, Ray);

    _this = _super.call(this, overlay, ctx);
    _this.ray = true;
    return _this;
  }

  return createClass_createClass(Ray);
}(Line);


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/LineTool.vue?vue&type=script&lang=js&
// Line drawing tool
// TODO: make an angle-snap when "Shift" is pressed







/* harmony default export */ const LineToolvue_type_script_lang_js_ = ({
  name: 'LineTool',
  mixins: [overlay, tool],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.1.0'
      };
    },
    tool: function tool() {
      return {
        // Descriptor for the tool
        group: 'Lines',
        icon: icons_namespaceObject["segment.png"],
        type: 'Segment',
        hint: 'This hint will be shown on hover',
        data: [],
        // Default data
        settings: {},
        // Default settings
        // Modifications
        mods: {
          'Extended': {
            // Rewrites the default setting fields
            settings: {
              extended: true
            },
            icon: icons_namespaceObject["extended.png"]
          },
          'Ray': {
            // Rewrites the default setting fields
            settings: {
              ray: true
            },
            icon: icons_namespaceObject["ray.png"]
          }
        }
      };
    },
    // Called after overlay mounted
    init: function init() {
      var _this = this;

      // First pin is settled at the mouse position
      this.pins.push(new Pin(this, 'p1')); // Second one is following mouse until it clicks

      this.pins.push(new Pin(this, 'p2', {
        state: 'tracking'
      }));
      this.pins[1].on('settled', function () {
        // Call when current tool drawing is finished
        // (Optionally) reset the mode back to 'Cursor'
        _this.set_state('finished');

        _this.$emit('drawing-mode-off');
      });
    },
    draw: function draw(ctx) {
      if (!this.p1 || !this.p2) return;
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();

      if (this.sett.ray) {
        new Ray(this, ctx).draw(this.p1, this.p2);
      } else if (this.sett.extended) {
        new Line(this, ctx).draw(this.p1, this.p2);
      } else {
        new Seg(this, ctx).draw(this.p1, this.p2);
      }

      ctx.stroke();
      this.render_pins(ctx);
    },
    use_for: function use_for() {
      return ['LineTool'];
    },
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    p1: function p1() {
      return this.$props.settings.p1;
    },
    p2: function p2() {
      return this.$props.settings.p2;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.9;
    },
    color: function color() {
      return this.sett.color || '#42b28a';
    }
  },
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/LineTool.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_LineToolvue_type_script_lang_js_ = (LineToolvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/LineTool.vue
var LineTool_render, LineTool_staticRenderFns
;



/* normalize component */
;
var LineTool_component = normalizeComponent(
  overlays_LineToolvue_type_script_lang_js_,
  LineTool_render,
  LineTool_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var LineTool_api; }
LineTool_component.options.__file = "src/components/overlays/LineTool.vue"
/* harmony default export */ const LineTool = (LineTool_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/overlays/RangeTool.vue?vue&type=script&lang=js&

// Price/Time measurment tool





/* harmony default export */ const RangeToolvue_type_script_lang_js_ = ({
  name: 'RangeTool',
  mixins: [overlay, tool],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '2.0.1'
      };
    },
    tool: function tool() {
      return {
        // Descriptor for the tool
        group: 'Measurements',
        icon: icons_namespaceObject["price_range.png"],
        type: 'Price',
        hint: 'Price Range',
        data: [],
        // Default data
        settings: {},
        // Default settings
        mods: {
          'Time': {
            // Rewrites the default setting fields
            icon: icons_namespaceObject["time_range.png"],
            settings: {
              price: false,
              time: true
            }
          },
          'PriceTime': {
            // Rewrites the default setting fields
            icon: icons_namespaceObject["price_time.png"],
            settings: {
              price: true,
              time: true
            }
          },
          'ShiftMode': {
            // Rewrites the default setting fields
            settings: {
              price: true,
              time: true,
              shiftMode: true
            },
            hidden: true
          }
        }
      };
    },
    // Called after overlay mounted
    init: function init() {
      var _this = this;

      // First pin is settled at the mouse position
      this.pins.push(new Pin(this, 'p1', {
        hidden: this.shift
      })); // Second one is following mouse until it clicks

      this.pins.push(new Pin(this, 'p2', {
        state: 'tracking',
        hidden: this.shift
      }));
      this.pins[1].on('settled', function () {
        // Call when current tool drawing is finished
        // (Optionally) reset the mode back to 'Cursor'
        _this.set_state('finished');

        _this.$emit('drawing-mode-off'); // Deselect the tool in shiftMode


        if (_this.shift) _this._$emit('custom-event', {
          event: 'object-selected',
          args: []
        });
      });
    },
    draw: function draw(ctx) {
      if (!this.p1 || !this.p2) return;
      var dir = Math.sign(this.p2[1] - this.p1[1]);
      var layout = this.$props.layout;
      var xm = layout.t2screen((this.p1[0] + this.p2[0]) * 0.5);
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color; // Background

      ctx.fillStyle = this.back_color;
      var x1 = layout.t2screen(this.p1[0]);
      var y1 = layout.$2screen(this.p1[1]);
      var x2 = layout.t2screen(this.p2[0]);
      var y2 = layout.$2screen(this.p2[1]);
      ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
      if (this.price) this.vertical(ctx, x1, y1, x2, y2, xm);
      if (this.time) this.horizontal(ctx, x1, y1, x2, y2, xm);
      this.draw_value(ctx, dir, xm, y2);
      this.render_pins(ctx);
    },
    vertical: function vertical(ctx, x1, y1, x2, y2, xm) {
      var layout = this.$props.layout;
      var dir = Math.sign(this.p2[1] - this.p1[1]);
      ctx.beginPath();

      if (!this.shift) {
        // Top
        new Seg(this, ctx).draw([this.p1[0], this.p2[1]], [this.p2[0], this.p2[1]]); // Bottom

        new Seg(this, ctx).draw([this.p1[0], this.p1[1]], [this.p2[0], this.p1[1]]);
      } // Vertical Arrow


      ctx.moveTo(xm - 4, y2 + 5 * dir);
      ctx.lineTo(xm, y2);
      ctx.lineTo(xm + 4, y2 + 5 * dir);
      ctx.stroke(); // Vertical Line

      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      new Seg(this, ctx).draw([(this.p1[0] + this.p2[0]) * 0.5, this.p2[1]], [(this.p1[0] + this.p2[0]) * 0.5, this.p1[1]]);
      ctx.stroke();
      ctx.setLineDash([]);
    },
    horizontal: function horizontal(ctx, x1, y1, x2, y2, xm) {
      var layout = this.$props.layout;
      var xdir = Math.sign(this.p2[0] - this.p1[0]);
      var ym = (layout.$2screen(this.p1[1]) + layout.$2screen(this.p2[1])) / 2;
      ctx.beginPath();

      if (!this.shift) {
        // Left
        new Seg(this, ctx).draw([this.p1[0], this.p1[1]], [this.p1[0], this.p2[1]]); // Right

        new Seg(this, ctx).draw([this.p2[0], this.p1[1]], [this.p2[0], this.p2[1]]);
      } // Horizontal Arrow


      ctx.moveTo(x2 - 5 * xdir, ym - 4);
      ctx.lineTo(x2, ym);
      ctx.lineTo(x2 - 5 * xdir, ym + 4);
      ctx.stroke(); // Horizontal Line

      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(x1, ym);
      ctx.lineTo(x2, ym);
      ctx.stroke();
      ctx.setLineDash([]);
    },
    // WTF? I know dude, a lot of shitty code here
    draw_value: function draw_value(ctx, dir, xm, y) {
      var _this2 = this;

      ctx.font = this.new_font; // Price delta (anf percent)

      var d$ = (this.p2[1] - this.p1[1]).toFixed(this.prec);
      var p = (100 * (this.p2[1] / this.p1[1] - 1)).toFixed(this.prec); // Map interval to the actual tf (in ms)

      var f = function f(t) {
        return _this2.layout.ti_map.smth2t(t);
      };

      var dt = f(this.p2[0]) - f(this.p1[0]);
      var tf = this.layout.ti_map.tf; // Bars count (through the candle index)

      var f2 = function f2(t) {
        var c = _this2.layout.c_magnet(t);

        var cn = _this2.layout.candles || _this2.layout.master_grid.candles;
        return cn.indexOf(c);
      }; // Bars count (and handling the negative values)


      var b = f2(this.p2[0]) - f2(this.p1[0]); // Format time delta
      // Format time delta

      var dtstr = this.t2str(dt);
      var text = [];
      if (this.price) text.push("".concat(d$, "  (").concat(p, "%)"));
      if (this.time) text.push("".concat(b, " bars, ").concat(dtstr));
      text = text.join('\n'); // "Multiple" fillText

      var lines = text.split('\n');
      var w = Math.max.apply(Math, _toConsumableArray(lines.map(function (x) {
        return ctx.measureText(x).width + 20;
      })).concat([100]));
      var n = lines.length;
      var h = 20 * n;
      ctx.fillStyle = this.value_back;
      ctx.fillRect(xm - w * 0.5, y - (10 + h) * dir, w, h * dir);
      ctx.fillStyle = this.value_color;
      ctx.textAlign = 'center';
      lines.forEach(function (l, i) {
        ctx.fillText(l, xm, y + (dir > 0 ? 20 * i - 20 * n + 5 : 20 * i + 25));
      });
    },
    // Formats time from ms to `1D 12h` for example
    t2str: function t2str(t) {
      var sign = Math.sign(t);
      var abs = Math.abs(t);
      var tfs = [[1000, 's', 60], [60000, 'm', 60], [3600000, 'h', 24], [86400000, 'D', 7], [604800000, 'W', 4], [2592000000, 'M', 12], [31536000000, 'Y', Infinity], [Infinity, 'Eternity', Infinity]];

      for (var i = 0; i < tfs.length; i++) {
        tfs[i][0] = Math.floor(abs / tfs[i][0]);

        if (tfs[i][0] === 0) {
          var p1 = tfs[i - 1];
          var p2 = tfs[i - 2];
          var txt = sign < 0 ? '-' : '';

          if (p1) {
            txt += p1.slice(0, 2).join('');
          }

          var n2 = p2 ? p2[0] - p1[0] * p2[2] : 0;

          if (p2 && n2) {
            txt += ' ';
            txt += "".concat(n2).concat(p2[1]);
          }

          return txt;
        }
      }
    },
    use_for: function use_for() {
      return ['RangeTool'];
    },
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    p1: function p1() {
      return this.$props.settings.p1;
    },
    p2: function p2() {
      return this.$props.settings.p2;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.9;
    },
    color: function color() {
      return this.sett.color || this.$props.colors.cross;
    },
    back_color: function back_color() {
      return this.sett.backColor || '#9b9ba316';
    },
    value_back: function value_back() {
      return this.sett.valueBack || '#9b9ba316';
    },
    value_color: function value_color() {
      return this.sett.valueColor || this.$props.colors.text;
    },
    prec: function prec() {
      return this.sett.precision || 2;
    },
    new_font: function new_font() {
      return '12px ' + this.$props.font.split('px').pop();
    },
    price: function price() {
      return 'price' in this.sett ? this.sett.price : true;
    },
    time: function time() {
      return 'time' in this.sett ? this.sett.time : false;
    },
    shift: function shift() {
      return this.sett.shiftMode;
    }
  },
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/components/overlays/RangeTool.vue?vue&type=script&lang=js&
 /* harmony default export */ const overlays_RangeToolvue_type_script_lang_js_ = (RangeToolvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/overlays/RangeTool.vue
var RangeTool_render, RangeTool_staticRenderFns
;



/* normalize component */
;
var RangeTool_component = normalizeComponent(
  overlays_RangeToolvue_type_script_lang_js_,
  RangeTool_render,
  RangeTool_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var RangeTool_api; }
RangeTool_component.options.__file = "src/components/overlays/RangeTool.vue"
/* harmony default export */ const RangeTool = (RangeTool_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Grid.vue?vue&type=script&lang=js&
function Gridvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Gridvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Gridvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Gridvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gridvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Gridvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Sets up all layers/overlays for the grid with 'grid_id'

















/* harmony default export */ const Gridvue_type_script_lang_js_ = ({
  name: 'Grid',
  props: ['sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'overlays', 'width', 'height', 'data', 'grid_id', 'y_transform', 'font', 'tv_id', 'config', 'meta', 'shaders'],
  mixins: [canvas, uxlist],
  components: {
    Crosshair: components_Crosshair,
    KeyboardListener: KeyboardListener
  },
  created: function created() {
    var _this = this;

    // List of all possible overlays (builtin + custom)
    this._list = [Spline, Splines, Range, Trades, Channel, Segment, Candles, Volume, Splitters, LineTool, RangeTool].concat(this.$props.overlays);
    this._registry = {}; // We need to know which components we will use.
    // Custom overlay components overwrite built-ins:

    var tools = [];

    this._list.forEach(function (x, i) {
      var use_for = x.methods.use_for();
      if (x.methods.tool) tools.push({
        use_for: use_for,
        info: x.methods.tool()
      });
      use_for.forEach(function (indicator) {
        _this._registry[indicator] = i;
      });
    });

    this.$emit('custom-event', {
      event: 'register-tools',
      args: tools
    });
    this.$on('custom-event', function (e) {
      return _this.on_ux_event(e, 'grid');
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.renderer) this.renderer.destroy();
  },
  mounted: function mounted() {
    var _this2 = this;

    var el = this.$refs['canvas'];
    this.renderer = new Grid(el, this);
    this.setup();
    this.$nextTick(function () {
      return _this2.redraw();
    });
  },
  render: function render(h) {
    var id = this.$props.grid_id;
    var layout = this.$props.layout.grids[id];
    return this.create_canvas(h, "grid-".concat(id), {
      position: {
        x: 0,
        y: layout.offset || 0
      },
      attrs: {
        width: layout.width,
        height: layout.height,
        overflow: 'hidden'
      },
      style: {
        backgroundColor: this.$props.colors.back
      },
      hs: [h(components_Crosshair, {
        props: this.common_props(),
        on: this.layer_events
      }), h(KeyboardListener, {
        on: this.keyboard_events
      }), h(UxLayer, {
        props: {
          id: id,
          tv_id: this.$props.tv_id,
          uxs: this.uxs,
          colors: this.$props.colors,
          config: this.$props.config,
          updater: Math.random()
        },
        on: {
          'custom-event': this.emit_ux_event
        }
      })].concat(this.get_overlays(h))
    });
  },
  methods: {
    new_layer: function new_layer(layer) {
      var _this3 = this;

      this.$nextTick(function () {
        return _this3.renderer.new_layer(layer);
      });
    },
    del_layer: function del_layer(layer) {
      var _this4 = this;

      this.$nextTick(function () {
        return _this4.renderer.del_layer(layer);
      });
      var grid_id = this.$props.grid_id;
      this.$emit('custom-event', {
        event: 'remove-shaders',
        args: [grid_id, layer]
      }); // TODO: close all interfaces

      this.$emit('custom-event', {
        event: 'remove-layer-meta',
        args: [grid_id, layer]
      });
      this.remove_all_ux(layer);
    },
    get_overlays: function get_overlays(h) {
      var _this5 = this;

      // Distributes overlay data & settings according
      // to this._registry; returns compo list
      var comp_list = [],
          count = {};

      var _iterator = Gridvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var d = _step.value;
          var comp = this._list[this._registry[d.type]];

          if (comp) {
            if (comp.methods.calc) {
              comp = this.inject_renderer(comp);
            }

            comp_list.push({
              cls: comp,
              type: d.type,
              data: d.data,
              settings: d.settings,
              i0: d.i0,
              tf: d.tf,
              last: d.last
            });
            count[d.type] = 0;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return comp_list.map(function (x, i) {
        return h(x.cls, {
          on: _this5.layer_events,
          attrs: Object.assign(_this5.common_props(), {
            id: "".concat(x.type, "_").concat(count[x.type]++),
            type: x.type,
            data: x.data,
            settings: x.settings,
            i0: x.i0,
            tf: x.tf,
            num: i,
            grid_id: _this5.$props.grid_id,
            meta: _this5.$props.meta,
            last: x.last
          })
        });
      });
    },
    common_props: function common_props() {
      return {
        cursor: this.$props.cursor,
        colors: this.$props.colors,
        layout: this.$props.layout.grids[this.$props.grid_id],
        interval: this.$props.interval,
        sub: this.$props.sub,
        font: this.$props.font,
        config: this.$props.config
      };
    },
    emit_ux_event: function emit_ux_event(e) {
      var e_pass = this.on_ux_event(e, 'grid');
      if (e_pass) this.$emit('custom-event', e);
    },
    // Replace the current comp with 'renderer'
    inject_renderer: function inject_renderer(comp) {
      var src = comp.methods.calc();

      if (!src.conf || !src.conf.renderer || comp.__renderer__) {
        return comp;
      } // Search for an overlay with the target 'name'


      var f = this._list.find(function (x) {
        return x.name === src.conf.renderer;
      });

      if (!f) return comp;
      comp.mixins.push(f);
      comp.__renderer__ = src.conf.renderer;
      return comp;
    }
  },
  computed: {
    is_active: function is_active() {
      return this.$props.cursor.t !== undefined && this.$props.cursor.grid_id === this.$props.grid_id;
    }
  },
  watch: {
    range: {
      handler: function handler() {
        var _this6 = this;

        // TODO: Left-side render lag fix:
        // Overlay data is updated one tick later than
        // the main sub. Fast fix is to delay redraw()
        // call. It will be a solution until a better
        // one comes by.
        this.$nextTick(function () {
          return _this6.redraw();
        });
      },
      deep: true
    },
    cursor: {
      handler: function handler() {
        if (!this.$props.cursor.locked) this.redraw();
      },
      deep: true
    },
    overlays: {
      // Track changes in calc() functions
      handler: function handler(ovs) {
        var _iterator2 = Gridvue_type_script_lang_js_createForOfIteratorHelper(ovs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var ov = _step2.value;

            var _iterator3 = Gridvue_type_script_lang_js_createForOfIteratorHelper(this.$children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var comp = _step3.value;
                if (typeof comp.id !== 'string') continue;
                var tuple = comp.id.split('_');
                tuple.pop();

                if (tuple.join('_') === ov.name) {
                  comp.calc = ov.methods.calc;
                  if (!comp.calc) continue;
                  var calc = comp.calc.toString();

                  if (calc !== ov.__prevscript__) {
                    comp.exec_script();
                  }

                  ov.__prevscript__ = calc;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      },
      deep: true
    },
    // Redraw on the shader list change
    shaders: function shaders(n, p) {
      this.redraw();
    }
  },
  data: function data() {
    var _this7 = this;

    return {
      layer_events: {
        'new-grid-layer': this.new_layer,
        'delete-grid-layer': this.del_layer,
        'show-grid-layer': function showGridLayer(d) {
          _this7.renderer.show_hide_layer(d);

          _this7.redraw();
        },
        'redraw-grid': this.redraw,
        'layer-meta-props': function layerMetaProps(d) {
          return _this7.$emit('layer-meta-props', d);
        },
        'custom-event': function customEvent(d) {
          return _this7.$emit('custom-event', d);
        }
      },
      keyboard_events: {
        'register-kb-listener': function registerKbListener(event) {
          _this7.$emit('register-kb-listener', event);
        },
        'remove-kb-listener': function removeKbListener(event) {
          _this7.$emit('remove-kb-listener', event);
        },
        'keyup': function keyup(event) {
          if (!_this7.is_active) return;

          _this7.renderer.propagate('keyup', event);
        },
        'keydown': function keydown(event) {
          if (!_this7.is_active) return; // TODO: is this neeeded?

          _this7.renderer.propagate('keydown', event);
        },
        'keypress': function keypress(event) {
          if (!_this7.is_active) return;

          _this7.renderer.propagate('keypress', event);
        }
      }
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Grid.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Gridvue_type_script_lang_js_ = (Gridvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Grid.vue
var Grid_render, Grid_staticRenderFns
;



/* normalize component */
;
var Grid_component = normalizeComponent(
  components_Gridvue_type_script_lang_js_,
  Grid_render,
  Grid_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Grid_api; }
Grid_component.options.__file = "src/components/Grid.vue"
/* harmony default export */ const components_Grid = (Grid_component.exports);
;// CONCATENATED MODULE: ./src/components/js/sidebar.js



function sidebar_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = sidebar_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function sidebar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sidebar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sidebar_arrayLikeToArray(o, minLen); }

function sidebar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var PANHEIGHT;

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(canvas, comp, side) {
    if (side === void 0) {
      side = 'right';
    }

    classCallCheck_classCallCheck(this, Sidebar);

    PANHEIGHT = comp.config.PANHEIGHT;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.comp = comp;
    this.$p = comp.$props;
    this.data = this.$p.sub;
    this.range = this.$p.range;
    this.id = this.$p.grid_id;
    this.layout = this.$p.layout.grids[this.id];
    this.side = side;
    this.listeners();
  }

  createClass_createClass(Sidebar, [{
    key: "listeners",
    value: function listeners() {
      var _this = this;

      var mc = this.mc = new hammer.Manager(this.canvas);
      mc.add(new hammer.Pan({
        direction: hammer.DIRECTION_VERTICAL,
        threshold: 0
      }));
      mc.add(new hammer.Tap({
        event: 'doubletap',
        taps: 2,
        posThreshold: 50
      }));
      mc.on('panstart', function (event) {
        if (_this.$p.y_transform) {
          _this.zoom = _this.$p.y_transform.zoom;
        } else {
          _this.zoom = 1.0;
        }

        _this.y_range = [_this.layout.$_hi, _this.layout.$_lo];
        _this.drug = {
          y: event.center.y,
          z: _this.zoom,
          mid: math.log_mid(_this.y_range, _this.layout.height),
          A: _this.layout.A,
          B: _this.layout.B
        };
      });
      mc.on('panmove', function (event) {
        if (_this.drug) {
          _this.zoom = _this.calc_zoom(event);

          _this.comp.$emit('sidebar-transform', {
            grid_id: _this.id,
            zoom: _this.zoom,
            auto: false,
            range: _this.calc_range(),
            drugging: true
          });

          _this.update();
        }
      });
      mc.on('panend', function () {
        _this.drug = null;

        _this.comp.$emit('sidebar-transform', {
          grid_id: _this.id,
          drugging: false
        });
      });
      mc.on('doubletap', function () {
        _this.comp.$emit('sidebar-transform', {
          grid_id: _this.id,
          zoom: 1.0,
          auto: true
        });

        _this.zoom = 1.0;

        _this.update();
      }); // TODO: Do later for mobile version
    }
  }, {
    key: "update",
    value: function update() {
      // Update reference to the grid
      this.layout = this.$p.layout.grids[this.id];
      var points = this.layout.ys;
      var x,
          y,
          w,
          h,
          side = this.side;
      var sb = this.layout.sb; //this.ctx.fillStyle = this.$p.colors.back

      this.ctx.font = this.$p.font;

      switch (side) {
        case 'left':
          x = 0;
          y = 0;
          w = Math.floor(sb);
          h = this.layout.height; //this.ctx.fillRect(x, y, w, h)

          this.ctx.clearRect(x, y, w, h);
          this.ctx.strokeStyle = this.$p.colors.scale;
          this.ctx.beginPath();
          this.ctx.moveTo(x + 0.5, 0);
          this.ctx.lineTo(x + 0.5, h);
          this.ctx.stroke();
          break;

        case 'right':
          x = 0;
          y = 0;
          w = Math.floor(sb);
          h = this.layout.height; //this.ctx.fillRect(x, y, w, h)

          this.ctx.clearRect(x, y, w, h);
          this.ctx.strokeStyle = this.$p.colors.scale;
          this.ctx.beginPath();
          this.ctx.moveTo(x + 0.5, 0);
          this.ctx.lineTo(x + 0.5, h);
          this.ctx.stroke();
          break;
      }

      this.ctx.fillStyle = this.$p.colors.text;
      this.ctx.beginPath();

      var _iterator = sidebar_createForOfIteratorHelper(points),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          if (p[0] > this.layout.height) continue;
          var x1 = side === 'left' ? w - 0.5 : x - 0.5;
          var x2 = side === 'left' ? x1 - 4.5 : x1 + 4.5;
          this.ctx.moveTo(x1, p[0] - 0.5);
          this.ctx.lineTo(x2, p[0] - 0.5);
          var offst = side === 'left' ? -10 : 10;
          this.ctx.textAlign = side === 'left' ? 'end' : 'start';
          var d = this.layout.prec;
          this.ctx.fillText(p[1].toFixed(d), x1 + offst, p[0] + 4);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.ctx.stroke();
      if (this.$p.grid_id) this.upper_border();
      this.apply_shaders();
      if (this.$p.cursor.y && this.$p.cursor.y$) this.panel();
    }
  }, {
    key: "apply_shaders",
    value: function apply_shaders() {
      var layout = this.$p.layout.grids[this.id];
      var props = {
        layout: layout,
        cursor: this.$p.cursor
      };

      var _iterator2 = sidebar_createForOfIteratorHelper(this.$p.shaders),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          this.ctx.save();
          s.draw(this.ctx, props);
          this.ctx.restore();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "upper_border",
    value: function upper_border() {
      this.ctx.strokeStyle = this.$p.colors.scale;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0.5);
      this.ctx.lineTo(this.layout.width, 0.5);
      this.ctx.stroke();
    } // A gray bar behind the current price

  }, {
    key: "panel",
    value: function panel() {
      if (this.$p.cursor.grid_id !== this.layout.id) {
        return;
      }

      var lbl = this.$p.cursor.y$.toFixed(this.layout.prec);
      this.ctx.fillStyle = this.$p.colors.panel;
      var panwidth = this.layout.sb + 1;
      var x = -0.5;
      var y = this.$p.cursor.y - PANHEIGHT * 0.5 - 0.5;
      var a = 7;
      this.ctx.fillRect(x - 0.5, y, panwidth, PANHEIGHT);
      this.ctx.fillStyle = this.$p.colors.textHL;
      this.ctx.textAlign = 'left';
      this.ctx.fillText(lbl, a, y + 15);
    }
  }, {
    key: "calc_zoom",
    value: function calc_zoom(event) {
      var d = this.drug.y - event.center.y;
      var speed = d > 0 ? 3 : 1;
      var k = 1 + speed * d / this.layout.height;
      return utils.clamp(this.drug.z * k, 0.005, 100);
    } // Not the best place to calculate y-range but
    // this is the simplest solution I found up to
    // date

  }, {
    key: "calc_range",
    value: function calc_range(diff1, diff2) {
      var _this2 = this;

      if (diff1 === void 0) {
        diff1 = 1;
      }

      if (diff2 === void 0) {
        diff2 = 1;
      }

      var z = this.zoom / this.drug.z;
      var zk = (1 / z - 1) / 2;
      var range = this.y_range.slice();
      var delta = range[0] - range[1];

      if (!this.layout.grid.logScale) {
        range[0] = range[0] + delta * zk * diff1;
        range[1] = range[1] - delta * zk * diff2;
      } else {
        var px_mid = this.layout.height / 2;
        var new_hi = px_mid - px_mid * (1 / z);
        var new_lo = px_mid + px_mid * (1 / z); // Use old mapping to get a new range

        var f = function f(y) {
          return math.exp((y - _this2.drug.B) / _this2.drug.A);
        };

        var copy = range.slice();
        range[0] = f(new_hi);
        range[1] = f(new_lo);
      }

      return range;
    }
  }, {
    key: "rezoom_range",
    value: function rezoom_range(delta, diff1, diff2) {
      if (!this.$p.y_transform || this.$p.y_transform.auto) return;
      this.zoom = 1.0; // TODO: further work (improve scaling ratio)

      if (delta < 0) delta /= 3.75; // Btw, idk why 3.75, but it works

      delta *= 0.25;
      this.y_range = [this.layout.$_hi, this.layout.$_lo];
      this.drug = {
        y: 0,
        z: this.zoom,
        mid: math.log_mid(this.y_range, this.layout.height),
        A: this.layout.A,
        B: this.layout.B
      };
      this.zoom = this.calc_zoom({
        center: {
          y: delta * this.layout.height
        }
      });
      this.comp.$emit('sidebar-transform', {
        grid_id: this.id,
        zoom: this.zoom,
        auto: false,
        range: this.calc_range(diff1, diff2),
        drugging: true
      });
      this.drug = null;
      this.comp.$emit('sidebar-transform', {
        grid_id: this.id,
        drugging: false
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.mc) this.mc.destroy();
    }
  }, {
    key: "mousemove",
    value: function mousemove() {}
  }, {
    key: "mouseout",
    value: function mouseout() {}
  }, {
    key: "mouseup",
    value: function mouseup() {}
  }, {
    key: "mousedown",
    value: function mousedown() {}
  }]);

  return Sidebar;
}();


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Sidebar.vue?vue&type=script&lang=js&
// The side bar (yep, that thing with a bunch of $$$)


/* harmony default export */ const Sidebarvue_type_script_lang_js_ = ({
  name: 'Sidebar',
  props: ['sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'font', 'width', 'height', 'grid_id', 'rerender', 'y_transform', 'tv_id', 'config', 'shaders'],
  mixins: [canvas],
  mounted: function mounted() {
    var el = this.$refs['canvas'];
    this.renderer = new Sidebar(el, this);
    this.setup();
    this.redraw();
  },
  render: function render(h) {
    var id = this.$props.grid_id;
    var layout = this.$props.layout.grids[id];
    return this.create_canvas(h, "sidebar-".concat(id), {
      position: {
        x: layout.width,
        y: layout.offset || 0
      },
      attrs: {
        rerender: this.$props.rerender,
        width: this.$props.width,
        height: layout.height
      },
      style: {
        backgroundColor: this.$props.colors.back
      }
    });
  },
  watch: {
    range: {
      handler: function handler() {
        this.redraw();
      },
      deep: true
    },
    cursor: {
      handler: function handler() {
        this.redraw();
      },
      deep: true
    },
    rerender: function rerender() {
      var _this = this;

      this.$nextTick(function () {
        return _this.redraw();
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.renderer) this.renderer.destroy();
  }
});
;// CONCATENATED MODULE: ./src/components/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Sidebar.vue
var Sidebar_render, Sidebar_staticRenderFns
;



/* normalize component */
;
var Sidebar_component = normalizeComponent(
  components_Sidebarvue_type_script_lang_js_,
  Sidebar_render,
  Sidebar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Sidebar_api; }
Sidebar_component.options.__file = "src/components/Sidebar.vue"
/* harmony default export */ const components_Sidebar = (Sidebar_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Legend.vue?vue&type=template&id=34724886&
var Legendvue_type_template_id_34724886_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "trading-vue-legend", style: _vm.calc_style },
    [
      _vm.grid_id === 0
        ? _c(
            "div",
            {
              staticClass: "trading-vue-ohlcv",
              style: { "max-width": _vm.common.width + "px" },
            },
            [
              _c(
                "span",
                {
                  staticClass: "t-vue-title",
                  style: { color: _vm.common.colors.title },
                },
                [
                  _vm._v(
                    "\n              " +
                      _vm._s(_vm.common.title_txt) +
                      "\n        "
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.show_values
                ? _c("span", [
                    _vm._v("\n            O"),
                    _c("span", { staticClass: "t-vue-lspan" }, [
                      _vm._v(_vm._s(_vm.ohlcv[0])),
                    ]),
                    _vm._v("\n            H"),
                    _c("span", { staticClass: "t-vue-lspan" }, [
                      _vm._v(_vm._s(_vm.ohlcv[1])),
                    ]),
                    _vm._v("\n            L"),
                    _c("span", { staticClass: "t-vue-lspan" }, [
                      _vm._v(_vm._s(_vm.ohlcv[2])),
                    ]),
                    _vm._v("\n            C"),
                    _c("span", { staticClass: "t-vue-lspan" }, [
                      _vm._v(_vm._s(_vm.ohlcv[3])),
                    ]),
                    _vm._v("\n            V"),
                    _c("span", { staticClass: "t-vue-lspan" }, [
                      _vm._v(_vm._s(_vm.ohlcv[4])),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.show_values
                ? _c(
                    "span",
                    {
                      staticClass: "t-vue-lspan",
                      style: { color: _vm.common.colors.text },
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s((_vm.common.meta.last || [])[4]) +
                          "\n        "
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(this.indicators, function (ind) {
        return _c(
          "div",
          { staticClass: "t-vue-ind" },
          [
            _c("span", { staticClass: "t-vue-iname" }, [
              _vm._v(_vm._s(ind.name)),
            ]),
            _vm._v(" "),
            _c("button-group", {
              attrs: {
                buttons: _vm.common.buttons,
                config: _vm.common.config,
                ov_id: ind.id,
                grid_id: _vm.grid_id,
                index: ind.index,
                tv_id: _vm.common.tv_id,
                display: ind.v,
              },
              on: { "legend-button-click": _vm.button_click },
            }),
            _vm._v(" "),
            ind.v
              ? _c(
                  "span",
                  { staticClass: "t-vue-ivalues" },
                  _vm._l(ind.values, function (v) {
                    return _vm.show_values
                      ? _c(
                          "span",
                          {
                            staticClass: "t-vue-lspan t-vue-ivalue",
                            style: { color: v.color },
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(v.value) +
                                "\n            "
                            ),
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            ind.unk
              ? _c("span", { staticClass: "t-vue-unknown" }, [
                  _vm._v("\n            (Unknown type)\n        "),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "transition",
              { attrs: { name: "tvjs-appear" } },
              [
                ind.loading
                  ? _c("spinner", { attrs: { colors: _vm.common.colors } })
                  : _vm._e(),
              ],
              1
            ),
          ],
          1
        )
      }),
    ],
    2
  )
}
var Legendvue_type_template_id_34724886_staticRenderFns = []
Legendvue_type_template_id_34724886_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/Legend.vue?vue&type=template&id=34724886&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ButtonGroup.vue?vue&type=template&id=6f826426&
var ButtonGroupvue_type_template_id_6f826426_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { staticClass: "t-vue-lbtn-grp" },
    _vm._l(_vm.buttons, function (b, i) {
      return _c("legend-button", {
        key: i,
        attrs: {
          id: b.name || b,
          tv_id: _vm.tv_id,
          ov_id: _vm.ov_id,
          grid_id: _vm.grid_id,
          index: _vm.index,
          display: _vm.display,
          icon: b.icon,
          config: _vm.config,
        },
        on: { "legend-button-click": _vm.button_click },
      })
    }),
    1
  )
}
var ButtonGroupvue_type_template_id_6f826426_staticRenderFns = []
ButtonGroupvue_type_template_id_6f826426_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/ButtonGroup.vue?vue&type=template&id=6f826426&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LegendButton.vue?vue&type=template&id=1ad87362&
var LegendButtonvue_type_template_id_1ad87362_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("img", {
    staticClass: "t-vue-lbtn",
    style: {
      width: _vm.config.L_BTN_SIZE + "px",
      height: _vm.config.L_BTN_SIZE + "px",
      margin: _vm.config.L_BTN_MARGIN,
    },
    attrs: { src: _vm.base64, id: _vm.uuid },
    on: { click: _vm.onclick },
  })
}
var LegendButtonvue_type_template_id_1ad87362_staticRenderFns = []
LegendButtonvue_type_template_id_1ad87362_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/LegendButton.vue?vue&type=template&id=1ad87362&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LegendButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ const LegendButtonvue_type_script_lang_js_ = ({
  name: 'LegendButton',
  props: ['id', 'tv_id', 'grid_id', 'ov_id', 'index', 'display', 'icon', 'config'],
  mounted: function mounted() {},
  computed: {
    base64: function base64() {
      return this.icon || icons_namespaceObject[this.file_name];
    },
    file_name: function file_name() {
      var id = this.$props.id;

      if (this.$props.id === 'display') {
        id = this.$props.display ? 'display_on' : 'display_off';
      }

      return id + '.png';
    },
    uuid: function uuid() {
      var tv = this.$props.tv_id;
      var gr = this.$props.grid_id;
      var ov = this.$props.ov_id;
      return "".concat(tv, "-btn-g").concat(gr, "-").concat(ov);
    },
    data_type: function data_type() {
      return this.$props.grid_id === 0 ? "onchart" : "offchart";
    },
    data_index: function data_index() {
      return this.$props.index;
    }
  },
  methods: {
    onclick: function onclick() {
      this.$emit('legend-button-click', {
        button: this.$props.id,
        type: this.data_type,
        dataIndex: this.data_index,
        grid: this.$props.grid_id,
        overlay: this.$props.ov_id
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/LegendButton.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_LegendButtonvue_type_script_lang_js_ = (LegendButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LegendButton.vue?vue&type=style&index=0&lang=css&
var LegendButtonvue_type_style_index_0_lang_css_ = __webpack_require__(169);
;// CONCATENATED MODULE: ./src/components/LegendButton.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/LegendButton.vue



;


/* normalize component */

var LegendButton_component = normalizeComponent(
  components_LegendButtonvue_type_script_lang_js_,
  LegendButtonvue_type_template_id_1ad87362_render,
  LegendButtonvue_type_template_id_1ad87362_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var LegendButton_api; }
LegendButton_component.options.__file = "src/components/LegendButton.vue"
/* harmony default export */ const LegendButton = (LegendButton_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ButtonGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const ButtonGroupvue_type_script_lang_js_ = ({
  name: 'ButtonGroup',
  props: ['buttons', 'tv_id', 'ov_id', 'grid_id', 'index', 'display', 'config'],
  components: {
    LegendButton: LegendButton
  },
  methods: {
    button_click: function button_click(event) {
      this.$emit('legend-button-click', event);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/ButtonGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_ButtonGroupvue_type_script_lang_js_ = (ButtonGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ButtonGroup.vue?vue&type=style&index=0&lang=css&
var ButtonGroupvue_type_style_index_0_lang_css_ = __webpack_require__(886);
;// CONCATENATED MODULE: ./src/components/ButtonGroup.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/ButtonGroup.vue



;


/* normalize component */

var ButtonGroup_component = normalizeComponent(
  components_ButtonGroupvue_type_script_lang_js_,
  ButtonGroupvue_type_template_id_6f826426_render,
  ButtonGroupvue_type_template_id_6f826426_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ButtonGroup_api; }
ButtonGroup_component.options.__file = "src/components/ButtonGroup.vue"
/* harmony default export */ const ButtonGroup = (ButtonGroup_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Spinner.vue?vue&type=template&id=39432f99&
var Spinnervue_type_template_id_39432f99_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tvjs-spinner" },
    _vm._l(4, function (i) {
      return _c("div", { key: i, style: { background: _vm.colors.text } })
    }),
    0
  )
}
var Spinnervue_type_template_id_39432f99_staticRenderFns = []
Spinnervue_type_template_id_39432f99_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=template&id=39432f99&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ const Spinnervue_type_script_lang_js_ = ({
  name: 'Spinner',
  props: ['colors']
});
;// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Spinner.vue?vue&type=style&index=0&lang=css&
var Spinnervue_type_style_index_0_lang_css_ = __webpack_require__(372);
;// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/Spinner.vue



;


/* normalize component */

var Spinner_component = normalizeComponent(
  components_Spinnervue_type_script_lang_js_,
  Spinnervue_type_template_id_39432f99_render,
  Spinnervue_type_template_id_39432f99_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Spinner_api; }
Spinner_component.options.__file = "src/components/Spinner.vue"
/* harmony default export */ const Spinner = (Spinner_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Legend.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const Legendvue_type_script_lang_js_ = ({
  name: 'ChartLegend',
  props: ['common', 'values', 'grid_id', 'meta_props'],
  components: {
    ButtonGroup: ButtonGroup,
    Spinner: Spinner
  },
  computed: {
    ohlcv: function ohlcv() {
      if (!this.$props.values || !this.$props.values.ohlcv) {
        return Array(6).fill('n/a');
      }

      var prec = this.layout.prec; // TODO: main the main legend more customizable

      var id = this.main_type + '_0';
      var meta = this.$props.meta_props[id] || {};

      if (meta.legend) {
        return (meta.legend() || []).map(function (x) {
          return x.value;
        });
      }

      return [this.$props.values.ohlcv[1].toFixed(prec), this.$props.values.ohlcv[2].toFixed(prec), this.$props.values.ohlcv[3].toFixed(prec), this.$props.values.ohlcv[4].toFixed(prec), this.$props.values.ohlcv[5] ? this.$props.values.ohlcv[5].toFixed(2) : 'n/a'];
    },
    // TODO: add support for { grid: { id : N }}
    indicators: function indicators() {
      var _this = this;

      var values = this.$props.values;
      var f = this.format;
      var types = {};
      return this.json_data.filter(function (x) {
        return x.settings.legend !== false && !x.main;
      }).map(function (x) {
        if (!(x.type in types)) types[x.type] = 0;
        var id = x.type + "_".concat(types[x.type]++);
        return {
          v: 'display' in x.settings ? x.settings.display : true,
          name: x.name || id,
          index: (_this.off_data || _this.json_data).indexOf(x),
          id: id,
          values: values ? f(id, values) : _this.n_a(1),
          unk: !(id in (_this.$props.meta_props || {})),
          loading: x.loading
        };
      });
    },
    calc_style: function calc_style() {
      var top = this.layout.height > 150 ? 10 : 5;
      var grids = this.$props.common.layout.grids;
      var w = grids[0] ? grids[0].width : undefined;
      return {
        top: "".concat(this.layout.offset + top, "px"),
        width: "".concat(w - 20, "px")
      };
    },
    layout: function layout() {
      var id = this.$props.grid_id;
      return this.$props.common.layout.grids[id];
    },
    json_data: function json_data() {
      return this.$props.common.data;
    },
    off_data: function off_data() {
      return this.$props.common.offchart;
    },
    main_type: function main_type() {
      var f = this.common.data.find(function (x) {
        return x.main;
      });
      return f ? f.type : undefined;
    },
    show_values: function show_values() {
      return this.common.cursor.mode !== 'explore';
    }
  },
  methods: {
    format: function format(id, values) {
      var meta = this.$props.meta_props[id] || {}; // Matches Overlay.data_colors with the data values
      // (see Spline.vue)

      if (!values[id]) return this.n_a(1); // Custom formatter

      if (meta.legend) return meta.legend(values[id]);
      return values[id].slice(1).map(function (x, i) {
        var cs = meta.data_colors ? meta.data_colors() : [];

        if (typeof x == 'number') {
          // Show 8 digits for small values
          x = x.toFixed(Math.abs(x) > 0.001 ? 4 : 8);
        }

        return {
          value: x,
          color: cs ? cs[i % cs.length] : undefined
        };
      });
    },
    n_a: function n_a(len) {
      return Array(len).fill({
        value: 'n/a'
      });
    },
    button_click: function button_click(event) {
      this.$emit('legend-button-click', event);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Legend.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Legendvue_type_script_lang_js_ = (Legendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Legend.vue?vue&type=style&index=0&lang=css&
var Legendvue_type_style_index_0_lang_css_ = __webpack_require__(600);
;// CONCATENATED MODULE: ./src/components/Legend.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/Legend.vue



;


/* normalize component */

var Legend_component = normalizeComponent(
  components_Legendvue_type_script_lang_js_,
  Legendvue_type_template_id_34724886_render,
  Legendvue_type_template_id_34724886_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Legend_api; }
Legend_component.options.__file = "src/components/Legend.vue"
/* harmony default export */ const Legend = (Legend_component.exports);
;// CONCATENATED MODULE: ./src/mixins/shaders.js
function shaders_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = shaders_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function shaders_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return shaders_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return shaders_arrayLikeToArray(o, minLen); }

function shaders_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Parser for shader events
/* harmony default export */ const shaders = ({
  methods: {
    // Init shaders from extensions
    init_shaders: function init_shaders(skin, prev) {
      if (skin !== prev) {
        if (prev) this.shaders = this.shaders.filter(function (x) {
          return x.owner !== prev.id;
        });

        var _iterator = shaders_createForOfIteratorHelper(skin.shaders),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var Shader = _step.value;
            var shader = new Shader();
            shader.owner = skin.id;
            this.shaders.push(shader);
          } // TODO: Sort by zIndex

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    on_shader_event: function on_shader_event(d, target) {
      if (d.event === 'new-shader') {
        if (d.args[0].target === target) {
          d.args[0].id = "".concat(d.args[1], "-").concat(d.args[2]);
          this.shaders.push(d.args[0]);
          this.rerender++;
        }
      }

      if (d.event === 'remove-shaders') {
        var id = d.args.join('-');
        this.shaders = this.shaders.filter(function (x) {
          return x.id !== id;
        });
      }
    }
  },
  watch: {
    skin: function skin(n, p) {
      this.init_shaders(n, p);
    }
  },
  data: function data() {
    return {
      shaders: []
    };
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Section.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const Sectionvue_type_script_lang_js_ = ({
  name: 'GridSection',
  props: ['common', 'grid_id'],
  mixins: [shaders],
  components: {
    Grid: components_Grid,
    Sidebar: components_Sidebar,
    ChartLegend: Legend
  },
  mounted: function mounted() {
    this.init_shaders(this.$props.common.skin);
  },
  methods: {
    range_changed: function range_changed(r) {
      this.$emit('range-changed', r);
    },
    cursor_changed: function cursor_changed(c) {
      c.grid_id = this.$props.grid_id;
      this.$emit('cursor-changed', c);
    },
    cursor_locked: function cursor_locked(state) {
      this.$emit('cursor-locked', state);
    },
    sidebar_transform: function sidebar_transform(s) {
      this.$emit('sidebar-transform', s);
    },
    emit_meta_props: function emit_meta_props(d) {
      this.$set(this.meta_props, d.layer_id, d);
      this.$emit('layer-meta-props', d);
    },
    emit_custom_event: function emit_custom_event(d) {
      this.on_shader_event(d, 'sidebar');
      this.$emit('custom-event', d);
    },
    button_click: function button_click(event) {
      this.$emit('legend-button-click', event);
    },
    register_kb: function register_kb(event) {
      this.$emit('register-kb-listener', event);
    },
    remove_kb: function remove_kb(event) {
      this.$emit('remove-kb-listener', event);
    },
    rezoom_range: function rezoom_range(event) {
      var id = 'sb-' + event.grid_id;

      if (this.$refs[id]) {
        this.$refs[id].renderer.rezoom_range(event.z, event.diff1, event.diff2);
      }
    },
    ghash: function ghash(val) {
      // Measures grid heights configuration
      var hs = val.layout.grids.map(function (x) {
        return x.height;
      });
      return hs.reduce(function (a, b) {
        return a + b;
      }, '');
    }
  },
  computed: {
    // Component-specific props subsets:
    grid_props: function grid_props() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common); // Split offchart data between offchart grids

      if (id > 0) {
        var _p$data;

        var all = p.data;
        p.data = [p.data[id - 1]]; // Merge offchart overlays with custom ids with
        // the existing onse (by comparing the grid ids)

        (_p$data = p.data).push.apply(_p$data, _toConsumableArray(all.filter(function (x) {
          return x.grid && x.grid.id === id;
        })));
      }

      p.width = p.layout.grids[id].width;
      p.height = p.layout.grids[id].height;
      p.y_transform = p.y_ts[id];
      p.shaders = this.grid_shaders;
      return p;
    },
    sidebar_props: function sidebar_props() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common);
      p.width = p.layout.grids[id].sb;
      p.height = p.layout.grids[id].height;
      p.y_transform = p.y_ts[id];
      p.shaders = this.sb_shaders;
      return p;
    },
    section_values: function section_values() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common);
      p.width = p.layout.grids[id].width;
      return p.cursor.values[id];
    },
    legend_props: function legend_props() {
      var id = this.$props.grid_id;
      var p = Object.assign({}, this.$props.common); // Split offchart data between offchart grids

      if (id > 0) {
        var _p$data2;

        var all = p.data;
        p.offchart = all;
        p.data = [p.data[id - 1]];

        (_p$data2 = p.data).push.apply(_p$data2, _toConsumableArray(all.filter(function (x) {
          return x.grid && x.grid.id === id;
        })));
      }

      return p;
    },
    get_meta_props: function get_meta_props() {
      return this.meta_props;
    },
    grid_shaders: function grid_shaders() {
      return this.shaders.filter(function (x) {
        return x.target === 'grid';
      });
    },
    sb_shaders: function sb_shaders() {
      return this.shaders.filter(function (x) {
        return x.target === 'sidebar';
      });
    }
  },
  watch: {
    common: {
      handler: function handler(val, old_val) {
        var newhash = this.ghash(val);

        if (newhash !== this.last_ghash) {
          this.rerender++;
        }

        if (val.data.length !== old_val.data.length) {
          // Look at this nasty trick!
          this.rerender++;
        }

        this.last_ghash = newhash;
      },
      deep: true
    }
  },
  data: function data() {
    return {
      meta_props: {},
      rerender: 0,
      last_ghash: ''
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Section.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Sectionvue_type_script_lang_js_ = (Sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Section.vue?vue&type=style&index=0&lang=css&
var Sectionvue_type_style_index_0_lang_css_ = __webpack_require__(11);
;// CONCATENATED MODULE: ./src/components/Section.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/Section.vue



;


/* normalize component */

var Section_component = normalizeComponent(
  components_Sectionvue_type_script_lang_js_,
  Sectionvue_type_template_id_8fbe9336_render,
  Sectionvue_type_template_id_8fbe9336_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Section_api; }
Section_component.options.__file = "src/components/Section.vue"
/* harmony default export */ const Section = (Section_component.exports);
;// CONCATENATED MODULE: ./src/components/js/botbar.js



function botbar_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = botbar_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function botbar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return botbar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return botbar_arrayLikeToArray(o, minLen); }

function botbar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var botbar_MINUTE15 = constants.MINUTE15,
    botbar_MINUTE = constants.MINUTE,
    botbar_HOUR = constants.HOUR,
    botbar_DAY = constants.DAY,
    botbar_WEEK = constants.WEEK,
    botbar_MONTH = constants.MONTH,
    botbar_YEAR = constants.YEAR,
    botbar_MONTHMAP = constants.MONTHMAP;

var Botbar = /*#__PURE__*/function () {
  function Botbar(canvas, comp) {
    classCallCheck_classCallCheck(this, Botbar);

    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.comp = comp;
    this.$p = comp.$props;
    this.data = this.$p.sub;
    this.range = this.$p.range;
    this.layout = this.$p.layout;
  }

  createClass_createClass(Botbar, [{
    key: "update",
    value: function update() {
      this.grid_0 = this.layout.grids[0];
      var width = this.layout.botbar.width;
      var height = this.layout.botbar.height;
      var sb = this.layout.grids[0].sb; //this.ctx.fillStyle = this.$p.colors.back

      this.ctx.font = this.$p.font; //this.ctx.fillRect(0, 0, width, height)

      this.ctx.clearRect(0, 0, width, height);
      this.ctx.strokeStyle = this.$p.colors.scale;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0.5);
      this.ctx.lineTo(Math.floor(width + 1), 0.5);
      this.ctx.stroke();
      this.ctx.fillStyle = this.$p.colors.text;
      this.ctx.beginPath();

      var _iterator = botbar_createForOfIteratorHelper(this.layout.botbar.xs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var lbl = this.format_date(p);
          if (p[0] > width - sb) continue;
          this.ctx.moveTo(p[0] - 0.5, 0);
          this.ctx.lineTo(p[0] - 0.5, 4.5);

          if (!this.lbl_highlight(p[1][0])) {
            this.ctx.globalAlpha = 0.85;
          }

          this.ctx.textAlign = 'center';
          this.ctx.fillText(lbl, p[0], 18);
          this.ctx.globalAlpha = 1;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.ctx.stroke();
      this.apply_shaders();
      if (this.$p.cursor.x && this.$p.cursor.t !== undefined) this.panel();
    }
  }, {
    key: "apply_shaders",
    value: function apply_shaders() {
      var layout = this.layout.grids[0];
      var props = {
        layout: layout,
        cursor: this.$p.cursor
      };

      var _iterator2 = botbar_createForOfIteratorHelper(this.comp.bot_shaders),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var s = _step2.value;
          this.ctx.save();
          s.draw(this.ctx, props);
          this.ctx.restore();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "panel",
    value: function panel() {
      var lbl = this.format_cursor_x();
      this.ctx.fillStyle = this.$p.colors.panel;
      var measure = this.ctx.measureText(lbl + '    ');
      var panwidth = Math.floor(measure.width);
      var cursor = this.$p.cursor.x;
      var x = Math.floor(cursor - panwidth * 0.5);
      var y = -0.5;
      var panheight = this.comp.config.PANHEIGHT;
      this.ctx.fillRect(x, y, panwidth, panheight + 0.5);
      this.ctx.fillStyle = this.$p.colors.textHL;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(lbl, cursor, y + 16);
    }
  }, {
    key: "format_date",
    value: function format_date(p) {
      var t = p[1][0];
      t = this.grid_0.ti_map.i2t(t);
      var ti = this.$p.layout.grids[0].ti_map.tf; // Enable timezones only for tf < 1D

      var k = ti < botbar_DAY ? 1 : 0;
      var tZ = t + k * this.$p.timezone * botbar_HOUR; //t += new Date(t).getTimezoneOffset() * MINUTE

      var d = new Date(tZ);

      if (p[2] === botbar_YEAR || utils.year_start(t) === t) {
        return d.getUTCFullYear();
      }

      if (p[2] === botbar_MONTH || utils.month_start(t) === t) {
        return botbar_MONTHMAP[d.getUTCMonth()];
      } // TODO(*) see grid_maker.js


      if (utils.day_start(tZ) === tZ) return d.getUTCDate();
      var h = utils.add_zero(d.getUTCHours());
      var m = utils.add_zero(d.getUTCMinutes());
      return h + ":" + m;
    }
  }, {
    key: "format_cursor_x",
    value: function format_cursor_x() {
      var t = this.$p.cursor.t;
      t = this.grid_0.ti_map.i2t(t); //let ti = this.$p.interval

      var ti = this.$p.layout.grids[0].ti_map.tf; // Enable timezones only for tf < 1D

      var k = ti < botbar_DAY ? 1 : 0; //t += new Date(t).getTimezoneOffset() * MINUTE

      var d = new Date(t + k * this.$p.timezone * botbar_HOUR);

      if (ti === botbar_YEAR) {
        return d.getUTCFullYear();
      }

      if (ti < botbar_YEAR) {
        var yr = '`' + "".concat(d.getUTCFullYear()).slice(-2);
        var mo = botbar_MONTHMAP[d.getUTCMonth()];
        var dd = '01';
      }

      if (ti <= botbar_WEEK) dd = d.getUTCDate();
      var date = "".concat(dd, " ").concat(mo, " ").concat(yr);
      var time = '';

      if (ti < botbar_DAY) {
        var h = utils.add_zero(d.getUTCHours());
        var m = utils.add_zero(d.getUTCMinutes());
        time = h + ":" + m;
      }

      return "".concat(date, "  ").concat(time);
    } // Highlights the begining of a time interval
    // TODO: improve. Problem: let's say we have a new month,
    // but if there is no grid line in place, there
    // will be no month name on t-axis. Sad.
    // Solution: manipulate the grid, skew it, you know

  }, {
    key: "lbl_highlight",
    value: function lbl_highlight(t) {
      var ti = this.$p.interval;
      if (t === 0) return true;
      if (utils.month_start(t) === t) return true;
      if (utils.day_start(t) === t) return true;
      if (ti <= botbar_MINUTE15 && t % botbar_HOUR === 0) return true;
      return false;
    }
  }, {
    key: "mousemove",
    value: function mousemove() {}
  }, {
    key: "mouseout",
    value: function mouseout() {}
  }, {
    key: "mouseup",
    value: function mouseup() {}
  }, {
    key: "mousedown",
    value: function mousedown() {}
  }]);

  return Botbar;
}();


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Botbar.vue?vue&type=script&lang=js&
// The bottom bar (yep, that thing with a bunch of dates)


/* harmony default export */ const Botbarvue_type_script_lang_js_ = ({
  name: 'Botbar',
  props: ['sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'font', 'width', 'height', 'rerender', 'tv_id', 'config', 'shaders', 'timezone'],
  mixins: [canvas],
  mounted: function mounted() {
    var el = this.$refs['canvas'];
    this.renderer = new Botbar(el, this);
    this.setup();
    this.redraw();
  },
  render: function render(h) {
    var sett = this.$props.layout.botbar;
    return this.create_canvas(h, 'botbar', {
      position: {
        x: 0,
        y: sett.offset || 0
      },
      attrs: {
        rerender: this.$props.rerender,
        width: sett.width,
        height: sett.height
      },
      style: {
        backgroundColor: this.$props.colors.back
      }
    });
  },
  computed: {
    bot_shaders: function bot_shaders() {
      return this.$props.shaders.filter(function (x) {
        return x.target === 'botbar';
      });
    }
  },
  watch: {
    range: {
      handler: function handler() {
        this.redraw();
      },
      deep: true
    },
    cursor: {
      handler: function handler() {
        this.redraw();
      },
      deep: true
    },
    rerender: function rerender() {
      var _this = this;

      this.$nextTick(function () {
        return _this.redraw();
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Botbar.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Botbarvue_type_script_lang_js_ = (Botbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Botbar.vue?vue&type=style&index=0&lang=css&
var Botbarvue_type_style_index_0_lang_css_ = __webpack_require__(124);
;// CONCATENATED MODULE: ./src/components/Botbar.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/Botbar.vue
var Botbar_render, Botbar_staticRenderFns
;

;


/* normalize component */

var Botbar_component = normalizeComponent(
  components_Botbarvue_type_script_lang_js_,
  Botbar_render,
  Botbar_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Botbar_api; }
Botbar_component.options.__file = "src/components/Botbar.vue"
/* harmony default export */ const components_Botbar = (Botbar_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Keyboard.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ const Keyboardvue_type_script_lang_js_ = ({
  name: 'Keyboard',
  created: function created() {
    window.addEventListener('keydown', this.keydown);
    window.addEventListener('keyup', this.keyup);
    window.addEventListener('keypress', this.keypress);
    this._listeners = {};
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('keydown', this.keydown);
    window.removeEventListener('keyup', this.keyup);
    window.removeEventListener('keypress', this.keypress);
  },
  render: function render(h) {
    return h();
  },
  methods: {
    keydown: function keydown(event) {
      for (var id in this._listeners) {
        var l = this._listeners[id];

        if (l && l.keydown) {
          l.keydown(event);
        } else {
          console.warn("No 'keydown' listener for ".concat(id));
        }
      }
    },
    keyup: function keyup(event) {
      for (var id in this._listeners) {
        var l = this._listeners[id];

        if (l && l.keyup) {
          l.keyup(event);
        } else {
          console.warn("No 'keyup' listener for ".concat(id));
        }
      }
    },
    keypress: function keypress(event) {
      for (var id in this._listeners) {
        var l = this._listeners[id];

        if (l && l.keypress) {
          l.keypress(event);
        } else {
          console.warn("No 'keypress' listener for ".concat(id));
        }
      }
    },
    register: function register(listener) {
      this._listeners[listener.id] = listener;
    },
    remove: function remove(listener) {
      delete this._listeners[listener.id];
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Keyboard.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Keyboardvue_type_script_lang_js_ = (Keyboardvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Keyboard.vue
var Keyboard_render, Keyboard_staticRenderFns
;



/* normalize component */
;
var Keyboard_component = normalizeComponent(
  components_Keyboardvue_type_script_lang_js_,
  Keyboard_render,
  Keyboard_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Keyboard_api; }
Keyboard_component.options.__file = "src/components/Keyboard.vue"
/* harmony default export */ const Keyboard = (Keyboard_component.exports);
;// CONCATENATED MODULE: ./src/mixins/datatrack.js
// Data tracker/watcher

/* harmony default export */ const datatrack = ({
  methods: {
    data_changed: function data_changed() {
      var n = this.ohlcv;
      var changed = false;

      if (this._data_n0 !== n[0] && this._data_len !== n.length) {
        changed = true;
      }

      this.check_all_data(changed);

      if (this.ti_map.ib) {
        this.reindex_delta(n[0], this._data_n0);
      }

      this._data_n0 = n[0];
      this._data_len = n.length;
      this.save_data_t();
      return changed;
    },
    check_all_data: function check_all_data(changed) {
      // If length of data in the Structure changed by > 1 point
      // emit a special event for DC to recalc the scripts
      // TODO: check overlays data too
      var len = this._data_len || 0;

      if (Math.abs(this.ohlcv.length - len) > 1 || this._data_n0 !== this.ohlcv[0]) {
        this.$emit('custom-event', {
          event: 'data-len-changed',
          args: []
        });
      }
    },
    reindex_delta: function reindex_delta(n, p) {
      n = n || [[0]];
      p = p || [[0]];
      var dt = n[0] - p[0];

      if (dt !== 0 && this._data_t) {
        // Convert t back to index
        try {
          // More precise method first
          var nt = this._data_t + 0.01; // fix for the filter lib

          var res = utils.fast_nearest(this.ohlcv, nt);
          var cndl = this.ohlcv[res[0]];
          var off = (nt - cndl[0]) / this.interval_ms;
          this["goto"](res[0] + off);
        } catch (e) {
          this["goto"](this.ti_map.t2i(this._data_t));
        }
      }
    },
    save_data_t: function save_data_t() {
      this._data_t = this.ti_map.i2t(this.range[1]); // save as t
    }
  },
  data: function data() {
    return {
      _data_n0: null,
      _data_len: 0,
      _data_t: 0
    };
  }
});
;// CONCATENATED MODULE: ./src/components/js/ti_mapping.js




// Time-index mapping (for non-linear t-axis)

var MAX_ARR = Math.pow(2, 32); // 3 MODES of index calculation for overlays/subcharts:
// ::: indexSrc :::
// * "map"      -> use TI mapping functions to detect index
//                 (slowest, for stocks only. DEFAULT)
//
// * "calc"     -> calculate shift between sub & data
//                 (faster, but overlay data should be perfectly
//                  align with the main chart,
//                  1-1 candle/data point. Supports Renko)
//
// * "data"     -> overlay data should come with candle index
//                 (fastest, supports Renko)

var TI = /*#__PURE__*/function () {
  function TI() {
    classCallCheck_classCallCheck(this, TI);

    this.ib = false;
  }

  createClass_createClass(TI, [{
    key: "init",
    value: function init(params, res) {
      var sub = params.sub,
          interval = params.interval,
          meta = params.meta,
          $p = params.$props,
          interval_ms = params.interval_ms,
          sub_start = params.sub_start,
          ib = params.ib;
      this.ti_map = [];
      this.it_map = [];
      this.sub_i = [];
      this.ib = ib;
      this.sub = res;
      this.ss = sub_start;
      this.tf = interval_ms;
      var start = meta.sub_start; // Skip mapping for the regular mode

      if (this.ib) {
        this.map_sub(res);
      }
    } // Make maps for the main subset

  }, {
    key: "map_sub",
    value: function map_sub(res) {
      for (var i = 0; i < res.length; i++) {
        var t = res[i][0];

        var _i = this.ss + i;

        this.ti_map[t] = _i;
        this.it_map[_i] = t; // Overwrite t with i

        var copy = _toConsumableArray(res[i]);

        copy[0] = _i;
        this.sub_i.push(copy);
      }
    } // Map overlay data
    // TODO: parse() called 3 times instead of 2 for 'spx_sample.json'

  }, {
    key: "parse",
    value: function parse(data, mode) {
      if (!this.ib || !this.sub[0] || mode === 'data') return data;
      var res = [];
      var k = 0; // Candlestick index

      if (mode === 'calc') {
        var shift = utils.index_shift(this.sub, data);

        for (var i = 0; i < data.length; i++) {
          var _i = this.ss + i;

          var copy = _toConsumableArray(data[i]);

          copy[0] = _i + shift;
          res.push(copy);
        }

        return res;
      } // If indicator data starts after ohlcv, calc the first index


      if (data.length) {
        try {
          var k1 = utils.fast_nearest(this.sub, data[0][0])[0];
          if (k1 !== null && k1 >= 0) k = k1;
        } catch (e) {}
      }

      var t0 = this.sub[0][0];
      var tN = this.sub[this.sub.length - 1][0];

      for (var i = 0; i < data.length; i++) {
        var _copy = _toConsumableArray(data[i]);

        var tk = this.sub[k][0];
        var t = data[i][0];
        var index = this.ti_map[t];

        if (index === undefined) {
          // Linear extrapolation
          if (t < t0 || t > tN) {
            index = this.ss + k - (tk - t) / this.tf;
            t = data[i + 1] ? data[i + 1][0] : undefined;
          } // Linear interpolation
          else {
            var tk2 = this.sub[k + 1][0];
            index = tk === tk2 ? this.ss + k : this.ss + k + (t - tk) / (tk2 - tk);
            t = data[i + 1] ? data[i + 1][0] : undefined;
          }
        } // Race of data points & sub points (ohlcv)
        // (like turn based increments)


        while (k + 1 < this.sub.length - 1 && t > this.sub[k + 1][0]) {
          k++;
          tk = this.sub[k][0];
        }

        _copy[0] = index;
        res.push(_copy);
      }

      return res;
    } // index => time

  }, {
    key: "i2t",
    value: function i2t(i) {
      if (!this.ib || !this.sub.length) return i; // Regular mode
      // Discrete mapping

      var res = this.it_map[i];
      if (res !== undefined) return res; // Linear extrapolation
      else if (i >= this.ss + this.sub_i.length) {
        var di = i - (this.ss + this.sub_i.length) + 1;
        var last = this.sub[this.sub.length - 1];
        return last[0] + di * this.tf;
      } else if (i < this.ss) {
        var _di = i - this.ss;

        return this.sub[0][0] + _di * this.tf;
      } // Linear Interpolation

      var i1 = Math.floor(i) - this.ss;
      var i2 = i1 + 1;
      var len = this.sub.length;
      if (i2 >= len) i2 = len - 1;
      var sub1 = this.sub[i1];
      var sub2 = this.sub[i2];

      if (sub1 && sub2) {
        var t1 = sub1[0];
        var t2 = sub2[0];
        return t1 + (t2 - t1) * (i - i1 - this.ss);
      }

      return undefined;
    } // Map or bypass depending on the mode

  }, {
    key: "i2t_mode",
    value: function i2t_mode(i, mode) {
      return mode === 'data' ? i : this.i2t(i);
    } // time => index
    // TODO: when switch from IB mode to regular tools
    // disappear (bc there is no more mapping)

  }, {
    key: "t2i",
    value: function t2i(t) {
      if (!this.sub.length) return undefined; // Discrete mapping

      var res = this.ti_map[t];
      if (res !== undefined) return res;
      var t0 = this.sub[0][0];
      var tN = this.sub[this.sub.length - 1][0]; // Linear extrapolation

      if (t < t0) {
        return this.ss - (t0 - t) / this.tf;
      } else if (t > tN) {
        var k = this.sub.length - 1;
        return this.ss + k - (tN - t) / this.tf;
      }

      try {
        // Linear Interpolation
        var i = utils.fast_nearest(this.sub, t);
        var tk = this.sub[i[0]][0];
        var tk2 = this.sub[i[1]][0];

        var _k = (t - tk) / (tk2 - tk);

        return this.ss + i[0] + _k * (i[1] - i[0]);
      } catch (e) {}

      return undefined;
    } // Auto detect: is it time or index?
    // Assuming that index-based mode is ON

  }, {
    key: "smth2i",
    value: function smth2i(smth) {
      if (smth > MAX_ARR) {
        return this.t2i(smth); // it was time
      } else {
        return smth; // it was an index
      }
    }
  }, {
    key: "smth2t",
    value: function smth2t(smth) {
      if (smth < MAX_ARR) {
        return this.i2t(smth); // it was an index
      } else {
        return smth; // it was time
      }
    } // Global Time => Index (uses all data, approx. method)
    // Used by tv.goto()

  }, {
    key: "gt2i",
    value: function gt2i(smth, ohlcv) {
      if (smth > MAX_ARR) {
        var E = 0.1; // Fixes the arrayslicer bug

        var _Utils$fast_nearest = utils.fast_nearest(ohlcv, smth + E),
            _Utils$fast_nearest2 = _slicedToArray(_Utils$fast_nearest, 2),
            i1 = _Utils$fast_nearest2[0],
            i2 = _Utils$fast_nearest2[1];

        if (typeof i1 === 'number') {
          return i1;
        } else {
          return this.t2i(smth); // fallback
        }
      } else {
        return smth; // it was an index
      }
    }
  }]);

  return TI;
}();


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Chart.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ const Chartvue_type_script_lang_js_ = ({
  name: 'Chart',
  props: ['title_txt', 'data', 'width', 'height', 'font', 'colors', 'overlays', 'tv_id', 'config', 'buttons', 'toolbar', 'ib', 'skin', 'timezone'],
  mixins: [shaders, datatrack],
  components: {
    GridSection: Section,
    Botbar: components_Botbar,
    Keyboard: Keyboard
  },
  created: function created() {
    // Context for text measurements
    this.ctx = new context(this.$props); // Initial layout (All measurments for the chart)

    this.init_range();
    this.sub = this.subset();
    utils.overwrite(this.range, this.range); // Fix for IB mode

    this._layout = new layout(this); // Updates current cursor values

    this.updater = new updater(this);
    this.update_last_values();
    this.init_shaders(this.skin);
  },
  methods: {
    range_changed: function range_changed(r) {
      // Overwite & keep the original references
      // Quick fix for IB mode (switch 2 next lines)
      // TODO: wtf?
      var sub = this.subset(r);
      utils.overwrite(this.range, r);
      utils.overwrite(this.sub, sub);
      this.update_layout();
      this.$emit('range-changed', r);
      if (this.$props.ib) this.save_data_t();
    },
    "goto": function goto(t) {
      var dt = this.range[1] - this.range[0];
      this.range_changed([t - dt, t]);
    },
    setRange: function setRange(t1, t2) {
      this.range_changed([t1, t2]);
    },
    cursor_changed: function cursor_changed(e) {
      if (e.mode) this.cursor.mode = e.mode;

      if (this.cursor.mode !== 'explore') {
        this.updater.sync(e);
      }

      if (this._hook_xchanged) this.ce('?x-changed', e);
    },
    cursor_locked: function cursor_locked(state) {
      if (this.cursor.scroll_lock && state) return;
      this.cursor.locked = state;
      if (this._hook_xlocked) this.ce('?x-locked', state);
    },
    calc_interval: function calc_interval() {
      var _this = this;

      var tf = utils.parse_tf(this.forced_tf);
      if (this.ohlcv.length < 2 && !tf) return;
      this.interval_ms = tf || utils.detect_interval(this.ohlcv);
      this.interval = this.$props.ib ? 1 : this.interval_ms;
      utils.warn(function () {
        return _this.$props.ib && !_this.chart.tf;
      }, constants.IB_TF_WARN, constants.SECOND);
    },
    set_ytransform: function set_ytransform(s) {
      var obj = this.y_transforms[s.grid_id] || {};
      Object.assign(obj, s);
      this.$set(this.y_transforms, s.grid_id, obj);
      this.update_layout();
      utils.overwrite(this.range, this.range);
    },
    default_range: function default_range() {
      var dl = this.$props.config.DEFAULT_LEN;
      var ml = this.$props.config.MINIMUM_LEN + 0.5;
      var l = this.ohlcv.length - 1;
      if (this.ohlcv.length < 2) return;

      if (this.ohlcv.length <= dl) {
        var s = 0,
            d = ml;
      } else {
        s = l - dl, d = 0.5;
      }

      if (!this.$props.ib) {
        utils.overwrite(this.range, [this.ohlcv[s][0] - this.interval * d, this.ohlcv[l][0] + this.interval * ml]);
      } else {
        utils.overwrite(this.range, [s - this.interval * d, l + this.interval * ml]);
      }
    },
    subset: function subset(range) {
      if (range === void 0) {
        range = this.range;
      }

      var _this$filter = this.filter(this.ohlcv, range[0] - this.interval, range[1]),
          _this$filter2 = _slicedToArray(_this$filter, 2),
          res = _this$filter2[0],
          index = _this$filter2[1];

      this.ti_map = new TI();

      if (res) {
        this.sub_start = index;
        this.ti_map.init(this, res);
        if (!this.$props.ib) return res || [];
        return this.ti_map.sub_i;
      }

      return [];
    },
    common_props: function common_props() {
      return {
        title_txt: this.chart.name || this.$props.title_txt,
        layout: this._layout,
        sub: this.sub,
        range: this.range,
        interval: this.interval,
        cursor: this.cursor,
        colors: this.$props.colors,
        font: this.$props.font,
        y_ts: this.y_transforms,
        tv_id: this.$props.tv_id,
        config: this.$props.config,
        buttons: this.$props.buttons,
        meta: this.meta,
        skin: this.$props.skin
      };
    },
    overlay_subset: function overlay_subset(source, side) {
      var _this2 = this;

      return source.map(function (d, i) {
        var res = utils.fast_filter(d.data, _this2.ti_map.i2t_mode(_this2.range[0] - _this2.interval, d.indexSrc), _this2.ti_map.i2t_mode(_this2.range[1], d.indexSrc));
        return {
          type: d.type,
          name: utils.format_name(d),
          data: _this2.ti_map.parse(res[0] || [], d.indexSrc || 'map'),
          settings: d.settings || _this2.settings_ov,
          grid: d.grid || {},
          tf: utils.parse_tf(d.tf),
          i0: res[1],
          loading: d.loading,
          last: (_this2.last_values[side] || [])[i]
        };
      });
    },
    section_props: function section_props(i) {
      return i === 0 ? this.main_section : this.sub_section;
    },
    init_range: function init_range() {
      this.calc_interval();
      this.default_range();
    },
    layer_meta_props: function layer_meta_props(d) {
      // TODO: check reactivity when layout is changed
      if (!(d.grid_id in this.layers_meta)) {
        this.$set(this.layers_meta, d.grid_id, {});
      }

      this.$set(this.layers_meta[d.grid_id], d.layer_id, d); // Rerender

      this.update_layout();
    },
    remove_meta_props: function remove_meta_props(grid_id, layer_id) {
      if (grid_id in this.layers_meta) {
        this.$delete(this.layers_meta[grid_id], layer_id);
      }
    },
    emit_custom_event: function emit_custom_event(d) {
      this.on_shader_event(d, 'botbar');
      this.$emit('custom-event', d);

      if (d.event === 'remove-layer-meta') {
        this.remove_meta_props.apply(this, _toConsumableArray(d.args));
      }
    },
    update_layout: function update_layout(clac_tf) {
      if (clac_tf) this.calc_interval();
      var lay = new layout(this);
      utils.copy_layout(this._layout, lay);
      if (this._hook_update) this.ce('?chart-update', lay);
    },
    legend_button_click: function legend_button_click(event) {
      this.$emit('legend-button-click', event);
    },
    register_kb: function register_kb(event) {
      if (!this.$refs.keyboard) return;
      this.$refs.keyboard.register(event);
    },
    remove_kb: function remove_kb(event) {
      if (!this.$refs.keyboard) return;
      this.$refs.keyboard.remove(event);
    },
    update_last_values: function update_last_values() {
      var _this3 = this;

      this.last_candle = this.ohlcv ? this.ohlcv[this.ohlcv.length - 1] : undefined;
      this.last_values = {
        onchart: [],
        offchart: []
      };
      this.onchart.forEach(function (x, i) {
        var d = x.data || [];
        _this3.last_values.onchart[i] = d[d.length - 1];
      });
      this.offchart.forEach(function (x, i) {
        var d = x.data || [];
        _this3.last_values.offchart[i] = d[d.length - 1];
      });
    },
    // Hook events for extensions
    ce: function ce(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.emit_custom_event({
        event: event,
        args: args
      });
    },
    // Set hooks list (called from an extension)
    hooks: function hooks() {
      var _this4 = this;

      for (var _len2 = arguments.length, list = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        list[_key2] = arguments[_key2];
      }

      list.forEach(function (x) {
        return _this4["_hook_".concat(x)] = true;
      });
    }
  },
  computed: {
    // Component-specific props subsets:
    main_section: function main_section() {
      var p = Object.assign({}, this.common_props());
      p.data = this.overlay_subset(this.onchart, 'onchart');
      p.data.push({
        type: this.chart.type || 'Candles',
        main: true,
        data: this.sub,
        i0: this.sub_start,
        settings: this.chart.settings || this.settings_ohlcv,
        grid: this.chart.grid || {},
        last: this.last_candle
      });
      p.overlays = this.$props.overlays;
      return p;
    },
    sub_section: function sub_section() {
      var p = Object.assign({}, this.common_props());
      p.data = this.overlay_subset(this.offchart, 'offchart');
      p.overlays = this.$props.overlays;
      return p;
    },
    botbar_props: function botbar_props() {
      var p = Object.assign({}, this.common_props());
      p.width = p.layout.botbar.width;
      p.height = p.layout.botbar.height;
      p.rerender = this.rerender;
      return p;
    },
    offsub: function offsub() {
      return this.overlay_subset(this.offchart, 'offchart');
    },
    // Datasets: candles, onchart, offchart indicators
    ohlcv: function ohlcv() {
      return this.$props.data.ohlcv || this.chart.data || [];
    },
    chart: function chart() {
      return this.$props.data.chart || {
        grid: {}
      };
    },
    onchart: function onchart() {
      return this.$props.data.onchart || [];
    },
    offchart: function offchart() {
      return this.$props.data.offchart || [];
    },
    filter: function filter() {
      return this.$props.ib ? utils.fast_filter_i : utils.fast_filter;
    },
    styles: function styles() {
      var w = this.$props.toolbar ? this.$props.config.TOOLBAR : 0;
      return {
        'margin-left': "".concat(w, "px")
      };
    },
    meta: function meta() {
      return {
        last: this.last_candle,
        sub_start: this.sub_start,
        activated: this.activated
      };
    },
    forced_tf: function forced_tf() {
      return this.chart.tf;
    }
  },
  data: function data() {
    return {
      // Current data slice
      sub: [],
      // Time range
      range: [],
      // Candlestick interval
      interval: 0,
      // Crosshair states
      cursor: {
        x: null,
        y: null,
        t: null,
        y$: null,
        grid_id: null,
        locked: false,
        values: {},
        scroll_lock: false,
        mode: utils.xmode()
      },
      // A trick to re-render botbar
      rerender: 0,
      // Layers meta-props (changing behaviour)
      layers_meta: {},
      // Y-transforms (for y-zoom and -shift)
      y_transforms: {},
      // Default OHLCV settings (when using DataStructure v1.0)
      settings_ohlcv: {},
      // Default overlay settings
      settings_ov: {},
      // Meta data
      last_candle: [],
      last_values: {},
      sub_start: undefined,
      activated: false
    };
  },
  watch: {
    width: function width() {
      this.update_layout();
      if (this._hook_resize) this.ce('?chart-resize');
    },
    height: function height() {
      this.update_layout();
      if (this._hook_resize) this.ce('?chart-resize');
    },
    ib: function ib(nw) {
      if (!nw) {
        // Change range index => time
        var t1 = this.ti_map.i2t(this.range[0]);
        var t2 = this.ti_map.i2t(this.range[1]);
        utils.overwrite(this.range, [t1, t2]);
        this.interval = this.interval_ms;
      } else {
        this.init_range(); // TODO: calc index range instead

        utils.overwrite(this.range, this.range);
        this.interval = 1;
      }

      var sub = this.subset();
      utils.overwrite(this.sub, sub);
      this.update_layout();
    },
    timezone: function timezone() {
      this.update_layout();
    },
    colors: function colors() {
      utils.overwrite(this.range, this.range);
    },
    forced_tf: function forced_tf(n, p) {
      this.update_layout(true);
      this.ce('exec-all-scripts');
    },
    data: {
      handler: function handler(n, p) {
        if (!this.sub.length) this.init_range();
        var sub = this.subset(); // Fixes Infinite loop warn, when the subset is empty
        // TODO: Consider removing 'sub' from data entirely

        if (this.sub.length || sub.length) {
          utils.overwrite(this.sub, sub);
        }

        var nw = this.data_changed();
        this.update_layout(nw);
        utils.overwrite(this.range, this.range);
        this.cursor.scroll_lock = !!n.scrollLock;

        if (n.scrollLock && this.cursor.locked) {
          this.cursor.locked = false;
        }

        if (this._hook_data) this.ce('?chart-data', nw);
        this.update_last_values(); // TODO: update legend values for overalys

        this.rerender++;
      },
      deep: true
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Chart.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Chartvue_type_script_lang_js_ = (Chartvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Chart.vue





/* normalize component */
;
var Chart_component = normalizeComponent(
  components_Chartvue_type_script_lang_js_,
  Chartvue_type_template_id_4d06a4de_render,
  Chartvue_type_template_id_4d06a4de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Chart_api; }
Chart_component.options.__file = "src/components/Chart.vue"
/* harmony default export */ const Chart = (Chart_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Toolbar.vue?vue&type=template&id=021887fb&
var Toolbarvue_type_template_id_021887fb_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      key: _vm.tool_count,
      staticClass: "trading-vue-toolbar",
      style: _vm.styles,
    },
    _vm._l(_vm.groups, function (tool, i) {
      return tool.icon && !tool.hidden
        ? _c("toolbar-item", {
            key: i,
            attrs: {
              data: tool,
              subs: _vm.sub_map,
              dc: _vm.data,
              config: _vm.config,
              colors: _vm.colors,
              selected: _vm.is_selected(tool),
            },
            on: { "item-selected": _vm.selected },
          })
        : _vm._e()
    }),
    1
  )
}
var Toolbarvue_type_template_id_021887fb_staticRenderFns = []
Toolbarvue_type_template_id_021887fb_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=template&id=021887fb&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ToolbarItem.vue?vue&type=template&id=227b3c2e&
var ToolbarItemvue_type_template_id_227b3c2e_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: ["trading-vue-tbitem", _vm.selected ? "selected-item" : ""],
      style: _vm.item_style,
      on: {
        click: function ($event) {
          return _vm.emit_selected("click")
        },
        mousedown: _vm.mousedown,
        touchstart: _vm.mousedown,
        touchend: function ($event) {
          return _vm.emit_selected("touch")
        },
      },
    },
    [
      _c("div", {
        staticClass: "trading-vue-tbicon tvjs-pixelated",
        style: _vm.icon_style,
      }),
      _vm._v(" "),
      _vm.data.group
        ? _c(
            "div",
            {
              staticClass: "trading-vue-tbitem-exp",
              style: _vm.exp_style,
              on: {
                click: _vm.exp_click,
                mousedown: _vm.expmousedown,
                mouseover: _vm.expmouseover,
                mouseleave: _vm.expmouseleave,
              },
            },
            [_vm._v("\n        ᐳ\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.show_exp_list
        ? _c("item-list", {
            attrs: {
              config: _vm.config,
              items: _vm.data.items,
              colors: _vm.colors,
              dc: _vm.dc,
            },
            on: {
              "close-list": _vm.close_list,
              "item-selected": _vm.emit_selected_sub,
            },
          })
        : _vm._e(),
    ],
    1
  )
}
var ToolbarItemvue_type_template_id_227b3c2e_staticRenderFns = []
ToolbarItemvue_type_template_id_227b3c2e_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/ToolbarItem.vue?vue&type=template&id=227b3c2e&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ItemList.vue?vue&type=template&id=c50b23fe&
var ItemListvue_type_template_id_c50b23fe_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tvjs-item-list",
      style: _vm.list_style(),
      on: { mousedown: _vm.thismousedown },
    },
    _vm._l(_vm.items, function (item) {
      return !item.hidden
        ? _c(
            "div",
            {
              class: _vm.item_class(item),
              style: _vm.item_style(item),
              on: {
                click: function (e) {
                  return _vm.item_click(e, item)
                },
              },
            },
            [
              _c("div", {
                staticClass: "trading-vue-tbicon tvjs-pixelated",
                style: _vm.icon_style(item),
              }),
              _vm._v(" "),
              _c("div", [_vm._v(_vm._s(item.type))]),
            ]
          )
        : _vm._e()
    }),
    0
  )
}
var ItemListvue_type_template_id_c50b23fe_staticRenderFns = []
ItemListvue_type_template_id_c50b23fe_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/ItemList.vue?vue&type=template&id=c50b23fe&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ItemList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const ItemListvue_type_script_lang_js_ = ({
  name: 'ItemList',
  props: ['config', 'items', 'colors', 'dc'],
  mounted: function mounted() {
    window.addEventListener('mousedown', this.onmousedown);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('mousedown', this.onmousedown);
  },
  methods: {
    list_style: function list_style() {
      var conf = this.$props.config;
      var w = conf.TOOLBAR;
      var brd = this.colors.tbListBorder || this.colors.grid;
      var bstl = "1px solid ".concat(brd);
      return {
        left: "".concat(w, "px"),
        background: this.colors.back,
        borderTop: bstl,
        borderRight: bstl,
        borderBottom: bstl
      };
    },
    item_class: function item_class(item) {
      if (this.dc.tool === item.type) {
        return "tvjs-item-list-item selected-item";
      }

      return "tvjs-item-list-item";
    },
    item_style: function item_style(item) {
      var conf = this.$props.config;
      var h = conf.TB_ICON + conf.TB_ITEM_M * 2 + 8;
      var sel = this.dc.tool === item.type;
      return {
        height: "".concat(h, "px"),
        color: sel ? undefined : "#888888"
      };
    },
    icon_style: function icon_style(data) {
      var conf = this.$props.config;
      var br = conf.TB_ICON_BRI;
      var im = conf.TB_ITEM_M;
      return {
        'background-image': "url(".concat(data.icon, ")"),
        'width': '25px',
        'height': '25px',
        'margin': "".concat(im, "px"),
        'filter': "brightness(".concat(br, ")")
      };
    },
    item_click: function item_click(e, item) {
      e.cancelBubble = true;
      this.$emit('item-selected', item);
      this.$emit('close-list');
    },
    onmousedown: function onmousedown() {
      this.$emit('close-list');
    },
    thismousedown: function thismousedown(e) {
      e.stopPropagation();
    }
  },
  computed: {},
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/components/ItemList.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_ItemListvue_type_script_lang_js_ = (ItemListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ItemList.vue?vue&type=style&index=0&lang=css&
var ItemListvue_type_style_index_0_lang_css_ = __webpack_require__(807);
;// CONCATENATED MODULE: ./src/components/ItemList.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/ItemList.vue



;


/* normalize component */

var ItemList_component = normalizeComponent(
  components_ItemListvue_type_script_lang_js_,
  ItemListvue_type_template_id_c50b23fe_render,
  ItemListvue_type_template_id_c50b23fe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ItemList_api; }
ItemList_component.options.__file = "src/components/ItemList.vue"
/* harmony default export */ const ItemList = (ItemList_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ToolbarItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const ToolbarItemvue_type_script_lang_js_ = ({
  name: 'ToolbarItem',
  props: ['data', 'selected', 'colors', 'tv_id', 'config', 'dc', 'subs'],
  components: {
    ItemList: ItemList
  },
  mounted: function mounted() {
    if (this.data.group) {
      var type = this.subs[this.data.group];
      var item = this.data.items.find(function (x) {
        return x.type === type;
      });
      if (item) this.sub_item = item;
    }
  },
  methods: {
    mousedown: function mousedown(e) {
      var _this = this;

      this.click_start = utils.now();
      this.click_id = setTimeout(function () {
        _this.show_exp_list = true;
      }, this.config.TB_ICON_HOLD);
    },
    expmouseover: function expmouseover() {
      this.exp_hover = true;
    },
    expmouseleave: function expmouseleave() {
      this.exp_hover = false;
    },
    expmousedown: function expmousedown(e) {
      if (this.show_exp_list) e.stopPropagation();
    },
    emit_selected: function emit_selected(src) {
      if (utils.now() - this.click_start > this.config.TB_ICON_HOLD) return;
      clearTimeout(this.click_id); //if (Utils.is_mobile && src === 'click') return
      // TODO: double firing

      if (!this.data.group) {
        this.$emit('item-selected', this.data);
      } else {
        var item = this.sub_item || this.data.items[0];
        this.$emit('item-selected', item);
      }
    },
    emit_selected_sub: function emit_selected_sub(item) {
      this.$emit('item-selected', item);
      this.sub_item = item;
    },
    exp_click: function exp_click(e) {
      if (!this.data.group) return;
      e.cancelBubble = true;
      this.show_exp_list = !this.show_exp_list;
    },
    close_list: function close_list() {
      this.show_exp_list = false;
    }
  },
  computed: {
    item_style: function item_style() {
      if (this.$props.data.type === 'System:Splitter') {
        return this.splitter;
      }

      var conf = this.$props.config;
      var im = conf.TB_ITEM_M;
      var m = (conf.TOOLBAR - conf.TB_ICON) * 0.5 - im;
      var s = conf.TB_ICON + im * 2;
      var b = this.exp_hover ? 0 : 3;
      return {
        'width': "".concat(s, "px"),
        'height': "".concat(s, "px"),
        'margin': "8px ".concat(m, "px 0px ").concat(m, "px"),
        'border-radius': "3px ".concat(b, "px ").concat(b, "px 3px")
      };
    },
    icon_style: function icon_style() {
      if (this.$props.data.type === 'System:Splitter') {
        return {};
      }

      var conf = this.$props.config;
      var br = conf.TB_ICON_BRI;
      var sz = conf.TB_ICON;
      var im = conf.TB_ITEM_M;
      var ic = this.sub_item ? this.sub_item.icon : this.$props.data.icon;
      return {
        'background-image': "url(".concat(ic, ")"),
        'width': "".concat(sz, "px"),
        'height': "".concat(sz, "px"),
        'margin': "".concat(im, "px"),
        'filter': "brightness(".concat(br, ")")
      };
    },
    exp_style: function exp_style() {
      var conf = this.$props.config;
      var im = conf.TB_ITEM_M;
      var s = conf.TB_ICON * 0.5 + im;
      var p = (conf.TOOLBAR - s * 2) / 4;
      return {
        padding: "".concat(s, "px ").concat(p, "px"),
        transform: this.show_exp_list ? "scale(-0.6, 1)" : "scaleX(0.6)"
      };
    },
    splitter: function splitter() {
      var conf = this.$props.config;
      var colors = this.$props.colors;
      var c = colors.grid;
      var im = conf.TB_ITEM_M;
      var m = (conf.TOOLBAR - conf.TB_ICON) * 0.5 - im;
      var s = conf.TB_ICON + im * 2;
      return {
        'width': "".concat(s, "px"),
        'height': '1px',
        'margin': "8px ".concat(m, "px 8px ").concat(m, "px"),
        'background-color': c
      };
    }
  },
  data: function data() {
    return {
      exp_hover: false,
      show_exp_list: false,
      sub_item: null
    };
  }
});
;// CONCATENATED MODULE: ./src/components/ToolbarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_ToolbarItemvue_type_script_lang_js_ = (ToolbarItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ToolbarItem.vue?vue&type=style&index=0&lang=css&
var ToolbarItemvue_type_style_index_0_lang_css_ = __webpack_require__(501);
;// CONCATENATED MODULE: ./src/components/ToolbarItem.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/ToolbarItem.vue



;


/* normalize component */

var ToolbarItem_component = normalizeComponent(
  components_ToolbarItemvue_type_script_lang_js_,
  ToolbarItemvue_type_template_id_227b3c2e_render,
  ToolbarItemvue_type_template_id_227b3c2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ToolbarItem_api; }
ToolbarItem_component.options.__file = "src/components/ToolbarItem.vue"
/* harmony default export */ const ToolbarItem = (ToolbarItem_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Toolbar.vue?vue&type=script&lang=js&
function Toolbarvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Toolbarvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Toolbarvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Toolbarvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Toolbarvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Toolbarvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const Toolbarvue_type_script_lang_js_ = ({
  name: 'Toolbar',
  props: ['data', 'height', 'colors', 'tv_id', 'config'],
  components: {
    ToolbarItem: ToolbarItem
  },
  mounted: function mounted() {},
  methods: {
    selected: function selected(tool) {
      this.$emit('custom-event', {
        event: 'tool-selected',
        args: [tool.type]
      });

      if (tool.group) {
        // TODO: emit the sub map to DC (save)
        this.sub_map[tool.group] = tool.type;
      }
    },
    is_selected: function is_selected(tool) {
      var _this = this;

      if (tool.group) {
        return !!tool.items.find(function (x) {
          return x.type === _this.data.tool;
        });
      }

      return tool.type === this.data.tool;
    }
  },
  computed: {
    styles: function styles() {
      var colors = this.$props.colors;
      var b = this.$props.config.TB_BORDER;
      var w = this.$props.config.TOOLBAR - b;
      var c = colors.grid;
      var cb = colors.tbBack || colors.back;
      var brd = colors.tbBorder || colors.scale;
      var st = this.$props.config.TB_B_STYLE;
      return {
        'width': "".concat(w, "px"),
        'height': "".concat(this.$props.height - 3, "px"),
        'background-color': cb,
        'border-right': "".concat(b, "px ").concat(st, " ").concat(brd)
      };
    },
    groups: function groups() {
      var arr = [];

      var _iterator = Toolbarvue_type_script_lang_js_createForOfIteratorHelper(this.data.tools || []),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tool = _step.value;

          if (!tool.group) {
            arr.push(tool);
            continue;
          }

          var g = arr.find(function (x) {
            return x.group === tool.group;
          });

          if (!g) {
            arr.push({
              group: tool.group,
              icon: tool.icon,
              items: [tool]
            });
          } else {
            g.items.push(tool);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return arr;
    }
  },
  watch: {
    data: {
      handler: function handler(n) {
        // For some reason Vue.js doesn't want to
        // update 'tools' automatically when new item
        // is pushed/removed. Yo, Vue, I herd you
        // you want more dirty tricks?
        if (n.tools) this.tool_count = n.tools.length;
      },
      deep: true
    }
  },
  data: function data() {
    return {
      tool_count: 0,
      sub_map: {}
    };
  }
});
;// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Toolbarvue_type_script_lang_js_ = (Toolbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Toolbar.vue?vue&type=style&index=0&lang=css&
var Toolbarvue_type_style_index_0_lang_css_ = __webpack_require__(153);
;// CONCATENATED MODULE: ./src/components/Toolbar.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/Toolbar.vue



;


/* normalize component */

var Toolbar_component = normalizeComponent(
  components_Toolbarvue_type_script_lang_js_,
  Toolbarvue_type_template_id_021887fb_render,
  Toolbarvue_type_template_id_021887fb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Toolbar_api; }
Toolbar_component.options.__file = "src/components/Toolbar.vue"
/* harmony default export */ const Toolbar = (Toolbar_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Widgets.vue?vue&type=template&id=5fe4312f&
var Widgetsvue_type_template_id_5fe4312f_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tvjs-widgets",
      style: { width: _vm.width + "px", height: _vm.height + "px" },
    },
    _vm._l(Object.keys(_vm.map), function (id) {
      return _c(_vm.initw(id), {
        key: id,
        tag: "component",
        attrs: {
          id: id,
          main: _vm.map[id].ctrl,
          data: _vm.map[id].data,
          tv: _vm.tv,
          dc: _vm.dc,
        },
      })
    }),
    1
  )
}
var Widgetsvue_type_template_id_5fe4312f_staticRenderFns = []
Widgetsvue_type_template_id_5fe4312f_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/Widgets.vue?vue&type=template&id=5fe4312f&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Widgets.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const Widgetsvue_type_script_lang_js_ = ({
  name: 'Widgets',
  props: ['width', 'height', 'map', 'tv', 'dc'],
  methods: {
    initw: function initw(id) {
      return this.$props.map[id].cls;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Widgets.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_Widgetsvue_type_script_lang_js_ = (Widgetsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Widgets.vue?vue&type=style&index=0&lang=css&
var Widgetsvue_type_style_index_0_lang_css_ = __webpack_require__(5);
;// CONCATENATED MODULE: ./src/components/Widgets.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/Widgets.vue



;


/* normalize component */

var Widgets_component = normalizeComponent(
  components_Widgetsvue_type_script_lang_js_,
  Widgetsvue_type_template_id_5fe4312f_render,
  Widgetsvue_type_template_id_5fe4312f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Widgets_api; }
Widgets_component.options.__file = "src/components/Widgets.vue"
/* harmony default export */ const Widgets = (Widgets_component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TheTip.vue?vue&type=template&id=2c1770cc&
var TheTipvue_type_template_id_2c1770cc_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "tvjs-the-tip",
    style: _vm.style,
    domProps: { innerHTML: _vm._s(_vm.data.text) },
    on: {
      mousedown: function ($event) {
        return _vm.$emit("remove-me")
      },
    },
  })
}
var TheTipvue_type_template_id_2c1770cc_staticRenderFns = []
TheTipvue_type_template_id_2c1770cc_render._withStripped = true


;// CONCATENATED MODULE: ./src/components/TheTip.vue?vue&type=template&id=2c1770cc&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TheTip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ const TheTipvue_type_script_lang_js_ = ({
  name: 'TheTip',
  props: ['data'],
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      return _this.$emit('remove-me');
    }, 3000);
  },
  computed: {
    style: function style() {
      return {
        background: this.data.color
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/components/TheTip.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_TheTipvue_type_script_lang_js_ = (TheTipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TheTip.vue?vue&type=style&index=0&lang=css&
var TheTipvue_type_style_index_0_lang_css_ = __webpack_require__(477);
;// CONCATENATED MODULE: ./src/components/TheTip.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/TheTip.vue



;


/* normalize component */

var TheTip_component = normalizeComponent(
  components_TheTipvue_type_script_lang_js_,
  TheTipvue_type_template_id_2c1770cc_render,
  TheTipvue_type_template_id_2c1770cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TheTip_api; }
TheTip_component.options.__file = "src/components/TheTip.vue"
/* harmony default export */ const TheTip = (TheTip_component.exports);
;// CONCATENATED MODULE: ./src/mixins/xcontrol.js
function xcontrol_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = xcontrol_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function xcontrol_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return xcontrol_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xcontrol_arrayLikeToArray(o, minLen); }

function xcontrol_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// extensions control
/* harmony default export */ const xcontrol = ({
  mounted: function mounted() {
    this.ctrllist();
    this.skin_styles();
  },
  methods: {
    // Build / rebuild component list
    ctrllist: function ctrllist() {
      this.ctrl_destroy();
      this.controllers = [];

      var _iterator = xcontrol_createForOfIteratorHelper(this.$props.extensions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var x = _step.value;
          var name = x.Main.__name__;

          if (!this.xSettings[name]) {
            this.$set(this.xSettings, name, {});
          }

          var nc = new x.Main(this, // tv inst
          this.data, // dc
          this.xSettings[name] // settings
          );
          nc.name = name;
          this.controllers.push(nc);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.controllers;
    },
    // TODO: preventDefault
    pre_dc: function pre_dc(e) {
      var _iterator2 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ctrl = _step2.value;

          if (ctrl.update) {
            ctrl.update(e);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    },
    post_dc: function post_dc(e) {
      var _iterator3 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ctrl = _step3.value;

          if (ctrl.post_update) {
            ctrl.post_update(e);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    },
    ctrl_destroy: function ctrl_destroy() {
      var _iterator4 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var ctrl = _step4.value;
          if (ctrl.destroy) ctrl.destroy();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    },
    skin_styles: function skin_styles() {
      var id = 'tvjs-skin-styles';
      var stbr = document.getElementById(id);

      if (stbr) {
        var parent = stbr.parentNode;
        parent.removeChild(stbr);
      }

      if (this.skin_proto && this.skin_proto.styles) {
        var sheet = document.createElement('style');
        sheet.setAttribute("id", id);
        sheet.innerHTML = this.skin_proto.styles;
        this.$el.appendChild(sheet);
      }
    }
  },
  computed: {
    ws: function ws() {
      var ws = {};

      var _iterator5 = xcontrol_createForOfIteratorHelper(this.controllers),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var ctrl = _step5.value;

          if (ctrl.widgets) {
            for (var id in ctrl.widgets) {
              ws[id] = ctrl.widgets[id];
              ws[id].ctrl = ctrl;
            }
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return ws;
    },
    skins: function skins() {
      var sks = {};

      var _iterator6 = xcontrol_createForOfIteratorHelper(this.$props.extensions),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var x = _step6.value;

          for (var id in x.skins || {}) {
            sks[id] = x.skins[id];
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return sks;
    },
    skin_proto: function skin_proto() {
      return this.skins[this.$props.skin];
    },
    colorpack: function colorpack() {
      var sel = this.skins[this.$props.skin];
      return sel ? sel.colors : undefined;
    }
  },
  watch: {
    // TODO: This is fast & dirty fix, need
    // to fix the actual reactivity problem
    skin: function skin(n, p) {
      if (n !== p) this.resetChart();
      this.skin_styles();
    },
    extensions: function extensions() {
      this.ctrllist();
    },
    xSettings: {
      handler: function handler(n, p) {
        var _iterator7 = xcontrol_createForOfIteratorHelper(this.controllers),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var ctrl = _step7.value;

            if (ctrl.onsettings) {
              ctrl.onsettings(n, p);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      },
      deep: true
    }
  },
  data: function data() {
    return {
      controllers: []
    };
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/TradingVue.vue?vue&type=script&lang=js&


function TradingVuevue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = TradingVuevue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function TradingVuevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TradingVuevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TradingVuevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function TradingVuevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const TradingVuevue_type_script_lang_js_ = ({
  name: 'TradingVue',
  components: {
    Chart: Chart,
    Toolbar: Toolbar,
    Widgets: Widgets,
    TheTip: TheTip
  },
  mixins: [xcontrol],
  props: {
    titleTxt: {
      type: String,
      "default": 'TradingVue.js'
    },
    id: {
      type: String,
      "default": 'trading-chart-js'
    },
    width: {
      type: Number,
      "default": 800
    },
    height: {
      type: Number,
      "default": 421
    },
    colorTitle: {
      type: String,
      "default": '#42b883'
    },
    colorBack: {
      type: String,
      "default": '#121826'
    },
    colorGrid: {
      type: String,
      "default": '#2f3240'
    },
    colorText: {
      type: String,
      "default": '#dedddd'
    },
    colorTextHL: {
      type: String,
      "default": '#fff'
    },
    colorScale: {
      type: String,
      "default": '#838383'
    },
    colorCross: {
      type: String,
      "default": '#8091a0'
    },
    colorCandleUp: {
      type: String,
      "default": '#23a776'
    },
    colorCandleDw: {
      type: String,
      "default": '#e54150'
    },
    colorWickUp: {
      type: String,
      "default": '#23a77688'
    },
    colorWickDw: {
      type: String,
      "default": '#e5415088'
    },
    colorWickSm: {
      type: String,
      "default": 'transparent' // deprecated

    },
    colorVolUp: {
      type: String,
      "default": '#79999e42'
    },
    colorVolDw: {
      type: String,
      "default": '#ef535042'
    },
    colorPanel: {
      type: String,
      "default": '#565c68'
    },
    colorTbBack: {
      type: String
    },
    colorTbBorder: {
      type: String,
      "default": '#8282827d'
    },
    colors: {
      type: Object
    },
    font: {
      type: String,
      "default": constants.ChartConfig.FONT
    },
    toolbar: {
      type: Boolean,
      "default": false
    },
    data: {
      type: Object,
      required: true
    },
    // Your overlay classes here
    overlays: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // Overwrites ChartConfig values,
    // see constants.js
    chartConfig: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    legendButtons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    indexBased: {
      type: Boolean,
      "default": false
    },
    extensions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    xSettings: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    skin: {
      type: String // Skin Name

    },
    timezone: {
      type: Number,
      "default": 0
    }
  },
  computed: {
    // Copy a subset of TradingVue props
    chart_props: function chart_props() {
      var offset = this.$props.toolbar ? this.chart_config.TOOLBAR : 0;
      var chart_props = {
        title_txt: this.$props.titleTxt,
        overlays: this.$props.overlays.concat(this.mod_ovs),
        data: this.decubed,
        width: this.$props.width - offset,
        height: this.$props.height,
        font: this.font_comp,
        buttons: this.$props.legendButtons,
        toolbar: this.$props.toolbar,
        ib: this.$props.indexBased || this.index_based || false,
        colors: Object.assign({}, this.$props.colors || this.colorpack),
        skin: this.skin_proto,
        timezone: this.$props.timezone
      };
      this.parse_colors(chart_props.colors);
      return chart_props;
    },
    chart_config: function chart_config() {
      return Object.assign({}, constants.ChartConfig, this.$props.chartConfig);
    },
    decubed: function decubed() {
      var data = this.$props.data;

      if (data.data !== undefined) {
        // DataCube detected
        data.init_tvjs(this);
        return data.data;
      } else {
        return data;
      }
    },
    index_based: function index_based() {
      var base = this.$props.data;

      if (base.chart) {
        return base.chart.indexBased;
      } else if (base.data) {
        return base.data.chart.indexBased;
      }

      return false;
    },
    mod_ovs: function mod_ovs() {
      var arr = [];

      var _iterator = TradingVuevue_type_script_lang_js_createForOfIteratorHelper(this.$props.extensions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var x = _step.value;
          arr.push.apply(arr, _toConsumableArray(Object.values(x.overlays)));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return arr;
    },
    font_comp: function font_comp() {
      return this.skin_proto && this.skin_proto.font ? this.skin_proto.font : this.font;
    }
  },
  data: function data() {
    return {
      reset: 0,
      tip: null
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.custom_event({
      event: 'before-destroy'
    });
    this.ctrl_destroy();
  },
  methods: {
    // TODO: reset extensions?
    resetChart: function resetChart(resetRange) {
      var _this = this;

      if (resetRange === void 0) {
        resetRange = true;
      }

      this.reset++;
      var range = this.getRange();

      if (!resetRange && range[0] && range[1]) {
        this.$nextTick(function () {
          return _this.setRange.apply(_this, _toConsumableArray(range));
        });
      }

      this.$nextTick(function () {
        return _this.custom_event({
          event: 'chart-reset',
          args: []
        });
      });
    },
    "goto": function goto(t) {
      // TODO: limit goto & setRange (out of data error)
      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map;
        t = ti_map.gt2i(t, this.$refs.chart.ohlcv);
      }

      this.$refs.chart["goto"](t);
    },
    setRange: function setRange(t1, t2) {
      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map;
        var ohlcv = this.$refs.chart.ohlcv;
        t1 = ti_map.gt2i(t1, ohlcv);
        t2 = ti_map.gt2i(t2, ohlcv);
      }

      this.$refs.chart.setRange(t1, t2);
    },
    setRange2: function setRange2(t1, t2) {
      this.$refs.chart.setRange(t1, t2);
    },
    getRange: function getRange() {
      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map; // Time range => index range

        return this.$refs.chart.range.map(function (x) {
          return ti_map.i2t(x);
        });
      }

      return this.$refs.chart.range;
    },
    getCursor: function getCursor() {
      var cursor = this.$refs.chart.cursor;

      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map;
        var copy = Object.assign({}, cursor);
        copy.i = copy.t;
        copy.t = ti_map.i2t(copy.t);
        return copy;
      }

      return cursor;
    },
    showTheTip: function showTheTip(text, color) {
      if (color === void 0) {
        color = "orange";
      }

      this.tip = {
        text: text,
        color: color
      };
    },
    legend_button: function legend_button(event) {
      this.custom_event({
        event: 'legend-button-click',
        args: [event]
      });
    },
    custom_event: function custom_event(d) {
      if ('args' in d) {
        this.$emit.apply(this, [d.event].concat(_toConsumableArray(d.args)));
      } else {
        this.$emit(d.event);
      }

      var data = this.$props.data;
      var ctrl = this.controllers.length !== 0;
      if (ctrl) this.pre_dc(d);

      if (data.tv) {
        // If the data object is DataCube
        data.on_custom_event(d.event, d.args);
      }

      if (ctrl) this.post_dc(d);
    },
    range_changed: function range_changed(r) {
      if (this.chart_props.ib) {
        var ti_map = this.$refs.chart.ti_map;
        r = r.map(function (x) {
          return ti_map.i2t(x);
        });
      }

      this.$emit('range-changed', r);
      this.custom_event({
        event: 'range-changed',
        args: [r]
      });
      if (this.onrange) this.onrange(r);
    },
    set_loader: function set_loader(dc) {
      var _this2 = this;

      this.onrange = function (r) {
        var pf = _this2.chart_props.ib ? '_ms' : '';
        var tf = _this2.$refs.chart['interval' + pf];
        dc.range_changed(r, tf);
      };
    },
    parse_colors: function parse_colors(colors) {
      for (var k in this.$props) {
        if (k.indexOf('color') === 0 && k !== 'colors') {
          var k2 = k.replace('color', '');
          k2 = k2[0].toLowerCase() + k2.slice(1);
          if (colors[k2]) continue;
          colors[k2] = this.$props[k];
        }
      }
    },
    mousedown: function mousedown() {
      this.$refs.chart.activated = true;
    },
    mouseleave: function mouseleave() {
      this.$refs.chart.activated = false;
    }
  }
});
;// CONCATENATED MODULE: ./src/TradingVue.vue?vue&type=script&lang=js&
 /* harmony default export */ const src_TradingVuevue_type_script_lang_js_ = (TradingVuevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/TradingVue.vue?vue&type=style&index=0&lang=css&
var TradingVuevue_type_style_index_0_lang_css_ = __webpack_require__(863);
;// CONCATENATED MODULE: ./src/TradingVue.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/TradingVue.vue



;


/* normalize component */

var TradingVue_component = normalizeComponent(
  src_TradingVuevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TradingVue_api; }
TradingVue_component.options.__file = "src/TradingVue.vue"
/* harmony default export */ const TradingVue = (TradingVue_component.exports);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/helpers/tmp/ww1234.json
const ww1234_namespaceObject = JSON.parse('["PQKj+ACAKaEpIF4B8kDelhQO4FMBGADgIYDGA1gEID21ALgM50BOxhAUKOGFAJABuxZpAD6IvETLkRAW2oATAK4AbXAzFIYadpwiQARADpgAOwW5ZClWuAABfMXy5lwZopN0AljNzAAFs6EuMwMrrgA5rgmwcR01MwASu5ePoYAVgz6AFy6AITcBYVFxSWlZUX5ADrskJD5YJDGZvIWckqqofaOzq7J3r4BykEhYZHRrHGJfakZkOC5NZCV5SurayvAujww0G3WADSiIu6KDLjy4gQkFCK4AB6E8YyHYhLX0sy4AI6Knp9iCBQ6B0gmEIjoAE8gtQAGaaaCvK5SESfH5/CwiaCgXKNYCQ6Ew9IMOZQIymcyWdo2LpOFxuDz9fyBYKhfG4WFE/RwADa+haMOIKjo+gAunAANw6GHuUheagmUSfMYxSZJBk+eDA2r6U64SBMZieWX6SW1bGQJVRFXxAC09JSeptNsgAGFqIQIYbwn46DBSAgAEwABgAjAAWG2ET5nDyHABiZAItHIhwAkiZSIZIE7IMojVEzjAALKpgAqcCykB9dEIDCyWHCnjofkU+EMpGoMmAAtISeo5FGVom8WA+GU1HwwBkxE8JmAABlUy6AKIAOQAysuSTpantVIZ7o9mIxNCiIkPYvE1Q7NNKM3KFWflcOpurcJrtLVap86IpmArDyeBhTUgABfQ491wA8HiAwwxDUIsrFUTQWEUXAIKQqDAOPBheX5QVlGFEVNEg6Cj0YEDQUgbCT0QdBwMWL9IAAeUITRmPwNJcFlQwo3oegoXQxivz8YgGGY7AFTo1jDFE8TJIABWYd1gkhfZhNqAASdcIRkfBqGUTR9DvWVPHlfQkDotlYUgHS9IMyAAH5bN0/TDMrNAGKY2om2tZg7LczRtNcgzDF8l9IAAH0igxbFscLL2YfR1O8yAxIhDNUzoPyAocujgvs5RDHSzLsoi6LYtsErSCyvzko0yA4nXFhZ3CUtiHCXLDPyrrDCalqTDajqopi/Q4v6w1Bva8ITR3SATIfSB+Vnd8JzSQ5yFwCFDkEZQ0IQT8vx/P8FQ4rieOW6IlJU48IWgNaNq2w5DqY3a0MrN6hNSqJFB8Vgx1wStciDFLvI7EwYU8cI/0cVQgZBhrsENOhYcBuog2E0C4EONbuU2iERRA0C5pYCEtS/S7308w59C5InIFIWJSD8GBgmYA7hMp28ZUWyn7s4x7tsgT6OdS47/0gXH8eIujPpA2pQKJuaFrMhUkbYaBZ3GOMTBxxQyp1w4zmUGFDlJ+dqFIBh508JhRa/Ki+LiABxC9Jk0ah9eCHXIAAMl9yWveYHXeOUuI2UgWcmGIDN2ThV3xkSpzA4NhVKwTvzQdS58k+kzjuLodtPlid8neoDOX1D/i2WxhranB7K7l9OjomwV15UbuhoHNy3rdt30Ku5MV5YtXBfwlnPJjg2d+H7PU6JV+UYC173df1ZxTYZjv7joe3XqEfUUeyoyGFOIITBaeRmqEYUR+/MeTvmnnVZgHxmwUQ4hHCPfvM8OFoH0Pcbi+tWoWUQOAw+JcEDNmUm3VukBlzMGUswABFck62zSsoYu8gyb0hMKAiUc1Up/xgPoDsMhCCqGyvIMBEDo7ZR/sQ/++gYHUGwLQuib8/AKGgX4WBaVmDhDvt5cWCp5DylwAkNQQp4DCIVkQ7yMJ4h+m3k3QwXCFAkTHtw+QhwG472KoIzQX9xTikYd5KiLRVDhBLpofRairERBLpKOuX4SHQEcTYhh5NUr72EJ4kuUjT6ERIsQCETh0yz02gAEWcE47KHi4lePQlvDwO9CGuKYu4gJ2UglCnMb4yO/8cmSOkSE8BdE3QMhMGhdcUQvDRGUAgBus40JyN8aIpaSTAllLoO0pixNCnyMyUU0h0Qm4cNSZ3dR2ieFTIMTGZu8y1EiEWXY1RhcTHOELO4lhfC2GTPsYXDR8gCm/2YafBg59L7X2PJM+huBeH8IeUZchlCx7nGSsszZgj+lfiOYYeQtsSB0GZsuO4vZCAPmgACr+hChlgWosoQs+hRGHI2TM9+8g/YB1hfgNwUKAFor0RiuFfyXl0UAXcYBDSZp/Kop8DszBsVWWYBCF0TM/CaxMNrNextN5HIyQi3ZZhmDTmUJMxl8R5B9UEmcrJ/8KXfMBRI5OZDOzvOoRZSs+hLnXPOAATU8M4GhhwpXMsMeESylSO6tNwHU6pzhmm2pqbgP599x4Khegi4WxA9po3NTKr+WcfXiOiJWAFYbcAjIVn84mIy9mwMldxaVsqgg4pgEq9VFCqGfJJWktRJyjKsPYfm6ZX9NCBstfC3xgzvKK0xty3lRsN5lvSYcSe8QlaLEXgqUmHLQVcphGvB6Ajv4+MamyidHrH7eqYmyHVorxX1UKV/Ssw72x+uUPzdaY64ANQbQMhmnLWZIPMZ0udX4F0GBLSu3xa7qJIIPSPOt8bag0QYIYdWbE6LfsogfKpDTan1JWt1eiLjai9sgGgyYH431P3vC/GD8Q4zP3lHB5WaGFTIeDlh664dBIYcWFRWqL58MCXTXRTyIE+akcSuRtkhwEqTC6ocKDH5hKdObLbImNaqKRDoOR9i+ceICYY4JZipsGqrliJ4fguA6OTHE5RyAYmw7UAzWp/i0AtNxGgJ9Bg0Ah5wBMyBGTXh5OKfiMpvU/tIDmbkwpsq9H1MR1yBA1iGa5ISRMJu5Q26HOWec0p1zgkmPBfiF1BAdnoBWeYDZzQgWnN+Rs3xg+zsf3QbdihvDoWghVwIypnDBWKPzxYiJwupBi4JLi6liDCHTJL0pnFossz5CGbLjXCdvJxnChpremmaKRSGCUcwZcZAh1Ydfm18xfNOthcgCctjU3oBwunUdB+EtuOfpEDPOeuw2uf0ETWgZJ2wI1vg1BgAggwDKNUIsoM7cwQ410ZC2wUzmn+UG9ubQO1io74QzVqAMvJoH51d7rYZSm5lKE2UDuZjp7LzBuQnJFB2pHAOhXnNIbeuoECq1dcvbUKHwSllVuDTG31/rK29MMHLVxnTPoZv0GtAutDRDWRhPpv1+0vNiR8357dn0aZiGINgGcwoEDOVe+91MObDDRhB++T6cERBi4l3APqAQTDQHYyLdbWSTBRPfPoXrXzhejwYErsHBczsDOW4hpe0A2bysjkb/biaDmHDZkDq3yhQej3B3br8WNICVhl2cOXlCFfA/98rnnjytdRF1yt9w36ginINxt0ndOE+aDT6wQgGffdK+gNGfJ7TwINcWs7pB8RXedJ+ybgbj7kEl7jzb2UweFbB/g0xT44Oy/Q6Dcdl9CjHafH4GZU4Ee3UKO29Pd3m1uaO4VH9nRmP1tQcZv5yJc8ADqTY/CtaxVdi+V3BEccKZ0+Bs+o/bvY4rjvgfbdZ58kv98S2x3t4DwP23lfe8FEZ0JYoxcAp9PYGBZ9NBQDwCZ9lI3tCxnIYDp9ID4D3sk8dcd9lA99NpD9mwT8dEz95AL9Adj1d8P88Dj82siCSCEAI0t0cDcBKCCCFAaDL8ztD0wJMNV9FswkIkP9YlrES5EkhDso20m4f4qIi06ISkwoHtuQAVUd6sfJ/53BKYWUIETlzF3FI1ulj4W4VBlB+t9l2FrVlUtCs9sk9CoJmN4heQhsM0YUMVpCDBiVlUK06I1DcBIZohdFeDwkFMBDrCRD4kUlBVjCk0zDFCZsEBOlAM7UHUGlnB2loisVi0TCvlYUjEW5cA25SxBJEFkEAFSwAhI4HslpqA1BIAzBfQ+Ip8Wg0pIAAByEtJoxbNrOmA9IA0eT1duapYDR1ZQMfYSKHJlFlSddlTldfD+LpUQmwh7cQn5b+EeXZXHCpUeMYtNR5Hox+VInRdIpNRYy1GnTY4NZVEpTQGpfzQ4eI11RI0DEeKiWcJRE41NExTjTbBUZ4jTZyb4lVaIZOJwgtOgbkWQ8vQiGTHwGWN3JRXPf1I43rTQWQ3rC2UgQbT4iydzOiPYzRGLHE8Y03HeTI0lbIyALwnw84bGc46wy4wwm4l1AYpIppMPGEjTSsIE6ZFwz3Utdw0k+BfIoIQo+IABWw4QcE30DBGotKBUVnY0Kk3QuY2k64vooDe1EDRpC7bgxrBUQgU4PwUsNlZcDwNlaAccK2SQg+epKdKjBqHuUgSsM03CIMEUTGEeEMN3XMXuRwq0iETdQdVEzQR07kEMMUQ4AMD0x0704030nwrdCEAMuiIMgMNHaiaM4qGEMqBMz0q2bkAAZlDMaj8Ftj6kNONONU/V1IYC5R9M1J7Sm2jDHgNIhCNNJmd2jItLFOH00B9PbA1SoRfgqmow+M2IjkpSXT9S+UcWPnJ0EW9zTLeX7KXjokDW7Ugym0Ax3m7jZVRL7jtgnQX1JhbMNCqLom5EvTtJ1WUnoH0ExhTLtN3MLlG3GwR0rP1NLNJjNiLIYCpIXwbK7mBlrLXJ4IM01mcwBh/ncQSnAshwPlFJYPGKgtUG5FFK6kJgakgoe3gtiM+LKL8ngsF1ApiHAuEV2V7XZ051wv+n3F62wt6MQrn3Qv/lyFthk1XEIqoqglUEGmbBMyzyeM0BtBDBDUKURIXim16yvyGVGxgHFEgAAGo5LPBIAAAeSi1GQwLi8IZsMxN/Nxf+bzSSAi+ipjXim/AxJnOiei5ClM3rf4srXIIS6oneONbo/vHC2yiyski+bwlaPw2yqNTQYGQ4XrSvZQkRdygxUSpypuYROtYZNy3oy9XrSsKNPJQiV0xYS7KbVK3pSS4Ar1BqT6Ssck3y4Sio8NdGDK+KnYiWHDVDVfErUcrLROSYeq7UmzQ4PmDLGmcGA0RQWUeIL5Oq3LauOVTqny6IaAYa1fDqgwXq1CAapKQ4aa7Uqklah8QFYFZQMJSEsrLqpHNqh8WaiaVqaaVjAwda1WLkb3GCHCMKBgS6pc6vF+RHEweqjshmd2SlMiyyRqQSGyMYeqzTKIeq3skwPqxakeTpXIXIRaxwuG9Yx6hUCqfQJGyZGFKeIFK5baiEXakaT6+IQwEwYgHwUzTKm68iT9acZgcgFfbUmAQG9wH+TpM6AuQwM4QTPLXASTZOVmniDmmzSTV6+q5ag6kawrbY9kxm3zMQMuDQOiJG2avmaWs2agZqSaIaTqEKIwi6sW1fLkKk6WxqwSYTcHIuXAYQjLQ2kG9wImCm2CMXQvOmmvNbb1C9BqUXcXJsSsL+KqsCcaiklrNrQzG7O7OLY2oIKkvmUO0qPyCOlJaqOLc69jZmnC7bXje2u6mO+7PyTQbOuLTOxgYqW7DMZ2l6leYOEdIOQ2deE2M2bc3uG2JgF7NAyPT7CdWeTwbFIMMwu/HNRwvuyhTQWfM7J4sqS43IyAfOh7aAb9JtVePWVOFtOuiYncpu3eFuzsWXT7KGnCj9e6pG+6aukwKXSilk8KImzczXZsZPR/Xpc9HC8Uuy5OJ+pnSsC+iSjgi7AOlaIOrFQzK2n+ya7qxqNWgaTW861GpHa6rpCkqawgcLHKbWh3emvKmqvtL8jO2BlaeB/rMBjWr5FOidTpfQbkWU30HDEUWaHvQuz9fGYkMSngndV/b1KiehzQIeMK6S7nYQfGD08h8xeh3iPU6AfGDghRTpIRyfFkd8KkqDT+rfZRaAWSoRzS7Ss5NhraTQIRx4QgWRVxdxPh2cSWCrWix+DyvPOifGYKgxAKuiBymxmKrohqMyhxVVexkGaKvpP2qvfegzTQAzek4E+OzQb1eatwRaysDcpuENP89destQMeaABgcgTwQgUsXAChIJMebQ/+BfGAzQTxhfKKopr89m+pFCMp1ZCpzw7yikvwhfOxuoRyxpmkgw5UhfLks3T84sjwry9Qnpz9Q8sstQEbeIZ8rlP8pso8iEKk3IFJtJjJrJxJiHbhqiYmnwD07bM5FhSZDZqCZmIQK7LuIMaLAOAy3zLA7uL84Kkm7YuzZihgVi6AOS/Z9mvMXsaAEMXimLbbbkfZ6Ekq3wwA+3YSJgd0eJng8FvR8xRp9x9GYRBlWgOgKRMYyp4s4ZlqNQbkZ03snNMeVWEi5hNY/HZF1F1NLrEtC0Ml4fS1YRLjMp5gXaF9ENLGkFMFCFXAKFVWSF+mtlzlcFSFaFe4IV1WXJmAOF6IJ5NhaiTl7l+URFg+I5dF4CboqDUSC+VQU0y2PRQUb0CHIndBjYilk2ylFvGcq1OiEVrlh8BEneQMnV49RQfV+G5wtrIybp3ky1/piaykw4GGxmZ1n0WKtVpR/iqyMpzF48z9NRlmZ0EMWSpS5AOiIMWSp0TwDRy06MlVks5skZ3CTwNHSnQNbs+cvsglhVgx5hK84UMwnsu0sxiWDV+QLVwBC+Toqt1mNMu0lSiN4smA13KiOSeHFmOiC5gin0nqzlVE66ynWoOSOMWcOMzQcdq5ydgwWM/zeMy2Dt4VfSsSEdvnBgRd4mrd13FQiVspgp1Snsxmf0y2RthUZtrV296dx1gC91UZa5/tyfFS1M0mEbJdrd1Ex9qsGOFt98Hszd5Qbd/0ONJFHZfdhgEd89r9/J39m9+ct9/0I159yDrD+9tE9GbvEPBDvUQ1hVGAXIBdoDmD6VuBSeoUlBFhKdB5HwDwSAbAI/T2X0O95mSWYQaDiETon1NDq9jD/9tlQD09mDkD3D8Dl9tMoTkDlywpOKkPTGENRwAlOgXlxabTxQQlRjPdRR4QHhyOHNqN8sjSqILSuNyABNiz5NyAVN7MG0DNvirN0mSz986N6ysKyjtsgDnt5Svtis39uzVdrdILtlGmZTnds5wsn9sAv9qD2j2Dwdg+ITmZ0t0mP5fFC28gSvZx1KbL7NmLfQAr4gcgSZCOFGlpV1WruVDNMr4Lhu0gXtsdDNCtUL+adLmZ6TuMgMmLVr606oww4PUY6VW8fr7N5yUb30hcittOcDFxx+2lpq4zi14xWcvrmTvN7z5yb9qm91scokwZy+puGb/bgb+Loj24xk0DOgpLz9JbhJQNDgkNN7tGbfct974fT+DM4IOTy9VYjIswgnZrqli1+lnCyr4uGriHjbk2+rhk3AZNEck25yYp+15c2litS8jEpHzH9NI7383aHNvpi1i7rktwnHq7ylKIGhZ703eIZdYnk19NOzYgIH5gYbgOY7y7pZHnzMh9oJ1U+4xpFl4SHw22PwPTl+WXqs3XdLkHhqNZ2Cnzg76Nmz7i+zxzpNlNtN9zzN4QH0rXo88s/zztmLmM1Xy2Mwu70Dhfb723vFzVVWOcgDkX4HsXy3Rs3zu6Gs8XhI9U5Iro0FpiMhTlbIZ6peEQPjrlBt0zmAcNl73Ny30Z2N7MBzxNyAZz1z9N03yTsmMLjP/N63m3+t9rsw5Pij31TstFq1st/Fh8AL7HABElvHkn7Y+v4nA+EtKSY1i1d40TqZwP23kj6q6/NOkwkwYr1KPvK9EwpytuJjkU/zJxQyRPtKOgbKChSXaXpiEpI1E1BXpraw0/5QeQdi1GX3IUXaxxugNXsWWf4si4m0wpUUj6BPQzei2uGfqTl2qVhxSj/VxCiUtiVgIBpAA9DTDNy18ymRaX5mUz6ZAs/WKpUPoMTHwKxaGkoeNKRA/SnhLQLVK8NMBSQEDbqRdeCAwEQhUhYcaEDCFSDIhAQ8I3hAiERBIiYRmBOEFxFwBABQAsY6kLYPwIMBNAKQkEToA4FpC9A3wTIIYCyDxD/VCQGQbIHkHWDqCNB3AKoIsHqAgBcQzQVoJhEkHdA6QZAuQcMFZBKCiQcwMAAsFqDLBNBjgtYJsD4FQBYAkEQEKgG0DsAoM4IJQTunthjQpBPQQYBYJz6c5ZoiwTpLsC4GEC6IfggkEZB+oQIKKXUZnLdkKjkUlBLkQqHIVzrzcVsa0VOr0QoprR6Y5/NfEUOIY4U1ozOZIVZGyFpC7Ma0MGhDS+oQImhAcWoViRyFuQQmzkXVNrW1R/VEhZQ8motliGUCdstwGgZhHoHkDJhlNVgQKCFCihOBTAj9FSQSFxwAheAnQBQMpqnhOcjA6wNwKoEzDaB1geYScP3Afplh7AtYZwkWFAReBegQQToFcGiDyQLQSkNYGMHSD7QjIYgX5GACzgWgdwTkDkGxBOCYRawbQbUF0H6DxBRguwMENMGyDgRL4UEd5QhGzB5giwBwbCKJElAXBegdwZhBeDHAakZwC4G8GRAfpKRdIm4KiF+D/ARAng4EJwCgClhmI0SZiNAEoAmDIAAADgrCQApEcgeTC9z677gQQB8QEZs3iGXBJAzI74KyIxBYgQAOIQwMYFCEKDMRiUa8P0BJBfCDBvwjoKiJMEyCHQ5g/UeeBIGvgHQnIOAPowOFARK0ZA3gVADdCEBjU2KGEPASrB79aw9YYAI2GbCtg8W3YRMPpH7CDgHRo4ccJOGnCzhgA7wDqDYAVG+AsxRIAAMTzgAA7LmQABsiAdgN50OgGjVQZAj0W+DwHHpB0MAMgKQC7r1I/U6tI0HQFoG99Fg7iCiuECTF+oSiGCdYizgqxcgJ0A4icEOMZb2i/IRoxURaE9GZUyOE6Q6qrCJRfJUUc4l8AuLKxJQXRWYzUvGmEECDa4p400ciKpChAhArACEAwA+bBBgAeYScG8iEC+AwR9wSEWoOJG/j5gIAaoAiPABIifhEg4ALeLCQPj8wzAZ8Z4FfEap3x2I8EdYPxH2C/x6E0kdsHJFUgOR3grgDUD0EABVLwHmEhBbwKE74uPuDQImbB2AbonCKEwUT4TvIegt0BRM+CNRsAGmGpHpBZCGANIIAASZAFsAkBWAMgdAKuF+hOBmAoENKEJJElCASaEkqScEFkn4B5JoiYkGgEkm8SZJDnUZMQHz6QB8AhwHuiQkMl0QTJ2Yd0uZL/bqSWJmwJiDxNIAUIKhTYw4PgDOSdJDJzofANL2EjMSmIrEhCRxLoBcTD4GtT9AJPkmiSlJ2klScwEigdjBosk4gDFMUniT4pukpKeAzUkaTPiWknSdJNkk2S4Qhk1AFZLMllTNAVkwSgZLskCTHJX4A0C5MIBuTVsHkryThUMmqV8AycOqT7SMl9TnI7pSsKm0xg6AG0Hwt4eeM+FkgzRYEiCfeMfEwSXxSEr8SoKhFaj0Jmg+EXUGAliDQJKIpaVBN7CrS4J603EcSFQlLAdpGgzCSIOwkHAjgJwGkcqPeC3AphjIpEKqLRBsjcJ00wSXMEgDphwR5wKekgjCSQBKAS7KdHUiED8dIINEwGQRMgCxJ9UGYcssjKoggIwMiIFUR8DVHogxAmo7UcAFxkmj5pV4v4eBMhnLToJsEycLjOdFfcKEp4d6ciBZHEzMQ5oYwG+I4kiCqZR068bTLvGnSnxa0/mR+JxEszhI+AYxkqKZGEy/pGo3mcADOAIy/Ao4WGWTEFmHTDBIsk6StMZnqyLazAZmNrOJpScVBGSZiXoMuHIRZwZUHsHqEuhNhVYyM+ibRBBk4jzgF+O8a8KBl6DQZQCbFP7KhnhN+qkwAiajKyieliA7WQsnqCWlLRYgxAIBlURvpu5wRfXE1NKWxRZz+ZtsJeL2lRlxBjJeoXUDKhjnAyFJYk9AOHIhCyT5AacyOMSBjgCI7xksOEOQwYCoy65cU5KeEFkmfi7gbcpOSY3BxNFiQfEYYGRKrmgN14msieUtORlQYQ51KYgnTI8RpymMOIjmAFKgAYIW5KMfUE8FRidyoZyiJaTaDzDL5yGjkYSO4lyDMzbY64c+QDEbk2xfsJ84gCZlcRUt4E6/fQJEj9Rd1U5KMXdl+CwDjzR5jRXaOAtnmqQIQj8wLsxRxH41f5uvOzkZJ7oPNuUOc4xr/JxZih90hSQBYxzrzMdQFeYbFKPKgVmgoAv8y+RCGEiNNW5MhNOWFRgX7Nu5E8uBUgtuhsKymcCyyjiO4VQAOa2c+4MZM9gXwhAZMAzMIuLIc0aAahIQOWX0aHzYG7A8iaJOLkKhS586MplLJQjZDOmM8MwqbgSkWRnIrUomr9Faksl7FLUihBIp0VCgl55slmEYuX4qKzZ/HSybOHKaaz3FjMZmHqBshwL/G5clOY8AYDuz5QfcpiDAotr8cmc4LaMNKUnkFw0oWk+aHIvkCVhUIuASKAKGRQpJR5PtOme5wwXqcF8u0eJaEymkpKoApAP8FbmEDgc0o8gNIImA47xLEl1E4xcWXaUhBlE7TIYsos/S9ZxwbcSZSPHp7cZvQSpKZfGjtm2Qx4E8ouVbkMVYYa5eggeZlPXHyhZJw6ReaYuiW/9CysQdBlUUcqeNBKyMjeX7Lpnx1ymdANiaJLKzsZh0EFPJtkPOU9DjIWGLkAApX5AKqFACGheAq/i/R6kDC9PqYoXjz8PiJQzBuwCmkbK6kvoLORrO8VUSDlwk2KccqwxnK+0GmfFfxyuX+piQxjLOSnJsi9znlvsreXePeUc14ZBKxhqgz+UTo+xgKhUMCrIpkLfEFCtflCpAVG4wF2KOFex0P7z4ymVK0dvNFRUJVH46dTFYHNRnvzjwE85hSnPwBkwmwdKjBYIshAsqwZbKsJByqeBl0ncH1flCqzKrv4c5ZfUee4s6W4rSiq8kZZ+iwVeqU8TDdOcZK6m9F+U7vd8atmQo4iUy+AGNeCOHiYwscjCjYn6naXbVj4+kdRVOiUV+qPlai+RdGy0XqqtsGKrFWAFjng0ggsofOevG9V6hs1Ra8snwqzlOzggp7CBYZN9X8D2ALy61b6Xmz5ZVFhSjRSeSokwAPqzCsvr/JdXSKx57q8RYquLJvYjcSJNOdgubAZpiFzpBNfcDQr5rpwdwfgOupRibqWYdmYhVguz7xsRQe6u4GhTRUary12q4Ga7AbWQBBli0GyFnPIZbwkEagR4BfFaiLys5jYeTF8RxFEqjlyk7KUPJHkYKMEba7FD+tKIsi1A1CHJbKH7maTYNxUieV+pfiobIlFWLZj6rpmWrQ5jc95TCDHiBKJ13Of1D/BgURKKAXasDsSGZWBd2FZ67PusVOZZ4XeHSiZeN38ztIllcy1ZeJrKa9YiyKyhZQzjf6qsBkTEtpQEDY1Zz0NTAceVx24wKhWAg0aNNxpMUhT488JdPquv4CAgIEglM5EJvGXCAFN5CmTTvEk1OaxVLmpuHJpVXjSZ+6KnjBNOM2jLTNjGhgRZuIDHrrNdEb5oJpMXCbHNomqZc5uLKzKZWM6jdTetz7gqUtO8bzVJsU3+blNGnEYgfEaXUAGG6fMrQwDnVNLZYfqeJdyE+iPrWloyTTWqIw3jyfAcgQ0AAC9zghwNIKcF9Dga9QTYYyVICfn/x4lZydxPErGZqFUO9mzpdAXK1hQl1onCTWlsS2fslleW9zYv1XF98kV8W/LRts810A3Nn61bTAR23na9tV2mZc5VcTqdS1GDALSpu0UkIainVDTHioCV+AStnZUnDm2VUEVtsO0BPGdiW0ian6Hq6ZUL0u1P0bt8O2TVDBVVP0QqT6stQForVByssH6v9UymjBAagUg0UDaURG2QbwRRK/fNrmqIaYmcGCSnZ+T1BQYuO/mDxSEnLlZztq2m2jYOnBm+QZA/EuYP3JJV4bggOUjWrJLIbytT2xEOBUhtKLgLiNo8H4BhvBnkMcNBU9AHzToCySs5SiNQlht9DKIriygSjZvOo1DqoIAme1Wvn1zep3EIsbLZ+n50I4RYYVR2OVpzZjLOlu9Xok0p6Hm7k4PG4gNyHiXEQoBhhPAa+r0Hvrsl4s1taUQNUUbRdwMwtS3OjZgcpR5cpwPw2ZTBARdeOmDVlOklS7WoakiIMY0V3EhkNyevUFpsw1a7a54usvZLvg2pk6FiGuvcrpQ1wg2t6upgJroqza7PUWkvXQbtKJJ6bIqerucoiHiW7Xl7Km3YYAEwJAY4kQe3TACcCNg14TPZjWpu4i00SETarPS2sonGNpUwQSbZe2C3sT3wu+2cHOUzzrEYthrTpJwwmnaL3dLMaOHqu6X4RPF3O0ooiTgWOBqA8meHb/ugBP6T6jxA+P/qWTQ7hAFUXbWjvcW/69ucvOtUAa52/bQD9rOBbSDYTQG6N1ZC+KPSy6zgcDZfP3cojQPna5l7i8ySYDJhn6FF48qUhzSBy9EzAFoTfUZr0qZoUYeq9YiHoqhK9R2ECc3WGsfhf6PtLWzpAZsiBY63t/qjdeLOSaiG6AbGGg1WXkoOdCEU0i8e8IvFCyDZNMo2QzLWnKrLZCi78dCLulEi9piI/WeaJsDWGzpJsuw/LKtm+k8Rtggkc4aJEPS3BMQnCUgC8EoyM9OsrxdSvxbyrZM8oZGVsFRlFgZwCoZVRsQ6WOZCV24KDOOHdA7yUYEEZ/bwTuB7zwREOoYOVoPktapFYyz4AMvK1DK8lE8t7PIAg5XanZFcsKbgCiCLZjG3So9YDoZh/gEtuwCLYYdXUIBkA8xrLdotMVNGKmNKtCJxyPwTzVUeAARHqCKOpMydo2MY0ChhBwg6DIW4hU0bvUL5R5KZUeSmswBQAjdF8VBcIegC5ATjMIOQxLCq33roSR24yIUtj4lK51UfehRGgmOgmvw+gGArH3N1QntQZuaPf5me3DEWt/B7rXqEI1JK0oggTwNtQBivGL2uwYxs5yPXfGFQvx244xNE6Am1CsfcpWcARMGBwTiW5kzCcnyx8PEf8OEKpQE3OQj1LJQU/G3ZNImYAnxv9vyYqOGHRpFR1E9/pa0Nd1j+xkDdJUV0ykASquz4CmPwRk6U5okOPMkugVtKJjFTbEwqEZgKh89KTG1u0dr306G1nwHUSLreMSnUApzArY/CKOEAwdNzLtWUbXhNGc+jlUeTUem0jxtkQh1/r0W9O+nbYnVXeeMaQQymIIEWqo/cDDN1G9haR4GVyv46xjGALANgKjJKKs6psckRefnqATtLMN9K0osq1V39rG5JuteVNmVUEL7gU6jhen1/kB6vTtAH01c3B3+mXOCZ3jbZy3Uin51F3KrcYZiN6DwU5EeIz4v2XbgvZn6bI3RGVUuJTDs0vQBYY8M3i6Z4s86UzJImOHtpIRlYK4YOnfDLDForwxLIunMzAjWo4I1efKBhGdgHgqI5yI2XET8TxIJGduBzOsT1NJ+sqTKVI0YIO5N8u+SRvBzQaqs5wMbQACliAggBgFVjSa6dIApZtGRNXdlSjnYvwFoIcGYhNEpE+JmDmGVDAhhWzPBW2F/M8C/ZqA/ymABpjsyiduLviGBRpklL0A2TPrept7lBQunUopQqxeQwshcWfUfF8eR3Jb2+JbYJ7XyPdHPWJceLjxyWOeoUvYHj4PE6Sa4moC6WC+GaLS95D4u6WBLJgG0NEC8SOZjLul9YhkebAjYijKCEy7G0S5WXs+MFyDdlEiDMAnL2fVSmGADAABOMMBFeLEFjIrxYhADxd8sTmWYqlAMAAD1cyAYT01tjcBuoLLQyGBaWZlIKWal8F4SJGZyuGK/UZwWSgVdSgwLmIN9ZgFxx2QSliQNRTFfOddDgWClwgLOfcH7hRBewDes+Xqu+wYMELBcBi/TTfkfytWbF/lf/E4sBx6rSVqAPxY6uCX4Twl0qtRDEsALshGmUcdJfMtyWNrClqC4hfIVHX2adq0cSKsKRWWvVel3xdGY1V5W6ra1lrcVclilW7xt8li1GbI5VX5oNV/K99eNMsRmrrV0be1YdNdXQLPV4/X1bGsowAYNoOC0DZN3JLe165+6rqvRuqBmLy+HlTXkWtu0cKTFumd/NWiJc5rx4VGPdGMM7nPhZhuacYAYDmzbRIwX+RzQvO6CdpN5hoJze5t6jebac/m6+bsG3TnDX52AGIFennAOZNwSCN9IJmfTKaYgdWx9K5n/Tfz3gnUIWANCdjZo+M3W0TLZEK4EQKt6QB+gBCShQAYHMVPKDJg0QTR5tzmZbYxCAobbSszW0BG1vAgnbokF22wdlZLmRB2oaJJLbHj7598XJjkZqOMlgiQNIgmOyjA5rx3a4IdoQHIHDvu2o7BgPA8KHZJJ2nbfh0nVanTux3d4ugZ2/nbduUCTRWMR23oNDuN3I4FCO1SIKogiA0RKIMgSIHFvqBqopYcuEjjED75lwlABSFdhdAABpEQKmCLAKRmICQUsMuGiQiAiwvIwifOGXAiAgw8tI4P7b1uqytRwktEdaMZAj3wJJdUgOPZwyUz3DYEmkD0CzE83QgagLsGPYnsOjnRbdhu67a7uR2oAfdge1mOHvMgQgIgSmNdDnkQgp7M9ue4veXur317m97e7veiT73D7IYE+57d+nqiSZ5od++iJtF334HykRBy/bvOHnLRAIswXfZ/vABqHN0SEIA/rsd2QH3gMBw31ECQOh7I9hPrzuQ5boXQ4F5B7PfntL2V7a9je1vZ3t72D7IgAMIQ9ttngVZpDy++Q5vs+Av7wAUgGI45T+ZJHKNvWfQ7fvX3P7LDhgF2GMdiRxHZj8C1w9zth3jV3dvVb3YPj92TBg9t8NA/kGwPkLJcF0GI+keoO5HGDxR9g5UeH3cyGjs+97Z0c4g9HtjmB6EFCfZRwnTjuhwtJRHpPmHmT4AKw+ye4BcnDAT9DbKAc8Pw7fDnu+A98dCPAnVY+IJE9kfoOFHWD5R7g9UdhgknP05WSQ55m6ObHZgtp8IEscFORZRTjETuMSiXS3H7dvO7w68e+gfHYIFpw6CfCT2RA09mR2g/keYOlHODvByIAGdiAS7mgUALmLEAKRCJCQQ+yIH4FEPhn3MomgiG2f9BdnDojp0c5ic9Ozn/Th29w9Wf1P1nJovu1hcNBQpjgJE9QBkH+fRPunpz+JyIAACsgzjW+fdSe4gYXOF+F4BZQmkhRbpAQxwS7he4zqnmQDJDoClBTYE+1WXAHGHiCSY4sAACRgf3RP4/mNhCTd74COxtDQxIWkOBVoCaEGaagNyF6iiliIFUaV2NHigPZRQibJik2AOhftqN1Nu8czfxqgVTw7gU+EXieDnA6MAMce43OZsIAKoW6flzTexvNCM0pQ5yxAmsW6SJxGADCggGOtlFZKafVzlRDjDb64wcGWShen1CVg4wwVNyTrk1eQV8+dELyyldA4YAo0xSvK2BHDc4U03EiddODZqPvRJYyFBSsREVj+1qIbk98LcE1dUtbgslKvDCCjdZvEU4qvCwUUlUwrZVe/TJlCkXnMY9QZgWy/RTdzRxY4hgSoCYHTACcWg/VjTPnuMr07bLjKirEBaG057k5kAGV9rTyEvgRQmoE5IYDpiIp1mbPP1F8sXJD8QTS0LuoUVvAFvW82bxKpG4nWGZ43SyJsARTYsNuY3E6uN+gAEfD7Msn7z+rJXHLKAL3y3TQEB7spPvH4QHn95W4nXVvcAAYTV0CnkB3vWUbSVvKeFQ+Iem3E6rnLW6nReumK4HyD4tDsxNh7CGJYiO5kS0IAaP24z1KKFkSIohOAH7JLe7PSFl+EbMBt4inLfxpfBRrwzuRDNdgVVAlr7edQADPzgog8bpiotdERquJWR1qxSbcGgTjOkauB15tBk+6u5PQxkwAp/gMCOh+eu95SdUGhfvNcWh4UYcFs1qfoAUkN13rpktdDWhC1SYAgCH4mXI5i1Imncxc9ufKUGRwgBZAqhheDAOKnTzhWo0BjOwzN0L1YpILwqPAmQfGsAHSvQBHIWQQiZ4Eiipg4AHgPL1kGFGRQQwxYyKFlZdH5fcnFCSko5EbmaRgAfUDDa59Mo4U9Pd42m4Z7CQ8uTPZniUFwR8GMulp/X6gFa9vGHAuKSnmAFxV+oSGYoS31ALeI0u5hBjdEDb7G1koa9hASlFNkdmYDhkcibcK1/N7z6qUuKibBSpq9vEBhrKO3ZHIW0E/eSkEAYBt/S5gUZ2xIWyviHcHYNjw8Agx/gGhFmABx98BAffPEE2jBW5RwgP71Iroi3P7njz55/wKIaHQoMyPpJvICI4tAsLP8aACDD8e0gAnOzkR446qemOIPUj/Zyg86fHPYnvT85+o5ED3DVhYoY7ocDx+7x3FPIvkSlVrtklmAhkW8TK3OXZR/MxIeO9ovLnjgE5+q4kECkZQXayYSX8SRIHh1NUifmYNkIspEXjF9fYUeQEb/f4dcZCpAWSjAodQFyU9rc8ufL9v2JIsLgKNObCzKYE+v02AdIENugBNFDOSv+QDaF/lNFDgpP/YOT+cCU+fnIj9h4g+RddOTncTvp/g7EBc/CIooF0dTHT5d1xqxP0bzAolGQG9QWc5hVr/1VqBsLUKeIN0SnKuya/HvlGGiYdgHwy4ptNmrplKxC1tmI8KzwLS5pC19fhwMuGdis+J/kFbvojk0QJ8R/1sAmNyQJjQavaloNviPiHguzaX98J6aSoXI1aRBONcIfX7C8mB9y5oUfmP8oDj8+AgnFgplxbRycRPGfhzlF6n7Z+qPEnnPvkGwO58uj+fQ4DPJhIfGB1QOaO9H75/USsDt8tlZhXuh5MFq2Rhy/UomwBuEZCD5scmGXjbN8fRM2rNxWZ3GpQrfCBE7pu6M5GrN5hENltJvfTMGwA/fQbSYBA/DALoAbQd0AX9DWLumKVjfOdWvRp5MeAj9XEX+RF9SjVxGrNKwaswPQOCbS0IlCAE+T1BdNFmHgQ4AxlRP9W5R4CdlvyOaCrxvUUAIMBDOWQIgCqcItygw9A4QlvEvfS3199/fBgKD8ZAkuDD805Bfyv9vnO/wT9fWBB2QVk/FnyBd0XAhx/8S7HP2gA8/G4z8IzAyQJgCL4SAHjtGiZmHcBaacuT+hIgLMHwsEg5OWUBwgagG0UAgDiQwQElfFn6sNWD0miQXQLMDjl6A30ATl2sbRQNUP1OA11MrUEcG6UBrCINn0L/HAQnQdA/QBSCDAoqgnUUgkoxDU8A9bHcRyA9YhICXOMgMICKAkrm8hGmGgLoCA/Of1rsWAwgDYCDGIpXz9dEQ6yCBKwJohkBBEfgMKRBA/0xEDCAsQMICJAl9G0tS/XPRT1iQKvxd82g7QK2hCeSUXR4Q0HoKgxtTMvwIDuIfAJGDiA6gHAUBNQ1hGDJ0NpGmD81H3ysQAEJgM/QjAcGDvZBeLujJoJLagMsCygxgKWDWA56DWDOA4sgL8tgtGDn9nAA4N8RRA2Vm4gLghqEb8ezTMHaxcIYIIPVSOGBTjByDdjXuD98TQJxCmIDoN/lughPHalzEPu2nUYAMn2cCLAERz/scMTwMBc0XdPyPtM/X/xWFs/Hn0wAQAO5xEAHnJ5zEBXncUN+c/IGUNRc0/c50uc4HP/0Ih4AdRCEByAINXpoE+LdAGNV/dv38Qitd6wlhr/W/wsBJnQ0I/9gXQ+1NCS7S0LnpfBLAgGNNIBEEFRdKVAPxM9QL5lQ4GAXTX44IwjFAKZ4hAFBopdKJiEZhCwIMByALLBPgxQoqL7znYNsQrUBQ5g6CG4hA/ATHsDM7PgIu5kQ9vkKRswvUADA8wrS0Tk0wjFEWQmwoZGyRvyTMN8QCw4JiioMXT9lSgquIrhLDp+bi1088UHTiJQMSB4wRQWwyAAxd2wniznDSUfFEM4u4FjxOhJyDQxRhlwoZFXDixDcJ9RVwtthoQLwsfh68AUaFn0ZROF7XrRntF4FDCUkfvwkCTwqDF/knQ/KlEAsFNgEoQ7oYczlV6kb8koC3QsRC4VG0UVVAgUyYAJ5DnggwHFwBdJahK0oAidTQiIlFBDXhCAIUIPh8ETsOqIrQvRnYw7gCk0gAIRLulipJuDvy7oKtH02nByIlbEois8TpBojzfKkMKpfHUUlPBynVl2YB2XB7C5dgnVz0YiABIZFWRsoQgHb4KxVxG4ZdsB7HZp2PXIARAgPU8FFJPnEzFg9MuQ73GIZIrljhJwQkZGflfRdrDW1jHRQCJ9NYU5FQ5LECrV8xIYQiGCBbQmvHYijtACK4izCWiMpwsYEhVu13+Kp2Qp5AaEngR+fXnyWhIIkZBfD5EA7R35a8dmCzxlIuOkg4z0WKj25l2Q1lSjK4YjygiLEPiIewzvUQEEi2XGEE5duXCyO/IoTIyMIBiw20lI9FIpRlyjEoAMFUjRvdSLqiSo1qMmB2ouN01wo0HSnr4niQyKA92o+nDMjyPRiKsi9oWyORDnXb3xCiu6MUEHDGmZaLCiY8V4KfChkOKK4IEok9CSizkXqPiB2o9KPZhMozjxyjRSdqPyjN/BWG0sMjZfEUtSNaSmYUizcGlo0EfR4JACUIzoOq4LAOgDuB+QrCKgxpwTaHBA7gDxCI42QAcMvQpCTIyRI6QjdUOZjwFv2IBFWYQAcBCwKjBaUO+WGOk4b+CiKoiIRUcggQmiZiA5d5wF0AAA1JojoizkbGLKx6+agD8BlAUgH4BKwHU3lMDtIq15FmIH2i6MJhDiStxCAL8i8A72cGWVUGoGBWgBTgEDWnla/QuFhC2iElVUhggfdBliQAA7zV1W1QSDhiRkKhGiiu/HiBAooQqp3xpPIUVVE5CY6AAXVUAUmNNZ8cb4C2JrY5S2KRiQS9SPC/5QcNqAmY0Ek/QVomkwKsOA6KLN9mTCS0EgUqIZjCxpwimDTlo49GJLC9o+KPrRe1Bq25F+YysD+81dNCG00sCBwDY1H5bok6QmY7ATAgk1KIRwp+fPAXY9fvUX0ZRjUBAL9BmXFDQVBs7el3YAqIfnyiDUfdUPR9tQl527AVse2Fx9a7eOzsixzH2O9QnA/xygdqfExwkcGfA5yicU/Vnz9C1HRUP8CefYcx7j98B4wXxedOgGOAZA+EDJ9KXY+OpcRAJF1f9V4rwLlDznLFxEAiaNhBdEodY300A/I1321cGAK11/leKS9BL8IgFQAPhfVGYO99uzXs0Ypl4DQjogmiVmPZj+AJol4QMWU1maJKY6mLpjLgyM3Wx64usN9BT/HC3r9UQ9/kgSN1KBJISY4lTCwVDfQLURQYFaQNkD5oQMRsDZA2sOIA2iMAnqRFgPmOF9jYhJT61cwbwDG1uUSACLBKATAHY01AzL01jFgWeIp954zJ0f8wnF/xXjmfWUONCv/LePNCiIAAPHj98IAKeCIQHVC6D3ggUN6DggSIH6DCI4QCW90tccz152+Z+Xm9YtUhNPlOFVvyqsCovxEage6exPD1d1Z0kxjGoVcBzZiFJb1vVAo3iNsTT1YgEA5XIlBGJiOInCjuASFP9joBfNetHoixSWJPiSyodyJepPI0G1STnSIyToBVwOiOEQw9QMjBpEQsPTNQwgqAGYgYI/BMlhhgZIxMAuQ9oL+j3QEGKMCpsYoyZNRAd0HMCY2MSEvjT4uiCv8L4ol2RRr49QFvj1Eo0M/9D7J+JfjsAN+Pb4EwpsCTCRAd0Fdis8VcN4C6AJolvDwEtxIslhkn0woShkM4Bjwd8UgFWRPAPrR2jCkScN7CjkqxFOSRkGkLuTiFRkPJQoIRlHTUnkl5Kn5jJBHg+T/vZoj2Dwgb5IRROmSxOrd9k/+MBT7kkFIETZGfLkhT7o/aIrjDE36OMTdA2wOyg1cfzD6SfuKbBMDSU6LiGT/4lPnM4T9FpOnibeWmnWJ4EtmI5jkEqZDtR2kUaO0Z2aShCbBA/QwGQTgyeVxigpwr/iYo/ktOVCjVopUznxCkKiFvFoPKCGIUVo9GL5TYKUJJ28kEXS3jZtU2xPGSXvZClXBmtXxD7tRSXMgEjmXISJEi/IMSOGB+gvGFDJKcOqNzJewhSIRQlI61I6jZKLqKA8bU+IT9SBovSMHDLETLA9STIhilE5nEk1Iqh5AQgDSTUAI+JIVUOWoA29XyDxAIjP2FOLxSDoxsSOjdKE6OYBcyA8COjK8LKK3YS0v1Lui1OVynXh0Y+VI0pxkk+PGJpkpWNmTEXBZLUSAXZZI3i1kswA2TXkjThU0FYSuIAi942uNtkZpIQQ5t1ZMWxKcGAEmneRmAAWxCNhbPQTJcKXVdNUB106W3fM7peWxtslbWkSGcPDHW3pEphIOzectHEZwBl2AI2z1ATbY0ElA703F2fiUEO9Ptt2RWp3Bcm7fhw/SUnZ+Jv4f0m9JEAcQ9x07tC7KAG1B/Asu1/Nk7d22udK7NOygBk/aJGXA4wK7H3tSwEQGXAAADW6cAQMFw8cI7Rp3Ox/08jIadvHJpzBAZk2zhWh5kn0PXj0XY+xEB2ZZJ20dRnMmUYzBoFaBJcvhLm3Jc77fjL30oIGpy5FxRNQD3SqiS0wg4L/buOwyRARcBLBSwTQDHDtLVDMUBTjLbz15ppYB3DtrnWDInVMM7DNwz5wfDKIySMzEFLBP4fWAptexf+EFBy5UYMBDSAidFczfXRkyVSxvVNViQKSRolLB1wEYVjDRJU3QH16zBTkeRiMA+FLAjvLdyaJvNBfyaI5lVLOMdytXAFSzZ4ZQCaJhsUeSFpywECE6QKIs2A+o6AM43T4xASrLEAEDAyJzYxALujqy2FFCHxpVkLtKYzogFjMWT+030PYztE5UKIg+oerKpxjERzOTgOss/1uABM7rJvi+09/zYz5QjjKz8iIbkFLA71UpMrA7gW30zi+EzLISU9TcoP1Aa1P+CNBGofoG0Vu4foB60JEF/VGt87Nyx1FNYtBQXwasjjPxpfQZzjezwQD7LkpGoL43WwF8I1yLIMyaAASy8cOiBtTnICnjGlg8H7IyST7X0GdBfQAAFIAc3bLwss41fmPRNWF9KhhT2TGCkCSUrE0NBewC/zBZEwlmHByPOS9FXDcwm3gp5UAP5mdIUEp0mhJmWVxHeTuiVcJDAzk4kwp5VKFnNWjhcgJj9R2kbnIahVwtsNd00kurSS1fESXNShVw3Mn5yXuNJLkp5cy4JgUbYN7F9BMUvhXkxFqel3zU+NarJEAuKDQAqgsMuMFUyV7MsCJhszNmz3NtgMkBEyKXTrNmzJMzIC2lBbD8y3T8XJdOCdQgcTMEzD0tCQ/MIAC8QVsqRKuU0c1bU+wvTf0q9OIduZR9OfSIpU23fTNHT9OttwMrWz/SyMmDObsRBYDJ4zfbfPMDtIM4OxWdyM0zPgydExOyQzzMnDLwyCM4jMwdSM6DJAdTM1uyLy1nfhwgc544RyUS4gKpFPhpwT+TplWM7wOWzsXC2x4zSZK+ytEMnYPLxBqAcfN+hUYZs2mdqZC0TmdKHEp1Ycx8pJS3yp89lSkzu8iF0HzmnYfMCcRHcWXkABvJB16zFs2fPOdfArjIvTP0pfIPzb7ZdMfEn86bzpl8nPfOpBxnWQTscuwR/OfzlnIzM8cb8rZzvyqfJRKlC9nBbLXj381Rw58v8nFxAzf8iAsPy18tAodFQC4WRpk/8gxygL77O7CfskcOArqcECyjKHyFEkfODzRHJxzp9zHG4FfzMCh+K0TOMxWW/z8Csh0IL/8tfJp9nHenwsdSXKx0KcxCqgqPz7HIx0XiXHY/QYKAM0B2YLb81gvvylE8p0qde0pnz6ylsk0PnyvbRfNEKV84pwkLmXQwrIL7zcAusLICpQocc7CsRw0KaMyF02dBHZAp+dvQ3gvvjNE1ZPMLU8tkQILnCm0UmcHChh0oLsxBZ0mAlnS/NrzO7WjI2d6M3wt0KdnAIowKgilZMxcxAM0KGybnfuM1CMfHUOAAy8kZ0+cPQqBxyLjCt/P4KQiwvKvymCujIEcpswlyiB+AHrNyKNE/IuLFQi953CK1ZfjP4AhMt3KDyLBdWU9zxi5IvgKtC9ouhdfwU427Teihor4LgikQALEhi+9O5kl8nUXVkVimEHJkEXCYp3SmAXTJOLqXTwtSLvCjIs6KqXBF3WK3/TYvyLhRXYp/zRirtJuK8RWQvdyxMn4rOL5ixgsWL0ijooyEmAC4HmyNivIo3iIrT4pELL7Tm10goS84sXTRM5dNRK6AGVBBLNCtIqhdfHGZMYAXiu+P6KN4kMA+yhCvAssLkSmYumyi6P4uEypihQWJKaXDtk7jxvHgmUTsoe1IqjRI7l2M87XbAAFdNXMejMVRXbWkhzdAupl8pPPYt1lcHsCVOLclXUUlVcv2ZigNYtXN5R1dBvRawqgDXeITE8TXY8Ek8iKaT2AKjPXiltc+XEUv09bMLoWddbrPjTddDLYIE9cv2DVz+tLKPpCFdCmf1wPhg3MmxfhQ3A6HLcI3OsEgBo3aoljcPwT0sTcdLbyyNZc3CqhKUW3CN3TcwbCpULc0YaV08BS3Ft18Yq3BEEFc63fK0bdm3YTz48ZWfkg7ciiKVQQVu3ffj7dy5AdyXd3OKT1G1waFGHHdJ3ad2v053CuTUoAYYKnlBMbEAt7lFsdd1EgpRQyW3dchOVwPc2sI91G9ZJU9zFRz3P7hfhsPFJAw8sPLMqGSBPZMpfcoMN9y48P3SrGi5v3CtxMBYysUsQNZIz+MLhQPenQ3KIPLcqeoYPIaKNYEPCt0pSeCFDzQ8APPcuTMdy2SjZg8PL7wrdCPKDGI8APCsQ1KKPD8oVBqPEEn3D/wNYQY9ZDMolo9WPfd1XLq0mDi49ikHj2SiqWI8tklKK77y5K7Q40ok95Ac1wtKrXYz1XURvYiqo4VPT4hc9JLUcS08ZoUDl68wkKb2Yr5PRTwDLhASzwqxrPfBlag7Pd5nzBoARz2slRvdxBi99ADzyldvPCJl89qiD2C0qo5Qmn2ZUvUcQi8ovGKDUq4vUDkS94CFLy/Y1K9L3lUsvCqBy9yvQr2K9SvLuHy9Kvar1q80Pcr0a8M8OABa86ZNrw68GAk+gErJvIG2fyhvVirEqxvXwSiqDPS0sG9ZvfTIW9TSbb0mV8aNb07lNvOxLyq9vVG3M5Eszxke8J6C723krvCzhu8ogO7zkoHvT72e89U170JhEUD71O9qK6TPXAlY1Mgkz4wfqlpoIQC2gB1OS5TNty1MssE0zMcnTL0zY2RH0iCrsMsHbzlwF0E0BKSzHJSD9QXqurNqtRbCUyD4HqrP8jSCTJKKNQrUMx9h4phlHipsI6pwsTqnBhJ8xQvwpcD9C1QukKeCvooHT0Xb/1WyAg4czuqoUB6qlYwqTpjYBmlC329iIa+HWrNdscYnN1IawwHV11jU8jaq7fHasmDka6NHh0rEFGBEAsajhjRqoAHFVpRiQLGuXVP0alIsACa1GsxybYKUSprIAcmvh0OaJZCHJ81JVHZq/FKmgUAKtajEeijBVmCbgCwVWA0CWanEpEBKEU4AhrtLE5XBp+3EwEQtdfKrIldMcjI2MZUY30FLA4wTKkv9nqrIvj99C9wqccZ8pooudBsh4R59AaugGBqUkJCK/AOg2Gq3QKUqt0ICyU7dBsSOcL8hVZ2+YxzNkEsnwB45BeWGsbCd/CXFRsK/NOW6Jn5MPUMAEEjmMfZMc8FBpQ9QAmp94ulDnQvjPY9jUokQ/c4G6IF8EOvGIOaAOvZB9YaADVDzq8oqHj5E2P0UT2CkgoNDAi8kvRcOfP6tVC0fMosHjdQl6q9CEi9p2brvq+UKfiii9gUtDqaG0JDCHQ2RmSTeiWoqHt6i14rhL0XEesDDNcYMMZcPw8MOHDO4V3GjDkIOMMHDtkotJ3qDEVMNKjCw9JF9jj0HMLVzpUmAHBARFfBGPiHkaACs96GBEDBqCIgBLjjagU+rUQiw8cO8huciyyX47wuevnDdwxcNY8Tw5sOhSZc/MN/ILAGg2PiWIktS0t962MMfriyLGs28vI7yGwbP0as0/qymXBqrI/4LuBRCtLMBp9Rn5d+q2hDMQhrIjNcJMvwamIf+ufLceEUSAamIEBuobG0wpA4aheTQALEeGo1iYb6QdBtE5VwgsTvqhwxplYBZwfGrQg84qRsvDoU4UTkbUoJhpjALgV+tgbfEVcIistG/5GhTrw1QQsstw4JkfDwU1OIbS1Od8Onre8EzEOB98JauszCM1asaSEESYONgC4fOvGEjEnVFhrjYF2oY1Paz6W4hqmMDFrqb/euof9G6l8FNqtituqVDLal0UrqB4y6vnrWnfuuYBkm/ItXqdE8eutCCk+Pg/CAwEQmPDPOMEG2wSozVVcQqIY2CYw/CWeT2qpUjpB689QxerJKh6x+MKK16r9ELwymx8Aqbt6o5CAr6+TBpgB39SnGPrdkiZtDgUuLsOBJ+oq+vwb6ckxqC1vYuOs5SrNa+vYbFmwBt/qIUwrjEaaGhFCsbO4dqIM5CUdCpMBEVFcPgatm5qWcATYwuA/rcav+TyS3IpJLYbSwx+DHljGQhvaiWI85oMb76pEOfqZI4QmNgf6+qw4a1mhnkgBixMRr9icU0BoEaPNd/mcA8a3BuzSvm2xvCoIGjZBuadwu5rRQIWsGGhTzwuOMRa+oPxMyK66heryaCmwdIGbimzXE+bcWv+V7Dlc6FNka449xGTDVmvqHdIVm65oZb4AQaIkQM0ghqOauG6rzRbTm6rnOasW4hEMjFmugBDAY0vlvdi79KmjYB5UuVsObSW4Rui0E2E5r4aeLC5qGQrmneDJaFw9VH6I3gyAALEqWrMOhSQwPnLji2mnNhYiW0kTKrhawS2LxieLbhiZTP1GhwNj6rQxg9Ivm41oObvINptdS4SJEh5b5U11OVb80xfnVbzkohsIDBeANpWiiW01tFaoqURrjilc7i15zaW/MIVbkWkMGFExGhlmLJJGuFr1bPWwsCbaXm2oAUbMjZRtwBVG0tu5rymC+BhaEkD1tMbCwYMBearwpngsatLe1qbh2omxrzTYot8NKjp6gMEGZnGn8KmwQm5wARAikvzUfhImx5ONhioIvBg4oo8CJkTvEgFolhD2hXIVhNQGBWTqOuC+Jbin/Td3gRrao0n4BP4IWJAM9QFiJeyK3IJoMBqzMJqgxiGmNsKjamr8mDSXuJxJlT2ac2TBpAcjcww7wYKrKHJoE5JnQ7MwFBrORsO4juhaRM08BmSr4mEqXqW6+UI+Ln4gTBRAxcVZHNlCOoNpI6H24kzI7DAKmtI6iOvjpkC2Oq31EBqO54to7em/rIY6xANfTHgWO7ABE6OOjDv47uOr9l474lA1lcQNO8rRfrzZKjqBLALUkqWTpO850Y65O4+NYBFOkTOU7MwTTt7xtLBSCEBCwIdzD8dE/UG1oKc7RshKJayTpM7TC1RwRK/AxvOGxRJM4GSYfwsNlgpu9CzV5qZtPJkQFealtNAIZs/Zvr5OmJLs1SUu7osI7FAUiyNgSOF8JoaiGtdXO8xO2YuM6TCrAsPtBi4LqGy2PPaqs8nHAnMF4qyd8T8JDWFSFvL0+LrrnVvNPEM/RvNOdTmUBujSjYQ51A7LRgXeccCZNGmgyFG7csudXpDRu2dQAU3JSht0pdPbbHLTvGBxoMYyoNyXCh/wx9sfBtu3d0rxuAwjwPIpMa/EENRulQy+hfEeUEm6M3NCFgF0+RgG/J4cxASNbKa0i2hJVWdXii6GsusxXU4uywgS6we9rBbTW4VLtdwMu6Hs1TYenLr+6C/fUEK6D0bS0oBfga/kahG1agDHl06iYXkBp5N3GdlEwU1XBwAmhqBK7xi/ABx6b+bxvprK5EnK6TIOnUBJyYOqlJJyYUGLPg6fEwhrDAfa6OqYpY6+OpPUKoXIDF69m9GLwavEiELeNfydwDqC7NMpiprB2tCGEZleBTI6ASOVTwV7++YQBkAYQBgHFbwtCGLaB1AbhH7BDMJohS6gPZBOCTjehgHqafui3t5rh7ZMFt7NOuqMd7uiJpsfLgypeCA9kmZwEOAQcihrOQdY8SSN5FsP9md6dWoqpkB7vXSgT6Ucfdw7btLe3tkjntRtKtTyiNMLtTyoyqPEi4W5kzqivUpqJ9SWo7SLfcA0jSMD7RAbSLDShohyOi6qO2SN1a82wXrIiW07ovZpZIuWPBpQcgXw3a1OBsSTCXcWtJUjzowrsIqyYevlLSRsUdMUNfEaPv9K4+1Smd72opPpT76+bfvT7Q+ppExyfeoD1z7F+eSKr7LUg+HF6wkjdXF6tUxps14k3GXsy1LW5VIPgj4j2D2breD/uEBjYd5sMAP6r+pI4cZYfoob73CpWk0VFUO3OADwCDSWRWEkuHpi8+oqL8geosqOEj+Sx1O5cdetQCkiEUbqMr6F+kZF9Tio/1LqAG+rlh6ibonSJlbogYaMpwqIPAY77qBrvspwdCGLJTTcwcZPTTr6hfDa7PgGVGe6ZusrBKUgGkPuaaDyx5Exzmk3HO6NJuvNtqAH+7NLwGR2iPozIpgni3zK5KPNNXFOBvHLSSbvXgdZzr6xVL0GcE/BvF7mq+QdUB12hFD2jZJRKKn7F+2gdn6q0q6JGRS026JX7itZLUDjx6SymgGhmb/sQTrKKJP8GB+rlnugf+wtnD7wBjMhI4BB2AeEGMwUQcgHarbTsH6pBjQdH7IhvMD1zfBvtqVUmedtOEIkhkofHb9GzKOcGzkXqgMhOKagHCBncEFjHSIOwlJ1QUGidreDMI/pMYsKOo+HfA4WmCn6sxINlNrp0gQEJ1wI/R3u0tmod0CjawCFAiXENTIipIQs5TOxP1e9F9LuYReg1oVxle1qFV7iyM8CQMUIMYYQEMWMYfaRSs8G0yiYFSJHVjZVY8xNz82uOvPgz46PzZLKuxoq2LKSi2v/9A/LroX9jMKpLKZ7tTtIZKe0tlp8CVstJsBHkstHRBGk1ShLG75lUUK+Gu0kkr86qus2v+G6u9JsD90soAJRG3hybs+HHi4+OxGjCujr6bVHfEfbqXRJokm7kR77uLJcsike+GcR34fyKGR+EZVCmR3LNZHMc9cBSG8LdcGzrdQYQFBBWgt4c+7oa1EahLJavaD5rOCDmrFHcYpOq9zIEbKALqRFQIZc4wRjFn9KqAlRVSZMsXzMxyFmNiDxUc+00c/Q8EEDTAr7RvqAuGrIa4bW4ShT6yJyHhxWoLhgAMvyQRWxKiVNUJ5KEqES+pLXUCaOhgwCVHZwcHC56oWCWvjGC4bQ0zx4Yjv3UxABnvzZAhaKEuDwmuqpxa6y4C7iVGpamKOgjD4biPHT2h5CKJTdUUoYeREx+ml0buhp0IEGmeQPy6zcAG0AeRVgwpCzrKwehvvEi2tgBYaUrYbrbThgK7qvZggG7uUsDu/PzKhJxpgHBBRu3QwEC05UFKm6IEvGsxS51R0cGh83CpSpCaxrQJjGGx8dqprmxxaFbGqa9scqGb+eBIQCcaG0CpqF/BfFGxpwCZNkDpW8uPPG6xwnl2xoWliJvGX4f4C6G0G8xB1jwFUHsNaCI1xILaqwr+uNaQ2M8e5CHav6PpAwJh1RGHFQdwApG9QyUIfs6Cv50HrTO7AoBGBRius7qLqiopybsi1lvImAu5otHqZETXAnqRmrds35cAXMiP7i+bVoggTexym36Xga1JeAg0lppxg9mo2B0MmMCCDEmHsMMAknZI5Sab6HsDFxUmuWMcMbTdPbpqYmvqiidYnBmjeu5KPw3MnGaNkXMj3qiyA+tmbROeZupyOG8tPPrnJoXjlbNmuOI7GL4Lsa9zexwYf7GCrQ8fCBXu4G2fCR2vtrN6ZIq4rWLuRt4o3idigke591kooduS3mrczeaKoYccMwQBsRvQ4vQ9wEpBDMDtrjiE+/1oBiipz3pt7A/bPq5Y/eiy237yp93vawqp8gG97dO33oimL64Ehcnf2OiFRa6W61NtSf2vkpL7nUkqa8mr+iyzIG/IctLr7KBj1K0iHsctJb6JERge+twFeISDSu+76xQnNU/vpQbUphwbjinBw6JcGTm0tPLT3Bk6fn6k2v+rrSjp2tCUGvwW/v8TdmxBMf6LLM4bL4kDGIcQSup5Ifa74BmpmaIHesRsSykDTtuna9QEMFVyhWpik1g/2B/u8sTWr8DcmoqLK2VbrW7i1tbIW9SKUp0cjFyDBiZswlOZUZv+qOQVpxVsrb6rbGefDnpimasnzWhzhpml2nr0uLVimjppGpOlie2KqJ4bJIBdQUnynb64L1sFaLLGOtnEkDc4Gla7p7qc7gqZxtoissZjFv4a445droBy025r3DKWqGdFnu24xq8n9R4IE/ic+SGaNnjRl/rCHC2CIa0sBBwfusHC2AGaVUUhuOrSGss02Z6FkZlK2DMRR+cGYh98NGQDnQkze3XBSwXtseMdY8Ycc5aaVSkpLiZhOZUY9+3GbX6lGGPsNHN+xbGEnz1WSmT6GquWbT6ZADPqdQT+/4DP7MWwaaUnhpkuFGmBS0vpLmGZiYjlmZpl8DDAKBwNNUmlpvyDbnVphgfJm3EMaNUmdptaz2nNo/vpD6upuxpxmJ+6nPOmEW0Ujbnrp0Btun/m+6aUnl+rqZTnSuNOY37xJLfpN6d+lK1zm9+k5oP6i5/iZP6Op8ubVmJZyHte4htTsFkBMjNnKtCIY8XsenURgoeFSRZm+tbDDZiWYUoxG9GcVbPUqtpxSSwlXIQatLUtIxdq53kuL6658aYbnJpkgfqsW5xKAxd25qgcIBYFkNI0m6B8NNXmB51gZwXh5+q1Hnhsfvp45dSQuE06P5p6eXnnB3jyIWYFitJdxzmleYunRSTBfrSb56BcpnmZ3MmVmwFs5uemVcutv4WmZ8+pLEgFgRYySBIqyd5BE+NjwSsxG+of3BxwZobcmMkn+ZVz/5u2avYOp+kCKmL5i2YrI5xjvpimuZmEflDEp9upSmEAFHPf6DFttsOGydBeDuGzFsdqfHAx18fD8LuL8diAn5vRjhbdF6FLDA4Zni3nb22COY1m5puIBhZ7B3aM3b7QnidzJBmIAO5BixQ4BLERQUkdOx92ngkkaRAO4EmbQbAJyvaQI29sEQMvRgEAJPRx+HpAX0eAGjHAJ2MdkicJrI0H7Z1LynIbEhoYNUIEh5uABCgQs5FyGtB18II7ch44c/QuuvjqGWXUkMgqHiybzXmW+lruGIVkyZZZjY2ENZZH6XU/Mm2X2wUQb2WKGl1LDB8lt4dyzTlsHOIUMXSdNTmzOflLgm+oKp1dw+xSNg2jhsGrJhAAQD7q+XVcYdBJkJQHBIPIAV3IcF5PultLEAgVzECobc2g7UsHXdd4aiA5crtXFTgh2SDR00VzZaZDP5thBxW5U/MkxXJuwlZRhuQC5cxXcsslfD17l3sJgmYusFf579WyFYBWflv5aZXoVkQFhXZEUFc+WC2MKLRXOVzVJhWTAYFYX5Xw9Ce6T6xr+b6xeh/8vppZVh8eLI5ls3IXw5lsQEtzOM63JUzJq0sCNHButHWct0+VZc1WogK3Jigbcu3PUyDVtEeNXD43ZbNWxV7VctXdV+3P1WXRybvtWTFE5adWLVtGTdWbVl0euW1VspmuW/Vl1YDWJq91f/GMJ2oA6CkDTpcgRjwP6YTq8JloChQVVDsb352aLtIzXtKBpYlh81lmGchXLPwCtCoY72b14c+YtdMlnuTJNTiAJzCfrH5ARRrFWsazIDMTQY7KjbWNetQCdCYFbgogsk5DiUokY4MmHgQs6mAEbiuE7FCUANaGWKgBC5U0w456QN2OJMF8XBtYbkVp2v8xfB2SUHXerdYayDk5UdfDtJ1seFJrZiTOxgBnTddf0G75wFB5a+1uXsiHn2wXi+aX13Rj/HkVz9Zpqt3PFdI4kVwpGmbBedXq3WU3XSmYGc2cDZUaoIdZcengcnnrg5z+yVbaGm1+Nb+jAl1BrYAk17DeCWj+s1EENF6GhfMQABjKcMgspqSuAGfu3NOiTLcQmvb58+vyGLE4FllwQWcB+uaaRaooDwGnGo1BceWH60UmLEsFuqNY28FljYIXW+qDfb6tp2SJE36cBFCogF1cLWTSVovVqogqs2CrtjUOTiLjQ9W4VohFqF/WEd5wbfGiM39YGhbMImiId2yzEuXIGM2tOu8IrIRGfBtDiCQniyODzdfyKJbzBjdqmiYACzZrATN9lIe62iCqAe62+sEE+AYQEqIe7PsxlmI26WmLeQ7Ymz0Pv8WQVZEALn8mxY/z+ZgILPBYtsMgIHuLbVqIFvCXMhIUI4q9B6iUtjFbzatNqbC5wT22cJSSfmxJJWxZmJNs6QIQFNKsh3SOzF63Sk3rjoBiwm1qJa1Rp6ZGRowLXq5Qjtdzc2DROI4Oa2DwI3HRiStkSlyI9k/gEjKrBjMFDtcLSkdinuZ/zuq6RAczsgMVtqhf22b4NjA22hkWEBhBNaysCO3rF5ibO2Lt/gCu21tx7c1q7t/yNiiMewtMn7mF1xFLSRNpefrROFwRuE2N5tTo+XRlB+ZkAn52cC6kXN5Xnr5Q45kYO3SQw4ITieze/pl7f5Z7XqXKx6MFjXpVnVHw3rxrtb6H6aanZ57ParJVprQ2J5fb6XlsDpqbqI8qbU2wo3sPcQgtqzfWJfMhvFGZs0+bfWCPN0NHx3vNhwfBS/NhtMU10dubbMjJdxbaGQjgiEX77iFLXbW3r1H2dvUSd+leB6m+wpheBVU08ngSbt48FSzftnHbardsP9l68c5pvpPmlNxA2DH4hW8W5BdsC1MKQGVj0l13+AbkASUWgVaKO0qIUvmojVt4PdD3cAO9XU3i2MXdc2Sw0ONphak2IGSZWxGmBXKM9ruGRDqto4N9JiFYvYy0DdhzhdJwp1TgYXJlsnbUAKd9nujAdDPNHlW3JJvZvgZZ/ALez2948BmW4IHvaWRLR5FeCmMhvzNRHpxjfqwB1FxoeaHKLDDQ72Se8DsrHxBg3qNYh9qVcb3MmMv0pHO11vYnUvg+TB327I5lcN71JvyALE2N2uc43nUySJ43ZIytv42s8dBcmACxUTaA8L9iTZfBX93ubdR9IyOEHmuWV/cU2NduJGPgKFiVaPQmF5KOuiHsV/ch2j0TwZh3YDuHdX3vJvRsGHR019DjXIADoJS7jFy3qTW8Dwqct7+JhlOeX1DdRHB72Ax9ct7ku/4DXXdKBHoFXQu+g/cBTF+xrQ3G17A9wOjF4g95rCD3g7FWSD4YcvQA9jnaoObeJg+S7BD+HsS7EezaJ9722huY4Oaxrg8p2DAcGINkrer3qTXNDyqet62p1zzuZPai3YA32+MQ4oPLe+Lv2HaDlaP+Y7mcPZGQs0kRikO7DgFkMBK7Itsy6wo+Fc4O/B4lsfhbxBvYvHf5PYqEGk10I/Psb+E/Y6LtsXBZQ7/e0BI5084M2hApcpgjoHCt0WbYi7gk2GI4ZDWHgIwTaYpogPQ/dr8B1jdsEqM8Z3a4xDE0m+8MlUp3al3cqO3d6/v/7TwLdB93PAZMn53FUQTvpSRo+UW+AKtKzxApeO1FJGQCY18kqWb22GMj99a5lr0L2Ck/PBoz84m2nz3ts2rhHt4w8WGOyIriZ03Bw92m0H1g1HvV2NtKOOj22QfyLjQTMIHdr2EOryiqyCYlyPyS/m0G1yBRj3/hIbbYTBf/jbY9jC636+Hra2IzCR2KCAACSpMLWFQdwEJBs+ZyFhOWSBGp9GoAVy344mA//bJJDsq1C/bwFAOCiOwstnovHvx5mDgdd9/eG7WeCEk78AyTyeLCzzEXhIFiukeTHHA2IaUGPAsgoHrZ2Qeig4GPJD3cfD1NUsmJFcexS5qptqxmvdUP6E1E4BjGiW/uYVpEiUiizggUbXbkPOwqG0V5AgDx1NQpxFD9b4A4ICRhfITjT2bNcIk7aX/ot+b2bdDiqffnPajIV90kdlHbVVHj8pK4aDyQw2u7UOzNF0ghO38Z2s3TiQj72sFB/qwVs07kEDPdDdU5RWTAKrejPvNOM4yE0RxM99PSV50iNhfT6ledJLlqeYPXvRdNRATj4ZhUxTzT5tcJ4Hk7caTXgU9mO3GnQ0DZKVi+BgB60DO6bLe3DJ3mfM7MUvZN+X6Qj9c99JEr5iDAAwIXr0FKS4c9AHP+7wBB1L133xY7kd2Vd6PFvKc7swmzoyQKHZD4sllXazufpwS6Z/zLeHQjg3Log5KJs76hqARdk3loAND1tXWx6oZRPIAXXLG1iz55MbUyYEtBA0eOCeVUBxk7RTIALMV2VrtiQA7DEg/wcGSNVmiI+PbTkE0s8w2ZV4RJfqXzpNa3PMUp0MciRjqSrSOBTjiY1h3j09olhMd9YK4ioTXCwhFILvQJ5isk4RHpC7rFNfYwQ1TyVnrAjvqBz42wXbsou9hjxCqdX13xBpCw9AOPZyzfQDdzPMqB5c6R/2r3JnTXhBYpMyS8tpSSVfQFvMsyPG2zPhA/2pWNtqf13c3nT9zHdMBLps/vs2kfxK8wDzdL5dNmKUJIIwjyrzE9MVtqRZW39sE8yvJwhb0nPJAz083UEzy309gCqKPnb9M0df0whFaKKM9op8urbMDP8uIMqDJSKe82S+hMEMydSQyK7VOzJ0RBcS6s1+8gu1iu+8oK4JKfChicNrljjfNPzJ89Y7vFct1RypLE8mkpGcIiphxcK18lY4nzt8kAt3zyC/fIUKBgVwvXzN8kq9wBqNPEq8LECplria2Ch/0kKuC5eNhL6OvLcEKqrhfJqurCuq6ILpi8a6XiZCy8TaunCpa/ELpisp3eqh124oHztCpAoNrXq9goMLVEqa7pHD7HAupL5r/YsWuP7GwpWvjai2NavHC/4Sev6r3a+UKLrpx0Ovr846/K7pspUbinl6+UO/9cC+65GK6SmZLRKmSyYsxK18uG5xKAbtovBLoXT3Ikyfh+KfRdLnKG4sKFr2G6xuw866X+KWSkYFDzogNG7BLCShjMM65ksG+mvVHJ+IJuwii+z4yGbmlzocASsy9bPgS2l2oy7ioa6O3qR8q5q7ES2ks5uoR9Et5vkbrEfZK6XBlzMmi+rAbGm3IoUttLRSgD3FKRTmyDFc3XCV3lLpXRUr8hlSxVzig1StqufkvSsjxgAf45iptcYoQ0tEA6K01wYrOymKrYsnbzBDmUBXKVydLRhV1zHIbFDKq9LfXJsHEqLOWPqDcQ3MN2PLIy6Mu675GOMoTdnOZNz15U3cqim7M3cMpzds748aGSegvMoLLhPb3GLKa3eCpX563aCsrLBPNtwFJcAYBS7dd+ZstxV+LYLEHcxykdyjgey3sAncp3GUkL1Byhd07LRy5dwnLV3Kcu00Zyzd3nK+hRcoQBD3Y9zXKiIs93fLW+bcrBDdy0itH3vcJBDg98Lk8rbNU7i8rs9EPZO/Eo4ygPq5YnyoXnY8kKze8/LO+78s6RfyosuQ8SyyZpvdMPUCu3vwKv+9uAoKisqI84yhCuflH7j3iXhUK3CoPD6PSZSY80KobHY8zldLnYruTX+7IqV+CiqE9qK0T1WOTS6hEYrcAL29EqT6dB4c3E6tDg09eK8Bni856pKpIeUqu6BYrZwEbyjvJKs2lX0bPcIDkqHPJz2+ZjK9z3HFNKwLx0r/PfSqC8jKuyqsVTK/Ggsqx4eh8fhrK5L2vLVKtLxqXHKsyswBcvfLzcqSvMry8qqvGrzq9/K7aia9TkYKrvFQq7KHCruvBh/tLSH4b3iqRPCb0cfmH1bCQQ5vRT3Qe7E7Koqhcq3b0g2CqoJ8cTiqgNxO8So+BEu94qpSlqr5+SOD37O5J70LZTUt73arupT72or0as/1TIp8ZSBMB5VLMCc6KAYkC4S2UPTStRmwWIGkzogc4HBlpKQyS/bqzEBCXg4gATCyCoRSRV6qRM2SfA4b4EMb3krN1br4tmrSWBfHIJP2C6QMZFsTUAxqwMptz1wM3uAAuJyKBdFuQTSCuwbQAAC0RATbJtAIrLZ92fNISoEMARQEAB5BKgBgHOfHISoFgBDAEAFueGAC58qA4AKcE8BJQIN0WeSolZ6gw1nozE2ednvZ5xYDno55EATns54ufuQK55ue7nozCufKgdcHOernl57efwgN7E+eD4K1b1XpqharSuzqrJoqLsfOsh4I0r5Jininq6PyIm3qzgrWvPqq66MmRAXwMZGootK4PilVHEpbOuir3JxvwbswqSmVQgfouAUx2UFc9J6I7dBuTt3Ea2Lfq/kaIhjuXw+CDoPPjtItEayjq3NEaxzc5GFb3l+ZuJbgV90SgRyzf1hhRnGu7MFDUdvlHNRlmtRKFR0dsEHwZDxIxj4dRzY8OCep+fh8mpiwH0goYsjvfiVV63bZrJt9VdONNau1/gw0t+Jsy2/rqp3FvN4g14CC0rglItP6e/E1NQ99qDFTfr+ZVdmXjXwuB9ePXtyOHNAZoQYkmSbubKleeRjeMudGRqi9APkAlVbze3Xu4ELfmAYI4tOUGpNcOnRkuOqbfu39t7LP2lrliTWQ+6ZYGWYAcZfczRlrPEnf/71ffcQx34HIWXsk4WBzZXX+8bZHXud0DuhAO3pZH7N3jSngvMD1pcHedQIZaTWIVnt/XeFliV2L8oARhNsQt0PHrZkMhNyFlGmICw/+WYjjdf5WuV2rPZEeU11ExWoVzVIhXb3tCeZCoAR899AqFvN/0y7OGC5wO/o2VaQuj3z2s/Oy+RzeEQeOY1Zw+I1/GmxeY11ndT52dig8+6BJirWFW+dx42n2xu5ofOFms6vPOEtVpfZmCY2H2ashphLVYI/A1h3NxS8z9uA9AJ5RlAqYmcEDpvd1fYySuLEPjoI7APQJNbk+d3+IfWX8Ayd5GXPMw1lneV93Nvo3Httd6bexAR7Y5oWsgjpPUGPW98Qne34LZBJSk2WFVxGP5OGD2ts4WHaQ9PpNz0yKocYsM/TjYz5EA1OqiAp5MPvN9tmfEpZCO3ux3V+uvzahN+Gw2LwLke3oEeSnc+4QPQXC+eXpm6i+a3uV9FA+oGEG9PGNZb0MJ8aXIF2huLjOPswEpSRKUtUob3V6NTyKM92ghLxFGA3eLKAEblXERU44Y6AYbARDM9yN9GvMtxq7WO+rjY/bOzt7Y5C6XRXaF8OZw4kzHeCjgU+yPFThzpa/UR/5MW+3+6EkVOIPh6JgUrsfUHFRDIFdIvgfX1G0MkIso0BAT/+pWO0UhfJk4qD9QcTztUbIJonfk/wXsFViaHMLI4tz4Q4CG6qwZQHDI71mT7+i9Dn15tOIYn1+SZzZT2s78Uj7vzHhBaLnHtnTkYJPDHKUSIRq+0BiKEL6RpjjZfAnUtyKs8BMHzHcDboXag6x1MFxq8GEPAuqmnFEGvpUj5pjudvvP9xKCk21pv/fGG6oshZZW2U8mLEf4gblIV3bkzl81y5qeS6rGRAeEOe7M9lMAMA1Uk2CFfc93r67h5fowE8OI1fMcncROSU9I4oD46O0j4D0jkQOhw7SN4XV+nxL9aMf8w5N3I2oNr9bByUPGoPM0DDpTbyAYbAp4ehCz8GPpRv1Gg83f6NtTbOc8fpwSEd3jtZrXU6Up9+RkQL/T4g2yP49+q01b+v6wMB36D+Pfp9by/c+jr+jakvgwCogZfjMDl+aYIyE1xVf6AFQt1wZiFXAB+jWj/gd3v1CpJ9AHX4c7GTwWOeHoYeVUMDM5DTDhrXh0L4tibf4j8ZSyNGAfa7rD1rpSGo/uzBLfzgVNqayLgAD/S6LY8X+dbtNIv8RD1f6D1dmuQPPdEYaYVv4gPIPtGUAuB/50OiiKtWmFt/uTnA49Ig25hSd/i+TaeBvuX7G4y/GXrL+3irQwdFpPggo2Aw6xCkz+NcEXO7xjn+MqHpCibV9+eFgD+yMXJWwAMEgfyFo+4uH/AACH58zRE3+me3syBgDaIGCCNuM3zBgaPGK4AgVX+lKHmooggr+2/y3Mrs0gBTRD3+FfzR6+gHyy6MSP+qB3p+a/jlqgfn5Q+wAdeuiDOAC/hb+CoC0sQfmNsLUFlA9MUnck7gssMCmx6+JmYCxjF7QQFzAU/3m/IUgK0smAK7gUJUP+JgDUB61jESgtWgAV2AUgqYEkS7amYALslUBQgJ4s9ANl+XcDBqzUz+E8AG0BugO4sRVn6AZwGjYLgNpM5f1sB3cCqczgKsBrgKgA0SHRAtaneiDAC8Bl4Ul+IoQjUv8kiBK4Ul+r031ANAK4uoZzTk8QKGQNgOL+Gy38BBgEkBgQNE4OTxwspPXNULam5QGrgyBhSCyBiITaaAQOkBUAGdgg4mRQlQMMakv1ZqrUAq0Wvww6rNRaByuUl+lWR3+QM0qyvQMIB3ZQEMhmkGBQgwVwghnyBFlhuMz9XhAcNU0ATRBrY3KSBAaABGBVQJ8B2QMF4oBBCWGHS6GImWb+mwJDwswJcWlNRJyiwJf+KwORYawK8EJwL6BYwKWQvAL6g8AAeBowO004UEmBcAyO6cAHeBUfG2BdSXE40QyDaegRE6xwIKBPqFAgZwJ4s+TF06VwPGINwPoAdwPQA/wOhMgIMz2+U32BdnSvmMP20BoDRGBBtBqGZ0yoinAN4CddF4BAgPeBIgJfSYgJOS4oHeB8wOFcCV3WB0IMhBCKTV6lwKmSuEjZBcwMMW2mm5BBtl5BPqF1+UpwE+T0Sb8svAfAdwWUQEghB+9Yz0OEggh+H11QuiBiMgmPwZ+t/1gmj4CpuFgA/+vMy/+IXUoO7WEn+uQDS+7/0reuN3lChoPq6w2FsOm0TYAHnBF+qUGJAa/3IBGgLpOYCCbStBzoBGIPz2fhCYBw2EdBIew3ggl1FB3kFdBcCUncKAx0+lY1dC0p0gASkC5YykHJy2wzJIlwN7Q4liuCXLG2oI1kUBGxi3UhuiK+d7RPAeYG00clG0Uk8FswPSgLkoe1u+2OT4cqgG7+jKFyMUoj2BvojJ0s9E2MswBLoKMDHkYXQ1i8oJ1QewMIOnwGxBDJzku4NAaGdH0D8lAG8I8QEdAToCdAqAGjBAAP9A9GyzWSqhU6ZwG5WdhCCS2lju+Hfyja7oGJAJ626I6r2aIlQDoAV4NqARsUlqMW00AAAANNIGgA4aqBBlKDaA2iP9kWYP9kmiB+DHwdGDDDCJlhEHGBvnq2kmABvITRlj9hAFgQlgbH0WQlNgsCJidu4BphNDtRAJsGQRDIO4BPAOrpWPrUBxEFzt05qBDsMuuAzooW0jgaACZAH/sYQPjAuJDDhOEOKkSyN4BHpppteFAxCejrH8suF/AKtDIA8yGUcmEDAAaIVtA6IbAlmiL2huUmgB2/jWCm+onJWyiYA8wACRFAbFFDtEwMb+nplOEGtoc5P9leIbixCslzgmiIH4p2uH8hXtyBh0A4c5WheC4QUwBIYL69zZApN5KHJRYIaHUp9kkppwZotofuuCSwnp9xfmGBMctPIJaiUdnwtpYAAIq/ANjQ2Q8/6FIYiFxgUiHgQugCQQ5L7V7BFZQ7UDZUQzHK0fdyFNEK7C88NzhLg5ACrgskhDNNgBw1O4DFTGH6yJSsavbCTqWgvl4s3WTrfoEqFlQ2fxKjeqYn/BSC6dGyETqLAjEgLU4ngOGqyjDDZIfesaadGyECHayGeAWyFEcGQC6sfzBw1T2qiGO3Rl8ZjrcQwXgwgfkC7AbkBbLccaOJejYyARlr5Md8QeAAIBnAQzA6Q4eCy1P4D5xUQbYoEgB/ARI5dKQRCUfMpjLQx6FqOXYCnMG/4kfQ7w7ccIDsfMJ5xPRqBfwMeD1VM5DcQ7I5NEMYJBgVqFHoPb5CxDuTYQ9XQXZHwC9jYIAtqLuiRQsdDK7ABD3g7whyUSoDGQD0FOQgMH4wokHQnfUAYdMcG5gz/CeMXVAS1D0G8Q5Mg0wABB+gzx6/QyYazgQPyHAZBI0wOACkwjfYXjb5RHQxJjkndvyUnemiCwm+gnQ7QzQHejYdgZIBm7UgaXQwfaeLLk5fQ6O4ZzAGEGgF3Y6DSf4GgZqrkxQyG6UOWEeAQBaKwkIDIGb0ah/CpTqdFgD6wuBJwACSEjIY2HMBG0DEAyFqQwc2EZoZ2GkzUXbhqFgDs0VsAGgKPwWcf7KCPVDaW/E7oRSbXINArZRFgnghuyB8D1gvhIPfY1xLmGyBygk96wXKnb8gPDbrQsyGk0dbCttDcw4lUyHuHHh6YHbSwJ6biFkaMsyr4UnoJwj2SZwoaE6oF6G/QpNatwpqFM7CIA5sS0AtvTLKTUaKFLPYPBKgOKEJQw0a7QmnC8PODow/IlhUcXiH5kJiEyAS0JJlT/RNfFVJ/3eeHDYbGjCpGYbYXViJMMFraVjUmKGgJeHONdrYHHQ+EBHCWBjyHoRNEOGptEOzA3w8mLggGEAxg9i6VjII50JQaEdBDuFqOduHydbiFvQg0Cw/G+AVaC14+JUToNrC/4VaKBGn7L4Bm9XzJQmL4AlRRBEjIL4DIddfaPHCLKfQkqob9TWH+woqo6wiHoiGVqrWbQ2H18UgCmwvdhUcCLIIACLIcMJSihwpr6zfN4x6w1J7spB2HNIJ0DtIdxBsImWDkxbkDcpBgBUIllZ8I6zYigIRHcIm3hiI0cS+gpmpm9XIDwInhGKoW2HsI8mJMAhADIIwKjII5REkIu2HNER8HcpdBHaI0BbSI1RH8IuBL7AB+G4oMwgDbAODzMDNCKIuxF1ALREPMdBHvLKbQ3wVDgRZcVKfxT9gRZLGG0I/xEDPU8iMIivZJQh44CQmFCkzDNC0I3Sg+IkMh+IkZABIpb5eIv5D0I/bR+HFhGdIFJFoNXC6dNP2HrpcWQzHO6AGgeY5UvXuoZbWBxDfXq6NyON4TfW0EuiSiJnw146/NNiJURYADcgdKwwvOSjteYhqURKE78wi069w0RwSIKs7ngPuHjgSaifAS+EAReBBSIcICLmIfAQiK3DvfFJAzI9ywdQCsbobbg5/RVsZtABv4jvUoYHImEB3QPQLmIc0HMZfUFnbG0GW1bxaB+E5EQgFgITPCECBTVKB5dUOL//RSLGoa/iRlci6L8cRgTpLHBiXdS5G4SS6dxZ3LaXV3KmXeW4g3VG6GXJwzGXACQ6CW8xy3aYoo3XErXSSy6y2ay7R5U9J2Xc9Ia2Ry4RXAvIp5YYoYgdy6iAsnK3wby6uXcvJ+Xf2wBXIW4xXIDJ0o6orhXRlGRXGvILFevLF2RvKIZIEDJ2NDIpXYmpKxZqCnIDK6AZSjLZXaK6A3JYo6FRY4oFZY5KCepGS3Im5pODq6GOCijvXWIqao6gqc4Gm65XB4rUvc67yXbSpxvT/J3XQm4PXMZyRFHa4KCMR4xFaxx2oxQpr5MpxmoqOSGo+4odFE1EP+GpHNXMq6bHFJpqom1Eaol1GdXBq5FXVY61Ilq6yFGZwUFPVFdXf1Hn5G1QDXYW5A3fK5nXMa77XSa60jRl6Q3K1Hs3PFxxFQxyrXNQpsaHVHOo7a6uon64OOHNHqFNNFHXeVEnXRVEFXMa6vXGqF6vaL5s3clHFoxNG2FH9r2FStHyFcNGGOMpwdor1Ei3XUGRfRl6s3QtG9o3jL4uct7e5Hm4U3EPLLoydEZojma/LBSFKgGdG8zWro9osI4c3RoCc2Y4qwSEwAjwhG4XFc9G7oiICbo5tGv/J4pGda5Fm1RKZHor4rE3fm7Eua9EYlD3Lfo5FAPojG5ElOTL5NV9FbFRjofopEp8ZUDGy3NdHqyWDGNouVHAYhjLa0fdFnbILpQYqW74uHdy/otFGslXDGC3TkrK3O0KYDB1IE/QUq8uP272le8qHeZAyNCKUriuWUq+EY27z3UKByufGgW3ZVx1Qa27quLUruIB26yeH24u3KkSpw927EPL27WlGKDClf25OuWf7OlDj6ulUO7oPcO5PlKO6lVKO5BlCdShlcDAJ3KNy/uFO5h3BMoZ3OzhZ3TMpplPO7PuTMqIInv6VgEu5yUMtyIeBVaLQFDy1uau7llNjB13VtwQqSeiN3Zu7SqWhSt3Xtzt3NSgGWbu6dlUdx93KCB9lIe6zuSsxw2c0opIVzorucHBruGe4YWOe6m3PdxLlLFArlQTzrlcVCUeLe7XuECoJaGzFHlCMpuSM8peuM+5XMa8pV4S+48Ef9wYAG+7AeThpNwB+7r3IrHP3YyKv3HCjv3cu6f3IB7oeXe5gVXDzxCfDy13UB4keBfqIVLrHIVDNDMeBwhYVCbg4Ve5pseAipXRL9ilY+jiPuITyFlEjGLQUTFPfU0oe3RLFOPOKrkPO27vGTiqeobio0PN1x8VJR7uhRh4XYth7xVdZiADbh4yVWzx1Y+zyPiRSoCPFSr/wNSoaVZoSSPcR56VQX7rpaR7qPEyq4beR5WKSypGsFR5LwtR4g4jR5d/CCLaPFyp6PIrwGPTyoVeYx6+VerxZAAKrNeVrzteWx5dwCKriNV7EePVh6meFx6HYl+CCVeMjRVDx5pVFxLXYvx6JaHKqDGdbz6pJMohPIXFHzcJ7P9UczJPCqoQyXVzVVAGG3eRJ75zDACPeGwbe7dJ6ySDqrAPD4Sio3J5QlQGx9SWAw49eQF7KVfBi1TuJUQSgCESW3KpgVcBrVOiA6TLuKHVMVGcvPuJV1bupXVVBg3VUl7O4m/jdFSl6ZoiUI0vWnx0vaQBBo/IqyvHY6svH3HsvYsjdFUtj8ANV5lYS5EVvON5PxduqI1dcD74IsD7fU8jukKADZLSADhkfPFhkSRIF4vPEotQDYL4MOZYZGmIEZBSChZaLQ9jDarw6avHLgWvHbPdao9jXyEU1RfDgicECsACgCtQHaICfffBO0cp7GqDBRanUeQ2gIsyD4w4yrmA8GiQX0Di4MmA7GdnSGQcgDDpWVh/nedTjAo/yvDfr5LHdtGDoy655og0H5bK2o+45N6nvYCZ942fEHGGaC07ZzGs40eT94qQBD42H5ZjeH6iYRH7D+ZH5fkFd7o/AwAaggXr8RXH41zfH6JQQn4oIYn5jwUn40OZBQU/aADj+e7bsNWn6P7Q1jP7QmjM/bBZdzSuA/7daZDINhgkLdgYIoRyYwAcgCocI5LQ4+FLqNQsAtEBgC0Ep5r0EwsyvwkxpHJFdL4sJgmnhaFJ3w1/H341qDcEuBr0E8ECh7IQmGNXgm7YcQn8tEQlIJdgmSEioJSE+Qn0EzWrSE6lr0E57o47ZQl6geBKhvLQmU4Dgm6QNQmPA1UguUTiGCcRrKKEzwAH/dXLAAn7HNDMmgBbXXBs5KP4LwY/4PRA34pRI36VpTHqm/bRrm/fdb3nK7BCxOBQCEsnTifUuRNwjoJq4Loy7YJNYxE4V5GHHwBrgkw6PQrl7Poxm6doqL6JTEbB6eX6EeQ4PAXgqqEvorImMvHIm/LfSA4IAolo/c2Q9RcTolEuN45EhqFd0UqEeQrmEL4P3oZHWonSlI4GMXCWCH4pVFjXD1GygC1EX4l0Ry1cpEB4qpHqAZNGlXMJBxvVJqR47iEswkPa1E0hRqdG/Ax6e84wYZAKDue1gOgDwFow+QBDggwCiErujxExgBd0ZAmT4J/gTgrHJ8JApigEGMAjWVjTkAMmHp7Cv4wEGmAfg6oGZ7GijRwn2TgiGfED4+HwnE/QBxEp/FuSXbCawQ4CzI7SypgSCwm6BSyygRQDLsQyQHE1GFzPKJFPw3ay+EDNALqCBBjyR+H2fJf5nIX0ahOQsAhZKT5zVFKw28XIAQifD4VQQ3jR7CNau4BkkW5c1azXMJGW463G249wn7nNfwfPe84byYElSAE2bMMWUA2gJmISoqIl/REQD8AeIn8AO2ImUXBJQABEnZKP9QwWFElokpGGJMaNgEdHEkSufElgnfEkkkv5aGscknFwSkmhZeno0kgzJ4zdkncfJkkJlR0mcktkmq4bj6WUQww8k5ex8k8OH+HNfw7ZOhJmgStQsSV0DMuNU7wIB0Aow7PT4nYfBlPDCEQiISRSIcfSZpBUBLSEoJ0KduSOZG0BjACYD51MMml6EACySMeTOgfb6ggTwAXycuScE95DMJTsD5SRKghZWSTOgVcCT0aMmHErElBSWiQ/RC06MAJNaMAZUkyQl4CVZfAIvw53ifLSrKDkl+FiTVH70bb2SF1NbZQrOGr8QjUp1LQTRPQ2PGLkkKLLkjhgPqcTTTCBz4hpCU5HoFP7zodnKaAIMmxgq+F9oeMHqcQKRfgViQRkxohRk/oAxkltRxksYgJk/jhJksMmESE6G2QUDGLyDqDhAJUC2ILOR5qIKQyZdFTJydMlvKEGRZktKA5kvMklwY4mFktvTFk7nZlkhviVkgGCLyGsnIQLXzpSeuRoAVzwJSSKB8VOAAG6OEDOgUuoBiO5gekGQCcaLpRqnPioNk2dBNknPitktuDtkzElGmB8ndk2sanvVgn9k6yGDkyrIzk+aEbk2nqvLXCDLk/L5S9b96NQKSkx7GSldHMKK7k5hFKUs0mzXOGr7k1XD/vdImXxaqGNE2Tq1ZLXwyRFBAjkvSmirE+zTJUDHoYs2qMdFl7MjUQbIJDw5giPwErfa2EFHaYQ8rAZGr7LjC3kgKShkyCkugJ8mGSeBDtKcFjiSfClF6ZMmz8GCksKTMkKWJClRAfMmoUyClFkksk58cskaKKsmUqOTJ1kmQBEUuKR8VA3Qm0Z0DrgQCnXHNCkZSdACkU7KQUUqik58WiliSLsr7VATjtGJp7gMNin4XDiktktsmvkjsl8U2oC9qWUn1jWKkjvOTJiUhbDiUmSGSUnNj99JcmJ7AjoKUuzTKUpanbkoOKnkPckAKA8lL/LSLHktj76U35Y6U+omZEkynPxMynwECyndwL4zWU7lbOrTkb2U8DHvFMYndwOVDuUnyZ1LTKKnkq9C+U51Y6bDYlp0IKkpKEKkPkmTKUICnoTyCskXyEhBNgUnqsUEqmZSDCmlkvCylEWGkAwZGnoADCmNaYiBYUsT4aYSmGJgAsEA6QskXoDCkDUtuCfQRqRgkkwA9aJNb00wclpdA0m/UI0kVQJ+F0QOEkARCXoxQWBECkyOGXktoYhkoGSQU1MBpgzGnIQVihOQbGloAVGktUjGl5UrGnk0nNyxib84mAZsn2YSeg00hyR004gCM04gCHHS9CcRNmnMY8GQc06UpC0qeZcASGlUwiWkHwLU7S0khDpgKUFhTQ5ToU7Kk0UxWmGgVGCy03Gn8AfGlT0Hv6LyYmkjWeQK9Ur1CU0rWnU0hPC008amLoGECM05rY7QfAKPMVSwJIZpF9EykzR/M2nYoGHIskVijA03ohW0hMFlrNpJ+QTjR9oN8lVEbpRulEIBMSBoDBExOT+MJdZDU3imy08HLrgSKAXPT2lRlJWFu4GhYd0kLLd0yimQAMmCVUlNARBWcCD0lWmNk9cCa0rim6k6ukjUkCw9k094VBJNYVBQclCwOaGqko4AOfHwAxwXvQYIGCxL04an0bF/5vZS4lgZRgEb0k8LKbfaEyaQ2nsRZyDS07bLaU5OAlJKPTURYJIQgR+kpaQ2ldbV+nEAUJKVgX0iL/DQDOQIbbf0iECw8MsIDku4A90f7J/0qSYskl+GguKU4209cCtgWfEngFuln09um1U4imd0kem90xdiew6en6wIeld0nulj0nPh1IcGDd6GemZUi9D9U6OkEM/Um60+OmxjVsAjvVsDb0iSl4TS+lVMa+kIgRgGnwfACPNARyIMnNjE0Q47AM0BloMhz7OQL+kskEumn7P+myMwBmn0N+lj0j+lQMtJJgMuBnPqDFiGYGRnOgFBn/7WEknUjBnC0tUL2yIUBpMPMBVEfBk8UzhmZUtvQkM2hlo08hmfAkwDMMiGml6Lxmj08embKRhkD0qhmz09inz0zimDU5GHn0rhlr0rOEaHVYSQk3oIyISoxj0wRkZjBrJl8M4k30gMEyAVYT30g+AyMsvhyMl+n2YEBlqM/RnURQxk/0+jaaM8pnaM5OC6M8Blw1SBlj0+pmwMsmFgrO2I90PQSWMtHrsk/96Ao6BQNAEIH1EFxnXKVunxMwhkeMuqkkU4eneMnPi+MiUj+MyJkLM4hnLMkJn0MyelMMzZmBM1hkxMqmkcMrGSJMwSnJMvkByYCI5yYARnzUoRnjEK+mh7MRkBgoFAKkkpnCAMpnp8Cpk6M6pnv0iBmcZFRn1M9RkCOJpk/MlpkKMlkjtM5RldM5z49M5fafLfpmSJIZl+EEZmnUsZki0qCknQSMnxIPIxM4WZk9jBJlbMuKTBM3unpgAJmjU4STHMhelxMolnzM/il00iICM0iIBTkhaI5MzE55M0Rlw1OATMsz5nURf+kzKZ+l/MxRnsk2FmqM7bLGM7HRDMQzA2gRBmoM9Fm2M62mN0/AB+4L2A9/WWl108lkbMugAR09ABasnKmqsgyDqsnWldksEmOAEWGQBOnb6cVVlG0smFlrYqC2s/ymYMxunmyDsCHZWuHakTVkJSbVmUs2uQXoA1llkt1mtGTUxwgO4Bx0pJnNwgwBkAcrSb091l2sysYOsmNlmMzFn2MhBB65duQAQBAaLyP7wugVsBu04lSLMsqnffSqkE5f341Uklko05uStyUtnhATtTE7C5nfwvZFlsiVBpM08otsj6lBACl7jvfoJmESGFnIEUJc1COE/vfxTs0V2ZcJDji3w98aJ1F0Z3JXRpcApWK9jFtlvImYKXHRjCbjFGBCBNKQAo8uJYs5cAZs7JQTspU6pIUSElKDulq0i2gmASKAhZUenhMr2l6gRhlDKWWnFsiOC1sztQVswJke09jRvs/34Nss1ncM3VAtsv+AjvIDlc4RhlmwBbB8nKJHTqdT7jBLPCDsybYsI4yFzs8dnZsqdkk5blL69KJHhMuzCMM7SnOoCILYkeUDyAKJIEdRhl97OdmdjRWJn+Jdl1sv1ArsyOLbBMLJQmI4J/sndn8fYKl6CC/DE0GyIPnCICewMeSIQKfBk6K7AIBDMSy0jimUdZ0AUsw5lUs0vQGsiJJ8c+0mVs/Vk+s7uQm9LZTOgSTAac3VlEMuKQGshJTovHyS2QKGDTgPVloANhmL0txnnM/9mRsjoJ+oacCb05QDTgNon6ZHGA+fMeBGwUzkhqXekcs4RknDblm305zmG0j0FcUGmD7AX4ldwIz6ecgwARclmGGc6cA8w0mETwuiAOsmEAeWe6AecjZyLeQYzxsAgFNNQMiDGSRTec4JJLoKCGPHCfImjVWG4I2Pry4uqqK44vjojB1mHgaAB1Se2SxActaPAbACIzZ0DTQwvEIANwThkdrluWLrnkvfrkEA2oBlcluBs8QwzYAdpCVcrcy/QICHmybkCKcpSi3qYGRzcgKlKaV5bJMJblQAJdCoMoNrsrQvIusrjnmyD1n5GFTloAA1lo0mTm6clhk5uQNkQyK2ArQPhThsxtm7I+sZiQWcCb0w7IJs68liJDrnF0DmHOsuxk20i/CygQQwccN6xyctvS3cnPj3c8znPcyHk9lMYCRZaiIRsy5lRs/QBpyB5ptsqbB48gHlr+JNk9lIGnBktNmicmIBb6A0jrGDfSGab1m6SWSSKcszwIfKJl9Uk5nsM6zmdkxlkAc2IAYRCk7Wsl+D88zKprwHlkc4QHIcsyrIVaF+H40JogoDC+lPMkRkvM8Xm48lgAAIff5hcgwC8wxwnQQqsBo6RalrbXgG8gbzQeg6XlwANeGf9LbQLk8YrG8/QBzKM3km9C3nBJckZl8cebT/MhCiDR3nfkS3n9WBLR9Mzxho9MclVJZHC2fCFnQABM5LLZOAJnUpLOgOZT1Mh1lHqaACJ8iLQR87Fax8z0jYAOM5Js21kx8wOmkrJZZUkHPmGYePkZ8gvnrE3pmMsFzksAbx5rwRsIU8iHlicrfQ2QEsEr092mLM50wGs6uEtk+FRk5Hv5t86llPcn1lY8ptnfc/gCP4jN6E88flOhCo4i4rHGZec9QA4JyKT0K1wckk+gvAPhix9EQB8MRo4K47flbQVo6pQbiE+7aWA/Q2payU6WBqdMGHfrO94yZV4IyQ+6GPfdObjSarkBua7yYw7WGH8iMFLc8X7H8t7zbc8NT7cj/l7eBvkNADlB45YkCHZEawDWbNmWwMZTgyIEinsvKzrrdvnEMi9kxwa9nrgW9nEc8IT1mYjlPsz7nqHQDmxwEDmxwRAXZMxXmNZQLkBgqAWyMKRk6EHAW4c4jn4ck9nrIC+AhfaBGWcQzASuFpqFEtFbhM5yA90SsC4QRJGhwqVlZGXdlpsmgD+YVqAmzQUQXwAfml6STn6daTk6sxnn4aFnm0kvTmZSA1lFMkJDOgIsCOMoVI36dnleoELJDwTWnNmGyAvkuZnZ6aAA2pBwAKClAUCU0fk6ofACSMgnk8EdwWucrXl6CqM6+cygVcslXmMA7wWhcqIDhcyLm7AIUBJc3XmPHbGIjieP4uc3p5uc//YrvFoAnqH6Y4lMAg+C8IWpCtJJ6CPwXiCrdzxCvap9MkoUa5Zk4tNQwxNEEMAL+Y7noM9kQXcAcnlCjPnpCqoW/ggMB1CjDonc53mgCvQTSChSFBWaGTgcOXxd0ZsAScmJlScn2R+s1AX6ctTmaC5TmfsxZm6CzxQGCowXOM4KymC9ACWculnL0kflfctwX4AUtCT8rwVHCnIVrwPwUUCvXn+cnbDUCmmDuC7rlhCteDJQSIWXC7XnJcvXklCkHRJCuyEpC5EIcC0/bpCkHRZCpUnJCrXn/C0pIFCoUBFCvplDc5k6SJEoVHc7oUNC1Nk20qpAIBE8DgUpWnIQcuQ0ABoYxwdQWqSbnb4WSWkFs2wABs4fmEC9npq0pNZq04nmRwmGgl0u8lgCzsAHIsiSSOGOCNIQEn3ACYWySKYVI87QWqcpnn6ZHPis88YVbCizmc8qzlt09xm88uzl/RUgAtiBT4tic4VXCyyx7ZJk6rgQSz3AP85EVUAgtiIZL09Wog/gMiQtyGQAWmUQaBC6rJ3Cuagqip4UxC/lnTgb4WG0sEW5C+vl68oEUzqbIWuiuvmzkvXmKixLIeQtJK9cgJKrRNwRBgQwChgWBZ6CdIXppGEVIsgMVIizMA9CyQVYM7hDHgGsyo2B1m9gfEwtLQUU3ctTljyEkXYiskUUipnn7CogU5i1tknC+mhVi+kUARbMW4AXMVg85VlgWO7p1MjPmpJLiiV7a7nKCjriqCmYWFs4ikGs1blRAQOliismmPcuem0s7ikyimzlyi7HmyfQ/w9DQXnP4peCHMQzSqih5mg8f+B+PWWAeZODmGsAqrOLYdlCuJXkBc4IUBgjcVWJe0XvC2IVr+PpkiZYMXkw0gCjikwB3GPwj1C0ZmpisAXNsPUCIQeVRLc5iBYWaiyJQXkUvixHlqC/MUKc3LlKctnlTi6Jkzis5k880akuCg4VzUOQAKfOQBbigIXXC88W3Cy8U9UbCW3irkAfCx45yAdOYu8ZcWuckMx+ix47esPpkUSvrYucZOBMS5z4RiwPnYof7L6AR/Evimxmncx45gYRiWdgZiU90QQWRilkg2gNiUfiwwz28r5BfijFlo/GQBm9AQa/QHTC189oXNEWoU8gIJL0bexyu9FRRqSnWjgiriXNEToU6Spr5Fw3bnxzYGTJMZSVmzGQBAVNwT2Od0j/ZfSVUkNHoKSpVkFpNNkugepAmzGyDOwVgBT4C1T5ivsWQSwcXyc+YWwSicXmcnYWzi2wXzi1CVgkjsAT81cVuSVKU4S9llWi55lXE1XkuSagAa8iv5a80iX3i6BFLcn6ZqSn0W8CgEUWeCqXjw1/kS41zh1chJ5EIw1g8SfP5Pi1J56CRGahw0naA8vpl2WIAUT5JMX8S7xpugADSZqRuHyi+sZE6BT7xAFBAHQKSHbYPoXtwS7mw81vTLCwsURS2Tn+sofnCi50BugS7k2QD7m2cxcUKi2NmeC2sXlaesVGsbMU3SlsU+Sm2m06QYyqobnnEgKrDlaf8kxwegCcnMKWTC82TukGilLPcCUiZcMjAy7KwSi+KXIStvloSysXKQKpwKfBGVNQxyhgytUU+JG4VwQG0VkIZGVSM5TawAkMDcDMGVpJHoQiZQmWJI1ADEykMjxi0xmDkzyWAysaU/ivQQvSjUzl+OcVVEdIJVEQMbSkX6UBS6ICgywGUtUkGX/SvkXdEiGVxSqUW7C4lkLi1wVzUZGWBjJGVfSwMYeQ1GW1E9GUX/TGX5M15k9UeWUIBPGWlMgmVEy2olpJFc6Ay3xG9cKmWWSnbkIMpMU6tFMWrSlmWSwAEjvS1TCVEYkBeELpQ1ELIJOyskVt6PsVAy8Ub0WEWUvi8GXijSGUISjnlIS96UVi9nqfSqpweyxWXxy7ygoIMmVrgndrbinKXK8vKWMAuOWnwZOX6yr5mGy4bYhyk2UBwMmW+I5ziWymmUysumWfihmX2ys7m2QJbkt8jnRxIRyp8KETICy0gABygUURyswWSyhKX0s2UXJSgDntKGQAKfKqW/C3CWPHTWXYyseUFyhjZl8AcmcStcGMytbjnk8pk9aIMWmDf7LFMLeXRgcVLDw9big08Zl6CGOxkwdOEdwPwBzeBKBbsQkV6SCM79AQOml1BilAXFYwccKM5faQSzqEFAWD8xKjPc8+UxykI5hIWECPZPwARHEBUwgMBXXZAuHG0iKhtwDOzvgG8AVQZPF6g0om8zNPHZfWL6a4ATCESUsAugRBXHvMGlnyq+RwgUHzy/UiQxAO+XQStTmPyqEgtU40TGMRil+gFda4qJjBwgKUg/y5Hlqc50CAKqkXAKiECwgchUQKwRUwgchUwK0U6A8iKLCEZBUxQVBUOUrYqYK7/67wCzp4KghWDeBABiC1aWxIKfAdJIqm2QbPFdynaUPcpYXDi6KUKgZ0CxSqGUDymGVAKi07pCiI7ei34Va86eUYy/CVYywiV8opUkkSnXmOiy9nOircUQi33lP8qrnbzLUF4Iv9gK4tqXadH/mpc4HkWsoMWpPXrmXs/qUPipFmVcqAAmS1eUNy8HkTM0IEPgf35CczJgVMSCFXYaJCEZQ4ByUaJCpgJzzVK++XM8mKVaC67kGcuQC/S+hmtK5sDRAKpwSyqOXsy2GVgk+QBvYCI5vYUXlGwDpXXyockS8z2qzyzxV8gEZUkSuLn7/exzIsCZWlS/lnS8o4RwgCqDy84JL3aG3ljs9rom8tHTe83oV68y7T7Ku3kO8/f7m84JWGcX3TUS/760S6oXaS2qWWINhBXuFzT0fExTUSuZSHAJ5UdC7mF5C3SV688sbRIIsBcCwc4DM/YZyMwzgislkh3K1ADiISSAZoBFUsShE5sQOHKaSpoi5kBfzB83aGtIBgBgqiFU2SnqXFMQ2lIq8h5QslKjvKoyR3Ky9Q0q90zJwClUskU5hYqsMC4qqylzktwD+8qvmG0g8iJJB9xB8kckaSzE6/gjFzQwi/7ljMJJ3M38guc0FVFgEVXgKX8HFiQFWoQZ7Ciq5ojCiCVWn7VdTS1GdQyq3lUkmakRgqxVWmSpogFiVVXcqrFURWbVWAeeqUL4LenljAMynALFWUlMVLAqx44JyFTayqvlVIsklVA8tywJK8sbPi3VXs5AbmZoCqUQIMSX6SYQW/QDyVmq71ocqr4xjKlZWuq8yVFC7kBeqsfwqjZ1XXPJmU+NIDQgYQpWQGEDRU81gBb6LU71aUSCaAIvEwAMmB9SoxUDi3aWzCnQXmK0UVNKo5k5uaGXRy/hUWnTJj60q6UuYn4VEcFxXZSvCVUC2ZX9qoqW+AkqW+KpjagJGtUDnJbx9S4JL9qiFUryviU5KpiD9qoVZP053DTgQ+Wh6JVTDq01UWSlkiGSPQRPi0pL/ZL5g58H2J6CPeX7q8PRLLIoX9q/NWijJ4CZi6SjNch4B5i5pXbS4sU+05Wl9yoUXFSOxWnvQ8BJrFrlwkzpA/qvRiPS5kV6CDJifAuEC6oc2QWQKkkYIcpSDC1Gz28qIAWQPAaKCv2UAy/sXTC5tVDiuYXCihYXwSztXTi2JmDyvYW9q097Ya0BCDqxXhboIfHVSjOXjqoIXZygMEsawaDTqnYGzqsiU+JfSDPAlbm6SxqXfQ6LTv85dW58BrnEI2AyCWSuUrcp2abda2WGYGzH0y5MUoi/kk0NKyUDk69w6ateWNyoSKNESnTrwbPSh0qojS0/xjh0sMnIECAhOUd8TaaVzp2a2OnBy/kU6s2xXWKl7RjUmaVU7CaHE0fHk1ixaA2QkLUFEntlkq7eWkKJ/Ym7RLIG8P9hBtQhFf8qJFS9PdVdSuLVHaK9UA9NTWaU3hqqzFQ5ZIgWkARYCGgC+4lMnPTRvEpiDWjSLWZM1xXeQI2IzKvjWHAR8F1amODwAR8H3rACJ9M4zV1y3TWjMzGABa0+W2QdMWgoEzbfq4Hnpc2gCLS+pXEi72k4U1QDcK8sVMaq5kzawahsakuQZcuElpcnbWoihoAcuNHQdaJnCNPVTCOYBUB10vhSEa8bQUARtVkakxVw8raVUaxpWLCuTk0s+jW+as6Wyy/QDeaDDRJrP7UMBLjWNa0/Ytagpk0wQHV7hTXm5CtZXzq4QD3aG0Au0lBo9M6TXqw5qWRK+rnRKyFpZaoyTeaBAD3aLLVF0kxk1y/74mardVPSw7XHa7TRM4aLm+gM7WWaq7U2QBwAhAW7U1a3sUka4xXza6jXii77XoS37VU6ugDM6y1m2YidSQ6oXVZS9MaZyi8WtagwBi65zpCaxEIiasqWn7BHVI65+oIsx45FkUJWagtWEaYmqr6ZEGFKanHWoAPHW6UAnX5av76JZIUnFa7JGaa1rlFkUaXk6xDWQADlxFfITmlqpvm+yxZnhSptWPazaVmKl7UWKuCU862jWISz7U9q3nVECvwCOcrbVPsE9UpCkHVniidUy637UucnxWiai/5cUEqJ7a2bWi8yRLXnejZcUZDoOs5SBqEZPnA8hgBfAFNbzeFd6XJTpgyIBfDYAePVZ611WAq9OXuiuIU5sJvUui5xVuis1Xpq+ja41EHT8M+i5YqnFVHyssLd6qpq189JYaqpojsqg7V6CFMk4sqsCewFnUt887UQaXUnRwChDzauhXx7BhWbMJhVvy1hWNQdhUOmbBjAsFbX4aZ0AcuNfXgaq5ncIP8AA6tfUSKh+h8GSeiEK2RVPo4+IRfV6nstGL59QHBVjwNRV36jpREK0bXL6/8DEgMeTKIMmAZrJngfnSawnsggXXc5TX4iq9k3spwY4Cw6X4CxOH5i+WnOgOMCGganWea67kYU0JkMMnAWms0PX4XYskP6nHk8mLt6nGcgXURQ4BAnMjmMC3FDMCwFkEc8YiMM2qWdIAQXc7IxmrShey4tcYA9WTkXbIe7W9y0xWUajQWvamjVPagPX4aPwU58QwWEQJxnGoTYXXc9AUa0rdy6gfvGB0v8nl+TNwPdCWUWCnKkTlDhVSy3ikwABwUjC5wVgk8gCkAJNauGrcVvCow018yZVjkntneGxzSwc4EKuIAI0TLU8X8pXjXg6gwAeGhZWvC6IWxcyIUBGh0Vw6gHIy8gYHbKt+E+JPZVlMd3mHK/nXegE5XBK85U5Go3ke8q5UV/G5XBJL4Vu85vV9655W2qhlCCGfPA7glgBHqjFgCq7Mpz6zoXDkwHLrjQzB58nPil8mSW/gnFXZKvTX0bNdU1Gw2kPdU1XVChfUZqxEX/LWAw/c88n/ZHdWQiqcqEQLFXiqsY2jMpoWGYFoWB09Y3EQKEVbGufUqq3Y0YswDbO68Q2EQSQ0cinlDbISIJjCycXyGzKQ+6h7Vc6pQ0h6lQ0KGokXqGtYVaG4wW6Gt43oAfQ0y6AI0mGwsBplCw1+a8PV9Khg0dBVw3HC9KUTqZE2eG+I1JG3w0jk/w0tGwI37i6d6afPE1hGgMkay9xVay1Xnom2I0swt4UvClmFYm2HWP81w05sDw1carw14mmmDImr5B4qxFm0y0RivikMjPi1w2bQzbJhinA6viwJIfiy43eS53U2waIAHwBZHRgBJQpGLzUqCz400KwPXtqt7X+6v416SWnU58bTkc0HpXwmxKUoS1ennSuC6Xo5lmx6oRJWm5oZca2nXqy4kz6mqd4afYyxZc8rnhG2TbWi2ZV3o5obp65XWbqtfkn2FPmTQj0mck/GieMK7yP8rBCcjY4oW5WcB7o//XouWrosvB01Zck8KGakvnqqsnXjGxuUfqjMWTa5RAOs9yG/yqKXCiosWLa32kSirVmIm5D5NDJC5NDW6Wwa4HnuQhDWccsbWfqos3CAEs1NDSkp/q0E0Fiis3o0vUCki6/WqSOs0yrPs1BgRs3hAfs0wanCi9muc1BgcnmNyi2B4AUg3U4enUXa8bi6Sa7V89VnWyGqCX/qzU2WKjtXvartU2KiPUyyvnVzKf7U2mu81A63vVi8sdUzy8k3Yyx81Q64qUw6udUxmrbRq6psAo6sJW66iJXxPQ3Uu/RJXEQG7yvxTPmwA3/qRIyOF9M35VWMoM3fi1aXrmk7V54fU3bmrfWM6uEBC6w82qm0jVyG342tq083B6140jywLUGAT81C6xs0bmwXXy64HWvmtxXJ6qI328thAYacXUBm/lmXaAC2QgYJJ5gbXUfvBLWgWg3WKaiC0466C0bJXSiXaLLU3ypJE260rVGsQaV5gR3V5m3JX2yEtUicz3V9EBAJjAXsDAASZlIpWOBHmyKXw8tTkCgbTREGk1LLgQxUam/DQPiGViVUyTR2Wq7Dzawzn0MltmWGkUCa0lHBkAT8Utsy3VMAHsU3mogXTgUgDpvVE1gxAK2ucqy1RnJy3YALzmkERPURGn00p6iK038D0HxW+LlzKeLlQwZI2P8+K1PzRanx6+K2t6wAlzKEq1TG1zmJWrFUD6vXmZW4fX4AXXBtpRLn6gKq3tWpVXNEcfVo/FtmlWw2mZW5K1sqho0HwcWLNWqYyRW5K2nsbY22qz/RDW/UBBW/XkhW/NUZGWA1lSTR4QRWWmd8tTnd8ir5/Qc7IQU2g1eoWs1ranHlHqG05QxaCYm7NfklRVvmL8zGHS41flZ6rYT4wKo6yUffkQgBo6iALPUfWt61par8DH8z63JkM/mOVE/lbQDiFXkpiDX84oy3864J6gfv72s4HlHqEpHl65sBL8xfWbKBQXpgphLVkzsCRKF5GSJHUwMwA7bPs3KSYnLTmE29GH5iyfS5yX5GrMn5GyQ+dwE2w07IwbKCdJM60dBR5G6HBQAN/Ok6QwE1AxHeRXJm4eoX4+5G7BXm2nI55HBAHGgMcr8AfItXZzqAW2/I9dCM2lelUZVaU4qNMHSMEICNqK4omzA3I4WqIBCSF2WJIYor24jtCwISuldIacCUGMy3ka8s2KGoPWL0+aqc2v6K2kk3qIXG00e2lC4+isjbIiz0kG61aWIQaIBkwOMCSaDeT22v3Utq0DVEi7nWUWvaV0a05nXmqi0WmkxKQwXQ6QwCXXTK982zK43rWEni0pGjkZu80o1AzXLIu8zcGjKaiXJC/5VaS91XBKxgAqSxAQyIRbok2zrgcS5OAd24QWSa4Y1mS0a39WF3r+tFu0GQPRAswAvgSS8SVCCl8Vxnbq3Yq/u3pg4YDD6peGN22Y2/g+Y2F6zi08qwyXL2l3qr25ojiqld7M7XEnnAeSkxau83swNHY9whJRyxIvDBAObyb2rFUqqiyVE66Vm7c6MDqWtC2NyosBX6Da3z8xgDbWnURd8tIk98g60dcI60Xm/+WUiyPXs9VdS6HDmHXW2/5r85Dr3W2NhL8p63byJB2vWraDIdVzifWm1K78qICepUQD4wXMgA2zNKPQ8G0QgfMig2iCKUO4lar7GG2JLbMH38xG2Js5G3BKYCI3tMtYY2/NVQG+Wq6q2x58KQySWag4kowXfUOWokX765+WMKhUDMKmFCn6z+UcK7+W+sCVE1mnhUu6+/Vu2hUGtIbKBwOmpAJIB0Dv68xif6mRXGiFBXTokW39NQA0qK3BX4K7+36O/taY2gCX1IX6BR2r41B6qxUgayUW9K0039KgDkUSnm1Lw5i2S6njXpW9i0UShXWZ7JXWZmu3W5as2Yrc7sUf2xSXB2q+V76h0DSOo/WyOk/UAaD+Xn6zhUqOss1lim/Wn/VhRaOkxJXynm1HQt/WFw+BWn/Ax1mOuRUWO9BVnbJRVGgmx0gGux1XyiuG/eLahQyBU5TDcoJpg4m2a1FKUHbBT4HbD8DLSr8j3nQ8FtJApU1pKIAXyKdbSUTSC9glmCQGEalSQh76jyQUQ0iOZ3TS0bUhA7Gh9O1QIDOp2UjOsMkwoZlzPkyei+LKGTGMXNn5sss2eM4enmCkUCkMzCl1O875nO7kShZKADKBcUZk26XRbuAFgGmwm37MWWm02kMF78QOl66Umn1qK9YBwZiA0xQk5lOgwCaEm+BJrDF0prTJn7MFtB78J03qdS9Z9sg8XBGgcbEu615Q2i/5ufceGpQNiHVEeinmOrm4KK/Io5E5jpArK4kUxQN64q+vms04km8GrPA0u9km06/1b802oAqbL+nw7f+CCY3VzsRR+GlyjsXfLDpnL/d01VZL+mq4EV2RrMV3c7Lmn7HfJF4XBUCSuo3bzvUXolG8YrYukEgAsASZoJVmpbEdpC/JGc60Jcl05rVZ0ZQLdTOjZ12Fwa0bS0j11tHB7RLIGV2DeSpnTyNog7BTI1vDa7aa1ew70Kz/hDIfZhQCO5jEXNdko8GKCvfIVLRAL8H+uljn47IeBQmdoGDQSMqs1PN1KxSMqoIhFAgU0OK2uit3YoJ34UXU8V6fEABbTZdEsugA32LSrLBJDIUy4m1S6lO6CVMn3ZNO1PFi230D/ZR7Y9fXwEDEttGDfKNFNXFNEv5Mb5m1RYmTfHTbPcft3Nuyx11Q6x2GGR7awkpr7FEi6lh4hKayde8b7Ki13Ru+PboxFOn5qo51Q0+A2nO3ox27G+BCSK50/tG51twO50T4r515spwDPOxZkkMt50fOtGk5xTr6/OyRIAukLJAuyvQguhw5gumW1QyCF002irAy6Vmqwu0jRanfN2/QqZ7Iu1F3QOi8YPuu5A2mvD1dwXF2JuhF2Eu3hEUuoI2kdCl2rcKl2Tc+iktwRl2NO5l3ruw+xsu+Tocup8bac1QkSU4JI0ul/nYk00kCuzrrqQtBmauyM3tICV21SmhoCYnUq/xbeRyugOCqM+V24sIT2qui8kkKDV1Zc0V0Sei8l6u9pEaa4um1SnvBSuqjgnuvQk3wM92OHP/rffDKY5rJ108Xet4Iuu13adGc6uuo6Ekm2rUznb13VM310gq+EF0QQN29u0+ghulkg7KndY/bcz3HgSz3BxESh3MBN3JEyY7Ju9NDbK9cDpu7LKGGTTrZuzdkAbPN2XrDoHCCy9bFus/ylugtwjIat0FenNbVu0Np1u0k3KDPTKNun/UzZC0GDu6x3Z/PXmduwL3yMrdzC25p1m1Vp22g5i4ju04xjunYETurNFTunq4Bo+YkHu1urvUzOmVgVd36XdL69exRVDurd2nGHd3CIPd3QjGb22LI9089Mz1PbA7aWei93CwTG18OuvSZuVAKDGQuQxZaADKUSrLIAJjzEgJwAgaSboZUiGnPux9445d92FBNORfu2LL5ihqnl6JqkA5Q/XeENqmvyzqliQRoisUiUXgmyc06oEQZZZLF3uzcLo4mncWmes10HKqYHI+s4CgcTBGvZQHIDApt1Le5r27eqx1tutr2A8jSJrulb2FNNb3/ZHr0teqn0IAdHLbelt3ouHInXUx+ZBwnE38ad9VM8SAV5egt042kuBPuy0xDlUML+iQMTdvcPqM7Tql0Lf+QIe8HCySPQJ7MvfgdAsX3HwCUkhYlILOGgDnoe4XUfBbAKa+gt032kJ0Ruo3nHIyW13QQ1hG+4qgyBU8beQQsaGcnXAXK7oGFenG2Y20UYUNYkBUk1QCaDZRBegH0DGSMmDuuAjV89ebUdSrTkemw+mnwIQYekQjXGm05lQAQaxMAEDQp2800/a2nVYurLmucniRkexVDIixj6kdZEViegwgyAG4b9Y82T+fb025S9i206yJ00436CFW3T4hbJSmucjvVMQPD7dnHTkn2HiRFCnjgAk4YC9gBkCqABM3ym/JpmAx4BTSlIwAchSFmyJ2SofKf1OySZ0aigbr3nUf0gYCf1T+jDQsdEwBvEgDl7+g0AxwGrg2mk/0fRG0JLSjf0vcVaX4Wd+W4qS7JqOg6Xb6sR0cANF2s8FE2iwoXlLwYdJOhMygIK8oYWdUuoQGn7Xb+40hn+wg7BAMf1X+9f2Vazf2Nyi71RtfMCjWX0SzwX0B5aRU5CSBLJtSTjhw+F70daLU6Pg2nWPgq7mDmj40kWnU1kWxQ2aDOPneEb1TRgNAJ+EZP0SOvSQh+5HIWgNHSMBtQDMB3VgQClP1c8hE2f+9AO/S45U2m0QPLKLlCuijMhmobgOEutK0N+7WUGASQPeaZv2ZVWQMJGlmEcBtv1nK7bxbeTQb/ZDgMymXI4LDLcwrcjgMrkmCZiWqJVkOtDgLDC2X5axbHSlDgO+w4nW7c1ihJO7yVSnW3XwMnKbugLwMCS1sXYs6A0oBkayq6SQOwW7ANhk3AOVgOiFtTCuTaaYgOkB8gOkW7YUc633VfGugMGBngNVkAyAsBqP1sBjXHcBnPjGBmBC8B/IP8BxTKCB6UW+OxH0qBuTD0AB3kSBxoMXaNhA5CzQM6B7jVvmti3KBmEytBuZTqBwP1RnOk37/LoOMmwvX6B4YOGGYwNaKz4WCWcwOviywM4It/n662wNK4m3jiahMo466jwuB7gNuB1+0DkzwMoWryVBBkrUGau3XiawIM++8bVfq4s3A80bk/u1Q1Eiys2jmksXjmmST1BmExe4MLUvwUbkLm3ogOs/4OY25DXHstDVuG8UbjyEg2qmZRB4ah5q2DM00x27x0QSzINFBkUVnm7U2HKD7XJ24QM4e4ZG2wVjW/BpeDQhwTXBOnO29B1Xkkh/03Q654W/muclmB6e1Sa4C01chTUtSkwMSWyQ4OBxYPWUA4NkfLTWCqgbWmavX6+B9wNGavKzXB/NWLmCRAMgZdjZ4+F1Vqy5Ll4122QU0w0xdBIDrgVMBuOtEPx2moN2G4eXZ+vnUblKs61Gl82W+1i2RGvoMblIYM/mjPWn7S5K3ePSX2qpFkbq04OFE36C7qgBl7c3iFR87HjHqnvUjqvvVnq9khxOm9XGcmLQPqmTRbyifKHy8NXOvOMG/QXh22IGyAPG1QxEWznXah740J2rEOXmnx1DypKUGhogUpgqs6WwbO2PMikOMAlMHWh2kO2hlS1+qkmY9SuJ3OgJ8Xdi8NXNhscUShzW23B7s0Bq8tal6nyZPB3U3ZUwDVLa0sX7SsDWf+vsNRWn/1ri/TSFKZs2Lm4HmTh1c2aWmTJTSqUTq0H2aR24OU+M/ulUBpEN10zAWySSg37M9U1eO7tW4hsK2N7BJRVna+2ZMneksWqGxDrUZDGqNU4Yk/UOrkvdVdbQbYsCw1iKBrOXsWkIDWEyoyzMKRmn7QCPrVEmbxsEmZuCVyU9mO5l3hmqWs5X6neUp/q5MsJ2Wh6+0egoWATB6z30aKiWCGQcmOUOaFGegRyEAUTp9M0M0woCZWsqufW1C6xnk6nxKl0JeWysxPkcw5mB1req0L+RVlnBnxJ3KsvhWhsiPsGsfX12o1IVEZFX8RlzkZgISNz6hfUkRhlAJKJEg0q/jTJwGyWO+mJGCClkg2SqCM90GCOGGO5VMKd5WpKxC1IswCOzW+iMaW4INOdf6AGQc7LrgK7AJADy06Gehk6GebWzgYi0ZgbUzcJNEPCmIHl3AbwCuOuE04huoOf+ldIC86cNVYoQDaGW7Zu4KaFpmbE2S8xda2QNfW9gcPCKSNyC2R+yNh+ruwwwHBAEi8r6zO3IJCpU5HbKcwCJR2Z2dQ5dbRUvCzBuNoBhTJPUWh1XmhR9QNIGCIUswtyOtR/f5HqXQOunE3qbKuXnhulXUG8ku228j3mm865VO8oo3W87H2XKg5DjRn3ku89IbDRnH3z/T3ko+uaOnK8iWzgBLJsaeCHAAEMA9jAsSP8jD5LGngW0RpNUrvWrQnR3OmcRno0rvI9T2OiFWnR2e2jGqZXBJZsSPR66MyR86OlcvqPOQXv3cfeNgskZn0U+jd32LcKDBJZHR68njg4qUfb5fBUDOceya+Ic+o8cerY28GLyIxyFppnYiCoAcvneI8rRorE8VDIe6OzgNFaURvPmW670CHy/xF9THsPqIDmFDG++1Z8l9XKQv6mpQBrRh8wSifsYmOxnMPmsRnXAMxzPlUxynDn1MmPp8lMiR8nM4IWo/mKitFbmzK2GFgevjsxrb74x6mVOHGWNh85sT1bBFDcxtFY6x1WOK7SFpKx2xEeImAADG1AA6x0wZHaC2PQkPPmfsTWO8x9h064e2PEQf7LtRiozgpFObuIIY2dcAdiDhI2N0QTmOU4FGNh862NcxiLT2OtFZDGu2PqxgHo6GT9jQxrZS+e4UNAbFCPUI7VhZ84uXWx1DjWxh1gZxgrWA2mOOaAPmOrYQuOuxqSPuxswlpxs2N0QX2NHaf2NZaUTjBx6EihxynA5xsdhix6OMSm2OM3weOP6wGGNJx5KG0et4wObPuM5MXShNx6Ai/sf7LOx2yU5x50ADsP5CzafGO2fCBAxadxATx5zhDGn1z6wSOMErDPmrqbaMdNQ2PLxixHKVL9gTx3rh587eM2fG2NixmYxbRo0BHx84MlxGoT6wXh066M4CMM4/wWanc2iO1dJpOp+Xg+qH3yOnJ1sK0ZD5O+piFOscNEi2/WaOvEOnvT+PEco5GMM6p1wKj/VAB+p2bMJl1k+q5H0+1t1YKoA2qK/BVUGhQUQGrFkFmibV06+4NuWbE4DmtINDm/DSvB7CnVmrx2nW+BNXMt30gcutnzhwEMV6lrrtm4hUmcxSEL4wc0I84cMsJ462x2z4MhR37k2m/7kAhx+AOs+RM++xsH/i7S1WoMtXictMOohk81O2rU3KGxO1h6oKN5hxENwy9nr2OAdVEhrIwmhhQP1+/8N9BixNVh7qM+JBbkNS5kOrBlqXgWmJXpzSrluS/LUv2vkNehyRJZK1C3JO/M1dhqhM9mivVV6yhrzaphNjml/3jh9hM48yvX4eqxP6gGJM8JxRPRJnF0++nspZ6OdZLDDpJah3RNx2zMO6hhjXSy1O0/aqEpgEEd4gi0sMcsifKNbKFi/QZOlj04vhH2seTIM6v29EcnbPoR/lg6hxMNJwu2P8jCwMSv0OBKuiUuJr4DjEfj066lkPo6sC0ch6z2uJ5pOQWpzzjJuMXadWZOdSpbmXqhMMAC0UOGYJROZJyvXYoTJWKeDsP5muICHMDP0wCbROnhigMxMvLTAyvhTeacCWSaN5M2QOZTuO/RM/GwxORyk00mJvx3UW2mGWwcBVyJ25PSB34X/fZC2jqs0Nkm8sM0CtSWjJ+jYqbf1Wxa3AWbnTi0MBeFOKebZN68qPYL4SHVp870C18s9Uo5Mpifm9OMUpwQ126seRQAIWC5mz+0rh5AN4qWhQgaSrk/Jk1JwhiyD+MVXSrI82Re64imUB482iJttUYhgxPZhpO1CB4KPJJhNa/QPhlBO5822JtCNKBxqOopmkPOJ8qXP8lYNNSuTWY6uwNrJn/nT2//lDxrM1eh65Mrh7BlzyZozYoUGRGgMCVohnsDuwMsmlgBICbGrwDAm+bX88+O18KK7Aepny2a021OqQe1O2mmClzrfJVEaAfT2pr4PGuMNMLtOROGcRNM+TV1PxAT+AsABFO3RssMNR8Rkpp48D2p9QPpp9VWjBiv5+pm0OBmqiAbK+ITpG1N0DRgRzZGzckjRvI1jRio0TRwS1TR5tPLRkjkcW9hDrR4JWu89Pi5GoQZKLL3kDp3ZWA/eEADG/7Jbx4GQRinSZ68/nn3uOGgRh3pjq8itO+i+o23R15Wf9ZSkDktmKhy/nk3R16OF603qyMreXIocVJzeMNXCIK9Nh88vlrnc9OlrZG2p8+9MpkZFAxaB0js5NH77p/o1Tp6eM+G56PfRvSXnpzeXJMEQUpkN5bCIEKIPp0Qbmy/UDPp2mOrqCDOJnU3rPcWDPBKtXzEqka23Rqi5/AD0MzKLeVq+a9MSfQlPeQEjNh8yjOnxuqS4c+DOlJSmVIZ2UzUZ2xFew+jNQW3MBIZgaRkZj1VW/ccDIGJFksZt/TJwd9MskTDNmR09OVjCPT8Zi7j2Wbkw5ms1VP2640dmuyBvwMnLLsaHzcB8GTu6nS3U8kVNxSMVORS7ENypkFPxp7vUjvKfXJC1K12J6XXsWhMKOc/llrJlbnUOtdOfoTPHZ4ioVPikG2uZwwDuZq7C+IvxMCmk43p8PzMim5bldx4GRV4rPH+Z+h28mmuUjSk4PIi1lPBBsKk/tXFltwXqB+03unvyLhCtQcajXIa20VoWGn4G8g1Hh+hn42yp75ZoX1OyrrjFZj2QSiuyD+aiGR/25hPSg28J6CZSi/yZACGAumRUkbkDKUElQMAbrN66C3lCSB71DZzul9ZgbMZSCbMjZ0K1UsgbMDO7rNFSDWJABabNiSWbOmMebPAyB70wgbrNDyBAAhgPrkYuPrkhgDlyiWTMATvf8nE2oo40xX+VWRkmicaCrAeQIST/7SsDKUIeTIAYSh6CAHLvZoeSRQFbPMAL7OvZ4CnXoD7PgMVADg5bHKN3IR3hAECl4s+UC/yvqzfjP7MQ5mAA5xbDbe4NfRZgFhD9ALIBRgfMBZAXLJgqMMkbGC+BsIVHMa0AHMJSSHNXYOHOgUxaBcccnMbJV7PE2h715WMpTg2SHOmG9oxZyYZ0HbX+X+asxMXjDIQjvXSD3MxPXuIUviUerPBR7Idm1e+qN6M8BSMGWzMOJ3SBSM30gv/L+JRIi5WolKAHhe23l650D489R6VpK7tOQleVJqdcgmwABY4jXI/GDfFVEgxw+wNIwkaZ0w1hHJchjGEwDy6QaXGrINDEsekQBBdXzPi5u8PgpXXOMU+VLQeXSAGbf+Bis0klH1X06hHJqh+5wqCc++UJB5kLLrgeDisxiMGJ5rcbJ5194GQNPPnOIPP2RhICVxoZDVtGQk6Euule5h05ldFPNuQYvOBdWTp2QUinKkWZjkoPPN41AvP+5vBPouIPOrgQiRFgbFKiLVxAcE8Bhe530gk+hplkEn3MN5wvM3+APNB5tvPAx+d2rewA0hnInaJmTvMjIJM5J5tBKN5ovPL52Tpl50fOqtVA7TRo3PqUrczR5smEZCfNXtQQzQw8kRP0JsRNVm4DWSJhhMTmz/09lfsmdahRMSwB1lk8gRNp2m9D9Afsn9AIfB7VE6F+AG/0IBu/1DIoSnuA9/2QFnwA76mFjoAKZ22we/2Zuenmph9nWoPO4Ahahm1jyDzW0qCpNfay8MXjFgD9kxJLBamOAzknNOY+lXjEFjuSumw8XfItgtD8Qn0K5v8Oq51Xnq87K0MF6sNVpgfi9R2tNbK+tO7KoaPDp0u2jp/I3gKidMb29EYXKso2zR9tPzR2WGLRuQstphQuTdQo3BJI+3zJ7ZrBeGFDwZqPl2YCLUxwS+3txymMZ8qOOY9HPNH20WP2FwOkCx4vlkpvwDPi3GOHATwvex50C4xoyO9akyNqAVBk8mlcO082kHNGHBSjyEpMSp4UV5BvVSVU8bXwfAFP7h+YXygK1CWKrItpFrMN/yoxMmZxjUKpv6KXEkSnWEqzNJF/wVTIlK0Ph0HW52lPWXE9QOrIcbUdRiv4W5LIs6pnVX3KgiM12rFVQwu6Nq4VVkQqzwtnQ+NXbp0JPeBgRyXEga3B1Fzl9cjouDQCq0STVotdG+u2SJQurV8nI3zFoYt7VRYukEYDNbCKosjW5+2V82mWXE61NqHdnqw0kgU2mm4ufMP21YF2/0rSpAtXM/gDi4SLx3Fj4tRaySHPF6Z2NymmLGszZiaZ/VjaZ9RNT0T3XxFt/OSpvIuUFrP0jan7XvFmPXpJpEv+hkVXWZ9VP2J1XmolpxN3i/lnF23Qs9punAGQNH7HqCFVxOvQRZnXu01CroWDasJOPHI+0CDJIXHqPe1NEcyVpJJdaTJ1u0mS6oXj6+lN+B6Au4ZyYtnB53XQ+XAC00GyDDVIQA3y5zDUK0pMPy9J1AJ4/UsK0BNn68BPKOyBMfBzWliltnXUFi07kK2EBSlsKNWsmcOccAYzkAQ0tmyVBOD62xBldL/UNOxr1/6/vOi26x3B4WQIfKUA1r6wzCeMH0t1rKi4lwD5SEK90u2O9RWTtQww2pZ0AlGW3QdO9RV3QTRUotNn1utFd7kKs3rSKhJDBlmMuoYfzAGoK0tUkTxhhgCfWPwWCMl6ucOwAJhLOgFMvhq4UTFiMMAJzSCOQAG1I3qlMtEJ2Muagf7IJWSADo5d1qSJd1r5qkEs+gcGSSiEDQZY8tX6Z940ZBp5PQl8i3Khr/Pnh+VN6l097mZm02WZ1VPdB80PoR1XlT6tFN68qbm0uirn1SkwvlHUS21cjHWtSuwNUQdEZ5650AecPQQOhkSgzc8X5bcgcaxKs1PBZp8tSx2sO0yjJWvlPrksp+kvBBw/AyCx7OdlhyMZhoPUzliB2FF2oOmZz/3YAKMBJrOCsoIbNNTK3NMblxgGIV3Es4RnqNpGqQvNEBtNDsWQtqF1tPHK5QtnKrtPSUmaP9pzQsbRiBE6Foiv6F8dPUV4JV+ASu2Grb0CdeOFOBhwS1CS6lO4pruD4p30WH28dQR87wtl89jPhqkSvPi/zDkZs3M1yu0BVEUc7EzcIucqxuU5loQAAJ+hU0UmR0dUkBPNGMBNfyghIFOrUs58NSsgm6pN86o0tJrI0vWlysZplpBUOltfMMvDBVDu4A10ANRVZl5QCmVsAOiXHCjW1cVHgon7xzpQGSWOfDGU3BW4bpJFGASfaQi2P9F6XQlyMlLFFvmKy5y2PFG2XOPIOXCkRzXa9KkorKtFogD7rAnQAZ5V9I0o0K4+2BlFJ5CDKBXWVFSokK5soj5wcoiqs5V7QBBXXlHZfAVGQ5pK7AaEVHijfdAtVrK6BXbkTuA+w3SULOo0VRaAhZOk5c4nx6HQDbyAsz+ISnWavBm2a53lo1ifw9ZRBV8wwwo9FFc3CKuR5Ey6xVvm6EuX4qJVmWyEiD8w2XWPJvSDKtUgMlEB2Zy7V5Uqt/LAqtPpDy7FVs2x1Vq2zlVjWxMoyVHBXcEqPV0DJ+2RqtV5KK48o2K7agX5bcQpvKCozqtV2E0SQ1x6E52aqt/Vk0QQ1/uwKAYTjtVmACw19DLzQdGs4IJGtg1/hzagdl1irc4lY1oVHJXauxQAUmtzQ9SB9V4msGAZjpWdETrQ1jqt6CYVHU11TDydFmtHA+mvI11quKgzCAJmyRkU1nGvdVoWtUgEWuE10EqtV3rCl2FkHs1lOxdVrmvy1mWuaFOWsHIMWsc1qmsmiYdLq1uvLg19F1fbNmvY1nWsq1k0SXbA2vF5RmuAcvrTdnU2uU1i2siCLs6wga2ssoyjLagV2s9nRGXa15Wtw1l2svnbs5knGqK/V1qs8+5Ha3QpKB+1zmsmiCOuS1GcDswfmtE1z2s3oX5bmUg0CO18Wtc1+OvAI5Ouy1o2sc9fQIx13WsiCfjr51jWuF15onyAUqFZ182sB1nACF4RqG9VgWv9V5lHIYum7DXdLYiOTnCqonSkfVk9Elou+zaouNFgFT64UOe1EjAY/JWCJDHo3TuvRTVYrzUGOBi3J3NMvENEw3bURnoq4pGOeS7L17m4hV7mzbonevdlPetcOBaqDwm5yrPdZ6AvXZ77PQ55AvCF7nPS57XPR55wvB56OQP4FovDF6O44QDrgSgAJAWRzLgKkmo+AF5gvO+tgvR+tQvGF6v17kBGYdKz6AbpFdIyoB5LOSgf15Bthib+tUQbWphzT1MgNyoDyABqrQASoDYAC54YNzF7CAH0k24u3FrhchsA5e0IRKaGqwVPImdw8mCDw0eEYKI3hxZI3qaANhvTwlDbOZV+AfUISEQgESEkQRiEtQU+GjZfOFlYBmGxfE+GjpTTbVwhiELwiRujpW4aPQwVKkSTmFuUvJH6etBOAtReGYHQChGsL/TEwJhuVE0pEw/cmBv3boEA4zjo4iIWj6ANAATiUOGryo+IbyRxugQUmFmNqbDV11onJC0Aj2wWbQcSDgtkur8CgEZYFvw+DB/1gBuL2IBvrgdhtuqPcvMDZcXjEIfaLAAiGsMA+DpzGJuANkLKVhUgDVEhRDuIKiF4TfgD0u70NyN5iErvYTlJN2RuGNk8LO6URTkxKGH40AcHpgLuC1Nzsx/sShu24uoZEA1fbW58pvGHQ5K8EqhBqEo5KggCZu8E0RBe550GQfI2LfoJ8Evg0AigQeUnQAF8HDNnwBV4TZujyAKK7NnEQIRR8EYwi8tO0DH77/LZspIUhiRC0Agi4Au0swrpuZMrcQPNvF3a8qhiFE/TqLBmPBQ0z5hnQw4DfoYPDXix15zvM8accWyaxhNKFzQIQ2pN5OCUdbu0b+AT5VwjnSQQKsAwOBmBiOOZ5jVl+CS16wAi1iIz2wKiAviaGo9oO34MUuZBO6f+D8/OBI6mcLaSpazZd0YX4DNnxKXJBGv5EtoCupM7AviVwk45TgEhqCokY1iIwct4xudIF8R7CKDDM11jo2dBKMbrQFTWbPiqYcnCjU+ppqfN+aBnnIeQ7RGxuZgLQz2N8ESON5xvxl1WWZgdxsONrnD6ALxtk0RFuxwuEDKlqvxR1yAX9UanKPgkMAYuR8FtamQDdalnFtPdOs3UqOsNUsfzStgRzqG2TVzQa3OEAANv6zHQmMEs5JBtsTrxmpeuZeZvMZ+QA2bgF0A1/aJDCIKvO/zGFLiEmNsL135bxtlevr53kZi2ksBD5zewZt8BZdtHQkcuHNueKOTYxTAts7eotsUlMW0cuZiCPOCttj5qtvNEaJC1t8pCxthtu71hNsB55l4EJ6JBXYA1Cdti/PCQI5L74PtthfbdHDhMdyFtpytnbUdvf/aezLgBexTtqcIzt3glFgeduWLRetDtldtn4tdsltmv6lgDlw7tsKhHJA1CHt+tvHtk+vDt50szXexYGoZcD2Rm9u61KuKB6ZzqBEFv2lN043eMHxs8EXOvq84BHkwAVSJCA0DWbWvOgcA0AgQPsT5tibC4AEPYsAVaJcYFDsRKdDvMAJkLYNj1OJNmRScN7ot0QAjsJAApvSwrHAlNn+C1ZcJQBAXDvQkeOu+typsQQEU1nYLDv0NhjsGgJkLwYTpCq1Lqzit9j1k1m/i3N1IXWNnCgRN38Gfgwwxd0TRs7wj8FuUm/n1iPb7XtTXxyAk2aNPDnTwId90X+KDCXbHdB3bcmDrMdEb4dSDAJamLpVCb1AmALPnbU1bgy8UltX6TiD65qJFUt5ojh+AjmmEhqA2dzNoe/D2DOduw5J/BUxfgHzuapEUJc4XGBhdz3yrkI1g2dlTtQAPh2741XSIkNuWrGTpIwKDE5Z7WOCNQTXAgyHNDCC1RPK1zgzSxKSHugFIAvnadbFKvc1Zyc+COM78bRoGBTMYYXkRBM4ZV+ZqyxZLFt/+neAbLRMxRnLwBBNvJhHeGXPeoLwDlc+DBPERlqZJJ4i6pLtQGpRYy1AUDaeAHui9cTwCrgD6idGIuPTajLmawJBmRwNbv56h4zZIOVKdGa4xqIqyBGOiWCdGbBLWwo7vkrE7uPyjjNObX+CMtDbtzBlOMKx9CgzdjbuGpL+FQttOh/sYhT3drwDEQAUzgKLmLdWy1oCfZcAZ++rvYoA3Kz6M/6ddrIxB12EAh16xLGdg+BGqQR2cNkltagmLpQc10xypKLunyS9RE9zaI7qKz0Vcxlre1l1LE90MXB4LHtVEcX4MAKFUapcntl7HaFnjP7u9ERnuqsAT6qhxeTx+0C5hjCrsI9/BKet5Hv212EC6+gluTnAUE5emnoowHaNbuchhFsCcIQgbHtuJsFsxhEQxSAMr4COTyjRwCgC8QWG1e6AfhoJMb2B45VEEgPussvT3TFNgFSUYcmL6Gx2Hq9wR0+Q67uIcdTxO9uBLyt8xC89/P4q4bPh6CMbbvd0bSO9+eDkxeDvrYAPvi/ZtpE5MP4R96zae5jNBlgwuB6Q0LTbEdYi2adbBp97I7291HVKUYxiO6LIZ697NKfQHkM7fPFJ8dnCi89+LuQAB97HwC10BjSL26spHva+98A9Lab4Y9mTWzdt/r/oY1Ly9jVIWpeNLaaTz5+obgZppS2OcwDdTl9pv70wFP7D9sXIK5YmCgd+mj/++2CABup2yMEANQFucxaXYKvk3JG7oowjGqCRFHoSfauhVkPKEYmwRJVnFEYSVKuXV+y4XpYlGconKsA1ylHRFrPK0o7jLVFL6sfSH6sM1yjIA1ivIkokGvcoguu21svN11/2u41svPu1zK621ofNFgGAex1kQTIDhAc1V8EragOyCoD0uvE1XSCYDlGtF2fQCZ5vAfO1351YCiuuG122vxXTUAw1+uu41uyAt1lOvtFGVELFI1E+oypELxWl7lo0PHNtgbL913/uho5fLVoiNErXetEVo0eubXcev6OcQcKCPa68Dj6rkAIDHz131HRvDtGjEoQfCFbDFD1kpwxvMm4bXD66MOL67LXBQe/XCdGz12m55Xc6lNt1dsLu9esnozmw7VvDHwY2weqDmwd0+uN4Fo3KsLog4r0lN/6k3VdHH91koboqwecDzG5QjRNvdo+dHHovFzODmW6uDkIdhVxIdEYnK7eo6FwvU19sburDHqo/FyIYwweI3XdJ5BM+sS90qKq3cjFQEyjG+3e1x9eIGy0YsogSlOOC9CByBMY9QisYrLGJQc268gS24quXjFUcW27aldlQ9uvVwGlZkHHYwh5mlDiiSYn24yY+0oB3eTFB3F0oh3D1xh3CHAR3X0qrB2O5B9BUA6Y/mqVYqMoGYq+5GY9O6beDMp5ube7plfO7WYh9zF3EtwOYwsqDY2DollNzH8IGu4gPYNxVlBu51lYUgNlGVRBYg/j9uTu7tlHu7Pt/u4xYmdwmzPPQJYjijj3ccrz6Ke5FM9LGzlLdydDyYD4Vdoi5Yle4WeebFP3K9zihn+77lcrEH3PTGvuU+533P7EX3O8o63B8qs/Moj33UbyQPS9zQeF+5rTH8qyRJzEV3VDwjYzB4UBcbGiASbEgPbTYzYih5MjqDwwPdbHwPRjxrY5B6bYtB7XYnbHVlNuA4PKioJVRlxu3U7ESYhnFkPDKqUPdBj3Y0YSaeOh6RVdx4iVZx7meT7Hf42hZc0NVvgMPh4A4pSrOeGR6jiMHFeeaHF+eKHHDEqeCw4jHHw4yLyI40cTI4zpCo42ypw4t1wOVbHHZeXR4FefHEeVcrzeVEx5+VBrzmPQKpWPMJA2PTry043Tz04s0eXY1cplDtnHCVbeRTVq7FfsXnEreEUWC49dLC4/QOhPOzj7eY8uS48qpldGJ7meTxMSW5J6q4pBD+cDJ69ER7zZPAgeFQFRAeATIzC+sTlHfUDF7VW3RZgOFPjddFtZZYH7m4g+C3ZjhjwJc+CpZFLJcw4kbNEFkZcwoUZoUKiBl5k0ZYN9cAN4rLRUQZAc1qlxBUQOyAEvLuqXVYl5AUemht5npaDZ/3HqDkJySD/gf2DrYou5wEYA1Qgeg1D+I1xmbNm+RGoz5jn0B5jny5fblY3UoOGDZ3L7+vN3RnuJZAIT7DaI1UHNoJBCeYT5L2pu8XrhuxvVgiLbQITpnNIqxGouRNIJsAJiKgTiic2IWsCI1EUI3JYoYXJbYR50BIDl5+HTE2+xi5ABCc6mRGotEu/p41FomjpA8gsRO17MToZjPHSNi4Vxytnts2oR4tp3U+kdmGtVHYfdKrKyTnmZnbBScDe9t3aWVLPfe+nr7bPhQrj2Kks6o4wNGAcFdqB3v7DHCeR9uBL4TiJpgE8od4/NW6ILIn5UxWmKoEtGboEiSzsAo8tmcJfo4EuqJ4E9n4EEv/Yv/Hn7AHfwaR5qZLnxHV4B525GAjD4m+A//6nEyIUF7ADZh5r8hcrWFbPUvILRD/r2EjZEJfUm/h/MEtp/IMqebRE7mWcJSfnBmeanoGWFIHNKI+Eg7R+EghoBE1oa7fb0TXOpUBXfcUbZ1MoLzQAYwO+TJjyhqoJ3uzLz6KyOri9n6zY5T4wqnDjhUk3DpQwGGDSg6Z6IGwaDaKNp5lMbDbn/YyG2T6zaKfV3uPHbwaX7SAmTAaAlv1Dyd3Zu/bUDS/oCbZkPeDN/ayRGgbkDMKcybNCPdRXn6UJGKcYjUW52DuSdbFRKfUTZKc7A1Kfgk9KenIEkZZT22B/vU6k1T/TX1T4tIwHdAZsLDKK+E+Udg7WgYW/BXPWBk8tC5Db5i4rHXYtIZgBtPi42zbM6KWvw4CfPNlVR4CkMaJnAPJQs4NPZRA30JYyn60ievxPacR91DS9MOHPCnMSFYYY6f5qIdOQjeKsAzzSdm1YGeGvUGdAg/EIBg0ZFnAGBigjT1a+rR6lI5FAT8zxAGqzhcfVTpeW1TpfjGQnUyp067q7Ypojq1PtBwgPIMqAbFD56dQgNpjSenbeSdi2qKlxAZHZcThI568+Rb+JEhS1Sx2fSvcPFreqyA90FHI90dHJenF0b3jHaz+zqt4/VFyuY5NZkIh5IGewXHr56L8ZgXecFnrMmBU1N9zdEGOdWg85zaTu5Fb5j6b67atYkdghoDu1etFz5KYlzjmKy9cM75z2qEJOId0XcLrpxnElNixi7gCx6bpZZDudhrAyAkKS5avoPWoVI065W94/EqJE2qr19dtLuuyDX4q5k07dJP3jTJlPd0wsHT9lIOTrOnp8dXrvzVedeUr3uC8DecC/bd7CzgaWcg2QIFhD0BiUg+fh973vNDh1Vazn3uCzuuFURJDaXz12fJefedV9rA5EC3efWnG03/zxBI3zveml1DAujWBaFbKPAb8BiuSJRx/2dUrOSIkTWBkK09Y7DHNCtQRKN85xGKa1e9bIGdrJVzgQcQ3Id3BJASfuqGutbJKnL7DA/OR0UZuFgMvNyNPsRlJAU4RnQmfVrSJKmDW4ZQDcwm+JLvVETtuDY8bFOfoTmdtwXeXSTlkhxfP13yAZAxhztScVTkOcyECRfXCxlqQT7Ic3XWTry1vs6lGXxLgpSCg90b7KsL0zFr7Txbu7fqwqSwwxNzrtE1zwV66TlkIqjFmC5ZeFQVyUbC7Erxhk5pFVQmGBRGii/VOAZxevuhENYtRhcEz9kahQd7IaAURcYsYn0Dz5QBorbV2n7MwBHsqYKkDRsdLd9/mx1VLUbB0TjxL7NkeLLheicSNKCTwU75x4kxJpUKKkxQBPfZGLSZtyIYardWeYgEpctEmM53kKdqdz70CArQGn1LmutYrb0BNLqGYOrP3w2Uupe87Ui5sIHpd5tXud3JAZc5pUpfHLLLKjLynANKEJe1LqZcNL3LKjL46ZOErJf1IVDjGQ2idUT0zbWwh5hg1VSecLzIZ5Lz/ompOgzsZ3pdlMGpc8rI+LlZa5crLI1aTL+5c5dx5c7LfpdLL15ej9eZc+rXWdfL8ZIPLsZdRLtpckyIpgexrFpVL6GbijdcByNbAvq2wrVdtiQmFgZAdwrv4s4FhFB7nC4NejcEKvFnHnq9RT4XvEnJXz3t3lZIHJtZbBOBDlPHVz4hfaWG7AT5TP1L4s0uuy8oIykPZpdqI00X0yzhkz4JXKU4fu5HFnuNZX7ImfdLWMAHuhoGBMpirz07STqPqkt2PqxzGhs4HOwOn7RgCWea6dZtSY7ZT1VfDYMD650jHrIrUJezXTgNo5WReoRngby9tJfl7S1r8nE4bCrwQopCZhdHxUU0bnUmdGtBHIcZaEhHxclAFL1bnjJTSlFdDi6KUqOYb9BVdaZcgDKr2I4MANVeYJDVccg2GeiE98WyxvGAymf1dOFm7uPrXZe1gWVe3/cYaucUNdJzDJdEE3xyqrkqK3Z2NdDIP5gJr5MiEZmZdnALWPJx9Ti/z9noErpHZErj+dI7EBfnkCldMenBPUrwheFz4heK871XG+IMk09SheaL4gDbCOobQpehdOEjLUXJM4eKt4xd9hPJhMLi5IsLhdebfPgYnLsfZ+u72fp8YReh6QRdfoPhfSriJfiL+lAHwKRcoQGRcRzhFLyLpaCKLmeXKL2wfRD6CcaL+pLaLxeP/wJbuSrgxc8UIxe5LotemLtrJM+ghc/jwOetey9f/9VsCMbLFp4zyOBLJgnYOJescrJn1D5Ln2fmp2hrFIIZd9Qcpf9bBAB7nF0GRiAlp0bdZdpxiRm6WFXNu6aix0ThhgQIEXYRpUrT+/S5f/LnlYSM2/mzOviB9SQyT09cIBYtWSSJ9/YaZr4kA9CRjcR7FjdIqK5f+bExdKUwVm1rqCCGrmPOmewVcSr77KCr8JeSTxbR/Lu5IQrab5BRV7hqzxHJGr8ISdl01cODFSFnaUZTsZ5fsV5t5KVt5Fd6gTPNorhAsvFyvMOb6vP2YYfMub2Z1ub+zeiLC1Np0S2En/UxwZqEuCq+VuSp2cnJTT0oi7TgDmhHFokQKoSc111UEGRFTZmdiMHjrx+daUZrju53gn4TnzdsoTP0aYFoDZQWtSG6FCcxbuqMtaD2Haafp1OyOdefjFCdRbAVk+rpkPYbqjgyMjmkRi5YcJl/gY7TyrdwJB0BZALrpZAfrojdF7pCjCwbprwLY9bxTFQ5OVpNbjcqIDYbe9dIbq/KybcGQBtODxqbaYrjzcUZnRJyNJbffjZYHDblkbn5p+MsI47exAeTtdwU5JuUp8gTYC+EqkiC30kxdd3Ys1dp93T3bwu7dWIkjh59x7cI4QE68h//apJAmBUz9jmQ7wHktE/8Y+V3oh2QAKuBV7YDs2HS4HV5G7YlTFFn9y8xC2ZFFASGKtX99WQY7iy539s6t/iC6tnpePKZVpy4klB6sD1p6vRGF6tUo7/sgD//vZVqvJVV1gf/VuneA16ncLJUGuQD1OttVxWsP1Xgo25JS7t5WzIsDgXdsDjneglCIdEleKeqLhULaD6q4iDhIfizuDHJD9dGpDzojpDqdFZDrQe5DtXcIYkodJD4odrpDwcPFcDeAz/Iq3XXwdxDxdHq7uFzdjTXf/oqlfe5XXfI1+Xf03ADESzp2cyvRwfxDgIcZE/etH9t3ch7y3cQlLtKSvON743WIefo6W6EueG6FDrauhDuFGY7whAhhCofYDCjHiRTW7UYuoebQBofMg1ISMYw2650joc7uDjEKuHofcYl8DqlG278Y6V2yex276ucYcajoh6e3BnFSYmod2lQvcOlP6yLD5ocmY911KY1YcqY9YdqYv0ox3QMpx3MMqH3L1AvuJO7Uj67HMkkfdwF48rmY3O4L74CoXDmzF3DnQaOYv8pcj14cysd4eeYqMqFlJUc45PzGduALGwqHtyAj1srAj1zqgjsdzgjwe6Qjke4wju/jtlFLEFwNLGYBjLGNENjFFQRe6YjnRB5Yk9xr3N8rdY/EdhaUrF73PbEHD08rkjn0rn3G8or7wDyN9EDxX0MDy4jqB5D8L8psjt+4cj4/dDY7kfAVUbH/3fkdAPAjxuSOCoYAcB7keAg/MjiUfLYhB4yjujwoPFebbY0iq7YlUcHY9vsTD+ipaj3MfvY0sfPyW7EnQA0fD7o0cEME0f97t7FM4i0dERL7E2jnh72jhSqOjwR7Oj4R4JjUR5ej+vC6VJNwQ4wyohePQ/heBHHReJHGKPKypvKLXyhj30fhjza2ZeHHHRj/R5xjox4+VUx7Jj1dIU4kKpU4zMf2PM9o5j2Tw6jvB5uPJQ+c4rx7pVXx5ZVPnEBPAXGFVYJ61j0XFhPBDdlVT7zoO2XGxPU8vgWzsfsIzuQ9jjXGZPTqpjeGBRWRlzpjla5yL5qcfY5+cdnAEMDRIP77sxXMjSZAOAivD9RE6QDT4CsnQhZJin6gScfEYm8cGoIsDa1S+tddSKDeaSKBzKSKCTdSKC5ZF0T4NwhvEN0hvovWhtxgDcClgaJCX14gCOQFgCRQZE2OQSKCDKoryhR8ikFplgBM8SKCIV5Y8EN254kNv4HPPO55kNn+u2QMY/V4y+v5eQ9PTHto+RQeOoFlt49BXGS78OcgGKXNvI2ZTvKzXQIKLAAcFuSAcERdDujFr72phcM3v/9ToFEdUbJPvc5sV/Li6HA34WCAyIVcXMEHJCok/xcisi4glDZMQdcBjH7WpEdlTZQIrY/V4hk+emj49FgFk/GtpJuHlzJspc9k/0n4hpboRpv/wUpsQWs6EekCxdRfRd06Tt5aAfXFd7rmXnW7yWfBo6x0hRM6HQkMWdwuU9vKn/Ip/j6iZ/NzKcPUgymk+o6vGUmldXU71uPzFjsimtjuHLB6m5T2KdfDA3czz96msd7e6a4Tw4/U/j7a9g+qQtzmAaYDlk5Nz487HyjtCn/L6inm3jin4FpKn/3e27od2yn+Zv5qAcGiElPMbQpCPen1KEPGXk+NWnhvbH6JChn/zDCnwRtc7M8CD7EeIfT1VRiN0QWLYEU3QbsH3sQ/OPuIc5TRnrwer16U93IssYqjUDjOtVUggE3xDW5yptUE3gksAL3PsNVpi1gIzCIjb0CpZbccuUrLL5ZNjtbLPWaOl5b0LEsW2dn04Clw6Ei/KEQuEutOPWFmLz9s5uYiF2GMnTRuaGa+gvcFpgsA5EdphtH1BQrzzdNEfnmjntGbjnwzCCIzccQXNhAZZVykpkWRs/zSU+Mvds/JTDc+4QYdDbnlbAIp1GZWSkXnIVlSs4zZc8Pn9Qk6E1w0vnv+pvnyc+fntLLfnrmEsjP8/sd5c+AX3mbAXwV6gXrc/b6DE1nGrE2J6tOOhG0Jv9zOi8gtvhabhHbmsm1cvsmwGLqq8XnwX58KIX/bfCElC+kAbABoXr2o4tCc8fnpEZbjnC87j38+Lnh5aicIi9nbEi/DZMi/gXii9smzE0cmtcvcWBd7Em+i9yzRi/afZi+tbMsLomjS9UXrS/cX+6nJxPi9Ir5gk6Es48iXphoZrd89TnvwAzn6S9zn/gH4Xpc/PTRS8ODwA2qX98UUXrXnLK36V7nu1o7cs4+jKg76pqyZU8XqEG2X6dvSNXgmhRpy8YXiS/TnqS/CX3C+yXms++XksL+XlU/2LIK8QXphgtRmKOpmBrV1Fn1BWSpqMVXt2NdR+K/WXm1pJX3dspX+gkJpwtNM8dK/e+LliuXrC+znvC9yXgC8xngOcbxZS85fUq8UXktOZp8Xy5Cmi+RXssJdX649ppv84Zp3fjzX00NmwFq8IX56ZIX7ttNERCu9XsS8DXyS9fnnK8yX+c8+X+S8+oIq9xnwK8S1YNVqXnYc5c00PQXnbkYVuC+7X3i/7XorXJx19oGNdxClnqxSKpCcSJnnyWySTM920OE//tlM8ZCBE9w3kkoZCZJi6QHa8/wa3MZCO4lgLhlnQr5LKA/NQn3Xia/xnwbpTpx0//T6Id6nw17437o2GnxtJE32b2qn0m/tRAZcUXkHe0+3tdoKtc+AGmdMrn8n39ryiaAGudN6CBdOhURtJQro5KcpHFVq5Bm/yhSa+xfLi5S37V5RDgPNU3gIL430gAvRlWdg7Ma+xzuW8k32SBtH0FezXR8dLXx+Ac393dvrsW2832W/s+MW3exsDetngW9qLwA1Yx8NWgLNTi9hCW/5bzlLsqmW+63gueC3tt2pA32/K38WeU396kcpdmLsq6Ge9hW29B3ghOfdd6akANuas316/HdACIW353ernts9i29ufXqvm+4J7m/2LG28B35ufxvexYO3wu99riDfE312/iV+dOGAAMCLp2tBe3/69YHDJv9XtyQuXztlhFm8/InsEBOTnkrsbVyfX7It76xLycV9efB+TrAlFItSK4Etn7ej6VqELM1cF5zvpRTirnz57767y2qeBcB04tnzm9W3pm+ed3lKr3xU9O32u+M34O+4QDIQanuKcq3pXdq3nnwZCWO97U/iWGU47beD0ymWn5HZ8+n6/HUtO9/T0yfRD2eeNI3u/10faAlTzyk/zpGdzzdqcz9Fqcm/TGf+ElSI4zked95A/ubVv9FH1xtu7VnHdRVtwzYP89G4P8PL39h/ufCGPIU766vPSXncuXYQf62Z6tFVukHvV+h9lVoGvfVyqvt1rAce2bnegDt/vgD5qut12gf8o4Xc22DApi7yE8d5Dexd5IR/SowhA3j1apptiCPEzWhultvBVbgOiAptpR96CYsTjSKiBqPzezF6m3HqP4GSgLfR/GPzezxHAx9bgPQQ6Tcx9lt5cDOtouMWPmx8OcOx8Hwax+5kRlrWP0x96Pg+Bttx5zOPhx/AyXR+0NgJ8JAIXp0QcJ/AybvFUQcJ8hgEqLRP0c7FhbuITtzQBJPwvGxPg+CbtheyaAcdsGoYGSVtfR+XtjlyaAHJ8xP2hsftzKN0QfJ+mP4sTuPns0lP7PEKQDhj6AdCz48gwCshDwUGADIxLUAwBXYeCs0wDIzCcGmCoWdwBbiMZ+ts/p/OsLcR1IT4sGAZiDGgGmBaihUk0wWJBuGomrQYQ0AFyY0RAeA6rCAUsAr2ZcDrgF0BXYA+xnj7kBVPz1OKVw4BXP4GSaTSAB3PvQSz6p5+F425+fthIB+Fkp8hPr5+rgK9sxP35//P55+Av0p8h9kF98+NJ+jnB5+1Pm59oySF9utCF8FP2x+Iv0x8ovsF9wvg1CHADJ8JPrF/tt658otXF+BP4F8u6vF/AyHVoPP8J9+Flx9ePql8OP51u0vkx+wv6x8PPnx/ov6x+bPoKXgKTSCHwfq8LVbSCnP858cMDiUPPiMUPKJu+mSJu8ivwwBSvpSqOUdOV0rd48ci48BVISGDesQ6B/10tuVgXR+gwGBT2O7wD+/OPbM6z9SnSjV9XYQjKVgfi3bQHhIynMeSGv6UvGvxYA8iZiDzgSgD2RysAYuAsQ6v7kS0AZQBGvrjhSLlmCEAU6WlgSgDL2VNurgSsDN3r194WH19Gvo0DB9CrtBvx1+hvssB2Wnexav6N/j2AyBxv/fi8EQRDGMJN+1AEN9hvmv4iAf+upgSsBCUa18xv7N+wUcGAQpbgNdKo0zFvpcClvttvzgaJCVgcKwIwVNSMU/5vh1cuSHgcDjJvst/r2LDIJASt+Zv2N+Y9gcoOvot+hv0N9hzA1AH2HYLiIHtwk9Kd+1vrGKzvpgAQgZbVFv5iDOvkQCpt+cDzgSsCev6t9Zv7fgGQMsEvwcoN5B6/iLAGzJXYVcCdvlziGAel/Vv1HJ7RkmY2QWE2ugF9/RIA+z74MaSGAbJZfvn9890GyDXzZ2AJAVMDlKyt9KV6t+Fv6DBwf6JAGoLt8Xv1NQofygDMQEN9uvwvGOeZD+nSueyrgDlzLgVMDOwDlzhzQvE7tYj+LACR9WZVTJrgd189v7SysBsRI24lezD55j8RvtcLRvwjWgwUtsiAbZ6HvosCRvzSbVvjj/Z4wjIifsT+IfpD+pqQT+LAGmLOvk59nP5cCgfz9+pqb982SmyABAbgOLAQiSyf5iCoOMsAYf998RWaN+ESMeSFxcgAgUwpRtJMgCAWxYCif5iBFgXpyaf5oh0AJBLRvlohIJTqktEPLKLAecBlv0sCrgEQAah7Z5efgMBVv1NQKeMYDYobHp78BN99aMfynS0L+UAcL872eyPOwG3E7BG0DFiIN8sSwr/FfqGECfi2LU0PfSLAE58JAZ1+hf/fDkf5cBnv5ogwEepBtEGBR29Jxw/nx+MlHLVTsAJV+fKeUCqvwwBxgS9tGQb1rFfzGzXtIln3iffj7ASgAKQ8gAZGUgA6QYfQyAVlyxgFwF1ITmUN9mpUJACcD8QfYDMQIHxjAfYCESQye/gfYDgC0QzOAIwguA8hmGSKqng0fYDRIZSDgKZ7/VaMSLyYCWKGSVskMCFwHHfBgBvkxOm0N1MChv7Wr7OeyMzd/QCOy+WJk6cH/E9PUCCKxQDJzm2cnZbiAN/BX7cSh0B0UzZiB+SrJtEFyKC6BUDY7G+BtEARgRc2SW8ylqzvYMemewXHLc11ldeUQ8D+NW2e4AGcrT4JKCqPowEiAQiSrgKaqxu/QAhgH3K2QRR+vv0GD6ADFyi/rR+vv+5+S/ykoy/8X+7Hm5+LAfQDBgJX/hvlX+F4tj/6ALx+a/7R8Nl3X9HZ2PjWPyX+5kceWVgTx+S/k7Om/lx+Sf7UDOty3+cful8O/gwBeP53+eP438cuWPiUvtX8BgH3+VgDJ90f7UC5kQP8kvol8NlyX9hgcP/hP5SZq/hJ+x/vF84vhP/RIWPj5PhX8J2SsA5PhX8oDq38lPhX8GoWPhXP/r8gn9zqmZcE+i7izKSPlS5TJdV/K/ysCy/lo+LAax9W/lx9Cf+39t/hx9u/6x/Otrv/qP7T8u/9R9eP/v+GPtj/hPoP94v0GBx/yf+POeP+1AfJ/ZxCdugwHJ/Z/5cBbtoT8lP/P9/P87OLAK5+VgK5+b/nf/NP7f9Xt5p+gwQ59FgY58Cv45+VgS//X/jT/rgUGD8vx/+VgF//nP0GCDflV9QwKJgHbb/+A4RYAWIipEb2gxEl5/fn8ywFBgcH8RAEh/NxoEgD4/KACYAOh/TFRZ0mR3F3ID63JcI+s/TTwfYkRL+0PrW9FEzXvRUh9Sd1CMR/sqHxf7KncwB3urW6tP0k/7Ty4Sq14fVncbgEAHWR9aq1YfWToGqw4fJqsw60LrOgdy7EYHbqslQCVNMVhuAP4cGVE8dHXAQrtF/SGOeHMixhVNEvQ29Go0ZSg66WQAatkUYDH0WdA5akGQXtRPggiAIQD0MB6WLXladXtgRidNDABxKM1FPBjwBAJwuj3hZ7dI4GKEeQxPAE29TKg0sBg3ZHZGTzKoCfIRACj2Nj9atV+gEpZvAI8AvwC7gHcAqXI5FCWQHwCvwGmhBqA/JHY/As5M1BfSX6BZRkyPWvlckkIRfI80N2JMD4wie0w7HChC6TGMTr4nXngtWoBPAO6TGuMBnQ4FTwD61TKAp2R612KAoIDSgJ6MDwB8hUaAm+MR4BKAqoCWgOaAxU5agK3gZIAREQE+Jmd4gI6tFSBiz26UJ5EzASFYHfQEAGkoZrZAQDj6PQRuk2MkV4Z05icIeWEDkzcA0JkSgOBkSoCJK29hdYCSljRpLYD9gLB5PqRFuWR2MmA5LnlhXrltgKCAyRJnYRKyHChxJB6lMuccFEBjZ0AjAMMMPyREbEhRQ/tmSgwA89Fjqyx3P3JYRFwA/4Dt62OrW/tTq3IfMkR8UXSrcgCbq3t3ZPJ7dxoAg2xCq1erZh9s8jYAr9J2HwAHTh8RAOAHXh8OANxArgCgB3aKBvJ6ugprCE8mPyhPaR92RHxAmXcuH2sHY1FuB1Hyad1hvjqRVetKrgBrWq5TB0nrVkA2QJjRLuRh0VmcftFa0W6uYq4pvQCMNIcvdwyHUBJjzBWkQ3d492gxFhQTzCdRY6R5QJsMC6RR5Ej3deExZAVAl08rnHc6V3FCXiHiEAcnYw1As6QtB1l3fEpZQLBARtsj7yN3DetcQBIfFPciH23rF0COSl+rUE9KMkr/cR9q/2pAqR98MhhPQ6BHHFckLqEUxz9bEzwqr3sAiWAOpV64VdRWJWMYaPRxJDJMaYwBTGmMZMCYb0zSWIk+tGUgNyRFCVzAwqVacld8AGFKSm0IIyAZzVk7NvwAImt1f2hq31uQDHlI6jJgaABCwKGMGQVEEzttfCF5iSQMbu9uwJ0MbuBHVCcjO0sZFQ47frEdDA9LfBUwDRCAYOFfS3GCLMC5hicjVXQwFUAAq+UYWmPANyQwFTXAuwEuzH0IHHIv9VHA3ohEFUMANRUoyws6DysvKyjoAMsBMBDtZsAnASMMecC7fEXA5U4x6TNkRYAjSy3AtyR3wN+mNecjWCPAk8C7KwHAs8DDCAvA7+hFgGY6I0tl/Hk6aysfwJjqUDgBOzX8ACD2nTcrfBVzwNzLecDmOjAVSCDUGi6dGCDRejgg3Ok+zFjAkx0DHVcrNRUbwK5QUCDU1FbJVzV1mRYURYBL/TVwWNwzZH39Z+kTvDCQKdR+4E0AS19Rsjj+ZE4MZQ4bayQuGEbHJDcMyXSXT2o/Ixe8MJBK+CiRTwsJIOdAdiJVKCxoH8Dj+E4guJVA1SdZdblqIgnOMDA/Ix4RASDawLFBCRgcKHvUGoxeO1BgScM29jnDQv0ukBbEcVBmVisIWyCarBJdQk1qQkx/OyDNAHj7COEckX/bcO1qAD+JX6AzzgvOGWYWgEcg5FAqGi8gBcDYXFfpYzwEaXdlAcRNfCV8E8BjGAyARYATbDwDU8oWoD0YOukYwJ1IHyDEoOQJPKC/IMA7aSRr6GoAJMEDRQ3EBJ9woNBgZjoW5CJSITtj4jqggcDqhBKEZOBEINcrQhVnuD4gusDU1Eb7U9Yu5E2gLlhGVzQXRvRvCAWnXsBFgEDGI05soDckKaCkAk8edVVYejMCLzJ9Um3hfu5OHTugNKocWBO8c9QRvURCS3tpiXBAAUDJQNt7LBUXRCWgs9BqoOrfH0QyYBxoT85jGGLgUyApRBXxRYBFPgtyEBV9YAylbd53oJR/KLkBYFX4PZJOIC+wRzsrrHwCTr0pYGy1VxBZYitwTZhCPWzkJ1Nz/F2MGsFzgDCAV4JVHVa+Zlc6ngLkDTBGajugkzZhjFHgP848jBegyFoIYN0sYPQttjJg7dY411mWBAJpoNWgZzsPfhsYRToIYPl2Jltdt0E2czhxJCc7NIAOW10oV30Wughg9PpmYMBg3mCPfnT6e44TyVTjXxABYO4TCGCRYNZgn+dyaGrfWJAytxPAG7UzAV2gTu81YOAmMqBdoG7vD5ARiU1gv1BU1hZpHxICqmLjKtZXgIc4Q4AIrAisKgwjegVkH2QpQQ11ZQYZei0McwCT6DGYMbAntzKyOwD01lCGDmJkKBTXZ8UjXWg5MwhsUEvUePpVJwTAmQgX0E43b2oV0nkwICwr5SIqMN4q/Fe9PUxsAHIAFAFjiVd8BMDnOCXbHsptT1jPOu97Fl3sHf8M0ATA3rgi4L3rI+97FhhfI38Lu1GaE9s/d3GvK+8x23hfXMhCYyX4TpBV1AfAmOETwDrpc7J6ESZUKm1sUGdwNfRmiDctJl42iDogVABvmDAg+ToeJDhqLCCRABXgq4kHw28g3W0OmzsiW7dA/BEAJTtYbUog2WoTUlaRddIZMmXYcq0hEmXwSkpCMh7QNtJz4IYPR+CNOxQQNKpBJkagMpY0FDrHADdP9DSqCVwyjm9SGeVLkngQBaDIJH1A528160NAobJpWgWgmmAZzSErCrRKyQs6fAskFRaYAvUlF0/iOJJfjG1aYbBMdCkzd+1EN2uNWB87iRyzbRAQNCRgXIstTgFADMAyYCT0F8REowTAPnQJoWPGX18pAEXkc+CyYUzVfVJz4IvhEmJmJTK2ZT0oLSsgUPtTsFMkZTMcBGrfJhC6dVfg5eAcRClJf7x0YOKtc+DdsGfg1cYVEOsJd+D0EPYsd4wf4I33P+DYjwAQ0bJPADN6HPVhSG1aM7BIKHdIPkwmPDN6KBEniGz1Lbtc9VG2GUwHYMXlPKotDBMQpjAMEMjhbkBCEJMQsyDq32ogpvZ51CqIDQNWV2xQVwMH4NXGS/01EOPiS/04EMagDGMhXBAQyegwEPpkS0CDQLYmC0ITMESQ/QAEEJWIOJIYDAsQwiCFQGQoOJJUtCStSOAKkNy0NHRAkMm5CnM/3HaDHKC9wOADATBQAxPgwWYzgERvIWYrEHYglqDjHTbgWfADjhCAM1A0gGbg+tRS6iDqUZDZiHYg+OCB4IfOeC4GYFYAHrRV8QCAN5ovmn75VKDqaGPia71nACqxHZDxAHWQ7dBCWgHvNKBhizUg8tYElUJaMKh3EAtZIyQiZjCbNfwrzhJmf7IlzVWwVVleKGG5ctY3fSqaXlpguwAiL5oFkKqPFxd4gChgIDgJhA8uBJdy5B8IQpNCIGIAe+DagFqgnlpzXwnUZFD4UMIyZ3AEBhaQo9k46i9AIDhlwAQGJ9YMUMkSBJ9gUP/bLYx8UM7UOQAoUOzZGFCwRGvWYgADUCXgxqCeWgs/BqCzQnhQg1AsUK2XAZCn2iJQsFC99D9QQlD6kGJQlGACnygAMlDlYNTUAZ8QIic/FsQyJFiUVFsx5A7AccBdDQ2gvZJrgEAtfMC1O01Q5z9IQBhQHGAEJgpbP0Bg7iTLPCYh+DMQzyw2IBD7DFwMXGDwD5VrN1XSVzxTJDDIO1DAW3z+XzBy4Wq8cRg1DAZgclDdbV1JPH9IlE7IXohGdCydWG9dbRfhRG8o0MnJexwANxNQ3u9oPxkAUfdfe0nzCZDa4JfbYu8CEyAA7CEQSHjQvwBiEL+pN+4U0L8AWNYVYMNg9Zkc5HWWPoxQfGQNYm1izlbAat9GglKId91SegkZQSFlEHB/KSVzAFFUV/F1lkO6HEQWizOWCRlu2W9QFkIGUL+0cJk/4zZkWAxFFEh0V3wsgJQ3X+CcKHsQ6gxPYUKAyU1Rsg7A7iIHO3CVWTV9dReA7SgMgMJ7clYKZ3geBeAlYSo9cJlCgPPQiXJ/r2EuPdC1YTSADfoX0NUoSjciqjSAAG1eEVbAbkA0gFFNMwgd0KoiF9DryyVgv1DMkgiglkIt0Ds/Prgx5GkoSgBgpUbUK20TBW0sasAQxAbAI/BIxHIQUcBEMJwwjLEpSWQwmCRbYFPgGwAQwCLEYURAAItoBP0SHh3gDcCqMNAuDJgOsVlAVecd4DNgHooHwykIOxAgYhmQEC5PgEYwugBmIEvwXepbkJFPE9cA3x9hdNYHeBkIS2BalhIXREEfPwyAKSV6MM+AGfEd4HwrS0gwMHEQTMABMGXAJsF6kEoACEBUwBv4Xl10tSdQLnYmYkUjbTCx4F0w4pUPAAMwozDu4HYw6ZNvIHSmCohMwHKcGzD5VBhCG5kSOGcAM3x5q3aQPzDd333Ac0xlgQtZY1lsoG23JFAB+j3fKCAElmWBQSgE5iDfKLCmYkqWJnhJHDTeZ3Bj+hNdP0BuMKUQDwAEACCwyEB9wHywpZBmMLGYDwBhED8wiuh+MJQgAxAbNSxATABSCCaIUVJCy3wuVxB/X2bAMQIioFp1Q/AA3wGTKWCPu0rGKv0v4VBgBW03JAVtbuBe3B0Q5spnILdNCSxe3GWBYIDlsOWwuVlVsLDAVbCIQFWwlbCdsOWw8N1e4LToXtxvmyphLEBuQCB8EUAwxBQYGvAcOA5ZBLQS9XA4ZLwEAFHOVjY+aShMTt0iAmaIO4A2iGcgYQAQBCmeIMA7gBtSPmk7gE8gwHlxim9Q1RZk1HnAhW02wgnUGHC0GCslSbCmiF2w3bDWoUgw4IFnADCQcGQUATqCNjA2BSBQRaBzHnwAFuRVVEWAHHC3JBxw3XAzYFYw2ZCODUC4PpDpcwJNebCDtxxoNk8l+BLqfoAg6lNvQLhiPAI5P3AoIEpw4TDNOFpwk+DD1mP0OlQrZ16qP1oqagypWWJa6UEsYLCX0hF9DD1lEBhg8hCydEjMPtD1ABhce8ETwXbSQ7ptcKqwXXDawHbSF1DFhjNgyVVJ4zAIAE49GzJhCERxik0gBW0zCF8wB3CFbXmQxdCEJh3XUbJrflIiH0wjfUMATSA2mhWIJig2mgJ9ZdcAIjaaO6wNQH1dSOEXcLOwi9DP1DpwePD3cMkQ1NQh1glwsohSehvAeIJZTiaeXqoqamrfZY09nSXgaswOm2CACnhj9VFUBnDlbHJCX8JMcOGqC4BiGgtwzIDbeV6qSXpW8LP8Apsy8KZYJv4VLWC3FVdZGWaQ0bJr1zs+C+Iu8LSQHvCplEXQ23llcM/QTSBILnICNTdhYA+UUmoA8IXwyYJ/sikXIUIV8I6BNfC20lBCJ9cuMH7wgWkvcOlQ2WpKt32Ye1t+OEosDUNDgHnwlKwF/Gu9T4Bq30y0DBBVUEFTWfDce2/GdeC4vSI8FCcf8I1ASAwdEIc2cYp9mHwg9QhRsnpdSAxgvB8AISCc134YGfCzfQw9J/4ym0k3aAijfXLXHxIlQGlxBZElkRb+SoBNIA9BSgkuYThSB1D6PQZdVIAGsKVAGoxfUIQgkLwz8N+8dzp6DCN6UqNxXVqjNyQ7gFqjBHCduVtgSwB5ZGQgZyAmiEPANVD0vVXfHRIom1BgEuwcYQQGc4ADYKGyaQj/JV9xbFClrFZgAVCqUN7w/Rt+UNFQwVCgOCz+dgQkwRkIo6kDsN6IXFCS7AMIxQiFkP3wCY8tTlqjCWAJAGZOZwB3QHlUXsR1ADkAfgjTS1noFpCrdjBQtsQHwCBbXAE1YEcIGGhiaCnwLxBCaCPUcewHW3ahdQJivlyAEIioYHZ+Rik1rUiI5mBoiMmnbZUO4E9gZmAkDACIzjh8aD98aJAZMPlUFIiL1ADgLTDalkixGOBewBsgAoiiiPqQEoiLsCTQshVT1ynZXOlvsLcXGVgPICxgZADA5BEEFHdoUTkKEUDR0WoKMI8L8h9yIy5I8mcMfat40XauYYiurlGI1NETqyPSSYjj0lIAglFNHDvSSCA6H2BrKgDkQLcuVEDGdy/7Ly4WdxxAtnd7q2tAmgcCQKxAvh8diJp3fndK62EfCkDRH2zrD2wFiNmYekDwSj7yRKpTR2LHWI9ucQEbPPUZDCK+JI94YxSPTO4RRRaqHOZlYGEgyJ4cj0G8OXF0gOJnch1TvC7HVqoYu01xJ3INqwXSGYitrl5AmtFzB1/sOmRKCDv1DoBsAJWInADcd2irbdJBiITROYi3UWUKJaRiSIaGfetsUWIA8kjYRHJ3dYj/bE2I4Wtad34fXYiP+wOIph9qURYfHQc/+1OIpgC8QNJArndriKJAs4i7iIgHB4jBd14AxK5+AK5rNnEmSN16D4iW7Ez3KI8wkE1I/tZloMOgGT1hhzk9XVxQglWrA+5vgKxI1HccSNkHVfIxQMZI7jh9YBJI0ZgEUWx3dkiL+0pIwh87SJMHCet8SKnrBkiiSOdIugBXSJZIkndPSNWIih9YQKurC9IeSKlrPkjbiL53PYieMloAt6tMQLFI3y4JSLtsKUiWAJlIzMiwrmzIu6sFSMEfTndUaz5RJ4j6ByVrNAcMMidI9+AXSOZIqXclSIZA36tvd1EAN4iI7xV3aG4nB1FkISoOcX6uV0DfSL0HekjCSOiPAciO2G+Iu8RKCB44MMiFoIG7e24W91+Ii+0jWCv8DsjVb3epMwJMSNQAqFFhQNpIsQcx0QZIkiZ/7Djod0jgQMjImERpiLHrP0i5BwPI3+wjyOKwIgDzyLJ3NYi4QI1seMjcW0TIzgDwB0FIxh90QJFIjMjVd0+rIsjmALLI0vJCQOAorlFSyOl3bAcKyIeEEusKB3bI+8ikcCbIy4iWyKgwaqAcMGagaIYzv0twa3AX8FlAF4BesGHJEwhBYE3wQ6AgENB1CGBfXDGAPGAtoH3cMlAxjE8oP4hgDlOmItI2YGMPSmxB8HYoi6I1DBi7SCgqKLsoVOg/cHkwTPtt/BT+WfAY8GEoszRIHxvoHXB14Jpwx+pYEGPEAsdEmkSgXXArsV/bR+BucMA8DeBnVFcQJRsx0HP5UpCccmGQu+gpKM7wZSCBHDGAW8BfMA2go/pN4GWJcw5GXAkoEvtV0AfsTCjB+hwop/Bf8FwAcHBCKIUoktBeWQmQHMpgizMyEtBkZ30o9yikcCwovRgvKNjwHyi/KNEAIiivalgQCIgvcFbwUKj5KI6xcD4ocMyoLci+iLQA6QdjB2HIsUCy0WUHMkinyI0ES8iZB2vIh0iCSJUKJQcDrkfIyqiYRE5I18iPpHfIif1PyOJA78judzTIjECf+wLIth9aHxaKPMieH1lIiCiSQLGokgcVSIYHWAduqw4KYPE+BxQom2s5H0lAEMIvx25Qd/cUkHHyHzwOKIBI/GYwRy7KbajkwyMPZciRux8xPIgfh2Y4cAUpSCQhQyRJCi6pKiRdflX7X4D+iN3I2Yj9yOoKMR4KqJao0oBqqOKo0UD6qJ+o5qi/qNWANqjYyLfIyncEyNurJECfyIZ3YUjmdwYAyaj2d0ZA0zIQBzlIyUipqNAouDJYKNWEeCiG626mNoQVqI9rFsi9dy3RX/FRqCCASTBOyMdAnsih/Cpo7mhlBEHIq8iSqPqohmiJaEkwHUC+IieYWTB5MCkQdLkC4F2o81ER20D3R3dQRF5o/84BaNUAWUBhaM9RX9EhyKBowMiuwBYoPmjSkEFo2WivR1KHEMIvR2gAKyN6kCX5G4gxHHnIm3No/FVoqWjvCBloob9uyhFopXdQH0JGeFo0ZkdROiBpaLZoH6jPDjEo6WDGZhtoqORt9CLg7So9aMOhKM5uISNopxwTDg4Yc3QmvjiSaY47KJDURyj6NjlohGgoyiwwEqdUbX1o2MA0oBXeXu4qiLKweBBE6NgwYPB3EEMKBABpkkpozmjflnXImL4XRGzo2OBQ6K4uG3Q2sMg0baiX0HRI+8ItaLsonaxW+X37H4CsH0VoukjSqMsHcYjz+zBo68xvSNvMPuivqK6uAwdidyhAkejnBBfIyGiOqOhoj8jYaK5ReGjORERo44jkaJGoi4jVqNYAoaj2AJRo3YioKObImCihdyrIs2t5qPVIgwcSaMQHNajhDyn8Y8BNFEgXKM5Q8PJgTI93+UjwsSCzkMISOvwEtBTaLDd8IRr8M/xCaB+gP6AL5BkIYBiiEnXSMBjEsXxoXgtf6KngZadoYA4oEk1dkE+gCyAiFCgYv+iEAEQYwmhpoIgYpi9agEn8NwIECVugbuAgYSjOPBj10msYLpAL4nrwJWBXHhVuE/EnHGgAfOiNrzLgBBwYCyPgI0AuGJNozhjo2gQAIooVoDJ+LwB+1nYY9dIbdDH8dTA+GKQ7FRFZMFIAPhjAIlIYjhxNFAkYvp4JYlkYxYASGIpIURi7oHUYlQMuaC+Qb1ACGIBgQu4hDD7yACIJGPyos8QdyKKo3VF+6Pqox+jOHFPIueiqqLHomKsJ6LxI+QdlaLYcFRjEHBno5Yi3GI2ABejn+yho6h8uqNXo9/s+qKFIv8ikaOuIxgCcyILyXejSaPzIwCifbExopJiBH21ImaiRHwvop2tCaOEYq6AyGMhAW+juHwKo9ajGXGcYlh5/oNoY1yiv2CMYUGCJ0B0YkRiSmJqY3dBaGIzGLCJhcAagWBiOKFCmMqhkGJhgMxjt7jKoUxi4YG3uXKiHohT+KWA6KOX7eU8a+16IMYR1q23I34CDzCrRbxjbyIlopLBXaM1on2ieIFcY4JiKSIIfcejWaKVo7+xlCnNoxzBdmOtotoRAmOSrI5inBAhosJil6IiYjEAomN6orED+qP/Iwaj0mNk6RJjiyIWSFJi76P3ov5ied0oAksicmNxo8+i+AKvoj2wrmP5oy2ihaK9HMpjiBzPESpjuSgRY9WiraPzoyShoO2aHG5irFCNuYr4bmIhxMPCgN3cQUlifqLa6UptT8JlbRIRroCB8KxRHrCPw0yI+2np+PEV1aXeUT6AuaKuYKljdaM5Yy9kSRiuwl6gwyl8OVli/MlYoyfoWkMwRV6jMH2xIs5jHGN8Y+ihYCkOYx5jR6JOYzxjFWMnokcjQRC73AcjIQKCY9ViSRFCYwlFXmPhAlejEQLXomJjfyKZ3LeiEmKPomndgWPKYjDJwKJGo+4jUKLPo2ajqyPwHM/Zph2YeVFje8l1IzFj9WO3kcKATaNL3Icc2hxUdeUpwoFAPXdwuhzxwRI8YoDjY1Uo+hyTY7CpgxwcPGypw2JsY87A7GKMHBxidWLFAlVjmHmg+X6jjWP+ojxjqSK8Y/0ifGIuYlWjQ2LqHPXJ7mLIfStjPzFNYjYjl6MiYq1jomK+Y2Ji7WPoAh1id6LRo2K4MaMdY5MiT6M9Y8siYWNVIuFjS8lLY5iw9ckDYtuthD0XYh1xChjSqYsDT9kd2FqpCvg50ZyAQ9GKUBjEo2PL3doduuG7HNEd4gGVKb3Y02J4xerBgbyG7aUcsOQ6KUw4LXj7seA8/MmFCU88uGzE6F4BY0ibmb1BfUi0iAihNyIWmIfgNIhA4z+h6BhkGJKj5hAuRZw5leFWQGNIiz0RmOzBndl63DzhsZlfQWB9QdnYaJ5lj8NuAbsgrSIeiNqcKKOHjdeCM0F2wWB4MKilHbCpqOMlHCuE2p2JMOBxdsXrcX7tNKJexK0iVmIKogtj1mJHRYtj6qKHcYh4gkELgNVj22OKAAGii2M2Y6gphOM7KUTjW2LZIiTio8mjItKtF6ORATqj3mN7Yz5iD6PyrBGi4mPtY3Ti88ghYoFjR2NZRCaj3WMVI6djcmMrI2FiayKSo+UAROIw0FdjRAODYu0I5OMSxUTjJKG+HQUg790bKAEcWyhK3DDRtKmF7V/cIsRroj/d+ymHueLFhylUAOEd/91lAQA8N3BAPK9i8OxyxSA9OiB442xi1mNfsATiZOK6uDziOKFS9bBAK2OU42wRq2JAkQGilWIbY8kAp3E7KYriLaExRQ1iHmLK4goBnmLNYjTju2K04yzj16MNsAzih2KM4gFiQKOgo8aijOMyYwFig7CnYveivWLyYuzjfWPXgxzj6uNAIBOQXOPvo3wRCuNRgBriE5G84y6j23F84+soW7liANu48KWW47FAwuLgYiLjosU/3Wd9oR1i4pLExygS4k8AkRyAPFEd42PAPZe5u6JtIgYja2JvI6goOaN78ZmigQNa4woApOI2YutitmP+43MZmaOa4ttjWuPa4rti3mO2Ir8iBSJtY/TjB2NFIsFjjOP5Ip1izOKuIsbiJ2Mm4qFi4rlm4udj7OOqYTmhGaMkwVbi0KMZcSHiJMAi7Mfx7YHJ4pH5ABjp46mi4QGcgQfwy6IB4qB9nuF8ENnimaKG8Y1DhIBMsWWh1MBPsOSI/UOoAR3JOOJ1BbnioeKF4z7jVmN7o7Vj8uN1YmApmHlK4ytjQeLy48Hi/uOy2TXjQaOB43tRVOKf7DrieCi64pHieqJR4/tjbWKOIgbjMeKG43MicaJTI9lECeOryKbjUmJnY71jL6LJ4jXjG5Gp4z4jnWKZA19jgyObAMMjaaKVA7DFjADrIvwAwyPRKH7i6qN8Y2Pj4+PCHW0C/WNRgZ/JoPhAfMWj/B3XY5tjP3AVo1Xi9eK6ufPi+yJbYtPiRbg73KYdM+OYeB0Co+LyHYwBq+LOxf1iDWI+o3EiS+N1Y5vixDzeUSviM0Q24gGBROOiHHwduQLVkAfjVAAU4oviaqLZo3xjx+NKQJgBShwLHf3ilyJe3WXi/pxT45kjOyJZeZaCDSjJ8Mvj2cT1yHPiq6MSQjzhd+Oj8bvim2PmJKCcNyNiPU/jnbjJ8Ofih+IDzKxdDXiV43jicuJpIz6i1eLFA2YkRvjGIoHjjeJB4irjcuKGIwTjfGN/4tvjWSMAEwoB4eO5Iy3juqPlI5MjeuLRA9HiAKO7I/5j3eOD49Gi3WJM4wnjpSO94kni5qLJ4iATesyJ49gc5d3T4jUiQyIj4yui6aKD3WPiZyOZIhPji+N+4+Yiw+Kf1UMimBL74x9FWogtcOvjRaK7I61EnQOMAffjmBOn485jSnEuYy/ipQM93DgdKBIv487F+BKV3O3dR+LpKBQTW+N74lmjxBOq4yQSuwHUE2vjxyOD4tsiFuLq4xLEtuOhKJXcR+O53fwc5+PMEsQSquLAEmrjbBNO4xfjhDxIE80i8OJXIsnwGBIbIjoAt+LOgucj9XD346QSj+O343jwz+JEPcTEQhOv44/id+Pv46PxnBOwQYfj3qTf47LiVeO0ExwTdBMUEAkAteJHonXjQBO/4+qiDUSN441jYBLjI+ASPmJt43TjvmPiYwbjMBNx40Fj0BPBY7HjJ2KJ48kC4KOeItUiPbE5wQPidSIxYu0JOcACEcmAghCtEEexwhCUEDUEtumyEb6hQVF+oSNjAoDswQYRMhDmEk9iF7nKIAoQmGCs7P1DShE4gcoQGNC2EtfxahEWE+oQwsn1uKUpmhE4gMw98TRaHQyALhJfQnoReoBt0NVBF82GEHYS0gDtoDnB/BCKEPNj3qPsYsHjWBK74gh5RD2kE3IToBPK4zVia2JYEpPiauP0EvgTIBIjIsESO2NN4sgDwmItYntieuNR4jej+uIx4poSseKTI0Fx8BLAoizjcBI94toS8aOz8Amjca0iEzUdpBN6EipjWyMoEtcjH71z4tWQ3iPsE6TjO+MdIn4j/+IyQfB4xMRpExQTxDxUPE2i9RxfY/FimVHkPAhAvBOj8JkTToMjxRnF2Hl/Yzh42aG+xIeQtD0+YHQ8a0DDHSlBXRx0sd0cTDz1Es6iYCL8ybUSen2sPcypbD0lwFHFs2NUeLUTnD0pQCMc3DyjHVypYx0MeInEfDyTHMnEUxwCPax4gjzseUDhVyO5Eq/jmROP4hUSxKmtI1ADgqz0AXgAxAMRElTiYBMgAXgAirFKIFFt6Owa7BMSBAF8cS3i0xJPsIcg+BGjE4QRoxOTE0aCVZEJUfMTtgF4AXwRrBMggIzCOYHLEkQReACTE70Qj1jhAFFsT6QtMVDtCxIrEzMSYIVQ7eQAHZCTxbMTUO0z8GsS+di7EhsTeAE4GCJR+xLmEb349VxryNrjExMbEqcSAgBnEjYQqFBzpH+Vr9zTEtcTThG4otuxFxMbE3gAhDT7EgcSzhFVYesS+ABjE8cSrxMHWa50IqUnoFFtVsAiCKzYxtCdkAgwH2VQ7FutDxJ7E4norhFiHLYicxM58UcT/jBvEpcSmxPp0P8T9wHAULGD86kvE8CSeFFQhLgQ86jO44ac4JIzExsSP0C6IsCTGxIbQeCTeABwkiCSP2nVZPnM5hFLkfCTeAAUiCiTeAE04hZIUcEwgIzD93ATydcxqALcuA8TuACvEqVjqyDrEjCTeAAIEDcSrWHYk6MTGxPIqISTuxOJgfCTCJKASaCk/q2/jUiSqQEIkvuDnhB4EHCSJJIzE8cSwRIekIsS9BCVkG8i3xGG0WAJy/1kuHCTYAABkCiSYFAEwQLJ2BClDcawmtmUQfSS4JHxMQC14XVc6UEo5QQoks0D4QB/MAqtqJP4wS9YTZieEOgQ7MFIgagQBxJlpaiTeAHyYyCBBERLsfLI6CEIkxsSopMwgKqsfxJok8CiBMGXGADxiAErADKSTZljE4STjxJwoXKS23kIkvCSMxKxgfRhJJPwkp2xdJM/sLmBzVDJgYqSybhMki+jBHx/EjLtfWCZ/ceh8wWkoaCi+5A8kwkD4QAZES/UhlDMk3iTRsEZSLRgsGKlBMVgFxI4k8CTJxK5wEAdCpQbheUBBYHs2ZaSCAkpodaSeJNSkxsSWmOKYjhwg+C+kIaFnoFTIXvlUYAGYpn8UqEIsB8BaKPB3fKTuxNwkhKS1JJ/EsqTDxIqklKT5pIIk6qSdJKGcX7j+cEUgNpjk5w5ObpQTeIzE0yTUQIGk64jfXEM7Y8EEJkFRKzxV9AuYPRiv3H+g2eR/5Hwkz6SxJIbEnCSapP+kz+w0IUvw64AprFrUcGTDxMhknySMJI6koLJQpLmEEvCphEIklnchpKmEMaTUpL/gJoibhOlKIPw2iIzQXqAeHmmgXaTvpKPEg6TcAD0YraSgIEOAfmT7CWmgM6SegnNnTCA2iEekicTrxOok0WTxZOGku+ELhEVkuWTzEgsxL6ThJPek76TsZJwkjSToBM2APuwSROhqZMSMEHN4LGCYuPTwEn9slFTAVMA4wC3AJwBA2DasJyhwZFu44xhiqyR/fiRKZOiMTeiaUWHo/B8UUXx3Nwcu0loCRTjzq1+Y3ESneOSYxkDjBLLvLtEuQOsE74pOb1d3OKts7wkybmiGMnjNNs5L73lCS1FXeLV3LetTjFOKH9FXQPdyI+tAQKMEygTX1xiEugTxaPcHM3cc5KMpauTZBIoEkW4mAmSEwQS8q38HJgJs5JKcYeSpMmkyaHx8ABtAeIMb9BGPK9ctxib0YFtfMm1xNGQ7cVQAF3wI1HlAdAsV0i30HbwH7GogVEDWlAyhJs0miFh8GmgTZnSCXTgF/HVSDdQa4EpyHZJqyFl6QnBG0iOSKmow/FIAFGEkCKjbbvpU5Ki+J+8V8O7IWXpidkpwScIX5N4JasxexiVib5JVIU7IL4AP7ydLOUSjQUiOb2xfcSAUzQwetQ74VEBHEWQUofRqEFRmHBS84kw0Hco44gjUTTpWsCqcDMRYT12mS44VgXa0JgB2EgX8I4JUQBOmDBSfAyHCX+TGXn/kiCcm5OUE7+9YJ159dXkb5LPUGhIvjHdSDhTeZn/k+LYrWDQUs9R/30IGcRTxvjFtfFoRGCEUuJIA1FYU7ycL7xt3DeJ/5N3WD2o82lAU8fNwFMICTGx/MEgU4r1oFLOXWBT4FJzvSBD/5IIU9EBUFKwUdRSOBn/gLBSHmAIUjXREUyW2BeS6FKIUyZivplDBMhS1AB3kqmATmj7aGhSm9AYUqeIQBG+AFhSAdjEUrRSdTx0Uod11Jx4U7m8YJwzrQRSZFLiSEclElMPvSuj7FikU6iAclOmBBnkFLwUUrY4xbT0UlpYQFIR4MBT6CWD8PyDQ/HD8ExpSFN06chTQlMCCMLJV3zTkN8ZKEGaU84AlZLwhe9AvaAUuRdsi5O0UnwIxbS6Q98BF4MpwT95VFPW2JNojYhFCJZS2e22zO69KlN/HMW0NlN9zPuTn+Nk6PeI6Tn/iBJSKlKSU0uDBByKU7iAMUhfOOhM8djxqReS0m3BsfJTLb0KUghMalJGUicJ6lKMUxpSBlITkHtCqQEsUn1AjYiJbE08Q9yPvV+ZHCjxbdZTPfFeU3OSi705AsW1aDlhUs9Q7O1AQuOJ4EE4BcJSYUgUAVLJ+AS3HOCRcdgKsFRcMlP5bKolUVLiSY2c44g0U2oAXREpU8OJq7y5vJFSYvhvlTyQDFJ+UgS9cVKpAG0Aj2RfPeFc6lMK4BpSdCTfk1pTu+gOUywSjlP0SP04S4HdqLO9f9VsU4uTznCfvLHNnFLhU1xTWYFKU8XpUZnjvZ3MxbXvGBlTtVLOU+89OVMc3ZogawiYCYFSyCSCUjpSQlMoU/5pQ4iWUqXZPNnx2XVTld3sWYhRKVM2UgFEOVKFU35SHLyxCFYIcgEpwdXAxtDzbT+8DQPsWWZS4wjzaYYJSlO1BJlT/BO/+AnseLDdU+xS5UgZUzVJijDTUi/FVVPISOFT6Zg1UyeC1VLPUQYIc1MANT5TfVOq4YVTmiDfkyAxP5NJqK1TpIm2U3U9UlI/vSZTklMZvTJS4J2yUktTclNEU85SClJDEopSmjWkUvtSylIILeRSLlPbgufIK1LdqY2Bi1PzU4RSeWi+U4BpTVMfPXRolMJRgWpQlECbUwRoW1JSU1r121LNPSBDoJ3A7FBAGVLyUwdS3lOHUghNilIZUiw1BVOrU/1TmiAP2IlkS3T3U9hTp1L1vZVSxbTfUo/ZKVNXUxFdq1I+0dZQoAF7iVAAigh0ActSSryZ4eEBjOHpSZ6tatSpyXu96jDNU58ZYPSeRMVSuVIw08XwwkH6U2QJpm3oJbsZ/JmQGNXIjkkeRaW08NNeRcjTeCUggBhTaNM6vRdk3fXo5YNSHJhtUpgBOlPtUhDS05G6Ip9Sj/VA0yaRNkijE1ACWlkdsYABcxDPkNZEIvA7BcIBHnHnARAAZkhjkmeSD0ngmIAA="]');
// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__(961);
var lz_string_default = /*#__PURE__*/__webpack_require__.n(lz_string);
;// CONCATENATED MODULE: ./src/helpers/script_ww_api.js




// Webworker interface
// Compiled webworker (see webpack/ww_plugin.js)



 // For webworker-loader to find the ww

var WebWork = /*#__PURE__*/function () {
  function WebWork(dc) {
    classCallCheck_classCallCheck(this, WebWork);

    this.dc = dc;
    this.tasks = {};

    this.onevent = function () {};

    this.start();
  }

  createClass_createClass(WebWork, [{
    key: "start",
    value: function start() {
      var _this = this;

      if (this.worker) this.worker.terminate(); // URL.createObjectURL

      window.URL = window.URL || window.webkitURL;
      var data = lz_string_default().decompressFromBase64(ww1234_namespaceObject[0]);
      var blob;

      try {
        blob = new Blob([data], {
          type: 'application/javascript'
        });
      } catch (e) {
        // Backwards-compatibility
        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
        blob = new BlobBuilder();
        blob.append(data);
        blob = blob.getBlob();
      }

      this.worker = new Worker(URL.createObjectURL(blob));

      this.worker.onmessage = function (e) {
        return _this.onmessage(e);
      };
    }
  }, {
    key: "start_socket",
    value: function start_socket() {
      var _this2 = this;

      if (!this.dc.sett.node_url) return;
      this.socket = new WebSocket(this.dc.sett.node_url);
      this.socket.addEventListener('message', function (e) {
        _this2.onmessage({
          data: JSON.parse(e.data)
        });
      });
      this.msg_queue = [];
    }
  }, {
    key: "send",
    value: function send(msg, tx_keys) {
      if (this.dc.sett.node_url) {
        return this.send_node(msg, tx_keys);
      }

      if (tx_keys) {
        var tx_objs = tx_keys.map(function (k) {
          return msg.data[k];
        });
        this.worker.postMessage(msg, tx_objs);
      } else {
        this.worker.postMessage(msg);
      }
    } // Send to node.js via websocket

  }, {
    key: "send_node",
    value: function send_node(msg, tx_keys) {
      if (!this.socket) this.start_socket();

      if (this.socket && this.socket.readyState) {
        // Send the old messages first
        while (this.msg_queue.length) {
          var m = this.msg_queue.shift();
          this.socket.send(JSON.stringify(m));
        }

        this.socket.send(JSON.stringify(msg));
      } else {
        this.msg_queue.push(msg);
      }
    }
  }, {
    key: "onmessage",
    value: function onmessage(e) {
      if (e.data.id in this.tasks) {
        this.tasks[e.data.id](e.data.data);
        delete this.tasks[e.data.id];
      } else {
        this.onevent(e);
      }
    } // Execute a task

  }, {
    key: "exec",
    value: function () {
      var _exec = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(type, data, tx_keys) {
        var _this3 = this;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (rs, rj) {
                  var id = utils.uuid();

                  _this3.send({
                    type: type,
                    id: id,
                    data: data
                  }, tx_keys);

                  _this3.tasks[id] = function (res) {
                    rs(res);
                  };
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function exec(_x, _x2, _x3) {
        return _exec.apply(this, arguments);
      }

      return exec;
    }() // Execute a task, but just fucking do it,
    // do not wait for the result

  }, {
    key: "just",
    value: function just(type, data, tx_keys) {
      var id = utils.uuid();
      this.send({
        type: type,
        id: id,
        data: data
      }, tx_keys);
    } // Relay an event from iframe postMessage
    // (for the future)

  }, {
    key: "relay",
    value: function () {
      var _relay = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(event, just) {
        var _this4 = this;

        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (just === void 0) {
                  just = false;
                }

                return _context2.abrupt("return", new Promise(function (rs, rj) {
                  _this4.send(event, event.tx_keys);

                  if (!just) {
                    _this4.tasks[event.id] = function (res) {
                      rs(res);
                    };
                  }
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function relay(_x4, _x5) {
        return _relay.apply(this, arguments);
      }

      return relay;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.worker) this.worker.terminate();
    }
  }]);

  return WebWork;
}();

/* harmony default export */ const script_ww_api = (WebWork);
;// CONCATENATED MODULE: ./src/helpers/script_utils.js


var FDEFS = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*?)\)/gmi;
var SBRACKETS = /([$A-Z_][0-9A-Z_$\.]*)[\s]*?\[([^"^\[^\]]+?)\]/gmi;
var TFSTR = /(\d+)(\w*)/gm;
var BUF_INC = 5;
var tf_cache = {};
function f_args(src) {
  FDEFS.lastIndex = 0;
  var m = FDEFS.exec(src);

  if (m) {
    var fkeyword = m[1].trim();
    var fname = m[2].trim();
    var fargs = m[3].trim();
    return fargs.split(',').map(function (x) {
      return x.trim();
    });
  }

  return [];
}
function f_body(src) {
  return src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
}
function wrap_idxs(src, pre) {
  if (pre === void 0) {
    pre = '';
  }

  SBRACKETS.lastIndex = 0;
  var changed = false;

  do {
    var m = SBRACKETS.exec(src);

    if (m) {
      var vname = m[1].trim();
      var vindex = m[2].trim();

      if (vindex === '0' || parseInt(vindex) < BUF_INC) {
        continue;
      }

      switch (vname) {
        case 'let':
        case 'var':
        case 'return':
          continue;
      } //let wrap = `${pre}_v(${vname}, ${vindex})[${vindex}]`


      var wrap = "".concat(vname, "[").concat(pre, "_i(").concat(vindex, ", ").concat(vname, ")]");
      src = src.replace(m[0], wrap);
      changed = true;
    }
  } while (m);

  return changed ? src : src;
} // Get all module helper classes

function make_module_lib(mod) {
  var lib = {};

  for (var k in mod) {
    if (k === 'main' || k === 'id') continue;
    var a = f_args(mod[k]);
    lib[k] = new Function(a, f_body(mod[k]));
  }

  return lib;
}
function get_raw_src(f) {
  if (typeof f === 'string') return f;
  var src = f.toString();
  return src.slice(src.indexOf("{") + 1, src.lastIndexOf("}"));
} // Get tf in ms from pairs such (`15`, `m`)

function tf_from_pair(num, pf) {
  var mult = 1;

  switch (pf) {
    case 's':
      mult = Const.SECOND;
      break;

    case 'm':
      mult = Const.MINUTE;
      break;

    case 'H':
      mult = Const.HOUR;
      break;

    case 'D':
      mult = Const.DAY;
      break;

    case 'W':
      mult = Const.WEEK;
      break;

    case 'M':
      mult = Const.MONTH;
      break;

    case 'Y':
      mult = Const.YEAR;
      break;
  }

  return parseInt(num) * mult;
}
function tf_from_str(str) {
  if (typeof str === 'number') return str;
  if (tf_cache[str]) return tf_cache[str];
  TFSTR.lastIndex = 0;
  var m = TFSTR.exec(str);

  if (m) {
    tf_cache[str] = tf_from_pair(m[1], m[2]);
    return tf_cache[str];
  }

  return undefined;
}
function get_fn_id(pre, id) {
  return pre + '-' + id.split('<-').pop();
} // Apply filter for all new overlays

function ovf(obj, f) {
  var nw = {};

  for (var id in obj) {
    nw[id] = {};

    for (var k in obj[id]) {
      if (k === 'data') continue;
      nw[id][k] = obj[id][k];
    }

    nw[id].data = f(obj[id].data);
  }

  return nw;
} // Return index of the next element in
// dataset (since t). Impl: simple binary search
// TODO: optimize (remember the penultimate
// iteration and start from there)

function nextt(data, t, ti) {
  if (ti === void 0) {
    ti = 0;
  }

  var i0 = 0;
  var iN = data.length - 1;

  while (i0 <= iN) {
    var mid = Math.floor((i0 + iN) / 2);

    if (data[mid][ti] === t) {
      return mid;
    } else if (data[mid][ti] < t) {
      i0 = mid + 1;
    } else {
      iN = mid - 1;
    }
  }

  return t < data[mid][ti] ? mid : mid + 1;
} // Estimated size of datasets

function size_of_dss(data) {
  var bytes = 0;

  for (var id in data) {
    if (data[id].data && data[id].data[0]) {
      var s0 = size_of(data[id].data[0]);
      bytes += s0 * data[id].data.length;
    }
  }

  return bytes;
} // Used to measure the size of dataset

function size_of(object) {
  var list = [],
      stack = [object],
      bytes = 0;

  while (stack.length) {
    var value = stack.pop();

    var type = _typeof(value);

    if (type === 'boolean') {
      bytes += 4;
    } else if (type === 'string') {
      bytes += value.length * 2;
    } else if (type === 'number') {
      bytes += 8;
    } else if (type === 'object' && list.indexOf(value) === -1) {
      list.push(value);

      for (var i in value) {
        stack.push(value[i]);
      }
    }
  }

  return bytes;
} // Update onchart/offchart

function update(data, val) {
  var i = data.length - 1;
  var last = data[i];

  if (!last || val[0] > last[0]) {
    data.push(val);
  } else {
    data[i] = val;
  }
}
function script_utils_now() {
  return new Date().getTime();
}
;// CONCATENATED MODULE: ./src/helpers/dataset.js





function dataset_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dataset_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dataset_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dataset_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dataset_arrayLikeToArray(o, minLen); }

function dataset_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


// Dataset proxy between vuejs & WebWorker


var Dataset = /*#__PURE__*/function () {
  function Dataset(dc, desc) {
    classCallCheck_classCallCheck(this, Dataset);

    // TODO: dataset url arrow fn tells WW
    // to load the ds directly from web
    this.type = desc.type;
    this.id = desc.id;
    this.dc = dc; // Send the data to WW

    if (desc.data) {
      this.dc.ww.just('upload-data', _defineProperty({}, this.id, desc)); // Remove the data from the descriptor

      delete desc.data;
    }

    var proto = Object.getPrototypeOf(this);
    Object.setPrototypeOf(desc, proto);
    Object.defineProperty(desc, 'dc', {
      get: function get() {
        return dc;
      }
    });
  } // Watch for the changes of descriptors


  createClass_createClass(Dataset, [{
    key: "set",
    value: // Set data (overwrite the whole dataset)
    function set(data, exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'set',
        data: data,
        exec: exec
      });
    } // Update with new data (array of data points)

  }, {
    key: "update",
    value: function update(arr) {
      this.dc.ww.just('update-data', _defineProperty({}, this.id, arr));
    } // Send WW a chunk to merge. The merge algo
    // here is simpler than in DC. It just adds
    // data at the beginning or/and the end of ds

  }, {
    key: "merge",
    value: function merge(data, exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'mrg',
        data: data,
        exec: exec
      });
    } // Remove the ds from WW

  }, {
    key: "remove",
    value: function remove(exec) {
      if (exec === void 0) {
        exec = true;
      }

      this.dc.del("datasets.".concat(this.id));
      this.dc.ww.just('dataset-op', {
        id: this.id,
        type: 'del',
        exec: exec
      });
      delete this.dc.dss[this.id];
    } // Fetch data from WW

  }, {
    key: "data",
    value: function () {
      var _data = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var ds;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.dc.ww.exec('get-dataset', this.id);

              case 2:
                ds = _context.sent;

                if (ds) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                return _context.abrupt("return", ds.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function data() {
        return _data.apply(this, arguments);
      }

      return data;
    }()
  }], [{
    key: "watcher",
    value: function watcher(n, p) {
      var nids = n.map(function (x) {
        return x.id;
      });
      var pids = p.map(function (x) {
        return x.id;
      });

      var _iterator = dataset_createForOfIteratorHelper(nids),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;

          if (!pids.includes(id)) {
            var ds = n.filter(function (x) {
              return x.id === id;
            })[0];
            this.dss[id] = new Dataset(this, ds);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = dataset_createForOfIteratorHelper(pids),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var id = _step2.value;

          if (!nids.includes(id) && this.dss[id]) {
            this.dss[id].remove();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // Make an object for data transfer

  }, {
    key: "make_tx",
    value: function make_tx(dc, types) {
      var main = dc.data.chart.data;
      var base = {};

      if (types.find(function (x) {
        return x.type === 'OHLCV';
      })) {
        base = {
          ohlcv: main
        };
      } // TODO: add more sophisticated search
      // (using 'script.datasets' paramerter)

      /*for (var req of types) {
          let ds = Object.values(dc.dss || {})
              .find(x => x.type === req.type)
          if (ds && ds.data) {
              base[ds.id] = {
                  id: ds.id,
                  type: ds.type,
                  data: ds.data
              }
          }
      }*/
      // TODO: Data request callback ?


      return base;
    }
  }]);

  return Dataset;
}(); // Dataset reciever (created on WW)



var DatasetWW = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function DatasetWW(id, data) {
    _classCallCheck(this, DatasetWW);

    this.last_upd = now();
    this.id = id;

    if (Array.isArray(data)) {
      // Regular array
      this.data = data;
      if (id === 'ohlcv') this.type = 'OHLCV';
    } else {
      // Dataset descriptor
      this.data = data.data;
      this.type = data.type;
    }
  } // Update from 'update-data' event
  // TODO: ds size limit (in MB / data points)


  _createClass(DatasetWW, [{
    key: "merge",
    value: function merge(data) {
      var len = this.data.length;

      if (!len) {
        this.data = data;
        return;
      }

      var t0 = this.data[0][0];
      var tN = this.data[len - 1][0];
      var l = data.filter(function (x) {
        return x[0] < t0;
      });
      var r = data.filter(function (x) {
        return x[0] > tN;
      });
      this.data = l.concat(this.data, r);
    } // On dataset operation

  }, {
    key: "op",
    value: function op(se, _op) {
      this.last_upd = now();

      switch (_op.type) {
        case 'set':
          this.data = _op.data;
          se.recalc_size();
          break;

        case 'del':
          delete se.data[this.id];
          se.recalc_size();
          break;

        case 'mrg':
          this.merge(_op.data);
          se.recalc_size();
          break;
      }
    }
  }], [{
    key: "update_all",
    value: function update_all(se, data) {
      for (var k in data) {
        if (k === 'ohlcv') continue;
        var id = k.split('.')[1] || k;
        if (!se.data[id]) continue;
        var arr = se.data[id].data;
        var iN = arr.length - 1;
        var last = arr[iN];

        var _iterator3 = dataset_createForOfIteratorHelper(data[k]),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var dp = _step3.value;

            if (!last || dp[0] > last[0]) {
              arr.push(dp);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        se.data[id].last_upd = now();
      }
    }
  }]);

  return DatasetWW;
}()));
;// CONCATENATED MODULE: ./src/helpers/dc_events.js





function dc_events_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dc_events_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dc_events_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dc_events_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc_events_arrayLikeToArray(o, minLen); }

function dc_events_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// DataCube event handlers





var DCEvents = /*#__PURE__*/function () {
  function DCEvents() {
    var _this = this;

    classCallCheck_classCallCheck(this, DCEvents);

    this.ww = new script_ww_api(this); // Listen to the web-worker events

    this.ww.onevent = function (e) {
      var _iterator = dc_events_createForOfIteratorHelper(_this.tv.controllers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ctrl = _step.value;
          if (ctrl.ww) ctrl.ww(e.data);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      switch (e.data.type) {
        case 'request-data':
          // TODO: DataTunnel class for smarter data transfer
          if (_this.ww._data_uploading) break;
          var data = Dataset.make_tx(_this, e.data.data);

          _this.send_meta_2_ww();

          _this.ww.just('upload-data', data);

          _this.ww._data_uploading = true;
          break;

        case 'overlay-data':
          _this.on_overlay_data(e.data.data);

          break;

        case 'overlay-update':
          _this.on_overlay_update(e.data.data);

          break;

        case 'data-uploaded':
          _this.ww._data_uploading = false;
          break;

        case 'engine-state':
          _this.se_state = Object.assign(_this.se_state || {}, e.data.data);
          break;

        case 'modify-overlay':
          _this.modify_overlay(e.data.data);

          break;

        case 'script-signal':
          _this.tv.$emit('signal', e.data.data);

          break;
      }

      var _iterator2 = dc_events_createForOfIteratorHelper(_this.tv.controllers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ctrl = _step2.value;
          if (ctrl.post_ww) ctrl.post_ww(e.data);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
  } // Called when overalay/tv emits 'custom-event'


  createClass_createClass(DCEvents, [{
    key: "on_custom_event",
    value: function on_custom_event(event, args) {
      switch (event) {
        case 'register-tools':
          this.register_tools(args);
          break;

        case 'exec-script':
          this.exec_script(args);
          break;

        case 'exec-all-scripts':
          this.exec_all_scripts();
          break;

        case 'data-len-changed':
          this.data_changed(args);
          break;

        case 'tool-selected':
          if (!args[0]) break; // TODO: Quick fix, investigate

          if (args[0].split(':')[0] === 'System') {
            this.system_tool(args[0].split(':')[1]);
            break;
          }

          this.tv.$set(this.data, 'tool', args[0]);

          if (args[0] === 'Cursor') {
            this.drawing_mode_off();
          }

          break;

        case 'grid-mousedown':
          this.grid_mousedown(args);
          break;

        case 'drawing-mode-off':
          this.drawing_mode_off();
          break;

        case 'change-settings':
          this.change_settings(args);
          break;

        case 'range-changed':
          this.scripts_onrange.apply(this, _toConsumableArray(args));
          break;

        case 'scroll-lock':
          this.on_scroll_lock(args[0]);
          break;

        case 'object-selected':
          this.object_selected(args);
          break;

        case 'remove-tool':
          this.system_tool('Remove');
          break;

        case 'before-destroy':
          this.before_destroy();
          break;
      }
    } // Triggered when one or multiple settings are changed
    // We select only the changed ones & re-exec them on the
    // web worker

  }, {
    key: "on_settings",
    value: function on_settings(values, prev) {
      var _this2 = this;

      if (!this.sett.scripts) return;
      var delta = {};
      var changed = false;

      var _loop = function _loop() {
        var n = values[i];
        var arr = prev.filter(function (x) {
          return x.v === n.v;
        });

        if (!arr.length && n.p.settings.$props) {
          var id = n.p.settings.$uuid;

          if (utils.is_scr_props_upd(n, prev) && utils.delayed_exec(n.p)) {
            delta[id] = n.v;
            changed = true;

            _this2.tv.$set(n.p, 'loading', true);
          }
        }
      };

      for (var i = 0; i < values.length; i++) {
        _loop();
      }

      if (changed && Object.keys(delta).length) {
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
        var range = this.tv.getRange();
        this.ww.just('update-ov-settings', {
          delta: delta,
          tf: tf,
          range: range
        });
      }
    } // When the set of $uuids is changed

  }, {
    key: "on_ids_changed",
    value: function on_ids_changed(values, prev) {
      var rem = prev.filter(function (x) {
        return x !== undefined && !values.includes(x);
      });

      if (rem.length) {
        this.ww.just('remove-scripts', rem);
      }
    } // Combine all tools and their mods

  }, {
    key: "register_tools",
    value: function register_tools(tools) {
      var preset = {};

      var _iterator3 = dc_events_createForOfIteratorHelper(this.data.tools || []),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var tool = _step3.value;
          preset[tool.type] = tool;
          delete tool.type;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.tv.$set(this.data, 'tools', []);
      var list = [{
        type: 'Cursor',
        icon: icons_namespaceObject["cursor.png"]
      }];

      var _iterator4 = dc_events_createForOfIteratorHelper(tools),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var tool = _step4.value;
          var proto = Object.assign({}, tool.info);
          var type = tool.info.type || 'Default';
          proto.type = "".concat(tool.use_for, ":").concat(type);
          this.merge_presets(proto, preset[tool.use_for]);
          this.merge_presets(proto, preset[proto.type]);
          delete proto.mods;
          list.push(proto);

          for (var mod in tool.info.mods) {
            var mp = Object.assign({}, proto);
            mp = Object.assign(mp, tool.info.mods[mod]);
            mp.type = "".concat(tool.use_for, ":").concat(mod);
            this.merge_presets(mp, preset[tool.use_for]);
            this.merge_presets(mp, preset[mp.type]);
            list.push(mp);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.tv.$set(this.data, 'tools', list);
      this.tv.$set(this.data, 'tool', 'Cursor');
    }
  }, {
    key: "exec_script",
    value: function exec_script(args) {
      if (args.length && this.sett.scripts) {
        var obj = this.get_overlay(args[0]);
        if (!obj || obj.scripts === false) return;

        if (obj.script && obj.script.src) {
          args[0].src = obj.script.src; // opt, override the src
        } // Parse script props & get the values from the ov
        // TODO: remove unnecessary script initializations


        var s = obj.settings;
        var props = args[0].src.props || {};
        if (!s.$uuid) s.$uuid = "".concat(obj.type, "-").concat(utils.uuid2());
        args[0].uuid = s.$uuid;
        args[0].sett = s;

        for (var k in props || {}) {
          var proto = props[k];

          if (s[k] !== undefined) {
            proto.val = s[k]; // use the existing val

            continue;
          }

          if (proto.def === undefined) {
            // TODO: add support of info / errors to the legend
            console.error("Overlay ".concat(obj.id, ": script prop '").concat(k, "' ") + "doesn't have a default value");
            return;
          }

          s[k] = proto.val = proto.def; // set the default
        } // Remove old props (dropped by the current exec)


        if (s.$props) {
          for (var k in s) {
            if (s.$props.includes(k) && !(k in props)) {
              delete s[k];
            }
          }
        }

        s.$props = Object.keys(args[0].src.props || {});
        this.tv.$set(obj, 'loading', true);
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
        var range = this.tv.getRange();

        if (obj.script && obj.script.output != null) {
          args[0].output = obj.script.output;
        }

        this.ww.just('exec-script', {
          s: args[0],
          tf: tf,
          range: range
        });
      }
    }
  }, {
    key: "exec_all_scripts",
    value: function exec_all_scripts() {
      if (!this.sett.scripts) return;
      this.set_loading(true);
      var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
      var range = this.tv.getRange();
      this.ww.just('exec-all-scripts', {
        tf: tf,
        range: range
      });
    }
  }, {
    key: "scripts_onrange",
    value: function scripts_onrange(r) {
      if (!this.sett.scripts) return;
      var delta = {};
      this.get('.').forEach(function (v) {
        if (v.script && v.script.execOnRange && v.settings.$uuid) {
          // TODO: execInterrupt flag?
          if (utils.delayed_exec(v)) {
            delta[v.settings.$uuid] = v.settings;
          }
        }
      });

      if (Object.keys(delta).length) {
        var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
        var range = this.tv.getRange();
        this.ww.just('update-ov-settings', {
          delta: delta,
          tf: tf,
          range: range
        });
      }
    } // Overlay modification from WW

  }, {
    key: "modify_overlay",
    value: function modify_overlay(upd) {
      var obj = this.get_overlay(upd);

      if (obj) {
        for (var k in upd.fields || {}) {
          if (typeof_typeof(obj[k]) === 'object') {
            this.merge("".concat(upd.uuid, ".").concat(k), upd.fields[k]);
          } else {
            this.tv.$set(obj, k, upd.fields[k]);
          }
        }
      }
    }
  }, {
    key: "data_changed",
    value: function data_changed(args) {
      if (!this.sett.scripts) return;
      if (this.sett.data_change_exec === false) return;
      var main = this.data.chart.data;
      if (this.ww._data_uploading) return;
      if (!this.se_state.scripts) return;
      this.send_meta_2_ww();
      this.ww.just('upload-data', {
        ohlcv: main
      });
      this.ww._data_uploading = true;
      this.set_loading(true);
    }
  }, {
    key: "set_loading",
    value: function set_loading(flag) {
      var skrr = this.get('.').filter(function (x) {
        return x.settings.$props;
      });

      var _iterator5 = dc_events_createForOfIteratorHelper(skrr),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var s = _step5.value;
          this.merge("".concat(s.id), {
            loading: flag
          });
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "send_meta_2_ww",
    value: function send_meta_2_ww() {
      var tf = this.tv.$refs.chart.interval_ms || this.data.chart.tf;
      var range = this.tv.getRange();
      this.ww.just('send-meta-info', {
        tf: tf,
        range: range
      });
    }
  }, {
    key: "merge_presets",
    value: function merge_presets(proto, preset) {
      if (!preset) return;

      for (var k in preset) {
        if (k === 'settings') {
          Object.assign(proto[k], preset[k]);
        } else {
          proto[k] = preset[k];
        }
      }
    }
  }, {
    key: "grid_mousedown",
    value: function grid_mousedown(args) {
      var _this3 = this;

      // TODO: tool state finished?
      this.object_selected([]); // Remove the previous RangeTool

      var rem = function rem() {
        return _this3.get('RangeTool').filter(function (x) {
          return x.settings.shiftMode;
        }).forEach(function (x) {
          return _this3.del(x.id);
        });
      };

      if (this.data.tool && this.data.tool !== 'Cursor' && !this.data.drawingMode) {
        // Prevent from "null" tools (tool created with HODL)
        if (args[1].type !== 'tap') {
          this.tv.$set(this.data, 'drawingMode', true);
          this.build_tool(args[0]);
        } else {
          this.tv.showTheTip("<b>Hodl</b>+<b>Drug</b> to create, " + "<b>Tap</b> to finish a tool");
        }
      } else if (this.sett.shift_measure && args[1].shiftKey) {
        rem();
        this.tv.$nextTick(function () {
          return _this3.build_tool(args[0], 'RangeTool:ShiftMode');
        });
      } else {
        rem();
      }
    }
  }, {
    key: "drawing_mode_off",
    value: function drawing_mode_off() {
      this.tv.$set(this.data, 'drawingMode', false);
      this.tv.$set(this.data, 'tool', 'Cursor');
    } // Place a new tool

  }, {
    key: "build_tool",
    value: function build_tool(grid_id, type) {
      var list = this.data.tools;
      type = type || this.data.tool;
      var proto = list.find(function (x) {
        return x.type === type;
      });
      if (!proto) return;
      var sett = Object.assign({}, proto.settings || {});
      var data = (proto.data || []).slice();
      if (!('legend' in sett)) sett.legend = false;
      if (!('z-index' in sett)) sett['z-index'] = 100;
      sett.$selected = true;
      sett.$state = 'wip';
      var side = grid_id ? 'offchart' : 'onchart';
      var id = this.add(side, {
        name: proto.name,
        type: type.split(':')[0],
        settings: sett,
        data: data,
        grid: {
          id: grid_id
        }
      });
      sett.$uuid = "".concat(id, "-").concat(utils.now());
      this.tv.$set(this.data, 'selected', sett.$uuid);
      this.add_trash_icon();
    } // Remove selected / Remove all, etc

  }, {
    key: "system_tool",
    value: function system_tool(type) {
      switch (type) {
        case 'Remove':
          if (this.data.selected) {
            this.del(this.data.selected);
            this.remove_trash_icon();
            this.drawing_mode_off();
            this.on_scroll_lock(false);
          }

          break;
      }
    } // Apply new overlay settings

  }, {
    key: "change_settings",
    value: function change_settings(args) {
      var settings = args[0];
      delete settings.id;
      var grid_id = args[1];
      this.merge("".concat(args[3], ".settings"), settings);
    } // Lock the scrolling mechanism

  }, {
    key: "on_scroll_lock",
    value: function on_scroll_lock(flag) {
      this.tv.$set(this.data, 'scrollLock', flag);
    } // When new object is selected / unselected

  }, {
    key: "object_selected",
    value: function object_selected(args) {
      var q = this.data.selected;

      if (q) {
        // Check if current drawing is finished
        //let res = this.get_one(`${q}.settings`)
        //if (res && res.$state !== 'finished') return
        this.merge("".concat(q, ".settings"), {
          $selected: false
        });
        this.remove_trash_icon();
      }

      this.tv.$set(this.data, 'selected', null);
      if (!args.length) return;
      this.tv.$set(this.data, 'selected', args[2]);
      this.merge("".concat(args[2], ".settings"), {
        $selected: true
      });
      this.add_trash_icon();
    }
  }, {
    key: "add_trash_icon",
    value: function add_trash_icon() {
      var type = 'System:Remove';

      if (this.data.tools.find(function (x) {
        return x.type === type;
      })) {
        return;
      }

      this.data.tools.push({
        type: type,
        icon: icons_namespaceObject["trash.png"]
      });
    }
  }, {
    key: "remove_trash_icon",
    value: function remove_trash_icon() {
      // TODO: Does not call Toolbar render (distr version)
      var type = 'System:Remove';
      utils.overwrite(this.data.tools, this.data.tools.filter(function (x) {
        return x.type !== type;
      }));
    } // Set overlay data from the web-worker

  }, {
    key: "on_overlay_data",
    value: function on_overlay_data(data) {
      var _this4 = this;

      this.get('.').forEach(function (x) {
        if (x.settings.$synth) _this4.del("".concat(x.id));
      });

      var _iterator6 = dc_events_createForOfIteratorHelper(data),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var ov = _step6.value;
          var obj = this.get_one("".concat(ov.id));

          if (obj) {
            this.tv.$set(obj, 'loading', false);
            if (!ov.data) continue;
            obj.data = ov.data;
          }

          if (!ov.new_ovs) continue;

          for (var id in ov.new_ovs.onchart) {
            if (!this.get_one("onchart.".concat(id))) {
              this.add('onchart', ov.new_ovs.onchart[id]);
            }
          }

          for (var id in ov.new_ovs.offchart) {
            if (!this.get_one("offchart.".concat(id))) {
              this.add('offchart', ov.new_ovs.offchart[id]);
            }
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    } // Push overlay updates from the web-worker

  }, {
    key: "on_overlay_update",
    value: function on_overlay_update(data) {
      var _iterator7 = dc_events_createForOfIteratorHelper(data),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var ov = _step7.value;
          if (!ov.data) continue;
          var obj = this.get_one("".concat(ov.id));

          if (obj) {
            this.fast_merge(obj.data, ov.data, false);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    } // Clean-up unfinished business (tools)

  }, {
    key: "before_destroy",
    value: function before_destroy() {
      var f = function f(x) {
        return !x.settings.$state || x.settings.$state === 'finished';
      };

      this.data.onchart = this.data.onchart.filter(f);
      this.data.offchart = this.data.offchart.filter(f);
      this.drawing_mode_off();
      this.on_scroll_lock(false);
      this.object_selected([]);
      this.ww.destroy();
    } // Get overlay by grid-layer id

  }, {
    key: "get_overlay",
    value: function get_overlay(obj) {
      var id = obj.id || "g".concat(obj.grid_id, "_").concat(obj.layer_id);
      var dcid = obj.uuid || this.gldc[id];
      return this.get_one("".concat(dcid));
    }
  }]);

  return DCEvents;
}();


;// CONCATENATED MODULE: ./src/helpers/dc_core.js









function dc_core_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = dc_core_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dc_core_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dc_core_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dc_core_arrayLikeToArray(o, minLen); }

function dc_core_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function dc_core_createSuper(Derived) { var hasNativeReflectConstruct = dc_core_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function dc_core_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// DataCube "private" methods




var DCCore = /*#__PURE__*/function (_DCEvents) {
  _inherits(DCCore, _DCEvents);

  var _super = dc_core_createSuper(DCCore);

  function DCCore() {
    classCallCheck_classCallCheck(this, DCCore);

    return _super.apply(this, arguments);
  }

  createClass_createClass(DCCore, [{
    key: "init_tvjs",
    value: // Set TV instance (once). Called by TradingVue itself
    function init_tvjs($root) {
      var _this = this;

      if (!this.tv) {
        this.tv = $root;
        this.init_data();
        this.update_ids(); // Listen to all setting changes
        // TODO: works only with merge()

        this.tv.$watch(function () {
          return _this.get_by_query('.settings');
        }, function (n, p) {
          return _this.on_settings(n, p);
        }); // Listen to all indices changes

        this.tv.$watch(function () {
          return _this.get('.').map(function (x) {
            return x.settings.$uuid;
          });
        }, function (n, p) {
          return _this.on_ids_changed(n, p);
        }); // Watch for all 'datasets' changes

        this.tv.$watch(function () {
          return _this.get('datasets');
        }, Dataset.watcher.bind(this));
      }
    } // Init Data Structure v1.1

  }, {
    key: "init_data",
    value: function init_data($root) {
      if (!('chart' in this.data)) {
        this.tv.$set(this.data, 'chart', {
          type: 'Candles',
          data: this.data.ohlcv || []
        });
      }

      if (!('onchart' in this.data)) {
        this.tv.$set(this.data, 'onchart', []);
      }

      if (!('offchart' in this.data)) {
        this.tv.$set(this.data, 'offchart', []);
      }

      if (!this.data.chart.settings) {
        this.tv.$set(this.data.chart, 'settings', {});
      } // Remove ohlcv cuz we have Data v1.1^


      delete this.data.ohlcv;

      if (!('datasets' in this.data)) {
        this.tv.$set(this.data, 'datasets', []);
      } // Init dataset proxies


      var _iterator = dc_core_createForOfIteratorHelper(this.data.datasets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ds = _step.value;
          if (!this.dss) this.dss = {};
          this.dss[ds.id] = new Dataset(this, ds);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Range change callback (called by TradingVue)
    // TODO: improve (reliablity + chunk with limited size)

  }, {
    key: "range_changed",
    value: function () {
      var _range_changed = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(range, tf, check) {
        var _this2 = this;

        var first, prom;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (check === void 0) {
                  check = false;
                }

                if (this.loader) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (this.loading) {
                  _context.next = 19;
                  break;
                }

                first = this.data.chart.data[0][0];

                if (!(range[0] < first)) {
                  _context.next = 19;
                  break;
                }

                this.loading = true;
                _context.next = 9;
                return utils.pause(250);

              case 9:
                // Load bigger chunks
                range = range.slice(); // copy

                range[0] = Math.floor(range[0]);
                range[1] = Math.floor(first);
                prom = this.loader(range, tf, function (d) {
                  // Callback way
                  _this2.chunk_loaded(d);
                });

                if (!(prom && prom.then)) {
                  _context.next = 19;
                  break;
                }

                _context.t0 = this;
                _context.next = 17;
                return prom;

              case 17:
                _context.t1 = _context.sent;

                _context.t0.chunk_loaded.call(_context.t0, _context.t1);

              case 19:
                if (!check) this.last_chunk = [range, tf];

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function range_changed(_x, _x2, _x3) {
        return _range_changed.apply(this, arguments);
      }

      return range_changed;
    }() // A new chunk of data is loaded
    // TODO: bulletproof fetch

  }, {
    key: "chunk_loaded",
    value: function chunk_loaded(data) {
      // Updates only candlestick data, or
      if (Array.isArray(data)) {
        this.merge('chart.data', data);
      } else {
        // Bunch of overlays, including chart.data
        for (var k in data) {
          this.merge(k, data[k]);
        }
      }

      this.loading = false;

      if (this.last_chunk) {
        this.range_changed.apply(this, _toConsumableArray(this.last_chunk).concat([true]));
        this.last_chunk = null;
      }
    } // Update ids for all overlays

  }, {
    key: "update_ids",
    value: function update_ids() {
      this.data.chart.id = "chart.".concat(this.data.chart.type);
      var count = {}; // grid_id,layer_id => DC id mapping

      this.gldc = {}, this.dcgl = {};

      var _iterator2 = dc_core_createForOfIteratorHelper(this.data.onchart),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var ov = _step2.value;

          if (count[ov.type] === undefined) {
            count[ov.type] = 0;
          }

          var i = count[ov.type]++;
          ov.id = "onchart.".concat(ov.type).concat(i);
          if (!ov.name) ov.name = ov.type + " ".concat(i);
          if (!ov.settings) this.tv.$set(ov, 'settings', {}); // grid_id,layer_id => DC id mapping

          this.gldc["g0_".concat(ov.type, "_").concat(i)] = ov.id;
          this.dcgl[ov.id] = "g0_".concat(ov.type, "_").concat(i);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      count = {};
      var grids = [{}];
      var gid = 0;

      var _iterator3 = dc_core_createForOfIteratorHelper(this.data.offchart),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var ov = _step3.value;

          if (count[ov.type] === undefined) {
            count[ov.type] = 0;
          }

          var _i = count[ov.type]++;

          ov.id = "offchart.".concat(ov.type).concat(_i);
          if (!ov.name) ov.name = ov.type + " ".concat(_i);
          if (!ov.settings) this.tv.$set(ov, 'settings', {}); // grid_id,layer_id => DC id mapping

          gid++;
          var rgid = (ov.grid || {}).id || gid; // real grid_id
          // When we merge grid, skip ++

          if ((ov.grid || {}).id) gid--;
          if (!grids[rgid]) grids[rgid] = {};

          if (grids[rgid][ov.type] === undefined) {
            grids[rgid][ov.type] = 0;
          }

          var ri = grids[rgid][ov.type]++;
          this.gldc["g".concat(rgid, "_").concat(ov.type, "_").concat(ri)] = ov.id;
          this.dcgl[ov.id] = "g".concat(rgid, "_").concat(ov.type, "_").concat(ri);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } // TODO: chart refine (from the exchange chart)

  }, {
    key: "update_candle",
    value: function update_candle(data) {
      var ohlcv = this.data.chart.data;
      var last = ohlcv[ohlcv.length - 1];
      var candle = data['candle'];
      var tf = this.tv.$refs.chart.interval_ms;
      var t_next = last[0] + tf;
      var now = data.t || utils.now();
      var t = now >= t_next ? now - now % tf : last[0]; // Update the entire candle

      if (candle.length >= 6) {
        t = candle[0];
      } else {
        candle = [t].concat(_toConsumableArray(candle));
      }

      this.agg.push('ohlcv', candle);
      this.update_overlays(data, t, tf);
      return t >= t_next;
    }
  }, {
    key: "update_tick",
    value: function update_tick(data) {
      var ohlcv = this.data.chart.data;
      var last = ohlcv[ohlcv.length - 1];
      var tick = data['price'];
      var volume = data['volume'] || 0;
      var tf = this.tv.$refs.chart.interval_ms;

      if (!tf) {
        return console.warn('Define the main timeframe');
      }

      var now = data.t || utils.now();
      if (!last) last = [now - now % tf];
      var t_next = last[0] + tf;
      var t = now >= t_next ? now - now % tf : last[0];

      if ((t >= t_next || !ohlcv.length) && tick !== undefined) {
        // And new zero-height candle
        var nc = [t, tick, tick, tick, tick, volume];
        this.agg.push('ohlcv', nc, tf);
        ohlcv.push(nc);
        this.scroll_to(t);
      } else if (tick !== undefined) {
        // Update an existing one
        // TODO: make a separate class Sampler
        last[2] = Math.max(tick, last[2]);
        last[3] = Math.min(tick, last[3]);
        last[4] = tick;
        last[5] += volume;
        this.agg.push('ohlcv', last, tf);
      }

      this.update_overlays(data, t, tf);
      return t >= t_next;
    } // Updates all overlays with given values.

  }, {
    key: "update_overlays",
    value: function update_overlays(data, t, tf) {
      for (var k in data) {
        if (k === 'price' || k === 'volume' || k === 'candle' || k === 't') {
          continue;
        }

        if (k.includes('datasets.')) {
          this.agg.push(k, data[k], tf);
          continue;
        }

        if (!Array.isArray(data[k])) {
          var val = [data[k]];
        } else {
          val = data[k];
        }

        if (!k.includes('.data')) k += '.data';
        this.agg.push(k, [t].concat(_toConsumableArray(val)), tf);
      }
    } // Returns array of objects matching query.
    // Object contains { parent, index, value }
    // TODO: query caching

  }, {
    key: "get_by_query",
    value: function get_by_query(query, chuck) {
      var tuple = query.split('.');

      switch (tuple[0]) {
        case 'chart':
          var result = this.chart_as_piv(tuple);
          break;

        case 'onchart':
        case 'offchart':
          result = this.query_search(query, tuple);
          break;

        case 'datasets':
          result = this.query_search(query, tuple);

          var _iterator4 = dc_core_createForOfIteratorHelper(result),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var r = _step4.value;

              if (r.i === 'data') {
                r.v = this.dss[r.p.id].data();
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          break;

        default:
          /* Should get('.') return also the chart? */

          /*let ch = this.chart_as_query([
              'chart',
              tuple[1]
          ])*/
          var on = this.query_search(query, ['onchart', tuple[0], tuple[1]]);
          var off = this.query_search(query, ['offchart', tuple[0], tuple[1]]);
          result = [].concat(_toConsumableArray(on), _toConsumableArray(off));
          break;
      }

      return result.filter(function (x) {
        return !(x.v || {}).locked || chuck;
      });
    }
  }, {
    key: "chart_as_piv",
    value: function chart_as_piv(tuple) {
      var field = tuple[1];
      if (field) return [{
        p: this.data.chart,
        i: field,
        v: this.data.chart[field]
      }];else return [{
        p: this.data,
        i: 'chart',
        v: this.data.chart
      }];
    }
  }, {
    key: "query_search",
    value: function query_search(query, tuple) {
      var _this3 = this;

      var side = tuple[0];
      var path = tuple[1] || '';
      var field = tuple[2];
      var arr = this.data[side].filter(function (x) {
        return x.id === query || x.id && x.id.includes(path) || x.name === query || x.name && x.name.includes(path) || query.includes((x.settings || {}).$uuid);
      });

      if (field) {
        return arr.map(function (x) {
          return {
            p: x,
            i: field,
            v: x[field]
          };
        });
      }

      return arr.map(function (x, i) {
        return {
          p: _this3.data[side],
          i: _this3.data[side].indexOf(x),
          v: x
        };
      });
    }
  }, {
    key: "merge_objects",
    value: function merge_objects(obj, data, new_obj) {
      if (new_obj === void 0) {
        new_obj = {};
      }

      // The only way to get Vue to update all stuff
      // reactively is to create a brand new object.
      // TODO: Is there a simpler approach?
      Object.assign(new_obj, obj.v);
      Object.assign(new_obj, data);
      this.tv.$set(obj.p, obj.i, new_obj);
    } // Merge overlapping time series

  }, {
    key: "merge_ts",
    value: function merge_ts(obj, data) {
      // Assume that both arrays are pre-sorted
      if (!data.length) return obj.v;
      var r1 = [obj.v[0][0], obj.v[obj.v.length - 1][0]];
      var r2 = [data[0][0], data[data.length - 1][0]]; // Overlap

      var o = [Math.max(r1[0], r2[0]), Math.min(r1[1], r2[1])];

      if (o[1] >= o[0]) {
        var _obj$v, _data;

        var _this$ts_overlap = this.ts_overlap(obj.v, data, o),
            od = _this$ts_overlap.od,
            d1 = _this$ts_overlap.d1,
            d2 = _this$ts_overlap.d2;

        (_obj$v = obj.v).splice.apply(_obj$v, _toConsumableArray(d1));

        (_data = data).splice.apply(_data, _toConsumableArray(d2)); // Dst === Overlap === Src


        if (!obj.v.length && !data.length) {
          this.tv.$set(obj.p, obj.i, od);
          return obj.v;
        } // If src is totally contained in dst


        if (!data.length) {
          data = obj.v.splice(d1[0]);
        } // If dst is totally contained in src


        if (!obj.v.length) {
          obj.v = data.splice(d2[0]);
        }

        this.tv.$set(obj.p, obj.i, this.combine(obj.v, od, data));
      } else {
        this.tv.$set(obj.p, obj.i, this.combine(obj.v, [], data));
      }

      return obj.v;
    } // TODO: review performance, move to worker

  }, {
    key: "ts_overlap",
    value: function ts_overlap(arr1, arr2, range) {
      var t1 = range[0];
      var t2 = range[1];
      var ts = {}; // timestamp map

      var a1 = arr1.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      });
      var a2 = arr2.filter(function (x) {
        return x[0] >= t1 && x[0] <= t2;
      }); // Indices of segments

      var id11 = arr1.indexOf(a1[0]);
      var id12 = arr1.indexOf(a1[a1.length - 1]);
      var id21 = arr2.indexOf(a2[0]);
      var id22 = arr2.indexOf(a2[a2.length - 1]);

      for (var i = 0; i < a1.length; i++) {
        ts[a1[i][0]] = a1[i];
      }

      for (var i = 0; i < a2.length; i++) {
        ts[a2[i][0]] = a2[i];
      }

      var ts_sorted = Object.keys(ts).sort();
      return {
        od: ts_sorted.map(function (x) {
          return ts[x];
        }),
        d1: [id11, id12 - id11 + 1],
        d2: [id21, id22 - id21 + 1]
      };
    } // Combine parts together:
    // (destination, overlap, source)

  }, {
    key: "combine",
    value: function combine(dst, o, src) {
      function last(arr) {
        return arr[arr.length - 1][0];
      }

      if (!dst.length) {
        dst = o;
        o = [];
      }

      if (!src.length) {
        src = o;
        o = [];
      } // The overlap right in the middle


      if (src[0][0] >= dst[0][0] && last(src) <= last(dst)) {
        return Object.assign(dst, o); // The overlap is on the right
      } else if (last(src) > last(dst)) {
        // Psh(...) is faster but can overflow the stack
        if (o.length < 100000 && src.length < 100000) {
          var _dst;

          (_dst = dst).push.apply(_dst, _toConsumableArray(o).concat(_toConsumableArray(src)));

          return dst;
        } else {
          return dst.concat(o, src);
        } // The overlap is on the left

      } else if (src[0][0] < dst[0][0]) {
        // Push(...) is faster but can overflow the stack
        if (o.length < 100000 && src.length < 100000) {
          var _src;

          (_src = src).push.apply(_src, _toConsumableArray(o).concat(_toConsumableArray(dst)));

          return src;
        } else {
          return src.concat(o, dst);
        }
      } else {
        return [];
      }
    } // Simple data-point merge (faster)

  }, {
    key: "fast_merge",
    value: function fast_merge(data, point, main) {
      if (main === void 0) {
        main = true;
      }

      if (!data) return;
      var last_t = (data[data.length - 1] || [])[0];
      var upd_t = point[0];

      if (!data.length || upd_t > last_t) {
        data.push(point);

        if (main && this.sett.auto_scroll) {
          this.scroll_to(upd_t);
        }
      } else if (upd_t === last_t) {
        if (main) {
          this.tv.$set(data, data.length - 1, point);
        } else {
          data[data.length - 1] = point;
        }
      }
    }
  }, {
    key: "scroll_to",
    value: function scroll_to(t) {
      if (this.tv.$refs.chart.cursor.locked) return;
      var last = this.tv.$refs.chart.last_candle;
      if (!last) return;
      var tl = last[0];
      var d = this.tv.getRange()[1] - tl;
      if (d > 0) this.tv["goto"](t + d);
    }
  }]);

  return DCCore;
}(DCEvents);


;// CONCATENATED MODULE: ./src/helpers/sett_proxy.js
// Sends all dc.sett changes to the web-worker
/* harmony default export */ function sett_proxy(sett, ww) {
  var h = {
    get: function get(sett, k) {
      return sett[k];
    },
    set: function set(sett, k, v) {
      sett[k] = v;
      ww.just('update-dc-settings', sett);
      return true;
    }
  };
  ww.just('update-dc-settings', sett);
  return new Proxy(sett, h);
}
;// CONCATENATED MODULE: ./src/helpers/agg_tool.js


// Tick aggregation


var AggTool = /*#__PURE__*/function () {
  function AggTool(dc, _int) {
    if (_int === void 0) {
      _int = 100;
    }

    classCallCheck_classCallCheck(this, AggTool);

    this.symbols = {};
    this["int"] = _int; // Itarval in ms

    this.dc = dc;
    this.st_id = null;
    this.data_changed = false;
  }

  createClass_createClass(AggTool, [{
    key: "push",
    value: function push(sym, upd, tf) {
      var _this = this;

      // Start auto updates
      if (!this.st_id) {
        this.st_id = setTimeout(function () {
          return _this.update();
        });
      }

      tf = parseInt(tf);
      var old = this.symbols[sym];
      var t = utils.now();
      var isds = sym.includes('datasets.');
      this.data_changed = true;

      if (!old) {
        this.symbols[sym] = {
          upd: upd,
          t: t,
          data: []
        };
      } else if (upd[0] >= old.upd[0] + tf && !isds) {
        // Refine the previous data point
        this.refine(sym, old.upd.slice());
        this.symbols[sym] = {
          upd: upd,
          t: t,
          data: []
        };
      } else {
        // Tick updates the current
        this.symbols[sym].upd = upd;
        this.symbols[sym].t = t;
      }

      if (isds) {
        this.symbols[sym].data.push(upd);
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      var out = {};

      for (var sym in this.symbols) {
        var upd = this.symbols[sym].upd;

        switch (sym) {
          case 'ohlcv':
            var data = this.dc.data.chart.data;
            this.dc.fast_merge(data, upd);
            out.ohlcv = data.slice(-2);
            break;

          default:
            if (sym.includes('datasets.')) {
              this.update_ds(sym, out);
              continue;
            }

            var data = this.dc.get_one("".concat(sym));
            if (!data) continue;
            this.dc.fast_merge(data, upd, false);
            break;
        }
      } // TODO: fill gaps


      if (this.data_changed) {
        this.dc.ww.just('update-data', out);
        this.data_changed = false;
      }

      setTimeout(function () {
        return _this2.update();
      }, this["int"]);
    }
  }, {
    key: "refine",
    value: function refine(sym, upd) {
      if (sym === 'ohlcv') {
        var data = this.dc.data.chart.data;
        this.dc.fast_merge(data, upd);
      } else {
        var data = this.dc.get_one("".concat(sym));
        if (!data) return;
        this.dc.fast_merge(data, upd, false);
      }
    }
  }, {
    key: "update_ds",
    value: function update_ds(sym, out) {
      var data = this.symbols[sym].data;

      if (data.length) {
        out[sym] = data;
        this.symbols[sym].data = [];
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.symbols = {};
    }
  }]);

  return AggTool;
}();


;// CONCATENATED MODULE: ./src/helpers/datacube.js








function datacube_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = datacube_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function datacube_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return datacube_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return datacube_arrayLikeToArray(o, minLen); }

function datacube_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function datacube_createSuper(Derived) { var hasNativeReflectConstruct = datacube_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function datacube_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// Main DataHelper class. A container for data,
// which works as a proxy and CRUD interface



 // Interface methods. Private methods in dc_core.js

var DataCube = /*#__PURE__*/function (_DCCore) {
  _inherits(DataCube, _DCCore);

  var _super = datacube_createSuper(DataCube);

  function DataCube(data, sett) {
    var _this;

    if (data === void 0) {
      data = {};
    }

    if (sett === void 0) {
      sett = {};
    }

    classCallCheck_classCallCheck(this, DataCube);

    var def_sett = {
      aggregation: 100,
      // Update aggregation interval
      script_depth: 0,
      // 0 === Exec on all data
      auto_scroll: true,
      // Auto scroll to a new candle
      scripts: true,
      // Enable overlays scripts,
      ww_ram_limit: 0,
      // WebWorker RAM limit (MB)
      node_url: null,
      // Use node.js instead of WW
      shift_measure: true // Draw measurment shift+click

    };
    sett = Object.assign(def_sett, sett);
    _this = _super.call(this);
    _this.sett = sett;
    _this.data = data;
    _this.sett = sett_proxy(sett, _this.ww);
    _this.agg = new AggTool(_assertThisInitialized(_this), sett.aggregation);
    _this.se_state = {}; //this.agg.update = this.agg_update.bind(this)

    return _this;
  } // Add new overlay


  createClass_createClass(DataCube, [{
    key: "add",
    value: function add(side, overlay) {
      if (side !== 'onchart' && side !== 'offchart' && side !== 'datasets') {
        return;
      }

      this.data[side].push(overlay);
      this.update_ids();
      return overlay.id;
    } // Get all objects matching the query

  }, {
    key: "get",
    value: function get(query) {
      return this.get_by_query(query).map(function (x) {
        return x.v;
      });
    } // Get first object matching the query

  }, {
    key: "get_one",
    value: function get_one(query) {
      return this.get_by_query(query).map(function (x) {
        return x.v;
      })[0];
    } // Set data (reactively)

  }, {
    key: "set",
    value: function set(query, data) {
      var objects = this.get_by_query(query);

      var _iterator = datacube_createForOfIteratorHelper(objects),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var obj = _step.value;
          var i = obj.i !== undefined ? obj.i : obj.p.indexOf(obj.v);

          if (i !== -1) {
            this.tv.$set(obj.p, i, data);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.update_ids();
    } // Merge object or array (reactively)

  }, {
    key: "merge",
    value: function merge(query, data) {
      var objects = this.get_by_query(query);

      var _iterator2 = datacube_createForOfIteratorHelper(objects),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var obj = _step2.value;

          if (Array.isArray(obj.v)) {
            if (!Array.isArray(data)) continue; // If array is a timeseries, merge it by timestamp
            // else merge by item index

            if (obj.v[0] && obj.v[0].length >= 2) {
              this.merge_ts(obj, data);
            } else {
              this.merge_objects(obj, data, []);
            }
          } else if (typeof_typeof(obj.v) === 'object') {
            this.merge_objects(obj, data);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.update_ids();
    } // Remove an overlay by query (id/type/name/...)

  }, {
    key: "del",
    value: function del(query) {
      var objects = this.get_by_query(query);

      var _iterator3 = datacube_createForOfIteratorHelper(objects),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var obj = _step3.value;
          // Find current index of the field (if not defined)
          var i = typeof obj.i !== 'number' ? obj.i : obj.p.indexOf(obj.v);

          if (i !== -1) {
            this.tv.$delete(obj.p, i);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.update_ids();
    } // Update/append data point, depending on timestamp

  }, {
    key: "update",
    value: function update(data) {
      if (data['candle']) {
        return this.update_candle(data);
      } else {
        return this.update_tick(data);
      }
    } // Lock overlays from being pulled by query_search
    // TODO: subject to review

  }, {
    key: "lock",
    value: function lock(query) {
      var objects = this.get_by_query(query);
      objects.forEach(function (x) {
        if (x.v && x.v.id && x.v.type) {
          x.v.locked = true;
        }
      });
    } // Unlock overlays from being pulled by query_search
    //

  }, {
    key: "unlock",
    value: function unlock(query) {
      var objects = this.get_by_query(query, true);
      objects.forEach(function (x) {
        if (x.v && x.v.id && x.v.type) {
          x.v.locked = false;
        }
      });
    } // Show indicator

  }, {
    key: "show",
    value: function show(query) {
      if (query === 'offchart' || query === 'onchart') {
        query += '.';
      } else if (query === '.') {
        query = '';
      }

      this.merge(query + '.settings', {
        display: true
      });
    } // Hide indicator

  }, {
    key: "hide",
    value: function hide(query) {
      if (query === 'offchart' || query === 'onchart') {
        query += '.';
      } else if (query === '.') {
        query = '';
      }

      this.merge(query + '.settings', {
        display: false
      });
    } // Set data loader callback

  }, {
    key: "onrange",
    value: function onrange(callback) {
      var _this2 = this;

      this.loader = callback;
      setTimeout(function () {
        return _this2.tv.set_loader(callback ? _this2 : null);
      }, 0);
    }
  }]);

  return DataCube;
}(DCCore);


;// CONCATENATED MODULE: ./src/mixins/interface.js
// Html interface, shown on top of the grid.
// Can be static (a tooltip) or interactive,
// e.g. a control panel.
/* harmony default export */ const mixins_interface = ({
  props: ['ux', 'updater', 'colors', 'wrapper'],
  mounted: function mounted() {
    this._$emit = this.$emit;
    this.$emit = this.custom_event;
    if (this.init) this.init();
  },
  methods: {
    close: function close() {
      this.$emit('custom-event', {
        event: 'close-interface',
        args: [this.$props.ux.uuid]
      });
    },
    // TODO: emit all the way to the uxlist
    // add apply the changes there
    modify: function modify(obj) {
      this.$emit('custom-event', {
        event: 'modify-interface',
        args: [this.$props.ux.uuid, obj]
      });
    },
    custom_event: function custom_event(event) {
      if (event.split(':')[0] === 'hook') return;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this._$emit('custom-event', {
        event: event,
        args: args
      });
    }
  },
  computed: {
    overlay: function overlay() {
      return this.$props.ux.overlay;
    },
    layout: function layout() {
      return this.overlay.layout;
    },
    uxr: function uxr() {
      return this.$props.ux;
    }
  },
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/index.js















var primitives = {
  Candle: CandleExt,
  Volbar: VolbarExt,
  Line: Line,
  Pin: Pin,
  Price: Price,
  Ray: Ray,
  Seg: Seg
};

TradingVue.install = function (Vue) {
  Vue.component(TradingVue.name, TradingVue);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TradingVue);
  window.TradingVueLib = {
    TradingVue: TradingVue,
    Overlay: overlay,
    Utils: utils,
    Constants: constants,
    Candle: CandleExt,
    Volbar: VolbarExt,
    layout_cnv: layout_cnv,
    layout_vol: layout_vol,
    DataCube: DataCube,
    Tool: tool,
    Interface: mixins_interface,
    primitives: primitives
  };
}

/* harmony default export */ const src = (TradingVue);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=trading-chart.js.map
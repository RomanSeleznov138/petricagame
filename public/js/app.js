/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BOT_TOKEN = "7102705599:AAF3mO6jObqN5V5YF0i0OMM-BMha_t_aUBQ";
var ingredients = [{
  name: "Starlight Blossom",
  image: "Ingredient_1.png"
}, {
  name: "Moonbeam Fern",
  image: "Ingredient_2.png"
}, {
  name: "Sunfire Lotus",
  image: "Ingredient_3.png"
}, {
  name: "Shadowvine",
  image: "Ingredient_4.png"
}, {
  name: "Celestial Ivy",
  image: "Ingredient_5.png"
}, {
  name: "Thunderleaf",
  image: "Ingredient_6.png"
}, {
  name: "Frostbloom",
  image: "Ingredient_7.png"
}, {
  name: "Embergrass",
  image: "Ingredient_8.png"
}, {
  name: "Spiritroot",
  image: "Ingredient_9.png"
}, {
  name: "Starfall Petal",
  image: "Ingredient_10.png"
}, {
  name: "Voidbloom",
  image: "Ingredient_11.png"
}, {
  name: "Dreamshade",
  image: "Ingredient_12.png"
}, {
  name: "Phoenix Ember",
  image: "Ingredient_13.png"
}, {
  name: "Starflare Orchid",
  image: "Ingredient_14.png"
}, {
  name: "Stormblossom",
  image: "Ingredient_15.png"
}, {
  name: "Silverleaf",
  image: "Ingredient_16.png"
}, {
  name: "Bloodthorn",
  image: "Ingredient_17.png"
}, {
  name: "Evergreen Whisper",
  image: "Ingredient_18.png"
}, {
  name: "Witchwood Vine",
  image: "Ingredient_19.png"
}, {
  name: "Faeflower",
  image: "Ingredient_20.png"
}, {
  name: "Dragonvine",
  image: "Ingredient_21.png"
}, {
  name: "Serpentleaf",
  image: "Ingredient_22.png"
}, {
  name: "Whispering Willow",
  image: "Ingredient_23.png"
}, {
  name: "Bloodmoon Lily",
  image: "Ingredient_24.png"
}, {
  name: "Soulroot",
  image: "Ingredient_25.png"
}, {
  name: "Dreamthistle",
  image: "Ingredient_26.png"
}, {
  name: "Moonshadow Moss",
  image: "Ingredient_27.png"
}, {
  name: "Starfrost Berry",
  image: "Ingredient_28.png"
}, {
  name: "Spiritbark",
  image: "Ingredient_29.png"
}, {
  name: "Twilight Rose",
  image: "Ingredient_30.png"
}, {
  name: "Voidroot",
  image: "Ingredient_31.png"
}, {
  name: "Emberfern",
  image: "Ingredient_32.png"
}, {
  name: "Nightshade Blossom",
  image: "Ingredient_33.png"
}, {
  name: "Stardust Lily",
  image: "Ingredient_34.png"
}, {
  name: "Frostfire Blossom",
  image: "Ingredient_35.png"
}, {
  name: "Radiant Sunflower",
  image: "Ingredient_36.png"
}, {
  name: "Shimmerleaf",
  image: "Ingredient_37.png"
}, {
  name: "Bloodfire Rose",
  image: "Ingredient_38.png"
}, {
  name: "Starlight Fern",
  image: "Ingredient_39.png"
}, {
  name: "Astral Oak",
  image: "Ingredient_40.png"
}];
var recipes = [{
  name: "Moonlight Elixir",
  image: "Recipe_1.png",
  ingredients: ["Moonbeam Fern", "Starlight Blossom", "Celestial Ivy", "Frostbloom", "Spiritroot"]
}, {
  name: "Shadowfire Brew",
  image: "Recipe_2.png",
  ingredients: ["Shadowvine", "Embergrass", "Voidbloom", "Dreamshade", "Phoenix Ember"]
}, {
  name: "Starfall Salad",
  image: "Recipe_3.png",
  ingredients: ["Starfall Petal", "Evergreen Whisper", "Dragonvine", "Serpentleaf", "Whispering Willow"]
}, {
  name: "Bloodmoon Infusion",
  image: "Recipe_4.png",
  ingredients: ["Bloodmoon Lily", "Bloodthorn", "Soulroot", "Dreamthistle", "Moonshadow Moss"]
}, {
  name: "Frostfire Tea",
  image: "Recipe_5.png",
  ingredients: ["Frostfire Blossom", "Radiant Sunflower", "Shimmerleaf", "Frostbloom", "Spiritbark"]
}, {
  name: "Twilight Tonic",
  image: "Recipe_6.png",
  ingredients: ["Twilight Rose", "Voidroot", "Emberfern", "Nightshade Blossom", "Stardust Lily"]
}, {
  name: "Sunfire Elixir",
  image: "Recipe_7.png",
  ingredients: ["Sunfire Lotus", "Embergrass", "Starfrost Berry", "Radiant Sunflower", "Phoenix Ember"]
}, {
  name: "Whisperwind Potion",
  image: "Recipe_8.png",
  ingredients: ["Evergreen Whisper", "Faeflower", "Stardust Lily", "Spiritroot", "Shadowvine"]
}, {
  name: "Celestial Brew",
  image: "Recipe_9.png",
  ingredients: ["Celestial Ivy", "Starflare Orchid", "Moonbeam Fern", "Thunderleaf", "Sunfire Lotus"]
}, {
  name: "Astral Essence",
  image: "Recipe_10.png",
  ingredients: ["Astral Oak", "Starlight Fern", "Sunfire Lotus", "Radiant Sunflower", "Celestial Ivy"]
}];
var levels = [0, 5000, 25000, 125000, 1000000, 2000000, 10000000, 50000000, 250000000, 1000000000];
var levelName = ["Novice Hero", "Bold Warrior", "Valiant Champion ", "Resilient Knight", "Heroic Vanguard", "Epic Conqueror", "Legendary Defender", "Mythic Guardian", "Supreme Paladin", "Eternal Crusader"];
var baseUrl = window.location.origin; // Gets the current origin (scheme + hostname + port)
var GameController = /*#__PURE__*/function () {
  function GameController(data, rootElement) {
    _classCallCheck(this, GameController);
    _defineProperty(this, "angle", void 0);
    _defineProperty(this, "rootElement", void 0);
    _defineProperty(this, "clickTabCount", void 0);
    _defineProperty(this, "balance", 0);
    _defineProperty(this, "inventory", []);
    _defineProperty(this, "currentRecipe", void 0);
    _defineProperty(this, "lastCraftTime", void 0);
    _defineProperty(this, "isCrafted", void 0);
    _defineProperty(this, "currentUser", void 0);
    _defineProperty(this, "randomIngredient", void 0);
    _defineProperty(this, "intervalTimerFuntion", void 0);
    _defineProperty(this, "rotationInterval", void 0);
    _defineProperty(this, "sendDataTimeout", void 0);
    _defineProperty(this, "showWarningTimer", void 0);
    _defineProperty(this, "time", void 0);
    _defineProperty(this, "leftTime", void 0);
    _defineProperty(this, "total_inventory_count", void 0);
    this.angle = 0;
    this.rootElement = rootElement;
    this.time = 30;
    this.leftTime = -1;
    this.clickTabCount = 100;
    this.inventory = data.inventory;
    this.currentRecipe = data.currentRecipe;
    this.lastCraftTime = data.lastCraftTime;
    this.isCollected = data.isCollected;
    this.currentUser = data.currentUser;
    this.balance = data.balance;
    this.levelPoint = data.levelPoint;
    this.total_inventory_count = 0;
    this.initGame();
  }
  return _createClass(GameController, [{
    key: "initGame",
    value: function initGame() {
      var _this = this;
      this.rootElement.find(".game-ingredients").css("display", "flex");
      this.rootElement.find(".play-game").css("display", "flex");
      this.rootElement.find(".waiting-game").css("display", "none");
      this.rootElement.find(".waiting-game").css("margin-top", "");
      this.rootElement.find(".game-tap-wrapper").css("width", "100%");
      this.leftTimeToPlay();
      this.rootElement.find(".game-user-profile-body-username").text(this.currentUser.username);
      var userLevel = this.calculateUserLevel(this.levelPoint);
      this.rootElement.find(".game-user-profile-body-level-description-level").text(userLevel.level);
      this.rootElement.find(".game-user-profile-body-level-description-name").text(levelName[userLevel.level - 1]);
      this.rootElement.find(".game-user-profile-body-level-percent").css("width", "".concat(userLevel.currentPercent, "%"));
      this.rootElement.find(".game-user-balance-text").text(this.balance);
      recipes.forEach(function (inventory, index) {
        var currentRecipe = _this.inventory.find(function (recipe) {
          return recipe.recipe_name === inventory.name;
        });
        if (currentRecipe) _this.total_inventory_count += currentRecipe.count;
      });
      this.rootElement.find(".game-user-inventory-total-count").text(this.total_inventory_count);
      var currentRecipe = recipes.find(function (e) {
        return e.name == _this.currentRecipe.name;
      });
      currentRecipe.ingredients.forEach(function (ingredient, index) {
        var color = "white";
        if (typeof _this.currentRecipe.ingredientsClicks[index] == "undefined") {
          _this.currentRecipe.ingredientsClicks[index] = 0;
        }
        if (_this.currentRecipe.ingredientsClicks[index] == 0) color = "#505251";
        var currentIngredient = ingredients.find(function (e) {
          return e.name == ingredient;
        });
        _this.rootElement.find(".game-ingredient-item").eq(index).find(".game-ingredient-item-image img").attr("src", "images/" + currentIngredient.image);
        _this.rootElement.find(".game-ingredient-item").eq(index).find(".game-ingredient-item-level-percent").css("width", "".concat(_this.currentRecipe.ingredientsClicks[index], "%"));
        _this.rootElement.find(".game-ingredient-item").eq(index).find(".game-ingredient-item-percent").text("".concat(_this.currentRecipe.ingredientsClicks[index], "%")).css("color", "".concat(color));
      });
      this.randomIngredient = this.getRandomIngredients();
      this.randomIngredient.forEach(function (ingredient, index) {
        _this.rootElement.find(".game-tap-element").eq(index).attr("ingredient", ingredient.name);
        _this.rootElement.find(".game-tap-element").eq(index).find("img").attr("src", "images/" + ingredient.image);
      });
      fetchUserProfilePhotoUrl(BOT_TOKEN, this.currentUser.t_user_id).then(function (url) {
        if (url) {
          _this.rootElement.find(".game-user-profile-avatar img").attr("src", url);
        }
      })["catch"](function (error) {
        console.error("Error:", error.message);
      });
      if (this.leftTime < 0) {
        if (this.isCollected) {
          if (this.checkAvailableCraft()) this.showCraftButton();else this.intervalTimerFuntion = setInterval(function () {
            _this.showRefreshTimer();
          }, 1000);
        } else {
          this.showCollectButton();
        }
      } else {
        this.intervalTimerFuntion = setInterval(function () {
          _this.showTimeToPlay(_this.leftTime);
        }, 1000);
        var image = this.rootElement.find(".rotatingImage")[0];
        this.rotationInterval = setInterval(function () {
          _this.angle += 5; // Rotate 5 degrees per frame
          image.style.transform = "rotate(".concat(_this.angle, "deg)");
        }, 50); // Update the rotation every 50 milliseconds (20 frames per second)
      }
      this.addEventListeners();
      this.checkRefreshValidate();
    }
  }, {
    key: "leftTimeToPlay",
    value: function leftTimeToPlay() {
      var last_crafted_time = new Date(this.lastCraftTime);
      var futureDate = new Date(last_crafted_time.getTime() + 4 * 60 * 60 * 1000);
      var currentTime = new Date();
      this.leftTime = (futureDate - currentTime) / 1000;
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this2 = this;
      this.rootElement.find(".game-tap-element").off("click");
      this.rootElement.find(".game-tap-element").on("click", function (element) {
        _this2.handleTapIngredient($(element.currentTarget).attr("ingredient"));
        $(element.currentTarget).addClass("active");
        setTimeout(function () {
          $(element.currentTarget).removeClass("active");
        }, 100);
      });
      this.rootElement.find(".game-tap-craft-button").off("click");
      this.rootElement.find(".game-tap-craft-button").on("click", function (element) {
        _this2.handleCraftButton();
        $(element.currentTarget).addClass("active");
        setTimeout(function () {
          $(element.currentTarget).removeClass("active");
        }, 100);
      });
      this.rootElement.find(".game-tap-collect-button").off("click");
      this.rootElement.find(".game-tap-collect-button").on("click", function (element) {
        _this2.handleCollectButton();
        $(element.currentTarget).addClass("active");
        setTimeout(function () {
          $(element.currentTarget).removeClass("active");
        }, 100);
      });
      this.rootElement.find(".game-user-inventory").off("click");
      this.rootElement.find(".game-user-inventory").on("click", function (element) {
        _this2.showInventory();
      });
      this.rootElement.find("#InventoryTab .backBtn").off("click");
      this.rootElement.find("#InventoryTab .backBtn").on("click", function (element) {
        console.log("Back button clicked");
        _this2.showHome();
      });
    }
  }, {
    key: "handleTapIngredient",
    value: function handleTapIngredient(ingredient) {
      var _this3 = this;
      if (this.leftTime < 0) {
        var currentRecipe = recipes.find(function (e) {
          return e.name == _this3.currentRecipe.name;
        });
        var currentIngredientIndex = currentRecipe.ingredients.findIndex(function (e) {
          return e == ingredient;
        });
        if (currentIngredientIndex !== -1) {
          if (this.currentRecipe.ingredientsClicks[currentIngredientIndex] < this.clickTabCount) {
            this.showFlyNumber(ingredient);
            clearTimeout(this.sendDataTimeout);
            this.currentRecipe.ingredientsClicks[currentIngredientIndex]++;
            this.balance++;
            this.levelPoint++;
            this.sendDataTimeout = setTimeout(function () {
              _this3.sendData();
            }, 500);
            if (this.currentRecipe.ingredientsClicks[currentIngredientIndex] == this.clickTabCount) {
              console.log("one is full!");
              var isShowCraftButton = this.checkAvailableCraft();
              if (isShowCraftButton) {
                this.stopIntervalFuntion();
                this.showCraftButton();
              } else if (this.checkRefreshValidate()) this.refreshTabIngredients();
            }
          } else {
            clearTimeout(this.showWarningTimer);
            this.showWarning();
            console.log("clicked full ingredient");
          }
        } else {
          clearTimeout(this.showWarningTimer);
          this.showWarning();
          console.log("clicked wrong ingredient");
        }
        this.updateView();
      }
    }
  }, {
    key: "handleCraftButton",
    value: function handleCraftButton() {
      var now = new Date();
      var year = now.getFullYear();
      var month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
      var day = String(now.getDate()).padStart(2, "0");
      var hours = String(now.getHours()).padStart(2, "0");
      var minutes = String(now.getMinutes()).padStart(2, "0");
      var seconds = String(now.getSeconds()).padStart(2, "0");

      // Format the date and time
      var formattedDateTime = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
      var data = {
        user_id: this.currentUser.id,
        balance: this.balance,
        level_point: this.levelPoint,
        is_collected: 0,
        current_recipe: this.currentRecipe.name,
        ingredients_clicks: "0,0,0,0,0",
        last_crafted_time: formattedDateTime
      };
      var endpoint = "/api/game-controll";
      var url = "".concat(baseUrl).concat(endpoint);
      $.ajax({
        url: url,
        type: "post",
        data: data,
        success: function success(resp) {}
      });
      this.isCollected = 0;
      this.currentRecipe.ingredientsClicks = [0, 0, 0, 0, 0];
      this.lastCraftTime = formattedDateTime;
      this.initGame();
    }
  }, {
    key: "handleCollectButton",
    value: function handleCollectButton() {
      var _this4 = this;
      var currentRecipe = "";
      var completedRecipe = this.currentRecipe.name;
      var completedRecipeIndex = recipes.findIndex(function (e) {
        return e.name == _this4.currentRecipe.name;
      });
      if (completedRecipeIndex < recipes.length - 1) currentRecipe = recipes[completedRecipeIndex + 1].name;else currentRecipe = recipes[0].name;
      var data = {
        user_id: this.currentUser.id,
        balance: this.balance,
        level_point: this.levelPoint,
        is_collected: 1,
        current_recipe: currentRecipe,
        ingredients_clicks: [0, 0, 0, 0, 0],
        last_crafted_time: this.lastCraftTime,
        completedRecipe: completedRecipe
      };
      this.currentRecipe.name = currentRecipe;
      this.isCollected = 1;
      this.clickTabCount += 1;
      var recipeToUpdate = this.inventory.find(function (recipe) {
        return recipe.recipe_name === completedRecipe;
      });
      if (recipeToUpdate) recipeToUpdate.count++;else {
        this.inventory.push({
          recipe_name: completedRecipe,
          count: 1
        });
      }
      var endpoint = "/api/game-controll";
      var url = "".concat(baseUrl).concat(endpoint);
      $.ajax({
        url: url,
        type: "post",
        data: data,
        success: function success(resp) {}
      });
      clearInterval(this.rotationInterval);
      this.initGame();
    }
  }, {
    key: "showInventory",
    value: function showInventory() {
      var _this5 = this;
      recipes.forEach(function (inventory, index) {
        _this5.rootElement.find(".invenvtoryElement").eq(index).find(".inventoryImg img").attr("src", "images/" + inventory.image);
        _this5.rootElement.find(".invenvtoryElement").eq(index).find(".inventoryInfo").find(".invenvtoryTitle").text(inventory.name);
        var currentRecipe = _this5.inventory.find(function (recipe) {
          return recipe.recipe_name === inventory.name;
        });
        if (currentRecipe) _this5.rootElement.find(".invenvtoryElement").eq(index).find(".inventoryInfo").find(".invenvtoryNumber").text("×" + currentRecipe.count);
      });
      this.rootElement.find("#GameTab").css("display", "none");
      this.rootElement.find("#InventoryTab").css("display", "block");
    }
  }, {
    key: "showHome",
    value: function showHome() {
      this.rootElement.find("#InventoryTab").css("display", "none");
      this.rootElement.find("#GameTab").css("display", "flex");
    }
  }, {
    key: "checkRefreshValidate",
    value: function checkRefreshValidate() {
      var _this6 = this;
      var notClickable = true;
      var currentRecipe = recipes.find(function (e) {
        return e.name == _this6.currentRecipe.name;
      });
      this.randomIngredient.forEach(function (ingredient) {
        var currentIngredientIndex = currentRecipe.ingredients.findIndex(function (e) {
          return e == ingredient.name;
        });
        if (currentIngredientIndex !== -1) {
          if (_this6.currentRecipe.ingredientsClicks[currentIngredientIndex] != _this6.clickTabCount) notClickable = false;
        }
      });
      return notClickable;
    }
  }, {
    key: "checkAvailableCraft",
    value: function checkAvailableCraft() {
      var _this7 = this;
      var isValid = true;
      var currentRecipe = recipes.find(function (e) {
        return e.name == _this7.currentRecipe.name;
      });
      currentRecipe.ingredients.forEach(function (ingredient, index) {
        if (_this7.currentRecipe.ingredientsClicks[index] < _this7.clickTabCount) isValid = false;
      });
      this.clickTabCount = 100;
      return isValid;
    }
  }, {
    key: "showCraftButton",
    value: function showCraftButton() {
      this.rootElement.find(".play-game").css("display", "none");
      this.rootElement.find(".waiting-game").css("display", "flex");
      this.rootElement.find(".waiting-game .waitingTimer").css("display", "none");
      this.rootElement.find(".waiting-game .game-tap-collect-button").css("display", "none");
      this.rootElement.find(".waiting-game .game-tap-craft-button").css("display", "flex");
    }
  }, {
    key: "showCollectButton",
    value: function showCollectButton() {
      this.rootElement.find(".play-game").css("display", "none");
      this.rootElement.find(".game-ingredients").css("display", "none");
      this.rootElement.find(".waiting-game").css("display", "flex");
      this.rootElement.find(".waiting-game").css("margin-top", "54px");
      this.rootElement.find(".game-tap-wrapper").css("width", "100%");
      this.rootElement.find(".waiting-game .waitingTimer").css("display", "none");
      this.rootElement.find(".waiting-game .game-tap-collect-button").css("display", "flex");
      this.rootElement.find(".waiting-game .game-tap-craft-button").css("display", "none");
    }
  }, {
    key: "showRefreshTimer",
    value: function showRefreshTimer() {
      this.rootElement.find(".play-game").css("display", "block");
      this.rootElement.find(".waiting-game").css("display", "none");
      if (this.time >= 10) this.rootElement.find(".game-tap-description").find(".refreshTimer").text("00:" + this.time);else this.rootElement.find(".game-tap-description").find(".refreshTimer").text("00:0" + this.time);
      this.time--;
      if (this.time < 0) {
        this.refreshTabIngredients();
      }
    }
  }, {
    key: "showWarning",
    value: function showWarning() {
      var _this8 = this;
      this.rootElement.find(".warning").fadeIn(500); // Fade in over 500 milliseconds

      this.showWarningTimer = setTimeout(function () {
        _this8.rootElement.find(".warning").fadeOut(700); // Fade out over 500 milliseconds
      }, 500);
    }
  }, {
    key: "showTimeToPlay",
    value: function showTimeToPlay(seconds) {
      seconds = Number(seconds);
      var h = Math.floor(seconds / 3600);
      var m = Math.floor(seconds % 3600 / 60);
      var s = Math.floor(seconds % 60);
      var hDisplay = h > 0 ? String(h).padStart(2, "0") : "00";
      var mDisplay = m > 0 ? String(m).padStart(2, "0") : "00";
      var sDisplay = s > 0 ? String(s).padStart(2, "0") : "00";
      this.rootElement.find(".play-game").css("display", "none");
      this.rootElement.find(".game-ingredients").css("display", "none");
      this.rootElement.find(".waiting-game").css("display", "flex");
      this.rootElement.find(".waiting-game").css("margin-top", "54px");
      this.rootElement.find(".waiting-game").css("width", "100%");
      this.rootElement.find(".game-tap-wrapper").css("width", "80%");
      this.rootElement.find(".waiting-game .waitingTimer").css("display", "flex");
      this.rootElement.find(".waiting-game .game-tap-collect-button").css("display", "none");
      this.rootElement.find(".waiting-game .game-tap-craft-button").css("display", "none");
      this.rootElement.find(".waiting-game").find(".waitingTimer").text(hDisplay + "h:" + mDisplay + "m:" + sDisplay + "s");
      this.leftTime--;
      if (this.leftTime < 0) {
        this.stopIntervalFuntion();
        this.initGame();
      }
    }
  }, {
    key: "showFlyNumber",
    value: function showFlyNumber(ingredient) {
      var div = this.rootElement.find(".game-tap-element[ingredient=\"".concat(ingredient, "\"]"))[0];
      var numberElement = document.createElement("div");
      numberElement.textContent = "+1";
      numberElement.classList.add("fly-number");
      var parentElement = this.rootElement.find(".tabs").find(".game-tap-wrapper .play-game")[0];
      var parentElementReact = parentElement.getBoundingClientRect();
      var divRect = div.getBoundingClientRect();
      numberElement.style.left = "".concat(divRect.left - parentElementReact.left + divRect.width / 2, "px");
      numberElement.style.top = "".concat(divRect.top - parentElementReact.top + divRect.height / 2 - 50, "px");
      parentElement.appendChild(numberElement);
      numberElement.offsetHeight;
      setTimeout(function () {
        numberElement.style.left = "".concat(divRect.left - parentElementReact.left + divRect.width / 2, "px");
        numberElement.style.top = "".concat(divRect.top - parentElementReact.top + divRect.height / 2 - 150, "px");
        numberElement.style.opacity = "0";
        numberElement.style.fontSize = "10px";
      }, 0);
      setTimeout(function () {
        numberElement.remove();
      }, 1000);
    }
  }, {
    key: "refreshTabIngredients",
    value: function refreshTabIngredients() {
      var _this9 = this;
      this.randomIngredient = this.getRandomIngredients();
      this.randomIngredient.forEach(function (ingredient, index) {
        _this9.rootElement.find(".game-tap-element").eq(index).attr("ingredient", ingredient.name);
        _this9.rootElement.find(".game-tap-element").eq(index).find("img").attr("src", "images/" + ingredient.image);
      });
      this.time = 30;
    }
  }, {
    key: "stopIntervalFuntion",
    value: function stopIntervalFuntion() {
      clearInterval(this.intervalTimerFuntion);
    }
  }, {
    key: "updateView",
    value: function updateView() {
      var _this10 = this;
      var userLevel = this.calculateUserLevel(this.levelPoint);
      this.rootElement.find(".game-user-profile-body-level-description-level").text(userLevel.level);
      this.rootElement.find(".game-user-profile-body-level-description-name").text(levelName[userLevel.level - 1]);
      this.rootElement.find(".game-user-profile-body-level-percent").css("width", "".concat(userLevel.currentPercent, "%"));
      this.rootElement.find(".game-user-balance-text").text(this.balance);
      var currentRecipe = recipes.find(function (e) {
        return e.name == _this10.currentRecipe.name;
      });
      currentRecipe.ingredients.forEach(function (ingredient, index) {
        var color = "white";
        if (_this10.currentRecipe.ingredientsClicks[index] == 0) color = "#505251";
        _this10.rootElement.find(".game-ingredient-item").eq(index).find(".game-ingredient-item-level-percent").css("width", "".concat(_this10.currentRecipe.ingredientsClicks[index], "%"));
        _this10.rootElement.find(".game-ingredient-item").eq(index).find(".game-ingredient-item-percent").text("".concat(_this10.currentRecipe.ingredientsClicks[index], "%")).css("color", "".concat(color));
      });
    }
  }, {
    key: "calculateUserLevel",
    value: function calculateUserLevel(levelPoint) {
      var result = {
        level: 0,
        currentPercent: 0
      };
      for (var index = 0; index < levels.length; index++) {
        var level = levels[index];
        if (level > levelPoint) {
          result.level = index;
          result.currentPercent = (levelPoint - levels[index - 1]) * 100 / (levels[index] - levels[index - 1]);
          return result;
        }
      }
    }
  }, {
    key: "getRandomIngredients",
    value: function getRandomIngredients() {
      var _this11 = this;
      var currentRecipe = recipes.find(function (e) {
        return e.name == _this11.currentRecipe.name;
      });
      var filteredArray = currentRecipe.ingredients.map(function (ingredient) {
        return ingredients.find(function (e) {
          return e.name == ingredient;
        });
      });
      filteredArray = filteredArray.filter(function (e, index) {
        return _this11.currentRecipe.ingredientsClicks[index] != 100;
      });
      var selectedFromFiltered = [];
      if (filteredArray.length > 0) {
        var randomIndex = Math.floor(Math.random() * filteredArray.length);
        selectedFromFiltered.push(filteredArray[randomIndex]);
      }
      var selectedFromOriginal = [];
      var selectedNames = new Set(selectedFromFiltered.map(function (item) {
        return item.name;
      }));
      while (selectedFromOriginal.length < 8 - selectedFromFiltered.length) {
        var _randomIndex = Math.floor(Math.random() * ingredients.length);
        var randomItem = ingredients[_randomIndex];
        if (!selectedNames.has(randomItem.name)) {
          selectedFromOriginal.push(randomItem);
          selectedNames.add(randomItem.name);
        }
      }
      var randomizedSelection = selectedFromFiltered.concat(selectedFromOriginal);
      randomizedSelection.sort(function () {
        return Math.random() - 0.5;
      });
      return randomizedSelection;
    }
  }, {
    key: "sendData",
    value: function sendData() {
      var endpoint = "/api/game-controll";
      var url = "".concat(baseUrl).concat(endpoint);
      var data = {
        user_id: this.currentUser.id,
        balance: this.balance,
        level_point: this.levelPoint,
        current_recipe: this.currentRecipe.name,
        is_collected: 1,
        ingredients_clicks: this.currentRecipe.ingredientsClicks,
        last_crafted_time: this.lastCraftTime
      };
      $.ajax({
        url: url,
        type: "post",
        data: data,
        success: function success(resp) {
          console.log("success");
        }
      });
    }
  }]);
}();
window.GameController = GameController;
function getUserProfilePhotos(_x, _x2) {
  return _getUserProfilePhotos.apply(this, arguments);
}
function _getUserProfilePhotos() {
  _getUserProfilePhotos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(botToken, userId) {
    var url, response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "https://api.telegram.org/bot".concat(botToken, "/getUserProfilePhotos?user_id=").concat(userId);
          _context.prev = 1;
          _context.next = 4;
          return fetch(url);
        case 4:
          response = _context.sent;
          _context.next = 7;
          return response.json();
        case 7:
          data = _context.sent;
          if (!data.ok) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", data.result);
        case 12:
          throw new Error("Error fetching profile photos: " + data.description);
        case 13:
          _context.next = 19;
          break;
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          console.error("Fetch Error:", _context.t0.message);
          return _context.abrupt("return", null);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 15]]);
  }));
  return _getUserProfilePhotos.apply(this, arguments);
}
function getFile(_x3, _x4) {
  return _getFile.apply(this, arguments);
}
function _getFile() {
  _getFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(botToken, fileId) {
    var url, response, data, filePath, fileUrl;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          url = "https://api.telegram.org/bot".concat(botToken, "/getFile?file_id=").concat(fileId);
          _context2.prev = 1;
          _context2.next = 4;
          return fetch(url);
        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return response.json();
        case 7:
          data = _context2.sent;
          if (!data.ok) {
            _context2.next = 14;
            break;
          }
          filePath = data.result.file_path;
          fileUrl = "https://api.telegram.org/file/bot".concat(botToken, "/").concat(filePath);
          return _context2.abrupt("return", fileUrl);
        case 14:
          throw new Error("Error fetching file: " + data.description);
        case 15:
          _context2.next = 21;
          break;
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](1);
          console.error("Fetch Error:", _context2.t0.message);
          return _context2.abrupt("return", null);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 17]]);
  }));
  return _getFile.apply(this, arguments);
}
function fetchUserProfilePhotoUrl(_x5, _x6) {
  return _fetchUserProfilePhotoUrl.apply(this, arguments);
}
function _fetchUserProfilePhotoUrl() {
  _fetchUserProfilePhotoUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(botToken, userId) {
    var photos, photo, fileUrl;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getUserProfilePhotos(botToken, userId);
        case 2:
          photos = _context3.sent;
          if (!(photos && photos.total_count > 0)) {
            _context3.next = 11;
            break;
          }
          photo = photos.photos[0][0]; // Get the smallest size of the first photo
          _context3.next = 7;
          return getFile(botToken, photo.file_id);
        case 7:
          fileUrl = _context3.sent;
          return _context3.abrupt("return", fileUrl);
        case 11:
          console.log("No profile photos found for this user.");
          return _context3.abrupt("return", null);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _fetchUserProfilePhotoUrl.apply(this, arguments);
}

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
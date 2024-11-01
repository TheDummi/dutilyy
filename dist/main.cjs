'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/models/Math.ts
var Math_default = new class NewMath {
  static {
    __name(this, "NewMath");
  }
  E;
  LN10;
  LN2;
  LOG10E;
  LOG2E;
  PI;
  SQRT1_2;
  SQRT2;
  constructor() {
    this.E = Math.E;
    this.LN10 = Math.LN10;
    this.LN2 = Math.LN2;
    this.LOG10E = Math.LOG10E;
    this.LOG2E = Math.LOG2E;
    this.PI = Math.PI;
    this.SQRT1_2 = Math.SQRT1_2;
    this.SQRT2 = Math.SQRT2;
  }
  abs(number) {
    return Math.abs(number);
  }
  acos(number) {
    return Math.acos(number);
  }
  acosh(number) {
    return Math.acosh(number);
  }
  asin(number) {
    return Math.asin(number);
  }
  asinh(number) {
    return Math.asinh(number);
  }
  atan(number) {
    return Math.atan(number);
  }
  atan2(x, y) {
    return Math.atan2(x, y);
  }
  atanh(number) {
    return Math.atanh(number);
  }
  cbrt(number) {
    return Math.cbrt(number);
  }
  ceil(number) {
    return Math.ceil(number);
  }
  clz32(number) {
    return Math.clz32(number);
  }
  cos(number) {
    return Math.cos(number);
  }
  cosh(number) {
    return Math.cosh(number);
  }
  dif(...numbers) {
    if (numbers.length <= 0) return NaN;
    else return numbers.reduce((x, y) => x -= y);
  }
  exp(number) {
    return Math.exp(number);
  }
  expm1(number) {
    return Math.clz32(number);
  }
  floor(number) {
    return Math.floor(number);
  }
  fround(number) {
    return Math.fround(number);
  }
  hypot(number) {
    return Math.hypot(number);
  }
  imul(x, y) {
    return Math.imul(x, y);
  }
  log(number) {
    return Math.log(number);
  }
  log10(number) {
    return Math.log10(number);
  }
  log1p(number) {
    return Math.log1p(number);
  }
  log2(number) {
    return Math.log2(number);
  }
  max(...numbers) {
    return Math.max(...numbers);
  }
  min(...numbers) {
    return Math.min(...numbers);
  }
  pow(x, y) {
    return Math.pow(x, y);
  }
  precise(x, y) {
    let z = "1";
    while (y) {
      z += "0";
      y--;
    }
    return Math.round(x * parseInt(z)) / parseInt(z);
  }
  random(x, y) {
    if (x) {
      if (y === void 0) {
        y = x;
        x = 0;
      }
      return Math.floor(Math.random() * Math.floor(y) + x);
    } else return Math.random();
  }
  round(number) {
    return Math.round(number);
  }
  shuffle(...numbers) {
    if (Array.isArray(numbers)) {
      const array = [];
      numbers = Array.from(numbers);
      while (numbers.length > 0) {
        array.push(numbers.splice(this.random(numbers.length), 1)[0]);
      }
      return array;
    } else return NaN;
  }
  sign(number) {
    return Math.sign(number);
  }
  sin(number) {
    return Math.sin(number);
  }
  sinh(number) {
    return Math.sinh(number);
  }
  sum(...numbers) {
    if (numbers.length <= 0) return NaN;
    else return numbers.reduce((x, y) => x += y);
  }
  sqrt(number) {
    return Math.sqrt(number);
  }
  tan(number) {
    return Math.tan(number);
  }
  tanh(number) {
    return Math.tanh(number);
  }
  trunc(number) {
    return Math.trunc(number);
  }
}();

// src/models/Random.ts
var Random_default = new class Random {
  static {
    __name(this, "Random");
  }
  constructor() {
    this.number = this.number;
    this.element = this.element;
  }
  number(min, max) {
    if (min === void 0) return Math_default.random(10);
    else return Math_default.random(min, max);
  }
  element(array) {
    if (Array.isArray(array)) {
      return array[Math_default.random(array.length)];
    }
    if (typeof array == "object") {
      const random = Math_default.random(Object.keys(array).length);
      return {
        object: { [Object.keys(array)[random]]: Object.values(array)[random] },
        key: Object.keys(array)[random],
        value: Object.values(array)[random]
      };
    } else return void 0;
  }
}();

// src/models/Style.ts
var TextStyle = /* @__PURE__ */ ((TextStyle2) => {
  TextStyle2[TextStyle2["Bold"] = 1] = "Bold";
  TextStyle2[TextStyle2["Vague"] = 2] = "Vague";
  TextStyle2[TextStyle2["Cursive"] = 3] = "Cursive";
  TextStyle2[TextStyle2["UnderLine"] = 4] = "UnderLine";
  TextStyle2[TextStyle2["Transparent"] = 8] = "Transparent";
  TextStyle2[TextStyle2["Strike"] = 9] = "Strike";
  TextStyle2[TextStyle2["DoubleUnderline"] = 21] = "DoubleUnderline";
  return TextStyle2;
})(TextStyle || {});
var TextColor = /* @__PURE__ */ ((TextColor2) => {
  TextColor2[TextColor2["None"] = 29] = "None";
  TextColor2[TextColor2["Grey"] = 30] = "Grey";
  TextColor2[TextColor2["Red"] = 31] = "Red";
  TextColor2[TextColor2["Green"] = 32] = "Green";
  TextColor2[TextColor2["Yellow"] = 33] = "Yellow";
  TextColor2[TextColor2["Blue"] = 34] = "Blue";
  TextColor2[TextColor2["Purple"] = 35] = "Purple";
  TextColor2[TextColor2["Cyan"] = 36] = "Cyan";
  TextColor2[TextColor2["Blanche"] = 37] = "Blanche";
  TextColor2[TextColor2["LightGrey"] = 90] = "LightGrey";
  TextColor2[TextColor2["LightRed"] = 91] = "LightRed";
  TextColor2[TextColor2["LightGreen"] = 92] = "LightGreen";
  TextColor2[TextColor2["LightYellow"] = 93] = "LightYellow";
  TextColor2[TextColor2["LightBlue"] = 94] = "LightBlue";
  TextColor2[TextColor2["Violet"] = 95] = "Violet";
  TextColor2[TextColor2["Turquoise"] = 96] = "Turquoise";
  TextColor2[TextColor2["White"] = 97] = "White";
  return TextColor2;
})(TextColor || {});
var BackgroundColor = /* @__PURE__ */ ((BackgroundColor2) => {
  BackgroundColor2[BackgroundColor2["None"] = 39] = "None";
  BackgroundColor2[BackgroundColor2["Grey"] = 40] = "Grey";
  BackgroundColor2[BackgroundColor2["Red"] = 41] = "Red";
  BackgroundColor2[BackgroundColor2["Green"] = 42] = "Green";
  BackgroundColor2[BackgroundColor2["Yellow"] = 43] = "Yellow";
  BackgroundColor2[BackgroundColor2["Blue"] = 44] = "Blue";
  BackgroundColor2[BackgroundColor2["Purple"] = 45] = "Purple";
  BackgroundColor2[BackgroundColor2["Cyan"] = 46] = "Cyan";
  BackgroundColor2[BackgroundColor2["Blanche"] = 47] = "Blanche";
  BackgroundColor2[BackgroundColor2["LightGrey"] = 100] = "LightGrey";
  BackgroundColor2[BackgroundColor2["LightRed"] = 101] = "LightRed";
  BackgroundColor2[BackgroundColor2["LightGreen"] = 102] = "LightGreen";
  BackgroundColor2[BackgroundColor2["LightYellow"] = 103] = "LightYellow";
  BackgroundColor2[BackgroundColor2["LightBlue"] = 104] = "LightBlue";
  BackgroundColor2[BackgroundColor2["Violet"] = 105] = "Violet";
  BackgroundColor2[BackgroundColor2["Turquoise"] = 106] = "Turquoise";
  BackgroundColor2[BackgroundColor2["White"] = 107] = "White";
  return BackgroundColor2;
})(BackgroundColor || {});
var Style_default = new class Style {
  static {
    __name(this, "Style");
  }
  TextStyle;
  TextColor;
  BackgroundColor;
  constructor() {
    this.TextStyle = TextStyle;
    this.TextColor = TextColor;
    this.BackgroundColor = BackgroundColor;
  }
  titleCase(string, lowercase = false) {
    if (lowercase == true) string = string?.toString()?.toLowerCase();
    return string?.toString()?.split(/ +/g)?.map((word) => word?.slice(0, 1).toUpperCase() + word?.slice(1)).join(" ");
  }
  pascalCase(string, lowercase = false) {
    if (lowercase == true) string = string?.toString()?.toLowerCase();
    return string?.toString()?.split(/ +/g)?.map((word) => word?.slice(0, 1).toUpperCase() + word?.slice(1)).join("");
  }
  stringCase(string, lowercase = false) {
    if (lowercase == true) string = string?.toString()?.toLowerCase();
    return string?.toString()?.charAt(0)?.toUpperCase() + string?.toString()?.slice(1);
  }
  phraseCase(string, lowercase = false) {
    if (lowercase == true) string = string?.toString()?.toLowerCase();
    return string?.toString()?.split(/[!?.]/gi).map((phrase) => phrase?.toString().charAt(0)?.toUpperCase() + phrase?.toString()?.slice(1)).join(" ");
  }
  log(text, options) {
    const styling = { color: "", style: "" };
    if (options?.color) styling.color = `\x1B[${options.color}m`;
    if (options?.style) styling.style = `\x1B[${options.style}m`;
    return `${styling.color}${styling.style}${text}\x1B[0;0m`;
  }
}();

// src/models/Catch.ts
function catchErrorSync(t) {
  if (!t) return [new Error("No value provided."), null];
  try {
    return [void 0, t];
  } catch (error) {
    return [error, null];
  }
}
__name(catchErrorSync, "catchErrorSync");
async function catchError(promise) {
  if (!promise) return [new Error("No value provided."), null];
  return promise.then((data) => {
    return [void 0, data];
  }).catch((error) => {
    return [error, null];
  });
}
__name(catchError, "catchError");

// src/main.ts
var main_default = {
  Math: Math_default,
  Random: Random_default,
  Style: Style_default
};

exports.Math = Math_default;
exports.Random = Random_default;
exports.Style = Style_default;
exports.catchError = catchError;
exports.catchErrorSync = catchErrorSync;
exports.default = main_default;
//# sourceMappingURL=main.cjs.map
//# sourceMappingURL=main.cjs.map
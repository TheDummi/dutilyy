/** @format */

declare enum TextStyle {
	Bold = 1,
	Vague = 2,
	Cursive = 3,
	UnderLine = 4,
	Transparent = 8,
	Strike = 9,
	DoubleUnderline = 21,
}
declare enum TextColor {
	None = 29,
	Grey = 30,
	Red = 31,
	Green = 32,
	Yellow = 33,
	Blue = 34,
	Purple = 35,
	Cyan = 36,
	Blanche = 37,
	LightGrey = 90,
	LightRed = 91,
	LightGreen = 92,
	LightYellow = 93,
	LightBlue = 94,
	Violet = 95,
	Turquoise = 96,
	White = 97,
}
declare enum BackgroundColor {
	None = 39,
	Grey = 40,
	Red = 41,
	Green = 42,
	Yellow = 43,
	Blue = 44,
	Purple = 45,
	Cyan = 46,
	Blanche = 47,
	LightGrey = 100,
	LightRed = 101,
	LightGreen = 102,
	LightYellow = 103,
	LightBlue = 104,
	Violet = 105,
	Turquoise = 106,
	White = 107,
}
declare const _default$3: {
	TextStyle: typeof TextStyle;
	TextColor: typeof TextColor;
	BackgroundColor: typeof BackgroundColor;
	titleCase(string: string, lowercase?: boolean): string;
	pascalCase(string: string, lowercase?: boolean): string;
	stringCase(string: string, lowercase?: boolean): string;
	phraseCase(string: string, lowercase?: boolean): string;
	log(text: string, options: LogOptions): string;
};

interface LogOptions {
	style?: TextStyle;
	color?: BackgroundColor | TextColor;
}

declare const _default$2: {
	E: number;
	LN10: number;
	LN2: number;
	LOG10E: number;
	LOG2E: number;
	PI: number;
	SQRT1_2: number;
	SQRT2: number;
	abs(number: number): number;
	acos(number: number): number;
	acosh(number: number): number;
	asin(number: number): number;
	asinh(number: number): number;
	atan(number: number): number;
	atan2(x: number, y: number): number;
	atanh(number: number): number;
	cbrt(number: number): number;
	ceil(number: number): number;
	clz32(number: number): number;
	cos(number: number): number;
	cosh(number: number): number;
	dif(...numbers: Array<number>): number;
	exp(number: number): number;
	expm1(number: number): number;
	floor(number: number): number;
	fround(number: number): number;
	hypot(number: number): number;
	imul(x: number, y: number): number;
	log(number: number): number;
	log10(number: number): number;
	log1p(number: number): number;
	log2(number: number): number;
	max(...numbers: Array<number>): number;
	min(...numbers: Array<number>): number;
	pow(x: number, y: number): number;
	precise(x: number, y: number): number;
	random(x?: number, y?: number): number;
	round(number: number): number;
	shuffle(...numbers: Array<number>): number | number[];
	sign(number: number): number;
	sin(number: number): number;
	sinh(number: number): number;
	sum(...numbers: Array<number>): number;
	sqrt(number: number): number;
	tan(number: number): number;
	tanh(number: number): number;
	trunc(number: number): number;
};

declare const _default$1: {
	number(min: number, max: number): number;
	element(array: Array<unknown> | object): any;
};

/** @format */
/**
 * This function catches and handles errors from a synchronous operation.
 *
 * @template T - The type of the value to be processed.
 * @param {T} t - The value to catch errors from.
 * @returns {[undefined, T] | [Error, null]} - An array containing either:
 * - `undefined` and the original value `t`, if no error occurred.
 * - An `Error` object and `null`, if an error occurred during the operation.
 *
 * @example
 * ```typescript
 * const result = catchErrorSync(fetchDataFromAPI());
 * if (result[0]) {
 *   console.error('An error occurred:', result[0]);
 * } else {
 *   console.log('Data received:', result[1]);
 * }
 * ```
 */
declare function catchErrorSync<T>(t: T): [undefined, T] | [Error, null];
/**
 * This function catches and handles errors from an asynchronous promise.
 *
 * @template T - The type of the promise's resolved value.
 * @param {Promise<T>} promise - The promise to catch errors from.
 * @returns {Promise<[undefined, T] | [Error, null]>} - A promise that resolves to either:
 * - An array containing `undefined` and the resolved value of the promise, if no error occurred.
 * - An array containing an `Error` object and `null`, if an error occurred during the promise execution.
 *
 * @example
 * ```typescript
 * const promise = fetch('https://api.example.com/data');
 * catchError(promise)
 *   .then(([error, data]) => {
 *     if (error) {
 *       console.error('An error occurred:', error);
 *     } else {
 *       console.log('Data received:', data);
 *     }
 *   });
 * ```
 */
declare function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error, null]>;

declare const _default: {
	Math: {
		E: number;
		LN10: number;
		LN2: number;
		LOG10E: number;
		LOG2E: number;
		PI: number;
		SQRT1_2: number;
		SQRT2: number;
		abs(number: number): number;
		acos(number: number): number;
		acosh(number: number): number;
		asin(number: number): number;
		asinh(number: number): number;
		atan(number: number): number;
		atan2(x: number, y: number): number;
		atanh(number: number): number;
		cbrt(number: number): number;
		ceil(number: number): number;
		clz32(number: number): number;
		cos(number: number): number;
		cosh(number: number): number;
		dif(...numbers: Array<number>): number;
		exp(number: number): number;
		expm1(number: number): number;
		floor(number: number): number;
		fround(number: number): number;
		hypot(number: number): number;
		imul(x: number, y: number): number;
		log(number: number): number;
		log10(number: number): number;
		log1p(number: number): number;
		log2(number: number): number;
		max(...numbers: Array<number>): number;
		min(...numbers: Array<number>): number;
		pow(x: number, y: number): number;
		precise(x: number, y: number): number;
		random(x?: number, y?: number): number;
		round(number: number): number;
		shuffle(...numbers: Array<number>): number | number[];
		sign(number: number): number;
		sin(number: number): number;
		sinh(number: number): number;
		sum(...numbers: Array<number>): number;
		sqrt(number: number): number;
		tan(number: number): number;
		tanh(number: number): number;
		trunc(number: number): number;
	};
	Random: {
		number(min: number, max: number): number;
		element(array: Array<unknown> | object): any;
	};
	Style: {
		TextStyle: typeof TextStyle;
		TextColor: typeof TextColor;
		BackgroundColor: typeof BackgroundColor;
		titleCase(string: string, lowercase?: boolean): string;
		pascalCase(string: string, lowercase?: boolean): string;
		stringCase(string: string, lowercase?: boolean): string;
		phraseCase(string: string, lowercase?: boolean): string;
		log(text: string, options: LogOptions): string;
	};
};

export { _default$2 as Math, _default$1 as Random, _default$3 as Style, catchError, catchErrorSync, _default as default };

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
export function catchErrorSync<T>(t: T): [undefined, T] | [Error, null] {
	if (!t) return [new Error('No value provided.'), null]; //-

	try {
		return [undefined, t];
	} catch (error) {
		return [error as Error, null];
	}
}

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
export async function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error, null]> {
	if (!promise) return [new Error('No value provided.'), null];

	return promise
		.then((data) => {
			return [undefined, data] as [undefined, T];
		})
		.catch((error) => {
			return [error as Error, null];
		});
}

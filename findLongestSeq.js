/**
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 * For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.
 * Your algorithm should run in O(n) complexity.
 *
 * currLength = 1 -> It is because that the array should have at least one element inside unless it is given empty.
 * maxLength = 1 -> maximum length for final return value.
 *
 * Assumption to make: consecutive element means sequence of number in the increments by 1.
 *
 * There should be an integer that is in "sequence".
 *
 * Create a variable i = 0.
 * While loop, where i < length of an array.
 * Look for anything that is +1 from current integer.
 * If there is none, move the pointer by 1, maxLength = 0.
 * If there is an integer === arr[pointer] + 1, increment maxLength by 1.
 * Set the pointer to the index of the element that was found.
 * If maxLength > currLength, maxLength = currLength.
 * Return maxLength.
 *
 * maxLength = 3.
 * currLength = 2.
 *
 *                  i
 * [100, 4, 200, 1, 3, 2]
 */

const findLongestSeq = arr => {
	let i = 0;
	let maxLength = 1;

	while (i < arr.length) {
		let plusOne = arr[i] + 1;

		if (arr.indexOf(plusOne) !== -1) {
			maxLength++;
			i = arr.indexOf(plusOne);
		} else {
			i++;
		}
	}
};

/**
 * Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.
 * For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:
 *
 * There is 1 smaller element to the right of 3
 * There is 1 smaller element to the right of 4
 * There are 2 smaller elements to the right of 9
 * There is 1 smaller element to the right of 6
 * There are no smaller elements to the right of 1
 */

const findSmaller = arr => {
	/**
	 * 1. Create a variable i = 0.
	 * 2. Create a variable j = arr.length - 1.
	 * 3. Create a variable counts = []. This is our final return value.
	 * 5. While statement, where i < arr.length.
	 * 6. Create an if statement, where condition is arr[j] < arr[i]
	 * 7. Create an inner if statement, where counts[i] is truthy value or counts[i] === 0.
	 * 8. If it is, increment counts[i] by 1, set j -= 1.
	 * 9. else, counts[i] = 0.
	 * 10. From the outer if statment, create else if statement, where condition is i === arr.length - 1 to check if i hits the end of the arr.
	 * 11. If it is, set counts[i] = 0 and increment i by 1.
	 * 12. Else, increment i by 1, reset j to arr.length - 1.
	 * 13. Return counts.
	 */

	let i = 0;
	let j = arr.length - 1;
	let counts = [];

	while (i < arr.length) {
		if (arr[j] < arr[i]) {
			if (counts[i] || counts[i] === 0) {
				counts[i]++;
				j -= 1;
			} else {
				counts[i] = 0;
			}
		} else if (i === arr.length - 1) {
			counts[i] = 0;
			i++;
		} else {
			i++;
			j = arr.length - 1;
		}
	}

	return counts;
};

console.log(findSmaller([3, 4, 9, 6, 1])); // [1, 1, 2, 1, 0]
console.log(findSmaller([5, 8, 3, 7, 1])); // [1, 1, 2, 1, 0]

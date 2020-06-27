/**
    Given an array of numbers, find the maximum sum of any contiguous subarray of the array.
    For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.
    Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

    Do this in O(N) time.
*/

const maxSubarraySum = arr => {
	/**
      1. Create a variable maxSum = 0.
      2. Create a variable i and j, i = 0, j = 1.
      3. While loop, where j < arr.length.
      4. Create a variable sumGreaterThanZero = false. This is the trigger that if two consecutive numbers are greater than 0 when they added. If it is greater than zero, change it to true.
      5. If sumGreaterThanZero === true, compare maxSum === 0. 
         If it is, maxSum += arr[i] + arr[j], else maxSum += arr[j]. 
         It is because that maxSum is already has been calculated from previous iteration.
      6. Increment i and j by 1.
      7. Return maxSum.
  */

	let maxSum = 0; // This will be final return value.
	let i = 0;
	let j = 1;

	while (j < arr.length) {
		// To lessen iteration count..
		let sumGreaterThanZero = false; // This is the trigger that the sum of two consecutive numbers are greater than 0 or not.

		if (arr[i] + arr[j] > 0) {
			// initial sum that is greater thean zero has been found.
			sumGreaterThanZero = true;
		}

		if (sumGreaterThanZero) {
			if (maxSum !== 0) {
				maxSum += arr[j];
			} else {
				maxSum += arr[i] + arr[j];
			}
		}

		i++;
		j++;
	}

	return maxSum;
};

console.log(maxSubarraySum([34, -50, 42, 14, -5, 86]));
console.log(maxSubarraySum([-5, -1, -8, -9]));

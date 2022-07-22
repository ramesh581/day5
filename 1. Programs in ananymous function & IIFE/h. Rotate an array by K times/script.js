let Array = [1, 2, 3, 4, 5],

N = Array.length;

let result =[];

function RightRotate(a, n, k)
{
	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {
			result.push(a[n + i - k]);
		}
		else {
			result.push(a[i - k]);
		}
	}
	console.log(result);
};

RightRotate(Array, N, 4);

(function(a, n, k)
{
	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {
			result.push(a[n + i - k]);
		}
		else {
			result.push(a[i - k]);
		}
	}
	console.log(result);
})(Array, N, 4);




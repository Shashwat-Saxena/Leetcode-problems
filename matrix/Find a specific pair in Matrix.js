
// A Naive method to find maximum value of mat1[d][e]
// - ma[a][b] such that d > a and e > b 
	
	// The function returns maximum value A(d,e) - A(a,b)
	// over all choices of indexes such that both d > a
	// and e > b.
	function findMaxValue(N,mat)
	{
	
		// stores maximum value
		let maxValue = Number.MIN_VALUE;
		
		// Consider all possible pairs mat[a][b] and
		// mat1[d][e]
		for (let a = 0; a < N - 1; a++)
		for (let b = 0; b < N - 1; b++)
			for (let d = a + 1; d < N; d++)
			for (let e = b + 1; e < N; e++)
				if (maxValue < (mat[d][e] - mat[a][b]))
					maxValue = mat[d][e] - mat[a][b];
		
		return maxValue;
	}
	
	// Driver code
	let N = 5;
	let mat=[[ 1, 2, -1, -4, -20],[-8, -3, 4, 2, 1],[3, 8, 6, 1, 3],[ -4, -1, 1, 7, -6 ],[ 0, -4, 10, -5, 1 ]];
	console.log("Maximum Value is " +findMaxValue(N,mat));
	
	// This code is contributed by rag2127


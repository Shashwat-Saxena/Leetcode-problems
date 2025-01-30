

// JavaScript program for weighted job scheduling using Dynamic
// Programming and Binary Search

// Class to represent a job
class Job{
	constructor(start, finish, profit){
		this.start = start
		this.finish = finish
		this.profit = profit
	}
}

// A Binary Search based function to find the latest job
// (before current job) that doesn't conflict with current
// job. "index" is index of the current job. This function
// returns -1 if all jobs before index conflict with it.
// The array jobs[] is sorted in increasing order of finish
// time.
function binarySearch(job, start_index){

	// Initialize 'lo' and 'hi' for Binary Search
	let lo = 0
	let hi = start_index - 1

	// Perform binary Search iteratively
	while(lo <= hi){
		let mid = Math.floor((lo + hi) /2);
		if (job[mid].finish <= job[start_index].start){
			if(job[mid + 1].finish <= job[start_index].start)
				lo = mid + 1
			else
				return mid
		}
		else
			hi = mid - 1
	}

	return -1

}

// The main function that returns the maximum possible
// profit from given array of jobs
function schedule(job){
	
	// Sort jobs according to finish time
	job.sort((a,b)=>a.finish - b.finish)

	// Create an array to store solutions of subproblems. table[i]
	// stores the profit for jobs till arr[i] (including arr[i])
	let n = job.length
	let table = new Array(n).fill(0)

	table[0] = job[0].profit;

	// Fill entries in table[] using recursive property
	for(let i=1;i<n;i++){

		// Find profit including the current job
		inclProf = job[i].profit
		l = binarySearch(job, i)
		if (l != -1)
			inclProf += table[l];

		// Store maximum of including and excluding
		table[i] = Math.max(inclProf, table[i - 1])
	}

	return table[n-1]
}

// Driver code to test above function
let job = [new Job(1, 2, 50), new Job(3, 5, 20),
	new Job(6, 19, 100), new Job(2, 100, 200)]
	
console.log("Optimal profit is ")
console.log(schedule(job),"</br>")

// This code is contributed by shinjanpatra.


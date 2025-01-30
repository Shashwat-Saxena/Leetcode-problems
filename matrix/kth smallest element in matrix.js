// Javascript code 
// kth smallest element in a 2d array sorted row-wise and
// column-wise

function kthSmallest(mat, n, k) {
    // Define a compare function to compare elements of the heap
    const cmp = (a, b) => mat[a[0]][a[1]] < mat[b[0]][b[1]];
    
    // Initialize the heap with the first column
    let heap = [];
    for (let i = 0; i < n; i++) {
      heap.push([i, 0]);
    }
    
    // Run the loop k-1 times
    for (let i = 1; i < k; i++) {
      // Get the smallest element from the heap
      let [r, c] = heap[0];
      
      // If the element has a next element in the row, add it to the heap
      if (c + 1 < n) {
        heap[0] = [r, c+1];
      } else {
        // If the element is the last in the row, remove it from the heap
        heap[0] = heap[heap.length - 1];
        heap.pop();
      }
      
      // Re-heapify the heap
      let j = 0;
      while (2*j+1 < heap.length) {
        let left = 2*j+1;
        let right = 2*j+2 < heap.length ? 2*j+2 : left;
        let minChild = cmp(heap[left], heap[right]) ? left : right;
        if (cmp(heap[minChild], heap[j])) {
          [heap[j], heap[minChild]] = [heap[minChild], heap[j]];
          j = minChild;
        } else {
          break;
        }
      }
    }
    
    // Return the kth smallest element
    let [r, c] = heap[0];
    return mat[r][c];
  }
  
  // Example usage
  let mat = [  [10, 20, 30, 40],
    [15, 25, 35, 45],
    [25, 29, 37, 48],
    [32, 33, 39, 50],
  ];
  console.log("7th smallest element is " + kthSmallest(mat, 4, 7));
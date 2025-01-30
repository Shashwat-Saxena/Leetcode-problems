function find_Median_fun(nums1, nums2){
    const totalLength = nums1.length + nums2.length;
    const ifEven = totalLength % 2 === 0;
    const halfLength = Math.floor(totalLength/2);

    let i=0, j=0;
    let Count = 0;
    let median = 0, PrevMedian = 0;

    while(Count <= halfLength){
        PrevMedian = median;
        if(i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])){
            median = nums1[i];
            i++;
        }else{
            median = nums2[j];
            j++;
        }
        Count++;
    }

    if(ifEven){
        return(PrevMedian + median)/2;
    }else{
        return median;
    }
}

const nums1 = [1,3];
const nums2 = [2];
console.log("medain", find_Median_fun(nums1,nums2));
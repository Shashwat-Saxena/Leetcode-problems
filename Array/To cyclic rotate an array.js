function rotate(arr,n){
    var last_el = arr[n-1],i;

    for(i=n-1; i>0; i--)
        arr[i] = arr[i-1];

    arr[0] = last_el;
}

var arr = [1,2,3,4,5];
var n= arr.length;

document.write("Give array is <br>");
    for(var i=0; i<n; i++)
        document.write(arr[i] + "");

    rotate(arr,n);

document.write("<br> Rotate array is <br>");
   for(var i=0; i<n; i++)
    document.write(arr[i] + " ");    
// not compiled try again later.
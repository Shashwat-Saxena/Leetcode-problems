function printduplicates(str){
    let len = str.length;
    str = str.split('').sort().join('');

    for(let i=0; i<len; i++){
        let count = 1;
        while(i<len-1 && str[i] == str[i+1]){
            count++;
            i++;
        }
        if(count >1){
            console.log(str[i]+",count = "+ count);
        }
    }
}
let str = "shashwat";
printduplicates(str);
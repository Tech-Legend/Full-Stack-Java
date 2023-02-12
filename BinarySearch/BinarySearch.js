const binary_search=(arr,val,low,high)=>{
let mid=Math.floor((low+high)/2);
if(arr[mid]===val)
return mid;
else if(arr[mid]<val)
return binary_search(arr,val,mid+1,high);
else
return binary_search(arr,val,low,mid-1);

}

const arr=[1,2,3,4,5,6];
val=3
let ans=binary_search(arr,val,0,arr.length-1);
console.log(ans);
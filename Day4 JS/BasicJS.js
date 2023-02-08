// reversing the string
const rev=(str)=>{
const arr=str.split(" ");
for(var i=0;i<arr.length;i++)
{
console.log(arr[i].split("").reverse().join(""));
}
}

var str="welcome to this javascript guide!"
console.log(rev(str));


//fizzbuzz problem

const start=()=>{
    for(var i=1;i<=100;i++)
    {
        if(i%3==0 && i%5==0)
        console.log("fizzbuzz")
        else if(i%3==0)
        console.log("fizz")
        else if(i%5==0)
         console.log("buzz")
         else
         console.log(i);
    }
}

start();

// anagram

const anagram=(val1,val2)=>{
    var str1=val1.split("");
    var str2=val2.split("");
    str1.sort();
    str2.sort();
   
    console.log(str1);
    console.log(str2);
    var sp=str1.join("");
    var sp1=str2.join("")
    if(sp === sp1)
    console.log("anagram");
    else
    console.log("not a anagram");
}

anagram("mary","army");

//empty the array

let array = ['a', 'b', 'c', 'd', 'e', 'f'];

array.length = 0;

console.log(array);


//implemention of stack

const items=[];

const push=(val)=>{
return items.push(val);
}
const pop=()=>{
return items.pop();
}
const peek=()=>{
    return items[items.length-1];
}

console.log("pushed: ",push(1))
console.log("pushed: ",push(2))
console.log("pushed: ",push(3))
console.log("poped: ",pop())
console.log("peeked: ",peek())

//valid name or not

const validate=(str)=>{
if(str.match("(^[A-Z]\. [A-Z][a-z]+$)|(^[A-Z]\. [A-Z]\. [A-Z][a-z]+)|(^[A-Z][a-z]+ [A-Z]\. [A-Z][a-z]+$)"))
{
    return " ";
}
else
return "";
}

var s="H. Wells"
let r=validate(s);
if(r.length>0)
console.log("true");
else
console.log("false");
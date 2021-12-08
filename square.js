let n=require("readline-sync");
var num=n.questionInt("enter the num")
dict={}
for (var i=1;i<=num;i++){
    dict[i]=i**2
}
console.log(dict)

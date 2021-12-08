var list1=["one","two","three","four","five","six"]
var list2=[1,2,3,4,5,6]

var dict={}
for(i in list2){
    dict[list1[i]]=list2[i]
}
console.log(dict)
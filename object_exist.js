let n=require("readline-sync");
var user=n.question("enter your input:-")
let dict={"name":"Raju", "marks":56}
for(i in dict){
    if(i===user){
        console.log("exist")
        break
    }
    else{
        console.log("not exist")
        break
    }
}
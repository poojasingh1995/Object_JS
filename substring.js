var mainString="My name is kumar, and my friend’s name is Dhamu" 
var subString="is"
k=mainString.split(" ")
c=0
for(i in k){
    a=k[i]
    if(a==="is"){
        c++
    }
}
console.log(c)
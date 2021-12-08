var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }

var a=[]
for (var i in my_dict.values()){
    a.push(i)
    var j=[]
    for (i in (5)){
        j.push(max(a))
        a.remove(max(a))
    }
}
console.log(j)
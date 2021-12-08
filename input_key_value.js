var n= require('readline-sync');
var students={}
for (let i = 0; i <10; i++){
    var name =n.question("Enter your name:-");
    var marks=n.questionInt("Enter the marks:-");
    students[name]=marks;
}
console.log(students);
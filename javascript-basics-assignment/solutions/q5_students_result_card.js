// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var arr=[
    {name:'Riddhi',subject:['Grammar','Accounts'],scores:[90,80]},
    {name:'Saloni',subject:['Grammar','Accounts'],scores:[30,40]},
    {name:'Sejal',subject:['Grammar','Accounts'],scores:[40,40]},
    {name:'Rutuja',subject:['Grammar','Accounts'],scores:[50,40]},
    {name:'Aditi',subject:['Grammar','Accounts'],scores:[20,70]},
    {name:'Akshay',subject:['Grammar','Accounts'],scores:[70,55]},
    {name:'Mrunali',subject:['Grammar','Accounts'],scores:[60,90]},


    {name:'Nikhil',subject:['Grammar','Physics'],scores:[85,35]},
    {name:'Uday',subject:['Grammar','Physics'],scores:[25,40]},
    {name:'Raaj',subject:['Grammar','Physics'],scores:[80,45]},
    {name:'Sagar',subject:['Grammar','Physics'],scores:[35,60]},
    {name:'Bunty',subject:['Grammar','Physics'],scores:[20,40]},
    {name:'Bhupesh',subject:['Grammar','Physics'],scores:[60,40]},
    {name:'Ganesh',subject:['Grammar','Physics'],scores:[40,50]},
]


var temp = arr.map((items,index)=>{         
let totalscore =  items.scores.reduce((a, b) => a + b, 0);  
let percentage = (totalscore/200)*100;
items.percentage =percentage;
return items;
})   

temp.map(namevalues=>{
console.log("name:"+namevalues.name + "   " + "Percentage:"+namevalues.percentage)
})

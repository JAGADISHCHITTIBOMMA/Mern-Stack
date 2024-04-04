const employeeinfo = {
    eid:1001,
    ename:"ravi",
    esal:30000
}
console.log(employeeinfo.eid);
console.log(employeeinfo["ename"]);
for(let employee in employeeinfo)
{
    console.log(employeeinfo[employee]);
}

//objects with functions
//this = is a keyword,used to represent the current object
//this is not works with array functions
//es7
const personinfo = {
    firstname:"chitti",
    lastname:"bomma",
    fullname:function(){
        return this.firstname+" "+this.lastname;  
    }
}
console.log(personinfo.fullname());

Object.keys(employeeinfo).forEach((key) => {console.log(key+":"+employeeinfo[key]);})
//what is call back function
//if we try to write  one function within another function is called call back function
Object.entries(employeeinfo).forEach((entry)=>{console.log(entry[0]+" "+entry[1])});
Object.values(employeeinfo).forEach((val)=>{console.log(val)});


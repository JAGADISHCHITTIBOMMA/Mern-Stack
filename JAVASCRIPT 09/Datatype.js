var employeeid =100;   //number
var employeename ="vinod";  //string
var employeesalary = 300000;   //number
var employeenumber = 9009190091;  //number
var employeepf = null;   //null
var contractemployee = true;  //boolean
var employeeallowance;    //undefined datatype
var enames=["hari","sakhi","rajii"];   //array

var employeeinfo = {     //object
    employeeId: 200,
    empployeename: "ravi",
    employeenumber: 9009190091
}  


console.log(employeeid);
console.log(employeenumber);
console.log(employeename+ " " +employeesalary);
console.log(contractemployee);
console.log(enames);
console.log(employeeallowance);
console.log(employeeinfo);
console.log(employeepf);
//how to know datatype of any field 
//typeof
console.log(typeof(employeename));
console.log(typeof(employeeinfo));
console.log(typeof(employeeid));
console.log(typeof(employeesalary));
console.log(typeof(employeeallowance));
console.log(typeof(employeepf));
//null,array,object----->object

//advanced javascript(ES6)
var tcsturnover = BigInt(9080899875676529769087);
console.log(typeof(tcsturnover));
var studentname = Symbol("ravi");
var studentname1 = Symbol("ravi");
console.log(studentname == studentname1);


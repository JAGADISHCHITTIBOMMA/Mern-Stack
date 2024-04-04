//syntax
//function without parameter
function show()
{
    console.log("welcome to mern stack");
}
show();

//function with parameters
function add(a,b){
    console.log("sum is:"+(a+b));
}
add(10,20);//arguments

//function with return value
function mul(a,b){
    return a*b;
}
const res = mul(10,20);
console.log("res is:"+res);


//es6
//arrow functions
//(),=>(fat arrow),statements (syntax)
//arrow function without parameters
const result = () => {
    console.log("welcome folks");
}
result();

//without block
const result1 = () =>
console.log("welcome folks!!!");
result1();

//arrow function with parameters
const result2 = (a,b) =>
console.log("sum is :"+(a+b));
result2(20,30);

//arrow function with return value
const result3 = (a,b) =>{
    return a*b;
}
const finalresult = result3(10,20);
console.log("finalresult is:"+finalresult);

//return value without block
const result4 = (a,b) => a*b;
const fresult = result4(30,40);
console.log("fresult is:"+fresult);


 
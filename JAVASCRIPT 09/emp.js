const eid = 1001;
const ename = "mokhi";
const mobilenumber = 9009190901;
function employee(basicsal,pf,hra)
{
  return (basicsal+pf+hra);
}
const sal = employee(5000,5000,5000);
console.log("total sal:"+sal);
if(sal<=20000)
{
    let bouns = 5000;
   console.log("emp salary is:"+(sal+bouns));
}
else{
   console.log("not eligible");
}

//using array function with return value
const employee1 = (basicsal,pf,hra) =>{
    return (basicsal+pf+hra);
}
const totalsal = employee1(20000,10000,20000);
console.log("total sal:"+totalsal);

//without return 
const employee2 = (basicsal,pf,hra) => (basicsal+pf+hra);
const totalsal1 = employee2(20000,10000,20000);
console.log("total sal:"+totalsal1);

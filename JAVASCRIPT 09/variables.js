//sample program on variables

var sal = 60000; //global var
function totalsal() //function scope
{
    var bouns = 5000; //local variable
    console.log("sal with bouns:"+(sal+bouns));
}
totalsal();

function totalsal1()
 {
    var medicalallowance = 10000; //local var
    console.log(medicalallowance);
}
totalsal1();
console.log(sal);

//let,const 
//block scope
{
    let a =10;
    const b =20;
    console.log(a+" "+b);
}

//var datatype drawbacks
//drawback1:
let productname = "realme";
let productname1 = "sony";
console.log(productname);
//drawback2:
for(let i=1;i<=10;i++)
{
    console.log("realme model:"+i);
}
//console.log("realme model:"+i);

var c = 10;
c = 30;
console.log(c);

let d = 13;
d = 18;
console.log(d);

const e = 20;
console.log(e);

let fbId = "jaggu_abc";
let firstname = "jagadish";
let lastname = "chitti";
let mobilenumber = 9177712508;
const datebirth = "21-09-2002";
const gender = "male";

console.log(fbId);
console.log(firstname);
console.log(lastname);
console.log(mobilenumber);
console.log(datebirth);
console.log(gender);
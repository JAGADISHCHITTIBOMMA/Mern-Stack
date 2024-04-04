//to display multiple products
//for
for(let i=1;i<=10;i++)
{
    console.log("realme model:"+i);
}

//while
let j = 1;
while(j<=10)
{
    console.log("redmi model:"+j);
    j++;
}

//do-while
let k = 1;
do{
    console.log("dell  model:"+k);
    k++;
}while(k<=10);

//advance loops(es6)
//for-of,for-in
//for-of is used to get elements from an array
const products = ["realme","dell","samsung","lenovo"];
for(let product of products)
{
    console.log(product);
}

//for-in loop is used to get elements from an object
const employeeinfo = {
    eid:1001,
    ename:"bhai",
    esal:30000
}
for(let employee in employeeinfo)
{
    console.log(employeeinfo[employee]);
}

const product = ["realme","del","samsung"];
for(i=0;i<product.length;i++)
{
    console.log(product[i]);
}
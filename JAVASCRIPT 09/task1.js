const rollnumber =  1209;
let name = "bhai";
let sub1 = 70;
let sub2 = 75;
let sub3 = 85;
let sub4 = 90;
let sub5 = 80;
let total = sub1+sub2+sub3+sub4+sub5;
let avg = total/5;
console.log("total marks of 5 subjects:"+total);
console.log("avg of 5 subjects:"+avg);
if(avg>=75)
{
    console.log("grade A");
}
else if((avg>60)&&(avg<75))
{
    console.log("grade B");
}

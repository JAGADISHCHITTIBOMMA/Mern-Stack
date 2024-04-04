//sample program on operators
let a = 10;
let b = 20;
//arithematic operators
// +,-,*,/,% 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//relational operators
// <,>,<=,>=,==,!= 
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);

//logical operators
// &&,||
console.log((a>10)&&(b<20));
console.log((a<10)||(b>20));

//assignment operators
// =,+=,-=,*=,/=,%=,**=
console.log(a=b);
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

//bitwise operators
// &,|,^
console.log(a&b);
console.log(a|b);
console.log(a^b);

//unary operators
//++,--
let d = 10;
console.log(d++);
console.log(++d);
console.log(d--);
console.log(--d);

//ternary operators
// :,?
let age = 20;
console.log(age>=18)
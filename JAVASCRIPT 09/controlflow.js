//control flow statements
// if,else,if-else ladder,switch
let age = 22;
if(age>=18)
{
    console.log("eligible to vote");
}
else {
    console.log("not eligible to vote");
}

let day = new Date().getDay();
switch(day)
{
   case 0:
    console.log("today is sunday");
    break;
   case 1:
    console.log("today is monday");
    break;
   case 2:
    console.log("today is tuesday");
    break;
   case 3:
    console.log("today is wed");
    break;
   case 4:
    console.log("today is thu");
    break;
   case 5:
    console.log("today is friday");
    break;
   case 6:
    console.log("today is sat");       
    break;
    default:
        console.log("invalid day");
}

let avg = 70;
switch(false)
{
    case (avg>=75):
        console.log("grade A");
        break;
    case ((avg>60)&&(avg<75)):    
    console.log("grade B");
    break;
    case ((avg>50)&&(avg<60)):
        console.log("grade c");
        break;
        default:
            console.log("no result");
}
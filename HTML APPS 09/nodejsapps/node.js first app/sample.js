//Asynchronous output
import fs from 'fs';
console.log("first");
//to read data from file
fs.readFile("aboutdiet.txt",(err,data) => {
    if(data)
{
    console.log(data.toString());
}
else
{
    console.log(err);
}
})
console.log("third");
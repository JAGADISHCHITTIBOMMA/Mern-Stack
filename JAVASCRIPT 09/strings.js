//ways to create strings
//1.literal syntax
const msg = "welcome to mern fullstack development";
//2.object syntax
const msg1 = new String("welcome floks");
const msg2 = "   welcome floks  ";
//recommended one is literal syntax
// ==,===
console.log(msg1==msg2);//true //focus on only values
console.log(msg1===msg2);//false //focus on values and references

//==
//loginapp
const username = "admin";
const password = "admin1233";
if((username=="admin")&&(password=="admin1233"))
{
    console.log("successfully login to ");
}
else{
    console.log("invalid username and password");
}

//how to get length of a string
//length
console.log(msg.length);

//how to get portion of a string
//slice(),substring(),substr()
console.log(msg.slice(16));
console.log(msg.slice(16,25));//inclusive,end-1
console.log(msg.slice(-25,-10));//25-10=15
console.log(msg.substring(16,25));
console.log(msg.substring(16));
console.log(msg.substring(-25,-10));//substring does not allow negative values
console.log(msg.substr(16));
console.log(msg.substr(16,9));//start value index,end is 
//strike symbol means its outdated ,legacy,old

//how to concat more than one string
//+,concat
console.log(msg+" "+msg1);
console.log(msg.concat(""+msg1));

//replace string content 
//replace()
//regular expressions(i=insensitive,g=global)
console.log(msg.replace("welcome", "warmwelcome"));
console.log(msg2.replace(/welcome/i,"warmwelcome"));
console.log(msg2.replace(/welcome/g,"warmwelcome"));

//search specific portion index from the string
//indexOf(),lastIndexOf(),search()
console.log(msg.indexOf("mern"));
console.log(msg.indexOf("welcome",10));
console.log(msg.lastIndexOf("welcome"));
console.log(msg.lastIndexOf("welcome",20));
console.log(msg.search("welcome"));

//converting uppercase to lowercase,lowercase to uppercase
console.log(msg1.toUpperCase());
console.log(msg1.toLowerCase());

//trim(),trimStart(),trimEnd() functions
console.log(msg2.trim());
console.log(msg2.trimStart());
console.log(msg2.trimEnd());

//padding 
console.log(msg2.padStart("welcome floks","to my union"));
console.log(msg2.padStart(4,"x"));

//repeat()
console.log(msg1.repeat(2));

//split 
console.log(msg1.split(","));
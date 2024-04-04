//javascript logic
//action can be implemented with functions
function validate()
{
    //request data gathering lo;gic 
    var email= document.loginform.email.value;
    var pwd = document.loginform.pwd.value;
    var qualification= document.loginform.qualification.value;
    var gender= document.loginform.gender.value;
    var DOB = document.loginform.DOB.value;
    var mobilnumber = document.loginform.mobilnumber.value;
    var address = document.loginform.address.value;
    var preferredshift= document.loginform.preferredshift.value;
    var uplodeyourfile= document.loginform.uplodeyourfile.value;
    //validation logic
    if(email=="")
    {
        alert("boss..please enter email!!!");
        return false;
    }
    if(pwd=="")
    {
        alert("boss...please enter pwd!!!");
        return false;
    }
    if(qualification="")
    {
        alert("boss   please enter qualification");
        return true;
    }
    if(gender="")
    {
        alert("boss...please enter gender");
        return false;  
    }
    if(DOB="")
    {
        alert("boss...please enter dob");
        return false;  
    }
    if(mobilnumber="")
    {
        alert("boss...please enter mobilnumber");
        return false;  
    }
    if(address="")
    {
        alert("boss...please enter address");
        return false;  
    }
    if(preferredshift="")
    {
        alert("boss...please enter preferredshift");
        return false;  
    }
    if(uplodeyourfile="")
    {
        alert("boss...please enter uplodeyourfile");
        return false;  
    }
    return true;
}
function clearError(){
    errors=document.getElementsByClassName('form-error');

    for(let item of errors){
        item.innerHTML="";
    }
    
  }
  function validateForm(){ 

    clearError();
    var name=document.getElementById("name").value; 
    var email=document.getElementById("email").value;
    var college=document.getElementById("college").value;
    var branch=document.getElementById("branch").value;
    var regno=document.getElementById("reg-num").value;
    var address=document.getElementById("add").value;
    var phone=document.getElementById("contact-number").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("confirmpassword").value;

   if (name==""){  
       document.getElementById("name-error").innerHTML="**Please enter your name";
       return false;
   }
   if(!isNaN(name)){
    document.getElementById("name-error").innerHTML="** number not allowed";
    return false;
}
let atPos=email.indexOf('@');
let dotPos=email.indexOf('.');
   if(email==""){
    document.getElementById("email-error").innerHTML="** please enter the email id";
    return false;
}
if(atPos<=0 || atPos<=0 || dotPos-atPos<4 || atPos==email.length-1 || dotPos==email.length-1 ){
    document.getElementById("email-error").innerHTML="** please enter valid email";
    return false;
}

if(college=="")
{
    document.getElementById("college-error").innerHTML="**Please enter your college name";
    return false;
}

if(branch=="")
{
    document.getElementById("branch-error").innerHTML="**Please enter your branch";
    return false;
}

if(regno==""){
    document.getElementById("reg-error").innerHTML="** please enter the registration number";
    return false;
}
if(regno.length!=10){
    document.getElementById("reg-error").innerHTML="** registration number should be 10 digits";
    return false;
}
if(isNaN(regno)==true){
    document.getElementById("reg-error").innerHTML="** please enter numbers only";
    return false;
}

if(address=="")
{
    document.getElementById("add-error").innerHTML="**Please enter your address";
    return false;
}

if(phone==""){
    document.getElementById("num-error").innerHTML="** please enter the mobile number";
    return false;
}
// if(isNaN(phone)){
//     document.getElementById("num-error").innerHTML="** number allowed only";
//     return false;
// }
if(phone.length!=10){
    document.getElementById("num-error").innerHTML="** please enter 10 digit mobile number";
    return false;
}

if(password==""){
    document.getElementById("pass-error").innerHTML="** please enter the password";
    return false;
}
if(password.length<5 || password.length>12){
    document.getElementById("pass-error").innerHTML="** password size must be greater than 5 and less than 12";
    return false;
}
if(cpassword==""){
    document.getElementById("con-pass-error").innerHTML="** please enter the confirm password";
    return false;
}
if(password!=cpassword){
    document.getElementById("con-pass-error").innerHTML="** password not matched";
    return false;
}





}


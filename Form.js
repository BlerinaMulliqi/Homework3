function CheckPassword() 
{ 
    let passw=
  document.getElementById("checkpas").value;

if(passw==="12345678") 
{ 
  
    document.getElementById("correct").innerHTML= "You're logged in ";
 return false;
  
}
else
{ 
alert('Wrong...!')
return false;
}
}
const button = document.getElementById('btn');

button.addEventListener('click',()=>{
  let userName = document.getElementById("UserName").value;
  let userAge = parseFloat(document.getElementById("UserAge").value);
  
  if(userAge >= 18){
    document.getElementById("paragraph").innerHTML =`Su nombre es ${userName} y tienes ${userAge} años, por lo tanto usted si puede votar` ;
  }else{
    document.getElementById("paragraph").innerHTML = `Su nombre es ${userName} y tienes ${userAge} años, por lo tanto usted no puede votar`;
  }
});
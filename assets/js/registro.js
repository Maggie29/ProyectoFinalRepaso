window.onload = function(){
document.getElementById("form").onsubmit = function(e){
  e.preventDefault();
}
function registroCoder(name, lastName, email, password){
  this.name = name;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
};

var coder = [];
document.getElementById("signUp").addEventListener("click", function(){
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value
  if(name.length!=0 && lastName.length!=0 && email.length!=0 && password!=0){
  coder.push(new registroCoder(name, lastName,email, password));
  creandoDiv(coder);
  document.getElementById("form").reset()
  window.location = "bienvenida.html"
}else{
    var error = document.getElementById("alertError");
    error.innerText = "Todo los campos son obligatorios";
  }
});

function creandoDiv(){
  var contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";
  for(var i = 0; i<coder.length;i++){
  			var divContenedor= document.createElement("div");
        divContenedor.classList.add("div-coder");
  			for (var prop in coder[i]) {
  				var pContenedor= document.createElement("p");
  				pContenedor.innerHTML= prop + " : " + coder[i][prop];
  				divContenedor.appendChild(pContenedor);
        }
        contenedor.appendChild(divContenedor);
      }
    }
  }
    /*function validateEmail(){
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = document.getElementById("email").value;
    if(emailRegex.test(email){
      return true;
    }else{
      error.innerHTML="Este campo debe tener el siguiente formato: name@domain.com"
    }
  }
  validateEmail();
}*/

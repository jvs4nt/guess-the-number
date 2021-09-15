var secretNumber = parseInt(Math.random() * 11);

function Chutar() {
  var elemento = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == secretNumber) {
    elemento.innerHTML = "Você acertou!";
  } 
  
    else if (chute > 10 || chute < 0) {
    elemento.innerHTML = "O número deve ser de 0 a 10!";
  } 
  
    else {
    elemento.innerHTML = "Você errou, tente novamente..."
    console.log("shhh, não conta pra ninguém! o número secreto é " + secretNumber);
  }

  var elemento2 = document.getElementById("resultado2");
  
  if (secretNumber < chute) {
    elemento2.innerHTML = "O número secreto é menor que esse número";
}

else if (secretNumber == chute) {
    elemento2.innerHTML = "";
}

else  {
    elemento2.innerHTML = "O número secreto é maior que esse número";
}


}


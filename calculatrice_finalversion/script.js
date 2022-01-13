const afficherL1 = document.getElementById('ecranL1');
const afficherL2 = document.getElementById('ecranL2');

// const tempResultEl = document.querySelector(".temp-result");
const toucheNb = document.querySelectorAll(".nombre");
const operationEl = document.querySelectorAll(".operation");
const egal_touche = document.querySelector(".egal");
const C_touche = document.querySelector(".efface_tout");
const CE_touche = document.querySelector(".efface_derniere_saisie");
const retour_touche = document.querySelector(".retour_arriere");
const Negation = document.querySelector(".negation");

let affnb1 = "";
let affnb2 = "";
var resultat = ""; //null ou false booléen?
var derniereOperation = "";
let avec_virgule = false;


toucheNb.forEach(nombre => {
  nombre.addEventListener("click", (e) => {
    if (e.target.innerText === "," && !avec_virgule && !affnb2) {
      affnb2 = 0;
      afficherL2.innerHTML = affnb2;
      avec_virgule = true;
    } 
    else if (e.target.innerText === "," && avec_virgule) {
      return;
    }
    affnb2 += e.target.innerText;
    afficherL2.innerText = affnb2;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!affnb2) return;
    avec_virgule = false;
    const operationNom = e.target.innerText;
    if (affnb1 && affnb2 && derniereOperation) {
      mathOperation();
    } else {
      resultat = parseFloat(affnb2);
    }
    clearVar(operationNom);
    derniereOperation = operationNom;
  });
});

function clearVar(name = "") {
  affnb1 += affnb2 + " " + name + " ";
  afficherL1.innerText = affnb1;
  afficherL2.innerText = 0;
  affnb2 = "";
//   tempResultEl.innerText = result;
}

function mathOperation() {
  switch (derniereOperation) {
    case "*":
      resultat = parseFloat(resultat) * parseFloat(affnb2);
      resultat = resultat.toFixed(2);
      if (resultat.substr(resultat.length-3, 3) == ".00") {return resultat.substr(0, resultat.length-3)}
      break;
    case "+":
      resultat = parseFloat(resultat) + parseFloat(affnb2);
      resultat = resultat.toFixed(2);
      if (resultat.substr(resultat.length-3, 3) == ".00") {return resultat.substr(0, resultat.length-3)}
      break;
    case "-":
      resultat = parseFloat(resultat) - parseFloat(affnb2);
      resultat = resultat.toFixed(2);
      if (resultat.substr(resultat.length-3, 3) == ".00") {return resultat.substr(0, resultat.length-3)}
      break;
    case "/":
      resultat = parseFloat(resultat) / parseFloat(affnb2);
      // if (parseFloat(affnb2) === "0") {
      //   afficherL2.innerHTML = "Désolé... Nous ne pouvons pas diviser par zéro";
      // }
      // else
        resultat = parseFloat(resultat) / parseFloat(affnb2);
      resultat = resultat.toFixed(2);
      if (resultat.substr(resultat.length-3, 3) == ".00") {return resultat.substr(0, resultat.length-3)}
      break;
  }
}
// operation();

egal_touche.addEventListener("click", () => {
  if (!affnb2 || !affnb1) return;
  avec_virgule = false;
  mathOperation();
  clearVar();
  afficherL2.innerText = resultat;
//   tempResultEl.innerText = "";
  affnb2 = "";
  affnb1 = "";
});

C_touche.addEventListener("click", () => {
  affnb1 = "";
  affnb2 = "";
  afficherL1.innerText = "";
  afficherL2.innerText = "0";
  resultat = "";
//   tempResultEl.innerText = "";
});


CE_touche.addEventListener("click", (e) => {
      afficherL2.innerText = "0";
      affnb2 = "";
});

// retour_touche.addEventListener("click", (e) => {
//   let retour = affnb2.substr(0, affnb2.length-1);
//   affnb2 = retour;
//   afficherL2.innerHTML = affnb2;  
// });

// Negation.addEventListener("click", (e) => {  
//   affnb2 = affnb2 * -1;
//   afficherL2.innerHTML = affnb2;
//   });



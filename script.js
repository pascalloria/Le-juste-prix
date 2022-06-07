// Etape 1 - Sélectionner nos éléments
// let btn=document.body.querySelector("#submit")
// let instruction=document.body.querySelector("#instruction")
let input        = document.body.querySelector("#prix");
let error        = document.body.querySelector("small");
let formulaire   = document.body.querySelector("#formulaire");

// fonction pour generer un nombre entier
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
let nombreAleatoire = genererNombreEntier(101);
let coups           = 0;
let nombreChoisi;


// Etape 6 - Créer la fonction vérifier
function verifier(nbr){
    let instruction=document.createElement("div");

    
    if (nbr==nombreAleatoire){        
        instruction.textContent="#"+coups+" ("+nombreChoisi+") félicitation vous avec trouvé le juste prix";
        instruction.className="instruction fini" ;
        input.disabled=true;
    } 
    else if (nbr > nombreAleatoire){
        instruction.textContent="#"+coups+" ("+nombreChoisi+") c'est moins"
        instruction.className="instruction moins"        
    }  
    else{
        instruction.textContent="#"+coups+" ("+nombreChoisi+") c'est plus"
        instruction.className="instruction plus"  
    }
    document.querySelector("#instructions").prepend(instruction);
   }
// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup",() =>{
    if ( isNaN(input.value) ){
        // afficher le message d'erreur
        error.style.display ="inline";     
    }
    else{
        // cacher le message d'erreur
        error.style.display ="none";
    }
})

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit",(e) => {
    e.preventDefault(); // annule l'evenement par défaut du navigateur (ici envoie sur une autre page)

    if (isNaN(input.value) || input.value == "" ){
        // mettre la bordure en rouge       
        input.style.borderColor = "red"        
    }
    else{
        coups++;
        // mettre la bordure en vert       
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);

    }


})
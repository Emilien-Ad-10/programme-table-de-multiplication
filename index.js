{
    
//Sélection du body:    
let body = document.querySelector("body");
console.log(body);

//Création d'un titre H1:
let H1 = document.createElement("h1");
H1.innerHTML = "Les tables de multiplications";
body.appendChild(H1);
console.log(H1);

//Création d'une div class sélection dans le body:
let divSelection = document.createElement("div");
divSelection.setAttribute("class", "Selection");
body.appendChild(divSelection); 
console.log(divSelection);

//Création d'un paragraphe de texte dans la divSelection:
let paragraphe = document.createElement("p");
paragraphe.innerHTML = "Choisir le multiplicateur:";
divSelection.appendChild(paragraphe);
console.log(paragraphe);

//Création d'un input de type number dans la divSelection:
let input = document.createElement("input");
input.setAttribute("type", "number");
divSelection.appendChild(input);
console.log(input);

//Création d'un bouton dans la divSelection:
let boutonValidation = document.createElement("button");
boutonValidation.innerHTML = "Valider";
divSelection.appendChild(boutonValidation);
console.log(boutonValidation);

//Création d'une divConteneur dans le body:
let divConteneur = document.createElement("div");
divConteneur.setAttribute("class", "conteneur");
body.appendChild(divConteneur);
console.log(divConteneur);

//Création d'une divChiffres dans la divConteneur:
let divChiffres = document.createElement("div");
divChiffres.setAttribute("class", "chiffres");
divConteneur.appendChild(divChiffres);
console.log(divChiffres);

//Création d'une divMultiplicateur dans la divConteneur:
let divMultiplicateur = document.createElement("div");
divMultiplicateur.setAttribute("class", "multiplicateur");
divConteneur.appendChild(divMultiplicateur);
console.log(divMultiplicateur);

//Création d'une divProduit dans la divConteneur:
let divProduit = document.createElement("div");
divProduit.setAttribute("class", "produit");
divConteneur.appendChild(divProduit);
console.log(divProduit);

//Création d'un event sur le boutonValidation + condition de l'input:
boutonValidation.addEventListener("click", () => {
    
    //Suppression des spanClass:
    let suppressionSpanChiffres = document.querySelectorAll(".spanChiffres");
    
    if(suppressionSpanChiffres != null){
        for(let i = 0; i < suppressionSpanChiffres.length; i++){
            suppressionSpanChiffres[i].remove();
        }
            
    }

    let suppressionSpanMultiplicateurs = document.querySelectorAll(".spanMultiplicateur");
    
    if(suppressionSpanMultiplicateurs != null){
        for(let i = 0; i < suppressionSpanMultiplicateurs.length; i++){
            suppressionSpanMultiplicateurs[i].remove();
        }
            
    }

    let suppressionSpanProduits = document.querySelectorAll(".spanProduit");
    
    if(suppressionSpanProduits != null){
        for(let i = 0; i < suppressionSpanProduits.length; i++){
            suppressionSpanProduits[i].remove();
        }
            
    }
    
    if(input.value == ""){
        alert("Veuillez saisir une valeur");
    }else if(input.value < 0 || input.value > 100){
        alert("Veuillez saisir un chiffre entre 0 et 100");
    }else if(input.value <= 100){
        //Création d'une boucle for itérant de 0 à 10:
        for(let i = 0; i <= 10; i++){
        let chiffres = i;
        //console.log(chiffres);
        let produit = chiffres * input.value;
        
        //Création d'une span dans la divChiffres:
        let spanChiffres = document.createElement("span");
        spanChiffres.setAttribute("class", "spanChiffres");    
        divChiffres.appendChild(spanChiffres);
        spanChiffres.innerHTML = chiffres;
        //console.log(spanChiffres);
        
        //Création d'une span dans la divMultiplicateur:
        let spanMultiplicateur = document.createElement("span");
        spanMultiplicateur.setAttribute("class", "spanMultiplicateur");
        divMultiplicateur.appendChild(spanMultiplicateur);
        spanMultiplicateur.innerHTML = `multiplier par ${input.value}`;
        //console.log(spanMultiplicateur);
        
        //Création d'une span dans la divProduit:
        let spanProduit = document.createElement("span");
        spanProduit.setAttribute("class", "spanProduit");
        divProduit.appendChild(spanProduit);
        spanProduit.innerHTML = `est égal à ${produit}`;
        //console.log(spanProduit);
        }        
    };
});

input.addEventListener("change", (event) => {
    
    //Suppression des spanClass:
    let suppressionSpanChiffres = document.querySelectorAll(".spanChiffres");
    
    if(suppressionSpanChiffres != null){
        for(let i = 0; i < suppressionSpanChiffres.length; i++){
            suppressionSpanChiffres[i].remove();
        }
            
    }

    let suppressionSpanMultiplicateurs = document.querySelectorAll(".spanMultiplicateur");
    
    if(suppressionSpanMultiplicateurs != null){
        for(let i = 0; i < suppressionSpanMultiplicateurs.length; i++){
            suppressionSpanMultiplicateurs[i].remove();
        }
            
    }

    let suppressionSpanProduits = document.querySelectorAll(".spanProduit");
    
    if(suppressionSpanProduits != null){
        for(let i = 0; i < suppressionSpanProduits.length; i++){
            suppressionSpanProduits[i].remove();
        }
            
    }

    if(event.target.value == ""){
        alert("Veuillez saisir une valeur");
    }else if(event.target.value < 0 || event.target.value > 100){
        alert("Veuillez saisir un chiffre entre 0 et 100");
    }else if(event.target.value <= 100){
        //Création d'une boucle for itérant de 0 à 10:
        for(let i = 0; i <= 10; i++){
        let chiffres = i;
        //console.log(chiffres);
        let produit = chiffres * event.target.value;
        
        //Création d'une span dans la divChiffres:
        let spanChiffres = document.createElement("span");
        spanChiffres.setAttribute("class", "spanChiffres");
        divChiffres.appendChild(spanChiffres);
        spanChiffres.innerHTML = chiffres;
        //console.log(spanChiffres);
        
        //Création d'une span dans la divMultiplicateur:
        let spanMultiplicateur = document.createElement("span");
        spanMultiplicateur.setAttribute("class", "spanMultiplicateur");
        divMultiplicateur.appendChild(spanMultiplicateur);
        spanMultiplicateur.innerHTML = `multiplier par ${event.target.value}`;
        //console.log(spanMultiplicateur);

        //Création d'une span dans la divProduit:
        let spanProduit = document.createElement("span");
        spanProduit.setAttribute("class", "spanProduit");
        divProduit.appendChild(spanProduit);
        spanProduit.innerHTML = `est égal à ${produit}`;
        //console.log(spanProduit);
        }        
    };
});
}
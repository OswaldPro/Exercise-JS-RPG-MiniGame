// let pvHero;
// let pvMonster;


// do { 
//   pvHero = prompt("Points de vie du héro :")
// } while (isNaN(pvHero) || pvHero.trim() === "");

// pvHero = Number(pvHero);

// do { 
//   pvMonster = prompt("Points de vie du monstre :")
// } while (isNaN(pvMonster) || pvMonster.trim() === "");

// function Attaque() {
//   if (pvHero>pvMonster || pvHero > 50) {
//     alert("Tu attaques avec toute ta puissance. Le monstre à perdu " + pvMonster + " PV! Tu l'as one-shot");

//   } else if (pvHero >= 20 && pvHero <= 50) {
//     alert("Tu attaques faiblement...");

//   } else if (pvHero >= 0 && pvHero < 20) {
//     alert("Tu es trop faible, tu dois fuir !");
//     fuir();

//   } else if (pvHero <0) {
//     alert("Tu ne le sait pas, mais tu est déjà mort");

//   } else {
//     alert("Merci de rentrer un nombre ou chiffre, pas ta liste de courses")
//   }
// }

// function fuir() {
//   alert("Le héros fuit le combat !");
// }

// heroAttaque();

// exo for, while, each : 

// D'abord on demande au user combien d'entrainement souhaites-t-il faire pour son hero.
// On s'assure que la saisie du user est bien un chiffre/nombre ou qu'elle n'est pas vide
// On a un nombre d'entrainements, on va compter ce nombre 1 par 1 jusque au nombre donné par le user et on affiche le numéros de chaque entrainement à chaque fois.
// Une fois le nb d'entrainement atteints on affiche  "Entrainements terminés"

//Le héro rencontre 3 ennemis. Il va attaquer les ennemis et en tuer 1 a chaque attaque jusqu'a ce qu'il n'y ai plus d'ennemis.
// On affiche que le combat est terminé à 0 ennemis.

// Le héro trouve un coffre contenant : une épée, une potion et un bouclier.
// On va afficher chaque item de ce coffre après "Le héros à trouvé :"
// on affiche que l'aventure est terminée

// let choix = prompt("Choisis une option :\n1. Oui\n2. Non");

// switch (choix) {
//   case "1":
//   case "continuer":
//     alert("Tu as choisi de continuer.");
//     break;
//   case "2":
//   case "quitter":
//     alert("Tu as choisi de quitter.");
//     break;
//   default:
//     alert("Choix invalide.");
// }

//Features ideas :
// Ajouter de la stam de base qui est egale a la stamMax et des pv de base égaux au pvMax
// Chaque entraienement diminue la stamina de 25pts mais la stamMax augmente de 15 et les pvMax de 10.
// Le nombre d'entrainement est detemriné par un lancé de dés. A la fin, on recupère une partie de la stamMax : 30% de la stamMax
// On peux choisir d'aller au combat direct ou se reposer;
// Plus on se repose plus on recupère de la stamina (30pts) mais on perd un peu de stamMax aussi (10%)
// Idées d'amélioration : possibilité de choisir une classe dans un tableau, chaque classe possédant des pV, et de la stamina spécifique ainsi qu'une attq et une defense spécifique
//Recupération des constante de l'HTML
let pv = document.querySelector(".pv");
let stam = document.querySelector(".stam");
let weaponIG = document.querySelector(".weaponIG");
let itemIG = document.querySelector(".itemIG")
let dialogText = document.querySelector(".dialog p")
let textBtn = document.querySelector("header button")

//Bascis (game perks)
let pvBase = 100;
let pvMax = 100;
let stamBase = 150;
let stamMax = 150

//Entrainements : Jet d'un dé
let trainingNb = Math.round(Math.random() * 6)

dialogText.innerText = "Yo ! je suis Onizuka-sensei, on m'a dit que tu souhaitais devenir fort.\nPour l'instant tu n'es qu'un petit etron.\nJettes ce dé pour savoir combien de séances d'entrainements je t'accorde."
// ajouter une petit bouton pour passer a la suite du text

textBtn.addEventListener("click", function(){
  dialogText.innerText = "Allez c'est partis pour " + trainingNb + " séances !"
})

alert("Allez c'est partis pour " + trainingNb + " séances !")
// do { 
//   trainingNb = prompt("Combien d'entrainements veux-tu faire");
// } while (isNaN(trainingNb) || trainingNb.trim() === "" || trainingNb == 0);

// trainingNb = Number(trainingNb)

// for ( let i = 0; i < trainingNb; i++){
//   alert("Entrainement numéro " + (i+1) + " terminé");
//   pvMax = pvMax + (trainingNb * 10); // gain de pv/entrainements
//   pvBase = pvMax // pas de perte d'energie pendant les entrainements
//   stamBase = stamBase - (trainingNb * 25); // perte de stam/entr
//   stamMax = stamMax + (trainingNb * 15); // gain de stamMax/entr
// } 

// alert("Tu as terminé tous tes entrainements !\nTu as gagnés " + (trainingNb * 10) + " points de vies max et " + (trainingNb * 15) + " points d'endurance.\nReposes-toi un peu, tu pourras partir te péta ensuite")
// stamBase = stamBase + (Math.round(stamMax * 0.3));

// do {
// let choice = prompt("Tu es reposé, tu as récupéré " + (Math.round(stamMax * 0.3)) + " points d'endurance.\nQue veux-tu faire : \n1.Combattre \n2.Dormir");
// } while (!["1", "2", "Combattre", "Dormir"].includes(choice)); 
// // []include(choice) indique que l'on va chercher la valeur de choice dans le tableau. le "!" est pour la négation.
// // Resultats : do va boucler tant que (while) la valeur de choice rentrée par l'user N'EST PAS dans le tableau.

// if ( choice =="2" || choice.toLowerCase == "dormir"){
//   let restDays = prompt("Combien de jours souhaites-tu te reposer ?");
//   stamBase = stamBase + (restDays * 30)
//   stamMax = stamMax - (restDays * (0.08*stamMax))
//   if (stamBase > stamMax){
//     stamBase = stamMax
//   }
//   alert(`Tu es bien reposé maintenant, j'espère que tu n'est pas trop rouillé. Tu as désormais ${stamBase} points d'endurance et  ${stamMax} points d'endurance Max`)
//   // prompter pour le nb de jour pour dormir. augmenter la stambase de 30pt/jours et diminuer la max de 8%/jour
//   // alerter 
//   // else alerter qu'on par donc se peta avec x pv et y stam
// } else {
//   alert(`Ok ! Tu pars donc pour la bagarre avec: \n${stamBase} d'endurance sur ${stamMax} max, \n${pvBase} PV sur ${pvMax} max `)
// }



// Combats
// Donner un prompt avec 3-4 choix de chemin
// Chaque chemin = un nb d'ennemis différents
// Ajouter une random par chemin ? Ex : path1 = 0 a 3 ennemis

let choice; // Déclaration de choice avant la boucle

for ( let i = 0; i < trainingNb; i++){
  alert("Entrainement numéro " + (i+1) + " terminé");
}

pvMax = pvMax + (trainingNb * 10); // gain de pv/entrainements
pvBase = pvMax // pas de perte d'energie pendant les entrainements
stamBase = stamBase - (trainingNb * 25); // perte de stam/entr
stamMax = stamMax + (trainingNb * 15); // gain de stamMax/entr
if (stamBase > stamMax) {
  stamBase = stamMax;
}

alert(
  "Tu as terminé tous tes entraînements !\n" +
    "Tu as gagné " + trainingNb * 10 + " points de vie max et " +
    trainingNb * 15 + " points d'endurance.\n" +
    `Tu as au total ${pvMax} PV Max, ${stamBase} points d'endurance sur ${stamMax} Max.\n` +   
    "Reposes-toi un peu, tu pourras partir te battre ensuite."
);

stamBase += Math.round(stamMax * 0.25); // Récupération d'endurance

do {
  choice = prompt(
    "Tu es reposé, tu as " + pvBase + "/" + pvMax + "PV et " + stamBase + "/" + stamMax + " d'endurance."
       +
      "\nQue veux-tu faire : \n1. Combattre \n2. Dormir (recharge l'endurance mais diminue l'endurance max) "
  );
} while (!["1", "2", "Combattre", "Dormir"].includes(choice)); 

// Vérification et exécution de la suite du code
if (choice === "2" || choice.toLowerCase() === "dormir") {
  let restDays = prompt("Combien de jours souhaites-tu te reposer ?");
  if (isNaN(restDays) || restDays <= 0) {
    alert("Tu dois entrer un nombre valide.");
  } else {
    stamBase += restDays * 30;
    stamMax -= Math.pow(0.95, restDays); // Réduction progressive de 5% par jour 10 - (10 * (0.05 * 2))

    if (stamBase > stamMax) {
      stamBase = stamMax;
    }

    alert(
      `Tu es bien reposé maintenant, j'espère que tu n'es pas trop rouillé.\n` +
      `Tu as désormais ${Math.round(stamBase)} points d'endurance et ${Math.round(stamMax)} points d'endurance Max.`
    );
  }
} else {
  alert(
    `Ok ! Tu pars donc pour la bagarre avec :\n` +
    `${stamBase} d'endurance sur ${stamMax} max,\n` +
    `${pvBase} PV sur ${pvMax} max.`
  );
}

let heroStatus = "Alive"
let ennemyNb = Math.round(Math.random() * 5);

alert("Tu rencontres " + ennemyNb + " ennemis!");

while (ennemyNb > 0) {
  alert("BOOM ! HEAD-SHOT ! Plus que " + ennemyNb + " ennemis !")
  alert("Il te reste " + pvHero + " PV.")
  let choice = prompt("Souhaites-tu : \n1.Continuez \n2.Fuir");
  if (choice ==2 || choice.toLowerCase() =="fuir"){
    alert("Tu fuit le combat !")
    heroStatus = "OnTheRun"
    break;
  } else {
    alert("Le combat continue !");
  }
  ennemyNb--;
  pvHero--;

  if (ennemyNb == 0 && pvHero > 0){
    alert("Tu as vaincu tout les ennemis et dropper un coffre ! Ouvres-le !")
  } else if (ennemyNb>0 && pvHero <= 0){
    heroStatus = "Dead"
    alert("Tu es " + heroStatus + ".");
    break;
  }
} 

if (heroStatus == "Alive"){
  alert("Tu as vaincu tout les ennemis et dropper un coffre ! Ouvres-le !");
  let itemList = ["une Epée légendaire", "une Potion", "un Bouclier en Or"]

itemList.forEach(function(item){
  alert("Tu as trouvé " + item + "!")
})
} else if (heroStatus == "Dead"){
  alert("Bonjour je suis Dieu, bienvenue au paradis")
} else {
  alert("Tu as fuit le combat, reposes-toi et entraines-toi plus la prochaine fois")
}

alert("Tu as vaincu tout les ennemis et dropper un coffre ! Ouvres-le !")

let itemList = ["une Epée légendaire", "une Potion", "un Bouclier en Or"]

itemList.forEach(function(item){
  alert("Tu as trouvé " + item + "!")
})


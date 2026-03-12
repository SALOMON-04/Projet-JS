// let age = prompt("entrer votre age")

// if ( age >= 18) {
//          alert ( " vous etes adulte, votre age est " +  age + " ans.")
// } else  {
//     alert("vous etes minneur "  +  age + " ans.")
// }

// let a=14, b=24
// function calcul(a, b) {

//      let resultat = a - b;
//      //console.log(resultat);
//      return resultat;
// }
// function calculs(a, b) {

//      let resultat = a / b;
//      //console.log(resultat);
//      return resultat;
// }
// let resultatSom = calcul(a,b);
// let resultatdiv = calculs(a, b);

// console.log(resultatSom * resultatdiv);
// let a=10, b=15 ;
// function calcul(c, a=10, b=15) {

//      let resultat = c * (a+b);
//      //console.log(resultat);
//      return resultat;
// }
// console.log(calcul(5, 25))


// let age = prompt("entrer votre age");
// function ages() {
  
//   // age = parseInt(age)
//   age = Number(age)
//   // alert("votre age sera " + (age + 1)+" ans l'année prochaine")
//   if (age<18) {
//     alert("vous etes adulte et votre age est " + age + " ans.")
//   } else {
//     alert("vous etes mineur " + age + " ans.");
//   }
// }
// alert("votre age est " + ages())




// let a = prompt("entrer votr nombre");
// if (a % 2 == 0) {
//   alert("votre nombre est pair");
// } else {
//   alert("votre nombre est impair");
// } 


//fonction anoyme
// let anonyme = function() {
//   console.log("i am voldemore")
// }
// anonyme()

//(function(){console.log("tous les woubi seron tué")}) ();


// exo2 function
// let taille = prompt("quelle est votre taille en m?")
// let poids = prompt("quel est votre poids en KG ?")
// function calculIMC (taille, poids){
//       let resultat = poids / (taille**2)
//       resultat = parseInt(resultat)
//       return resultat;
    
// }
// let imc = calculIMC(taille, poids)
// alert("votre IMC est " + calculIMC(taille, poids))



//condition ternaire [ CONDITION] ? [TRUE si] : [FAULSE si]
// let x = 4
//  // x < 4 ? console.log("x est top petit") : console.log(" ce nombre est grand");
//   // la mm chose avec if
// if (x >12) {
//   console.log("ce nombre est grand")
// } else {
//   console.log("ce nombre est petit")
// }



// // la boucle WHILE
// let a = 4
// while ( a < 15) {
//           console.log("nombre : " + a);
//           a++;
// }

    // la bboucle DO WHILE
  //   let  nom
  // do {

  //    nom = prompt("ecrivez votre nom");

  // } while(nom == "" || nom == null)
  //   alert("donc tu es pd " + nom + " ?");

  //la boucle (FOR)

  // for (let a = 4 ; a < 15 ; a++ ) {
  //   console.log("nombre : " + a) 
  // }
  


  //Fonction recursive

  // function multi (a){
  //   if(a>0){
  //    console.log(a)
  //    multi(a-1)
  //   }
   
  // }
  // multi(5)


// function multi (a){
//   for( let i = a; i>0 ; i -= 1){
//     console.log(i/2);
    
//          if(i-1 <= 0){
//          console.log(i-2)
//          }
//      }


// }
// multi(15)

// function somme (a){
//     if(a == 1){
//       //console.log(a+1)
//       return 1;
//     }
//     return a + somme(a-1)
// }
// console.log(somme(8))



// function factorielleIterative(n) {
//   let resultat = 1;
//   for (let i = 2; i <= n; i++) {
//     resultat *= i;
//   }
//   return resultat;
// }

// console.log(factorielleIterative(4)); // Affiche 24



  //LES TABLEAU
      //tableau simple

         // let tableau = ["un", "bos", "bakan"]
          //console.log(tableau.join(' ,'))
          //for(const bac of tableau){
            //console.log(tableau.indexOf(bac))
          //}

      //tableau 2 Dimenssion

          //   let tableau=[
          //     ["bas", "bos", "soa"],
          //      ["un", "deux", "trois"]
          //  ]
             
          //    console.log(tableau.join(', '))


      //tableau Associatif
         
              //  let present = {  
              //       'nom'   : 'regis',
              //       'genre' : 'Homme',
              //       'bara'  : 'deputé'
              //  };
              //  function concatener (tableau){
              //   let chaine = '';
              //   for(const valeur in present) {
              //       chaine += (valeur + ' : ' + present[valeur] + '\n');
              //   } 
              //   console.log(chaine)
              //  }
              //  concatener(present)                                                            
              //  present['status'] = 'ingenieur des maras';  // permet d'ajouté une valeur dans notre tableau associatif
              //  console.log(present)
         

     let chien = {
             race : 'baoulé',
             poil : 'couleur rousse',
             crie : () =>console.log('bla bla bla la')
     }
         //console.log(chien.poil)
        chien.crie()


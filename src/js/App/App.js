import '../../index.html';
import '../../css/style.css';

//import {Destinataire} from '../Composants/Entites/Destinataire'
import {Utilisateur} from '../Composants/Entites/Utilisateur'
import {Colis} from '../Composants/Colis/Colis'



export class App{

    /*

    La classe App est la base de l'intéraction avec l'utilisateur. 
    Sur le site, nous allons ici définir les actions à entreprendres en fonction d'évenements que l'on va surveiller.
    App auras la connaissances de tous les objets qu'on peut manipuler et créera les "instances des class" (objet) en fonction des besoins. 
    
    Ici, l'application se charge de récolter les données par diverses methodes propre a chaque "instances de class" 
    et les utilise en fonction des besoins
        
    - Enregistrer une commande.
    - Envoyer un mail avec le détail de la commande
    
    */

    domUtilisateur
        domNomUtilisateur
        domPrenomUtilisateur
        domNumeroVoieUtilisateur
        domTypeVoieUtilisateur
        domNomVoieUtilisateur
        domCodePostalUtilisateur
        domVilleUtilisateur

    domRadio
    domColis
    domNumeroVoieColis
    domTypeVoieColis
    domNomVoieColis
    domCodePostalColis
    domVilleColis
    // domColisRestauration
    //     domNumeroVoieRestauration
    //     domTypeVoieRestauration
    //     domNomVoieRestauration
    //     domCodePostalRestauration
    //     domVilleRestauration

    // //domColisCarton

    // domColisClickNCollect
    //     domNumeroVoieClickNCollect
    //     domTypeVoieClickNCollect
    //     domNomVoieClickNCollect
    //     domCodePostalClickNCollect
    //     domVilleClickNCollect
        
    // domDestinataire
    //     domNomDestinataire
    //     domPrenomDestinataire
    //     domNumeroVoieDestinataire
    //     domTypeVoieUtilisateur
    //     domNomVoieDestinataire
    //     domCodePostalDestinataire
    //     domVilleDestinataire
    //     domTelephoneDestinataire

    domCreneau
    
    commandeBtn


    
    initHTML(){

        this.domNomUtilisateur = document.querySelector('#nom')
        this.domPrenomUtilisateur = document.querySelector('#prenom')
        this.domNumeroVoieUtilisateur = document.querySelector('#numeroVoie')
        this.domTypeVoieUtilisateur = document.querySelector('#typeVoie')
        this.domNomVoieUtilisateur = document.querySelector('#nomVoie')
        this.domCodePostalUtilisateur = document.querySelector('#codePostal')
        this.domVilleUtilisateur = document.querySelector('#ville')

        this.domNumeroVoieColis = document.querySelector('#numeroVoieColis')
        this.domTypeVoieColis = document.querySelector('#typeVoieColis')
        this.domNomVoieColis = document.querySelector('#nomVoieColis')
        this.domCodePostalColis = document.querySelector('#codePostalColis')
        this.domVilleColis = document.querySelector('#villeColis')  

        // this.domNumeroVoieRestauration = document.querySelector('#numeroVoieColis')
        // this.domTypeVoieRestauration = document.querySelector('#typeVoieColis')
        // this.domNomVoieRestauration = document.querySelector('#nomVoieColis')
        // this.domCodePostalRestauration = document.querySelector('#codePostalColis')
        // this.domVilleRestauration = document.querySelector('#villeColis')  

        // this.domNumeroVoieClickNCollect = document.querySelector('#numeroVoieColis')
        // this.domTypeVoieClickNCollect = document.querySelector('#typeVoieColis')
        // this.domNomVoieClickNCollect = document.querySelector('#nomVoieColis')
        // this.domCodePostalClickNCollect = document.querySelector('#codePostalColis')
        // this.domVilleClickNCollect = document.querySelector('#villeColis')
        

        // this.domNomDestinataire = document.querySelector('#nomDestinataire')
        // this.domPrenomDestinataire = document.querySelector('#prenomDestinaraire')
        // this.domNumeroVoieDestinataire = document.querySelector('#numeroVoieDestinataire')
        // this.domTypeVoieDestinataire = document.querySelector('#typeVoieDestinataire')
        // this.domNomVoieDestinataire = document.querySelector('#nomVoieDestinataire')
        // this.domCodePostalDestinataire = document.querySelector('#codePostalDestinataire')
        // this.domVilleDestinataire = document.querySelector('#villeDestinataire')
        // this.domTelephoneDestinataire = document.querySelector('#telephoneDestinataire')

        this.domCreneau = document.querySelector('#creneau')
        
        this.commandeBtn = document.querySelector('#commandeBtn')
        this.commandeBtn.addEventListener( 'click', this.passerUneCommande.bind(this))
        console.log('app')


    }

    passerUneCommande(){
        
       console.log( JSON.stringify(this.creeUtilisateurForm()), JSON.stringify(this.creeColisForm()))
    }

    creeColisForm(){
        
        return new Colis (JSON.stringify({

            numeroVoie : this.domNumeroVoieColis.value,

            typeVoie : this.domTypeVoieColis.value,

            nomVoie : this.domNomVoieColis.value,

            codePostal : this.domCodePostalColis.value,

            ville : this.domVilleColis.value,

            dateRetrait : this.domCreneau.value,
             
            
        }))  

    }

    // creeDestinataireForm(){
        
    //     return new Destinataire (JSON.stringify({

    //         numeroVoie : this.domNumeroVoieDestinataire.value,

    //         typeVoie : this.domTypeVoieDestinataire.value,

    //         nomVoie : this.domNomVoieDestinataire.value,

    //         codePostal : this.domCodePostalDestinataire.value,

    //         ville : this.domVilleDestinataire.value,

    //         //prenom : this.domPrenomDestinataire.value,

    //         nom : this.domNomDestinataire.value,

    //         telephone : this.domTelephoneDestinataire.value
            
    //     }))  

    // }

    creeUtilisateurForm(){
        
        return new Utilisateur (JSON.stringify({

            numeroVoie : this.domNumeroVoieUtilisateur.value,

            typeVoie : this.domTypeVoieUtilisateur.value,

            nomVoie : this.domNomVoieUtilisateur.value,

            codePostal : this.domCodePostalUtilisateur.value,

            ville : this.domVilleUtilisateur.value,

            prenom : this.domPrenomUtilisateur.value,

            nom : this.domNomUtilisateur.value,

            
        }))  

    }



}
const instance = new App();

export default instance;



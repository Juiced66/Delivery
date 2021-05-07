import {Composant} from '../Composant'

export class Utilisateur extends Composant{
    /*  
    
        La class Utilisateur me permet de renseigner les coordonnées de l'utilisateur du service.
        L'utilisation est "anonyme" (sans enregistrement) j'aurai besoin de :

            - nom
            - prenom 
            - Adresse facturation

        La prochaine utilisation sera "enregistré" . j'irai alors enregistrer les informations dans un profil utilisateur. Cela m'a l'air plus compliqué, je ferai une autre class plus tard pour réaliser cette tache.
        
        L'utilisateur sera créé pour une commande et enregistré avec sa facture. Je ne garderai pas d'autres informations.

    */
    
    nom 

    prenom 


    constructor(utilisateurJSON){

        super(utilisateurJSON)

        const JSONtoJs = JSON.parse(utilisateurJSON)
        this.nom = JSONtoJs.nom
        this.prenom = JSONtoJs.prenom

    }
    
    // utilisateurForm(){

    //     this.nom = document.querySelector(`#nom`).value;
    //     this.prenom = document.querySelector(`#prenom`).value;

    // }


    
    toJSON(){
        return{

                numeroVoie : this.numeroVoie,

                typeVoie : this.typeVoie,

                nomVoie : this.nomVoie,

                codePostal :this.codePostal,

                ville :this.ville,

                prenom : this.prenom,

                nom : this.nom
                
            }
    }
}

import {Composant} from "../Composant"

export class Colis extends Composant{
    
    dateRetrait;


    constructor(colisJSON){
        
        super(colisJSON)

        this.dateRetrait = document.querySelector(`#creneau`).value ; //il faudra verrouiller l'input ou trouver un autre moyen de selectionner un creneau pour eviter qu'un crenaux non disponnible soit selectionné.

          
    }

    toJSON(){
        return{

            numeroVoie : this.numeroVoie,

            typeVoie : this.typeVoie,

            nomVoie : this.nomVoie,

            codePostal :this.codePostal,

            ville :this.ville,

            dateRetrait : this.dateRetrait,
           
        }
            
    }


}
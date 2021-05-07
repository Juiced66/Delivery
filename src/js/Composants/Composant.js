export class Composant {

    numeroVoie = 0;
    typeVoie = '';
    nomVoie = '';
    codePostal = 0;
    ville = '';

    constructor(adresseJSON){
        const JSONtoJs = JSON.parse(adresseJSON)
        this.numeroVoie = JSONtoJs.numeroVoie;
        this.typeVoie = JSONtoJs.typeVoie;
        this.nomVoie = JSONtoJs.nomVoie;
        this.codePostal = JSONtoJs.codePostal;
        this.ville = JSONtoJs.ville;
    }

    adresseComplete(){
        return `${this.numeroVoie} ${this.typeVoie} ${this.nomVoie} ${this.codePostal} ${this.ville}`;
    }
    
    toJSON(){

        return{

                numeroVoie : this.numeroVoie,

                typeVoie : this.typeVoie,

                nomVoie : this.nomVoie,

                codePostal :this.codePostal,

                ville :this.ville,

                
            }
    }

}
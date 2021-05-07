import {Colis} from './Colis'

export class ColisClickNCollect extends Colis {

    nomPartenaire
    adressePartenaire 
    codeRecuperation

    constructor(codeRecuperation, partenaireJSON){            
        
        super(partenaireJSON)
        const JSONtoJs = JSON.parse(partenaireJSON)
        this.nomPartenaire = JSONtoJs.nomPartenaire
        this.adressePartenaire = JSONtoJs.adresse
        this.codeRecuperation = codeRecuperation

    }


    toJSON(){
        return{
            numero : this.numero,

            typeVoie : this.typeVoie,

            nomRue : this.nomRue,

            codePostal :this.codePostal,

            ville :this.ville,

            dateRetrait : this.dateRetrait,

            nomPartenaire : this.nomPartenaire,

            adressePartenaire : this.adressePartenaire,

            codeRecuperation : this.codeRecuperation        
        }
            
    }
}

/* 
partenaireJSON = {

            "numero" : this.numero,

            "typeVoie" : this.typeVoie,

            "nomRue" : this.nomRue,

            "codePostal" :this.codePostal,

            "ville" :this.ville,

            "dateRetrait" : this.dateRetrait,

            "nomPartenaire" : this.nomPartenaire,

            "adressePartenaire" : this.adressePartenaire,

}

*/
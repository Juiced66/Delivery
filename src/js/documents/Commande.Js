// import {Utilisateur} from './Utilisateur'
// import {Destinataire} from './Destinataire'
// import {Colis} from '../Composants/Colis/Colis'

// export class Commande {
//     /*

//     La classe Commande est la synthèse de toutes les autres class elle nous permet de regrouper les informations pertinentes sur quoi, qui, quand et ou. 
//     On fabrique une commande a partir des autres éléments .

//     */

//     id = 0;

//     colis = null;

//     utilisateur = null;

//     destinataire = null;

//     livre = false;

//     facture = false;

//     constructor(CommandeJSON){
//         super(CommandeJSON)
//         const JSONtoJs = JSON.parse(CommandeJSON)
//         this.id = JSONtoJs.idCommande
//         this.colis = JSONtoJs.Colis
//         this.utilisateur = JSONtoJs.Utilisateur
//         this.destinataire = JSONtoJs.Destinataire
//     }


//     sauvegardeCommande(){
//         //TODO : Sauvegarde de la commande en base de donnée (JSON)
//     }
    
//     commandeLivree(){
//         this.livre = true
//     }

//     facturePayee(){
//         this.facture = true
//     }



//     toJSON () { //On récupère toutes les informations disponnibles pour sauvegarder au format JSON
        
//         return{
//         utilisateur : {

//             nom : this.client.nom,

//             prenom : this.client.prenom,

//             adresses: {

//                 numero : this.utilisateur.adresses.numero,

//                 typeVoie : this.utilisateur.adresses.typeVoie,

//                 nomRue : this.utilisateur.adresses.nomRue,

//                 codePostal : this.utilisateur.adresses.codePostal,

//                 ville : this.utilisateur.adresses.ville

//                 },
    
//             },
//         colis : {

//                 typeColis : {

//                     restauration : {

//                         partenaire : this.colis.typeColis.restauration.partenaire,

//                         codeRecuperation : this.colis.restauration.codeRecuperation

//                     },

//                     // colisCarton : {

//                     //     dimensions : {

//                     //         volume : this.colis.typeColis.colisCarton.dimensions.volume,

//                     //         hauteur : this.colis.typeColis.colisCarton.dimensions.hauteur,

//                     //         largeur : this.colis.typeColis.colisCarton.dimensions.largeur,

//                     //         profondeur : this.colis.typeColis.colisCarton.dimensions.profondeur,

//                     //     },
//                     //     fragile : this.colis.typeColis.colisCarton.frangile,

//                     //     poids : this.colis.typeColis.colisCarton.poids    
//                     // },

//                     drive : {

//                         partenaire : this.colis.typeColis.drive.partenaire,

//                         codeRecuperation : this.colis.typeColis.drive.codeRecuperation
//                     }
//                 },
//                 retraitColis: {

//                     numero : this.client.adresses.retraitColis.numero,

//                     typeVoie : this.client.adresses.retraitColis.typeVoie ,

//                     nomRue : this.client.adresses.retraitColis.nomRue,

//                     codePostal : this.client.adresses.retraitColis.codePostal,

//                     ville : this.client.adresses.retraitColis.ville,

//                     dateRetrait : this.dateRetrait

//                 },

//                 livre : this.colis.livre,

//                 facture : this.colis.facture
//         },

//         destinataire : {

//             nom : this.destinataire.nom ,

//             prenom : this.destinataire.prenom,

//             adresse : {

//                 numero : this.destinataire.adresse.numero,

//                 typeVoie : this.destinataire.adresse.typeVoie,

//                 nomRue : this.destinataire.adresse.nomRue,

//                 codePostal :this.destinataire.adresse.codePostal ,

//                 ville :this.destinataire.adresse.ville ,
    
//             },
            
//             infosSupplementaire : this.destinataire.infosSupplementaire,

//             telephone : this.destinataire.telephone

//         }

//         }

//     }

// }

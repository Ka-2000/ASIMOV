const mysql2 = require('mysql2')
const iniparser = require('iniparser')
let configDB = iniparser.parseSync('./DB.ini')

let mysqlconnexion = mysql2.createConnection({

    host: configDB['dev']['host'],
    user: configDB['dev']['user'],
    password: configDB['dev']['password'],
    database: configDB['dev']['database']

});

mysqlconnexion.connect((err) => {

    if (err) console.log('BDD connexion échouée \n Erreur: ' + JSON.stringify(err))

})

const Classes = {

    async afficherToutesClasses(){

        let requeteSQL = "SELECT * FROM classe"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })

    },

    async afficherMesClasses(req) {

        let id = req.cookies.id
        let requeteSQL = "SELECT classe_Nom FROM classe, professeur, affectation WHERE classe_Id = affectation_IdClasse AND professeur_Id = affectation_IdProfesseur AND professeur_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async afficherUneClasse(req) {

        let id = req.params.id
        let requeteSQL = "SELECT * FROM classe WHERE classe_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async ajouterClasse(req){

        let nom = req.body.nom
        let professeur = req.body.professeur

        let requeteSQL = "INSERT INTO classe (classe_Nom, classe_IdProfesseurPrincipal) VALUES(?,?)"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, professeur], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async supprimerClasse(req){

        let id = req.params.id

        let requeteSQL = "DELETE FROM classe WHERE classe_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierClasse(req){

        let id = req.params.id
        let nom = req.body.nom
        let professeur = req.body.professeur
        
        let requeteSQL = "UPDATE classe SET classe_Nom = ?, classe_IdProfesseurPrincipal = ? WHERE classe_Id = ?"
        
        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, professeur, id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }


}

module.exports = {

    Classes
}
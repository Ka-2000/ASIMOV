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

const Matieres = {

    async afficherMatieres(){

        let requeteSQL = "SELECT * FROM matiere"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })

    },

    async afficherUneMatiere(req) {

        let id = req.params.id
        let requeteSQL = "SELECT * FROM matiere WHERE matiere_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async ajouterMatiere(req){

        let nom = req.body.nom
        let professeur = req.body.professeur
        let requeteSQL = "INSERT INTO matiere (matiere_Nom, matiere_IdProfesseur) VALUES(?,?)"

        return new Promise((resolve, reject)=>{

            if(professeur){

                mysqlconnexion.query(requeteSQL, [nom, professeur], (err, lignes, champs) => {

                    if(err){

                        return reject(err)

                    }

                    return resolve(lignes)

                })

            }else{

                mysqlconnexion.query(requeteSQL, [nom, null], (err, lignes, champs) => {

                    if(err){

                        return reject(err)

                    }

                    return resolve(lignes)

                })
            }
        })
    },

    async supprimerMatiere(req){

        let id = req.params.id
        let requeteSQL = "DELETE FROM matiere WHERE matiere_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierMatiere(req){

        let id = req.params.id
        let nom = req.body.nom
        let professeur = req.body.professeur
    
        let requeteSQL = "UPDATE matiere SET matiere_Nom = ?, matiere_IdProfesseur = ? WHERE matiere_Id = ?"

        return new Promise((resolve, reject)=>{

            if(professeur){

                mysqlconnexion.query(requeteSQL, [nom, professeur, id], (err, lignes, champs) => {

                    if(err){

                        return reject(err)

                    }

                    return resolve(lignes)

                })

            }else{

                mysqlconnexion.query(requeteSQL, [nom, null, id], (err, lignes, champs) => {

                    if(err){

                        return reject(err)

                    }

                    return resolve(lignes)

                })
            }
        })
    }


}

module.exports = {

    Matieres
}
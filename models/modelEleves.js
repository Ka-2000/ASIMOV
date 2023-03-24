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

const Eleves = {

    async afficherEleves(){

        let requeteSQL = "SELECT * FROM Eleve"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })

    },

    async afficherUnEleve(req) {

        let id = req.params.id
        let requeteSQL = "SELECT * FROM eleve WHERE eleve_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async afficherElevesClasse(req) {

        let id = req.params.id
        let requeteSQL = "SELECT * FROM eleve WHERE eleve_IdClasse = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async ajouterEleve(req){

        let nom = req.body.nom
        let prenom = req.body.prenom
        let age = req.body.age
        let classe = req.body.classe
        let requeteSQL = "INSERT INTO eleve (eleve_Nom, eleve_Prenom, eleve_Age, eleve_IdClasse) VALUES(?,?,?,?)"

        return new Promise((resolve, reject)=>{

            if(professeur){

                mysqlconnexion.query(requeteSQL, [nom, prenom, age, classe], (err, lignes, champs) => {

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

    async supprimerEleve(req){

        let id = req.params.id
        let requeteSQL = "DELETE FROM eleve WHERE eleve_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierEleve(req){

        let id = req.params.id
        let nom = req.body.nom
        let prenom = req.body.prenom
        let age = req.body.age
        let classe = req.body.classe
    
        let requeteSQL = "UPDATE eleve SET eleve_Nom = ?, eleve_Prenom = ?, eleve_Age = ?, eleve_IdClasse = ? WHERE eleve_Id = ?"

        return new Promise((resolve, reject)=>{

            if(professeur){

                mysqlconnexion.query(requeteSQL, [nom, prenom, age, classe, id], (err, lignes, champs) => {

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

    Eleves
}
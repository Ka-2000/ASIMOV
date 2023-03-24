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

const Professeurs = {

    async afficherProfesseurs() {

        let requeteSQL = "SELECT * FROM professeur"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async afficherProfesseurs2() {

        let requeteSQL = "SELECT * FROM professeur LEFT JOIN matiere ON professeur_Id = matiere_IdProfesseur"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async afficherUnProfesseur(req){

        let id = req.params.id
        let requeteSQL = "SELECT * FROM professeur WHERE professeur_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async ajouterProfesseur(req){

        let nom = req.body.nom
        let prenom = req.body.prenom
        let mdp = req.body.mdp

        let requeteSQL = "INSERT INTO professeur (professeur_Nom, professeur_Prenom, professeur_Mdp, professeur_Role) VALUES(?,?, password(?), 'Professeur')"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, prenom, mdp], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async supprimerProfesseur(req){ 
        
        let id = req.params.id
        let requeteSQL = "DELETE FROM professeur WHERE professeur_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierProfesseur(req){

        let id = req.params.id
        let nom = req.body.nom
        let prenom = req.body.prenom
        
        let requeteSQL = "UPDATE professeur SET professeur_Nom = ?, professeur_Prenom = ? WHERE professeur_Id = ?"
        
        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, prenom, id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}

module.exports = {

    Professeurs
}
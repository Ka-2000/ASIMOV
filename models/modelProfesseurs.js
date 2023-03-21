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

    async afficherProfesseurs(req) {

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

    async modifierProfesseur(req){

        let id = req.params.id
        let nom = req.body.nom
        let prenom = req.body.prenom
        let matiere = req.body.matiere
        
        let requeteSQL = "UPDATE professeur SET professeur_Nom = ?, professeur_Prenom = ?, professeur_Matiere = ? WHERE professeur_Id = ?"
        
        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [nom, prenom, matiere, id], (err, lignes, champs) => {

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
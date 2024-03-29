const mysql2 = require('mysql2')
const iniparser = require('iniparser')
let configDB = iniparser.parseSync('./DB.ini')

let mysqlconnexion = mysql2.createConnection({

    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']

});

mysqlconnexion.connect((err) => {

    if (err) console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))

})

const Accueil = {

    //Fonction récupérant le matricule et le mot de passe dans la page de connexion et vérifiant la correspondance dans la base de données
    async connexion(req){

        let matricule = req.body.matricule
        let motdepasse = req.body.mdp
        let requeteSQL = "SELECT * FROM professeur WHERE professeur_Nom = ? AND professeur_Mdp = password(?)"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [matricule, motdepasse],(err, lignes) => {

                if(err){

                    return reject(err)

                }
                
                return resolve(lignes)

            })
        })
    },

    async connexion2(req){

        let matricule = req.body.matricule
        let motdepasse = req.body.mdp
        let requeteSQL = "SELECT * FROM eleve WHERE eleve_Nom = ? AND eleve_Mdp = password(?)"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [matricule, motdepasse],(err, lignes) => {

                if(err){

                    return reject(err)

                }
                
                return resolve(lignes)

            })
        })
    }
}

module.exports = {
    
    Accueil
}
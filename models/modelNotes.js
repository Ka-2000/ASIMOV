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

const Notes = {

    async afficherNotesEleve(req, res){

        let id = req.params.id
        let requeteSQL = "SELECT Matiere.matiere_Nom, Note.note_Id, Note.note_Valeur FROM Eleve INNER JOIN Note ON Eleve.eleve_Id = Note.note_IdEleve INNER JOIN Matiere ON Note.note_IdMatiere = Matiere.matiere_Id WHERE Eleve.eleve_Id = ? "
        res.cookie('idEleve', id)

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async afficherUneNote(req) {

        let id = req.params.id
        let requeteSQL = "SELECT * FROM note WHERE note_Id = ?"

        return new Promise((resolve, reject) => {

            mysqlconnexion.query(requeteSQL, [id], (error, elements) => {

                if (error) {

                    return reject(error)

                }

                return resolve(elements)

            })
        })
    },

    async ajouterNote(req){

        let eleve = req.body.eleve
        let matiere = req.body.matiere
        let valeur = req.body.valeur
        let requeteSQL = "INSERT INTO note (note_IdEleve, note_IdMatiere, note_Valeur) VALUES(?,?,?)"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [eleve, matiere, valeur], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async supprimerNote(req){

        let id = req.params.id
        let requeteSQL = "DELETE FROM note WHERE note_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    },

    async modifierNote(req){

        let id = req.params.id
        let valeur = req.body.valeur

        let requeteSQL = "UPDATE note SET note_Valeur = ? WHERE note_Id = ?"

        return new Promise((resolve, reject)=>{

            mysqlconnexion.query(requeteSQL, [valeur, id], (err, lignes, champs) => {

                if(err){

                    return reject(err)

                }

                return resolve(lignes)

            })
        })
    }
}

module.exports = {

    Notes
}
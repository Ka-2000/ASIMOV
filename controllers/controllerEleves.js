const modelEleves = require('../models/modelEleves');
const modelClasses = require('../models/modelClasses');
const cookieParser = require('cookie-parser')

const controllerEleve = {
	
	//Fonction pour le principal : permet d'afficher les élèves de l'établissement
	async affichageEleves(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try{

				const data1 = await modelEleves.Eleves.afficherEleves()
				const data2 = await modelClasses.Classes.afficherToutesClasses()

				if(data1){
					
					res.render("eleves", {cookie:req.cookies.role, dataEleve:data1, dataClasse:data2})
				
				}else{

					res.render("probleme", {cookie:req.cookies.role})
				}

			}catch(error){

				console.log(error)
			}
		
		}else{

			try{

				res.render("refus")

            } catch (error) {

                console.log(error)
            }
		}
	},

	//Fonction pour le principal ou les professeurs : permet d'afficher les élèves d'une classe de l'établissement
    async afficherElevesClasse(req, res){

		//Sécurité au niveau du serveur : si token principal ou professeur renvoit les données, sinon renvoit sur une page de refus
        if(req.cookies.role == "Principal" || req.cookies.role == "Professeur"){

			try{

				const data1 = await modelEleves.Eleves.afficherElevesClasse(req, res)

				if(data1){
					
					res.render("afficherUneClasse", {cookie:req.cookies.role, dataClasse:data1, idClasse:req.cookies.idClasse})
				
				}else{

					res.render("probleme", {cookie:req.cookies.role})
				}

			} catch (error) {

				console.log(error)
			}
		
		}else{

			try{

				res.render("refus")

            } catch (error) {

                console.log(error)
            }
		}
    },

	//Fonction pour le principal : permet d'afficher un élève en particulier
    async affichageUnEleve(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try {

				const data = await modelEleves.Eleves.afficherUnEleve(req)
				const data2 = await modelClasses.Classes.afficherToutesClasses()
	
				if(data){
	
					res.render("modifierEleves", {dataEleve: data, dataClasse:data2})
	
				}else{
	
					res.render("probleme", {cookie:req.cookies.role})
				}
	
			} catch (error) {
	
				console.log(error)
			}
		
		}else{

			try{

				res.render("refus")

            } catch (error) {

                console.log(error)
            }
		}
	},

	//Fonction pour le principal : permet d'ajouter un élève
	async ajouterEleve(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try {

				const data = await modelEleves.Eleves.ajouterEleve(req)
	
				if(data){
	
					res.redirect("/eleves/afficherUneClasse/" + req.cookies.idClasse)
	
				}else{
	
					res.render("probleme", {cookie:req.cookies.role})
				}
	
			} catch (error) {
	
				console.log(error)
			}
		
		}else{

			try{

				res.render("refus")

            } catch (error) {

                console.log(error)
            }
		}
	},

	//Fonction pour le principal : permet de supprimer un élève
	async supprimerEleve(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try {

				const data = await modelEleves.Eleves.supprimerEleve(req)
	
				if(data){
	
					res.redirect("/eleves");
	
				}else{
	
					res.render("probleme", {cookie:req.cookies.role})
				}
	
			} catch (error) {
	
				console.log(error)
			}
		
		}else{

			try{

				res.render("refus")

            } catch (error) {

                console.log(error)
            }
		}
	},

	//Fonction pour le principal : permet de modifier un élève
    async modifierEleve(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try {

				const data = await modelEleves.Eleves.modifierEleve(req)
	
				if(data){
	
					res.redirect("/eleves");
	
				}else{
	
					res.render("probleme", {cookie:req.cookies.role})
				}
	
			} catch (error) {
	
				console.log(error)
			}
		
		}else{

			try{

				res.render("refus")

            } catch (error) {

                console.log(error)
            }
		}
	}
}

module.exports = controllerEleve

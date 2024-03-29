const modelProfesseur = require('../models/modelProfesseurs');
const modelMatiere = require('../models/modelMatieres');
const cookieParser = require('cookie-parser')

const controllerProfesseur = {
	
	//Fonction pour le principal : permet d'afficher les professeurs de l'établissement
	async affichageProfesseurs(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try{

				const data1 = await modelProfesseur.Professeurs.afficherProfesseurs2()

				if(data1){
					
					res.render("professeurs", {cookie:req.cookies.role, dataTotale:data1})
				
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

	//Fonction pour le principal : permet d'afficher un professeur en particulier
    async affichageUnProfesseur(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try{

				const data1 = await modelProfesseur.Professeurs.afficherUnProfesseur(req)
				const data2 = await modelMatiere.Matieres.afficherMatieres()

				if(data1){
					
					res.render("modifierProfesseurs", {dataProfesseur: data1, dataMatiere:data2})
				
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

	//Fonction pour le principal : permet d'ajouter un professeur à l'établissement
	async ajouterProfesseur(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try{

				const data = await modelProfesseur.Professeurs.ajouterProfesseur(req)

				if(data){
					
					res.redirect("/professeurs");
				
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

	//Fonction pour le principal : permet de supprimer un professeur de l'établissement
	async supprimerProfesseur(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try{

				const data = await modelProfesseur.Professeurs.supprimerProfesseur(req)

				if(data){
					
					res.redirect("/professeurs");
				
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

	//Fonction pour le principal : permet de modifier un professeur de l'établissement
    async modifierProfesseur(req, res){

		//Sécurité au niveau du serveur : si token principal renvoit les données, sinon renvoit sur une page de refus
		if(req.cookies.role == "Principal"){

			try{

				const data = await modelProfesseur.Professeurs.modifierProfesseur(req)

				if(data){
					
					res.redirect("/professeurs");
				
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

module.exports = controllerProfesseur

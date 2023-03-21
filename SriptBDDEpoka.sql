CREATE DATABASE Asimov;

USE Asimov; 

CREATE TABLE Professeur(

	professeur_Id INTEGER AUTO_INCREMENT NOT NULL,
	professeur_Nom VARCHAR(40) NOT NULL,
	professeur_Prenom VARCHAR(40) NOT NULL,
	professeur_Mdp VARCHAR(50) NOT NULL,
	professeur_Role VARCHAR(40) NOT NULL,
	professeur_Matiere VARCHAR(40),
	
	PRIMARY KEY(professeur_Id))engine=InnoDB;

CREATE TABLE Eleve(

	eleve_Id INTEGER AUTO_INCREMENT NOT NULL,
	eleve_Nom VARCHAR(40) NOT NULL,
	eleve_Prenom VARCHAR(40) NOT NULL,
	eleve_Age VARCHAR(3) NOT NULL,
	eleve_IdClasse INTEGER NOT NULL,

	PRIMARY KEY(eleve_Id))engine=InnoDB;

CREATE TABLE Classe(

	classe_Id INTEGER AUTO_INCREMENT NOT NULL,
	classe_Nom VARCHAR(50) NOT NULL,
	
	PRIMARY KEY(classe_Id))engine=InnoDB;

CREATE TABLE Note(

	note_Id INTEGER AUTO_INCREMENT NOT NULL,
	note_IdEleve INTEGER NOT NULL,
	note_IdMatiere INTEGER NOT NULL,
	note_Valeur VARCHAR(10) NOT NULL,
	
	PRIMARY KEY(note_Id))engine=InnoDB;

CREATE TABLE Matiere(

	matiere_Id INTEGER AUTO_INCREMENT NOT NULL,
	matiere_Nom VARCHAR(40) NOT NULL,
	matiere_IdProfesseur INTEGER NOT NULL,

	PRIMARY KEY(matiere_Id))engine=InnoDB;

CREATE TABLE Affectation(

	affectation_IdProfesseur INTEGER NOT NULL,
	affectation_IdClasse INTEGER NOT NULL,

	PRIMARY KEY(affectation_IdProfesseur, affectation_IdClasse))engine=InnoDB;


ALTER TABLE Affectation

ADD CONSTRAINT FK_AffectationProfesseur
FOREIGN KEY(affectation_IdProfesseur) REFERENCES Professeur(professeur_Id),

ADD CONSTRAINT FK_AffectationClasse
FOREIGN KEY(affectation_IdClasse) REFERENCES Classe(classe_Id);

ALTER TABLE Note

ADD CONSTRAINT FK_NoteEleve 
FOREIGN KEY(note_IdEleve) REFERENCES Eleve(eleve_Id),

ADD CONSTRAINT FK_NoteMatiere 
FOREIGN KEY(note_IdMatiere) REFERENCES Matiere(matiere_Id);

ALTER TABLE Eleve 

ADD CONSTRAINT FK_ClasseEleve
FOREIGN KEY(eleve_IdClasse) REFERENCES Classe(classe_Id);

ALTER TABLE Matiere

ADD CONSTRAINT FK_MatiereProfesseur
FOREIGN KEY(matiere_IdProfesseur) REFERENCES Professeur(professeur_Id);











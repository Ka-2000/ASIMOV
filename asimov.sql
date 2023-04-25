-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 25 avr. 2023 à 12:54
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `asimov`
--

-- --------------------------------------------------------

--
-- Structure de la table `affectation`
--

DROP TABLE IF EXISTS `affectation`;
CREATE TABLE IF NOT EXISTS `affectation` (
  `affectation_IdProfesseur` int(11) NOT NULL,
  `affectation_IdClasse` int(11) NOT NULL,
  PRIMARY KEY (`affectation_IdProfesseur`,`affectation_IdClasse`),
  KEY `FK_AffectationClasse` (`affectation_IdClasse`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `affectation`
--

INSERT INTO `affectation` (`affectation_IdProfesseur`, `affectation_IdClasse`) VALUES
(1, 1),
(1, 2),
(4, 3),
(4, 4);

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

DROP TABLE IF EXISTS `classe`;
CREATE TABLE IF NOT EXISTS `classe` (
  `classe_Id` int(11) NOT NULL AUTO_INCREMENT,
  `classe_IdProfesseurPrincipal` int(11) NOT NULL,
  `classe_Nom` varchar(50) NOT NULL,
  PRIMARY KEY (`classe_Id`),
  KEY `FK_ClasseProfesseurPrincipal` (`classe_IdProfesseurPrincipal`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `classe`
--

INSERT INTO `classe` (`classe_Id`, `classe_IdProfesseurPrincipal`, `classe_Nom`) VALUES
(1, 6, '6ème'),
(2, 1, '5ème'),
(3, 4, '4ème'),
(4, 6, '3ème'),
(5, 5, 'Première'),
(6, 7, 'Seconde'),
(7, 10, 'Terminale');

-- --------------------------------------------------------

--
-- Structure de la table `eleve`
--

DROP TABLE IF EXISTS `eleve`;
CREATE TABLE IF NOT EXISTS `eleve` (
  `eleve_Id` int(11) NOT NULL AUTO_INCREMENT,
  `eleve_Nom` varchar(40) NOT NULL,
  `eleve_Prenom` varchar(40) NOT NULL,
  `eleve_Age` varchar(3) NOT NULL,
  `eleve_IdClasse` int(11) NOT NULL,
  `eleve_Mdp` varchar(50) NOT NULL,
  PRIMARY KEY (`eleve_Id`),
  KEY `FK_ClasseEleve` (`eleve_IdClasse`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `eleve`
--

INSERT INTO `eleve` (`eleve_Id`, `eleve_Nom`, `eleve_Prenom`, `eleve_Age`, `eleve_IdClasse`, `eleve_Mdp`) VALUES
(1, 'Dupont', 'Jean', '17', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(2, 'Martin', 'Lucie', '16', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(3, 'Dubois', 'Pierre', '18', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(4, 'Lefebvre', 'Marie', '15', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(5, 'Leroy', 'Sophie', '17', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(6, 'Roux', 'Julien', '16', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(7, 'Bernard', 'Camille', '18', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(8, 'Petit', 'Antoine', '15', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(9, 'Moreau', 'Céline', '17', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(10, 'Fournier', 'Nicolas', '16', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(11, 'Girard', 'Manon', '18', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(13, 'Mercier', 'Emma', '17', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(14, 'Blanc', 'Alexandre', '16', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(15, 'Rousseau', 'Aurélie', '18', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(16, 'Hubert', 'Thomas', '15', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(17, 'Muller', 'Chloé', '17', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(18, 'Henry', 'Lucas', '16', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(19, 'Fontaine', 'Alice', '18', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(20, 'Lemaire', 'Hugo', '15', 1, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(21, 'Morel', 'Lucie', '16', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(22, 'Lecomte', 'Martin', '15', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(23, 'Perrin', 'Alexandre', '18', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(24, 'Guillot', 'Emma', '17', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(25, 'Caron', 'Thomas', '16', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(26, 'Marchand', 'Julie', '15', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(27, 'Dupuis', 'Hugo', '18', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(28, 'Gillet', 'Léa', '17', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(29, 'Picard', 'Nicolas', '16', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(30, 'Roger', 'Anaïs', '15', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(31, 'Dumas', 'Simon', '18', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(32, 'Brun', 'Elise', '17', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(33, 'Barbier', 'Paul', '16', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(34, 'Martinez', 'Sara', '15', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(35, 'Leclercq', 'Antoine', '18', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(36, 'Lacroix', 'Clara', '17', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(37, 'Le Goff', 'Baptiste', '16', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(38, 'Vincent', 'Laura', '15', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(39, 'Bouchard', 'Robin', '18', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(40, 'Renaud', 'Sophie', '17', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(41, 'Dufour', 'Luc', '16', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(42, 'Gauthier', 'Marine', '15', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(43, 'Henry', 'Théo', '18', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(44, 'Baron', 'Mathilde', '17', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(45, 'Noël', 'Victor', '16', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(46, 'Colin', 'Zoé', '15', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(47, 'Renard', 'Jules', '18', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(48, 'Gaillard', 'Emma', '17', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(49, 'Remy', 'Nathan', '16', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(50, 'Julien', 'Lola', '15', 2, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(51, 'Kim', 'Hye-Jin', '16', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(52, 'Kowalski', 'Marek', '15', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(53, 'Gonzalez', 'Maria', '18', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(54, 'Ivanov', 'Dmitri', '17', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(55, 'Singh', 'Raj', '16', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(56, 'Santos', 'Ana', '15', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(57, 'Nguyen', 'Trinh', '18', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(58, 'Garcia', 'Luis', '17', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(59, 'Müller', 'Jürgen', '16', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(60, 'Li', 'Mei-Ling', '15', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(61, 'Yamamoto', 'Takumi', '18', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(62, 'Fernandez', 'Carmen', '17', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(63, 'Popov', 'Nikolai', '16', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(64, 'Mazur', 'Karolina', '15', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(65, 'Sánchez', 'Juan', '18', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(66, 'Huang', 'Xiaoming', '17', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(67, 'Bekker', 'Olga', '16', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(68, 'Mehmet', 'Mert', '15', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(69, 'Szymanski', 'Krzysztof', '18', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(70, 'Moussaoui', 'Nadia', '17', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(71, 'Lee', 'Sang-Hyun', '16', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(72, 'Chen', 'Xin', '15', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(74, 'Ramos', 'Ricardo', '17', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2'),
(75, 'Saito', 'Yuka', '16', 3, '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2');

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

DROP TABLE IF EXISTS `matiere`;
CREATE TABLE IF NOT EXISTS `matiere` (
  `matiere_Id` int(11) NOT NULL AUTO_INCREMENT,
  `matiere_Nom` varchar(40) NOT NULL,
  `matiere_IdProfesseur` int(11) DEFAULT NULL,
  PRIMARY KEY (`matiere_Id`),
  KEY `FK_MatiereProfesseur` (`matiere_IdProfesseur`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `matiere`
--

INSERT INTO `matiere` (`matiere_Id`, `matiere_Nom`, `matiere_IdProfesseur`) VALUES
(1, 'Français', 8),
(2, 'Mathématiques', 5),
(3, 'Anglais', 6),
(4, 'Développement Node', 1),
(5, 'Développement Mobile', 7),
(6, 'Réseau', 4),
(7, 'Systèmes', 2),
(8, 'EPS', 9),
(9, 'Sciences et vie de la terre', 10);

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

DROP TABLE IF EXISTS `note`;
CREATE TABLE IF NOT EXISTS `note` (
  `note_Id` int(11) NOT NULL AUTO_INCREMENT,
  `note_IdEleve` int(11) NOT NULL,
  `note_IdMatiere` int(11) NOT NULL,
  `note_Valeur` varchar(10) NOT NULL,
  PRIMARY KEY (`note_Id`),
  KEY `FK_NoteEleve` (`note_IdEleve`),
  KEY `FK_NoteMatiere` (`note_IdMatiere`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `note`
--

INSERT INTO `note` (`note_Id`, `note_IdEleve`, `note_IdMatiere`, `note_Valeur`) VALUES
(7, 2, 1, '17'),
(8, 2, 2, '19'),
(13, 3, 1, '14'),
(14, 3, 2, '17'),
(15, 3, 3, '13'),
(16, 3, 4, '11'),
(17, 3, 5, '12'),
(18, 3, 6, '15'),
(19, 4, 1, '16'),
(20, 4, 2, '18'),
(21, 4, 3, '10'),
(22, 4, 4, '12'),
(23, 4, 5, '11'),
(24, 4, 6, '18'),
(25, 5, 1, '18'),
(26, 5, 2, '20'),
(27, 5, 3, '11'),
(28, 5, 4, '14'),
(29, 5, 5, '13'),
(30, 5, 6, '17'),
(31, 6, 1, '13'),
(32, 6, 2, '15'),
(33, 6, 3, '12'),
(34, 6, 4, '10'),
(35, 6, 5, '12'),
(36, 6, 6, '16'),
(37, 7, 1, '16'),
(38, 7, 2, '18'),
(39, 7, 3, '13'),
(40, 7, 4, '10'),
(41, 7, 5, '14'),
(42, 7, 6, '18'),
(43, 8, 1, '17'),
(44, 8, 2, '19'),
(45, 8, 3, '14'),
(46, 8, 4, '12'),
(47, 8, 5, '15'),
(48, 8, 6, '19'),
(49, 9, 1, '14'),
(50, 9, 2, '17'),
(51, 9, 3, '12'),
(52, 9, 4, '9'),
(53, 9, 5, '11'),
(54, 9, 6, '14'),
(55, 10, 1, '15'),
(56, 10, 2, '18'),
(57, 10, 3, '13'),
(58, 10, 4, '11'),
(59, 10, 5, '13'),
(60, 10, 6, '17'),
(61, 33, 1, '18'),
(63, 2, 1, '18'),
(64, 2, 3, '20'),
(65, 2, 6, '18'),
(66, 2, 8, '9'),
(68, 2, 9, '18'),
(69, 2, 6, '20'),
(70, 2, 2, '20'),
(72, 2, 3, '5'),
(73, 2, 7, '18');

-- --------------------------------------------------------

--
-- Structure de la table `professeur`
--

DROP TABLE IF EXISTS `professeur`;
CREATE TABLE IF NOT EXISTS `professeur` (
  `professeur_Id` int(11) NOT NULL AUTO_INCREMENT,
  `professeur_Nom` varchar(40) NOT NULL,
  `professeur_Prenom` varchar(40) NOT NULL,
  `professeur_Mdp` varchar(50) NOT NULL,
  `professeur_Role` varchar(40) NOT NULL,
  PRIMARY KEY (`professeur_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `professeur`
--

INSERT INTO `professeur` (`professeur_Id`, `professeur_Nom`, `professeur_Prenom`, `professeur_Mdp`, `professeur_Role`) VALUES
(1, 'Fiorebianco', 'David', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur'),
(2, 'Hodort', 'Pascal', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur'),
(3, 'Brandon', 'Carole', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Principal'),
(4, 'Rosnel', 'Pierre', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur'),
(5, 'Jemlé', 'Rose', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur'),
(6, 'Belvedere', 'Anaïs', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur'),
(7, 'Lornillon', 'Hervé', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur'),
(8, 'De l\'Estache', 'Olivier', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur'),
(9, 'Porcu', 'Lorenzo', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur'),
(10, 'Gondre', 'Macéo', '*63D85DCA15EAFFC58C908FD2FAE50CCBC60C4EA2', 'Professeur');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `affectation`
--
ALTER TABLE `affectation`
  ADD CONSTRAINT `FK_AffectationClasse` FOREIGN KEY (`affectation_IdClasse`) REFERENCES `classe` (`classe_Id`),
  ADD CONSTRAINT `FK_AffectationProfesseur` FOREIGN KEY (`affectation_IdProfesseur`) REFERENCES `professeur` (`professeur_Id`);

--
-- Contraintes pour la table `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `FK_ClasseProfesseurPrincipal` FOREIGN KEY (`classe_IdProfesseurPrincipal`) REFERENCES `professeur` (`professeur_Id`);

--
-- Contraintes pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD CONSTRAINT `FK_ClasseEleve` FOREIGN KEY (`eleve_IdClasse`) REFERENCES `classe` (`classe_Id`);

--
-- Contraintes pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `FK_MatiereProfesseur` FOREIGN KEY (`matiere_IdProfesseur`) REFERENCES `professeur` (`professeur_Id`);

--
-- Contraintes pour la table `note`
--
ALTER TABLE `note`
  ADD CONSTRAINT `FK_NoteEleve` FOREIGN KEY (`note_IdEleve`) REFERENCES `eleve` (`eleve_Id`),
  ADD CONSTRAINT `FK_NoteMatiere` FOREIGN KEY (`note_IdMatiere`) REFERENCES `matiere` (`matiere_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

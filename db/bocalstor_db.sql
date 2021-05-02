-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Dim 02 Mai 2021 à 21:56
-- Version du serveur :  5.7.33-0ubuntu0.16.04.1
-- Version de PHP :  7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bocalstor_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `cat_id` int(11) NOT NULL,
  `cat_fur_id` int(11) NOT NULL,
  `cat_nom` varchar(255) NOT NULL,
  `cat_description` varchar(1000) NOT NULL,
  `cat_del` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categorie`
--

INSERT INTO `categorie` (`cat_id`, `cat_fur_id`, `cat_nom`, `cat_description`, `cat_del`) VALUES
(30, 0, 'Mobilier salle TP ', 'Mobilier salle TP ', 1),
(31, 0, 'Mobilier salle TP', 'Mobilier salle de TP ', 0),
(32, 0, 'PC de Bureau ', 'PC Pour salle TP', 0);

-- --------------------------------------------------------

--
-- Structure de la table `fournisseur`
--

CREATE TABLE `fournisseur` (
  `fur_id` int(11) NOT NULL,
  `fur_raison_social` varchar(255) NOT NULL,
  `fur_adresse` varchar(255) NOT NULL,
  `fur_ville` varchar(255) NOT NULL,
  `fur_cp` varchar(20) NOT NULL,
  `fur_tel_1` varchar(50) NOT NULL,
  `fur_tel_2` varchar(50) NOT NULL,
  `fur_mail` varchar(255) NOT NULL,
  `fur_site_internet` varchar(255) NOT NULL,
  `fur_nom_corresp` varchar(255) NOT NULL,
  `fur_prenom_corresp` varchar(255) NOT NULL,
  `fur_tel_corresp` varchar(50) NOT NULL,
  `fur_mail_corresp` varchar(255) NOT NULL,
  `fur_iban` varchar(255) NOT NULL,
  `fur_rib` varchar(255) NOT NULL,
  `fur_usr_create` int(11) NOT NULL,
  `fur_date_create` datetime NOT NULL,
  `fur_usr_mod` int(11) NOT NULL,
  `fur_date_mod` datetime NOT NULL,
  `fur_del` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `fournisseur`
--

INSERT INTO `fournisseur` (`fur_id`, `fur_raison_social`, `fur_adresse`, `fur_ville`, `fur_cp`, `fur_tel_1`, `fur_tel_2`, `fur_mail`, `fur_site_internet`, `fur_nom_corresp`, `fur_prenom_corresp`, `fur_tel_corresp`, `fur_mail_corresp`, `fur_iban`, `fur_rib`, `fur_usr_create`, `fur_date_create`, `fur_usr_mod`, `fur_date_mod`, `fur_del`) VALUES
(1, 'intel', 'Rue de Paris', 'Paris', '75001', '01 25 85 15 25', '01 25 85 15 26', 'contact@intel.com', 'www.intel.com', 'Odil', 'Orélie', '01 56 65 85 25', 'JF@intel.com', 'FR7630001007941234567890185', 'FR7630001007941234567890185 30001 00794', 0, '0000-00-00 00:00:00', 26, '2020-02-08 00:52:33', 0),
(2, 'Celogique', '', '', '', '', '', '', '', '', '', '', '', '', '', 19, '2016-10-28 15:07:22', 26, '2020-02-08 00:47:22', 0),
(3, 'DELL', '5 Rue des bottes', 'PAris', '75009', '01 52 84 51 42', '01 23 45 84 11', 'contact@dell.com', 'www.dell.com', '', '', '', '', '', '', 19, '2017-01-31 12:00:34', 19, '2017-06-07 14:08:25', 0),
(4, 'Salim', '', '', '', '', '', '', '', '', '', '', '', '', '', 19, '2017-05-22 17:08:16', 0, '0000-00-00 00:00:00', 0),
(5, 'Mazigh', '', '', '', '0675014277', '', 'mazigh@gmai.com', '', 'outaleb', 'mazigh', '', '', '', '', 26, '2018-07-02 13:39:33', 26, '2018-07-02 13:40:22', 0),
(6, 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 'dd', 28, '2018-07-04 08:41:33', 0, '0000-00-00 00:00:00', 0),
(7, 'Conrad', '4654654', '', '', '', '', '', '', '', '', '', '', '', '', 26, '2018-07-06 11:27:20', 0, '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Structure de la table `fournisseur_doc`
--

CREATE TABLE `fournisseur_doc` (
  `fdoc_id` int(11) NOT NULL,
  `fdoc_fur_id` int(11) NOT NULL,
  `fdoc_type` int(11) NOT NULL,
  `fdoc_nom` varchar(255) NOT NULL,
  `fdoc_description` varchar(255) NOT NULL,
  `fdoc_type_file` varchar(255) NOT NULL,
  `fdoc_nom_file` varchar(255) NOT NULL,
  `fdoc_size_file` int(11) NOT NULL,
  `fdoc_data_file` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `ged_doc`
--

CREATE TABLE `ged_doc` (
  `gedd_id` int(11) NOT NULL,
  `gedd_type` int(11) NOT NULL,
  `gedd_nom` varchar(255) NOT NULL,
  `gedd_description` varchar(255) NOT NULL,
  `gedd_type_file` varchar(255) NOT NULL,
  `gedd_nom_file` varchar(255) NOT NULL,
  `gedd_size_file` int(11) NOT NULL,
  `gedd_data_file` longblob NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `information`
--

CREATE TABLE `information` (
  `inf_id` int(11) NOT NULL,
  `inf_nom_apc` varchar(255) NOT NULL,
  `inf_adresse` varchar(255) NOT NULL,
  `inf_cp` varchar(255) NOT NULL,
  `inf_ville` varchar(255) NOT NULL,
  `inf_willaya` varchar(255) NOT NULL,
  `inf_daira` varchar(255) NOT NULL,
  `inf_commune` varchar(255) NOT NULL,
  `inf_imp_titre` varchar(255) NOT NULL,
  `inf_nom_maire` varchar(255) NOT NULL,
  `inf_prenom_maire` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `information`
--

INSERT INTO `information` (`inf_id`, `inf_nom_apc`, `inf_adresse`, `inf_cp`, `inf_ville`, `inf_willaya`, `inf_daira`, `inf_commune`, `inf_imp_titre`, `inf_nom_maire`, `inf_prenom_maire`) VALUES
(1, 'UFR STN', '2 rue de la Liberté', '93526', 'Sait-Denis', 'Saint denis', 'ile de france', '', 'Université Paris8 - UFR MITSIC', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `pret`
--

CREATE TABLE `pret` (
  `prt_id` int(11) NOT NULL,
  `prt_user_id` int(11) NOT NULL,
  `prt_prd_id` int(11) NOT NULL,
  `prt_nom` varchar(255) NOT NULL,
  `prt_prenom` varchar(255) NOT NULL,
  `prt_email` varchar(255) NOT NULL,
  `prt_diplome` varchar(50) NOT NULL,
  `prt_num_tel` varchar(255) NOT NULL,
  `prt_date_pret` date NOT NULL,
  `prt_date_retour_prevu` date NOT NULL,
  `prt_date_retour` date NOT NULL,
  `prt_commentaire` varchar(1024) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `prd_id` int(11) NOT NULL,
  `prd_cat_id` int(11) NOT NULL,
  `prd_nom` varchar(255) NOT NULL,
  `prd_description` varchar(1000) NOT NULL,
  `prd_prix_ht` decimal(10,2) NOT NULL,
  `prd_del` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `produit`
--

INSERT INTO `produit` (`prd_id`, `prd_cat_id`, `prd_nom`, `prd_description`, `prd_prix_ht`, `prd_del`) VALUES
(30, 30, 'sqd', 'qsd', '0.00', 1),
(31, 31, 'Testd', 'tzqdtsqdqs', '80.00', 1),
(32, 31, 'qsdqs', 'dqsdqsdqsd', '0.00', 0),
(33, 32, 'Optiplex 890', 'I5', '950.00', 0),
(34, 32, 'dell 850', 'I5 ', '350.00', 0),
(35, 31, 'ecran ', 'racran 17p ', '150.00', 0);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `srv_id` int(11) NOT NULL,
  `srv_nom` varchar(255) NOT NULL,
  `srv_description` varchar(255) NOT NULL,
  `srv_del` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `service`
--

INSERT INTO `service` (`srv_id`, `srv_nom`, `srv_description`, `srv_del`) VALUES
(1, 'MIME', '', 1),
(2, 'MIASH', '', 0),
(3, 'BOCAL', '', 0),
(4, 'qsdqsd', '', 1),
(5, 'qsdqsdq', '', 1),
(6, 'ddddd', '', 1),
(7, 'A166', 'Bureau Mehdy et Halim', 0),
(8, 'A160', 'Salle de cours', 0);

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `sto_id` int(11) NOT NULL,
  `sto_fur_id` int(11) NOT NULL,
  `sto_prd_id` int(11) NOT NULL,
  `sto_libele_prd` varchar(255) NOT NULL,
  `sto_cat_id` int(11) NOT NULL,
  `sto_libele_cat` varchar(255) NOT NULL,
  `sto_num_inventaire` varchar(255) NOT NULL DEFAULT '0',
  `sto_date_achat` date NOT NULL,
  `sto_prix_achat_ht` int(11) NOT NULL,
  `sto_annne_amortissement` int(11) NOT NULL DEFAULT '5',
  `sto_serie` int(11) NOT NULL,
  `sto_affactation` int(11) NOT NULL DEFAULT '0',
  `sto_sorti_inventaire` int(11) NOT NULL DEFAULT '0',
  `sto_date_sorti_inventaire` date NOT NULL,
  `sto_commentaire` varchar(255) NOT NULL,
  `sto_qte` int(11) NOT NULL DEFAULT '1',
  `sto_srv_id` int(11) NOT NULL,
  `sto_pret` int(11) NOT NULL DEFAULT '0',
  `sto_del` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `stock`
--

INSERT INTO `stock` (`sto_id`, `sto_fur_id`, `sto_prd_id`, `sto_libele_prd`, `sto_cat_id`, `sto_libele_cat`, `sto_num_inventaire`, `sto_date_achat`, `sto_prix_achat_ht`, `sto_annne_amortissement`, `sto_serie`, `sto_affactation`, `sto_sorti_inventaire`, `sto_date_sorti_inventaire`, `sto_commentaire`, `sto_qte`, `sto_srv_id`, `sto_pret`, `sto_del`) VALUES
(128, 3, 33, 'SERVER X100', 32, 'Serveur DELL', '0', '2017-06-07', 20000, 0, 0, 0, 0, '2017-06-07', '', 1, 7, 0, 0),
(129, 3, 33, 'PC DELL 30X', 31, 'PC DELL', '0', '2017-06-07', 20000, 0, 0, 0, 0, '2017-06-07', '', 1, 2, 0, 0),
(130, 3, 32, 'PC DELL 30X', 31, 'PC DELL', '123', '2017-06-07', 0, 0, 0, 0, 0, '2017-06-07', '', 1, 7, 0, 0),
(131, 3, 20, 'Impr 252 Dell ', 27, 'Imprimantes', '0', '2017-06-07', 2500, 0, 0, 0, 0, '2017-06-07', '', 1, 0, 0, 1),
(132, 7, 33, '', 32, '', '', '2020-02-15', 0, 5, 0, 0, 0, '2020-02-07', '', 1, 7, 1, 0),
(133, 0, 33, '', 32, '', '', '2020-02-15', 0, 5, 0, 0, 0, '2020-02-07', '', 1, 7, 0, 0),
(134, 0, 33, '', 32, '', '', '2020-02-15', 0, 5, 0, 0, 0, '2020-02-07', '', 1, 7, 0, 0),
(135, 0, 33, '', 31, '', '', '2020-02-12', 0, 2, 0, 0, 1, '2020-02-18', '', 1, 3, 0, 0),
(136, 0, 33, '', 31, '', '', '2020-02-12', 0, 2, 0, 0, 1, '2020-02-18', '', 1, 3, 0, 0),
(137, 0, 33, '', 31, '', '', '2020-02-12', 0, 2, 0, 0, 1, '2020-02-18', '', 1, 3, 0, 0),
(138, 0, 34, '', 32, '', '', '2020-02-12', 0, 10, 0, 0, 0, '2020-02-12', '', 1, 3, 0, 0),
(139, 0, 34, '', 32, '', '', '2020-02-12', 0, 10, 0, 0, 0, '2020-02-12', '', 1, 3, 0, 0),
(140, 0, 34, '', 32, '', '', '2020-02-12', 0, 10, 0, 0, 0, '2020-02-12', '', 1, 3, 0, 0),
(141, 0, 34, '', 32, '', '', '2020-02-12', 0, 10, 0, 0, 0, '2020-02-12', '', 1, 3, 0, 0),
(142, 0, 34, '', 32, '', '', '2020-02-12', 0, 10, 0, 0, 0, '2020-02-12', '', 1, 3, 0, 0),
(143, 0, 33, '', 31, '', '123456', '2020-02-12', 0, 3, 0, 0, 0, '2020-02-12', '', 1, 2, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `usr_id` int(11) NOT NULL,
  `usr_lname` varchar(255) NOT NULL,
  `usr_fname` varchar(255) NOT NULL,
  `usr_login` varchar(255) NOT NULL,
  `usr_psw` varchar(255) NOT NULL,
  `usr_mail` varchar(255) NOT NULL,
  `usr_active` tinyint(1) NOT NULL DEFAULT '1',
  `usr_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `usr_date_create` datetime NOT NULL,
  `usr_date_modify` datetime NOT NULL,
  `usr_usr_create` int(11) NOT NULL,
  `usr_usr_modify` int(11) NOT NULL,
  `usr_right_param` int(11) NOT NULL DEFAULT '0',
  `usr_right_four` int(11) NOT NULL DEFAULT '0',
  `usr_right_cmd` int(11) NOT NULL DEFAULT '0',
  `usr_right_inv` int(11) NOT NULL DEFAULT '0',
  `usr_right_pret` int(11) NOT NULL DEFAULT '0',
  `usr_right_ged` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`usr_id`, `usr_lname`, `usr_fname`, `usr_login`, `usr_psw`, `usr_mail`, `usr_active`, `usr_deleted`, `usr_date_create`, `usr_date_modify`, `usr_usr_create`, `usr_usr_modify`, `usr_right_param`, `usr_right_four`, `usr_right_cmd`, `usr_right_inv`, `usr_right_pret`, `usr_right_ged`) VALUES
(26, 'Djerroud', 'Halim', 'halim', '1d75dcced380911afbad64d9be84472b', 'halim.contact@gmail.com', 1, 0, '2016-07-04 16:37:51', '2020-02-10 09:21:56', 1, 26, 1, 1, 1, 1, 1, 1),
(28, 'Outaleb', 'Achour', 'mazigh', 'c47699ddb759ceade4ceb3a6d93a9035', 'outaleb37@gmail.com', 1, 0, '2018-06-21 09:39:45', '2018-07-02 13:04:47', 26, 28, 1, 1, 1, 1, 1, 1),
(29, 'Mourad', 'Amara', 'mourad', '20c79ef8a4fcc250be4702fbd5045ffb', 'mourad.amara@gmail.com', 1, 0, '2018-06-25 09:16:18', '0000-00-00 00:00:00', 28, 0, 1, 1, 1, 1, 1, 1),
(30, 'Thibaudeau', 'Laurent', 'laurent', '34a321664be49e31c2368f6f42798a98', 'laurent.Thibaudeau@gmail.com', 1, 0, '2018-07-04 08:19:53', '2018-07-04 14:09:13', 28, 30, 1, 0, 1, 1, 1, 1),
(31, 'achour', 'achour', 'maz', '871175b58e9ad50e8c53425f1bba09bd', 'maz@gmail.com', 1, 0, '2018-07-04 13:52:54', '0000-00-00 00:00:00', 30, 0, 1, 1, 1, 1, 1, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`cat_id`);

--
-- Index pour la table `fournisseur`
--
ALTER TABLE `fournisseur`
  ADD PRIMARY KEY (`fur_id`);

--
-- Index pour la table `fournisseur_doc`
--
ALTER TABLE `fournisseur_doc`
  ADD PRIMARY KEY (`fdoc_id`);

--
-- Index pour la table `ged_doc`
--
ALTER TABLE `ged_doc`
  ADD PRIMARY KEY (`gedd_id`);

--
-- Index pour la table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`inf_id`);

--
-- Index pour la table `pret`
--
ALTER TABLE `pret`
  ADD PRIMARY KEY (`prt_id`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`prd_id`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`srv_id`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`sto_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`usr_id`),
  ADD KEY `USR_LOGIN` (`usr_login`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT pour la table `fournisseur`
--
ALTER TABLE `fournisseur`
  MODIFY `fur_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `fournisseur_doc`
--
ALTER TABLE `fournisseur_doc`
  MODIFY `fdoc_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `ged_doc`
--
ALTER TABLE `ged_doc`
  MODIFY `gedd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `information`
--
ALTER TABLE `information`
  MODIFY `inf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `pret`
--
ALTER TABLE `pret`
  MODIFY `prt_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `prd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `srv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `sto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `usr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

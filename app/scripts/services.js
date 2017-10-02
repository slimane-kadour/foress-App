'use strict';
angular.module('foressApp')

  .service('menuFactory', function() {
      
      var items=[
                          {
                           id : '0',
                           nom_annonceur : 'Mohammed',
                           telephone : '06 69 57 69 08',
                            label:'occ',
                             marque:'brand',
                           email : 'boud.wafaa@gmail.com',
                           adresse : 'Bir el Djir, Oran',
                           categorie:'Electroménagers',
                            souscategorie: 'Cuisinière',
                           titre : 'Vente d"une cuisinière',
                           prix : '8000.00 DA',
                            wilaya: 'Alger',
                            description : 'je met en vente une cuisinière déja utilisé, mais en trés bonne état, pour plus d"information, contactez moi.',
                           date_parution : '05/07/2017 11:05',
                           nbr_vue : '10',
                           image: "assets/img/item/img-1.jpg"
                              
                        },
                        {
                           id : '1',
                           nom_annonceur : 'Pharmacie',
                           telephone : '06 69 57 69 09',
                             label:'urg',
                            marque:'',
                           email : 'kaddour.slimane@gmail.com',
                           adresse : 'Bab El Zouar, Alger',
                           categorie: 'Emplois',
                             wilaya: 'Alger',
                           titre : 'Santé - Pharmacie',
                            souscategorie: 'Santé - Pharmacie',
                           description : 'je cherche un/e vendeure/se en pharmacie, diplomé dans le domaine, pour toutes autres informations concernat le salaire, les horaires..., n"hésiter pas à nous contactez.',
                           date_parution:'05/06/2017 11:05',
                           nbr_vue : '820',
                           image: 'assets/img/post/download.jpg'                          
                        },
                        {
                           id : '2',
                           nom_annonceur : 'BMS.Info',
                           telephone : '041 42 22 21',
                           email : 'contact@bmsinfo.com',
                           adresse : 'El Eulma, Sétif',
                           categorie:'Boutiques',
                             label:'',
                             wilaya: 'Alger',
                            marque:'php',
                           titre : 'Pc Portable Asus, RAM:8Go, Disque:1To, Processeur:Ci3-4-H20',
                           prix : '65000.00 DA',
                           description : 'Profitez de bonnes performances et gagnez en confort avec le PC portable Asus ! Equipé d"un grand écran mat de 17.3 pouces HD+, ce PC portable vous offre un excellent confort visuel, pour travailler confortablement ou profiter agréablement du divertissement numérique mobile.',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '1000',
                           image: 'assets/img/post/PC.jpg'
                        },
                        {
                           id : '4',
                           nom_annonceur : 'Particulier',
                           telephone : '07 70 90 06 87',
                           adresse : 'Point du jour',
                            wilaya: 'Oran',
                             label:'fix',
                           categorie:'Animaux',
                            marque:'',
                           titre : 'Services pour animaux',
                           description : 'J"ai un chat, c"est la première fois qu"il tombe malade, si vous pouvez m"indiquer un vétérinaire dans les environ de essedikia, oran. merci.',
                           date_parution : '19/03/2017 18:12',
                           nbr_vue : '200',
                           image: 'assets/img/post/chat.jpg'
                        },
                        {
                           id : '3',
                           nom_annonceur : 'Partuculier',
                           telephone : '06 70 60 64 32',
                           email : 'kaddour@gmail.com',
                           adresse : 'Saint Eugène, Sidi bel Abbes',
                           categorie:'Electroménagers',
                           titre : 'Réfrigérateur',
                             label:'new',
                            marque:'eniem',
                             wilaya: 'Oran',
                           prix : '15000.00 DA',
                           description : 'je met en vente un réfrigérateur déja utilisé, mais en trés bonne état, pour plus d"information, contactez moi.',
                           date_parution : '10/05/2017 20:02',
                           nbr_vue : '83',
                           image: 'assets/img/post/réfrig.jpg'
                        },
                        {
                           id : '5',
                           nom_annonceur : 'Société Française',
                           telephone : '042 54 87 85',
                           email : 'contact@société.fr',
                           adresse : 'Algérie, Alger.Tizi-Ouzou.',
                           categorie: 'Emplois',
                             label:'new',
                             wilaya: 'Oran',
                             marque:'',
                             titre : 'Informatique',
                           description : 'Société Française recrute dans l"immédiat pour ses agences Alger Tizi Ouzou :Des Téléconseillères Francophone',
                           date_parution:'05/08/2017 10:02',
                           nbr_vue : '330',
                           image: 'assets/img/post/download.jpg'                          
                        },
                        {
                           id : '6',
                           nom_annonceur : 'Slimane',
                           telephone : '07 73 40 31 32',
                           email : 'kaddour.slimane@gmail.com',
                           adresse : 'Arzew, Oran',
                           categorie:'Boutiques',
                           titre : 'Téléphones Portables Galaxy S5',
                           prix : '25000.00 DA',
                             label:'new',
                             marque:'sumsung',
                             wilaya: 'Oran',
                           description : 'Galaxy S5 LTE 4G g900f avec boit et tout les accessoires produit Original neuf jamais utilisé avec Garantie Couleur disponible gold blanc bleu nuit Vien de l Èurope',
                           date_parution : '19/08/2015 19:07',
                           nbr_vue : '2',
                           image: 'assets/img/post/galaxy.jpg'
                        },
                        {
                           id : '7',
                           nom_annonceur : 'Oiseau',
                           telephone : '07 70 90 06 87',
                           adresse : 'Point du jour, Oran',
                           categorie:'Animaux',
                             label:'new',
                             marque:'',
                             wilaya: 'Alger',
                           titre : '9 perruches Avec cage Vision XL',
                           description : 'je met en vente une Cage double vision XL. outs les accessoires sont inclus',
                           date_parution : '19/03/2017 16:08',
                           nbr_vue : '547',
                           image: 'assets/img/post/perruche.jpg'
                        },
                        {
                           id : '8',
                           nom_annonceur : 'Cuisinier',
                           telephone : '07 74 85 96 25',
                           email : 'cuisinier@gmail.com',
                           adresse : 'Esenia, Algérie',
                           categorie:'Electroménagers',
                           titre : 'Fours',
                             label:'occ',
                             marque:'brand',
                            wilaya: 'Oran',
                            wilaya: 'Alger',
                           prix : '10000.00 DA',
                           description : 'Four pour boulangerie 3 et&age mark pavallias  en march,avece paltuax pour pain , et paltux pour gatuax tradtion,gaz alecreicte , digital afficheur termprateur,demension de long (2 metre 36 cm) à 3meter 35 cmter,h: 2metre 28cm',
                           date_parution : '20/08/2017 15:18',
                           nbr_vue : '14',
                           image: 'assets/img/post/four-4etage-2voies.gif'
                        },
                        {
                           id : '9',
                           nom_annonceur : 'Eurl BM CONSEILS',
                           telephone : '041 45 87 47',
                           email : 'eurl@bm.com',
                           adresse : 'Algérie, Alger.',
                             label:'urg',
                             marque:'',
                            wilaya: 'Alger',
                           categorie: 'Emplois',
                           titre : 'Comptabilité - Audit',
                           description : 'Eurl Bouagal Mouloud Conseil cabinet d"assistance et de conseils en gestion recrute dans l"immédiat :Un Aide Comptable',
                           date_parution:'14/08/2017 12:15',
                           nbr_vue : '1',
                           image: 'assets/img/post/download.jpg'                          
                        },
                        {
                           id : '10',
                           nom_annonceur : 'Eurl fab',
                             label:'new',
                             marque:'bois rouge',
                           telephone : '041 42 22 21',
                           email : 'contact@eurlFab.com',
                           adresse : 'El Eulma, Sétif',
                           categorie:'Meubles de maison',
                           titre : 'fabrication des salons',
                           prix : '65000.00 DA Négociable',
                           description : 'fabrication de salon fauteuil les poufs en tissu anti-tache skaï cuir, sur commande et sur mesure très bien fini livraison après 15jour maximum avec prix de fabricant',
                           date_parution : '22/07/2017 13:05',
                           nbr_vue : '752',
                           image: 'assets/img/post/salon.jpg'
                        },
                        {
                           id : '11',
                           nom_annonceur : 'Magasin de chaussures',
                           telephone : '05 52 52 85 17',
                            label:'nvx',
                             marque:'',
                           email : 'Hind@gmail.com',
                           adresse : 'ottawa, Adrar',
                           categorie:'Emplois',
                            souscategorie: 'Commerce - Vente',
                           titre : 'Cherche vendeur',
                            wilaya: 'Adrar',
                            description : 'On cherche un vendeur qualifié à notre magasin qui ce situe on centre ville',
                           date_parution : '',
                           nbr_vue : '874',
                           image: "assets/img/post/aucune.jpg"
                              
                        },
                        {
                           id : '12',
                           nom_annonceur : 'Sonatrack',
                             label:'new',
                           telephone : '041 42 22 21',
                           email : 'contact@sonatrack.com',
                           adresse : 'Hasi masoud, Saida',
                           categorie:'Emplois',
                            souscategorie: 'Informatiques',
                           titre : 'Concours',
                           description : 'Nous ouvrons un concours au jeunes diplomés en informatique pour des postes au niveau des wilaya d"Algérie, vous pouvez déposés vos dossier au niveau de l"anem de votre région.',
                           date_parution : '',
                           nbr_vue : '25',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '13',
                           nom_annonceur : 'Hotel Méridien',
                           telephone : '041 42 22 21',
                           email : 'meridien-hotel@gmail.com',
                           adresse : '9 rue des palmiers, Chlef',
                           categorie:'Emplois',
                           souscategorie: 'Hôtellerie - Restauration',
                           label:'urg',
                             wilaya: 'Chlef',
                           titre : 'Cherche des superviseur',
                           description : 'Nous cherchons des superviseurs quialifé pour rejoindre notre équipe à l"hotel Méridien',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '189',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '14',
                           nom_annonceur : 'Cisco',
                           telephone : '05 59 44 65 76',
                           email : 'cisco@gmail.com',
                           adresse : '9 Rue Ibrahim Djelloul, Batna',
                           categorie:'Emplois',
                           souscategorie: 'Informatiques',
                           label:'urg',
                             wilaya: 'Batna',
                           titre : 'Métien de développeur Web',
                           description : 'Nous avons besoin au sein de notre société des candidats expérimentés dans le développement web en particulier un développeur Back-End. Connissance requise : PHP, NodeJs, ASP.net',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '36',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '15',
                           nom_annonceur : 'BADR BANQUE',
                           telephone : '05 59 44 65 76',
                           email : 'BAnque@hotmail.fr',
                           adresse : 'Avenue Miramar, Bouira',
                           categorie:'Emplois',
                           souscategorie: 'Comptabilité - Audit',
                           label:'nvx',
                             wilaya: 'Bouira',
                           titre : 'Chef Comptable',
                           description : 'Missons du poste : Compile et analyse l"information financière pour préparer les entrées aux comptes,Analyse les revenus détaillés de l"information financière et les dépenses, prépare les bilans, les rapports de profits et pertes...',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '27',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '16',
                           nom_annonceur : 'MLM',
                           telephone : '05 59 44 65 76',
                           email : 'MLM@hotmail.fr',
                           adresse : '9 Rue capital hamri, Alger',
                           categorie:'Emplois',
                           souscategorie: 'Commerce - Vente',
                           label:'nvx',
                             wilaya: 'Alger',
                           titre : 'Entrepreneur indépendant',
                           description : 'Si vous souhaitez decouvrir une opportunité de travail qui va donner sens,a votre vie...Si vous voulez assister à une présentation du projet d"entreprise...joigner nous le samedi 26 août à 12h 30',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '200',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '17',
                           nom_annonceur : 'Propharmal',
                           telephone : '05 59 44 65 76',
                           email : 'Pro@hotmail.fr',
                           adresse : 'Rue ibrahim djelloul, Oran',
                           categorie:'Emplois',
                           souscategorie: 'Santé - Pharmacie',
                           label:'nvx',
                             wilaya: 'Oran',
                           titre : 'Responsable Introduction Nouveaux Produits',
                           description : 'PROPHARMAL SPA (PROduits PHARMaceutiques ALgériens) est une entreprise pharmaceutique de 170 personnes, produisant des formes sèches, effervescentes et liquides pour des donneurs d’ordre locaux ou internationaux. Son intégration récente en tant que filiale du groupe CFAO/Eurapharma (11400 personnes, 3,6 milliard d’€ de chiffre d’affaires) lui apporte de nouvelles opportunités de développement. ',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '145',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '18',
                           nom_annonceur : 'Newrest Algérie',
                           telephone : '05 59 44 65 76',
                           email : 'rest@hotmail.fr',
                           adresse : 'Rue ibrahim djelloul, Skikda',
                           categorie:'Emplois',
                           souscategorie: 'Hôtellerie - Restauration',
                           label:'urg',
                             wilaya: 'Skikda',
                           titre : 'Responsable Introduction Nouveaux Produits',
                           description : 'Missions du poste : Mettre en place la salle et le comptoir, Accueillir et conseil des clients, prendre les commandes... ',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '19',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '19',
                           nom_annonceur : 'Ben Burger',
                           telephone : '05 59 44 65 76',
                           email : 'burger@hotmail.fr',
                           adresse : 'Akid lotfi, Oran',
                           categorie:'Emplois',
                           souscategorie: 'Hôtellerie - Restauration',
                           label:'urg',
                             wilaya: 'Oran',
                           titre : 'Cuisinier',
                           description : 'Pour son nouveau concept Ben Burger recrute un Cuisinier, Diplôme : CA P Cuisine, hôtellerie.Expérience dans le domaine',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '68',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '20',
                           nom_annonceur : 'Importante Multinationale',
                           telephone : '05 59 44 65 76',
                           email : 'Multi@hotmail.fr',
                           adresse : 'Alger, Algérie',
                           categorie:'Emplois',
                           souscategorie: 'Comptabilité - Audit',
                           label:'nvx',
                             wilaya: 'Alger',
                           titre : 'Importante Multinationale',
                           description : 'Grande Multinationale recrute un Responsable Trésorerie et Financement : Veiller au bon fonctionnement de la structure de trésorerie.Mettre à jour et veiller à la bonne application des procédures du Département et des contrôles. Négocier avec les banques et gérer les placements. Élaborer le budget de trésorerie. Déterminer les besoins en financement ou les disponibilités financières de la structure et mettre en place les actions adaptées (ligne de crédit, investissement...).',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '58',
                           image: 'assets/img/post/download.jpg'
                        },
                        {
                           id : '21',
                           nom_annonceur : 'HELPISTE ASSOCIATION CARITATIVE',
                           telephone : '05 59 44 65 76',
                           email : 'Helpiste@hotmail.fr',
                           adresse : 'Oran, Algérie',
                           categorie:'Communauté',
                           souscategorie: 'Bénévoles',
                           label:'nvx',
                             wilaya: 'Oran',
                           titre : 'Devenez bénévole pour l"association Agir pour l"Environnement',
                           description : 'à, Oran, au siège de l"association, ponctuellement ou régulièrement... : nous recherchons un petit groupe de bénévoles motivés et prêts à donner un coup de main à l"association Agir Pour l"Environnement pour ses actions et des tâches administratives simples.',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '1250',
                           image: 'assets/img/post/Fotolia_communaute.gif'
                        },
                        {
                           id : '22',
                           nom_annonceur : 'Particulier',
                           telephone : '05 59 44 65 76',
                           adresse : 'Skikda',
                           categorie:'Véhicules',
                           souscategorie: 'Automobiles',
                           label:'vnt',
                             wilaya: 'Skikda',
                           titre : 'BMW Série 1 Confort 2005',
                           description : 'Options : Climatisation , Toit ouvrant , ABS , ESP , Radar de recul , Direction assisstée , Retroviseurs électriques , Phares antibrouillard , Alarme , Phares xénon , Jantes Alliage , Feux du jour , Vitres éléctriques',
                            prix : '72 Millions Offert',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '4',
                           image: 'assets/img/post/voiture.jpg'
                        },
                        {
                           id : '23',
                           nom_annonceur : 'RND',
                           adresse : 'Mila',
                           categorie:'Communautés',
                           souscategorie: 'Événements',
                           label:'mr',
                             wilaya: 'Mila',
                           titre : 'Une marche contre l"injustice',
                           description : 'Bonjour, nous sommes une  petite organisation qui se manifeste contre l"injustice dans notre pays, pour cela nous avons organiser une marche le 26/08/2017 à place d"arme, soyez nombreux.',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '2315',
                           image: 'assets/img/post/loi.jpg'
                        },
                        {
                           id : '24',
                           nom_annonceur : 'Agence Immobilière',
                           telephone : '05 59 44 65 76',
                           adresse : 'Oran',
                           categorie:'Immobiliers',
                           souscategorie: 'Appartement',
                           label:'urg',
                             wilaya: 'Oran',
                           titre : 'Vente d"un appartement',
                           description : 'Je vend un appartement F4 qui ce situe à Esenia wilaya d"Oran, pour toutes informations veuillez nous contactez, merci ',
                           date_parution : '19/03/2017 14:08',
                           nbr_vue : '23',
                           image: 'assets/img/post/agence.jpg'
                        }
                
                       ];
    
                   this.getItems = function(){
                                        return items;
                                    };
                  this.getItem = function (index) {
                                        return items[index];
                };
               
  

            });

 
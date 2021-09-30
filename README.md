<h1>Projet d'étude OpenClassrooms :Créer un réseau social d'entreprise</h1>
<h2> Compétences évaluées </h2>
  <ul>
   <li>Personnaliser le contenu envoyé à un client web</li>
  <li>Authentifier un utilisateur et maintenir sa session</li>
  <li>Gérer un stockage de données à l'aide de SQL</li>
  <li>Implémenter un stockage de données sécurisé en utilisant SQL</li>
  </ul>
   
<h2>Technologies utilisées :</h2>
 <ul>
  <li> HTML</li>
  <li> CSS</li>
  <li> JavaScript</li>
  <li> Vue.js</li>
  <li> bootstrap</li>
  <li> Express.js</li>
  <li> MySQL</li>
 </ul>
   
<h2>Pour cloner le projet</h2>
⇢ Prérequis :
Vous devrez avoir Vue CLI, Node et MySQL installés localement sur votre machine.
⇢<h4> Installation :</h4>
clonez ce repository<br/>
Backend :
▹ A partir du dossier backend, exécutez npm install puis nodemon server ;
▹ Le serveur doit fonctionner sur localhost avec le port par défaut 3000 ;

Base de données :
▹ Vérifier que les informations contenues dans le fichier config.json sont correctes et correspondent à votre base de données
▹ Exécutez sequelize model:create --attributes "pseudo:string email:string password:string" --name User pour créer la table des utilisateurs et reproduire la même procédure pour chaque table;
▹ Exécutez sequelize db:migrate pour intégrer les modèles créés dans la base de données ;


Frontend :
▹ A partir du dossier frontend, exécutez npm install puis npm run serve ;
▹ Le frontend de l'application doit fonctionner sur localhost avec le port par défaut 8080.

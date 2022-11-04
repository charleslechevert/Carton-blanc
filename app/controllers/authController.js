const { Team } = require("../models");
const bcrypt = require('bcrypt');

const authController = {
    signin(req, res) {
      res.render('adminSignin', {errorMessage:''});
    }, 

    async formAdminSigninSubmited(req, res) {
      const { password } = req.body;
    // 1 - Je vais chercher dans ma BDD l'utilisateur qui correspond au bon email
    const team = await Team.findAll();
    // 2 - Si je le trouve, je vais vérifer son mot de passe, sinon je retourne "Mauvaise identifiant"
    

    // bcrypt.compare va nous permettre de vérifier si le mot de passe renseigner dans le formulaire correspond à celui de l'utilisateur en BDD. Le mot de passe en BDD est déjà hasher.
    const hasPasswordMatched = await bcrypt.compare(password, team[0].admin_password);

    if(!hasPasswordMatched) {
      res.render('adminSignin', {
        errorMessage: 'Mauvais identifiant'
      });
      return;
    }
    // 3 - Si les mots de passe coincide, je sauvegarde mon utilisateur en session, sinon je retourne "Mauvais identifiant"
    // user.toJSON permet de récupérer un objet JS brut qui n'est plus une instance de User
    // const userToSave = user.toJSON();
    // // delete me permet de supprimer une donnée dans un objet
    // delete userToSave.password
    // Je stock les données de mon utilisateur dans ma session
    // req.session.user = userToSave;
    // Le défaut de stocker tout l'objet user dans la session est que si l'on change le rôle de notre utilisateur, ce dernier ne sera récupérer qu'à la prochaine connection.
    // Une autre manière de faire est de stocker uniquement l'id de l'utilisateur et de récupérer les informations en BDD à chaque requête
    req.session.role = 'admin';

    // 4 - On redirige sur la page d'accueil
    res.redirect('/admin');
  }


}

module.exports = authController;
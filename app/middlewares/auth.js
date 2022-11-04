const { Team } = require("../models");

const authMiddlewares = {
    checkIsAdmin(req, res, next) {
        // Si mon utilisateur n'est pas admin, je le redirige sur la page d'accueil
        // Si aucun utilisateur est connecté, le req.user est undefined
        // req.user.role va donc faire une jolie erreur
        // Pour éviter l'erreur on utilise le conditionnal chaining `?`
        if(req.session?.role !== 'admin') {
          res.redirect('/adminSignin');
        } else {
          // Si il est admin je le laisse faire l'action
          next();
        }
    }

}

module.exports = authMiddlewares;
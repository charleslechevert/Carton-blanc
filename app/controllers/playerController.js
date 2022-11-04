const { Player } = require("../models");

const playerController = {
  async list(req, res) {
    console.log(req.body)
    const players = await Player.findAll({where:{active : true}});
    res.render('setPlayer', { players });
  },

  async create(req, res) {
    data = req.body;
    data.active = true;
    data.team_id = 1;
    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      await Player.create(data);
      
      // Si mon level est bien créer, je redirige sur ma page en GET /levels
      res.redirect('/setPlayer');
    } catch(e) {
      console.log(e)
      // @TODO Gestion de notre erreur
      res.redirect('/setPlayer');
    }
  },
  async destroy(req, res) {
    if(req.session.role == 'admin') {
    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      await Player.update({ active: false }, {
        where: {
           id: req.params.id
        }
      })
      // Si mon level est bien créer, je redirige sur ma page en GET /levels
      res.redirect('/setPlayer');
    } catch(e) {
      // @TODO Gestion de notre erreur
      res.redirect('/setPlayer');
    }
  } else {
    res.redirect('/');
  }
}

}

module.exports = playerController;
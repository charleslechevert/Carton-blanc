const { Penalty } = require("../models");
const { update } = require("../models/penalty");
const typeOptions = require('../typeOptions');

const penaltyController = {
  async list(req, res) {
    const penalties = await Penalty.findAll({where:{active : true}});
    res.render('setPenalty', { penalties, typeOptions });
  },

  async create(req, res) {
    data = req.body;
    data.active = true;
    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      await Penalty.create(data);
      
      // Si mon level est bien créer, je redirige sur ma page en GET /levels
      res.redirect('/setPenalty');
    } catch(e) {
      console.log(e)
      // @TODO Gestion de notre erreur
      res.redirect('/setPenalty');
    }
  },
  async destroy(req, res) {
    if(req.session.role == 'admin') {
    console.log(req.params.id)
    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      await Penalty.update({ active: false }, {
        where: {
           id: req.params.id
        }
      })
      // Si mon level est bien créer, je redirige sur ma page en GET /levels
      res.redirect('/setPenalty');
    } catch(e) {
      // @TODO Gestion de notre erreur
      res.redirect('/setPenalty');
    }
  } else {
    res.redirect('/')
  }
}
}

module.exports = penaltyController;
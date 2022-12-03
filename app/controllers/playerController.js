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
    data.team_id = '37c62bde-35cf-4e72-b61a-821d801877d0';
    console.log('CHECKKKK')
    console.log(data)
    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      await Player.create({ fname: "Jane" });
      
      // Si mon level est bien créer, je redirige sur ma page en GET /levels
      res.redirect('/setPlayer');
    } catch(e) {
      console.log(e)
      // @TODO Gestion de notre erreur
      res.redirect('/');
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
},
async findOne(req, res) {
  if(req.session.role == 'admin') {
  
  
  // req.body contient les données de mon formulaire
  // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
  try {
    const player = await Player.findOne({
      where: { id: req.params.id }})
      const players = await Player.findAll({where:{active : true}});
    // Si mon level est bien créer, je redirige sur ma page en GET /levels
    res.render('modifyPlayer', { player , players});
  } catch(e) {
    // @TODO Gestion de notre erreur
    res.redirect('/setPlayer');
  }
} else {
  res.redirect('/');
}
},
async update(req,res) {
  if(req.session.role == 'admin') {

    const playerUpdated = {
      fname : req.body.fname,
      lname : req.body.lname,
      pseudo : req.body.pseudo,
      email : req.body.email

    }
  
  
    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      const player = await Player.update(playerUpdated,
      { where: { id: req.params.id } })
      res.redirect('/setPlayer');

    } catch(e) {
      // @TODO Gestion de notre erreur
      res.redirect('/setPlayer');
    }
    } else {
      
  }
}

}

module.exports = playerController;
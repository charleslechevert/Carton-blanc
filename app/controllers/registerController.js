const { Register } = require("../models");
const { Penalty } = require("../models");
const { Player } = require("../models");

const registerController = {
  async list(req, res) {
    
    const players = await Player.findAll({where:{active : true}});
    const penalties = await Penalty.findAll({where:{active : true}});
    const registers = await Register.findAll({ include : ['player','penalty'], where: {active : true}});
    console.log(registers)
    res.render('setRegister', { registers, penalties, players });
  },

  async create(req, res) {
    
    //populate some properties automatically
    data = req.body;
    
    const player = await Player.findOne({where:{pseudo : data.player, active : true}});
    const penalty = await Penalty.findOne({where:{type : data.type, active : true}});

    const register = {}
    
    register.penalty_id = penalty.id
    register.player_id = player.id
    register.date = new Date()
    register.paid_status = false;
    register.active = true;
    register.descr = req.body.descr
   


    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      await Register.create(register);
      
      // Si mon level est bien créer, je redirige sur ma page en GET /levels
      res.redirect('/setRegister');
    } catch(e) {
      console.log(e)
      // @TODO Gestion de notre erreur
      res.redirect('/setRegister');
    }
  },
  async destroy(req, res) {
    if(req.session.role == 'admin') {
    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      await Register.update({ active: false }, {
        where: {
           id: req.params.id
        }
      });
      // Si mon level est bien créer, je redirige sur ma page en GET /levels
      res.redirect('/setRegister');
    } catch(e) {
      // @TODO Gestion de notre erreur
      res.redirect('/setRegister');
    }
  } else {
    res.redirect('/')
  }
  },
  async sumAmountByPlayer(req,res) {
    const registers = await Register.findAll({
    attributes: ['id', [models.sequelize.fn('sum', models.sequelize.col('Penalty.amount')), 'total_cost']],
    include: [
    {
        model: models.Penalty,
        attributes: []
    },
    {
      model: models.Player,
      attributes: []
  }
    ],
    group: ['Player.id']
})
console.log(registers)
res.render('playerRanking', { registers })
  },
  async findOne(req, res) {
    if(req.session.role == 'admin') {
    
    
    // req.body contient les données de mon formulaire
    // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
    try {
      const players = await Player.findAll({where:{active : true}});
      const penalties = await Penalty.findAll({where:{active : true}});
      const register = await Register.findOne({
        where: { id: req.params.id }})
        
      // Si mon level est bien créer, je redirige sur ma page en GET /levels
      res.render('modifyRegister', { register, players, penalties });
    } catch(e) {
      // @TODO Gestion de notre erreur
      res.redirect('/setRegister');
    }
  } else {
    res.redirect('/');
  }
  },
  async update(req,res) {
    if(req.session.role == 'admin') {
  
      const registerUpdated = {
        type : req.body.type,
        player : req.body.player,
        descr : req.body.descr,
        date : req.body.date
        
  
      }
    
    
      // req.body contient les données de mon formulaire
      // ça tombe bien, mon formulaire à un champ name comme ce qu'a besoin mon level, quel hasard...
      try {
        const register = await Register.update(registerUpdated,
        { where: { id: req.params.id } })
        res.redirect('/setRegister');
  
      } catch(e) {
        // @TODO Gestion de notre erreur
        res.redirect('/setRegister');
      }
      } else {
        
    }
  }
}

module.exports = registerController;
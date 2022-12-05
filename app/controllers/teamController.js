const { Team } = require("../models");


teamController = {
    async list(req, res) {
        const team = await Team.findAll();
        res.render('setTeam', { team });
    },
    async update(req,res) {
        team = req.body
        await Team.update({ target: team.target, sentence: team.sentence }, {
            where: {
               id: '37c62bde-35cf-4e72-b61a-821d801877d0'
            }
          });
          res.redirect('/setTeam');
    
    }
}


module.exports = teamController;
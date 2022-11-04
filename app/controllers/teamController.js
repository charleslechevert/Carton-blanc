const { Team } = require("../models");


teamController = {
    async list(req, res) {
        const team = await Team.findAll();
        res.render('setTeam', { team });
    },
    async update(req,res) {
        team = req.body
        await Team.update({ target: team.target }, {
            where: {
               id: 1
            }
          });
          res.redirect('/setTeam');
    
    }
}


module.exports = teamController;
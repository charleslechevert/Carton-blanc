const dataMapper = require("../dataMapper");
const { Team } = require("../models");


const homeController = {
    async home (req,res) {
        const sumPenalties = await dataMapper.sumPenalties();
        const sumPenaltiesPaid = await dataMapper.sumPenaltiesPaid();
        const starPlayer = await dataMapper.starPlayer();
        team = {}
        team = await Team.findAll();


        
        res.render("index", { sumPenalties , starPlayer, team, sumPenaltiesPaid })
        },
    

};

module.exports = homeController;
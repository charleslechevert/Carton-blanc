const dataMapper = require("../dataMapper");


const homeController = {
async penaltyList (req,res) {
    const penalties = await dataMapper.findPenalties();
    res.render("penaltylist", {penalties})
    },
async registerList (req,res) {
    const registers = await dataMapper.findRegisters();
    console.log(registers)
    res.render("registerlist", {registers});
    },
    async home (req,res) {
        const sumPenalties = await dataMapper.sumPenalties();
        const sumPenaltiesPaid = await dataMapper.sumPenaltiesPaid();
        console.log("CHECK")
        console.log(sumPenaltiesPaid)
        res.render("home", { sumPenalties, sumPenaltiesPaid })
    },
    async playerRanking (req,res) {
        const sumPlayers = await dataMapper.sumPlayers();
        res.render("playerRanking", { sumPlayers })
        
    }

};





module.exports = homeController;
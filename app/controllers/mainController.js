const dataMapper = require("../dataMapper");

const mainController = {
    async amountByPlayer (req,res) {
        const sumPlayers = await dataMapper.amountByPlayer();
        res.render("playerRanking", {sumPlayers})
        },
    async penaltyList (req,res) {
        const penalties = await dataMapper.findPenalties();
        res.render("penaltyList", {penalties})
        },
    async registerList (req,res) {
        const registers = await dataMapper.findRegisters();
        console.log(registers)
        res.render("registerList", {registers});
        },
        async statsByType (req,res)  {
            const statsByType = await dataMapper.statByType();
            res.render("stats", { statsByType })
        },

};

module.exports = mainController;
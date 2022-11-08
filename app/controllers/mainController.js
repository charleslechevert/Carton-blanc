const dataMapper = require("../dataMapper");
const { Penalty } = require("../models");

const mainController = {
    async amountByPlayer (req,res) {
        const sumPlayers = await dataMapper.amountByPlayer();
        res.render("playerRanking", {sumPlayers})
        },
    async penaltyList (req,res) {
        const penalties = await Penalty.findAll({where:{active : true}});
        res.render("penaltyList", {penalties})
        },
    async registerList (req,res) {
        const registers = await dataMapper.findRegisters();
        res.render("registerList", {registers});
        },
        async statsByType (req,res)  {
            const statsByType = await dataMapper.statByType();
            res.render("stats", { statsByType })
        },

};

module.exports = mainController;
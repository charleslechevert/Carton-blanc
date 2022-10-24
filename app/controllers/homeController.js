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
        const starPlayer = await dataMapper.starPlayer();
        const settings = await dataMapper.findSettings();
        
        
        res.render("home", { sumPenalties, sumPenaltiesPaid, starPlayer, settings})
    },
    async playerRanking (req,res) {
        const sumPlayers = await dataMapper.sumPlayers();
        console.log(sumPlayers)
        res.render("playerRanking", { sumPlayers })
        
    },
    async stats (req,res)  {
        const statsByType = await dataMapper.statByType();
        res.render("stats", { statsByType })
    },
    async checkout (req,res) {
        const players = await dataMapper.findPlayers();
        res.render("checkout", { players })
    },

    async addCheckout (req,res) {
        const checkout = req.body;
        console.log('CHECK')
        console.log(checkout.pseudo_player)
        const playerAmountDue = await dataMapper.findPlayerAmountDue(checkout.pseudo_player);
        res.render("checkout2", { playerAmountDue })
    },
    async connect (req,res) {
        res.render("connect")
    }


};




module.exports = homeController;
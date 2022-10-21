const dataMapper = require("../dataMapper");
const typeOptions = require('../typeOptions');

const adminController = {
    async setPlayer (req,res) {
      const players = await dataMapper.findPlayers();
      res.render("setPlayer", { players })
    },

    async deleteOnePlayer (req,res) {
      const playerID = parseInt(req.params.id);
      console.log(playerID);
      const deletedPlayer = await dataMapper.deletePlayer(playerID);
      res.redirect(`/setplayer`);
    },

    async setPenalty (req,res) {
      const penalties = await dataMapper.findPenalties();
      res.render("setPenalty", { penalties , typeOptions })

    },

    async deleteOnePenalty (req,res) {
      const penaltyID = parseInt(req.params.id);
      console.log(penaltyID);
      const deletedPenalty = await dataMapper.deletePenalty(penaltyID);
      res.redirect(`/setpenalty`);
    },

    async setRegister (req,res) {
      const players = await dataMapper.findPlayers();
      const penalties = await dataMapper.findPenalties();
      const registers = await dataMapper.findRegisters();
      res.render("setRegister", { players, penalties, registers })

    },

    async deleteOneRegister (req,res) {
      const registerID = parseInt(req.params.id);
      const deletedRegister = await dataMapper.deleteRegister(registerID);
      res.redirect(`/setregister`);
    },

    async setPayment (req,res) {
      const registers = await dataMapper.findRegistersNotPaid();
      res.render("setPayment", { registers})

    },

    async settings (req,res) {
      const settings = await dataMapper.findSettings();
      console.log("CHECK")
      console.log(settings)
      res.render("settings", { settings });

    },
  
    async addPlayerAndRedirect (req, res) {
      const player = req.body; // { promo_id, first_name, last_name, github_username } // On récupére les info de l'étudiant à insérer ie. On récupère les info du formulaire !
      // Controle des inputs ! On vérifie que tous les champs sont présents avant d'insérer en BDD.
      // C'est le rôle du controlleur
      // Ici on le fait pas, mais j'attire votre attention.
  
      const insertedPlayer = await dataMapper.insertOnePlayer(player); // On va créer une fonction dans le DATAMAPPER qui a partir d'information sur un étudiant l'insère en BDD
      console.log("Un étudiant a été inséré avec l'ID", insertedPlayer);
  
      // Option 1 : l'ID de la promo, je la connais, elle est où ?
      res.redirect(`/setplayer`);
    },
    async addPenaltyAndRedirect (req, res) {
      const penalty = req.body; // { promo_id, first_name, last_name, github_username } // On récupére les info de l'étudiant à insérer ie. On récupère les info du formulaire !
      console.log(penalty)
      // Controle des inputs ! On vérifie que tous les champs sont présents avant d'insérer en BDD.
      // C'est le rôle du controlleur
      // Ici on le fait pas, mais j'attire votre attention.
  
      const insertedPenalty = await dataMapper.insertOnePenalty(penalty); // On va créer une fonction dans le DATAMAPPER qui a partir d'information sur un étudiant l'insère en BDD
      console.log("Un joueur a été inséré avec l'ID", insertedPenalty);
  
      // Option 1 : l'ID de la promo, je la connais, elle est où ?
      res.redirect(`/setpenalty`);
    },
    async addRegisterAndRedirect (req,res) {
      const register = req.body;
      const insertedRegister = await dataMapper.insertOneRegister(register); // On va créer une fonction dans le DATAMAPPER qui a partir d'information sur un étudiant l'insère en BDD
      console.log("Un registre a été inséré avec l'ID", insertedRegister);
  
      // Option 1 : l'ID de la promo, je la connais, elle est où ?
      res.redirect(`/setregister`);

    },
    async addPaymentAndRedirect (req,res) {
      const register = req.body;
      
      //These lines put the ID of the ticked register in an array
      registerID = []
      values = Object.entries(register)
      for(value of values) {
        registerID.push(value[0])
      }
      
      //These line put the value of the array into a string in order to fit with SQL synthax requirement.
      registerIDforSQL = ""
      for(value in registerID) {
        if(value != (registerID.length -1)) {
        registerIDforSQL =  registerIDforSQL + `${registerID[value]}, `
        } else {
          registerIDforSQL =  registerIDforSQL + `${registerID[value]}`
        }
      }
      
      const settlePayment = await dataMapper.settlePaymentAndRedirect(registerIDforSQL); // On va créer une fonction dans le DATAMAPPER qui a partir d'information sur un étudiant l'insère en BDD
      res.redirect(`/setpayment`);
    }, 
    async addSettingsAndRedirect (req,res) {
      let setting = req.body;
      
      //This line manage cases where apostrophes are enterer by the user. Apsotrophe need to be transformed by double apostrophe in order to be read.
      setting.target = setting.target.replace(/'/g, "''");
      const insertSetting = await dataMapper.insertSettings(setting);

      res.redirect(`/settings`);

    }

    
  };

module.exports = adminController;
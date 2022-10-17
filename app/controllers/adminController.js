const dataMapper = require("../dataMapper");
const typeOptions = require('../typeOptions');

const adminController = {
    async setPlayer (req,res) {
      const players = await dataMapper.findPlayers();
      res.render("setPlayer", { players })
    },

    async setPenalty (req,res) {
      const penalties = await dataMapper.findPenalties();
      res.render("setPenalty", { penalties , typeOptions })

    },
    async setRegister (req,res) {
      const players = await dataMapper.findPlayers();
      const penalties = await dataMapper.findPenalties();
      res.render("setRegister", { players, penalties })

    },
  
    async addPlayerAndRedirect (req, res) {
      const player = req.body; // { promo_id, first_name, last_name, github_username } // On récupére les info de l'étudiant à insérer ie. On récupère les info du formulaire !
      console.log(player)
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
    }
  };

module.exports = adminController;
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Player extends Model {}

// On initialise ensuitre notre class en lui passant deux objets
// Le premier est la définition de mes champs (propriétés)
// Le deuxième est un objet d'option (voir la documentation pour plus d'info), nous prendront l'habitude de toujours lui passé la connection à la BDD (`sequelize`) ainsi que de spécifier le nom de la table
Player.init({
  /*id: {
    primaryKey: true,
    type: DataTypes.UUID
  },*/
  fname: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lname: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  pseudo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },

}, {
  sequelize,
  tableName: 'player'
});

module.exports = Player;



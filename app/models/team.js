const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Team extends Model {}

// On initialise ensuitre notre class en lui passant deux objets
// Le premier est la définition de mes champs (propriétés)
// Le deuxième est un objet d'option (voir la documentation pour plus d'info), nous prendront l'habitude de toujours lui passé la connection à la BDD (`sequelize`) ainsi que de spécifier le nom de la table
Team.init({
  full_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  short_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  admin_password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  target: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  sentence: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },

}, {
  sequelize,
  tableName: 'team'
});

module.exports = Team;
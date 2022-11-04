const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Penalty extends Model {}

// On initialise ensuitre notre class en lui passant deux objets
// Le premier est la définition de mes champs (propriétés)
// Le deuxième est un objet d'option (voir la documentation pour plus d'info), nous prendront l'habitude de toujours lui passé la connection à la BDD (`sequelize`) ainsi que de spécifier le nom de la table
Penalty.init({
  type: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },

}, {
  sequelize,
  tableName: 'penalty'
});

module.exports = Penalty;

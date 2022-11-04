const { DataTypes, Model } = require('sequelize');
const sequelize = require("../database");

class Register extends Model {}

// On initialise ensuitre notre class en lui passant deux objets
// Le premier est la définition de mes champs (propriétés)
// Le deuxième est un objet d'option (voir la documentation pour plus d'info), nous prendront l'habitude de toujours lui passé la connection à la BDD (`sequelize`) ainsi que de spécifier le nom de la table
Register.init({
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  paid_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },

}, {
  sequelize,
  tableName: 'register'
});

module.exports = Register;
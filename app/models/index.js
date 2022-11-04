const Penalty = require("./penalty");
const Player = require("./player");
const Register = require("./register");
const Team = require("./team");


// Team&&Player
Team.hasMany(Player, {
  foreignKey: 'team_id',
  as: 'players'
});

Player.belongsTo(Team, {
  foreignKey: {
    name: 'team_id',
    allowNull: false
  },
  as: 'team'
});

// Register&&Player
Player.hasMany(Register, {
  foreignKey: 'player_id',
  as: 'registers'
});

Register.belongsTo(Player, {
  foreignKey: {
    name: 'player_id',
    allowNull: false
  },
  as: 'player'
});

// Register&&Penalty
Penalty.hasMany(Register, {
    foreignKey: 'penalty_id',
    as: 'registers'
  });
  
  Register.belongsTo(Penalty, {
    foreignKey: {
      name: 'penalty_id',
      allowNull: false
    },
    as: 'penalty'
  });



module.exports = {
  Penalty,
  Player,
  Register,
  Team
}

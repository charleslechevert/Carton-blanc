const db = require("./database");



  async function amountByPlayer() {
    const result = await db.query(
      `SELECT player.pseudo, SUM(penalty.amount) FROM register INNER JOIN player on register.player_id = player.id INNER JOIN penalty on register.penalty_id = penalty.id WHERE register.active = true GROUP BY player.pseudo  ORDER BY SUM(penalty.amount) DESC;`)
    console.log('CHECKU')
    console.log(result[0])
    return result[0];

  }

  async function findPenalties() {
    const result = await db.query("SELECT * FROM penalty WHERE active=true ORDER BY amount DESC;");
    
    const penalties = result[0];
    console.log('CHHEEEEECK')
    console.log(penalties)
    
    return penalties;
  }

  async function findRegisters() {
    const result = await db.query("SELECT register.date, register.paid_status, player.pseudo, penalty.type, register.descr FROM register INNER JOIN player on register.player_id = player.id INNER JOIN penalty on register.penalty_id = penalty.id WHERE register.active=true ORDER BY register.date DESC;")
    console.log(result)
    const registers = result[0];
    return registers;
  }

  async function statByType() {
    const result = await db.query(
      "SELECT penalty.type, SUM(penalty.amount) FROM register INNER JOIN player on register.player_id = player.id INNER JOIN penalty on register.penalty_id = penalty.id WHERE register.active = true GROUP BY penalty.type ORDER BY SUM(penalty.amount) DESC;")
    return result[0];
  }

  async function sumPenalties() {
    const result = await db.query(
      "SELECT SUM(penalty.amount) FROM register INNER JOIN player on register.player_id = player.id INNER JOIN penalty on register.penalty_id = penalty.id WHERE register.active = true;")
    return result[0];
  }

  async function sumPenaltiesPaid() {
    const result = await db.query(
      "SELECT SUM(penalty.amount) FROM register INNER JOIN player on register.player_id = player.id INNER JOIN penalty on register.penalty_id = penalty.id WHERE register.paid_status = true")
    return result[0];
  }

  async function starPlayer() {
    const result = await db.query(
      `SELECT player.pseudo, SUM(penalty.amount) FROM register INNER JOIN player on register.player_id = player.id INNER JOIN penalty on register.penalty_id = penalty.id WHERE register.active = true GROUP BY player.pseudo ORDER BY SUM(penalty.amount) DESC LIMIT 1;`)
    console.log(result)
    console.log(result[0])
    return result[0];

  }
  async function teamTarget() {
    const result = await db.query(
        `SELECT target FROM TEAM;`)
        console.log("CHECK")
        console.log(result[0])
        return result[0]
    
  }


  


  

module.exports = {
    amountByPlayer,
    findPenalties,
    findRegisters,
    statByType,
    sumPenalties,
    sumPenaltiesPaid,
    starPlayer,
    teamTarget
    
};
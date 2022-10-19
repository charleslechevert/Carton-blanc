const db = require("./database");

async function findPlayers() {
  const result = await db.query("SELECT * FROM player;");
  const players = result.rows;
  return players;
}

async function findPenalties() {
  const result = await db.query("SELECT * FROM penalty;");
  const penalties = result.rows;
  return penalties;
}

async function findRegisters() {
  const result = await db.query("SELECT * FROM register;")
  const registers = result.rows;
  return registers;
}



async function insertOnePlayer(player) { // Note, on peut aussi destructuré au niveau du paramètre
    var { fname, lname, pseudo, email } = player;

    pseudo = pseudo.toUpperCase() 
    console.log(pseudo)
  
    const result = await db.query( // Construire la requête pour insérer un étudiant dans la BDD
      `INSERT INTO "player" 
        ("fname", "lname", "pseudo", "email")
      VALUES 
        ($1, $2, $3, $4)
      RETURNING *;
      `, [fname, lname, pseudo, email]);
    // Je veux retourner tout l'étudiant inséré
    return result.rows[0];
  }

  async function deletePlayer(playerID) { // Note, on peut aussi destructuré au niveau du paramètre
    const result = await db.query( // Construire la requête pour insérer un étudiant dans la BDD
      `DELETE FROM player WHERE id=${playerID};`)
    // Je veux retourner tout l'étudiant inséré
    return result.rows[0];
  }



  async function insertOnePenalty(penalty) { // Note, on peut aussi destructuré au niveau du paramètre
    const { type, amount } = penalty;
  
    const result = await db.query( // Construire la requête pour insérer un étudiant dans la BDD
      `INSERT INTO "penalty" 
        ("type", "amount")
      VALUES 
        ($1, $2)
      RETURNING *;
      `, [type, amount]);
    // Je veux retourner tout l'étudiant inséré
    return result.rows[0];
  }

  async function deletePenalty(penaltyID) { // Note, on peut aussi destructuré au niveau du paramètre
    const result = await db.query( // Construire la requête pour insérer un étudiant dans la BDD
      `DELETE FROM penalty WHERE id=${penaltyID};`)
    // Je veux retourner tout l'étudiant inséré
    return result.rows[0];
  }

  async function insertOneRegister(register) {
  const { type, player } = register;
  
  //Thanks to this line, we can populate the penalty_amount column despite the fact the user didn't input it by itself" GOOD PRACTICE IDK
  const amount = await db.query(`SELECT amount FROM penalty WHERE type='${type}';`);
  

  const today = new Date();
  const result = await db.query( // Construire la requête pour insérer un étudiant dans la BDD
      `INSERT INTO "register" 
        ("penalty_type", "player_pseudo","date","penalty_amount")
      VALUES 
        ($1, $2,$3, $4)
      RETURNING *;
      `, [type, player,today, amount.rows[0].amount]);
  
  }

  async function deleteRegister(registerID) { // Note, on peut aussi destructuré au niveau du paramètre
    const result = await db.query( // Construire la requête pour insérer un étudiant dans la BDD
      `DELETE FROM register WHERE id=${registerID};`)
    // Je veux retourner tout l'étudiant inséré
    return result.rows[0];
  }

  async function sumPenalties() {
    const result = await db.query(
      "SELECT sum(penalty_amount) FROM register;")
    return result.rows[0];
  }

  async function sumPenaltiesPaid() {
    const result = await db.query(
      "SELECT sum(penalty_amount) FROM register WHERE paid_status='true';")
    return result.rows[0];
  }

  async function sumPlayers() {
    const result = await db.query(
      "SELECT player_pseudo, sum(penalty_amount) FROM register GROUP BY player_pseudo;")
    return result.rows[0];
  }

  

module.exports = {
    insertOnePlayer,
    insertOnePenalty,
    insertOneRegister,
    findPlayers,
    findPenalties,
    findRegisters,
    deletePlayer,
    deletePenalty,
    deleteRegister,
    sumPenalties,
    sumPenaltiesPaid,
    sumPlayers
};
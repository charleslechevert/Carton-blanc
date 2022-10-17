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



async function insertOnePlayer(player) { // Note, on peut aussi destructuré au niveau du paramètre
    const { fname, lname, pseudo, email } = player;
  
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


module.exports = {
    insertOnePlayer,
    insertOnePenalty,
    findPlayers,
    findPenalties
};
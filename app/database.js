// 1. require le module
const pg = require("pg");

// 2. Créer un client
const client = new pg.Client(process.env.PG_URL); // On oublie pas d'ajouter la variable PG_URL à notre .env !

// 3. Connecter le client
client.connect();

// 4. Exporter le client connecté
module.exports = client;
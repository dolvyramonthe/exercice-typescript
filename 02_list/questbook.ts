const fs = require('fs');

// Vérifiez si le fichier JSON est spécifié en argument de la ligne de commande
const jsonFile = process.argv[2];

if (!jsonFile) {
  console.error("You must provide the path to the questbook JSON file.");
  process.exit(1);
}

// Lire le contenu du fichier JSON
fs.readFile(jsonFile, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the JSON file: " + err.message);
    process.exit(1);
  }

  try {
    // Parsez le contenu JSON en un tableau d'objets
    const quests = JSON.parse(data);

    // Parcourez le tableau et affichez l'identifiant et le nom de chaque quête
    quests.forEach((quest, index) => {
      console.log(`#${quest.id} ${quest.name}`);
    });
  } catch (error) {
    console.error("Error parsing JSON data: " + error.message);
    process.exit(1);
  }
  });
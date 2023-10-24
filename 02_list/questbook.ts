const fs = require('fs');
const command = process.argv[2];
const pathJson = process.argv[process.argv.length - 1];


try { 
 const content = fs.readFileSync(pathJson, 'utf-8');
 const contentObjet = JSON.parse(content);

 if (command === '--list') {
  //console.log("Using list.");
  for (const quest of contentObjet ){
    console.log(`#${quest.id} ${quest.name}`)
}
 
} else if (command === '--info') {
  console.log("Using info.");

} else if (command === '--add') {
  console.log("Using add."); 
} 
}
catch (error) {
  console.error("Wrong use of the program."); 
}

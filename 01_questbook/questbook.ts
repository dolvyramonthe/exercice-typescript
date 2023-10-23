const fs = require('fs');
const args: string[] = process.argv.slice(3);
const command: string = args[2];

if (command === "--list") {
  console.log("Using list.");

} else if (command === "--info") {
  console.log("using info.");

}else if (command === "--add"){
  console.log("using add.")
}else{
   console.error("Wrong use of the program.") 
}
  

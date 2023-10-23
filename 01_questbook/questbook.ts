
const command = process.argv[2];

export default function ma_command (){
  if (command === "--list") {
  console.log("Using list.");

} else if (command === "--info") {
  console.log("using info.");

}else if (command === "--add"){
  console.log("using add.")
}else{
   console.error("Wrong use of the program.") 
}
  
};

 ma_command();

  

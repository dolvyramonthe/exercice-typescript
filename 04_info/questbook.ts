const fs = require('fs');
import { completeState,quest } from "./lib";

export function info(json:string, id:number){
    const filecontent = fs.readFileSync(json, 'utf-8');
    const jsonObject : quest[] = JSON.parse(filecontent);
    let count = 0;
    for(const file of jsonObject){ 
    if (file.id === id){
        select(file,file.id);
        count ++;
    }
    } if (count === 0){
        console.log("This quest doesn't exist.");
    }
}

export function select(file: quest, id: number){
if (file.id === id)
console.log(`========================================`);
console.log(`#${file.id} ${file.name} (${file.quest_type} quest)`);
console.log(`========================================`);
console.log(`Given by ${file.quest_giver}`);
if (file.completion_state === 1){  
console.log(`Completed since the ${file.end_date}.`);
} else if(file.completion_state === 0){
console.log("Currently ongoing.")
} else{
    console.log(`Failed the ${file.end_date}.`);
}
console.log(`========================================`);
console.log(`Goal: ${file.description}`);
if (file.name === file.reward){
    console.log('Reward: ---');
} else {
    console.log(`Reward: ${file.reward}`);
}
return;
}

import { argv } from "process";
const fs = require('fs');
import { completeState,quest } from "./lib";

export default function add(json,argv){

    const filecontent = fs.readFileSync(json, 'utf-8');
    const jsonObject : quest[] = JSON.parse(filecontent);

    let quest:quest={
        id :0,
        name: "",
        description:"",
        quest_type:"",
        completion_state:0,
        quest_giver : "",
        start_date : "",
        end_date : "",
        reward : "", 
    }
    quest.id = ((jsonObject[jsonObject.length-1].id+1))
    quest.name = argv.at(argv.indexOf('-name')+1);
    quest.description= argv.at(argv.indexOf('-desc')+1);
    quest.quest_type= argv.at(argv.indexOf('-type')+1);
    quest.completion_state= +argv.at(argv.indexOf('-completion')+1);
    quest.quest_giver = argv.at(argv.indexOf('-giver')+1);
    quest.start_date = argv.at(argv.indexOf('-start_date')+1);
    quest.end_date = argv.at(argv.indexOf('-end_date')+1);
    quest.reward = argv.at(argv.indexOf('-reward')+1);
    jsonObject.push(quest);
    let chaineJSON = JSON.stringify(jsonObject);
    fs.writeFileSync(json,chaineJSON);

}

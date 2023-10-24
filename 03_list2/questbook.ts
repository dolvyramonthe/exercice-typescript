const fs = require('fs');
const args = process.argv.slice(2);
const command = args[0];
try {
if (command === "--list") {
    const jsonFilePath = args[1];

    if (!jsonFilePath) {
        console.error("Please provide the path to the quest JSON file.");
    } else {
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        const quests = JSON.parse(data);
        if (Array.isArray(quests)) {
            console.log("=== Ongoing ===");
            quests.forEach((quest, index) => {
                if (quest.completion_state === 0) {
                    console.log(`#${quest.id} ${quest.name}`);
                }
            })
            console.log("=== Complete ===");
            quests.forEach((quest, index) => {
                if (quest.completion_state === 1) {
                    console.log(`#${quest.id} ${quest.name}`);
                }
            })
            console.log("=== Failed ===");
            let failed: string[] = []
            quests.forEach((quest, index) => {
                if (quest.completion_state == 2) {
                    failed.push(`#${quest.id} ${quest.any}`);
                    console.log(`#${quest.id} ${quest.name}`);
                }else {
                    if(quest.id === quests.length) {
                        if (quest.completion_state !== 2 && failed.length === 0 ) {
                            console.log("None");
                        }
                    }
                }
            })
        
        }
}


} else if (command === "--info") {
    console.log("Using info.");
} else if (command === "--add") {
    console.log("Using add.");
} else {
    console.error("Wrong use of the program.");
} 
} catch (error) {
    console.error("Wrong use of the program.");
}

const fs = require('fs');

function displayQuestInfo(questId, questbookFile) {
  try {
    const questbookData = JSON.parse(fs.readFileSync(questbookFile, 'utf8'));

    const quest = questbookData.find(entry => entry.id === questId);

    if (!quest) {
      console.log("This quest doesn't exist.");
      return;
    }

    console.log('========================================');
    console.log(`#${quest.id} ${quest.name} (${quest.quest_type} quest)`);
    console.log('========================================');
    console.log(`Given by ${quest.quest_giver}`);
    
    if (quest.completion_state === 1) {
      console.log(`Completed from ${quest.start_date} to ${quest.end_date}.`);
    } else if (quest.completion_state === 0) {
      console.log('Currently ongoing.');
    } else if (quest.completion_state === 2) {
      console.log(`Failed from ${quest.start_date} to ${quest.end_date}.`);
    }

    console.log('========================================');
    console.log(`Goal: ${quest.description}`);
    console.log(`Reward: ${quest.reward || '---'}`);
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

if (process.argv.length !== 5) {
  console.log('Usage: node questbook --info <questId> <questbook.json>');
} else {
  const questId = parseInt(process.argv[3], 10);
  const questbookFile = process.argv[4];
  displayQuestInfo(questId, questbookFile);
}
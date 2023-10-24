
const fs = require('fs');

const filePath = 'questbook.json'; 
const questBooks = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const cliCommand = process.argv.slice(2);

if (cliCommand.length === 3) {
  const id = parseInt(cliCommand[1], 10);

  if (isNaN(id) || id < 1 || id > questBooks.length) {
    console.error("Invalid quest ID.");
  } else {
    const nowDate = new Date();
    const formattedDate = formatDate(nowDate);

    switch (cliCommand[0]) {
      case '--valid':
        questBooks[id - 1].completion_state = 1;
        questBooks[id - 1].end_date = formattedDate;
        break;
      case '--fail':
        questBooks[id - 1].completion_state = 2;
        questBooks[id - 1].end_date = formattedDate;
        break;
      default:
        console.error("Invalid command. Use --valid or --fail.");
        break;
    }

    try {
      fs.writeFileSync(filePath, JSON.stringify(questBooks, null, 2), { encoding: 'utf-8', flag: 'w' });
    } catch (err) {
      console.error(err);
    }
  }
} else {
  console.error("Wrong use of the program.");
}

function formatDate(date) {
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
}

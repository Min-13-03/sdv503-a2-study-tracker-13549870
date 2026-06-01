const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const sessions = [];

function showMenu() {
    console.log("\n=== Study Tracker ===");
    console.log("1. Add Study Session");
    console.log("2. List Sessions");
    console.log("3. Show Total Minutes");
    console.log("4. Exit");
    rl.question("Choose an option: ", (choice) => {
        switch (choice.trim()) {
            case "1":
                addSession();
                break;
            case "2":
                listSessions();
                break;
            case "3":
                showTotalMinutes();
                break;
            case "4":
                exitProgram();
                break;
            default:
                console.log("Error: Invalid menu option.");
                showMenu();
        }
    });
}
}

function addSession() {
    rl.question("Enter study topic: ", (topic) => {
        if (!topic.trim()) {
            console.log("Error: Topic cannot be empty.");
            return showMenu();
        }

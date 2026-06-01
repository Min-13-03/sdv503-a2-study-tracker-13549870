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

let printOutput = (choice, output) => {
  output.innerHTML = choice;
};
let userPoints = 0;
let machinePoints = 0;
let tries = 0;
let storeUserChoice = (user) => {
  document.getElementById("roundWinner").innerHTML = "";
  tries += 1;
  let userChoice = user.getAttribute("value");
  let userOutput = document.getElementById("userChoice");
  printOutput(userChoice, userOutput);
  console.log(userChoice);

  let machineChoice = Math.floor(Math.random() * 3);
  switch (machineChoice) {
    case 0:
      machineChoice = "rock";
      break;
    case 1:
      machineChoice = "paper";
      break;
    default:
      machineChoice = "scissors";
      break;
  }
  let machineOutput = document.getElementById("machineChoice");
  printOutput(machineChoice, machineOutput);
  console.log(machineChoice);
  if (
    (userChoice === "rock" && machineChoice == "paper") ||
    (userChoice === "paper" && machineChoice == "scissors") ||
    (userChoice === "scissors" && machineChoice == "rock")
  ) {
    document.getElementById("announcement").innerHTML = "Machine wins!";
    machinePoints += 1;
    console.log("Machine points: " + machinePoints);
  } else if (userChoice === machineChoice) {
    document.getElementById("announcement").innerHTML = "Try again!";
    machinePoints += 0;
    userPoints += 0;
  } else {
    document.getElementById("announcement").innerHTML = "You win!";
    userPoints += 1;
    console.log("Your points: " + userPoints);
  }
  console.log(userPoints + " " + machinePoints);
  if (tries > 3) {
    tries = 1;
  } else if (tries === 3) {
    if (userPoints < machinePoints) {
      document.getElementById("roundWinner").innerHTML =
        "Machine wins this round!";
      console.log("Machine wins this round!");
    } else if (userPoints === machinePoints) {
      document.getElementById("roundWinner").innerHTML = "You got a tie!";
      console.log("You got a tie!");
    } else {
      document.getElementById("roundWinner").innerHTML = "You win this round!";
      console.log("You win this round!");
    }
    machinePoints = 0;
    userPoints = 0;
  }
  console.log("round " + tries);
};

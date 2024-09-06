let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  enableBoxes();
};

resetButton.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("WINNER!!!");
        disableBoxes();
        showWinnerModal(pos1); // Display the winner modal
      }
    }
  }
};
const modal = document.getElementById("winner-modal");
const winnerMessage = document.getElementById("winner-message");
const closeModal = document.getElementsByClassName("close")[0];

// Function to show the winner modal
const showWinnerModal = (winner) => {
  winnerMessage.innerText = `${winner} is the winner!`;
  modal.style.display = "block";
};

// Close the modal when the close button is clicked
closeModal.onclick = () => {
  modal.style.display = "none";
};

// Close the modal if clicked outside of it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

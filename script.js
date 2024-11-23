

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

// Function to handle cell click
function handleCellClick(cell) {
  const cellIndex = cell.target.id.split('-')[1];
  if (board[cellIndex] === '' && !gameOver) {
    board[cellIndex] = currentPlayer;
    cell.target.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Function to check winner
function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const condition of winConditions) {
    if (
      board[condition[0]] !== '' &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[0]] === board[condition[2]]
    ) {
      gameOver = true;
      alert(`Player ${board[condition[0]]} wins!`);
    }
  }
}

// Function to reset game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.textContent = '';
  });
}

// Get elements
const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');

// Add event listeners
cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});
resetBtn.addEventListener('click', resetGame);
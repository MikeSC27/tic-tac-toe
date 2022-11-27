import './App.css';
import {useState} from 'react'
import Square from './components/Square';



function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  // const [tieGame, setTieGame] = useState(false)
  // const [win, setWin] = useState({winner: "none", state: "none"});

  const pickSquare = (square) => {
    setBoard(board.map((value, index) => {
      if(index == square && value == "") {
        return player;
      }
        return value;
    }))
      if(player == "X") {
        setPlayer("O")
      } else {
        setPlayer("X")
      }
 };

//  const tie = (square) => {
//   if (!square.includes(null))
//     setTieGame(true)
// }

 const calculateWinner = (square) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
    // } else if(square.map(i) => (pickSquare[0, 1, 2, 3, 4, 5, 6, 7, 8] === true))
    // {

    //   (square[a] && square[b] && square[c] === ""){
    //     console.log(square[a])
    //     console.log(square[b])
    //     console.log(square[c])
    //     return "tie"
      // }
    }
    return
  return null;
}
const winner = calculateWinner(board)
let status;
if(winner === "X") {
  status = "Winner Winner Chicken Dinner Player 1"
} else if(winner === "O") {
  status = "Winner Winner Chicken Dinner Player 2"
} else if(winner === "tie") {
  status = "It's a Draw"
}
  else{
    status = ""
  }
  return (
    <>
    <h1>Tic Tac Toe</h1>
    <h2>{status}</h2>
    <div className="App">
      <div className="board">
        <div className="row">
          <Square value={board[0]} pickSquare={() => {pickSquare(0)}} />
          <Square value={board[1]} pickSquare={() => {pickSquare(1)}} />
          <Square value={board[2]} pickSquare={() => {pickSquare(2)}} />
        </div>
        <div className="row">
          <Square value={board[3]} pickSquare={() => {pickSquare(3)}} />
          <Square value={board[4]} pickSquare={() => {pickSquare(4)}} />
          <Square value={board[5]} pickSquare={() => {pickSquare(5)}} />
          </div>
        <div className="row">
          <Square value={board[6]} pickSquare={() => {pickSquare(6)}} />
          <Square value={board[7]} pickSquare={() => {pickSquare(7)}} />
          <Square value={board[8]} pickSquare={() => {pickSquare(8)}} />
        </div>
      </div>
    </div>
    </>
  );
  }

export default App;

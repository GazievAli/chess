import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import Timer from "./components/Timer";
import RightAside from "./components/RightAside";

function App() {
  const [board, setBoard] = useState(new Board());
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [showCoordinates, setShowCoordinates] = useState(false);

  const whitePlayer = new Player(Colors.WHITE);
  const blackPlayer = new Player(Colors.BLACK);

  useEffect(() => {
      restart()
      setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
      const newBoard = new Board();
      newBoard.initCells()
      newBoard.addFigures()
      setCurrentPlayer(whitePlayer)
      setBoard(newBoard);
  }

  function swapPlayer() {
      setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  function handleCoordinatesShow() {
      setShowCoordinates(!showCoordinates);
  }


  return (
      <div className="App">
          <Timer
              currentPlayer={currentPlayer}
              restart={restart}
              handleCoordinates={handleCoordinatesShow}
              showCoordinates={showCoordinates}
          />
          <BoardComponent
              board={board}
              setBoard={setBoard}
              currentPlayer={currentPlayer}
              swapPlayer={swapPlayer}
              showCoordinates={showCoordinates}
          />
          <RightAside board={board} />
      </div>
  );
}

export default App;

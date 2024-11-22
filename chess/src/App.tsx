import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [showCoordinates, setShowCoordinates] = useState(false);

  useEffect(() => {
      restart()
      setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
      const newBoard = new Board();
      newBoard.initCells()
      newBoard.addFigures()
      setCurrentPlayer(new Player(Colors.WHITE))
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
          <div>
              <LostFigures
                  title="Черные фигуры"
                  figures={board.lostBlackFigures}
              />
              <LostFigures
                  title="Белые фигуры"
                  figures={board.lostWhiteFigures}
              />
          </div>
      </div>
  );
}

export default App;

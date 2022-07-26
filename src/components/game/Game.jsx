import { useState, useEffect } from 'react'
import styles from './Game.module.css'
import GameOption from '../gameOption/GameOption'/* Opção de jogo */
import GameInfo from '../gameInfo/GameInfo'/* informação do jogo */
import Score from '../score/Score'
const winnerTable = [/* mesa do vencedor */
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))/* estado do jogo */
  const [currentPlayer, setCurrentPlayer] = useState(-1)/* jogador atual */
  const [winner, setWinner] = useState(0)/* vencedora */
  const [winnerLine, setWinnerLine] = useState([])/* vencedorLinha */
  const [draw, setDraw] = useState(false)/* empate */

  const handleClick = (pos) => {/* lidar com clique */
    if (gameState[pos] === 0 && winner === 0) {
      let newGameState = [...gameState]
      newGameState[pos] = currentPlayer
      setGameState(newGameState)
    }
  }
  const verifyGame = () => {/* verificarJogo */
    winnerTable.forEach((line) => {
      const values = line.map((pos) => gameState[pos])
      const sum = values.reduce((sum, value) => sum + value)
      if (sum === 3 || sum === -3) {
        setWinner(sum / 3)
        setWinnerLine(line)
      }
    })
  }
  const handleReset = () => {/* lidar com Redefinir */
    setGameState(Array(9).fill(0))
    setWinner(0)
    setWinnerLine([])
    setDraw(false)
  }

  const verifyDraw = () => {
    if (gameState.find((value) => value === 0) === undefined && winner === 0) {
      setDraw(true)
    }
  }

  const verifyWinnerLine = (pos) => 
    winnerLine.find((value) => value === pos) !== undefined
  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
    verifyDraw()
  }, [gameState])

  useEffect(() => {
    if (winner !== 0) setDraw(false)
  }, [winner])

  return (
    <>
     <div className={styles.gameContent}>
      <div className={styles.game}>
        {
          gameState.map((value, pos) => 
            <GameOption /* Opção de jogo */
              key={`game-option-pos-${pos}`}
              status={value}
              onClick={() => handleClick(pos)}
              isWinner={verifyWinnerLine(pos)}
              isDraw={draw}
            />
          )
        }
      </div>
      <GameInfo /* Informação do Jogo */
        currentPlayer={currentPlayer}
        winner={winner}
        onReset={handleReset} /* ao reiniciar, lidar com Redefinir */
        isDraw={draw}
      />
    </div>
    <Score />
    </>
  )
}
export default Game
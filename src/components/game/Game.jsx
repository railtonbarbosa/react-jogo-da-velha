import styles from "./Game.module.css"
import { useState, useEffect } from "react"


import GameOption from "../gameOption/GameOption"
import GameInfo from "../gameinfo/Gameinfo"

const winnerTable = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6],
]

function Game () {
  const [gameState, steGameState] = useState (Array(9).fill(0)) //um array de nove posições começando em zero!
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setwinner] = useState(0)

  const handleClick = (pos) => {
     if (gameState [pos] ===0 && winner === 0) {
      let newGameState = [...gameState]
      newGameState [pos] = currentPlayer
      steGameState(newGameState)
   }
     }

     const verfyGame = () => {
       winnerTable.forEach((line)=>{
         const values = line.map ((pos) => gameState[pos])
         const sum = values.reduce ((sum,value)=> sum + value)
         if (sum === 3 || sum === -3) setwinner (sum / 3)
       })
     }

     const handleReset = () => {
        steGameState (Array(9).fill(0))
        setwinner (0)
     }
     
     useEffect (() => {
      setCurrentPlayer(currentPlayer * -1)
      verfyGame ()
     }, [gameState])

  return(
   <div className={styles.gameContent}>
    
      <div className={styles.game}>
           {
             gameState.map((value,pos)=> //usando o map iremos passar por cada uma das posições do array podendo modificalas 
             <GameOption 
                 key={`game-option-pos-${pos}`} //obs:todo elemento dentro   de uma map do react ele sempre precisara ter um id unico !   aqui seria o "key"
                 status={value}
                 onClick={() => handleClick(pos)}
             />
             )
           }
      </div>
      <GameInfo 
      currentPlayer={currentPlayer}
      winner={winner}
      onReset={handleReset}
      />
   </div>
  )
}

export default Game
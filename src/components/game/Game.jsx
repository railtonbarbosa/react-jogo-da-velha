import styles from "./Game.module.css"
import { useState } from "react"

import GameOption from "../gameOption/GameOption"

function Game () {
  const [gameState, steGameState] = useState (Array(9).fill(0))
  return(
   <div className={styles.game}>
    {
      gameState.map((value,pos)=>
      <GameOption 
        key={`game-option-pos-${pos}`}
        status={value}
      />
      )
    }
   </div>
  )
}

export default Game
import styles from "./GameInfo.module.css"
import Icon from "../icon/Icon"
import Buttton from "../button/Button"

function GameInfo ({currentPlayer, winner, onReset}) {
  
  const sholdEnableButton = () => {
    if (winner !== 0) return true
  }
  
  return (

      <div className={styles.gameInfo}>
        {
          winner === 0 &&
            <>
              <h4>próximo a jogar </h4>
              {
                currentPlayer === 1 && <Icon iconName="circle" />
              }
              {
                currentPlayer === -1 && <Icon iconName="x" />
              }
            </>
        }

        {

          winner !== 0 &&
            <>
              <h4>fim de jogo ! campeão:</h4>
              {
                winner === 1 && <Icon iconName="circle" />
              }
              {
                winner === -1 && <Icon iconName="x" />
              }
            </>
        }
        <Buttton
         onClick={onReset}
         disabled={!sholdEnableButton()}
        >
          Reiniciar
        </Buttton>
      </div>

  )

}

export default GameInfo
import styles from "./GameInfo.module.css"
import Icon from "../icon/Icon"
import Buttton from "../button/Button"

function GameInfo ({currentPlayer, winner, onReset, isDraw}) { /* Jogador atual, vencedor, em Reset, é Empate */
  
  const sholdEnableButton = () => { /* mantenha o botão Ativar */
    if (winner !== 0) return true
    if (isDraw) return true
  }
  
  return (

      <div className={styles.gameInfo}>
        {
          !isDraw && winner === 0 &&
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

          !isDraw && winner !== 0 &&
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
        {
          isDraw && <h4>empate!</h4>
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
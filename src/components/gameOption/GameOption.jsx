import styles from "./GameOption.module.css"
import Icon from "../icon/Icon"

const GameIcon = ({iconName}) => <Icon iconName={iconName} size="25px"  />

function GameOption ({status, onClick}) {
  return (
    <div className={styles.gameOption} onClick={onClick}>
      {
        status=== 1 && <GameIcon iconName="circle" size="25px" />
      }
      {
        status=== -1 && <GameIcon iconName="x" size="25px" />
      }
    
    </div>
  )
}

export default GameOption
import Icon from "../icon/Icon"
import styles from "./score.module.css"

function Score () {
  return(
   <>
    <h4>placar:</h4>
    <div className={styles.score}>
      <div className={styles.scorecontent}>
        <Icon iconName="circle" />
        <h2>0</h2>
      </div>
      <div className={styles.scorecontent}>
      <Icon iconName="x" />
      <h2>0</h2>

      </div>
    </div>
   </>
  )
}
export default Score
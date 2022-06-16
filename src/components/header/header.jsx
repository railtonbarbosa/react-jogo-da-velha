import styles from "./Header.module.css"

import Title from "../titile/Title"
import Subtitle from "../subtitle/Subtitle"

function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da velha</Title>
      <Subtitle>criado por Railton Barbosa</Subtitle>
    </div>
  )
}

export default Header
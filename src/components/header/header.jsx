import styles from "./Header.module.css"

import Title from "../titile/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from "../icon/icon"

function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da velha</Title>
      <Subtitle>criado por Railton Barbosa</Subtitle>
      <div className={styles.iconContent}>
        <Icon icoName="github" link="https://github.com/" />
      </div>
    </div>
  )
}

export default Header
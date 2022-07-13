import styles from "./Button.module.css"

function Buttton ({children, onClick, disabled}) {
   return(
     <button 
     className={styles.Buttton} 
     onClick={onClick}
     disabled={disabled}
     >
        {children}
     </button>
   )

}

export default Buttton 
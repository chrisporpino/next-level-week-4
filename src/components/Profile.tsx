import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/chrisporpino.png" alt="Christhopher Porpino"/>
      <div>
        <strong>Christhopher Porpino</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
          </p>
      </div>
    </div>
  )
}
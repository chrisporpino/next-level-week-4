import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/chrisporpino.png" alt="Christhopher Porpino"/>
      <div>
        <strong>Christhopher Porpino</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}
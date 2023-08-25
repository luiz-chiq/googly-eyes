import styles from "./Eye.module.css"

function Eye({x, y}){
    return(
        <div className={styles.sclera}>
                <div className={styles.pupil} style={{left: `${x}%`, top: `${y}%`}}/>
        </div>
    )
}

export default Eye
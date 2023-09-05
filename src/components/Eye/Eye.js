import styles from "./Eye.module.css"
import { useEffect, useState } from "react";

function Eye({x, y, eyeX, eyeY}){
    const [angle, setAngle] = useState(0)
    let hypot = Math.hypot(eyeY - y, eyeX - x)/6
    if (hypot > 20) hypot = 20

    useEffect(() => {
        let an = Math.atan2((eyeX - x), (eyeY - y)) * ((180/ Math.PI))
        setAngle(an*-1 - 90)
    })

    return(
        <div className={styles.sclera} style={{left: `${eyeX}px`, top: `${eyeY}px`}}>
            <div className={styles.inner_sclera} style={{rotate: `${angle}deg`}}>
                <div className={styles.pupil} style={{left: `${20 + hypot}%`}}>
                    <div className={styles.inner_pupil} style={{rotate: `${-angle}deg`}}/>
                </div>
            </div>
        </div>
    )
}

export default Eye
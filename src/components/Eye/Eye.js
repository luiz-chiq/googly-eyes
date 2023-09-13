import { useEffect, useState } from "react";
import { Sclera, Inner_sclera, Pupil, Inner_pupil_div, Inner_pupil_img } from './style'

function Eye({x, y, eyeX, eyeY, color}){
    const [angle, setAngle] = useState(0)
    let hypot = Math.hypot(eyeY - y, eyeX - x)/6
    if (hypot > 20) hypot = 20

    useEffect(() => {
        let an = Math.atan2((eyeX - x), (eyeY - y)) * ((180/ Math.PI))
        setAngle(an*-1 - 90)
        console.log(eyeX, eyeY)
    })



    return(
        <Sclera position_x={eyeX} position_y={eyeY}>
            <Inner_sclera style={{rotate: `${angle}deg`}}>
                {/* <Pupil hypot={hypot}> */}
                <Pupil style={{left: `${20 + hypot}%`}}>
                    {color? <Inner_pupil_img style={{rotate: `${-angle}deg`}} src={color}/> :    
                    <Inner_pupil_div style={{rotate: `${-angle}deg`}}/>}
                </Pupil>
            </Inner_sclera>
        </Sclera>
    )
}

export default Eye
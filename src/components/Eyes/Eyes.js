import Eye from '../Eye/Eye'
import {useState, useEffect} from 'react'
import styles from './Eyes.module.css'

function Eyes({}){
    const [ angle, setAngle ] = useState(0)
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)
    let distancex
    let distancey


    useEffect(() => {
        document.onmousemove = (e) => {
            let x1 = e.pageX;
            let y1 = e.pageY;
            
            var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            
            
            let posx = (x1-(ww/2))
            let posy = (y1-(wh/2))
            let hipo = Math.hypot(posx, posy)
    
            distancex = x1/ww*50
            distancey = y1/wh*50
            
            let distanceMx = Math.abs(distancex - 25)
            let distanceMy = Math.abs(distancey - 25)
            
            setX(distancex);
            setY(distancey);

            document.onmousedown = (e) => {
                console.log("disx:", distancex)
                console.log("disMx:",distanceMx)
                console.log("disy:", distancey)
                console.log(((distanceMx + distanceMy) < 35)?"menor" : "maior")
            }
        }
    })

    return(
        <div className={styles.eyesContainer}>
            <Eye x={x} y={y}/>
            <Eye x={x} y={y}/>
        </div>
    )
}

export default Eyes

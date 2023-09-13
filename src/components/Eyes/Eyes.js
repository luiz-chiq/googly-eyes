import Eye from '../Eye/Eye'
import {useState, useEffect} from 'react'

import brown from './brown.png'
import blue from './blue.png'
import red from './red.png'
import green from './green.png'

// import styles from './Eyes.module.css'

function Eyes({}){
    const [ angle, setAngle ] = useState(0)
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    useEffect(() => {
        document.onmousemove = (e) => {
            setX(e.pageX);
            setY(e.pageY);
        }
    })

    return(
        <div>
            <Eye x={x} y={y} eyeX={350} eyeY={300}/>
            {/* <Eye x={x} y={y} eyeX={520} eyeY={300} color={blue}/>
            <Eye x={x} y={y} eyeX={1250} eyeY={300} color={brown}/>
            <Eye x={x} y={y} eyeX={1420} eyeY={300} color={brown}/>
            <Eye x={x} y={y} eyeX={800} eyeY={300}/>
            <Eye x={x} y={y} eyeX={970} eyeY={300}/>
            <Eye x={x} y={y} eyeX={500} eyeY={600} color={green}/>
            <Eye x={x} y={y} eyeX={670} eyeY={600} color={green}/>
            <Eye x={x} y={y} eyeX={1100} eyeY={600} color={red}/>
            <Eye x={x} y={y} eyeX={1270} eyeY={600} color={red}/> */}
            {/* <Eye x={x} y={y} eyeX={300} eyeY={100}/>
            <Eye x={x} y={y} eyeX={400} eyeY={100}/>
            <Eye x={x} y={y} eyeX={500} eyeY={100}/>
            <Eye x={x} y={y} eyeX={600} eyeY={100}/>
            <Eye x={x} y={y} eyeX={700} eyeY={100}/>
            <Eye x={x} y={y} eyeX={800} eyeY={100}/>
            <Eye x={x} y={y} eyeX={900} eyeY={100}/>
            <Eye x={x} y={y} eyeX={1000} eyeY={100}/>
            <Eye x={x} y={y} eyeX={100} eyeY={200}/>
            <Eye x={x} y={y} eyeX={200} eyeY={200}/>
            <Eye x={x} y={y} eyeX={300} eyeY={200}/>
            <Eye x={x} y={y} eyeX={400} eyeY={200}/>
            <Eye x={x} y={y} eyeX={500} eyeY={200}/>
            <Eye x={x} y={y} eyeX={600} eyeY={200}/>
            <Eye x={x} y={y} eyeX={700} eyeY={200}/>
            <Eye x={x} y={y} eyeX={800} eyeY={200}/>
            <Eye x={x} y={y} eyeX={900} eyeY={200}/>
            <Eye x={x} y={y} eyeX={1000} eyeY={200}/>
            <Eye x={x} y={y} eyeX={100} eyeY={300}/>
            <Eye x={x} y={y} eyeX={200} eyeY={300}/>
            <Eye x={x} y={y} eyeX={300} eyeY={300}/>
            <Eye x={x} y={y} eyeX={400} eyeY={300}/>
            <Eye x={x} y={y} eyeX={500} eyeY={300}/>
            <Eye x={x} y={y} eyeX={600} eyeY={300}/>
            <Eye x={x} y={y} eyeX={700} eyeY={300}/>
            <Eye x={x} y={y} eyeX={800} eyeY={300}/>
            <Eye x={x} y={y} eyeX={900} eyeY={300}/>
            <Eye x={x} y={y} eyeX={1000} eyeY={300}/> */}
        </div>
    )
}

export default Eyes

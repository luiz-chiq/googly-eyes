import Eye from '../Eye/Eye'
import {useState, useEffect} from 'react'
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
            <Eye x={x} y={y} eyeX={700} eyeY={400}/>
            <Eye x={x} y={y} eyeX={870} eyeY={400}/>
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

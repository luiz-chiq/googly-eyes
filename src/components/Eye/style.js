import styled from 'styled-components';

export const Sclera = styled.div`    
border-radius: 50%;
position: absolute;
width: 150px;
left: ${props => props.position_x}px;
top: ${props => props.position_y}px;
height: 150px;
background-color: white;
transform: translate(-50%, -50%);
`
export const Inner_sclera = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
`
// left: ${20 + (hypot => hypot)}%

export const Pupil = styled.div`

    border-radius: 50%;
    position: absolute;
    top: 20%;
    width: 90px;
    height: 90px;
    background-color: black;
`

export const Inner_pupil_div = styled.div`
    border-radius: 50%;
    position: absolute;
    width: 90px;
    height: 90px;
`
export const Inner_pupil_img = styled.img`
    border-radius: 50%;
    position: absolute;
    width: 90px;
    height: 90px;
`
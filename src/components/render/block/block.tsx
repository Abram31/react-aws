import {useLayoutEffect, useState} from "react";

export const Block = () => {
    const [position, setPosition] = useState(0);

    window.addEventListener('scroll', (e)=>{
        setPosition(window.scrollY)
        console.log(window.scrollY)
    })



    return <div style={{height: '200vh'}}>
        <div style={{background: 'red', width: '100px', height: '100px', paddingTop: `${position}px`}}></div>
    </div>
}
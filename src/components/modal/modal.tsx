import {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";

const modalRoot = document.getElementById('modal')

export const Modal = () => {

    const element = useMemo(() => {
        return document.createElement('div')
    }, [])

    useEffect(()=>{
        modalRoot?.appendChild(element)
    })

    return createPortal(
        <div>Modal </div>, element, 'modal'
    )
}
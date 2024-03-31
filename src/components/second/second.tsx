import {createRef, useContext, useEffect, useRef, useState} from "react";
import {store} from "../../store/store";
import {MainContext} from "../../context/context";

export const nameRef = createRef<HTMLHeadingElement>();

export const Second = () => {

    const value = useState(store.getState().value)
    let [num, setValue]: [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] = useState();
    store.subscribe(() => setValue(store.getState().value))
    const name = useContext(MainContext);
    useEffect(() => {
        console.log(nameRef.current?.textContent)
    }, [nameRef])
    return (
        <div>
            <h1>second</h1>
            <h2>{num}</h2>
            <h3 ref={nameRef}>{name?.name}</h3>

        </div>)
}
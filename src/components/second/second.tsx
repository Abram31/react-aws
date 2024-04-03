import {createRef, useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
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

    const [valueInput, setValueInput] = useState('')

    const handleInput = (e: any) => {
        e.preventDefault()
        console.log(e)
        setValueInput(e.target.value)
    }
    const memo = useMemo(() => {
        return valueInput
    }, [valueInput])

    const submit = useCallback((e: any) => {
        e.preventDefault()
        return setValueInput(valueInput)
    }, [valueInput])

    console.log('render component')

    return (
        <div>
            <h1>second</h1>
            <h2>{num}</h2>
            <h3 ref={nameRef}>{name?.name}</h3>
            <input value={memo} onChange={handleInput}></input>
            <button onClick={submit}>Submit</button>
        </div>)
}
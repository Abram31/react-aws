import {useState} from "react";
import {store} from "../../store/store";

export const Second = () => {
    const value = useState(store.getState().value)
    let [num, setValue]: [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] = useState();
    store.subscribe(() =>  setValue(store.getState().value))

    return (
        <div>
            <h1>second</h1>
            <h2>{num}</h2>
        </div>)
}
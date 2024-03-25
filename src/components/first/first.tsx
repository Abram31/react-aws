import styles from "./first.module.scss";
import {incremented, store} from "../../store/store";
import {SetStateAction, useEffect, useState} from "react";
import {Dispatch} from "redux";
import {Second} from "../second/second";

export const First = () => {
    const value = useState(store.getState().value)
    let [num, setValue]: [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] = useState();
    store.subscribe(() =>  setValue(store.getState().value))

    useEffect(()=>{
         setValue(store.getState().value)

    })
    return (
        <section>
            <h1 className={styles.first}>{num}</h1>
            <button onClick={() => store.dispatch(incremented())}> Increment</button>
            <Second/>
        </section>
    )
}
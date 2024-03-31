import styles from "./first.module.scss";
import {incremented, store} from "../../store/store";
import {SetStateAction, useEffect, useState} from "react";
import {nameRef, Second} from "../second/second";
import {MainContext} from "../../context/context";
import {Modal} from "../modal/modal";
import {Wrapper} from "../wrapper/wrapper";
// import { useSelector, useDispatch } from '@reduxjs/toolkit'

export const First = () => {
    const value = useState(store.getState().value)   /// its correct?
    let [num, setValue]: [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] = useState();
    store.subscribe(() => setValue(store.getState().value))
    // const dispatch = useDispatch();
    useEffect(() => {
        setValue(store.getState().value)


    })
    return (
        <MainContext.Provider value={{name: 'Agbar'}}>
            <Wrapper renderBadge={()=><div>renderBadgeParent</div>}>

            <section>
                <h1 className={styles.first}>{num}</h1>
                <button onClick={() => store.dispatch(incremented())}> Increment</button>
                <Second/>
            </section>
                <Second />
            </Wrapper>

        </MainContext.Provider>

    )
}
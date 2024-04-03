import styles from "./first.module.scss";
import {fetchPosts, incremented, store} from "../../store/store";
import {SetStateAction, useEffect, useState} from "react";
import {nameRef, Second} from "../second/second";
import {MainContext} from "../../context/context";
import {Modal} from "../modal/modal";
import {Wrapper} from "../wrapper/wrapper";
import {useDispatch, useSelector} from "react-redux";

export const First = () => {
    const value = useState(store.getState().value)   /// its correct?
    // let [num, setValue]: [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] = useState();
    // store.subscribe(() => setValue(store.getState().value))
    const dispatch = useDispatch();
    const num = useSelector((state: any)=> {
        console.log(state.value)
        return state.value
    })

    useEffect(() => {
        // setValue(store.getState().value)
        // dispatch(fetchPosts())


    }, [])
    return (
        <MainContext.Provider value={{name: 'Agbar'}}>
            <Wrapper renderBadge={()=><div>renderBadgeParent</div>}>

            <section>
                <h1 className={styles.first}>{num}</h1>
                <button onClick={() => dispatch(incremented())}> Increment</button>
                <Second/>
            </section>
                <Second />
            </Wrapper>

        </MainContext.Provider>

    )
}
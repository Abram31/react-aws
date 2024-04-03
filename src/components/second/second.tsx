import {createRef, useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {store} from "../../store/store";
import {MainContext} from "../../context/context";
import {useQuery} from "@apollo/client";
import {ALL_POSTS} from "../../apollo/posts";

export const nameRef = createRef<HTMLHeadingElement>();

export const Second = () => {
    const {data} = useQuery(ALL_POSTS);

    const value = useState(store.getState().value)
    let [num, setValue]: [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>] = useState();
    store.subscribe(() => setValue(store.getState().value))
    const name = useContext(MainContext);

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

            {data?.allPosts.map((post: any) => {
                return <h5>{post.title}</h5>
            })}

        </div>)
}
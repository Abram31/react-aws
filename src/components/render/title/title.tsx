import {useState} from "react";

export const Title = ()=> {
    const [state, setState] = useState('Render')
    return <h2 onClick={() => setState(state.repeat(2))}>{state}</h2>
}
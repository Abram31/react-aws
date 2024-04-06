import {useState} from "react";
import {Title} from "./title/title";

// @ts-ignore
export const Render = ({children}) => {

    return <>
        <Title/>
        <h2>Render</h2>
        {children}
    </>
}
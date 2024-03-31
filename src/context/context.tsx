import {createContext} from "react";

export const MainContext = createContext<{name:string} | null>(null)
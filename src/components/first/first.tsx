import styles from "./first.module.scss";
import {fetchPosts, incremented} from "../../store/store";
import {MainContext} from "../../context/context";
import {Wrapper} from "../wrapper/wrapper";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";

export const First = () => {
    const dispatch = useDispatch();
    const num = useSelector((state: any)=> {
        return state.value
    })
    return (
        <MainContext.Provider value={{name: 'Agbar'}}>
            <Wrapper renderBadge={()=><div>renderBadgeParent</div>}>
            <section>
                <h1 className={styles.first}>{num}</h1>
                <Button variant="outlined" onClick={() => dispatch(incremented())}> Increment</Button>
            </section>
            </Wrapper>

        </MainContext.Provider>

    )
}
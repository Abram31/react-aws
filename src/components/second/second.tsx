import {
    createRef,
    FormEvent,
    FormEventHandler,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import {MainContext} from "../../context/context";
import {useMutation, useQuery} from "@apollo/client";
import {ADD_POST, ALL_POSTS, UPDATE_POST} from "../../apollo/posts";
import {Button, Input, TextField} from "@mui/material";
import {useFormAction} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import {red} from "@mui/material/colors";
import {FormUpdate} from "./FormUpdate/formUpdate";
import {PostsList} from "./PostsList/PostsList";
import {FormAdd} from "./FormAdd/FormAdd";

export const nameRef = createRef<HTMLHeadingElement>();

export const Second = () => {
    const name = useContext(MainContext);
    const [valueInput, setValueInput] = useState('');


    const handleInput = (e: any) => {
        e.preventDefault()
        setValueInput(e.target.value)
    }
    const memo = useMemo(() => {
        return valueInput
    }, [valueInput])

    const submit = useCallback((e: any) => {
        e.preventDefault()
        return setValueInput(valueInput)
    }, [valueInput])


    const [addPost] = useMutation(ADD_POST, {
        // refetchQueries: [{query:ALL_POSTS}]
        update(cache, {data: {createPost}}) {
            // @ts-ignore
            const {allPosts} = cache.readQuery({query: ALL_POSTS});
            console.log('allPosts', allPosts)

            cache.writeQuery({
                query: ALL_POSTS,
                data: {
                    allPosts: [{...createPost, id: createPost.user_id}, , ...allPosts]
                }
            })
        }
    })


    return (
        <div>
            <h1>second</h1>
            <h3 ref={nameRef}>{name?.name}</h3>
            <input value={memo} onChange={handleInput}></input>
            <button onClick={submit}>Submit</button>

            <PostsList/>
            <FormUpdate/>
            <FormAdd/>


        </div>)
}
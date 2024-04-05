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

export const nameRef = createRef<HTMLHeadingElement>();
type InputsUpdatePosts = {
    id: number
    title: string
}
type InputsAddPosts = {
    id: number
    title: string
    views: string
}


export const Second = () => {
    const {data} = useQuery(ALL_POSTS);
    const name = useContext(MainContext);
    const [valueInput, setValueInput] = useState('');
    const {register: updatePostForm, handleSubmit: handleUpdatePost} = useForm<InputsUpdatePosts>();
    const {register: addPostForm, handleSubmit: handleAddPost} = useForm<InputsAddPosts>();


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

    const [updatePost] = useMutation(UPDATE_POST, {
        // refetchQueries: [{query: ALL_POSTS}]
    })
    const [addPost] = useMutation(ADD_POST, {
        // refetchQueries: [{query:ALL_POSTS}]
        update(cache, {data: {createPost}}) {
            console.log('cache',createPost)
            console.log('data',data)
            // @ts-ignore
            const {allPosts} = cache.readQuery({query: ALL_POSTS});
            console.log('allPosts',allPosts)

            cache.writeQuery({
                query: ALL_POSTS,
                data: {
                    allPosts: [{...createPost, id: createPost.user_id}, , ...allPosts]
                }
            })
        }
    })

    const methodUpdatePost = (e: any) => {
        updatePost({
            variables: {
                title: e.title,
                id: e.id
            }
        })
    }
    const methodAddPost = (e: any) => {
        addPost({
            variables: {
                title: e.title,
                user_id: e.id,
                views: e.views || 0,
            }
        })
    }


    return (
        <div>
            <h1>second</h1>
            <h3 ref={nameRef}>{name?.name}</h3>
            <input value={memo} onChange={handleInput}></input>
            <button onClick={submit}>Submit</button>

            {data?.allPosts.map((post: any, index: number) => {
                return <h5 key={index}>{post.title}</h5>
            })}
            <form onSubmit={handleUpdatePost(methodUpdatePost)}>
                <h2>Update Post</h2>
                <TextField {...updatePostForm("id")} label="ID" variant="outlined"/>
                <TextField {...updatePostForm("title")} label="TITLE" variant="outlined"/>
                <Button type='submit' variant="outlined">Update post</Button>
            </form>
            <form onSubmit={handleAddPost(methodAddPost)}>
                <h2>Add post</h2>
                <TextField {...addPostForm("id")} label="ID" variant="outlined"/>
                <TextField {...addPostForm("title")} label="TITLE" variant="outlined"/>
                <Button type='submit' variant="outlined">Update post</Button>
            </form>


        </div>)
}
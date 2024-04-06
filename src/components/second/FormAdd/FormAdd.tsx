import {Button, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useMutation} from "@apollo/client";
import {ADD_POST, ALL_POSTS} from "../../../apollo/posts";
import {useForm} from "react-hook-form";

type InputsAddPosts = {
    id: number
    title: string
    views: string
}

export const FormAdd = () => {
    const {register: addPostForm, handleSubmit: handleAddPost} = useForm<InputsAddPosts>();


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
    const methodAddPost = (e: any) => {
        addPost({
            variables: {
                title: e.title,
                user_id: e.id,
                views: e.views || 0,
            }
        })
    }
    return <form onSubmit={handleAddPost(methodAddPost)}>
        <h2>Add post</h2>
        <TextField {...addPostForm("id")} label="ID" variant="outlined"/>
        <TextField {...addPostForm("title")} label="TITLE" variant="outlined"/>
        <Button endIcon={<AddIcon style={{color: 'red'}}/>} type='submit' variant="outlined">Update
            post</Button>
    </form>
}
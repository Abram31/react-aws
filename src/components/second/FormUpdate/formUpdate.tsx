import {Button, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useForm} from "react-hook-form";
import {useMutation} from "@apollo/client";
import {UPDATE_POST} from "../../../apollo/posts";

type InputsUpdatePosts = {
    id: number
    title: string
}

export const FormUpdate = () => {
    const [updatePost] = useMutation(UPDATE_POST)
    const {register: updatePostForm, handleSubmit: handleUpdatePost} = useForm<InputsUpdatePosts>();
    const methodUpdatePost = (e: any) => {
        updatePost({
            variables: {
                title: e.title,
                id: e.id
            }
        })
    }
    return <form onSubmit={handleUpdatePost(methodUpdatePost)}>
        <h2>Update Post</h2>
        <TextField {...updatePostForm("id")} label="ID" variant="outlined"/>
        <TextField {...updatePostForm("title")} label="TITLE" variant="outlined"/>
        <Button startIcon={<AddIcon/>} type='submit' variant="outlined">Update post</Button>
    </form>
}
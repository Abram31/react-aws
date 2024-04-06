import {useQuery} from "@apollo/client";
import {ALL_POSTS} from "../../../apollo/posts";

export const PostsList = () => {
    const {data} = useQuery(ALL_POSTS);

    return <div>
        {data?.allPosts.map((post: any, index: number) => {
            return <h5 key={index}>{post.title}</h5>
        })}
    </div>
}
import { useEffect, useState } from "react";
import "./posts.module.scss";
import { PostService } from "./data-access/services/Post.service";
import { IPost } from "./data-access/models/Post.model";
import PostCard from "./components/post-card/PostCard";

export default function Posts() {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        PostService.getPosts().then((res) => {
            setPosts(res);
        });
    }, []);

    return <>
        <div>
            <h1>Posts Pages</h1>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
};


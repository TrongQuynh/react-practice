import { useEffect, useState } from "react";
import { IPost } from "src/pages/posts/data-access/models/Post.model";
import { IComment } from "../../data-access/models/Comment.model";
import { CommentService } from "../../data-access/services/Comment.service";
import Comment from "../comment/Comment";
import useDebounce from "src/common/hooks/useDebounce";

interface PostCardProps {
    post: IPost;
}

export default function PostCard({ post }: PostCardProps) {
    const [comments, setComments] = useState<IComment[]>([]);
    const [isShowComments, setIsShowComments] = useState(false);
    const [isLoadingComments, setIsLoadingComments] = useState(false);
    const debounceShowComments = useDebounce(isShowComments, 1000);

    useEffect(() => {
        showComments(debounceShowComments);
        return () => {
            setComments([]);
        }
    }, [debounceShowComments]);

    const showComments = (isShow: boolean) => {
        if (!isShow) {
            setComments([]);
            return;
        }
        setIsLoadingComments(isShow);
        CommentService.getComments({ postId: post.id }).then((res) => {
            setComments(res);
            setIsLoadingComments(false);
        });
    }

    return <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => setIsShowComments(!isShowComments)}>{isShowComments ? "Hide Comments" : "Show Comments"}</button>
        {
            isShowComments &&
            (
                isLoadingComments ? <div>Loading...</div> :
                comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))
            )
        }
    </div>;
};


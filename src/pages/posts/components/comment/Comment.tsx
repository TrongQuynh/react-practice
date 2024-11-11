import { IComment } from "src/pages/posts/data-access/models/Comment.model";

interface CommentProps {
    comment: IComment;
}

export default function Comment({ comment }: CommentProps) {
    return <div style={{ backgroundColor: "gray", padding: "10px", margin: "10px 0" }}>
        <h5>{comment.name} - <span style={{ fontSize: "12px", color: "green" }}>{comment.email}</span></h5>
        <p>{comment.body}</p>
    </div>;
};


import React from "react";
import './comments.css'

const Comment = ({comment}) => {
    const { author, body, replies } = comment.data

    const hasReplies = replies && replies.data && replies.data.children

    return (
        <ul>
            {body && <li className="commentBody">
                {body}
                <p className="commentAuthor">&#8627;   u/{author}</p>
            </li>}
            {hasReplies && replies.data.children.map((reply) => (
                <Comment comment={reply} />
            ))}
        </ul>
    )
}

export default Comment
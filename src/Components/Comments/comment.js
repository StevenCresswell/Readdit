import React from "react";

const Comment = ({comment}) => {
    const { author, body, replies } = comment.data

    const hasReplies = replies && replies.data && replies.data.children

    return (
        <ul>
            {body.length>0 && <li className="commentBody">
                {body}
                <p className="commentAuthor">{author}</p>
            </li>}
            {hasReplies && replies.data.children.map((reply) => (
                <Comment comment={reply} />
            ))}
        </ul>
    )
}

export default Comment
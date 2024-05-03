import React from "react";
import Post from "../Post/post";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentPost, selectCommentData, isLoadingComments, failedLoadComments } from "./commentsSlice";
import Comment from "./comment";

const CommentContainer = () => {
    const post = useSelector(selectCurrentPost)
    const comments = useSelector(selectCommentData)
    const loadingComments = useSelector(isLoadingComments)
    const commentsLoadFailed = useSelector(failedLoadComments)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }

    if (loadingComments) return <div>Loading Comments</div>;
    if (commentsLoadFailed) return <div>Failed to Comments. This may be due to the rate limitations of the free API. See <a href="https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/">this link</a> for further info and try again later.</div>

    return (
        <div>
            <p onClick={handleClick}>Return to News Feed</p>
            <Post post={post} />
            {comments.map((comment) => (
                <Comment comment={comment} />
            ))}
            <p onClick={handleClick}>Return to News Feed</p>
        </div>
    )
}

export default CommentContainer
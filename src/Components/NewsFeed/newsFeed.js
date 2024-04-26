import React, {useEffect} from "react";
import { loadNewsFeed, isLoadingData, failedLoadData, selectSubreddit, selectData } from "./newsFeedSlice";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/post";

const NewsFeed = () => {
    const dispatch = useDispatch();
    const dataIsLoading = useSelector(isLoadingData);
    const dataLoadFailed = useSelector(failedLoadData);
    const posts = useSelector(selectData)
    const subreddit = useSelector(selectSubreddit);
    useEffect(() => {
        dispatch(loadNewsFeed(subreddit))
    }, subreddit)

    if (dataIsLoading) return <div>Loading News Feed</div>;
    if (dataLoadFailed) return <div>Failed to Load News Feed</div>


    /* put this in the return statement when you have made the post component:
    {posts.map((post) => (
        <Post post={post} />
    ))}*/
    return (
        <div className="newsFeedContainer">
            {posts.map((post) => (
        <Post post={post} />
    ))}
        </div>
    )
}

export default NewsFeed

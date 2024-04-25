import React, {useEffect} from "react";
import { loadNewsFeed, isLoadingData, failedLoadData, selectSubreddit, changeSubreddit, selectData } from "./newsFeedSlice";
import { useDispatch, useSelector } from "react-redux";

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

    const handleClick = (e) => {
        dispatch(changeSubreddit(e.target.value))
    }
    /* put this in the return statement when you have made the post component:
    {posts.map((post) => (
        <Post post={post} />
    ))}*/
    return (
        <div className="newsFeedContainer">
            it worked!
        </div>
    )
}

export default NewsFeed

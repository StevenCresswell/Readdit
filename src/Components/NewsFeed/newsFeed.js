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
    }, [subreddit])

    if (dataIsLoading) return <div>Loading News Feed</div>;
    if (dataLoadFailed) return <div>Failed to Load News Feed. This may be due to the rate limitations of the free API. See <a href="https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/">this link</a> for further info and try again later.</div>

    return (
        <div className="newsFeedContainer">
            <h2>{`Currently browsing ${subreddit}`}</h2>
            {posts.map((post) => (
                <Post post={post} />
    ))}
        </div>
    )
}

export default NewsFeed

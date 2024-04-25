import React, {useEffect} from "react";
import { loadNewsFeed, isLoadingData, failedLoadData } from "./newsFeedSlice";
import { useDispatch, useSelector } from "react-redux";

const NewsFeed = () => {
    const dispatch = useDispatch();
    const dataIsLoading = useSelector(isLoadingData);
    const dataLoadFailed = useSelector(failedLoadData);
    const subReddit = "r/popular";
    useEffect(() => {
        dispatch(loadNewsFeed(subReddit))
    }, subReddit)

    if (dataIsLoading) return <div>Loading News Feed</div>;
    if (dataLoadFailed) return <div>Failed to Load News Feed</div>

    return (
        <div>I worked!</div>
    )
}

export default NewsFeed

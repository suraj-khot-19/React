import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [totalResult, setTotalResult] = useState(0);


    //Accepts a function that contains imperative, possibly effectful code.
    useEffect(() => {
        document.title = `NewsMonkey- ${props.category}`;
        allInOneNewsFun();
    }, []);

    //creating all in fun
    const allInOneNewsFun = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let rawData = await data.json();
        props.setProgress(50);
        //added total results and articles
        setArticles(rawData.articles);
        setTotalResult(rawData.totalResults);
        setIsLoading(false);
        props.setProgress(100);
    }

    //fetch more data
    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let rawData = await data.json();
        //added total results and articles
        setArticles(articles.concat(rawData.articles));
        setTotalResult(rawData.totalResults);
        setIsLoading(false);
    }
    return (
        <>
            <div className="container my-3">
                <h1 className='text-center' style={{ margin: '30px 0px' }}>
                    MonkeyNews - Top {props.category} headlines
                </h1>
                <div className="container text-center">
                    {isLoading && <Loader />}
                </div>
                {
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length <= totalResult}
                        loader={<div className='text-center'><Loader /></div>}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <div className="container">
                            <div className="row my-3">
                                {articles.map((e, index) =>
                                    //Warning: Each child in a list should have a unique "key" prop.
                                    <div className="col-md-4" key={`${e.url} - ${e.publishedAt}-${index}`}>
                                        {/* if any null then show empty string */}
                                        <NewsItem title={e.title ? e.title : ""} discription={e.description ? e.description : ""} imageUrl={e.urlToImage} url={e.url} author={e.author} time={e.publishedAt} source={e.source.name} theme={props.theme} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </InfiniteScroll>
                }
            </div>
        </>
    )
}
export default News;

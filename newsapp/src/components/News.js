import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 20,
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            isLoading: true,
            totalResult: 1,
        }
        // if we dont bind this error is came with state
        // this.handlePrev = this.handlePrev.bind(this);
        // this.handleNext = this.handleNext.bind(this);
        this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    //creating all in fun
    async allInOneNewsFun() {
        // this.setState({ isLoading: true });
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let rawData = await data.json();
        this.props.setProgress(50);
        //added total results and articles
        this.setState({
            articles: rawData.articles,
            totalResult: rawData.totalResults || 0,
            isLoading: false
        });
        document.title = `NewsMonkey- ${this.props.category}`;
        this.props.setProgress(100);
    }

    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    async componentDidMount() {
        this.allInOneNewsFun();
    }

    //fetch more data
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let rawData = await data.json();
        //added total results and articles
        this.setState({
            // changing aricles
            articles: this.state.articles.concat(rawData.articles),
            totalResult: rawData.totalResults || 0,
            isLoading: false
        });
    }

    //?previous
    // async handlePrev() {
    //     this.allInOneNewsFun();
    //     this.setState({ page: this.state.page - 1 });
    // }

    //?next
    // async handleNext() {
    //     this.allInOneNewsFun();
    //     this.setState({ page: this.state.page + 1 });
    // }

    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className='text-center' style={{ margin: '30px 0px' }}>
                        MonkeyNews - Top {this.props.category} headlines
                    </h1>
                    <div className="container text-center">
                        {/* if loading then only show */}
                        {this.state.isLoading && <Loader />}
                    </div>

                    {/* if loading is not true then only show */}
                    {
                        // !this.state.isLoading && <div className="row my-3">
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length <= this.state.totalResult}
                            loader={<div className='text-center'><Loader /></div>}
                            endMessage={
                                <p style={{ textAlign: "center" }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >
                            <div className="container">
                                <div className="row my-3">
                                    {this.state.articles.map((e, index) =>
                                        //Warning: Each child in a list should have a unique "key" prop.
                                        <div className="col-md-4" key={`${e.url} - ${e.publishedAt}-${index}`}>
                                            {/* if any null then show empty string */}
                                            <NewsItem title={e.title ? e.title : ""} discription={e.description ? e.description : ""} imageUrl={e.urlToImage} url={e.url} author={e.author} time={e.publishedAt} source={e.source.name} theme={this.props.theme} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </InfiniteScroll>
                    }

                    {
                        /*
                            <div className="container d-flex justify-content-between">
                                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                            </div>
                         */
                    }
                </div>
            </>
        )
    }
}

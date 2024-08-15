import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'
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
            isLoading: false,
            totalResult: 1,
        }
        // if we dont bind this error is came with state
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    async componentDidMount() {
        this.setState({ isLoading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1feeb3ba971c425182492eef91ff97ce&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let rawData = await data.json();
        //added total results and articles
        this.setState({
            articles: rawData.articles,
            totalResult: rawData.totalResults || 0,
            isLoading: false
        });
    }
    //previous
    async handlePrev() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1feeb3ba971c425182492eef91ff97ce&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ isLoading: true });
        let data = await fetch(url);
        let rawData = await data.json();
        this.setState({
            articles: rawData.articles,
            page: this.state.page - 1,
            isLoading: false
        });
    }
    //next
    async handleNext() {
        //if next page(page+1) is less than totalResults/pagesize
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1feeb3ba971c425182492eef91ff97ce&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ isLoading: true });
            let data = await fetch(url);
            let rawData = await data.json();
            this.setState({
                articles: rawData.articles,
                page: this.state.page + 1, isLoading: false
            });
        }
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className='text-center' style={{ margin: '30px 0px' }}>
                        MonkeyNews - Top headlines
                    </h1>
                    <div className="container text-center">
                        {/* if loading then only show */}
                        {this.state.isLoading && <Loader />}
                    </div>

                    {/* if loading is not true then only show */}
                    {
                        !this.state.isLoading && <div className="row my-3">
                            {this.state.articles.map((e) =>
                                //Warning: Each child in a list should have a unique "key" prop.
                                <div className="col-md-4" key={e.url}>
                                    {/* if any null then show empty string */}
                                    <NewsItem title={e.title ? e.title : ""} discription={e.description ? e.description : ""} imageUrl={e.urlToImage} url={e.url} />
                                </div>
                            )}
                        </div>
                    }
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

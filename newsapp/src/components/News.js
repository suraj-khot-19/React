import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }
    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-07-13&sortBy=publishedAt&apiKey=1feeb3ba971c425182492eef91ff97ce";
        let data = await fetch(url);
        let rawData = await data.json();
        this.setState({ articles: rawData.articles });
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h3 className=''>
                        MonkeyNews - Top headlines
                    </h3>
                    <div className="row my-3">
                        {this.state.articles.map((e) =>
                            //Warning: Each child in a list should have a unique "key" prop.
                            <div className="col-md-4" key={e.content}>
                                {/* if any null then show empty string */}
                                <NewsItem title={e.title ? e.title : ""} discription={e.description ? e.description : ""} imageUrl={e.urlToImage} url={e.url} />
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}

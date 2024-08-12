import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            article: [
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": "The Washington Post",
                    "title": "Guest column | How useful are cognitive tests? The answer might surprise you. - The Washington Post",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPRC1IeDR1d3oxUHRKN0VETXl1eEtNeUpHZW5TaUNyX0NNeTZlWENvY0RpdGdGcWpLM1c4djNCbGdXdjBSQnRBbEFWV1pLY2V3eGlZay1XTE54MElVc0hqRjRMLXlmS2pGQ3ZZYnFPZVl6QmhWYXRobmRrT2xtRlg2SVlBLWJlcU5QZFJMbndHbXdwa2w3Xzh6UFBtMA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2024-08-11T12:18:54Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": "BBC.com",
                    "title": "Brazil plane crash: All 62 bodies recovered after disaster - BBC.com",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBBWWtyc05VX0t0cGlwazBCSlV5Y0RpWnNzem1yYWFoQ1pFLUVZdFVlaC0tdlNweVhUcVJvWnBiYWFLMjlQT0hVU2drR0c5U0ZYbkZnNmtIVVdvUdIBX0FVX3lxTE9tMHNkT3Z0OGJkNmo2NXplcTRsMnJoa1dVZnJ4MDNWWXlUOEZPQXMtVzU2OENaN2padzBqOUNkQnlaMFpfRjd3LWtpMTZZWlRYYXlFZF9GSC03LXJTc3Vj?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2024-08-11T12:08:34Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": "NBC News",
                    "title": "Their homes burned in the Camp Fire. Then again in the Park Fire. - NBC News",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOUXQ5TjROYU9vbThxTXlJR2dfMlZnNDZ0RzhaR2ZNdlAxdzhlbm84RDNYLVBlb2lwYnl1czZYVGFXczBsbkhTbEMzQVZMa1kzdFFRU3JxT3B4bW1FUkxIRi0yTG43SDllc3BwRG1YZzZnWFhJNEhrUUJ0VVFGVDhxWUhydUhQWVM3WmxseHpNNDdxSngwT0U5QmRJa0FBRDVVSFdzdkV0RdIBVkFVX3lxTE9HUTVPeElCOWF3ZllJb1Q2b0NGUTQ0SHZWNFpiNUYweDJJUmd5R0dWWmp3TlY4U2pnamg2eGdkV3BGaEY2OFZRc2RCVDlnZ2FxNlFOc1h3?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2024-08-11T11:00:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": "NPR",
                    "title": "162 lies and distortions in a news conference. NPR fact checks former President Trump - NPR",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5qTzVtZmwxZTJpdDkwM1pfcnVYdDl0MXZsRFBOWXEzZVZzUURMTEdoUHh1akdwQWFpb0RkX1h5WTYtUThMSTJyOGV1YURUbHMzVnY1LWZxNEZRNmlHbllNd1pXazFUVGJZX25pOUFCcTctc25z?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2024-08-11T11:00:00Z",
                    "content": null
                },
            ]
        }
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h3 className=''>
                        MonkeyNews - Top headlines
                    </h3>
                    <div className="row my-3">
                        <div className="col-md-4">
                            <NewsItem title="This is Headline" discription="this is description" imageUrl="this is url" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="This is Headline" discription="this is description" imageUrl="this is url" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="This is Headline" discription="this is description" imageUrl="this is url" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

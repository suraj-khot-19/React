import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        //receving propes
        let { title, discription, imageUrl,url } = this.props;
        return (
            <>
                <div className="card my-3">
                    {/* if image is empty then show this image */}
                    <img src={!imageUrl?"https://tse1.mm.bing.net/th?id=OIP.vouIGuArVyo31eH-_MFxnQHaEK&pid=Api&P=0&h=180":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href={url} target='blank' className="btn btn-sm btn-primary">Read More...</a>
                    </div>
                </div>
            </>
        )
    }
}

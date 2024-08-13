import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        //receving propes
        let { title, discription, imageUrl,url } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    {/* if image is empty then show this image */}
                    <img src={!imageUrl?"https://cdn.origo.hu/2024/08/uNiBI1uD0okZN709LDFzNDBJW4rnxNsGjrFP0xdLfdM/fill/1200/675/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50L2ExYzA3NDc5NmRlYzQ2NGViZDE0YWJlZDc4YTg3ZGYy.webp":imageUrl} className="card-img-top" alt="..." />
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

import React from 'react'

const NewsItem = (props) => {
    //receving propes with destucturing
    let { title, discription, imageUrl, url, source, author, time, theme } = props;
    return (
        <>
            <div className="card my-3" style={theme === 'dark' ? { color: 'white', backgroundColor: '#0d2241' } : { color: 'black', backgroundColor: 'white' }}>
                {/* if image is empty then show this image */}
                <img src={!imageUrl ? "https://tse1.mm.bing.net/th?id=OIP.vouIGuArVyo31eH-_MFxnQHaEK&pid=Api&P=0&h=180" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div style={{ right: "0", top: '0', position: 'absolute', display: 'flex' }}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <p className="card-text "><small className={`text-${theme === 'light' ? 'blue' : 'grey'}`}>By {author} at {new Date(time).toGMTString()}</small></p>
                    <a href={url} target='blank' className="btn btn-sm btn-primary">Read More...</a>
                </div>
            </div>
        </>
    )
}
export default NewsItem;

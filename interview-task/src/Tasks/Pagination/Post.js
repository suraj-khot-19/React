import React from 'react'

export default function Post(props) {
    const { e } = props;
    return (
        <>
            <div className="container">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{e.id} : {e.title}</h5>
                        <p className="card-text">{e.body}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

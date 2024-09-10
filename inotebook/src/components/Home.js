import React from 'react'
import Notes from './Notes';

export default function Home() {
    return (
        <>
            <div className="container my-4">
                <div className="container">
                    <h2>Create a Note</h2>
                    <div className='container'>
                        {/* form */}
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Note title</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="titleHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary my-3 mx-4">Add</button>
                        </form>
                    </div>
                </div>
                {/* all notes */}
                <div className="container my-3">
                    <h2>Your Notes</h2>
                    <Notes />
                </div>
            </div>
        </>
    )
}

import React from 'react'
import loading from './Settings.gif'
const Loader = () => {
    return (
        <div className='my-3'>
            <img src={loading} alt="loading" />
        </div>
    )
}
export default Loader;
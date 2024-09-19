import React, { useState, useEffect } from 'react'
import Post from './Post';
const url = "https://jsonplaceholder.typicode.com/posts";

export default function PaginationTask() {
    //?? state
    const [allData, setAllData] = useState([]); //fetched data
    const [data, setData] = useState([]); //data want to show
    const [length, setLength] = useState(5); //length user want
    const [startLength, setStartLength] = useState(0); //start length
    const [input, setInput] = useState(1);

    //! api call
    const apiCall = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setAllData(json);
    }

    //?? useeffect for api call
    useEffect(() => {
        apiCall();
    }, []);

    //?? useeffect for chenge in length
    useEffect(() => {
        setData(allData.slice(startLength, startLength + length));
    }, [allData, length, startLength]);


    //! prev
    function handelPrev() {
        let number = startLength - length;
        if (number >= 0) {
            setStartLength((prev) => prev - length);
        }
    }

    //! next
    function handelNext() {
        setStartLength((prev) => prev + length);
    }

    //! select
    function handelSelect(e) {
        //!!select return => selcted value is by default string !!!
        const newLength = parseInt(e.target.value, 10);
        setLength(newLength);
    }

    //! input
    function handelInput(e) {
        //!!select return => selcted value is by default string !!!
        const newPageNumber = parseInt(e.target.value, 10);
        setInput(newPageNumber);
        console.log(newPageNumber)
    }

    //! jump
    function handelJump() {
        const jump = (startLength + length) * input;
        setInput(0);
        setStartLength(jump);
        console.log("jump")
    }

    //! options
    const options = [];
    for (let i = 5; i <= 10; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }

    return (
        <>
            <div className="container">
                <div className="container my-4">
                    <label htmlFor="setlength">
                        select how much array size
                    </label>
                    {/* select */}
                    <select className='mx-3' id="setlength"
                        onChange={(e) => handelSelect(e)}>
                        {options}
                    </select>
                </div>
                {/* input */}
                <div className="container my-4 mx-4" >
                    <input onChange={(e) => handelInput(e)} value={input} type="number" placeholder='enter page number' />
                    <button disabled={input < 0} onClick={handelJump} className=' mx-2 btn btn-outline-dark btn-sm mb-1'>Jump</button>
                </div>
                {/* display */}
                <div className="container">
                    {
                        data.map((e) => {
                            return <Post key={e.id} e={e} />
                        })
                    }
                </div>
                <div className="container">
                    <button disabled={startLength === 0} onClick={handelPrev} className="btn btn-primary mx-8">prev</button>
                    <button disabled={startLength + length >= allData.length} onClick={handelNext} className="btn btn-primary mx-5">next</button>
                </div>
            </div>
        </>
    );
}

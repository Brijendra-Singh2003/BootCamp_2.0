import React from 'react'
import "./Loading.css"

function Loading() {
    return (
            <div className='circle-container'>
                <div className="circle"></div>
                <div className="circle-small"></div>
                <div className="circle-big"></div>
                <div className="circle-inner-inner"></div>
                <div className="circle-inner"></div>
            </div>           
    )
}

export default Loading;
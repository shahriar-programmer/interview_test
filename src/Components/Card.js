import React, { useState } from 'react'

function Card(props) {
    const {tag, title, author, time, view, heart, img} = props
    return (
        <div className="card card1 relative rounded-lg">
            <img src={img} alt="IMG2" className="min-w-full min-h-full rounded-lg"/>
            <div className="card_below absolute h-32 bg-white w-48 rounded-2xl p-6 flex flex-col row-gap-3">
                <p className="card_tag">{tag}</p>
                <h1 className="card_title font-medium">{title}</h1>
                <hr className="card_hr" />
                <p className="card_author">By {author}</p>
                <p className="card_time">{time} minutes ago</p>
                <div className="stats">
                    <hr />
                    <div className=" flex justify-between">
                        <div className="left col-gap-4 flex">
                            <div><i className="fa fa-eye"></i><span className="ml-1">{view}</span></div>
                            <div><i className="fa fa-heart"></i><span className="ml-1">{heart}</span></div>
                        </div>
                        <div className="right flex gap-2 items-center">
                            <i className="fa fa-bookmark mr-2"></i>
                            <i className="fa fa-share"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
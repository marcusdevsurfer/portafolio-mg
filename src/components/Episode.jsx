import React from 'react'
import { useState } from 'react'

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export const Episode = ({ enterprise, client, jobRole, activities, color}) => {

    const [position, setPosition] = useState(0)


    const backAction = () => {
        if (position <= 0) {
            setPosition(0)
        }
        else {
            setPosition(position - 1)
        }
    }

    const forwAction = () => {
        if (position + 1 >= activities.length) {
            setPosition(0)
        }
        else {
            setPosition(position + 1)
        }
    }

    return (
        <div className='card my-3 w-50 bg-black text-white'>
            <div className='card-body'>
                <div className='d-flex'>
                    <h5 className='card-title'>{enterprise}</h5>
                    <blockquote className='ps-1'>
                        <small>{client}</small>
                    </blockquote>
                </div>

                <p><small className=''>{jobRole}</small></p>

                <p id='activity' className='card-text'>{activities[position]}</p>

                <div className='text-center'>
                    <div>
                        <small>{position + 1} of {activities.length}</small>
                    </div>
                    <MdArrowBackIos onClick={backAction} />
                    <MdArrowForwardIos onClick={forwAction} />
                </div>

            </div>
        </div>
    )
}

import React from 'react'
import { STATIC_INFO } from '../../Website/STATIC_INFO'
import { Link } from 'react-router-dom'
import '../App.css'

export const Home = () => {
    return (
        <>
        <div className='container  main_container'>
        <img src='src\PHOTO-2026-02-07-12-20-57.jpg' width={"100%"} height={"100%"} />
        <div className='text_box transparent'>
            <p>
            Supporting community through <strong style={{color: "rgba(255, 0, 0, 0.7)"}}>crises</strong>
            </p>
        </div>
      </div>
        <div className='container button_circle_container'>
            <div className="row">
                <div className='important_circle'>
                <Link to="/food_request">
                    <h2>Food Assistance</h2>
                </Link>
            </div>
            <div className='important_circle'>
                <Link to="/tenant">
                    <h2>Rent Assistance</h2>
                </Link>
            </div>
            </div>
        </div>
        </>
    )
}
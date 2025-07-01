import '../styling/Input.css'
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";


const Input = () => {
    const [rating, setRating] = useState(0);
    const [incompleteInputs, setIncompleteInputs] =  useState(false)
    const colors = {brown: " #2F1B14", white: "#FDF4E3"};
    const stars = Array(5).fill(0);

    const handleStarClick = (index) => {
        console.log(`star ${index + 1}clicked`);
        setRating(index + 1);
    }


    return (
        <div>
            <div className='input'>
                <h1>Write your review!</h1>
                <form className='form'>
                    <input type='text' placeholder='Enter your name'></input>
                    <input type='text' placeholder='Enter book title'></input>
                    <input type='text' placeholder='Enter book author name'></input>

                    
                    {/* <div className='rating-section'>
                        <Rating/>
                    </div> */}
                    <div className='rating-UI'>

                        {stars.map((s,index) => {
                        return <FaStar
                                key={index}
                                data-index = {index}
                                size={35}
                                color={rating >= index + 1 ? "orange" : "white"}
                                style={{cursor:'pointer'}}
                                onClick={() => handleStarClick(index)} 
                                ></FaStar>
                        })}
                    </div>
                    <textarea rows='5' placeholder='Write your review'></textarea>
                    <button className='brown'>Submit</button>
                    {/* {!incompleteInputs && <p>Please enter book title, author, and rating before hitting submit!</p>} */}
                </form>
            </div>
        </div>
    );
}
 
export default Input;
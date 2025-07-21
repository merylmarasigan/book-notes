import '../styling/Input.css'
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Input = () => {
    const [rating, setRating] = useState(0);
    const [incompleteInputs, setIncompleteInputs] =  useState(false)
    const colors = {brown: " #2F1B14", white: "#FDF4E3"};
    const stars = Array(5).fill(0);
    const [userName, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [submitted, setSubmitted ] = useState(false);
    const [review, setReview ] = useState("");

    const navigate = useNavigate(); // Initialize navigate hook

    const handleStarClick = (index) => {
        console.log(`star ${index + 1}clicked`);
        setRating(index + 1);
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setSubmitted(true);

        // if(!submitted || (userName !== '' && title !== '' && author !== '' && rating !== 0)){
        //     const fullReview = {
        //         username: userName,
        //         title: title,
        //         author: author,
        //         rating: rating,
        //         review: review
        //     }
    
        //     console.log('FULL REVIEW:',fullReview);
        //     setIncompleteInputs(false);
        //     setSubmitted(true);

        // }else{
        //     setIncompleteInputs(true)
            
        // }

        if(userName === '' || title === '' | author === ''| rating === 0){
            setIncompleteInputs(true);
            return;
        }

        setIncompleteInputs(false);
        const fullReview = {
            username: userName,
            title: title, 
            author: author, 
            rating: rating, 
            review: review
        };

        //write to database

        setSubmitted(true);

        setUserName('');
        setTitle('');
        setAuthor('');
        setRating(0);
        setReview('');
       
        navigate('/', {
            state:{
                message: 'Review submitted!',
                newReview: fullReview
            }
        })
       

    }


    return (
        <div>
            <div className='input'>
                <h1>Write your review!</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter your name' value={userName}
                        onChange={(event) => {setUserName(event.target.value)}}
                    ></input>
                    <input type='text' placeholder='Enter book title' value={title}
                    onChange={(event) => {setTitle(event.target.value)}}></input>
                    <input type='text' placeholder='Enter book author name' value={author}
                    onChange={(event) => {setAuthor(event.target.value)}}></input>

                    
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
                    <textarea rows='5' placeholder='Write your review' value={review} onChange={(event) => {setReview(event.target.value)}}></textarea>
                    <button className='brown'>Submit</button>
                    {incompleteInputs === true && <p>Please enter your name, the book title, author, and rating before hitting submit!</p>}
                </form>
            </div>
        </div>
    );
}
 
export default Input;
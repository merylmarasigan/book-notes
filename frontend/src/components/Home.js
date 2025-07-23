import Card from "./Card";
import '../styling/Home.css'
import React, { useState, useEffect } from 'react';
const Home = () => {
    const [message, setMessage] = useState('Loading...');
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);

    const fetchMessage = async () => {
        try {
            console.log('🚀 Attempting to fetch from backend...');
            
            const response = await fetch('http://localhost:5000/');
            
            console.log('📡 Response received:', response);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('📦 Data received:', data);
            
            setMessage(data.message);
            setError(null);
            
        } catch (err) {
            console.error('❌ Fetch error:', err);
            setError(err.message);
            setMessage('Failed to load message from backend');
        }
    };

    const fetchReviews = async () => {
        try{
            const response = await fetch('http://localhost:5000/');

            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            setReviews(data.bookReviews);
            setError(null);
        }catch(err){
            console.error('❌ Fetch error:', err);
            setError(err.message);
            setMessage('Failed to load message from backend');
        }
        
    }

    useEffect(() => {
        fetchReviews();
    }, []);

    const books = [
        {
            user: 'meryl',
            title: 'The Hunger Games',
            author: 'Suzanne Collins',
            date: 'Sep 5, 2021',
            rating: '3',
            review: "everyone on morpheus' ship was non-binary"
        },
        {
            user: 'Aba',
            title: 'The Fault In Our Stars',
            author: 'John Green',
            date: 'March 12, 2012',
            rating: '3',
            review: ""
        },
        {
            user: 'Aba',
            title: 'On The Road',
            author: 'Jack Kerouac',
            date: 'Dec 12, 2016',
            rating: '4',
            review: "Sal 'he knows where home at' Paradise daughter or Dean 'Where my hug at Moriarty son??"
        }
    ];

    return (
        <div className='home'>
           
            <div className='reviews'>
                {reviews.map((book, idx) => {
                    return <Card 
                        key={idx} 
                        user={book.username}
                        title={book.title}
                        author={book.author}
                        date={book.date}
                        rating={book.rating}
                        review={book.review}
                    />
                })}
            </div>
        </div>
    );
}
 
export default Home;
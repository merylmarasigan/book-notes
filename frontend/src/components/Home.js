import Card from "./Card";
import '../styling/Home.css'
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [message, setMessage] = useState('Loading...');
    const [error, setError] = useState(null);

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

    useEffect(() => {
        fetchMessage();
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
            review: "rereading as a grown woman, ngl, I would've vomitted if I Augustus Waters ever told me 'you put the killing teeth in your mouth, but dont't give it the power to kill you'"
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
            {/* Backend Message Display */}
            {/* <div style={{ 
                padding: '10px', 
                margin: '10px 0',
                backgroundColor: error ? '#ffebee' : '#e8f5e8',
                border: `1px solid ${error ? '#f44336' : '#4caf50'}`,
                borderRadius: '5px'
            }}>
                <strong>Backend Message: </strong>
                {error ? (
                    <span style={{ color: 'red' }}>
                        {message} (Error: {error})
                        <button 
                            onClick={fetchMessage}
                            style={{ 
                                marginLeft: '10px', 
                                padding: '5px 10px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}
                        >
                            Retry
                        </button>
                    </span>
                ) : (
                    <span style={{ color: 'green' }}>{message}</span>
                )}
            </div> */}

            <div className='reviews'>
                {books.map((book, idx) => {
                    return <Card 
                        key={idx} 
                        user={book.user}
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
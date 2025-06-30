import '../styling/Card.css'

import THG from '../../src/THG.jpg'
import icon from '../../src/usericon.png'

const Card = (props) => {
    const {user, title, author,date,rating,review} = props;
    return (
        <div className='card brown'>
            
            <div className='user-profile'>
                <img className='profile-pic' src={icon}/>
                <p className='user-name'>{user}</p>

            </div>

            <div className='card-info'>
                <div className='outer-img'>
                    <img className='book-cover' src={THG}/>

                </div>
                

                <div className='without-img'>

                    <div className='book-info'>
                        <h2 className='title'>{title}</h2>
                        <p className='author'>{author}</p>
                    </div>

                    <div className='review-info'>
                        <p>{rating}/5 stars</p>
                        <p>{review}</p>

                    </div>

                
                </div>

               
            </div>

            
        </div>
    );
}
 
export default Card;
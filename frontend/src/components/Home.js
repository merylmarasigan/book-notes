import Card from "./Card";
import '../styling/Home.css'
const Home = () => {
    const books = [
        {
            user:'meryl',
            title: 'The Hunger Games',
            author: 'Suzanne Collins',
            date:'Sep 5, 2021',
            rating:'3.5',
            review: "everyone on morpheus' ship was non-binary"

        },

        {
            user: 'Aba',
            title: 'The Fault In Our Stars',
            author: 'John Green',
            date:'March 12, 2012',
            rating:'4',
            // review: 'shorter review'
            review: "rereading as a grown woman, ngl, I would've vomitted if I Augustus Waters ever told me 'you put the killing teeth in your mouth, but dont't give it the power to kill you'"
        }
    ]
    return (
        <div class='home'>
            {/* <h1>Your Reviews</h1> */}
            <div className='reviews'>
                {books.map((book, idx) => {
                    return <Card 
                    user = {book.user}
                    title={book.title}
                    author = {book.author}
                    date = {book.date}
                    rating = {book.rating}
                    review = {book.review}
                    />
                    }
                )}

            </div>

        </div>
    );
}
 
export default Home;
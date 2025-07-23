import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

// ✅ CORS configuration - this is the important part!
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432
});


db.connect()
    .then(() => console.log('✅ Database connected!'))
    .catch(err => {
        console.error('❌ Database connection failed:', err.message);
        console.log('⚠️  Server will start without database');
    });

app.use(express.json());


// Handle favicon separately
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // No content, no database query
});


app.get('/', async (req, res) => {
    try{
        const result = await db.query('SELECT * FROM reviews');
        res.json({ 
            message: 'Backend server is running!',
            status: 'success', 
            bookReviews: result.rows
        });

    }catch(err){
        console.error('error executing query', err.stack);
        res.status(500).json({ 
            message: 'Database error',
            status: 'error'
        });

    }

});

app.post('/post', async (req, res) => {
    try {
        const {username, title, author, rating, review} = req.body;
        await db.query(
            'INSERT INTO reviews (username, title, author, rating, review) VALUES ($1, $2, $3, $4, $5)',
            [username, title, author, rating, review]
        );

        res.json({ 
            status: 'success'
        });
    } catch (err) {
        console.error('Error inserting review:', err);
        res.status(500).json({
            status: 'error',
            message: 'Failed to save review'
        });
    }
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
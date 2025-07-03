import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// ✅ CORS configuration - this is the important part!
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// app.get('/api/message', (req, res) => {
//     console.log('📨 API message endpoint accessed');
//     res.json({ 
//         message: 'Hello from the backend!',
//         timestamp: new Date().toISOString()
//     });
// });

// ✅ GOOD - Handle favicon separately
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // No content, no database query
});



app.get('/', (req, res) => {
    console.log('/ path accessed')
    res.json({ 
        message: 'Backend server is running!',
        status: 'success'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
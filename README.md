# BookNotes 📚

A full-stack web application for sharing and discovering book reviews. Users can browse existing reviews and submit their own ratings and thoughts about books they've read.

## Features

- **Browse Reviews**: View book reviews from other users with ratings and detailed thoughts
- **Submit Reviews**: Add your own book reviews with star ratings (1-5 stars)
- **User Profiles**: Each review displays the reviewer's username and profile
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Rating System**: Click-to-rate star interface for easy rating submission
- **Form Validation**: Ensures all required fields are completed before submission

## Tech Stack

### Frontend
- **React** (v19.1.0) - UI framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Icons** - Star rating icons
- **CSS3** - Custom styling with responsive design

### Backend
- **Node.js** with **Express.js** (v5.1.0) - Server framework
- **PostgreSQL** - Database for storing reviews
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL** database

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd booknotes
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the backend directory with your database configuration:
```env
DB_USER=your_db_username
DB_HOST=your_db_host
DB_DATABASE=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
```

Create the database table:
```sql
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Start the backend server:
```bash
node server.js
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Add a background image (optional):
- Place your background image as `background.jpg` in the `public` folder

Start the frontend development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### GET /
- **Description**: Fetch all book reviews
- **Response**: JSON object with success status and array of reviews

### POST /post
- **Description**: Submit a new book review
- **Request Body**:
  ```json
  {
    "username": "string",
    "title": "string",
    "author": "string",
    "rating": "number (1-5)",
    "review": "string"
  }
  ```
- **Response**: JSON object with success/error status

## Project Structure

```
booknotes/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   │   └── background.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Card.js
│   │   │   ├── Home.js
│   │   │   ├── Input.js
│   │   │   ├── Navbar.js
│   │   │   └── Rating.js
│   │   ├── styling/
│   │   │   ├── Card.css
│   │   │   ├── Home.css
│   │   │   ├── Input.css
│   │   │   └── Navbar.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## Usage

1. **View Reviews**: Navigate to the home page to see all submitted book reviews
2. **Submit a Review**: 
   - Click "Write a Review" in the navigation
   - Fill out the form with your name, book title, author
   - Click stars to rate the book (1-5 stars)
   - Write your review in the text area
   - Click "Submit" to save your review

## Database Schema

### Reviews Table
| Column   | Type         | Description                    |
|----------|--------------|--------------------------------|
| id       | SERIAL       | Primary key (auto-increment)  |
| username | VARCHAR(255) | Name of the reviewer           |
| title    | VARCHAR(255) | Book title                     |
| author   | VARCHAR(255) | Book author                    |
| rating   | INTEGER      | Star rating (1-5)              |
| review   | TEXT         | Review content                 |
| created_at| TIMESTAMP   | Review submission date         |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Troubleshooting

### Common Issues

**CORS Error**: Make sure the backend server is running on port 5000 and the CORS configuration includes your frontend URL.

**Database Connection Error**: Verify your `.env` file has the correct database credentials and that PostgreSQL is running.

**Port Already in Use**: If port 3000 or 5000 is busy, you can specify different ports:
- Frontend: `PORT=3001 npm start`
- Backend: Modify the `PORT` variable in `server.js`

## Future Enhancements

- User authentication and profiles
- Book cover image uploads
- Search and filter functionality
- Review editing and deletion
- Like/dislike system for reviews
- Book recommendation engine

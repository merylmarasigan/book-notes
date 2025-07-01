import './App.css';
import Navbar from '../src/components/Navbar'
import Home from './components/Home';
import Input from './components/Input';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: 'url(/background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}
    >
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Input/>}/>

        </Routes>
      </Router>
      {/* <Input/> */}

    </div>
  );
}

export default App;

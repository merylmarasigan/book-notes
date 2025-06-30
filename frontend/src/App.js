import './App.css';
import Navbar from '../src/components/Navbar'
import Home from './components/Home';

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
      <Navbar/>
      <Home/>

    </div>
  );
}

export default App;

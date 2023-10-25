import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePgae from './pages/home/HomePgae';
import AboutPage from './pages/about/AboutPage';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact'
function App() {

  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePgae/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    
      
    </div>
  );
}

export default App;

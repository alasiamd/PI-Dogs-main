import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page/landingPage';
import HomePage from './components/home_page/homePage';
import Details from './components/details/details';
import NewDog from './components/new_dog/newDog';
import NavBar from './components/nav_bar/navBar';

function App() {
  // const location = useLocation();
  

  return (
    <div className='App'>
    {/* {location.pathname !== "/" && <NavBar />} */}
    
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<NewDog />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
    </div>


  );
}

export default App;

import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page/landingPage';
import HomePage from './components/home_page/homePage';
import Details from './components/details/details';
import NewDog from './components/new_dog/newDog';
import NavBar from './components/nav_bar/navBar';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
    {location.pathname !== "/landing" && <NavBar />}
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<NewDog />} />
    </Routes>
    </div>


  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<RegistrationPage/>}/>
        <Route path='/confirmation' element={<ConfirmationPage/>}/>
      </Routes>
    </Router>
  )
};

export default App

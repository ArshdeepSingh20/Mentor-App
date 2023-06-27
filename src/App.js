import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import CareerCounseling from './Components/CareerCounseling';
import LoginSignup from './Components/LoginSignup';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    // <>
    // <CareerCounseling></CareerCounseling>
    // </>

    <Router>
      <Routes>
       {/* <Route path="/" element={<CareerCounseling/>} /> */}
       <Route path="/loginSignUp" element={<LoginSignup/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/forgotPassword" element={<ForgotPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;

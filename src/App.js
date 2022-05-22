import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import ContactUs from './Pages/ContactUs/ContactUs';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
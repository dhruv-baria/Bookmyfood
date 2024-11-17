import './App.css';
import BookingList from './Page/BookingList';
import Calender from './Page/Calender';
import Forgetpw from './Page/Forgetpw';
import Login from './Page/Login';
import Registration from './Page/Registration';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const getPage = ({ showHeader = true, showFooter = true, element }) => (
    <div className='App'>
      {showHeader && <NavBar />}
      {element}
      {showFooter && <Footer />}
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={getPage({ element: <Login />, showFooter: false, showHeader: false })} />
        <Route path="/booking" element={getPage({ element: <BookingList /> })} />
        <Route path="/calendar" element={getPage({ element: <Calender /> })} />
        <Route path="/forgetpw" element={getPage({ element: <Forgetpw />, showHeader:false })} />
        <Route path="/registration" element={getPage({ element: <Registration />,showHeader: false  })} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

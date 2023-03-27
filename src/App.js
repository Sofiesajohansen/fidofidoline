import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forside from './pages/Forside';
import Prisliste from './pages/Prisliste';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Omos from './pages/Omos';
import Nav from './components/Nav';
import Footer from './components/Footer';
import OpdateringsSide from './pages/admin/OpdateringsSide';
import AdminSide from './pages/admin/AdminSide';
import OpretSide from './pages/admin/OpretSide';
import BestillingsSide from './pages/admin/BestillingsSide';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Forside/>}/>
        <Route path="/prisliste" element={<Prisliste/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/omos" element={<Omos/>}/>
        <Route path="/admin"element={<AdminSide/>}/>
        <Route path="/admin/posts/:postId"element={<OpdateringsSide/>}/>
        <Route path="/create"element={<OpretSide/>}/>
        <Route path="/bestillingsoversigt"element={<BestillingsSide/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

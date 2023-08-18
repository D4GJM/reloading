
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import SendMessage from './Pages/SendMessaage/SendMessage';
import TechnologyandInnovation from './Pages/Techinnovation/TechnologyandInnovation';
import AccountandFinance from './Pages/Account_Finance/AccountandFinance';
import DigitalMarketing from './Pages/DigitalMarketing_Branding/DigitalMarketing';
import Aboutus from './Pages/AboutUs/Aboutus';
import Contactus from './Pages/Contactus/Contactus'
import Home from './Pages/Home/Home';
import Fantach from './Pages/Ipay/Fantach';
import Iykonnect from './Pages/Home/IYConnect';
import BusinessSupport from './Pages/Home/BusinessSupportConsultation';
import BusinessPersonalFinance from './Pages/Home/BusinessFinace';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/TechnologyandInnovation" element={<TechnologyandInnovation />} />
        <Route path="/AccountandFinance" element={<AccountandFinance />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/Fantach" element={<Fantach />} />
        <Route path="/Iykonnect" element={<Iykonnect />} />
        <Route path="/BusinessSupport" element={<BusinessSupport />} />
        <Route path="/BusinessPersonalFinance" element={<BusinessPersonalFinance />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

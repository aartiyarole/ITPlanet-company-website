import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import WebDev from './pages/WebDev.jsx'
import EcomDev from './pages/EcomDev.jsx'
import AppDev from './pages/AppDev.jsx'
import ShootSer from './pages/ShootSer.jsx'
import EditingSer from './pages/EditingSer.jsx'
import VfxSer from './pages/VfxSer.jsx'
import AnimationSer from './pages/AnimationSer.jsx'
import DigitalMrk from './pages/DigitalMrk.jsx'
import OneDomainH from './pages/OneDomainH.jsx'
import MultiDomainH from './pages/MultiDomainH.jsx'
import GraphicDesign from './pages/GraphicDesign.jsx'
import PrintingSer from './pages/PrintingServ.jsx'
import Career from './pages/Career.jsx'
import Clients from './pages/Clients.jsx'
import SocialLinks from './components/SocialLinks.jsx';
import Footer from './components/Footer.jsx';
import MernStack from './pages/MernStack.jsx';
import WebsiteDev from './pages/WebsiteDev.jsx';
import ReactjsDev from './pages/ReactjsDev.jsx'
import AppDevelopment from './pages/AppDevelopment.jsx';
import GraphicDes from './pages/GraphicDes.jsx'
import DigitalMarket from './pages/DigitalMarket.jsx'
import VideoProductionSer from './pages/VideoProductionSer.jsx';
import RefundPolicy from './pages/RefundPolicy.jsx';
import TermsCondition from './pages/TermsCondition.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TawkChat from './components/TawkChat.jsx'


function App() {
  return (
    <>
    <Navbar/>
   
    <SocialLinks/>
    <TawkChat />
    <Routes>
        <Route path="/" element={<Home />} />
        {/*the servcies */}
        <Route path="/website-development" element={<WebDev />} />
        <Route path="/ecommerce-development" element={<EcomDev/>} />
        <Route path="/app-development" element={<AppDev />} />
        <Route path="/video-production" element={<VideoProductionSer />} />
        <Route path="/shooting-services" element={<ShootSer />} />
        <Route path="/editing-services" element={<EditingSer />} />
        <Route path="/vfx-services" element={<VfxSer />} />
        <Route path="/animation-services" element={<AnimationSer />} />
        <Route path="/digital-marketing" element={<DigitalMrk />} />
        <Route path="/one-domain-hosting" element={<OneDomainH />} />
        <Route path="/multi-domain-hosting" element={<MultiDomainH />} />
        <Route path="/graphic-designing" element={<GraphicDesign />} />
        <Route path="/printing-services" element={<PrintingSer />} />

        {/* courses link*/}
        <Route path="/courses/mern-stack" element={<MernStack />} />
        <Route path="/courses/web-development" element={<WebsiteDev />} />
        <Route path="/courses/reactjs" element={<ReactjsDev />} />
        <Route path="/courses/app-development" element={<AppDevelopment />} />
        <Route path="/courses/graphic-designing" element={<GraphicDes />} />
        <Route path="/courses/digital-marketing" element={<DigitalMarket />} />

        {/* general navlink*/}
        <Route path="/refund-policy" element={<RefundPolicy/>} />
        <Route path ="/term-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

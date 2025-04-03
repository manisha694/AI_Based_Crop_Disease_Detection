import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import UploadDetection from './pages/UploadPage';
import DiseaseInfo from './pages/DiseaseInfo';
import Forum from './pages/Forum';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Start from './pages/Start';

import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/";

  return (
    <div className="bg-gray-100 font-roboto min-h-screen">
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<UploadDetection />} />
          <Route path="/diseases" element={<DiseaseInfo />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

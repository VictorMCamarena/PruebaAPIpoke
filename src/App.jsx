import { Routes, Route } from 'react-router-dom';
import Layout from '../src/Layout/Layout.jsx';
import Home from '../src//Home/Home.jsx';
import About from '../src/About/About.jsx';
import Contact from '../src/Contact/Contact.jsx';
import componets from '../src/componets/Navbar.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

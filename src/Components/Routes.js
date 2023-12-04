import React from 'react';
import NavBar from './Navbar';
import {
      BrowserRouter as Router,
      Navigate,
      Route,
      Routes,
} from 'react-router-dom';

import Collection from '../Pages/Collections';
import Men from '../Pages/Men';
import Women from '../Pages/Women';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

function Navigation() {
      return (
            <Router>
                  <NavBar/>
                  <Routes>
                        <Route path="/" element={<Collection/>} />
                        <Route path="/men" element={<Men/>} />,
                        <Route path="/women" element={<Women/>} />,
                        <Route path="/about" element={<About/>} />
                        <Route path="/contact" element={<Contact/>} />,
                        <Route path="*" element={<Navigate replace to="/" />} />
                  </Routes>
            </Router>
      )
}

export default Navigation

//https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom
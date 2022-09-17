import React, {useState} from 'react';
import './App.css';

function App() {
  const [navLinks, setNavLinks] = useState([
    {
      name: 'Home'
    },
    {
      name: 'Dashboard'
    },
    {
      name: 'Find Game'
    },
    {
      name: 'Login'
    },
    {
      name: 'Signup'
    }

  ]);

  const [currentNavLink] = useState(navLinks[0]);
  const renderLink = navLinks.filter((link) => link.name ===link);

  return (
    <div>
      <nav
      navLinks={navLinks}
      setcurrentNavLink
      currentNavLink={currentNavLink}
      renderLink={renderLink}
      setNavLinks={setNavLinks}>
      </nav>
      <nav></nav>
      <main></main>
    </div>
  )
}

export default App;

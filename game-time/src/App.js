import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  const [navLinks] = useState([
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
      renderLink={renderLink}>
      </nav>
      <nav></nav>
      <main></main>
    </div>
  )
}

export default App;

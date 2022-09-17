// import React, {useState} from 'react';
// import './App.css';
// //import Nav from './components/Nav';

// function App() {
//   const [navLinks] = useState([
//     {
//       name: 'Home'
//     },
//     {
//       name: 'Dashboard'
//     },
//     {
//       name: 'Find Game'
//     },
//     {
//       name: 'Login'
//     },
//     {
//       name: 'Signup'
//     }

//   ]);

//   const [currentNavLink] = useState(navLinks[0]);
//   const renderLink = navLinks.filter((link) => link.name ===link);

//   return (
//     <div>
//       <nav
//       navLinks={navLinks}
//       setcurrentNavLink
//       currentNavLink={currentNavLink}
//       renderLink={renderLink}>
//       </nav>
//       <nav></nav>
//       <main></main>
//     </div>
//   )
// }

// export default App;
import React from 'react';
import Nav from './components/Nav';
import FindGame from './components/Find-Game';
import Login from './components/Log-in';
import Signup from './components/Sign-up';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <Login></Login>
      <Signup></Signup>
        <FindGame></FindGame>
      </main>
    </div>
  );
}

export default App;
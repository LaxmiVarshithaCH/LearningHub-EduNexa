// // src/components/Navbar.jsx
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { navigate } from '../redux/navSlice';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { currentPage } = useSelector(state => state.nav);

//   return (
//     <nav style={{ padding: '1rem', background: '#333', color: 'white' }}>
//       <button onClick={() => dispatch(navigate('home'))} disabled={currentPage==='home'}>Home</button>
//       <button onClick={() => dispatch(navigate('login'))} disabled={currentPage==='login'}>Login</button>
//       <button onClick={() => dispatch(navigate('signup'))} disabled={currentPage==='signup'}>Signup</button>
//       <button onClick={() => dispatch(navigate('explore'))} disabled={currentPage==='explore'}>Explore Courses</button>
//     </nav>
//   );
// };

// export default Navbar;
// src/components/Navbar.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../redux/navSlice';
import '../styles/Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(state => state.nav);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Login', page: 'login' },
    { label: 'Signup', page: 'signup' },
    { label: 'Explore Courses', page: 'explore' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Edunexa</div>
      <div className="navbar-links">
        {navItems.map(item => (
          <button
            key={item.page}
            className={`nav-button ${currentPage === item.page ? 'active' : ''}`}
            onClick={() => dispatch(navigate(item.page))}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

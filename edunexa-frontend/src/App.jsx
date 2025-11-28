// // src/App.jsx
// import React from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './components/Navbar.jsx';
// import HomePage from './pages/HomePage.jsx';
// import LoginPage from './pages/LoginPage.jsx';
// import SignupPage from './pages/SignupPage.jsx';
// import ExploreCourses from './pages/ExploreCourses.jsx';
// import CoursePage from './pages/CoursePage.jsx';

// function App() {
//   const { currentPage, courseId } = useSelector(state => state.nav);

//   const renderPage = () => {
//     switch(currentPage) {
//       case 'home': return <HomePage />;
//       case 'login': return <LoginPage />;
//       case 'signup': return <SignupPage />;
//       case 'explore': return <ExploreCourses />;
//       case 'course': return <CoursePage courseId={courseId} />;
//       default: return <HomePage />;
//     }
//   }

//   return (
//     <div>
//       <Navbar />
//       <div style={{ padding: '1rem' }}>
//         {renderPage()}
//       </div>
//     </div>
//   );
// }

// export default App;
// src/App.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ExploreCourses from './pages/ExploreCourses.jsx';
import CoursePage from './pages/CoursePage.jsx';

function App() {
  const { currentPage, courseId } = useSelector(state => state.nav);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'login': return <LoginPage />;
      case 'signup': return <SignupPage />;
      case 'explore': return <ExploreCourses />;
      case 'course': return <CoursePage courseId={courseId} />;
      default: return <HomePage />;
    }
  }

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: '1', padding: '1rem' }}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;

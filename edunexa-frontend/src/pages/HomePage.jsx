// import React from 'react';
// import '../styles/HomePage.css';

// const HomePage = () => (
//   <div className="home-container">
//     {/* Hero Section */}
//     <section className="hero-section">
//       <div className="hero-text">
//         <h1>Welcome to Edunexa</h1>
//         <p>The modern platform to learn, grow, and achieve your goals.</p>
//         <button className="cta-button">Explore Courses</button>
//       </div>
//       <div className="hero-image">
//         <img
//           src="https://via.placeholder.com/400x300.png?text=Edunexa+Learning"
//           alt="Learning"
//         />
//       </div>
//     </section>

//     {/* Features Section */}
//     <section className="features-section">
//       <h2>Why Choose Edunexa?</h2>
//       <div className="features-grid">
//         <div className="feature-card">
//           <h3>📚 Extensive Courses</h3>
//           <p>From Programming to AI, design, and more. Learn at your own pace.</p>
//         </div>
//         <div className="feature-card">
//           <h3>🎓 Expert Instructors</h3>
//           <p>Learn from industry professionals and gain practical skills.</p>
//         </div>
//         <div className="feature-card">
//           <h3>💡 Interactive Learning</h3>
//           <p>Quizzes, assignments, and projects to make learning hands-on.</p>
//         </div>
//       </div>
//     </section>

//     {/* Popular Courses Section */}
//     <section className="popular-section">
//       <h2>Popular Courses</h2>
//       <div className="courses-grid">
//         <div className="course-card">
//           <div className="course-thumbnail">💻</div>
//           <h3>Web Development Bootcamp</h3>
//           <p>Become a full-stack developer with hands-on projects.</p>
//           <button className="pixel-button">Enroll Now</button>
//         </div>

//         <div className="course-card">
//           <div className="course-thumbnail">🤖</div>
//           <h3>AI & Machine Learning</h3>
//           <p>Master AI techniques and build intelligent systems.</p>
//           <button className="pixel-button">Enroll Now</button>
//         </div>

//         <div className="course-card">
//           <div className="course-thumbnail">🎨</div>
//           <h3>Creative Design</h3>
//           <p>Learn graphic design, UI/UX, and visual storytelling.</p>
//           <button className="pixel-button">Enroll Now</button>
//         </div>
//       </div>
//     </section>

//     {/* About Section */}
//     <section className="about-section">
//       <h2>About Edunexa</h2>
//       <p>
//         Edunexa is a professional learning platform designed to help students and
//         professionals excel in their careers. With expert instructors, interactive
//         courses, and real-world projects, Edunexa is your gateway to growth and success.
//       </p>
//     </section>

//     {/* Call to Action */}
//     <section className="cta-section">
//       <h2>Start Your Learning Journey Today!</h2>
//       <button className="cta-button">Sign Up Now</button>
//     </section>
//   </div>
// );

// export default HomePage;
import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to EduNexa</h1>
        <p>Your one-stop platform to explore, learn, and grow with top-notch courses.</p>
        <button className="cta-button">Explore Courses</button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Edunexa?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Instructors</h3>
            <p>Learn from industry experts and experienced educators who make learning engaging.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Learning</h3>
            <p>Hands-on exercises, quizzes, and projects to reinforce your knowledge.</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Schedule</h3>
            <p>Learn at your own pace anytime, anywhere, on any device.</p>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="courses-preview-section">
        <h2>Popular Courses</h2>
        <div className="courses-grid">
          <div className="course-card">Web Development</div>
          <div className="course-card">Data Science</div>
          <div className="course-card">Machine Learning</div>
          <div className="course-card">Cybersecurity</div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Benefits of Learning with Edunexa</h2>
        <ul>
          <li>Industry-recognized certifications</li>
          <li>Career support and mentorship</li>
          <li>Community-driven learning</li>
          <li>Affordable and flexible pricing</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;

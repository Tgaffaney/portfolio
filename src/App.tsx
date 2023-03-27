import './App.css';

import * as React from 'react';

const App: React.FC = () => {
  return (
    <>
      {/* 
      Who is the target demo:
       recruiters, hiring managers, other engineers, my parents
      What are the goals: 
       showcase my talent and experience
       */}
      <div className="waves">
        <div className="header center-top">
          <img
            className="icon"
            alt="profile"
            src="../assets/profile-sm-transparent.png"
          />
          <div className="bio-details">
            <div className="name">Tyler Gaffaney</div>
            <div className="title">Full-Stack Software Engineer</div>
            <div className="summary">
              From building websites to command-line interfaces to backend
              services, I love to create great products that improve the user's
              life.
            </div>
          </div>
        </div>
      </div>
      <div className="ocean-mini"></div>
      <div className="ocean-full"></div>
    </>
  );
};

export default App;

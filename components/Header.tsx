import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>LEARN AND EARN</h1>
      <h2> BECOME OUR LANGUAGE AMBASSADOR</h2>
      <nav>
        <a href="#home">Home</a>
        <a href="#packages">Packages</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#offers">Offers</a>
        <button>Login</button>
        <button>Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;

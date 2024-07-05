import React from 'react';

const PackagesSection: React.FC = () => {
  return (
    <section id="packages">
      <h2 className="section-title">AMBASSADOR PACKAGES</h2>
      <div className="card">
        <h3 className="card-title">Enterprise - $30</h3>
        <p>Our enterprise package contains a whole lot to learn and earn with.</p>
        <button>Learn More</button>
      </div>
      <div className="card">
        <h3 className="card-title">Access Pro - Free</h3>
        <p>Yes! FREE! Enjoy the best of our Access Pro package all for FREE.</p>
        <button>Learn More</button>
      </div>
      <div className="card">
        <h3 className="card-title">Diamond Plus - $100</h3>
        <p>Get access to all our diamond packages with just $100.</p>
        <button>Learn More</button>
      </div>
      <div className="card">
        <h3 className="card-title">Premium - $50</h3>
        <p>With just $50, get the best of all that is included in our Premium subscription.</p>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default PackagesSection;

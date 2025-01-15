import React from "react";

const Navbar = () => {
  return (
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img 
    src="https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6716c18e45760446b740a3b6_logo%2520final%2520one%25205-p-500.png" 
    alt="Wobb" 
    style={{
      width: '40px',
      height: 'auto',
      display: 'block',
    }}
  />
  <span style={{
    fontWeight: 'bold',
    color: '#002244', // Bootstrap blue color
    fontSize: '25px',
    fontFamily: 'Arial, sans-serif'
    }}>
    Wobb
   </span>
   <div> 
   </div>
   <div> 
   </div>
   <div> 
   </div>
  </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Automated Campaign Manager</a></li>
            <li><a class="dropdown-item" href="/">Influencer Discovery</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul class="dropdown-menu custom-dropdown p-3">
          <div class="row">
          <div class="col-md-6">
            <li><a class="dropdown-item" href="/">Blog</a></li>
            <li><a class="dropdown-item" href="/">Customer</a></li>
            <li><a class="dropdown-item" href="/">HelpCentre</a></li>
            <li><a class="dropdown-item" href="/">An Affiliate</a></li>
            <li><a class="dropdown-item" href="/">Integrations</a></li>
            </div>
            <div class="col-md-6">
            <li><a class="dropdown-item" href="/">FakeFollowersChecker</a></li>
            <li><a class="dropdown-item" href="/">EngagementRateChecker</a></li>
            <li><a class="dropdown-item" href="/">InfluencerProfileAnalytics</a></li>
            </div>
            </div>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Pricing</a>
        </li>
      </ul>
    </div>

    <div>
     <ul className="nav-links">
     <a class="nav-link active" aria-current="page" href="/">Log In</a>
        <li><button className="get-started">Get Started - It's Free</button></li>
      </ul>
    </div>

  </div>
</nav>
  );
};

export default Navbar;

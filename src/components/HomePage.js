import React from 'react';

const HomePage = () => (
  <div className="home-page grid-container">
    <div className="card">
      <div className="card-image">
        <img className="img-responsive" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="iPhone 7 256 GB" />
      </div>
      <div className="card-header">
        <div className="card-title h5">Apple iPhone 7 256 GB</div>
        <div className="card-subtitle text-gray">$ 16,500.00 MXN</div>
      </div>
      <div className="card-body">
        El iPhone 7 viene con una nueva cámara de 12 MP, un chip A10 Fusion, una nueva pantalla Retina HD.
      </div>
      <div className="card-footer">
        <button className="btn btn-primary btn-block">Buy</button>
      </div>
    </div>
    <div className="card">
      <div className="card-image">
        <img className="img-responsive" src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="iPhone 7 256 GB" />
      </div>
      <div className="card-header">
        <div className="card-title h5">Google Home Mini</div>
        <div className="card-subtitle text-gray">$ 899.00 MXN</div>
      </div>
      <div className="card-body">
        Google's Home Mini is a better standalone voice-activated speaker than the Amazon Echo Dot.
      </div>
      <div className="card-footer">
        <button className="btn btn-primary btn-block">Buy</button>
      </div>
    </div>
  </div>
);

export default HomePage;

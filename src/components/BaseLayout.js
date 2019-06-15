import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';

const BaseLayout = () => (
  <>
    <header className="header navbar">
      <div className="container grid-lg">
        <div className="columns">
          <div className="column col-12">
            <div className="navbar">
              <section className="navbar-section">
                <a href="." className="navbar-brand mr-2 text-dark text-bold">React Shop</a>
                <a href="." className="btn btn-link">Home</a>
                <a href="." className="btn btn-link">Store</a>
              </section>
              <section className="navbar-section">
                <a href="." className="btn btn-link text-dark">
                  <i className="fas fa-shopping-bag"></i>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main className="main bg-gray">
      <div className="container grid-lg">
        <Route exact path="/" component={HomePage} />
      </div>
    </main>
    <footer className="footer">
      <div className="container grid-lg">
        <div className="columns">
          <div className="column col-lg-auto col-6">
            <a href="." className="navbar-brand mr-2 text-dark text-bold">React Shop</a>
          </div>
          <div className="column text-right">Copyright &copy; 2019 @ React Router Example</div>
        </div>
      </div>
    </footer>
  </>
);

export default BaseLayout;

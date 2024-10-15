import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png'; // Assure-toi de mettre le bon chemin ici

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >

      <div className="container-fluid d-flex justify-content-between">
      <Link className="navbar-brand" to="/">
          <img 
            src={logo} 
            alt="Impact Invest Logo" 
            className="img-fluid" 
            style={{ maxWidth: '80px', }} // Limite la taille du logo avec Bootstrap
          />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/invest">Investir</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/functioning">Fonctionnement</Link>
            </li>
            <li className="nav-item">
              <Link type="button"to="/portfolio" className="btn btn-secondary nav-link" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">Portefeuille</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
          <button className='btn btn-outline-danger ms-5'><span className="material-symbols-outlined">logout</span></button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

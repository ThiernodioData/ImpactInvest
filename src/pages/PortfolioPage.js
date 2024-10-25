import React from 'react';
import { Link } from 'react-router-dom';
import Portfeuille from './Portfeuille'; 

function PortfolioPage() {
    return (
      <div className="d-flex justify-content-center align-items-center  my-4">
        <div className="card shadow-lg rounded" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="card-header text-center bg-primary text-white">
            <h1 className="h4">Securite Portefeuille</h1>
          </div>
          <div className="card-body">
            <h2 className="text-center h5 mb-4">Se connecter à un compte</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Clé Publique</label>
                <input type="text" className="form-control" id="username" required  placeholder='0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92288'/>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label">Mot de passe</label>
                  <a href="#" className="small">Mot de passe oublié?</a>
                </div>
                <input type="password" className="form-control" id="password" required />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Se souvenir de moi</label>
              </div>
              <Link className="nav-link text-center btn btn-outline-primary p-2 fw-bold" to="/portfeuille">Deverrouiller</Link>

            </form>
          </div>
          <div className="card-footer text-center">
          <Link to="/register" className="d-block mb-2">Je n'ai pas de compte, Creer un compte</Link>
            <small className="text-muted">© IDITECH Manager - ImpactInvest SN</small>
          </div>
        </div>
      </div>
      );
    }
export default PortfolioPage;

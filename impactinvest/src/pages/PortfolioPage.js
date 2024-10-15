import React from 'react';


function PortfolioPage() {
    return (
        <div className="d-flex justify-content-center align-items-center  my-4">
          <div className="card shadow-lg rounded-5" style={{ maxWidth: '400px', width: '100%' }}>
            <div className="card-header text-center bg-primary text-white">
              <h1 className="h4">Securite Portefeuille</h1>
            </div>
            <div className="card-body">
              <h2 className="text-center h5 mb-4">Se connecter à un compte</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                  <input type="text" className="form-control" id="username" required />
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
                <button type="submit" className="btn btn-primary w-100">Deverrouiller</button>
              </form>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="d-block mb-2">Je n'ai pas de compte, Creer un compte</a>
              <small className="text-muted">© IDITECH Manager - ImpactInvest SN</small>
            </div>
          </div>
        </div>
      );
    }
export default PortfolioPage;

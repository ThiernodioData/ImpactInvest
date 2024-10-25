import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <div className="d-flex justify-content-center align-items-center my-4">
            <div className="card shadow-lg rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-header text-center bg-primary text-white">
                    <h1 className="h4">Créer un Portefeuille</h1>
                </div>
                <div className="card-body">
                    <h2 className="text-center h5 mb-4">Créer un nouveau compte</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                required 
                                placeholder="exemple@email.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="publicKey" className="form-label">Clé Publique</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="publicKey" 
                                required 
                                placeholder="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92288"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">Créer un mot de passe</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="newPassword" 
                                required 
                            />
                            <small className="text-muted">
                                Le mot de passe doit contenir au moins 8 caractères
                            </small>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="confirmPassword" 
                                required 
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="termsAccept" 
                                required 
                            />
                            <label className="form-check-label" htmlFor="termsAccept">
                                J'accepte les termes et conditions
                            </label>
                        </div>
                        <Link 
                            className="nav-link text-center btn btn-outline-primary p-2 fw-bold" 
                            to="/portfeuille"
                        >
                            Créer mon compte
                        </Link>
                    </form>
                </div>
                <div className="card-footer text-center">
                    <Link to="/portfolio" className="d-block mb-2">
                        J'ai déjà un compte, Me connecter
                    </Link>
                    <small className="text-muted">© IDITECH Manager - ImpactInvest SN</small>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
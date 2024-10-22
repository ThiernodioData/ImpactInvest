import React, { useState } from 'react';
import carte1 from '../images/carte1.jpg'; 
import logo from '../images/logo.png';
import nft from '../images/pucenfc.png';
import wifi from '../images/wifi.png';

function Portfeuille() {
  const [showPublicKey, setShowPublicKey] = useState(false); // État pour la clé publique
  const [showPrivateKey, setShowPrivateKey] = useState(false); // État pour la clé privée
  const publicKey = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92288"; // Clé publique
  const privateKey = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92288"; // Clé privée

  // Fonction pour afficher et copier la clé publique
  const handleShowPublicKey = () => {
    setShowPublicKey(true);
    navigator.clipboard.writeText(publicKey); // Copie la clé publique dans le presse-papiers
    alert('Clé publique copiée dans le presse-papiers !'); // Message de confirmation
  };

  // Fonction pour afficher et copier la clé privée
  const handleShowPrivateKey = () => {
    setShowPrivateKey(true);
    navigator.clipboard.writeText(privateKey); // Copie la clé privée dans le presse-papiers
    alert('Clé privée copiée dans le presse-papiers !'); // Message de confirmation
  };

  return (
    <div>
      <section>
        <div id="carouselExampleCaptions" className="carousel slide container rounded-5" data-bs-ride="carousel">
          {/* Indicateurs pour le carousel */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>

          {/* Contenu du carousel */}
          <div className="carousel-inner rounded-5">
            {/* Première diapositive */}
            <div className="carousel-item active" style={{ maxHeight: "30em" }}>
              <img src={carte1} className="d-block w-100" alt="Première diapositive" />
              <div className="carousel-caption d-none d-md-block fw-bold">
                 
                <div className="d-flex justify-content-between align-items-center w-100">
                  <p className="fw-bold h1">Idrissa Diallo</p>
                  <img src={logo} alt="Logo" style={{ height: "100px", width: "200px" }} />
                </div>

                 
                <div className="my-4 d-flex justify-content-between align-items-center w-100">
                  <p className="h2">Clé publique: </p>
                  {showPublicKey ? (
                    <p>{publicKey}</p>
                  ) : (
                    <button className="btn btn-primary" onClick={handleShowPublicKey}>Afficher et copier la clé publique</button>
                  )}
                </div>

                 
                <div className="my-5 d-flex justify-content-between align-items-center w-100">
                  <p className="h2">Clé privée: </p>
                  {showPrivateKey ? (
                    <p>{privateKey}</p>
                  ) : (
                    <button className="btn btn-danger" onClick={handleShowPrivateKey}>Afficher et copier la clé privée</button>
                  )}
                </div>

                 
                <h1 className="arkefip-home-expertise-card-title pt-0">MONTANT DISPONIBLE</h1>
                <p className="arkefip-home-expertise-card-description fw-bold text-primary h2">1000,00 IDI = 2 000 000 cFA</p>
              </div>
            </div>
            {/* ----------------------------- */}
            <div className="carousel-item active" style={{ maxHeight: "30em" }}>
              <img src={carte1} className="d-block w-100" alt="Première diapositive" />
              <div className="carousel-caption d-none d-md-block fw-bold">
                 
                <div className="mb-5 d-flex justify-content-between align-items-center w-100">
                  <p className="h1">ImpactInvest</p>                  
                  <p className="h2 fw-bold">VISA</p>                  
                  
                </div>

                <div className="d-flex justify-content-between align-items-center w-100">
                  <img src={nft} alt="Logo" style={{ height: "50px", width: "100px" }} />
                  <img src={wifi} alt="Logo" style={{ height: "50px", width: "100px" }} />
                </div>

                 
                <div className="d-flex justify-content-between align-items-center w-100 my-5">
                  <p className="h2">1234 5678 9000 1234 </p>                  
                </div>

                 
                <div className="d-flex justify-content-between align-items-center w-100 ">
                  <p className="h2">Idriss  Diallo</p>
                  <p className="h2">12/30 </p>
                  <p className="h2">221</p>                  
                </div>

              </div>
            </div>


          </div>

          {/* Commandes du carousel */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </section>
      <section>
        <div>
          <p className='h1'>List des Projet Investies</p>
        </div>
      </section>
    </div>
  );
}

export default Portfeuille;
import React from 'react';
import bg_gif from '../images/home.gif';
import img1 from '../images/img4.jpg';
import img2 from '../images/img3.jpg';
import img3 from '../images/img8.jpg';
import gif1 from '../images/gif1.gif';

const Homepage = () => {
  return (
    <div
      className="home"

    >
      <div>
        <main>
          {/* Section Home 1 */}
          <div className="arkefip-home text-center  text-white"       style={{backgroundImage: `url(${bg_gif})`,backgroundSize: 'cover',backgroundPosition: 'center', height: '500px', }}>
            <section className="arkefip-home-intro p-5" id="arkefip-home-intro">
              <div className="arkefip-home-intro-container">
                <div className="arkefip-home-intro-content">
                  <h1 className="fw-bold">Financement participatif au service du développement local</h1>
                  <h2>Investir de manière responsable, soutenir l'économie locale</h2>
                  <p>
                    Depuis sa création, ImpactInvest vous offre une opportunité d'investir de façon transparente et sécurisée. Sur notre plateforme d'investissement participatif basée sur la blockchain, financez des projets locaux à fort impact économique et social, en particulier dans les marchés émergents, comme le Sénégal, à partir de 10 euros.
                  </p>
                  <div className="arkefip-home-intro-cta">
                    <a href="/invest/">
                      <button className="btn btn-outline-primary fw-bold m-5">Découvrir nos projets</button>
                    </a>
                    <a href="/register">
                      <button className="btn btn-primary">Créer un compte</button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>


          {/* Section Home 2 */}
          <div className="container bg-primary rounded-5 my-5">
            <div className="row text-white text-center rounded p-4 d-flex flex-row">
              <div className="col-md-4">
                <h2 className="fw-bold">#M€</h2>
                <p>Montant financé</p>
                <p>Par les investisseurs</p>
              </div>
              <div className="col-md-4">
                <h2 className="fw-bold">Jusqu'à #%</h2>
                <p>D'intérêts annuels</p>
                <p>Avant impôts</p>
              </div>
              <div className="col-md-4">
                <h2 className="fw-bold">#</h2>
                <p>Projets durables</p>
                <p>Financés depuis sa création</p>
              </div>
            </div>
          </div>

          {/* Section Carousel */}
          <section>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" style={{ height: "30em" }}>
                  <img src={img1} className="d-block w-100" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block fw-bold">
                    <h1 className="arkefip-home-expertise-card-title">Investissez dans l'avenir durable</h1>
                    <p className="arkefip-home-expertise-card-description">
                      Participez au financement de projets locaux à fort impact social et environnemental, et soutenez des communautés dans des pays émergents.
                    </p>
                    <a href="/invest">
                      <button className="btn btn-primary">Découvrez nos projets</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item" style={{ height: "30em" }}>
                  <img src={img2} className="d-block w-100" alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block fw-bold">
                    <h1 className="arkefip-home-expertise-card-title">Un soutien personnalisé</h1>
                    <p className="arkefip-home-expertise-card-description">
                      Profitez d’un accompagnement sur mesure de nos experts qui vous guident tout au long de votre investissement.
                    </p>
                    <a  rel="noopener noreferrer" href="/contact/">
                      <button className="btn btn-primary">Contactez-nous</button>
                    </a>
                  </div>
                </div>
                <div className="carousel-item" style={{ height: "30em" }}>
                  <img src={img3} className="d-block w-100" alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block fw-bold">
                    <h1 className="arkefip-home-expertise-card-title">Des projets soigneusement sélectionnés</h1>
                    <p className="arkefip-home-expertise-card-description">
                      Seuls les projets respectant nos critères rigoureux d'impact et de rentabilité sont proposés sur la plateforme.
                    </p>
                    <a  rel="noopener noreferrer" href="/functioning">
                      <button className="btn btn-primary">Découvrez notre méthodologie</button>
                    </a>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>

          {/* Section Steps */}
          <section className="my-5 p-5  impactinvest-home-invest-steps text-white fw-bold text-center" id="impactinvest-home-invest-steps" style={{
            backgroundImage: `url(${gif1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="impactinvest-home-invest-steps-container">
              <div className="impactinvest-home-invest-steps-content">
                <h2 className="section-heading h1">Investissez avec ImpactInvest, étape par étape</h2>
                <div className="impactinvest-home-invest-steps-steps">
                  <div className="impactinvest-home-invest-steps-step">
                    <div className="impactinvest-home-invest-steps-step-icon-container">
                      <i className="fa fa-shield"></i>
                    </div>
                    <div className="impactinvest-home-invest-steps-step-content">
                      <h2 className="impactinvest-home-invest-steps-step-title">Découvrez nos opportunités d'investissement</h2>
                      <p>
                        ImpactInvest vous propose des projets soigneusement sélectionnés à fort impact social et environnemental. Explorez nos opportunités dans l'onglet <a href="/invest" >Investir</a>.
                      </p>
                    </div>
                  </div>
                  <div className="impactinvest-home-invest-steps-step">
                    <div className="impactinvest-home-invest-steps-step-icon-container">
                      <i className="fa fa-user-tie"></i>
                    </div>
                    <div className="impactinvest-home-invest-steps-step-content">
                      <h2 className="impactinvest-home-invest-steps-step-title">Échangez avec nos experts</h2>
                      <p>
                        Nos conseillers vous accompagnent tout au long de votre parcours d'investissement, garantissant une expérience fluide et personnalisée.
                      </p>
                    </div>
                  </div>
                  <div className="impactinvest-home-invest-steps-step">
                    <div className="impactinvest-home-invest-steps-step-icon-container">
                      <i className="fa fa-chart-line"></i>
                    </div>
                    <div className="impactinvest-home-invest-steps-step-content">
                      <h2 className="impactinvest-home-invest-steps-step-title">Commencez à investir en quelques clics</h2>
                      <p>
                        Suivez nos étapes simples pour créer votre compte, effectuer votre premier dépôt et suivre vos rendements.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

    </div>
  );
};

export default Homepage;

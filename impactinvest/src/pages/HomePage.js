import React from 'react';

const Homepage = () => {
  return (
    <div className="impactinvest-welcome">
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.google-analytics.com/ns.html?id=GTM-NS9GSVHC"
          height="0" 
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="google-tag-manager">
        </iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      <header className="impactinvest-header">
        <div className="impactinvest-brand">
          <a href="/" aria-label="Retour à l'accueil">
            <img 
              src="logo-impactinvest.png" 
              alt="ImpactInvest Logo" 
              className="impactinvest-logo" 
            />
          </a>
        </div>
      </header>

      <main className="impactinvest-main">
        <section className="impactinvest-description">
          <h1>Investissez dans l'avenir avec ImpactInvest</h1>
          <p>
            Imaginez un monde où chaque citoyen, entreprise ou gouvernement peut investir directement 
            dans des projets prometteurs, en toute transparence et sécurité. ImpactInvest vous offre cette 
            opportunité grâce à sa plateforme d'investissement basée sur la blockchain.
          </p>
        </section>

        <section className="impactinvest-problem">
          <h2>Le Problème</h2>
          <p>
            Les entrepreneurs, en particulier dans des pays comme le Sénégal, peinent à obtenir 
            des financements rapides, accessibles et transparents. Les processus traditionnels de 
            financement sont longs, coûteux et complexes. 
          </p>
          <p>
            D'un autre côté, les investisseurs, qu'ils soient citoyens ou organisations, 
            manquent souvent de confiance dans l'utilisation de leurs fonds. L'accès aux 
            opportunités d'investissement est souvent réservé aux grandes institutions.
          </p>
        </section>

        <section className="impactinvest-solution">
          <h2>Notre Solution</h2>
          <p>
            ImpactInvest permet aux entrepreneurs de soumettre leurs projets directement sur notre plateforme. 
            Les investisseurs peuvent financer ces projets de manière sécurisée en Franc CFA, qui sera converti 
            en cryptomonnaie, et recevront des tokens représentant leur part dans le projet.
          </p>
        </section>

        <section className="impactinvest-blockchain">
          <h2>Pourquoi la Blockchain ?</h2>
          <ul>
            <li>
              <strong>Transparence :</strong> Chaque transaction est enregistrée publiquement, garantissant une traçabilité totale.
            </li>
            <li>
              <strong>Sécurité :</strong> Les fonds sont protégés contre la fraude grâce à des protocoles de cryptographie avancés.
            </li>
            <li>
              <strong>Efficacité :</strong> Les retours sur investissement sont automatisés, sans intermédiaires coûteux.
            </li>
          </ul>
        </section>

        <section className="impactinvest-features">
          <h2>Caractéristiques de la plateforme</h2>
          <ul>
            <li>Facilité d'utilisation pour soumettre et financer des projets.</li>
            <li>Tokenisation des investissements.</li>
            <li>Redistribution automatisée des bénéfices via des contrats intelligents.</li>
          </ul>
        </section>

        <section className="impactinvest-market">
          <h2>Marché Cible</h2>
          <p>
            Notre marché principal concerne les entrepreneurs en quête de financement, ainsi que les citoyens 
            et organisations cherchant des opportunités d'investissement dans des projets locaux en toute sécurité.
          </p>
        </section>

        <section className="impactinvest-roadmap">
          <h2>Feuille de Route</h2>
          <ul>
            <li>Lancement de la version bêta dans les 6 prochains mois.</li>
            <li>Expansion régionale et internationale en Afrique de l'Ouest dans 12 à 18 mois.</li>
          </ul>
        </section>
      </main>

      <footer className="impactinvest-footer">
        <p>
          ImpactInvest : Rejoignez-nous pour révolutionner l'investissement et contribuer au développement 
          économique local en bénéficiant de retours sur investissement transparents et sécurisés.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;

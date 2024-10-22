import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row w-100">
          
          {/* Nos bureaux */}
          <div className="col-md-4 mb-4">
            <h5>Nos bureaux</h5>
            <FooterOffice 
              city="Dakar"
              country="SÉNÉGAL"
              address="Rue Mohamed V, Dakar"
              flagSrc="https://flagcdn.com/w320/sn.png"
              link="https://impactinst.sn"
            />
            <FooterOffice 
              city="Paris"
              country="FRANCE"
              address="10 rue de Rivoli, 75004 Paris"
              flagSrc="https://flagcdn.com/w320/fr.png"
              link="https://impactinst.fr"
            />
            <FooterOffice 
              city="Berlin"
              country="ALLEMAGNE"
              address="Friedrichstraße 123, 10117 Berlin"
              flagSrc="https://flagcdn.com/w320/de.png"
              link="https://impactinst.de"
            />
          </div>

          {/* Relation client */}
          <div className="col-md-2 mb-4">
            <h5>Relation client</h5>
            <FooterCTA 
              iconClass="fas fa-envelope" 
              title="contact@impactinst.com" 
              subtitle="POUR NOUS ÉCRIRE" 
              link="mailto:contact@impactinst.com"
            />
            <FooterCTA 
              iconClass="fas fa-phone" 
              title="(+221) 33 123 4567" 
              subtitle="POUR NOUS TÉLÉPHONER" 
              link="tel:+221331234567"
            />
            <FooterCTA 
              iconClass="fas fa-calendar" 
              title="Rendez-vous en ligne" 
              subtitle="PAR TÉLÉPHONE" 
              link="/prendre-rendez-vous/"
            />
          </div>

          {/* Réseaux sociaux */}
          <div className="col-md-2 mb-4">
            <h5>Réseaux sociaux</h5>
            <div className="d-flex justify-content-around">
              <FooterSocialLink iconClass="fab fa-linkedin" link="https://www.linkedin.com/company/impactinst" />
              <FooterSocialLink iconClass="fab fa-facebook" link="https://www.facebook.com/impactinst" />
              <FooterSocialLink iconClass="fab fa-twitter" link="https://twitter.com/ImpactInst" />
              <FooterSocialLink iconClass="fab fa-instagram" link="https://www.instagram.com/impactinst/" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-2 mb-4">
            <h5>Newsletter</h5>
            <FooterCTA 
              title="Abonnez-vous à la newsletter"
              link="/inscription-newsletter/"
            />
          </div>

          {/* Aide et ressources */}
          <div className="col-md-2 mb-4">
            <h5>Aide et ressources</h5>
            <FooterLink title="Mentions légales" link="/legal/mentions-legales" />
            <FooterLink title="Confidentialité" link="/legal/politique-de-confidentialite" />
            <FooterLink title="Réclamations" link="/legal/reclamations" />
            <FooterLink title="Conditions générales" link="/legal/conditions-generales" />
            <FooterLink title="Conflits d'intérêts" link="/legal/conflits-d-interets" />
            <FooterLink title="Recrutement" link="/recrutement" />
            <FooterLink title="Espace presse" link="/presse" />
            <FooterLink title="Cookies" link="javascript:openAxeptioCookies()" />
            <FooterLink title="Indicateurs de performance" link="/indicateurs-de-performance/" />
            <FooterLink title="Rapport d'impact" link="/rapport-d-impact.pdf" />
          </div>

        </div>
        
        {/* Footer bottom */}
        <div className="w-100 text-center d-flex justify-content-between align-items-center pt-4 border-top">
          <div className="impactinst-footer-brand">
            <svg id="impactinst-brand-logo-v" className="impactinst-brand-logo" viewBox="0 0 227.8 216"></svg>
          </div>
          <div className="impactinst-footer-risk w-100">
            <small>Investir présente un risque de perte en capital et de liquidité.<br />
            N'investissez que l'argent dont vous n'avez pas besoin immédiatement et diversifiez votre épargne.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Composant pour les bureaux
const FooterOffice = ({ city, country, address, flagSrc, link }) => (
  <div className="mb-3">
    <div className="d-flex justify-content-between">
      <strong>{city}</strong>
      <a href={link}>
        <span>{country}</span>
        <img alt={country} width="12px" className="ml-2" src={flagSrc} />
      </a>
    </div>
    <p>{address}</p>
  </div>
);

// Composant pour les CTA (Call to Action)
const FooterCTA = ({ iconClass, title, subtitle, link }) => (
  <a href={link} className="text-light d-flex align-items-center mb-2">
    {iconClass && <i className={`${iconClass} mr-2`}></i>}
    <div>
      <strong>{title}</strong>
      {subtitle && <div>{subtitle}</div>}
    </div>
  </a>
);

// Composant pour les liens de réseaux sociaux
const FooterSocialLink = ({ iconClass, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-light">
    <i className={iconClass}></i>
  </a>
);

// Composant pour les liens
const FooterLink = ({ title, link }) => (
  <a href={link} className="text-light d-block mb-2">
    {title}
  </a>
);

export default Footer;

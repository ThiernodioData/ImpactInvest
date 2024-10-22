import React from 'react';
import '../styles/fonction.css';
import image4 from '../images/maturite.webp';
import image3 from '../images/fiscalite.webp';
import image2 from '../images/investir.webp';
import image1 from '../images/compte.webp';
import image0 from '../images/tel.png';

const FunctioningPage = () => {
  return (
    <div className="functioning-page">
      {/* Section 1: Introduction */}
      <div id='section1'>
        <div>
          <h1>Investir sur ImpactInvest</h1><br />
          <h3>Comment ça marche ?</h3>
          <p>Vous avez décidé de prendre en main votre épargne et de vous engager dans un investissement responsable avec Impact Invest.
            Quelles sont les étapes à suivre pour investir et avoir un impact positif ?
          </p>
        </div>
        <div>
          <img src={image0} alt="tel" className="logo" />
        </div>
      </div>

      {/* Section 2: Account Creation - Image à droite */}
      <div className='section2'>
        <div className='g'>
          <h1>Créer un compte</h1>
          <div>
            <h3>Inscription</h3>
            <p>Vous devez créer un compte sur notre plateforme en vous inscrivant avec votre adresse e-mail et votre mot de passe.
              Vous recevrez un e-mail de confirmation pour valider votre inscription.
            </p>
          </div>
          <div>
            <h3>Validation</h3>
            <p>Vous devez valider votre compte en cliquant sur le lien de confirmation envoyé à votre adresse e-mail.</p>
          </div>
          <div>
            <h3>Connexion</h3>
            <p>Vous pouvez vous connecter à votre compte en utilisant votre adresse e-mail et votre mot de passe.</p>
          </div>
          <div>
            <h3>Vérification</h3>
            <p>Vous devez vérifier votre identité et votre adresse en envoyant des documents à Impact Invest.</p>
          </div>
        </div>
        <div className='d'>
          <img src={image1} alt="compte" className="logo" />
        </div>
      </div>

      {/* Section 3: Investing - Image à gauche */}
      <div id='section3'>
        <div className='d'>
          <img src={image2} alt="investir" className="logo" />
        </div>
        <div className='g'>
          <h2>Comment investir avec Impact Invest</h2>
          <div>
            <h3>Faites votre premier investissement</h3>
            <p>Lancez-vous dans l'investissement à impact en quelques étapes simples.</p>
          </div>
          <div>
            <h3>Explorez les opportunités</h3>
            <p>Accédez à l'onglet Investir pour découvrir les projets disponibles et à venir. 
              Parcourez une large gamme de projets à fort impact social et environnemental.
            </p>
          </div>
          <div>
            <h3>Sélectionnez un projet</h3>
            <p>Comparez les opportunités selon les critères tels que les rendements, la durée, la nature du projet, 
              l'impact social ou environnemental, et la localisation.
            </p>
          </div>
          <div>
            <h3>Investissez dans un projet</h3>
            <p>Cliquez sur Investir et indiquez le montant que vous souhaitez placer pour soutenir un projet.</p>
          </div>
          <div>
            <h3>Signez le contrat d'investissement</h3>
            <p>Lisez attentivement le contrat de souscription et signez-le électroniquement pour confirmer votre participation.</p>
          </div>
          <div>
            <h3>Effectuez votre paiement</h3>
            <p>Choisissez un moyen de paiement adapté : carte bancaire, virement, ou d’autres options disponibles sur la plateforme.</p>
          </div>
        </div>
      </div>

      {/* Section 4: Fiscalité - Image à droite */}
      <div id='section4'>
        
        <div className='g'>
          <h2>Fiscalité de votre investissement avec ImpactInvest</h2>
          <div>
            <h3>Déclaration et prélèvement automatique des impôts</h3>
            <p>Si votre résidence fiscale est en Afrique ou dans un pays où nous opérons, Impact Invest s'occupe de tout pour vous.
              Nous avons mis en place un système automatisé de déclaration fiscale et de prélèvement afin que vous receviez vos rendements nets.
            </p>
          </div>
          <div>
            <h3>Déclaration manuelle aux impôts</h3>
            <p>Si votre résidence fiscale est en dehors de nos zones d'opération, Impact Invest vous fournit des 
              documents fiscaux personnalisés pour faciliter votre déclaration manuelle.
            </p>
          </div>
          <div>
            <h3>Dispense de prélèvement automatique</h3>
            <p>Si vous êtes non imposable, vous pouvez désactiver le prélèvement automatique directement depuis votre espace investisseur.</p>
          </div>
        </div>
        <div>
          <img src={image3} alt="fiscalite" className="logo" />
        </div>
      </div>

      {/* Section 5: Maturité - Image à gauche */}
      <div id='section5'>
        <div className='d'>
          <img src={image4} alt="maturite" className="logo" />
        </div>
        <div className='g'>
          <h2>Maturité de votre investissement avec Impact Invest</h2>
          <div>
            <h3>Récupérez votre capital</h3>
            <p>Selon les conditions indiquées sur la page dédiée au projet, vous récupérerez votre capital à une fréquence régulière.</p>
          </div>
          <div>
            <h3>Versement des rendements</h3>
            <p>Vos intérêts ou dividendes seront versés à intervalles réguliers, en fonction des modalités de l'investissement choisi.</p>
          </div>
          <div>
            <h3>Remboursement anticipé</h3>
            <p>Cela s'effectue selon les dispositions précisées dans la Fiche d'Informations Clés (FIC).</p>
          </div>
          <div>
            <h3>Suivi du projet</h3>
            <p>Si vous choisissez d'activer les notifications, vous recevrez des mises à jour régulières sur l'évolution du projet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctioningPage;

// Modifiez le fichier src/pages/InvestPage.js existant
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import InvestmentPlatform from '../../artifacts/contracts/InvestmentPlatform.sol/InvestmentPlatform.json';
const InvestPage = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [contract, setContract] = useState(null);

  // const [projects] = useState([
  //   { id: 1, name: 'Projet Énergie Solaire', description: 'Investissez dans un parc solaire en Afrique.', type: 'renewable' },
  //   { id: 2, name: 'Projet Eau Potable', description: 'Soutenez l’accès à l’eau potable pour des communautés rurales.', type: 'social' },
  //   { id: 3, name: 'Projet Forêt Durable', description: 'Aidez à protéger les forêts et les communautés.', type: 'environmental' },
  //   { id: 4, name: 'Projet Éducation Afrique', description: 'Financer l’accès à l’éducation en Afrique.', type: 'africa' },
  //   { id: 5, name: 'Projet Hydraulique', description: 'Investir dans des barrages pour énergies renouvelables.', type: 'renewable' },
  //   { id: 6, name: 'Projet Santé Afrique', description: 'Contribuer à des initiatives de santé en Afrique.', type: 'africa' },
  // ]);

  // Filtre les projets selon le type
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.type === filter);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const cardStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const filterStyle = {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  };

 ////

  return (
    <div>
      <h1>Investir dans des projets à impact</h1>

      {/* Section de filtre */}
      <div style={filterStyle}>
        <button
          style={buttonStyle}
          onClick={() => setFilter('all')}
        >
          Tous les projets
        </button>
        <button
          style={buttonStyle}
          onClick={() => setFilter('renewable')}
        >
          Projets Renouvelables
        </button>
        <button
          style={buttonStyle}
          onClick={() => setFilter('social')}
        >
          Projets Sociaux
        </button>
        <button
          style={buttonStyle}
          onClick={() => setFilter('africa')}
        >
          Projets Afrique
        </button>
        <button
          style={buttonStyle}
          onClick={() => setFilter('environmental')}
        >
          Projets Environnementaux
        </button>
      </div>

      {/* Grille de projets */}
      <div style={gridStyle}>
        {filteredProjects.map((project) => (
          <div key={project.id} style={cardStyle}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button style={buttonStyle} onClick={() => handleInvest(project.id)}>
              Investir
            </button>
            <Link to={`/project/${project.id}`}>
              <button style={{ ...buttonStyle, backgroundColor: '#008CBA' }}>Détails</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x..."; // Adresse du contrat déployé
        const investmentPlatform = new ethers.Contract(contractAddress, InvestmentPlatform.abi, signer);
        setContract(investmentPlatform);

        // Charger les projets depuis le smart contract
        const projectCount = await investmentPlatform.projectCount();
        const loadedProjects = [];
        for (let i = 1; i <= projectCount; i++) {
          const project = await investmentPlatform.getProject(i);
          loadedProjects.push({
            id: project.id.toNumber(),
            name: project.name,
            description: project.description,
            fundingGoal: ethers.utils.formatEther(project.fundingGoal),
            currentFunding: ethers.utils.formatEther(project.currentFunding),
            isActive: project.isActive,
          });
        }
        setProjects(loadedProjects);
      }
    };

    init();
  }, []);

  // ... (styles restent les mêmes)

  const handleInvest = async (projectId) => {
    if (contract) {
      try {
        const amount = ethers.utils.parseEther("1"); // Investissement de 1 ETH par exemple
        const tx = await contract.invest(projectId, amount);
        await tx.wait();
        console.log(`Investissement réussi dans le projet ID : ${projectId}`);
        // Recharger les projets pour mettre à jour les montants
      } catch (error) {
        console.error("Erreur lors de l'investissement:", error);
      }
    }
  };
 };

// const InvestPage = () => {
//   const [filter, setFilter] = useState('all');
//   const [projects] = useState([
//     { id: 1, name: 'Projet Énergie Solaire', description: 'Investissez dans un parc solaire en Afrique.', type: 'renewable' },
//     { id: 2, name: 'Projet Eau Potable', description: 'Soutenez l’accès à l’eau potable pour des communautés rurales.', type: 'social' },
//     { id: 3, name: 'Projet Forêt Durable', description: 'Aidez à protéger les forêts et les communautés.', type: 'environmental' },
//     { id: 4, name: 'Projet Éducation Afrique', description: 'Financer l’accès à l’éducation en Afrique.', type: 'africa' },
//     { id: 5, name: 'Projet Hydraulique', description: 'Investir dans des barrages pour énergies renouvelables.', type: 'renewable' },
//     { id: 6, name: 'Projet Santé Afrique', description: 'Contribuer à des initiatives de santé en Afrique.', type: 'africa' },
//   ]);

//   // Filtre les projets selon le type
//   const filteredProjects = filter === 'all'
//     ? projects
//     : projects.filter((project) => project.type === filter);

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '20px',
//     padding: '20px',
//   };

//   const cardStyle = {
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '8px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginRight: '10px',
//   };

//   const filterStyle = {
//     marginBottom: '20px',
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px',
//   };

//   const handleInvest = (projectId) => {
//     console.log(`Investir dans le projet ID : ${projectId}`);
//   };

//   return (
//     <div>
//       <h1>Investir dans des projets à impact</h1>

//       {/* Section de filtre */}
//       <div style={filterStyle}>
//         <button
//           style={buttonStyle}
//           onClick={() => setFilter('all')}
//         >
//           Tous les projets
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => setFilter('renewable')}
//         >
//           Projets Renouvelables
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => setFilter('social')}
//         >
//           Projets Sociaux
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => setFilter('africa')}
//         >
//           Projets Afrique
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => setFilter('environmental')}
//         >
//           Projets Environnementaux
//         </button>
//       </div>

//       {/* Grille de projets */}
//       <div style={gridStyle}>
//         {filteredProjects.map((project) => (
//           <div key={project.id} style={cardStyle}>
//             <h3>{project.name}</h3>
//             <p>{project.description}</p>
//             <button style={buttonStyle} onClick={() => handleInvest(project.id)}>
//               Investir
//             </button>
//             <Link to={`/project/${project.id}`}>
//               <button style={{ ...buttonStyle, backgroundColor: '#008CBA' }}>Détails</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default InvestPage;

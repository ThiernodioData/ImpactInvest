import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/InvestPage.css';  // CSS externalisé import '../styles/fonction.css'

const InvestPage = () => {
  const navigate = useNavigate(); 
  const [filter, setFilter] = useState('all');
  const [projects] = useState([
    { id: 1, name: 'Projet Énergie Solaire', description: 'Investissez dans un parc solaire en Afrique.', type: 'renewable' },
    { id: 2, name: 'Projet Eau Potable', description: 'Soutenez l’accès à l’eau potable pour des communautés rurales.', type: 'social' },
    { id: 3, name: 'Projet Forêt Durable', description: 'Aidez à protéger les forêts et les communautés.', type: 'environmental' },
    { id: 4, name: 'Projet Éducation Afrique', description: 'Financer l’accès à l’éducation en Afrique.', type: 'africa' },
    { id: 5, name: 'Projet Hydraulique', description: 'Investir dans des barrages pour énergies renouvelables.', type: 'renewable' },
    { id: 6, name: 'Projet Santé Afrique', description: 'Contribuer à des initiatives de santé en Afrique.', type: 'africa' },
  ]);

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter);

  // const handleInvest = (projectId) => {
  //   console.log(`Investir dans le projet ID : ${projectId}`);
  // };

  return (
    <div className="invest-page">
      <h1>Investir dans des projets à impact</h1>

      {/* Section de filtre */}
      <div className="filter-buttons">
        {['all', 'renewable', 'social', 'africa', 'environmental'].map(type => (
          <button
            key={type}
            className={`filter-button ${filter === type ? 'active' : ''}`}
            onClick={() => setFilter(type)}
          >
            {type === 'all' ? 'Tous les projets' : `Projets ${type.charAt(0).toUpperCase() + type.slice(1)}`}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="project-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
            <button className="invest-button" onClick={() => navigate('/portfolio/')}>Investir</button>
              <Link to={`/project/${project.id}`} className="details-button">Détails</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestPage;

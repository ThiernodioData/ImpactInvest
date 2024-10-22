import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsPage = () => {
  const { id } = useParams();

  // Détails du projet fictif pour chaque ID
  const projectDetails = {
    1: { name: 'Projet Énergie Solaire', description: 'Parc solaire en Afrique', type: 'renewable' },
    2: { name: 'Projet Eau Potable', description: 'Accès à l’eau potable pour des communautés rurales', type: 'social' },
    3: { name: 'Projet Forêt Durable', description: 'Protéger les forêts et les communautés', type: 'environmental' },
    4: { name: 'Projet Éducation Afrique', description: 'Accès à l’éducation en Afrique', type: 'africa' },
    5: { name: 'Projet Hydraulique', description: 'Barrages pour énergies renouvelables', type: 'renewable' },
    6: { name: 'Projet Santé Afrique', description: 'Initiatives de santé en Afrique', type: 'africa' },
  };

  const project = projectDetails[id];

  if (!project) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Projet non trouvé.</div>;
  }

  // Styles en ligne (inline styling)
  const pageStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '18px',
    color: '#555',
  };

  const typeStyle = {
    marginTop: '10px',
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#777',
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>{project.name}</h1>
      <p style={descriptionStyle}>{project.description}</p>
      <p style={typeStyle}>Type de projet : {project.type}</p>
    </div>
  );
};

export default ProjectDetailsPage;

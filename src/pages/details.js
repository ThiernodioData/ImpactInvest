import React from 'react';
import { useParams } from 'react-router-dom';
import parc from '../images/parc.webp';
import eau from '../images/eau.webp';
import hydraulique from '../images/hydraulique.jpg';
import foret from '../images/foret.webp';
import sante from '../images/sante.webp';
import school from '../images/school.webp';


const ProjectDetailsPage = () => {
  const { id } = useParams();

  // Détails du projet avec descriptions complètes
  const projectDetails = {
    1: {
      name: 'Projet Énergie Solaire',
      image: parc,
      description: `Ce projet vise à établir un vaste parc solaire en Afrique, utilisant des panneaux photovoltaïques avancés pour capter l’énergie du soleil et la transformer en électricité propre et renouvelable. Situé dans une région particulièrement ensoleillée, ce parc solaire contribue à réduire les émissions de carbone et à promouvoir des pratiques énergétiques durables. En outre, le projet soutient le développement économique local en créant des emplois pour les communautés environnantes, offrant une source fiable d’électricité pour des infrastructures locales, et encourage une prise de conscience écologique au sein des populations locales.`,
      type: 'renouvelable',
    },
    2: {
      name: 'Projet Eau Potable',
      image: eau,
      description: `Le projet Eau Potable vise à améliorer l'accès à l'eau potable dans les communautés défavorisées. Le principal objectif est de garantir un accès fiable et sûr à l'eau potable pour les populations privées de ce besoin essentiel. Cela inclut la mise en place d'infrastructures pour le traitement, la distribution et la conservation de l'eau. En partenariat avec des ONG et des autorités locales, ce projet contribue directement à la réduction des maladies hydriques, à l'amélioration de la qualité de vie et au développement économique par un meilleur accès à l'eau pour les activités agricoles et commerciales.`,
      type: 'social',
    },
    3: {
      name: 'Projet Forêt Durable',
      image: foret,
      description: `Le projet Forêt Durable se concentre sur la protection et la gestion durable des forêts africaines. Il inclut des initiatives de reforestation, des pratiques de gestion forestière durable et l'éducation des communautés locales sur l'importance de la conservation des forêts. En partenariat avec les gouvernements locaux et les ONG, le projet contribue à la biodiversité, à la lutte contre le changement climatique et à la création d'emplois pour les communautés dépendantes des ressources forestières.`,
      type: 'environnemental',
    },
    4: {
      name: 'Projet Éducation Afrique',
      image: school,
      description: `Le projet Éducation Afrique a pour objectif de rendre l'éducation accessible aux enfants des régions rurales en Afrique. Ce projet comprend la construction d'écoles, la fourniture de matériel pédagogique, et la formation des enseignants locaux pour assurer une éducation de qualité. En promouvant l'éducation, le projet vise à réduire les inégalités, à favoriser le développement économique et social et à créer un avenir meilleur pour les jeunes générations.`,
      type: 'afrique',
    },
    5: {
      name: 'Projet Hydraulique',
      image: hydraulique,
      description: `Le projet Hydraulique se concentre sur la construction de barrages et d'infrastructures pour la gestion et l'utilisation durable de l'eau. Ces infrastructures permettent de répondre aux besoins en eau pour l'agriculture, l'industrie et la consommation locale, tout en produisant des énergies renouvelables. Ce projet contribue à l'autosuffisance énergétique de la région, au développement agricole et à l'amélioration de la sécurité en eau pour les communautés locales.`,
      type: 'renouvelable',
    },
    6: {
      name: 'Projet Santé Afrique',
      image: sante,
      description: `Le Projet Santé Afrique est une initiative pour améliorer l'accès aux soins de santé dans les régions les plus isolées du continent africain. Il comprend la construction de centres de santé, la fourniture de médicaments essentiels et de vaccins, ainsi que des programmes de sensibilisation sur la prévention des maladies. Ce projet vise à réduire les taux de mortalité, à améliorer les conditions sanitaires et à promouvoir le bien-être dans les communautés rurales.`,
      type: 'afrique',
    },
  };

  const project = projectDetails[id];

  if (!project) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Projet non trouvé.</div>;
  }

  // Styles en ligne
  const pageStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '10px',
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
      {project.image && (
        <img src={project.image} alt={project.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
      )}
      <p style={descriptionStyle}>{project.description}</p>
      <p style={typeStyle}>Type de projet : {project.type}</p>
    </div>
  );
};

export default ProjectDetailsPage;

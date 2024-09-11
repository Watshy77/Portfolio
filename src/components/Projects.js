// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background-color: #444;
  color: white;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const ProjectCard = styled.div`
  background-color: #555;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: left;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  text-align: center; /* Aligner les titres des projets */
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsTitle>Mes Projets</ProjectsTitle>
            <ProjectGrid>
                <ProjectCard>
                    <ProjectTitle>Projet Spotify</ProjectTitle>
                    <ProjectDescription>
                        Refonte du site Spotify.
                        Utilisation de VueJS pour la partie front-end.
                        Utilisation de l'API Spotify pour le back-end.
                    </ProjectDescription>
                </ProjectCard>
                <ProjectCard>
                    <ProjectTitle>Projet Freewup</ProjectTitle>
                    <ProjectDescription>
                        Création d'une application web pour les freelances.
                        Projet de groupe avec des Marketteurs et des Designers.
                        Utilisation de Symfony pour le back-end et Twig pour le front-end.
                    </ProjectDescription>
                </ProjectCard>
                <ProjectCard>
                    <ProjectTitle>Stage Groupe UP</ProjectTitle>
                    <ProjectDescription>
                        Développement en Symfony et Jquery.
                        En charge d'une fonctionnalité d'import d'un fichier Excel en base de données.
                        Refonte de tous le style de l'application.
                        Partcipations à une formation RGPD.
                    </ProjectDescription>
                </ProjectCard>
            </ProjectGrid>
        </ProjectsContainer>
    );
};

export default Projects;
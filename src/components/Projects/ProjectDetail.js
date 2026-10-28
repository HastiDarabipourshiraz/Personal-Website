import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Particle from "../Particle";
import { projects } from "./projectData";

function ProjectDetail({ projectId }) {
  const index = projects.findIndex((project) => project.id === projectId);
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <Container fluid className="project-detail-section page-with-header">
      <Particle />
      <Container className="project-detail-content">
        <Link to="/project" className="project-back-link">
          <AiOutlineArrowLeft aria-hidden="true" /> All projects
        </Link>
        <header className="page-header">
          <p className="project-category">{project.category}</p>
          <h1 className="project-heading">{project.title}</h1>
        </header>
        <figure className="project-detail-figure">
          <img src={project.image} alt={`${project.title} project`} />
        </figure>
        <div className="project-detail-layout">
          <section aria-labelledby="project-overview">
            <h2 id="project-overview">About the project</h2>
            <p>{project.description}</p>
            <h2>Key features</h2>
            <ul className="project-features">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </section>
          <aside className="project-resources" aria-label="Project resources">
            <h2>Explore the project</h2>
            <Button
              href={project.demoUrl || undefined}
              target={project.demoUrl ? "_blank" : undefined}
              rel={project.demoUrl ? "noreferrer" : undefined}
              disabled={!project.demoUrl}
              aria-describedby={!project.demoUrl ? "demo-status" : undefined}
            >
              <CgWebsite aria-hidden="true" /> Demo
            </Button>
            {!project.demoUrl && <p id="demo-status" className="demo-status">Demo not available yet.</p>}
            {project.papers.length > 0 && (
              <>
                <h3>Related publications</h3>
                <ul>
                  {project.papers.map((paper) => (
                    <li key={paper.doi}>
                      <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer">{paper.title}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </div>
        <nav className="project-detail-navigation" aria-label="Project navigation">
          <Link to="/project"><AiOutlineArrowLeft aria-hidden="true" /> All projects</Link>
          <Link to={`/project${nextProject.id}`}>
            Next: {nextProject.title} <AiOutlineArrowRight aria-hidden="true" />
          </Link>
        </nav>
      </Container>
    </Container>
  );
}

export default ProjectDetail;

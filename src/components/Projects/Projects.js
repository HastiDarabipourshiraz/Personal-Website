import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects } from "./projectData";

function Projects() {
  return (
    <Container fluid className="project-section page-with-header">
      <Particle />
      <Container>
        <div className="page-header">
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects</strong>
          </h1>
          <p style={{ color: "#8C7960" }}>
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <Row className="projects-grid">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={project.image}
                title={project.title}
                description={project.description}
                demoLink={`#/project${project.id}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

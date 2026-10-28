import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

const publications = [
  {
    title: "DataBites: An embodied and co-creative museum exhibit to foster children's understanding of supervised machine learning.",
    coauthors: ", Dev Ambani, and Duri Long.",
    year: "2024",
    venue: "In Proceedings of the 2024 ACM Conference on Creativity & Cognition (C&C'24).",
    doi: "10.1145/3635636.3664247",
  },
  {
    title: "Introducing AI Without Computers: Hands-On Literacy and Ethical Sense-Making for Young Learners.",
    coauthors: ", Maalvika Bhat, and Duri Long.",
    year: "2025",
    venue: "In Proceedings of the 2025 ACM Conference on Human Factors in Computing Systems (CHI 2025).",
    doi: "10.1145/3706599.3719876",
  },
  {
    title: "AI DoodleLab: Fostering Middle School Students' AI Literacy through Project-Based Creative Drawing.",
    coauthors: ".",
    year: "2025",
    venue: "In Proceedings of the 2025 ACM Conference on Creativity & Cognition (C&C'25).",
    doi: "10.1145/3698061.3734417",
  },
  {
    title: "AI Unplugged: Tangible Simulations of AI Reasoning Processes for Middle School Learners",
    coauthors: ", Lily NG, Grace Wang, Sophie Rollins, and Duri Long.",
    year: "2026",
    venue: "In Proceedings of the 2026 ACM Transactions on Computing Education (TOCE) Journal, Special Issue on Embodiment in Computing Education.",
    doi: "10.1145/3786761",
  },
  {
    title: "Designing and Evaluating Museum Exhibit Prototypes to Foster Middle Schoolers’ AI Literacy through Creativity & Embodiment.",
    coauthors: ", Sophie Rollins, Milka Trajkova, Chengzhi Zhang, Yasmine Belghith, Tom McKlin, Jessica Roberts, Brian Magerko, Duri Long.",
    year: "2026",
    venue: "In Proceedings of the 2026 ACM Conference on Tangible and Embedded Interaction (TEI '26).",
    doi: "10.1145/3731459.3773305",
  },
  {
    title: "BiasViz: A Project-Based, Narrative-Centered Learning Tool for Engaging Middle Schoolers in Critical Thinking about AI Biases.",
    coauthors: ", Shiyan Jiang, Dongkuan Xu, and Duri Long.",
    year: "2026",
    venue: "In Proceedings of the 2026 ACM Conference on Human Factors in Computing Systems (CHI 2026).",
    doi: "10.1145/3772318.3791555",
  },
  {
    title: "From Prompt to Process: Supporting Creative Processes and Agency through Traceable Component-Based AI Image Generation",
    coauthors: " and Duri Long.",
    year: "2027",
    venue: "Under review at the 2027 ACM Conference on Human Factors in Computing Systems (CHI 2027).",
  },
];

function About() {
  return (
    <Container fluid className="about-section page-with-header">
      <Particle />
      <Container className="page-header">
        <h1 className="project-heading">
          My <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: "#8C7960" }}>
          Here are a few papers I've worked on recently.
        </p>
        <p>
          <a
            href="https://scholar.google.com/citations?user=oXUbZ1MAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="doi-icon-colour"
          >
            Link to Google Scholar
          </a>
        </p>
      </Container>
      <Row className="publication-section">
        <ul>
          {[...publications].reverse().map((publication) => (
            <li key={publication.title}>
              <h2 className="publication-title">{publication.title}</h2>
              <p className="publication-conference">{publication.venue}</p>
              <p className="publiaction-detail">
                <strong>Hasti Darabipourshiraz</strong>
                {publication.coauthors} <strong>{publication.year}</strong>.
                {publication.doi && (
                  <>
                    {" "}
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="doi-icon-colour doi-icons"
                    >
                      DOI:{publication.doi}
                    </a>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
}

export default About;

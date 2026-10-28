import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import myImg from "../../Assets/ax.jpg";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section className="hasti-page">
      <Container fluid className="home-about-section" id="about">
        <Particle />
        <Container className="home-content">
          <Row className="hasti-intro">
            <Col xs={12} lg={7} className="home-header">
              <div className="hasti-greeting">
              <h1 className="heading">
                Hi,{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Hasti!</strong>
              </h1>
              <div className="hasti-roles">
                <Type />
              </div>
              </div>
              <p className="home-about-body">
              I'm a fourth-year PhD student in Computer Science at Northwestern University. <br />
                My research focuses on designing interactive tools and systems that make AI more intuitive and approachable. <br />
                I’m particularly interested in translating complex AI concepts into engaging experiences through <b className="purple">creative interfaces, museum exhibits, and hands-on activities.</b> My work lies at the intersection of <b className="purple">human-computer interaction, design, and education.</b><br />
                With a background in both <b className="purple">design and development,</b> I enjoy working across disciplines — from prototyping interfaces and coding interactive apps to experimenting with interaction design.
            </p>
            </Col>
            <Col xs={12} lg={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid hasti-portrait" alt="Hasti Darabipourshiraz" />
            </Tilt>
          </Col>
        </Row>
      </Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h3>Get In Touch With Me</h3>
            <p>
            Here's how you can <span className="purple">contact </span> me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:hastidarabipourshiraz2028@u.northwestern.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hasti-darabipourshiraz-66ba5a29a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

    </section>
    

    
  );
}

export default Home;

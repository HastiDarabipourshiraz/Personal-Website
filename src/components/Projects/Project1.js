import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ax.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              <br />
              <br />I'm a second-year PhD student in Computer Science at Northwestern University. <br />
                My research focuses on designing interactive tools and systems that make AI more intuitive and approachable. <br />
                I’m particularly interested in translating complex AI concepts into engaging experiences through <b className="purple">creative interfaces, museum exhibits, and hands-on activities.</b> My work lies at the intersection of <b className="purple">human-computer interaction, design, and education.</b><br />
                With a background in both <b className="purple">design and development,</b> I enjoy working across disciplines — from prototyping interfaces and coding interactive apps to experimenting with interaction design.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

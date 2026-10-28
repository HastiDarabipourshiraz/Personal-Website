import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      )}
      <Card.Body>
        <Card.Title style={{ fontWeight: 900}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Read more"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

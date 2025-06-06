import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartchatbot from "../../Assets/Projects/smartchatbot.png";
import cinemundo from "../../Assets/Projects/cinemundo.png";
import insurai from "../../Assets/Projects/insurai.png";
import mykalory from "../../Assets/Projects/mykalory.png";
import onthefly from "../../Assets/Projects/onthefly.png";
import yolov8 from "../../Assets/Projects/tracking-counting-yolov8.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartchatbot}
              isBlog={false}
              title="Library Smart Chatbot"
              description="A 24/7 AI agent to streamline library services using Node.js and React, GPT-4 API, integrated internal APIs for resource recommendations, room reservations, and device rentals for Miami University community."
              ghLink="https://github.com/Meng-V/smartchatbot"
              demoLink="https://new.lib.miamioh.edu/smartchatbot/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinemundo}
              isBlog={false}
              title="CineMundo"
              description="A digital platform dedicated to the cinema community using React, Node.js, and PostgreSQL. It offers a personalized space where users can curate, organize, and immerse themselves in a world of cinematic artistry spanning countries, timelines, and genres."
              ghLink="https://github.com/TranHVLoc/CineMundo"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insurai}
              isBlog={false}
              title="InsurAI"
              description="An AI-driven chatbot which simplifies understanding of insurance policies by intelligently parsing and explaining Evidence of Coverage documents using Cohere AI and Weaviate vector database on Bun runtime with React for the frontend."
              ghLink="https://github.com/dominhnhut01/healthcare_insurance_bot"
              demoLink="https://devpost.com/software/insurai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mykalory}
              isBlog={false}
              title="My-Kalory"
              description="Are you tired of typing in calories and macros intake to a calorie tracking app? We got you! My-Kalory is a web application where you can just scan the nutrition label of what you eat; we will analyze and track your nutrition intake automatically!"
              ghLink="https://github.com/dominhnhut01/revolutionuc2023"
              demoLink="https://my-kalory.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onthefly}
              isBlog={false}
              title="On The Fly"
              description="Planning a big trip like a bachelor party, graduation tour, or road trip can get complicated, especially when balancing different schedules and budgets. This web app makes planning trips with friends and family a breeze, allowing a user to create a new trip and add destinations to that trip using React, Node.js, and PostgreSQL"
              ghLink="https://github.com/TranHVLoc/OnTheFly"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yolov8}
              isBlog={false}
              title="YOLOv8 Object Tracking for Self-Driving Cars"
              description="Constructed a Computer Vision model for self-driving cars by integrating YOLOv8, ByteTracker, and Roboflow’s SuperVision libraries to efficiently localize and track moving vehicles, providing an autonomous vehicle navigation."
              ghLink="https://github.com/TranHVLoc/ObjectTrackingYOLOv8"
              demoLink="https://drive.google.com/file/d/1-0L94WTjH7vAqYJBe8gp0j1sg6lhC-Uh"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJupyter,
  SiKalilinux,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
    </Row>
  );
}

export default Toolstack;

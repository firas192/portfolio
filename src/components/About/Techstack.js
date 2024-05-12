import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {

  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,

  DiGit,

  
  
} from "react-icons/di";
import {
   
  SiZoom,

  SiMysql,

  SiWireshark,
  SiLogitech,
  SiCisco,
  SiVmware,  
  SiPaloaltosoftware
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";



import { TbSdk } from "react-icons/tb"
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiZoom />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLogitech />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPaloaltosoftware />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiCisco />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVmware />
        </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
        </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <TbSdk />
      </Col>

   

    </Row>
  );
}

export default Techstack;

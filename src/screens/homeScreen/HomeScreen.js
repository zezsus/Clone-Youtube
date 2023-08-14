import React from "react";
import "./HomeScreen.scss";
import { Container, Row, Col } from "react-bootstrap";
// import icons from "../../until/icons";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesbars/Categoriesbar";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <CategoriesBar className="categoriesbar" />
      <Container>
        <Row>
          {[...new Array(21)].map(() => {
            return (
              <Col>
                <Video />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;

import React from "react";
import { Container, Row, Col } from "../../node_modules/react-bootstrap";
import StarRating from "./StarRating";

const BornedIdea = ({
  number,
  handleEdit,
  idea,
  date,
  shortTitle,
  detailDescription,
  expectationDescribe,
  ideaCategory,
  ideaRating,
  setRatingStar,
  handleDelete,
}) => {
  const { id } = idea;

  return (
    <div className="bornedDiv">
      <Container className="categoryField">
        <Row className="bornedHeader">
          <Col className="text-center" md={4}>
            <label className="bornedHeaderElements">order number :</label>
            {number}{" "}
          </Col>
          <Col className="text-center" md={4}>
            <label className="bornedHeaderElements">date :</label>
            {date}{" "}
          </Col>
          <Col className="text-center" md={4}>
            <label className="bornedHeaderElements">
              category : {ideaCategory}
            </label>
          </Col>
        </Row>

        <Row className="bornedBody">
          <Container>
            <Row className="bornedBodyElements">
              <Col className="text-center text-title">{shortTitle}</Col>
            </Row>
            <Row className="bornedBodyElements">
              <Col className="text-center">
                <label className="bornedBodyElements text-title">
                  detail description : {detailDescription}
                </label>
              </Col>
            </Row>
            <Row className="bornedBodyElements">
              <Col className="text-center">
                <label className="bornedBodyElements text-title">
                  my expectation from idea : {expectationDescribe}
                </label>
              </Col>
            </Row>
            <Row className="bornedBodyElements">
              <Col className="text-center">
                <label className="bornedBodyElements">
                  <StarRating setRatingStar={setRatingStar} />
                </label>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="bornedButtons">
          <Col className="text-center">
            <button className="text-title" onClick={() => handleEdit(id)}>
              edit
            </button>
          </Col>
          <Col className="text-center">
            <button className="text-title" onClick={() => handleDelete(id)}>
              delete
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BornedIdea;

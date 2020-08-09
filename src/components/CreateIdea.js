import React from "react";
import { Container, Row, Col } from "../../node_modules/react-bootstrap";

const CreateIdea = ({
  handleSubmit,
  edit,
  handleSelect,
  handleShortTitle,
  handleDescribe,
  handleExpect,
  expectationDescribe,
  detailDescribe,
  shortTitle,
  category,
}) => {
  return (
    <div>
      <Container className="creativeContainer">
        <form onSubmit={handleSubmit}>
          <Row className="creativeRows">
            <Col>
              <label className="creativeBodyElements">category :</label>
              <select onChange={handleSelect} value={category}>
                <option></option>
                <option className="text-title" value="personal life">
                  personal life
                </option>
                <option className="text-title" value="job">
                  job
                </option>
                <option className="text-title" value="education">
                  education
                </option>
                <option className="text-title" value="fun">
                  fun
                </option>
                <option className="text-title" value="travelling">
                  travelling
                </option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col className="shortTitleCol">
              <label className="creativeBodyElements">short tittle :</label>
              <input
                value={shortTitle}
                onChange={handleShortTitle}
                type="text"
              ></input>
            </Col>
          </Row>
          <Row className="creativeRows">
            <Col>
              <textarea
                value={detailDescribe}
                onChange={handleDescribe}
                placeholder="detail describe..."
              ></textarea>
            </Col>
          </Row>
          <Row className="creativeRows">
            <Col>
              <textarea
                value={expectationDescribe}
                onChange={handleExpect}
                placeholder="your expect from idea..."
              ></textarea>
            </Col>
          </Row>
          <button className="text-title" type="submit">
            {edit ? "edit" : "submit"}
          </button>
        </form>
      </Container>
    </div>
  );
};

export default CreateIdea;

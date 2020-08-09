import React from "react";
import BornedIdea from "./BornedIdea";
import { Container, Row, Col } from "../../node_modules/react-bootstrap";

const IdeaWorkshop = ({
  newIdeas,
  handleDelete,
  setRatingStar,
  handleClearAll,
  edit,
  handleEdit,
}) => {
  return (
    <div>
      {newIdeas.map((idea) => {
        return (
          <BornedIdea
            key={idea.id}
            handleEdit={handleEdit}
            idea={idea}
            handleDelete={handleDelete}
            setRatingStar={setRatingStar}
            number={idea.orderNumber}
            date={idea.currentDate}
            shortTitle={idea.shortTitle}
            detailDescription={idea.detailDescribe}
            expectationDescribe={idea.expectationDescribe}
            ideaCategory={idea.category}
            ideaRating={idea.rating}
          />
        );
      })}
      <div>
        {newIdeas.length > 0 ? (
          <Container>
            <Row>
              <Col className="text-center">
                <button className="text-title" onClick={handleClearAll}>
                  delete all
                </button>
              </Col>
            </Row>
          </Container>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default IdeaWorkshop;

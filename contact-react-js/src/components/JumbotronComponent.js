import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
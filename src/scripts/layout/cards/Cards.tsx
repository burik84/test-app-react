import React from 'react';
import { IData, IListsCard } from '../../shared/interface';
import './cards.scss';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

type TProps = {
  lists: IData[];
  deleteCard: (number: number) => void;
};

const Cards = ({ lists, deleteCard }: TProps) => {
  const ShowCardID = () => {
    const listCards = lists.map((card: IData) => (
      <Col key={card.id.toString()}>
        <Card>
          <Card.Img variant="top" src={card.thumbnailUrl} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Button variant="danger" onClick={() => deleteCard(card.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row xs={2} md={4} lg={8} className="g-2">
          {listCards}
        </Row>
      </Container>
    );
  };

  return (
    <React.Fragment>
      <main>
        <ShowCardID />
      </main>
    </React.Fragment>
  );
};

export default Cards;

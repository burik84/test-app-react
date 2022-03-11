import React, { useState } from 'react';
import { IData } from '../../shared/interface';
import './cards.scss';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import ModalWindow from '../../components/modal/modal';
import { StringLiteralType } from 'typescript';

type TProps = {
  lists: IData[];
  deleteCard: (number: number) => void;
};

const Cards = ({ lists, deleteCard }: TProps) => {

  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState<string[]>(['']);

  const handleClose = () => setShow(false);
  const handleShow = (url:string,title:string, id:string) =>{
    setDataModal([url,title,id])
    setShow(true)
  };

  const ShowCardID = () => {
    const listCards = lists.map((card: IData) => (
      <Col key={card.id.toString()}>
        <Card className="h-100" onClick={()=>handleShow(card.url,card.title,`${card.id}`)}>
          <div className="card-image">
            <Card.Img variant="top" src={card.thumbnailUrl} />
          </div>
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
        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
          {listCards}
        </Row>
      </Container>
    );
  };

  return (
    <React.Fragment>
      <main>
        <ShowCardID />
        <ModalWindow show={show} data={dataModal} closeModal={handleClose} deleteCard={deleteCard}></ModalWindow>
      </main>
    </React.Fragment>
  );
};

export default Cards;

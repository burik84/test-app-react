import React from 'react';
import './modal.scss';
import { Modal, Button, Image } from 'react-bootstrap';

type TProps = {
  show: boolean;
  data: string[];
  closeModal: () => void;
  deleteCard: (number: number) => void;
};

const ModalWindow = ({ show, data, closeModal, deleteCard }: TProps) => {
  const handleDeleteClick=()=>{
    deleteCard(+data[2])
    closeModal()
  }
  return (
    <Modal
      show={show}
      onHide={closeModal}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{data[1]}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-image">
          <Image src={data[0]} />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
        <Button variant="danger" onClick={handleDeleteClick}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWindow;

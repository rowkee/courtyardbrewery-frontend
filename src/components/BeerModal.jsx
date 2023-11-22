import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Reviews from './Reviews';
import ModalBody from 'react-bootstrap/esm/ModalBody';

export default function BeerModal(beer) {
const {title, description, abv} = beer.beer.beer
console.log(beer)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary"onClick={handleShow}>See Reviews</Button>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} - {abv}%</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <ModalBody>
                <Reviews />
        </ModalBody>
        <Modal.Footer>
        
          <Button variant="primary" onClick={handleClose}>
            Leave Review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


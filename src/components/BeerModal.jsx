import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Reviews from "./Reviews";
import ModalBody from "react-bootstrap/esm/ModalBody";
import Form from "react-bootstrap/Form"

export default function BeerModal(beer) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token")

    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

  },[])

  const { title, description, abv} = beer.beer.beer;

  const [showBeer, setShowBeer] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const handleCloseBeer = () => setShowBeer(false);
  const handleShowBeer = () => setShowBeer(true);
  const handleCloseBeerAddReview = () => {
    setShowBeer(false);
    setShowReview(true);
  };
  const handleCloseReview = () => setShowReview(false);

  return (
    <>
      {/* This is the beer modal */}
      <Button variant="primary" onClick={handleShowBeer}>
        See Reviews
      </Button>
      <Modal size="lg" show={showBeer} onHide={handleCloseBeer}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title} - {abv}%
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <ModalBody>
          <Reviews />
        </ModalBody>
        <Modal.Footer>
          {isLoggedIn ? (      
          <Button variant="primary" onClick={handleCloseBeerAddReview}>
            Add Review
          </Button> 
          ) : ( 
          <Button variant="primary" disabled>
            Add Review
          </Button> 
          )}
        </Modal.Footer>
      </Modal>

      {/* this is the review modal */}
      <Modal size="lg" show={showReview} onHide={handleCloseReview}>
        <Modal.Header closeButton>
          <Modal.Title>New Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Please add your review below:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseReview}>
            SAVE REVIEW
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Reviews from "./Reviews";
import ModalBody from "react-bootstrap/esm/ModalBody";
import Form from "react-bootstrap/Form"
import { jwtDecode } from "jwt-decode"
import axios from "axios"

export default function BeerModal({beer}) {
  const accessToken = localStorage.getItem("access_token")
  const decodedToken = jwtDecode(accessToken)
  const userId = decodedToken.user_id

  const { id, title, description, abv} = beer;
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [reviewDataToSubmit, setReviewDataToSubmit] = useState({
    title: "",
    review_content: "",
    user: userId,
    beer: id
  })
  //These reviews are per beer

  const [reviews, setReviews] = useState([])

  

//* THIS IS NEEDED TO KNOW WHICH MODAL TO SHOW
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token")
    if (accessToken) {
      setIsLoggedIn(true);

    const getReviews = async () => { 
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/beer/review/${id}/`)
      .then(result => result.json())
      .then(data => setReviews(data))
    
  }
    getReviews()
    }
  },[id])

  
//* THESE HANDLE THE OPENING AND CLOSING OF THE MODALS
  const [showBeer, setShowBeer] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const handleCloseBeer = () => setShowBeer(false);
  const handleShowBeer = () => setShowBeer(true);
  const handleCloseBeerAddReview = () => {
    setShowBeer(false);
    setShowReview(true);
  };
  const handleCloseReview = () => setShowReview(false);
  
  //* SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // eslint-disable-next-line no-unused-vars
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/reviews/`, reviewDataToSubmit,
    {
      headers: { "Content-Type": "application/json" },
    },
    {
      withCredentials: true
    },
    );
    handleCloseReview()
    }
    catch (e){
      console.log("Can't submit review", e);
    }
  }

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
          {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <Reviews key={index} review={review} />
          ))
        ) : (
          <p>Loading...</p>
        )}
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
              controlId="review_description"
            >
              {/* THE REVIEW DATA TO BE SENT IS BEING UPDATED ON EACH KEYBOARD CLICK */}
              <Form.Label>Review title</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={e => setReviewDataToSubmit({...reviewDataToSubmit, title: e.target.value})}/>
              <Form.Label>Please add your review below:</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={e => setReviewDataToSubmit({...reviewDataToSubmit, review_content: e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            SAVE REVIEW
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Reviews from "./Reviews";
import Form from "react-bootstrap/Form";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export default function BeerModal({ beer }) {

  const { id, title, description, abv } = beer;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reviewDataToSubmit, setReviewDataToSubmit] = useState({
    title: "",
    review_content: "",
    user: "",
    beer: id,
  });
  const [reviews, setReviews] = useState([]);
  const [showBeer, setShowBeer] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsLoggedIn(true);
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.user_id
      setUserId(userId)
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/beer/review/${id}/`)
      .then((result) => result.json())
      .then((data) => setReviews(data));
  }, [id]);

  const handleCloseBeer = () => setShowBeer(false);
  const handleShowBeer = () => setShowBeer(true);
  const handleCloseBeerAddReview = () => {
    setShowBeer(false);
    setShowReview(true);
  };
  const handleCloseReview = () => setShowReview(false);

  const handleSubmit = async (e) => {
    setReviewDataToSubmit({
      ...reviewDataToSubmit,
      user: userId
    })
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/reviews/`,
        reviewDataToSubmit,
        {
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        },
          withCredentials: true,
        }
      );
      handleCloseReview();
    } catch (e) {
      console.log("Can't submit review", e);
    }
  };
  console.log(reviewDataToSubmit);
  return (
    <>
      {/* Beer Modal */}
      <Button variant="primary" onClick={handleShowBeer}>
        See Reviews
      </Button>
      <Modal size="lg" show={showBeer} onHide={handleCloseBeer}>
        <Modal.Header closeButton>
          <Modal.Title>{title} - {abv}%</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          <hr />
          <h5>Reviews</h5>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index}>
                <Reviews review={review} />
                <hr />
              </div>
            ))
          ) : (
            <p>No reviews yet.....</p>
          )}
        </Modal.Body>
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

      {/* Review Modal */}
      {isLoggedIn ? (
        <Modal size="lg" show={showReview} onHide={handleCloseReview}>
          <Modal.Header closeButton>
            <Modal.Title>New Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="review_description">
                <Form.Label>Review title</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  onChange={(e) =>
                    setReviewDataToSubmit({
                      ...reviewDataToSubmit,
                      title: e.target.value
                    })
                  }
                />
                <Form.Label>Please add your review below:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) =>
                    setReviewDataToSubmit({
                      ...reviewDataToSubmit,
                      review_content: e.target.value
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              SAVE REVIEW
            </Button>
          </Modal.Footer>
        </Modal> ) : (
          <> </>
        )
      }
    </>
  );
};

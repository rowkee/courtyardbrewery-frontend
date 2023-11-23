import LocationMap from "./LocationMap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function SudburyTapPage() {
  const position = { lat: 52.0379949555127, lng: 0.7266092135060989 };

  return (
    <>
      <h1 className="mt-4 mb-4 text-center">The Sudbury Taproom</h1>
      <Container>
        <Row className="mb-4">
          <Col className="d-flex flex-column justify-content-center">
            <h3 className="text-center mb-4">Welcome to the Sudbury Tap!</h3>
            <p className="text-center">Please come in and join us.</p>
          </Col>
          <Col>
            <Image src="/media/sudburyoutside.jpeg" fluid />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Image src="/media/youngsudbury.jpeg" fluid />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <p className="text-center">Come join us for a drink at:</p>
            <address className="text-center">
              26-27 Gainsborough St, Sudbury CO10 2EU
            </address>
            <p className="text-center">Or click on the map below!</p>
          </Col>
        </Row>
      </Container>
      <div className="mt-4">
        <LocationMap position={position} />
      </div>
    </>
  );
}

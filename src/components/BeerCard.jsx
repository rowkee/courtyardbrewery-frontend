import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function BeerCard(beer) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{beer.title}</Card.Title>
        <Card.Text>{beer.short_description}</Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
}

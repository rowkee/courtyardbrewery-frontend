import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function BeerCard(beer) {
  const {title, short_description} = beer.beer
  console.log(title)
  console.log(beer)
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{short_description}</Card.Text>
        <Button variant="primary">See more</Button>
    </Card.Body>
    </Card>
  );
}

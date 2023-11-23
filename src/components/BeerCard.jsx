import Card from "react-bootstrap/Card";
import BeerModal from "./BeerModal";


export default function BeerCard({beer}) {
  const {title, short_description} = beer
  
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{short_description}</Card.Text>
        <BeerModal beer={beer}/>
    </Card.Body>
    </Card>
  );
}

import Card from "react-bootstrap/Card";
import BeerModal from "./BeerModal";


export default function BeerCard({beer}) {
  const {title, short_description} = beer
  
  return (
    <Card style={{ width: '18rem', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img
        variant="top"
        src='/media/bottles.jpeg'
        alt={title}
        style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{title}</Card.Title>
        <Card.Text style={{ color: '#555', fontSize: '1.1rem' }}>{short_description}</Card.Text>
        <BeerModal beer={beer} />
      </Card.Body>
    </Card>
  );
};

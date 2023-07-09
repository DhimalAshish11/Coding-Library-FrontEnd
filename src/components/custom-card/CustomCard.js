import Card from "react-bootstrap/Card";

export const CustomCard = ({ title, author, year, thumbnail }) => {
  return (
    <Card style={{ width: "18rem", flexWrap: 1 }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

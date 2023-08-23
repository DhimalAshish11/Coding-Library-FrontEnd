import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
const DashBoardCard = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { burrows } = useSelector((state) => state.burrowInfo);
  const { reviews } = useSelector((state) => state.reviewInfo);

  return (
    <>
      <div className="card d-flex gap-4 p-3 m-5">
        <Card className="bg-success text-light">
          <Card.Body>
            <Card.Title> {user.fName}</Card.Title>
            <Card.Text>Welcome to DashBoard </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className="bg-primary text-light">
          <Card.Body>
            <Card.Title> {books.length} </Card.Title>
            <Card.Text>Books Found </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className="bg-danger text-light">
          <Card.Body>
            <Card.Title> {burrows.length}</Card.Title>
            <Card.Text>Borrowed Books Found </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
        <Card className="bg-warning text-light">
          <Card.Body>
            <Card.Title> {reviews.length} </Card.Title>
            <Card.Text>Reviews Found </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default DashBoardCard;

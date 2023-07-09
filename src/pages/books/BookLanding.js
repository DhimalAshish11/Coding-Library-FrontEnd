import React from "react";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { addBurrowAction } from "../burrow-History/burrowAction";

const BookLanding = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const navigate = useNavigate();

  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);

  const { thumbnail, title, author, year, summary, isAvailable, dueDate } =
    books.find((item) => item._id === _id) || {};

  if (!title) {
    navigate("/");
  }

  const handleOnBurrow = () => {
    if (window.confirm("Are you sure you want to burrow this book?")) {
      const obj = {
        bookId: _id,
        bookName: title,
        thumbnail,
        userId: user._id,
        userName: user.fName,
      };
      dispatch(addBurrowAction(obj));
    }
  };
  return (
    <div>
      <Header />
      <section className="main mt-5">
        <Container>
          <Row>
            <Col md="5">
              <img src={thumbnail} alt="" width="100%" />
            </Col>
            <Col md="7">
              <h1>{title}</h1>
              <p>
                {author} - {year}
              </p>
              <p>5 star</p>
              <p>{summary}</p>

              {user?._id ? (
                <div className="d-grid">
                  {isAvailable ? (
                    <Button variant="dark" onClick={handleOnBurrow}>
                      Burrow Now
                    </Button>
                  ) : (
                    <Button variant="dark" onClick={handleOnBurrow} disabled>
                      Available from : {dueDate?.slice(0, 10)}
                    </Button>
                  )}
                </div>
              ) : (
                <Link to="/signin" className="nav-link">
                  <div className="d-grid">
                    <Button variant="dark">Login to Burrow this book</Button>
                  </div>
                </Link>
              )}
            </Col>
          </Row>

          <Row
            className="
          mt-5"
          >
            <Col>
              <h3>Reviews</h3>
              <hr />
              <div className="review-list">
                <div className="review  pt-4 px-4  gap-3">
                  <div className="left-name">AD</div>
                  <div className="right-review">
                    <h3>Amazing book loved it!</h3>
                    <div>5 star</div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Cum voluptatum natus eum consequatur voluptas,{" "}
                    </p>
                    <div>~Ashish Dhimal</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default BookLanding;

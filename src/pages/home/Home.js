import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { CustomCarousel } from "../../components/carousel/CustomCarousel";
import { useSelector } from "react-redux";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [display, setDisplay] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    setDisplay(books);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    const filteredBook = books.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(filteredBook);
  };

  console.log(books);
  return (
    <div>
      <Header />
      <section className="main">
        <CustomCarousel />

        <Container className="mt-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{display.length} books found</div>
                <div className="right">
                  <Form.Control
                    placeholder="search book by name"
                    onChange={handleOnSearch}
                  />
                </div>
              </div>
              <hr />
              <div className="book-list d-flex justify-content-between flex-wrap gap-3 mt-5">
                {display?.map((item) => (
                  <Link to={`/book/${item._id}`}>
                    <CustomCard key={item._id} {...item} />
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

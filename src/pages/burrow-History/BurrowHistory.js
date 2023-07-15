import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { fetchBurrowAction, returnBurrowAction } from "./burrowAction";
import { ReviewForm } from "../../components/review/ReviewForm";
import { setModalShow } from "../../system/systemSlice";
import { CustomModal } from "../../components/modal/CustomModal";

const BurrowHistory = () => {
  const dispatch = useDispatch();

  const [selectedReview, setSelectedReview] = useState({});

  const { burrows } = useSelector((state) => state.burrowInfo);
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch]);

  const handleOnReturn = ({ bookId, _id }) => {
    if (window.confirm("Are you sure you want to return this book?")) {
      const obj = { bookId, burrowId: _id };

      dispatch(returnBurrowAction(obj));
    }
  };

  const handleOnReview = (burrowBook) => {
    setSelectedReview(burrowBook);
    dispatch(setModalShow(true));
  };

  return (
    <UserLayout title="BurrowHistory">
      {selectedReview?._id && (
        <CustomModal
          modalTitle={`Leave your review for ${selectedReview.bookName}`}
        >
          <ReviewForm selectedReview={selectedReview} />
        </CustomModal>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>Book Title</th>
            <th>Student Name</th>
            <th>Return Date</th>

            <th>Return Now</th>
          </tr>
        </thead>
        <tbody>
          {burrows?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} width="150px" alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item.dueDate?.slice(0, 10)}</td>
              <td>
                {item.userId === user._id && !item.isRetured ? (
                  <Button onClick={() => handleOnReturn(item)}>Return</Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={() => handleOnReview(item)}
                  >
                    Leave review
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default BurrowHistory;

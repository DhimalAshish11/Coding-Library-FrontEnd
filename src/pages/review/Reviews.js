import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Form, Table } from "react-bootstrap";
import { updateReviewAction } from "./reviewAction";

const Reviews = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewInfo);

  const handleOnChagen = (e) => {
    if (window.confirm("Are you sure you want to change the status")) {
      const { value, checked } = e.target;
      console.log(value, checked);
      // call api and update datatbase

      dispatch(
        updateReviewAction({
          _id: value,
          status: checked ? "active" : "inactive",
        })
      );
    }
  };

  return (
    <UserLayout title="Reviews">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>status</th>
            <th>Book </th>

            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <Form.Check
                  type="switch"
                  title="status"
                  value={r._id}
                  checked={r.status === "active"}
                  onChange={handleOnChagen}
                />
                {r.status}
              </td>
              <td>
                <h4> {r.bookName}</h4>
                Reviewed By - {r.userName}
              </td>
              <td>
                <h4>{r.title}</h4>

                {r.message}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default Reviews;

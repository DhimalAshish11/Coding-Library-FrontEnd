import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { UserLayout } from "../layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { postBookAction } from "../../pages/books/BookAction";

const NewBookForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(postBookAction(form));
  };

  const input = [
    {
      label: "Book title",
      name: "title",
      type: "text",
      placeholder: "How to become pro",
      required: true,
    },

    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Uncle Bob",
      required: true,
    },

    {
      label: "Year",
      name: "year",
      type: "number",
    },

    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      placeholder: "http://...",
      required: true,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "book summary...",
      required: true,
      rows: 10,
    },
  ];

  return (
    <UserLayout title="Add New Book">
      {user?.role !== "admin" ? (
        <h1>Unauthorized Access</h1>
      ) : (
        <div className="py-3">
          <Form onSubmit={handleOnSubmit}>
            {input.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </div>
          </Form>
        </div>
      )}
      ;
    </UserLayout>
  );
};

export default NewBookForm;

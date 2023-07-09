import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { BookTable } from "../../components/book-com/BookTable";
import { NeBookForm } from "../../components/book-com/NewBookForm";
import { Link } from "react-router-dom";

const Books = () => {
  const { user } = useSelector((state) => state.userInfo);

  return user?.role !== "admin" ? (
    <h1>Unauthorize access</h1>
  ) : (
    <UserLayout title="Books">
      <div className="text-end">
        <Link to="/book/new">
          <Button>Add New Book</Button>
        </Link>
      </div>
      <div className="mt-3">{<BookTable />}</div>
    </UserLayout>
  );
};

export default Books;

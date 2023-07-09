import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Signup from "./pages/signup-signin/Signup";
import Signin from "./pages/signup-signin/Signin";
import Dashboard from "./pages/dashboard/Dashboard";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import Students from "./pages/students/Students";
import Profile from "./pages/profile/Profile";
import BurrowHistory from "./pages/burrow-History/BurrowHistory";
import Books from "./pages/books/Books";
import NewBookForm from "./components/book-com/NewBookForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBookAction } from "./pages/books/BookAction";
import { EditBookForm } from "./components/book-com/EditBookForm";
import BookLanding from "./pages/books/BookLanding";
import { fetchBurrowAction } from "./pages/burrow-History/burrowAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookAction());
    dispatch(fetchBurrowAction());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book/:_id" element={<BookLanding />} />

        {/* // private routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/burrow-history"
          element={
            <PrivateRoute>
              <BurrowHistory />
            </PrivateRoute>
          }
        />

        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/students"
          element={
            <PrivateRoute>
              <Students />
            </PrivateRoute>
          }
        />

        <Route
          path="/book/new"
          element={
            <PrivateRoute>
              <NewBookForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/book/edit/:_id"
          element={
            <PrivateRoute>
              <EditBookForm />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

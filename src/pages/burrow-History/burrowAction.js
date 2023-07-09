import { toast } from "react-toastify";
import { fetchBurrow, postBurrow } from "../../helper/axios";
import { fetchBookAction } from "../books/BookAction.js";
import { setBurrow } from "./BurrowSlice";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") {
    //fetch user burrow
    dispatch(fetchBookAction());
  }
};

export const BurrowBookAction = (bookObj) => async (dispatch) => {
  const dataPending = postBurrow(bookObj);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    // need to fetch all books
    dispatch(fetchBurrowAction());
  }
};

export const fetchBurrowAction = () => async (dispatch) => {
  const { status, BurrowHistory } = await fetchBurrow();

  if (status === "success") {
    dispatch(setBurrow(BurrowHistory));
  }
};

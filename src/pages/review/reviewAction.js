import { toast } from "react-toastify";
import { getReviews, postReview } from "../../helper/axios";
import { setModalShow } from "../../system/systemSlice";
import { fetchBurrowAction } from "../burrow-History/burrowAction";
import { setReviews } from "./reviewSlice";

export const postReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await postReview(obj);
  toast[status](message);

  if (status === "success") {
    dispatch(setModalShow(false));
    dispatch(fetchBurrowAction());
    dispatch(fetchReviewAction());
  }
};

export const fetchReviewAction = (obj) => async (dispatch) => {
  const { status, reviews } = await getReviews(obj);

  if (status === "success") {
    dispatch(setReviews(reviews));
  }
};

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { fetchReviews } from "../../fetchApi";

import css from "./MovieReviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong. You can try again later");
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <h3 className={css.title}>Movie Reviews</h3>
      <ul className={css.list}>
        {reviews !== null && reviews.length === 0 && (
          <p>This movie don`t have any reviews</p>
        )}

        {reviews !== null &&
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <h4 className={css.descr}>User: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
      </ul>
      <Toaster />
    </div>
  );
};

export default Reviews;

/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./css/review.css"
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

//  (Reiviews should be Reviews).*****************************************
import { starPrintForReviews } from '../Functions/starPrint';


function Review({ id }) {
  const [input, setInput] = useState({});
  const [reviews, setReviews] = useState([]);
  const [likeDislike, setLikeDislike] = useState(0);

  id = +id;
  // ==================== INITIAL RENDERING
  const api = `http://localhost:3000/review`;
  function loadReviews() {
    const otherReviews = `http://localhost:3000/review/?productId=${id}`;
    axios.get(otherReviews).then((res) => setReviews(res.data))
    .catch((err) => console.error("Error => :", err));
  }

  useEffect(() => {
    loadReviews();
  }, [id]);


  // ==================== POST MY REVIEW
  function postData() {
    axios.post(api, { ...input, productId: id, "like": 0, "dislike": 0 }).then(() => {
      alert("Thank you for your review");
      setInput({});
      loadReviews();
    })  .catch((err) => console.error("Error =>:", err));
  }
  // ==================== HANDLE MY REVIES
  function handleSubmit(e) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  // ==================== MANGE LIKE/DISLIKE
  function likeDislikeFunct(e, check) {
    console.log(likeDislike)
    if (check == likeDislike) {
      e.target.style.color = "black"
      setLikeDislike(0)
      return;
    }

    if (check == 1) {
      e.target.style.color = "blue"
      setLikeDislike(1)
    }
    else if (check == -1) {
      e.target.style.color = "red"
      setLikeDislike(-1)
    }

  }
  // ==================== SHOW CURRENT I'D REVIES
  function allReviews() {
    return reviews.map((review) => {
      return (
        <div key={review.id} className='review-container'>
          <div className='r1'>
            <div className='r-name'><b>{review.gmail}</b></div>
            {starPrintForReviews(review.star)}
          </div >
          <div className='r-comment'>Review : {review.comment}</div>
          <div className='like'>
            <BiLike onClick={(e) => likeDislikeFunct(e, 1)} /> {review.like}
            <BiDislike onClick={(e) => likeDislikeFunct(e, -1)} /> {review.dislike}
            <input type="text" placeholder='Reply' />

          </div>
        </div>
      )

    });

  }
  // ==================== STAR AND THERE COLORS

  // ==================== COMPONENT RETURN VALUE
  return (
    <>
      <div className="reviews" style={{ padding: "4rem" }}>
        <div className='my-review'>
          <div>Review </div>
          Gmail: <input type="gmail" value={input.gmail} name='gmail' onChange={handleSubmit} /> <br />
          Comment: <input type="text" value={input.comment} name='comment' onChange={handleSubmit} /> <br />
          Star: <input type="number" value={input.star} name='star' onChange={handleSubmit} /> <br />
          <button onClick={postData}>Post</button>
        </div>
        {/* ======================================================== */}
        <div className='all-review'>
          <div className='all-reciew-heading'>
            <h3>All Reviews</h3>
            <h3>Total Review : {reviews.length}</h3>
            <h3>Avarage Star {0}</h3>
          </div>
          {allReviews()}
        </div>
      </div>
      <div className='related-products'>


      </div>
    </>
  );
}
export default Review;

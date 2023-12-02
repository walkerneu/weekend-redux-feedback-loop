import axios from "axios";

function FeedbackItem({ feedback, getAllFeedback }) {
  const deleteFeedback = (incId) => {
    axios({
      method: "DELETE",
      url: `/feedback/${incId}`,
    })
      .then(function (response) {
        getAllFeedback();
      })
      .catch(function (error) {
        console.log("error in DELETE", error);
      });
  };

  const flagForReview = (incId) => {
    axios({
      method: "PUT",
      url: `/feedback/${incId}`,
    })
      .then(function (response) {
        getAllFeedback();
      })
      .catch(function (error) {
        console.log("error in PUT, my dood", error);
      });
  };
  return (
    <tr className={feedback.flagged ? "review-flag" : ""}>
      <td>
        <button
          className="flag-button"
          onClick={() => flagForReview(feedback.id)}
        >
          🏳️
        </button>
      </td>
      <td>{new Date(feedback.date).toDateString("en-us")}</td>
      <td>{feedback.feeling}</td>
      <td>{feedback.understanding}</td>
      <td>{feedback.support}</td>
      <td>{feedback.comments}</td>
      <td>
        <button onClick={() => deleteFeedback(feedback.id)}>DELETE</button>
      </td>
    </tr>
  );
}

export default FeedbackItem;

import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function SubmitPage() {
  const feelings = useSelector((state) => state.feelings);
  const understanding = useSelector((state) => state.understanding);
  const support = useSelector((state) => state.support);
  const comments = useSelector((state) => state.comments);
  const history = useHistory();
  const submitFeedback = () => {
    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feelings,
        understanding,
        support,
        comments,
      },
    })
      .then((response) => {
        history.push("/success");
      })
      .catch((error) => {
        console.log("Error in POST", error);
      });
    };
  const goBack = () => {
    history.push("/comments");
  }
  return (
    <div>
      <h2>Review Your Feedback:</h2>
      <p>Feelings: {feelings}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button onClick={submitFeedback} data-testid="next">
        SUBMIT
      </button>
      <button onClick={goBack}>GO BACK</button>
    </div>
  );
}

export default SubmitPage;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function CommentsInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [commentsInput, setCommentsInput] = useState("");

  const handleInput = (e) => {
    setCommentsInput(e.target.value);
  };
  const submitComments = () => {
    dispatch({
      type: "SET_COMMENTS",
      payload: commentsInput,
    })
    history.push("/submit");
  };
  const goBack = () => {
    history.push('/support');
  };

  return (
    <div>
      <h2>Any comments you want to leave?</h2>
      <h3>You can leave this blank if you'd like</h3>
      <input
        type="text"
        placeholder="Comment?"
        value={commentsInput}
        onChange={handleInput}
        data-testid="input"
      />

      <button onClick={submitComments} data-testid="next">
        NEXT
      </button>
      <button onClick={goBack}>GO BACK</button>
    </div>
  );
}

export default CommentsInput;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UnderstandingInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const understanding = useSelector(store => store.understanding);
  const [understandingInput, setUnderstandingInput] = useState(understanding);

  const handleInput = (e) => {
    setUnderstandingInput(e.target.value);
  };
  const submitUnderstanding = () => {
    if (understandingInput > 5 || understandingInput < 1) {
      alert("You need to enter a number between 1 and 5!");
    } else {
      dispatch({
        type: "SET_UNDERSTANDING",
        payload: understandingInput,
      });
      history.push("/support");
    }
  };
  const goBack = () => {
    history.push('/')
  }

  return (
    <div>
      <h2>How well are you understanding the content?</h2>
      <h3>On a scale of 1 to 5</h3>
      <input
        type="number"
        placeholder="Understanding?"
        value={understandingInput}
        onChange={handleInput}
        data-testid="input"
      />
      <button onClick={submitUnderstanding} data-testid="next">
        NEXT
      </button>
      <button onClick={goBack}>
        GO BACK
      </button>
    </div>
  );
}

export default UnderstandingInput;

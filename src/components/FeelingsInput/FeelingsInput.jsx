import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function FeelingsInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feelings = useSelector(store => store.feelings)
  const [feelingsInput, setFeelingsInput] = useState(feelings);

  const handleInput = (e) => {
    setFeelingsInput(e.target.value);
  };
  const submitFeeling = () => {
    if (feelingsInput > 5 || feelingsInput < 1) {
      alert("You need to enter a number between 1 and 5!");
    } else {
      dispatch({
        type: "SET_FEELINGS",
        payload: feelingsInput,
      });
      history.push("/understanding");
    }
  };

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <h3>On a scale of 1 to 5</h3>
      <input
        type="number"
        placeholder="Feeling?"
        value={feelingsInput}
        onChange={handleInput}
        data-testid="input"
      />
      <button onClick={submitFeeling} data-testid="next">
        NEXT
      </button>
    </div>
  );
}

export default FeelingsInput;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SupportInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supportInput, setSupportInput] = useState(0);

  const handleInput = (e) => {
    setSupportInput(e.target.value);
  };
  const submitSupport = () => {
    if (supportInput > 5 || supportInput < 1) {
      alert("You need to enter a number between 1 and 5!");
    } else {
      dispatch({
        type: "SET_SUPPORT",
        payload: supportInput,
      });
      history.push("/comments");
    }
  };

  return (
    <div>
      <h2>How well are you being supported?</h2>
      <h3>On a scale of 1 to 5</h3>
      <input
        type="number"
        placeholder="Support?"
        value={supportInput}
        onChange={handleInput}
        data-testid="input"
      />
      <button onClick={submitSupport} data-testid="next">
        NEXT
      </button>
    </div>
  );
}

export default SupportInput;

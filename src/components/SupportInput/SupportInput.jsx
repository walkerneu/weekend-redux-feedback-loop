import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SupportInput() {
  const history = useHistory();
  const dispatch = useDispatch();
  const support = useSelector(store => store.support)
  const [supportInput, setSupportInput] = useState(support);

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
      history.push('/comments');
    }
  };
  const goBack = () => {
    history.push('/understanding')
  }

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
      <button onClick={goBack}>
        GO BACK
      </button>
    </div>
  );
}

export default SupportInput;

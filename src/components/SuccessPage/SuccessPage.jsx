import { HashRouter as Router, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function SuccessPage() {
    const dispatch = useDispatch();

    const resetValues = () => {
        dispatch({
            type: "RESET_VALUES"
          })
    }
  return (
    <div>
      <h2>Thank You!</h2>
      <p>
        <Router>
          <Link to="/">
            <button 
            data-testid="next"
            onClick={resetValues}>Leave New Feedback</button>
          </Link>
        </Router>
      </p>
    </div>
  );
}

export default SuccessPage;

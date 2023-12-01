import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Link } from 'react-router-dom';

function UnderstandingInput(){

    const dispatch = useDispatch()
    const [understandingInput, setUnderstandingInput] = useState(0);

    const handleInput = (e) => {
        setUnderstandingInput(e.target.value)
    }
    const submitUnderstanding = () => {
        dispatch({
            type: "SET_UNDERSTANDING",
            payload: understandingInput
          })
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
                data-testid="input"/>
            <Router>
                <Link to='/support'>
                    <button 
                    onClick={submitUnderstanding}
                    data-testid="next">
                        NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default UnderstandingInput;
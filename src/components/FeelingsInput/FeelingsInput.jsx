import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Link } from 'react-router-dom';

function FeelingsInput(){

    const dispatch = useDispatch()
    const [feelingsInput, setFeelingsInput] = useState(0);

    const handleInput = (e) => {
        setFeelingsInput(e.target.value)
    }
    const submitFeeling = () => {
        dispatch({
            type: "SET_FEELINGS",
            payload: feelingsInput
          })
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <h3>On a scale of 1 to 5</h3>
            <input 
                type="number"
                placeholder="Feeling?"
                value={feelingsInput}
                onChange={handleInput}
                data-testid="input"/>
            <Router>
                <Link to='/understanding'>
                    <button 
                    onClick={submitFeeling}
                    data-testid="next">
                        NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default FeelingsInput;
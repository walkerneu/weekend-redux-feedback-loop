import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function SupportInput(){

    const dispatch = useDispatch()
    const [supportInput, setSupportInput] = useState(0);

    const handleInput = (e) => {
        setSupportInput(e.target.value)
    }
    const submitSupport = () => {
        dispatch({
            type: "SET_SUPPORT",
            payload: supportInput
          })
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <h3>On a scale of 1 to 5</h3>
            <input 
                type="number"
                placeholder="Support?"
                value={supportInput}
                onChange={handleInput}/>
            <Router>
                <Link to='/comments'>
                    <button onClick={submitSupport}>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default SupportInput;
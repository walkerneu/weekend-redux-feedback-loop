import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function CommentsInput(){

    const dispatch = useDispatch()
    const [commentsInput, setCommentsInput] = useState('');

    const handleInput = (e) => {
        setCommentsInput(e.target.value)
    }
    const submitComments = () => {
        dispatch({
            type: "SET_COMMENTS",
            payload: commentsInput
          })
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <h3>You can leave this blank if you'd like</h3>
            <input 
                type="text"
                placeholder="Comment?"
                value={commentsInput}
                onChange={handleInput}/>
            <Router>
                <Link to='/submit'>
                    <button onClick={submitComments}>NEXT</button>
                </Link>
            </Router>
        </div>
    )
}

export default CommentsInput;
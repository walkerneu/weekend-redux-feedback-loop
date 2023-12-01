import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function SubmitPage(){

    const feelings = useSelector(state => state.feelings)
    const understanding = useSelector(state => state.understanding)
    const support = useSelector(state => state.support)
    const comments = useSelector(state => state.comments)

    const submitFeedback = () => {
       
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feelings,
                understanding,
                support,
                comments
            }
        })
        .then((response) => {            
        })
        .catch((error) => {
            console.log('Error in POST', error)
        })

    }
    return (
        <div>
            <h2>Review Your Feedback:</h2>
                <p>Feelings: {feelings}</p>
                <p>Understanding: {understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {comments}</p>
            <Router>
                <Link to='/success'>
                    <button onClick={submitFeedback}>SUBMIT</button>
                </Link> 
            </Router>
        </div>
    )
}

export default SubmitPage;
import { HashRouter as Router, Link } from 'react-router-dom';

function SuccessPage(){


    return (
        <div>
            <h2>Thank You!</h2>
            <p>
                <Router>
                    <Link to='/'>
                    <button
                        data-testid="next">
                        Leave New Feedback
                    </button>
                    </Link>
                </Router>
            </p>
        </div>
    )
}

export default SuccessPage;
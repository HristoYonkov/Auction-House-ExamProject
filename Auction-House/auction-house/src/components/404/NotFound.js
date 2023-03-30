import { Link } from 'react-router-dom';
import './NotFound.css'

export const NotFound = () => {

    return (
        <div className="mainbox">
            <div className="err">4</div>
            <i className="far fa-question-circle fa-spin">0</i>
            <div className="err2">4</div>
            <div className="msg">Ooops! Page Not Found<p>Let's go <Link to="/">HOME</Link> and try from there.</p>
            </div>
        </div>
    );
}
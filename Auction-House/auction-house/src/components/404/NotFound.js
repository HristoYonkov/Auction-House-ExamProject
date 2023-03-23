import { Link } from 'react-router-dom';
import './NotFound.css'

export const NotFound = () => {

    return (
        <div class="mainbox">
            <div class="err">4</div>
            <i class="far fa-question-circle fa-spin">0</i>
            <div class="err2">4</div>
            <div class="msg">Ooops! Page Not Found<p>Let's go <Link to="/">HOME</Link> and try from there.</p>
            </div>
        </div>
    );
}
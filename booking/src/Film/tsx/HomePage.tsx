import '../scss/HomePage.scss'
import { Link, Route } from "react-router-dom";

function HomePage() {

    return (
        <div className="HomePage flex justify-center flex-col items-center">
            <Link to="/schedule">
                <button className="btn btn--white btn--animated"> Lịch Chiếu Phim --&gt; </button>
            </Link>
        </div>
    )
}

export default HomePage
import HomePage from "./HomePage"
import MovieSchedule from './MovieSchedule'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function CGV() {

    return (
        <div className="cGV">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/schedule" element={<MovieSchedule />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default CGV
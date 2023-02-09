import '../scss/MovieSchedule.scss'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Film } from '../type/type';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ModalSchedule from './ModalSchedule'
import InfoMovie from './InfoMovie'


function MovieSchedule() {
    const [open, setOpen] = useState(false);
    const [films, setFilms] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:4000/films')
            .then(res => setFilms(res.data))
            .catch(err => console.error(err))
    }, [])

    const handleToggle = () => setOpen(!open);
    return (
        <div className="MovieSchedule">
            <div className="header">
                <div className="header flex justify-around p-1">
                    <div className="header-logo"></div>
                    <div className="navigate flex justify-between items-center font-medium">
                        <div className="pr-2">Trang Chủ</div>
                        <div className="pl-2">Lịch Chiếu</div>
                    </div>
                </div>
                <div>this is breadcrumb</div>
            </div>
            <div className="body text-white">
                <div className="body-modal">
                    <div className='body-title font-bold text-5xl'>Lịch chiếu phim <span className="text-red-600 font-extrabold">CGV</span></div>
                    <Fade>
                        {films.map((film: Film) => (
                            <InfoMovie film={film} handleToggle={handleToggle}/>
                        ))}
                    </Fade>
                    <ModalSchedule open={open} handleToggle={handleToggle}/>
                </div>
            </div>
            <div className="footer">this is footer</div>
        </div>
    )
}

export default MovieSchedule
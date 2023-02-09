import Button from '@mui/material/Button';
import { Film } from '../type/type';

export interface InfoMovieType {
    film: Film,
    handleToggle: () => void
}

const InfoMovie: React.FC<InfoMovieType> = ({ film, handleToggle } ) => {
    return (
        <div className="body-content flex p-5">
            <div className="body-content__thumbnail w-1/4">
                <img src={require(`../images/${film.thumb}`)} alt={film.name} />
            </div>
            <div className="body-content__description text-left pl-5 w-3/4">
                <div>
                    <h1 className='text-4xl font-bold'>{film.name}</h1>
                    <p className='text-grey pt-5'>{film.nameEng} <span>. </span> {film.year} <span>. </span>{film.duration} phút</p>
                    <p className='text-grey'>{film.slogan}</p>
                </div>
                <div className='flex pt-5 pb-5'>
                    <div className='pr-5'>
                        <p className='text-grey'>Ngày chiếu</p>
                        <p>{film.showDate}</p>
                    </div>
                    <div className='pr-5'>
                        <p className='text-grey'>Thể loại</p>
                        <p>{film.genre}</p>
                    </div>
                    <div className='pr-5'>
                        <p className='text-grey'>Quốc gia</p>
                        <p>{film.country}</p>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {film.times.map((time, index) => (
                        <Button
                            variant="contained"
                            color="secondary"
                            className='btn-time'
                            key={index}
                            onClick={handleToggle}
                        >
                            {time}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InfoMovie
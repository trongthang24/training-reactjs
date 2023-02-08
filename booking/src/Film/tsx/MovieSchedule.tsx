import '../sass/MovieSchedule.scss'
import Button from '@mui/material/Button';

function MovieSchedule() {

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
                    <div className="body-content flex p-5">
                        <div className="body-content__thumbnail w-1/4">
                            <img src={require('../images/nhabanu.jpg')} alt="nhabanu"/>
                        </div>
                        <div className="body-content__description text-left pl-5 w-3/4">
                            <div>
                                <h1 className='text-4xl font-bold'>Nhà Bà Nữ</h1>
                                <p className='text-grey'>THE HOUSE OF NO MAN <span>. </span> 2022 <span>. </span>102 phút</p>
                                <p className='text-grey'>Ai cũng có lỗi, nhưng ai cũng nghĩ mình là nạn nhân..</p>
                            </div>
                            <div className='flex pt-5 pb-5'>
                                <div className='pr-5'>
                                    <p className='text-grey'>Ngày chiếu</p>
                                    <p>22/01/2023</p>
                                </div>
                                <div className='pr-5'>
                                    <p className='text-grey'>Thể loại</p>
                                    <p>Chính Kịch</p>
                                </div>
                                <div className='pr-5'>
                                    <p className='text-grey'>Quốc gia</p>
                                    <p>Việt Nam</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <Button variant="contained" color="secondary" className='abc'>Outlined</Button>
                                <Button variant="contained" color="secondary">Outlined1</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">this is footer</div>
        </div>
    )
}

export default MovieSchedule
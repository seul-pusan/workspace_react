import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RouteNav() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/p2?item1=수박&item2=오이");
    }

    return (
        <div className='w-full h-52 flex justify-center items-center'>
            {/* Link로 따로 안묶고 div 대신 Link 써도 됨 */}
            <Link to="/">
                <div className='p-5 mx-2 border border-indigo-400 rounded font-bold
                                hover:bg-indigo-200 bg-indigo-50'>
                    Home
                </div>
            </Link>

            <Link to="/p1">
                <div className='p-5 mx-2 border border-indigo-400 rounded font-bold
                                hover:bg-indigo-200 bg-indigo-50'>
                    Page1
                </div>
            </Link>

            {/* onClick 이벤트 추가 */}
            <div
                onClick={handleClick}
                className='p-5 mx-2 border border-indigo-400 rounded font-bold
                                hover:bg-indigo-200 bg-indigo-50 cursor-pointer'>
                Page2
            </div>
        </div>
    )
}

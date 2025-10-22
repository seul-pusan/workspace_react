import { useState, useEffect } from "react";

export default function MyClockTime() {
    const [curretTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let tm = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(tm);
    }
    )
    
    return (
        <div className="absolute bottom-10 w-1/2  bg-gray-700 text-red-100
        flex flex-col justify-center items-center rounded-md
        px-4 py-2 font-bold gowun-dodum-regular text-2xl">
            현재 시각 : {curretTime.toLocaleTimeString()}
        </div>

    );
}
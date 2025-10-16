import { useState } from "react";
import TailButton from "../Components/TailButton"

const BOXStyle = {
    blue: {
        on: "bg-blue-600",
        off: "bg-blue-300",
    },
    orange: {
        on: "bg-orange-600",
        off: "bg-orange-300",
    },
    lime: {
        on: "bg-lime-600",
        off: "bg-lime-300",
    },
}

export default function MyToggleBox({ color }) {
    const [isActive, setIsActive] = useState(false);
    const boxstyle = BOXStyle[color];

    const handelClick = () => {
        setIsActive(prev => !prev);
    }

    return (
        <div className={`w-full h-40 rounded-4xl
                        flex flex-col justify-center items-center
                        shadow-md transition-all duration-300
                        ${isActive ? boxstyle.on : boxstyle.off}`}>
            <h1 className="text-xl font-bold mb-3">
                {color} 토글 박스
            </h1>
            <p className={`text-sm 
                    ${isActive ? 'text-red-500' : 'text-gray-500'} 
                    font-bold mb-3`}>
                현재 상태 : {isActive ? 'on' : 'off'}
            </p>
            <TailButton color={color} caption={color} onHandle={handelClick} />
        </div>

    )
}
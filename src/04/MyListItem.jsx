//1. useState import
import { useState } from "react";

export default function MyListItem({ title, imgUrl, content }) {
    //2. useState 선언
    const [scnt, setScnt] = useState(0);
    const [dcnt, setDcnt] = useState(0);

    let cnt = 0;
    const handleClick = () => {
        // cnt = cnt + 1;
        // console.log(`${title} click: ${cnt}`)
        setScnt(scnt + 1);
    }
    const handleClick2 = () => {
        setDcnt(dcnt + 1);
    }
    return (
        <div className="w-full flex justify-start items-start
                        p-7 m-3
                         gowun-dodum-regular
                        border-2 border-b-stone-800 rounded-4xl">
            <div className="w-1/3 items-center">
                <img src={imgUrl} alt={title} className="w-50 h-50 rounded-2xl " />
            </div>
            <div className="w-2/3 h-48 flex flex-col justify-between p-2">
                <div>
                    <h1 className="text-black mb-4 text-4xl font-bold">{title}</h1>
                    <p className="text-black text-shadow-2xs"> {content} </p>
                </div>
                <div className="text-black flex justify-end items-end font-bold">
                    <div className="cursor-pointer hover:text-red-600 pr-3"
                        onClick={handleClick}>
                        💗 좋아요 {scnt}
                    </div>
                    <div className="cursor-pointer hover:text-red-600"
                        onClick={handleClick2}>
                        👎🏻 싫어요 {dcnt}
                    </div>
                </div>
            </div>

        </div>

    )
}

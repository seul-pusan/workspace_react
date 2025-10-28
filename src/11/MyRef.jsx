import { useRef, useState } from "react";

export default function MyRef() {

    //상태 변수
    const [scnt, setScnt] = useState(0);

    //ref변수
    const rcnt = useRef(0);

    //컴포넌트 변수
    let cnt = 0;

    const handelCnt = () => {
        cnt = cnt + 1;
        console.log(cnt)
    }

    const handelScnt = () => {
        setScnt(scnt + 1);

    }
    const handelRcnt = () => {
        rcnt.current = rcnt.current + 1;
        console.log(rcnt.current)

    }

    return (
        <div className="w-full h-full
                        text-xl font-bold
                        flex justify-center items-center
                        space-x-5">
            <div className="text-blue-400">
                <div onClick={handelCnt} className="bg-blue-300 text-white p-2 cursor-pointer">
                    일반 컴포넌트 변수 </div>
                <div className="text-center"> {cnt} </div>
            </div>
            <div className="text-purple-500">
                <div onClick={handelScnt} className="bg-purple-300 text-white p-2 cursor-pointer">
                    State 변수 </div>
                <div className="text-center"> {scnt} </div>
            </div>
            <div className="text-indigo-700">
                <div onClick={handelRcnt} className="bg-indigo-400 text-white p-2 cursor-pointer">
                    Ref 변수 </div>
                <div className="text-center"> {rcnt.current} </div>
            </div>
        </div>

    )
}



import { useState, useEffect, useRef } from "react";
import TailCard from "../Components/TailCard";


export default function Festival() {
    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const selRef = useRef();
    const [opTag, setOpTag] = useState([]);
    const [selID, setSelID] = useState(null);

    const handelShow = () => {
        let tm = tdata.filter(item => item["GUGUN_NM"] == selRef.current.value);
        tm = tm.map(item => <TailCard key={item.UC_SEQ}
                                    imgUrl={item.MAIN_IMG_THUMB}
                                    title={item.MAIN_TITLE.split('(')[0]}
                                    content={item.MAIN_PLACE}
                                    subtitle={item.USAGE_DAY_WEEK_AND_TIME}

        />);
        setTag(tm);
    };
    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_DATA_API;
        const baseUrl = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
        const url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=50&resultType=json`;

        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.getFestivalKr.item);
    }

    useEffect(() => {
        getFetchData();
    }, [])

    useEffect(() => {
        if (tdata.length == 0)
            return;
        let tm = tdata.map(item => item["GUGUN_NM"]);
        tm = [...new Set(tm)].sort();

        tm = tm.map(item => <option key={item} value={item}>
            {item}
        </option>);
        setOpTag(tm)
    }, [tdata]);


    return (
        <div className=" w-full flex flex-col justify-center items-center
                        bg-gradient-to-b">
            <div className="text-6xl font-extrabold text-gray-800 pt-10 mt-5
                            drop-shadow-sm">
                부산🌊축제🎆
            </div>

            <form className="w-9/10 lg:w-1/4 mt-10 flex justify-center">
                <select id="gugun"
                        ref={selRef}
                        onChange={handelShow}
                        className="w-1/3 justify-center items-center lg:flex-grow text-center p-3 text-lg
                                   border border-gray-300 rounded-lg 
                                   text-zinc-700 bg-zinc-50
                                   focus:outline-none focus:ring-2 focus:ring-purple-400 transition">
                    <option>
                        지역 선택
                    </option>
                    {opTag}
                </select>
            </form>

            <div className="w-9/10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                            ">
                {tag}
            </div>
        </div>
    )
}



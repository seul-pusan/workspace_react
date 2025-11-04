import { useState, useEffect, useRef } from "react";
import TailCard from "../Components/TailCard";
import { Link, useLocation } from "react-router-dom"; // location 추가

export default function Festival() {
    const location = useLocation(); // location 정의
    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const selRef = useRef();
    const [opTag, setOpTag] = useState([]);
    const prevGugun = location.state?.gugun || ""; // 이전 선택 구군 받아오기

    // 선택된 구군에 따라 축제 카드 필터링
    const handelChange = () => {
        const selected = selRef.current.value;
        if (!selected || selected === "지역 선택") {
            setTag([]);
            return;
        }

        let tm = tdata.filter(item => item["GUGUN_NM"] === selected);
        tm = tm.map((item, idx) => (
            <Link
                to="/festival/contents"
                state={{ contents: item, gugun: selected }} // gugun 값 함께 전달
                key={item.UC_SEQ + idx}
            >
                    <TailCard
                        key={item.UC_SEQ}
                        imgUrl={item.MAIN_IMG_THUMB}
                        title={item.MAIN_TITLE.split("(")[0]}
                        content={item.MAIN_PLACE}
                        subtitle={item.USAGE_DAY_WEEK_AND_TIME}
                    />
            </Link>
        ));
        setTag(tm);
    };

    // 유지: 공공데이터 API 호출 유지
    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_DATA_API;
        const baseUrl =
            "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?";
        const url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=50&resultType=json`;

        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.getFestivalKr.item);
    };


    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        if (tdata.length === 0) return;
        let tm = tdata.map(item => item["GUGUN_NM"]);
        tm = [...new Set(tm)].sort();

        tm = tm.map(item => (
            <option key={item} value={item}>
                {item}
            </option>
        ));
        setOpTag(tm);
    }, [tdata]);

    // 이전에 선택한 구군이 있으면 자동 선택 및 필터링
    useEffect(() => {
        if (!prevGugun) return;
        if (tdata.length === 0) return;

        selRef.current.value = prevGugun;

        // ✅ 데이터가 완전히 로드된 다음 프레임에서 실행
        setTimeout(() => {
            handelChange();
        }, 100);
    }, [tdata, prevGugun]);


    return (
        <div className="w-full flex flex-col justify-center items-center bg-gradient-to-b">
            <div className="text-6xl font-extrabold text-gray-800 pt-5 mt-5 drop-shadow-sm">
                부산🌊축제🎆
            </div>

            <div className="w-9/10 lg:w-1/4 mt-10 flex justify-center">
                <select
                    id="gugun"
                    ref={selRef}
                    onChange={handelChange}
                    className="w-1/3 justify-center items-center lg:flex-grow text-center p-3 text-lg
                     border border-gray-300 rounded-lg 
                     text-zinc-700 bg-zinc-50
                     focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                >
                    <option>지역 선택</option>
                    {opTag}
                </select>
            </div>

            <div className=
            "w-9/10 h-[500px] overflow-y-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tag}
            </div>
        </div>
    );
}

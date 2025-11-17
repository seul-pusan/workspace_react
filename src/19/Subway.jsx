import sarea from "./sarea.json";
import SubwayBox from "./SubwayBox";
import TailSelect from "../components/TailSelect";
import { useState, useRef, use, Suspense } from "react";

const dataCache = new Map();

function fetchData(area) {
    const dt = new Date().toISOString().slice(0, 10).replaceAll('-', '');
    const apikey = import.meta.env.VITE_API_KEY;
    const baseUrl = "/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?";
    let url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=50`;
    url = `${url}&resultType=json&controlnumber=${dt}&areaIndex=${area}`;

    if (!dataCache.has(url)) {
        const promise = fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }
                return resp.json();
            })
            .then(data => {
                if (data.response.body.items === "" || !data.response.body.items) {
                    return [];
                }
                let tm = data.response.body.items.item;
                tm = tm.sort((a, b) => a.controlnumber - b.controlnumber);
                return tm;
            });
        dataCache.set(url, promise);
    }
    return dataCache.get(url);
}

function SubwayData({ area }) {
    const tdata = use(fetchData(area));

    return (
        <div className="w-full flex flex-col gap-3 mt-2">
            {tdata.length > 0 ? (
                tdata.map((item, idx) => (
                    <SubwayBox key={item.controlnumber} idx={idx % 2} item={item} />
                ))
            ) : (
                <div className="w-full text-center p-6 rounded-xl bg-slate-100 text-slate-600 shadow-inner">
                    해당 지역의 데이터가 없습니다.
                </div>
            )}
        </div>
    );
}

export default function Subway() {
    const [selectedArea, setSelectedArea] = useState(null);
    const selAreaRef = useRef();

    const handleSelect = () => {
        const areaValue = selAreaRef.current.value;
        setSelectedArea(areaValue || null);
    };

    return (
        <div className="w-11/12 md:w-3/4 max-w-4xl mx-auto flex flex-col justify-start items-center mt-12">

            {/* 헤더 + Select */}
            <div className="w-full bg-violet-300 p-7 rounded-2xl shadow-lg mb-8">
                <h1 className="text-2xl md:text-3xl font-extrabold text-black text-center tracking-wide drop-shadow-md">
                    부산 실내공기질 정보
                </h1>

                <div className="mt-5">
                    <TailSelect
                        id="selArea"
                        ref={selAreaRef}
                        title="부산 지하철역 선택"
                        opk={sarea.map(item => item["코드"])}
                        opv={sarea.map(item => item["측정소"])}
                        onHandle={handleSelect}
                        className="bg-white rounded-xl border border-indigo-300 shadow-sm focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Suspense */}
            <Suspense
                fallback={
                    <div className="w-full text-center p-6 text-xl font-bold text-indigo-600 animate-pulse">
                        로딩중...
                    </div>
                }
            >
                {selectedArea ? (
                    <SubwayData area={selectedArea} />
                ) : (
                    <div className="w-full text-center p-6 text-slate-700 bg-slate-100 rounded-xl shadow-inner">
                        지역을 선택해주세요.
                    </div>
                )}
            </Suspense>
        </div>
    );
}

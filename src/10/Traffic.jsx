import TrafficNav from "./TrafficNav"
import trafficdata from './교통사고통계.json'
import { useEffect, useState } from "react"

export default function Traffic() {
    //전체 데이터
    const [tdata, setTdata] = useState([]);

    //대분류 데이터
    const [c1, setC1] = useState([]);

    //선택된 대분류
    const [sel1, setSel1] = useState('');

    //사고 유형 데이터
    const [c2, setC2] = useState([]);

    //선택된 사고 유형 데이터
    const [sel2, setSel2] = useState('');

    //선택된 자료
    const [info, setInfo] = useState([]);
    const [infoTag, setInfoTag] = useState();

    const getFetchData = () => {
        setTdata(trafficdata);
    };

    useEffect(() => {
        getFetchData();
    }, []);

    //tdata가 변경 되었을 때
    useEffect(() => {

        //초기화 될 때
        if (tdata.length == 0) return;
        console.log("tdata = ", tdata)

        //페치 변경 시
        let tm = tdata.map(item => item['사고유형 대분류']);

        //중복 제거
        tm = [...new Set(tm)];

        //대분류 생성
        setC1(tm);
    }, [tdata])


    useEffect(() => {
        console.log("c1 = ", c1)
    }, [c1]);


    //대분류 중에서 특정 항목이 선택되면
    useEffect(() => {
        //대분류 초기화 시
        if (!sel1) return;

        //사고유형 목록 생성
        let tm = [...new Set(
            tdata.filter(item => item['사고유형 대분류'] == sel1)
                .map(item => item['사고유형']))];

        //사고유형 생성
        setC2(tm);
        //새로 선택 시 사고유형 초기화
        setSel2("");
        //이전 정보도 초기화
        setInfo([]);
        //초기화
        setInfoTag('');
    }, [sel1]);
    //

    //사고 유형 선택 되었을 때
    useEffect(() => {
        //초기화 시
        if (!sel1 || !sel2 || !c2) return;

        //사고유형 목록 생성
        let tm = tdata.filter(item => item['사고유형 대분류'] == sel1 && item['사고유형'] == sel2);
        setInfo(tm);
    }, [sel2]);

    //사고 유형 결정되면
    useEffect(() => {
        if (!info || info.length === 0) return;
        console.log("info", info)

        const information = info.map((x, y) => (
            <div key={y}
                className="w-full flex items-center justify-center gap-2 p-3">
                <div className="bg-indigo-200 text-black px-4 py-2 rounded-sm  w-28 text-center font-semibold">
                    {x['연도'].replace('[', '').replace(']', '')}
                </div>
                <div className="text-gray-800  font-semibold w-16 text-center">
                    {x['인원'].toLocaleString()}
                </div>

            </div>
        ))

        setInfoTag(information);

    }, [info]);



    return (
        <div className="w-full flex flex-col justify-center items-center p-10">
            <h2 className="text-3xl font-bold mb-8 mt-8"> 🚗 교통사고 통계 </h2>

            {c1.length > 0 && (
                <div className="w-full max-w-7xl mb-10
                                 bg-white p-4 border border-b-blue-950 ">
                    <TrafficNav
                        title="교통사고 대분류"
                        c={c1}
                        sel={sel1}
                        setSel={setSel1}
                    />
                </div>
            )}

            {c2.length > 0 && sel1 && (
                <div className="w-full max-w-7xl mb-8
                                 bg-white p-4 border border-b-blue-950">
                    <TrafficNav
                        title="사고유형"
                        c={c2}
                        sel={sel2}
                        setSel={setSel2}
                    />
                </div>
            )}


            {infoTag && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
                    {infoTag}
                </div>
            )}
        </div>
    );
}

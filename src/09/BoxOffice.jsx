import { useEffect, useState } from "react";
import boxoffice from '../assets/boxoffice.png'
export default function BoxOffice() {
    const [data, setData] = useState([]);
    const [tag, setTag] = useState([]);
    const [info, setInfo] = useState("");
    const [otherDate, setOtherDate] = useState("");

    //어제 날짜 가져오기
    const getYesterday = () => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        // ISO 형식(예: 2025-09-22 09:00:00.000Z)
        return yesterday.toISOString().slice(0, 10)
    }

    const getFetchData = async (dt) => {
        const apiKey = import.meta.env.VITE_MV_API;
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${dt}`


        try {
            const res = await fetch(url);
            const rdata = await res.json();
            setData(rdata.boxOfficeResult.dailyBoxOfficeList);
        } catch (err) {
            console.error("API 요청 오류:", err); // ✅ 에러 로그
        }
    }

    //컴포넌트가 처음 렌더링될 때 실행
    useEffect(() => {
        const dt = getYesterday().replaceAll('-', '');
        console.log("요청 날짜:", dt);
        getFetchData(dt);
    }, []);


    useEffect(() => {
        if (otherDate){
            const od= otherDate.replaceAll('-', '');
             getFetchData(od);  
        }
    }, [otherDate])

    //아이템 클릭 시 영화 정보 출력
    const handelItem = (item) => {
        console.log(item)
        setInfo(`[${item.movieNm}] 개봉일:${item.openDt}, 상영스크린수:${item.scrnCnt}, 상영횟수:${item.showCnt}`);
    };

    useEffect(() => {
        console.log(data)
        const items = data.map(item =>
            <tr key={item.movieCd}
                onClick={() => handelItem(item)}
                className="cursor-pointer hover:bg-blue-100 hover:font-bold">
                <th scope="row" className=" text-indigo-800 font-bold" >
                    {item.rank}
                </th>

                <td className="p-3">
                    {item.movieNm}
                </td>

                <td className="p-3">
                    {parseInt(item.salesAmt).toLocaleString()}
                </td>

                <td className="p-3">
                    {parseInt(item.audiCnt).toLocaleString()}
                </td>

                <td className="p-3">
                    {parseInt(item.salesAcc).toLocaleString()}
                </td>

                <td className="p-3">
                    {parseInt(item.audiAcc).toLocaleString()}
                </td>

                <td className="p-3">
                    {item.rankInten > 0 ?
                        <span className="text-red-400"> 🔺 {item.rankInten} </span>
                        : item.rankInten < 0 ?
                            <span className="text-blue-400"> 🔻 {Math.abs(item.rankInten)}</span>
                            : <span className="text-gray-400 font-bold text-3xl"> -</span>}
                </td>


            </tr>
        );
        setTag(items);
    }, [data])


    return (

        <div>
            <div className="flex flex-col justify-center items-center">
                <img src={boxoffice} alt="boxoffice 로고" className="mb-5 mt-5 w-60 h-auto justify-center items-center" />
            </div>

            <div className="flex justify-end items-center">
                <span className="text-zinc-700 font-semibold mr-1">날짜 선택</span>
                <input
                    type="date"
                    value={otherDate}
                    onChange={(e) => setOtherDate(e.target.value)}
                    max={getYesterday()}
                    className="appearance-none border border-gray-300 rounded-md px-1 py-1 
               focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer mb-1"
                />
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-t-lg ">
                <table className="table-fixed w-full text-sm text-center rtl:text-center text-black dark:text-indigo-800">
                    <thead className="text-xs text-white uppercase bg-indigo-600 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                순위
                            </th>
                            <th scope="col" className="px-6 py-3">
                                영화명
                            </th>
                            <th scope="col" className="px-6 py-3">
                                매출액
                            </th>
                            <th scope="col" className="px-6 py-3">
                                관객수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                누적매출액
                            </th>
                            <th scope="col" className="px-6 py-3">
                                누적관객수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                증감율
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tag}
                    </tbody>
                </table>
            </div>
            <div className="w-full h-10 bg-blue-50 text-indigo-950 font-semibold
                            flex justify-center items-center rounded-b-lg">
                {info}
            </div>
        </div>
    )
}


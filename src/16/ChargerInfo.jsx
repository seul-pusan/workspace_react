import zcode from "./data/zcode.json";
import zscode from "./data/zscode.json";
import kind from "./data/kind.json";
import kinddetail from "./data/kinddetail.json";
import busid from "./data/busid.json";
import chgertype from "./data/chgertype.json";
import stat from "./data/stat.json";

import TailButton from "../Components/TailButton";
import TailSelect from "../Components/TailSelect";
import { useState, useRef } from "react";

export default function ChargerInfo() {

  // 상태 변수
  const [zs, SetZs] = useState([]);
  const [kd, SetKd] = useState({});
  const [tdata, setTdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const perPage = 12;

  // ref 변수
  const kinddetailRef = useRef();
  const kindRef = useRef();
  const zcodeRef = useRef();
  const zscodeRef = useRef();

  // 데이터 요청
  const getDataFetch = async (cpage) => {
    if (zcodeRef.current.value == "") {
      alert("지역 선택");
      zcodeRef.current.focus();
      SetZs([]);
      return;
    }

    if (zscodeRef.current.value == "" && kindRef.current.value == "") {
      alert("지역동 또는 충전소 구분 선택");
      zscodeRef.current.focus();
      return;
    }

    const apikey = import.meta.env.VITE_DATA_API;
    const baseUrl = "http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?";
    let url = `${baseUrl}serviceKey=${apikey}&numOfRows=${perPage}&pageNo=${cpage}&dataType=JSON`;

    if (zcodeRef.current.value != "") url += `&zcode=${zcodeRef.current.value}`;
    if (zscodeRef.current.value != "") url += `&zscode=${zscodeRef.current.value}`;
    if (kindRef.current.value != "") url += `&kind=${kindRef.current.value}`;

    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTdata(data?.items?.item || []);
      const totalCount = data?.totalCount || 0;
      setTotalPage(Math.ceil(totalCount / perPage));
      setCurrentPage(cpage);
    } catch (error) {
      console.error("데이터 요청 오류:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // select 이벤트
  const handleZcode = () => {
    SetZs(zscode[zcodeRef.current.value]);
  };

  const handleKind = () => {
    const sKind = kindRef.current.value;
    SetKd(kinddetail[sKind] || {});
  };

  const handleCancel = () => {
    if (zcodeRef.current) zcodeRef.current.value = "";
    if (zscodeRef.current) zscodeRef.current.value = "";
    if (kindRef.current) kindRef.current.value = "";
    if (kinddetailRef.current) kinddetailRef.current.value = "";
    SetZs([]);
    SetKd({});
    setTdata([]);
    setCurrentPage(1);
    setTotalPage(1);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-8 bg-gradient-to-b relative">
      <h1 className="mt-20 text-3xl font-extrabold text-zinc-700 mb-8">
        🚘 전기차 충전소 정보
      </h1>

      {/* 검색 영역 */}
      <div className="w-full max-w-6xl rounded-2xl p-8 border-2 border-indigo-900 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 place-items-center">
          <TailSelect id="sel1"
                      ref={zcodeRef}
                      title="시도"
                      opk={Object.keys(zcode)}
                      opv={Object.values(zcode)}
                      onHandle={handleZcode}
                      selRef={zcodeRef} />
          <TailSelect id="sel2"
                      ref={zscodeRef}
                      title="지역 동"
                      opk={zs ? Object.keys(zs) : []}
                      opv={zs ? Object.values(zs) : []}
                      selRef={zscodeRef} />
          <TailSelect id="sel3"
                      ref={kindRef}
                      title="충전소 구분"
                      opk={Object.keys(kind)}
                      opv={Object.values(kind)}
                      onHandle={handleKind}
                      selRef={kindRef} />
          <TailSelect id="sel4"
                      ref={kinddetailRef}
                      title="충전소 상세"
                      opk={Object.keys(kd)}
                      opv={Object.values(kd)}
                      selRef={kinddetailRef} />

          <div className="flex items-end justify-center space-x-3 col-span-1 sm:col-span-2 lg:col-span-2">
            <TailButton caption="검색" color="indigo" onHandle={() => getDataFetch(1)} />
            <TailButton caption="취소" color="slate" onHandle={handleCancel} />
          </div>
        </div>
      </div>

      {/* 결과 컨테이너 */}
      <div className="w-full max-w-6xl mt-10 min-h-[600px] relative flex flex-col items-center">
        {/* 로딩 오버레이 */}
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white/70 backdrop-blur-sm z-50">
            <div className="text-5xl text-blue-950 font-semibold animate-pulse">
              🔄 Searching...
            </div>
          </div>
        )}

        {/* 요약 통계 */}
        {tdata.length > 0 && (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 text-center">
            <div className="bg-purple-200 border border-purple-300 rounded-lg py-3">
              <p className="text-xs font-bold text-black">충전소 수</p>
              <p className="text-lg font-bold text-purple-700">{tdata.length} 개</p>
            </div>
            <div className="bg-blue-200 border border-blue-300 rounded-lg py-3">
              <p className="text-xs font-bold text-black">충전대기</p>
              <p className="text-lg font-bold text-blue-700">
                {tdata.filter((x) => x.stat === "1").length} 개
              </p>
            </div>
            <div className="bg-green-200 border border-green-300 rounded-lg py-3">
              <p className="text-xs font-bold text-black">충전중</p>
              <p className="text-lg font-bold text-green-700">
                {tdata.filter((x) => x.stat === "2").length} 개
              </p>
            </div>
            <div className="bg-yellow-200 border border-yellow-300 rounded-lg py-3">
              <p className="text-xs font-bold text-black">통신이상</p>
              <p className="text-lg font-bold text-yellow-700">
                {tdata.filter((x) => x.stat === "3").length} 개
              </p>
            </div>
            <div className="bg-yellow-200 border border-yellow-300 rounded-lg py-3">
              <p className="text-xs font-bold text-black">점검중</p>
              <p className="text-lg font-bold text-yellow-700">
                {tdata.filter((x) => x.stat === "5").length} 개
              </p>
            </div>
            <div className="bg-red-200 border border-red-300 rounded-lg py-3">
              <p className="text-xs font-bold text-black">운영중지</p>
              <p className="text-lg font-bold text-red-700">
                {tdata.filter((x) => x.stat === "4").length} 개
              </p>
            </div>
          </div>
        )}

        {/* 결과 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {tdata.map((item) => (
            <div
              key={item.statId + item.chgerId}
              onClick={() => setSelected(item)}
              className="bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-slate-600 cursor-pointer transition p-4 text-center"
            >
              <p className="font-semibold text-zinc-800">{item.statNm}</p>
            </div>
          ))}
        </div>

        {/* 상세 모달 */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center ">
            <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6">
              <h2 className="text-2xl font-bold text-zinc-700 mb-5">{selected.statNm}</h2>
              <p className="text-gray-600 mb-1">{selected.addr}</p>
              <p className="text-gray-600 mb-1">{selected.bnm}</p>
              <p className="text-gray-600 mb-1">{selected.useTime}</p>
              <p className="text-gray-600 mb-1">
                상태: {stat[selected.stat] || "정보 없음"}
              </p>
              <p className=" text-gray-600 mb-1">
                충전 방식: {chgertype[selected.chgerType] || selected.method}
              </p>
              <p className="text-gray-600 mb-1">용량: {selected.output}kW</p>
              <p className="text-gray-600 mb-1">
                주차료: {selected.parkingFree === "Y" ? "무료" : "유료"}
              </p>
              <div className="flex justify-end mt-3">
                <button
                  onClick={() => setSelected(null)}
                  className="bg-indigo-400 text-white font-bold px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

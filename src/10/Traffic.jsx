import TrafficNav from "./TrafficNav";
import TrafficInfo from "./TrafficInfo";
import { useState, useEffect } from "react";

export default function Traffic() {
  // 전체 데이터
  const [tdata, setTdata] = useState([]);

  // 대분류 데이터
  const [c1, setC1] = useState([]);
  const [sel1, setSel1] = useState("");

  // 사고유형 데이터
  const [c2, setC2] = useState([]);
  const [sel2, setSel2] = useState("");

  // 선택된 사고정보
  const [info, setInfo] = useState([]);

  // ✅ API 데이터 불러오기
  const getFetchData = async () => {
    const apikey = import.meta.env.VITE_DATA_API;
    const baseUrl =
      "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?";
    const url = `${baseUrl}page=1&perPage=117&returnType=json&serviceKey=${apikey}`;

    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.data);
  };

  useEffect(() => {
    getFetchData();
  }, []);

  // ✅ 대분류 설정
  useEffect(() => {
    if (tdata.length === 0) return;

    let tm = tdata.map((item) => item["사고유형대분류"]);
    tm = [...new Set(tm)];
    setC1(tm);
  }, [tdata]);

  // ✅ 사고유형 설정
  useEffect(() => {
    if (!sel1) return;

    let tm = tdata
      .filter((item) => item["사고유형대분류"] === sel1)
      .map((item) => item["사고유형"]);
    tm = [...new Set(tm)];
    setC2(tm);
    setInfo([]);
  }, [sel1]);

  // ✅ 선택된 데이터(info)
  useEffect(() => {
    if (!sel1 || !sel2) return;

    const tm = tdata.filter(
      (item) =>
        item["사고유형대분류"] === sel1 && item["사고유형"] === sel2
    );
    setInfo(tm);
  }, [sel2]);

  return (
    <div className="w-full flex flex-col justify-start items-center mt-10 px-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8">
        🚗 교통사고 통계 조회
      </h2>

      {/* 🔹 대분류 선택 */}
      {c1.length > 0 && (
        <div className="w-full max-w-6xl bg-white p-5 mb-6 rounded-xl shadow-sm border border-indigo-200">
          <TrafficNav title="교통사고 대분류" c={c1} sel={sel1} setSel={setSel1} />
        </div>
      )}

      {/* 🔹 사고유형 선택 */}
      {c2.length > 0 && sel1 && (
        <div className="w-full max-w-6xl bg-white p-5 mb-8 rounded-xl shadow-sm border border-indigo-200">
          <TrafficNav title="사고유형" c={c2} sel={sel2} setSel={setSel2} />
        </div>
      )}

      {/* 🔹 결과 정보 카드 */}
      <div className="w-full max-w-5xl flex flex-col items-center">
        {info && info.length > 0 ? (
          info.map((item, idx) => (
            <TrafficInfo key={idx} infoData={item} />
          ))
        ) : (
          sel2 && (
            <div className="text-gray-500 text-center mt-10">
              ⚠️ 선택된 데이터가 없습니다.
            </div>
          )
        )}
      </div>
    </div>
  );
}

import scode from "./scode.json";

export default function SubwayBox({ idx, item }) {
  const isOdd = idx === 1;

  // 컬러 테마 (idx에 따라 깔끔한 lime 또는 amber)
  const headerBg = isOdd ? "bg-amber-700" : "bg-lime-700";
  const headerText = isOdd ? "text-amber-800" : "text-lime-800";
  const valueBorder = isOdd ? "border-amber-600" : "border-lime-600";
  const valueTitleBg = isOdd ? "bg-amber-700" : "bg-lime-700";

  return (
    <div className="w-full flex flex-col justify-start my-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
      {/* 상단 타이틀 */}
      <div
        className={`w-full px-4 py-2 text-lg font-semibold ${headerText}`}
      >
        {item.office} {item.site} {item.city} &nbsp;
        (
        {item.controlnumber.slice(0, 4)}.
        {item.controlnumber.slice(4, 6)}.
        {item.controlnumber.slice(6, 8)} &nbsp;
        {item.controlnumber.slice(8, 10)}시 )
      </div>

      {/* 데이터 목록 */}
      <div className="w-full grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-3 mt-3">
        {Object.keys(scode).map(c => (
          <div key={c} className="w-full flex flex-col">
            {/* 항목 이름 */}
            <div
              className={`${valueTitleBg} text-white p-2 rounded-t-lg text-sm font-bold text-center shadow`}
            >
              <div>{scode[c]["name"]}</div>
              <div className="opacity-80 text-xs mt-1">({c})</div>
            </div>

            {/* 값 */}
            <div
              className={`p-2 border ${valueBorder} text-center rounded-b-lg bg-slate-50 shadow-inner`}
            >
              {item[c]} {item[c] === "-" ? "" : scode[c]["unit"]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

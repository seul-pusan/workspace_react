export default function TrafficInfo({ infoData }) {
  const show = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];

  return (
    <div className="w-full flex flex-col justify-center items-start p-3 mb-6 
                    border border-indigo-300 rounded-xl bg-white shadow-sm 
                    hover:shadow-md transition-shadow duration-300">
      {/* 도로 종류 */}
      <div className="text-lg font-bold text-indigo-700 mb-3 px-2">
        🚗 도로종류: <span className="text-indigo-900">{infoData["도로종류"]}</span>
      </div>

      {/* 데이터 카드 */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {show.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between border border-indigo-200 
                       rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors 
                       duration-200"
          >
            <div className="w-1/2 bg-indigo-500 text-white text-center 
                            font-semibold text-sm py-3 px-1 rounded-l-lg whitespace-nowrap">
              {item}
            </div>
            <div className="w-1/2 text-center font-bold text-indigo-800 
                            text-base py-3 px-1 truncate">
              {infoData[item]
                ? parseInt(infoData[item]).toLocaleString()
                : "-"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

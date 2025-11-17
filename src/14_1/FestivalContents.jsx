import { useLocation, useNavigate } from "react-router-dom";
import TailButton from "../Components/TailButton";

export default function FestivalContents() {
    const location = useLocation();
    const nav = useNavigate();
    const handleHome = () => {
        nav("/festival", { state: { gugun } }); //
    };

    const contents = location.state?.contents;
    const gugun = location.state?.gugun;

    if (!contents) {
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <h2 className="text-2xl font-bold text-gray-800 mb-5">
                    ❌ 잘못된 접근입니다
                </h2>
                <TailButton caption="뒤로가기" color="slate" onHandle={() => nav(-1)} />
            </div>
        );
    }

    // 카카오지도 URL
    const kakaoMapUrl =
        contents?.LAT && contents?.LNG
            ? `https://map.kakao.com/link/map/${contents?.MAIN_PLACE?.replace(
                ",",
                ""
            )?.replace("\n", "")},${contents?.LAT},${contents?.LNG}`
            : null;

    return (
        <div className="w-full flex flex-col justify-center items-center p-10">
            {/* 제목: 축제 이름 */}
            <h1 className="text-4xl text-center font-extrabold text-slate-700 mb-10">
                {contents.MAIN_TITLE.split("(")[0]}
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-start w-full max-w-6xl gap-10">
                {/* 왼쪽: 이미지 */}
                <div className="w-full md:w-1/2 flex justify-center items-center h-full">
                    <div className="w-full max-w-lg flex justify-center">
                        <img
                            src={contents.MAIN_IMG_NORMAL || contents.MAIN_IMG_THUMB}
                            alt={contents.MAIN_TITLE}
                            className="rounded-2xl shadow-xl w-full h-[480px] object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                        />
                    </div>
                </div>

                {/* 오른쪽: 상세정보 */}
                <div className="w-full md:w-1/2 text-lg leading-relaxed space-y-4">
                    {/* 축제 구군 */}
                    <p className="text-gray-800">
                        <span className="font-semibold text-slate-800">🏙️ 축제 구군 :</span>{" "}
                        {gugun || contents.GUGUN_NM || "-"}
                    </p>

                    {/* 주소 + 지도 버튼 */}
                    <div className="flex flex-wrap items-center gap-3">
                        <p className="text-gray-800">
                            <span className="font-semibold text-slate-800">📍 주소 :</span>{" "}
                            {contents.ADDR1 || contents.MAIN_PLACE || "-"}
                        </p>
                        {kakaoMapUrl ? (
                            <a
                                href={kakaoMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 rounded-lg text-sm shadow-sm transition"
                            >
                                🗺️ 카카오지도보기
                            </a>
                        ) : (
                            <span className="text-gray-400 text-sm">지도 정보 없음</span>
                        )}
                    </div>

                    {/* 연락처 */}
                    <p>
                        <span className="font-semibold text-slate-800">📞 연락처 :</span>{" "}
                        {contents.CNTCT_TEL ? contents.CNTCT_TEL : "-"}
                    </p>

                    {/* 홈페이지 */}
                    <p>
                        <span className="font-semibold text-slate-800">🌐 홈페이지 :</span>{" "}
                        {contents.HOMEPAGE_URL ? (
                            <a
                                href={contents.HOMEPAGE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline break-all"
                            >
                                {contents.HOMEPAGE_URL}
                            </a>
                        ) : (
                            "-"
                        )}
                    </p>

                    {/* 상세 내용 */}
                    <div className="border border-gray-300 rounded-2xl p-4 shadow-sm bg-white max-h-[300px] overflow-y-auto">
                        <span className="font-semibold text-slate-800 block mb-2">
                            💬 상세내용 :
                        </span>
                        <p className="text-gray-700 whitespace-pre-line">
                            {contents.ITEMCNTNTS || "상세 설명이 없습니다."}
                        </p>
                    </div>
                </div>
            </div>

            {/* 하단 버튼 */}
            <div className="mt-10 flex justify-center">
                <TailButton
                    caption="⬅ 목록으로"
                    color="blue"
                    onHandle={handleHome}
                />
            </div>
        </div>
    );
}

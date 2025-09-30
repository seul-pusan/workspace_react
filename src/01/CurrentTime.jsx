export default function CurrentTime() {
    const now = new Date().toLocaleTimeString(); // ✅ 현재 날짜 문자열 생성

    return (
        <div className="font-bold text-3xl text-black">
            ⏱ 현재 시간 : {now}
        </div>
    );
}

export default function MyClockTime() {
    let time = new Date().toLocaleTimeString();
    return (
        <div className="absolute bottom-10 w-1/2  bg-gray-700 text-red-100
        flex flex-col justify-center items-center rounded-md
        px-4 py-2 font-bold gowun-dodum-regular text-2xl">
            현재 시각 : {time}
        </div>

    );
}
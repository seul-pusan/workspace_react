import CurrentTime from "./01/CurrentTime"

function Hello() {
    let name = "해슬";
    return (
        <div className="font-bold text-6xl text-black">
            Hello React 🐣
            {/* <br /><br />{`\n${name}님 안녕하세요`} */}

            {/* 시간 */}
            <div className='absolute bottom-8 w-1/2 flex flex-col bg-orange-300 justify-center items-center'>
                <CurrentTime />
            </div>
        </div>
    )
}

export default Hello;
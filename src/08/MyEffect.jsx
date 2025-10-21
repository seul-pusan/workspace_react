import { useEffect, useState } from "react"
import TailButton from "../Components/TailButton"

export default function MyEffect() {
    const [isActive, setIsActive] = useState(false);
    const [tag, setTag] = useState();

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("handelClick", isActive)
    }

    const handleShow = () => {
        if (isActive)
            setTag(<h1> 상태on</h1>)
        else
            setTag(<h1> 상태off</h1>)
    }

    useEffect(() => {
        //컴포넌트 생성시 한번 실행
        console.log('컴포넌트 생성')
    }, []);

    useEffect(() => {
        //state변수가 변할 때
        console.log("useEffect", isActive)
    }, [isActive]);

    useEffect(() => {
        //상태가 변경될 때마다
        console.log("useEffect 상태가 변경될 때", isActive)
    }, [isActive]);





    return (
        <div className="w-full h-full flex justify-center items-center">
            <div>{tag}</div>
            {
                isActive ? <TailButton color='blue' caption="useEffect" onHandle={handleClick} />
                    : <TailButton color='orange' caption="useEffect1" onHandle={handleClick} />
            }
            <TailButton color='lime' caption="태그변경" onHandle={handleShow} />

        </div>
    )
}




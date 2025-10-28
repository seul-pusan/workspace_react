import TailButton from '../Components/TailButton'
import { useRef, useEffect } from 'react'



export default function RefCal() {
    //input 요소 ref 연결
    const txt1Ref = useRef();
    const txt2Ref = useRef();
    const txt3Ref = useRef();
    const opRef = useRef();

    //첫번째 input에 포커스가 놓이면
    const handelTxt1 = () => {
         txt1Ref.current.value =  "";
         txt2Ref.current.value =  "";
         txt3Ref.current.value =  "";

    }
    //버튼이 눌러지면
    const handleClick = (e) => {
        e.preventDefault();

        let num1 = txt1Ref.current?.value ?? "";
        let num2 = txt2Ref.current?.value ?? "";

        let op = opRef.current?.value ?? "+";

        let num3 = 0;
        switch (op) {
            case '+': num3 = Number(num1) + Number(num2); break;
            case '-': num3 = Number(num1) - Number(num2); break;
            case 'x': num3 = Number(num1) * Number(num2); break;
            case '÷': num2 === ""? num3 = "오류" : num3 = Number(num1) / Number(num2); break;
        }

        txt3Ref.current.value = num3;
        //txt1Ref.current.focus();
    }

    //컴포넌트가 생성될 때
    useEffect(() => {
        txt1Ref.current.focus();

    }, []);

    return (
        <div className='w-full h-screen flex justify-center items-start mt-20'>
            <form className='flex items-center gap-3 bg-white shadow-md border border-blue-200 
                                rounded-2xl px-6 py-5' >
                <input type="number" name="txt1" onFocus={handelTxt1} 
                    ref={txt1Ref}
                    className='text-center p-2.5 border border-gray-300 
                            bg-gray-50 rounded-lg text-lg font-medium 
                            focus:outline-none focus:ring-2 focus:ring-blue-400'/>
                
                <select name= "op" ref={opRef}
                    className='w-16 h-[46px] text-lg font-semibold text-gray-700 
                            border border-gray-300 bg-gray-100 rounded-lg text-center 
                            focus:ring-2 focus:ring-blue-400'>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="×">×</option>
                    <option value="÷">÷</option>
                </select>

                <input type="number" name="txt2" 
                    ref={txt2Ref}
                    className='text-center p-2.5 border border-gray-300 
                            bg-gray-50 rounded-lg text-lg font-medium 
                            focus:outline-none focus:ring-2 focus:ring-blue-400'/>

                <TailButton color="blue"
                    caption="="
                    onHandle={handleClick}
                    className="text-xl font-bold px-4 py-2 rounded-full bg-blue-500 text-white 
                             hover:bg-blue-600 active:scale-95 transition-transform"/>

                <input type="text" name="txt3"
                    ref={txt3Ref}
                    readOnly
                    className='text-center p-2.5 border border-gray-300 
                             bg-blue-50 rounded-lg text-lg font-semibold text-blue-700'/>
            </form>

        </div>
    )
}



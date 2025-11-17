
import TailButton from "../Components/TailButton"
import { useAtom } from "jotai"
import { cntAtom } from "./atomsCnt"

export default function JotaiBt() {
    const [cnt, setCnt] = useAtom(cntAtom); 
    return (
        <div className='w-full flex justify-center'>
            <TailButton caption="증가" color="red" onHandle={() => setCnt(cnt + 1)} />
            <TailButton caption="감소" color="blue" onHandle={() => setCnt(cnt - 1)} />
        </div>
    )
}



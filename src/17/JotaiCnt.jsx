import { cntAtom, dbCntAtom } from './atomsCnt';
import JotaiBt from './JotaiBt';
import { useAtomValue } from "jotai";

export default function JotaiCnt() {
    const cnt = useAtomValue(cntAtom);
    const dbCnt = useAtomValue(dbCntAtom);

    return (
        <div className='w-full max-w-5xl mx-auto'>
            <h1 className='mt-10 text-4xl text-center font-extrabold'>
                전역 상태관리
            </h1>

            <div className='w-full bg-indigo-50 border border-indigo-600
            flex flex-col justify-center items-center p-4 m-4
            text-2xl font-bold'>

                <div>
                    count : {cnt}
                </div>
                <div>
                    double count :{ dbCnt}
                </div>
                <JotaiBt />
            </div>
        </div>
    )
}



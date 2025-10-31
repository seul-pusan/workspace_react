import TailButton from "./TailButton"


export default function TailFind({ kwRef, onOk, onCancel }) {
  return (
    <form className="w-9/10 lg:w-0.6 mt-10
                    grid grid-cols-1 lg:grid-cols-3 gap-4">
      <input
        type="text"
        id="kw"
        ref={kwRef}
        className='text-center p-3 border border-gray-300 
                   bg-gray-50 rounded-lg text-lg font-medium 
                    focus:outline-none focus:ring-2 focus:ring-purple-400'/>
      <TailButton caption="확인"
        color="purple"
        onHandle={onOk} />

      <TailButton caption="취소"
        color="purple"
        onHandle={onCancel} />


    </form>
  )
}



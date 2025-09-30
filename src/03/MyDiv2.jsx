import MyDiv3 from "./MyDiv3";

export default function MyDiv2() {
  return (
    <div className="w-[60%] h-[60%] bg-purple-400 flex items-center justify-center text-white">
      div1 &gt; div2
      <MyDiv3 />
    </div>
  )
}

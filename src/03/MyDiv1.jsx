import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {
    
  return (
    <div className="w-full h-screen flex bg-purple-800 items-center justify-center
     text-white text-5xl">
      div1
      <MyDiv2 />
    </div>
  )
}

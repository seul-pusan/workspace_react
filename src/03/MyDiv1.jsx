import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {

  const d1= 'div1';
  const d2= 'div2';
  const d3= 'div3';
    
  return (
    <div className="w-full md:w-8/10 h-2/3 flex
     bg-purple-800 items-start justify-start p-10
     text-white text-2xl font-bold rounded-3xl">
      <h3>{d1}</h3>
      <MyDiv2 d1={d1} d2= {d2} d3={d3}/>
    </div>
  )
}

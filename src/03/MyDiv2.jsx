import MyDiv3 from "./MyDiv3";

export default function MyDiv2({d1, d2, d3}) {
  return (
    <div className="w-8/10 h-3/4
     flex flex-col p-10 m-10
     bg-purple-400 items-start justify-start
     text-white text-2xl font-bold rounded-3xl">
      <h3>{d1} &gt; {d2}</h3>
      <MyDiv3  dv1={d1} dv2={d2} dv3={d3} />
    </div>
  )
}

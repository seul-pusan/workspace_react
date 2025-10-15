export default function MyDiv3({dv1, dv2, dv3}) {
  return (
    <div className=" w-9/10 h-3/4
     flex flex-col p-10 m-10
      bg-purple-200 items-center justify-center
     text-gray-600 tex text-2xl font-bold rounded-3xl ">
       <h3>{dv1} &gt; {dv2} &gt; {dv3}</h3>
    </div>
  )
}

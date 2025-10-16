import FoodCard from './FoodCard'
import { useState } from 'react'
import TailButton from '../Components/TailButton'
import fooddata from './fooddata.json'

export default function Food() {
    const [tags, setTags]= useState([]);
    
    let group= fooddata.map(data => data["운영주체 분류"].replaceAll(' ', ''));
    group = [...new Set(group)];
    console.log(group)

    const handleClick = (cat) => {
        console.log(cat)
        let dt = fooddata.filter(data => data["운영주체 분류"].replaceAll(' ', '') == cat)
        dt = dt.map(data => 
            <FoodCard key={data['사업장명']}
                     data={data} /> )

        setTags(dt)
    }

  return (
    <div className='w-full h-full flex flex-col'>
        <div>
            {group.map(data =>
            < TailButton key= {data}
                         caption = {data}
                         color= "fuchsia"
                         onHandle = {() => handleClick(data)} />)}
        </div>
        <div className='8/10 grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-y-hidden'>
            {tags}
        </div>
      
    </div>
  )
}



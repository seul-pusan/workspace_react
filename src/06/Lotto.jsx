import React, { useState } from 'react'
import TailBall from '../Components/TailBall'
import TailButton from '../Components/TailButton'

export default function Lotto() {
  const [lottoTag, setLottoTag] = useState([]);

  const handelClick = () => {
    let num = [];

    //중복되지 않는 숫자 
    while (num.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (!num.includes(n))
        num.push(n);
    }

    //보너스
    let bonus = num.splice(-1);

    //정렬
    num.sort((a, b) => a - b);


    let lotto = [...num, '+', ...bonus];
    lotto = lotto.map(item => item == '+' ?
      <span key={`n${item}`}>
        {item}
      </span>
      : <TailBall key={`n${item}`}
        n={item} />);

    console.log(lotto)
    setLottoTag(lotto)
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className="flex justify-center items-center my-10 h-10">
        {lottoTag}
      </div>

      <div className='mt-20'>
        <TailButton caption="로또번호생성" color="slate" onHandle={handelClick} />
      </div>
    </div>
  )
}

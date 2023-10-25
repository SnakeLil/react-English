import React from 'react'
import './wordBox.scss'
export default function WordBox({doubleWord,word,mean}) {
    const boxClass = doubleWord?'doubleBox':'box'
  return (
        <div className={boxClass}>
        <h1>{word}</h1>
        <h2>{mean}</h2>
        <a href={'https://fanyi.baidu.com/#zh/en/'+word}>more</a>
      </div>

  )
}

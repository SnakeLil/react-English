import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.scss'
import WordBox from '../wordBox/WordBox.jsx'
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import md5 from 'js-md5'
import { wordRequest } from '../../axios.js'
export default function Home() {
  const [doubleWord, setDoubleWord] = useState(false)
  const [request, setRequest] = useState(false)
  const [rotating, setRotating] = useState(false)

  const [word, setWord] = useState('')
  const [word1, setWord1] = useState('')
  const [mean, setMean] = useState('')
  const [mean1, setMean1] = useState('')
  const sign = md5('20231011001843810' + word + '1697006358111' + 'e6LP7XJ60vf2diHime6z')
  const getWord = async()=>{
    if (rotating) {
      return
    }
    //没有正在刷新，开启新的刷新并获取数据
    setRotating(true)
    if (!doubleWord) {
      // 请求随机一个单词的情况
      try {
        const res = await wordRequest.get('/randomWord')
        setWord(res.data.word)  //将当前显示单词更新为获取到的单词
        setMean(res.data.Interpretation)  //将当前显示单词的意思更新为获取到的单词释义
        setRequest(false)
        setRotating(false)
      } catch (err) {
        console.log(err)
        setRequest(true)
      }
    } else {
      // 请求两个单词的情况
      try {
        const res = await wordRequest.get('/randomWord')
        const res1 = await wordRequest.get('/randomWord')
        setWord1(res.data.word)  //将当前显示单词更新为获取到的单词
        setMean1(res.data.Interpretation)  //将当前显示单词的意思更新为获取到的单词释义
        setWord(res1.data.word)  //将当前显示单词更新为获取到的单词
        setMean(res1.data.Interpretation)  //将当前显示单词的意思更新为获取到的单词释义
        setRequest(false)
        setRotating(false)
      } catch (err) {
        console.log(err)
        setRequest(true)
      }
    }
  }
  const refreshHandler = async () => {
    getWord()
  }
  useEffect(() => {
    setRotating(true)
    //页面第一次加载时显示第一个随机单词
    wordRequest.get('randomWord').then(res => {
      setRotating(false)
      setMean(res.data.Interpretation)
      setWord(res.data.word)
    }).catch(err => console.log(err))
    //获取到随机单词后，word发生变化，发送请求，向百度，请求更详细的翻译

  }, [])

  // 百度api（暂时不用，通用文档翻译返回的只有一个释义，没什么意义）
  const getWordMean = () => {
    axios.get(`http://localhost:8800/api/word?q=${word}&from=en&to=zh&appid=20231011001843810&salt=1697006358111&sign=${sign}`,
      {})
      .then(res => {
        console.log(res?.data?.trans_result[0])
      }).catch(err => {
        console.log(err)
      })

  }


  const switchHandler = () => {
    setDoubleWord(pre => !pre)
  }
  return (
    <div className='home'>
      {request ?
        <h2>request</h2>
        :
        <>
          <WordBox doubleWord={doubleWord} word={word} mean={mean} />

          {doubleWord ?
            <WordBox doubleWord={doubleWord} word={word1} mean={mean1} />
            : null
          }
        </>
      }
      <div className='switch'>
        <span onClick={refreshHandler}>
          <LoopRoundedIcon className={rotating ? 'refresh' : ''} />
        </span>
        <span onClick={switchHandler} className='double'>
          {
            !rotating ?
              doubleWord ?
                <KeyboardReturnRoundedIcon />
                : <SwapHorizRoundedIcon />
              : null
          }
        </span>
      </div>
    </div>
  )
}
